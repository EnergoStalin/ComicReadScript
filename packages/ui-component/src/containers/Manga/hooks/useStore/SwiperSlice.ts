import type { Draft } from 'immer/dist/internal';
import type { PanZoom, PanZoomOptions } from 'panzoom';
import createPanZoom from 'panzoom';
import type { SwiperOptions } from 'swiper';
import Swiper, { Scrollbar, Mousewheel } from 'swiper';
import classes from '../../index.module.css';
import type { SelfStateCreator } from '.';

Swiper.use([Scrollbar, Mousewheel]);

/** Swiper Option */
const defaultSwiperOption: SwiperOptions = {
  // 加载所有图片后才初始化
  preloadImages: false,
  // 自动 update
  observer: true,
  // 垂直滚动
  direction: 'vertical',
  // 默认禁用 swiper 的鼠标滚轮
  mousewheel: false,
  // 使用 ResizeObserver API 以提升性能
  resizeObserver: true,

  wrapperClass: classes.wrapper,
  slideClass: classes.mangaFlowPage,

  // 没什么意义，就是把 swiper 默认的 className 改短点
  containerModifierClass: '',
  slideActiveClass: 'active',
  slideNextClass: 'next',
  slidePrevClass: 'prev',
};

/**
 * panzoom Option
 */
const panzoomOption: PanZoomOptions = {
  // 禁用键盘
  disableKeyboardInteraction: true,

  // 边界限制
  bounds: true,
  boundsPadding: 1,
  // 禁止缩小
  minZoom: 1,
  // 禁用默认的双击缩放
  zoomDoubleClickSpeed: 1,
};

export interface SwiperSlice {
  swiper?: Draft<Swiper>;
  panzoom?: Draft<PanZoom>;

  initSwiper: (
    swiperOption?: SwiperOptions,
  ) => [SwiperSlice['swiper'], SwiperSlice['panzoom']];

  pageTurn: (isNext: boolean) => void;

  [key: string]: unknown;
}

export const swiperSlice: SelfStateCreator<SwiperSlice> = (set, get) => ({
  swiper: undefined as unknown as Draft<Swiper>,

  panzoom: undefined as unknown as Draft<PanZoom>,

  initSwiper: (swiperOption?: SwiperOptions) => {
    const { rootRef, swiper: _swiper, panzoom: _panzoom } = get();

    const mangaFlowDom = rootRef?.current?.querySelector<HTMLElement>(
      `.${classes.mangaFlow}`,
    );
    const scrollbarDom = rootRef?.current?.querySelector<HTMLElement>(
      `.${classes.scrollbar}`,
    );
    if (!mangaFlowDom || !scrollbarDom) {
      console.warn('Dom 还未渲染');
      return [undefined, undefined];
    }

    // 销毁之前可能创建过的实例
    _swiper?.destroy();
    _panzoom?.dispose();

    // 初始化 swiper
    const swiper = new Swiper(mangaFlowDom, {
      ...defaultSwiperOption,
      ...swiperOption,
    });

    swiper.on('activeIndexChange', () => {
      set((state) => {
        if (state.swiper === undefined) return;

        // 在每次 activeIndexChange 时计算 activeImgIndex
        state.activeImgIndex = state.slideData[state.swiper.activeIndex].find(
          (img) => img.type !== 'fill',
        )!.index;

        // 找到当前所属的 fillEffect
        let nowFillIndex = state.activeImgIndex;
        while (!state.fillEffect.has(nowFillIndex) && (nowFillIndex -= 1));
        state.nowFillIndex = nowFillIndex;

        if (state.showEndPage) state.showEndPage = false;
      });
    });

    // 初始化 panzoom
    const panzoom = createPanZoom(mangaFlowDom, {
      beforeWheel(e) {
        const { scale } = panzoom.getTransform();
        // 图片不处于放大状态时，必须按下 Alt 键才能通过滚轮缩放
        if (e.altKey && scale === 1) return false;
        // 图片处于放大状态时，可以直接通过滚轮缩放
        if (scale !== 1) return false;
        return true;
      },
      beforeMouseDown(e) {
        // 按下「alt 键」或「处于放大状态」时才允许拖动
        return !(e.altKey || panzoom.getTransform().scale !== 1);
      },

      ...panzoomOption,
    });

    // 处于放大状态时禁止 swiper
    panzoom.on('transform', (e: PanZoom) => {
      if (e.getTransform().scale === 1) {
        swiper.allowTouchMove = true;
      } else if (swiper.allowTouchMove) {
        swiper.allowTouchMove = false;
      }
    });

    // 防止移动端上的滑动页面操作被 panzoom 捕捉处理
    swiper.on('touchStart', (_, event) => {
      if (
        'touches' in event &&
        event.touches.length === 1 &&
        panzoom.getTransform().scale === 1
      )
        event.stopPropagation();
    });

    return [swiper as Draft<Swiper>, panzoom as Draft<PanZoom>];
  },

  pageTurn: (isNext) => {
    const { swiper, slideData, showEndPage } = get();
    if (swiper === undefined) return;

    // 在最后一页继续向后翻页时弹出结束页
    if (isNext) {
      if (swiper.activeIndex !== slideData.length - 1) swiper.slideNext(0);
      else {
        set((state) => {
          state.showEndPage = true;
        });
      }
      return;
    }

    // 向前翻页时如果当前正在显示结束页，则关闭结束页但不翻页
    if (showEndPage) {
      set((state) => {
        state.showEndPage = false;
      });
    } else swiper.slidePrev(0);
  },
});
