import { createRootMemo, createThrottleMemo } from 'helper/solidJs';

import { store } from '../../store';
import { findFillIndex } from '../../handleComicData';

import { rootSize } from './observer';

/** 是否为单页模式 */
export const isOnePageMode = createRootMemo(
  () =>
    store.option.onePageMode ||
    store.option.scrollMode ||
    store.isMobile ||
    store.imgList.length <= 1,
);

/** 当前显示页面 */
export const activePage = createRootMemo(
  () => store.pageList[store.activePageIndex] ?? [],
);

/** 当前显示的第一张图片的 index */
export const activeImgIndex = createRootMemo(
  () => activePage().find((i) => i !== -1) ?? 0,
);

/** 当前所处的图片流 */
export const nowFillIndex = createRootMemo(() =>
  findFillIndex(activeImgIndex(), store.fillEffect),
);

/** 预加载页数 */
export const preloadNum = createRootMemo(() => ({
  back: store.option.preloadPageNum,
  front: Math.floor(store.option.preloadPageNum / 2),
}));

/** 默认图片类型 */
export const defaultImgType = createRootMemo<ComicImg['type']>(() => {
  if (store.flag.autoWide) return 'wide';
  if (store.flag.autoScrollMode) return 'vertical';
  return '';
});

/** 获取图片列表中指定属性的中位数 */
const getImgMedian = (sizeFn: (value: ComicImg) => number) => {
  const list = store.imgList
    .filter((img) => img.loadType === 'loaded' && img.width)
    .map(sizeFn)
    .sort((a, b) => a - b);
  if (list.length === 0) return null;
  return list[Math.floor(list.length / 2)];
};

/** 图片占位尺寸 */
export const placeholderSize = createThrottleMemo(
  () => ({
    width: getImgMedian((img) => img.width!) ?? 800,
    height: getImgMedian((img) => img.height!) ?? 1200,
  }),
  500,
);

/** 每张图片的高度 */
export const imgHeightList = createRootMemo(() =>
  store.option.scrollMode
    ? store.imgList.map((img) => {
        let height = img.height ?? placeholderSize().height;
        const width = img.width ?? placeholderSize().width;
        if (store.option.scrollModeFitToWidth)
          return height * (rootSize().width / width);
        if (width > rootSize().width) height *= rootSize().width / width;
        return height * store.option.scrollModeImgScale;
      })
    : [],
);

/** 卷轴模式下每张图片的位置 */
export const imgTopList = createRootMemo(() => {
  if (!store.option.scrollMode) return [];

  const list = Array.from<number>({ length: imgHeightList().length });
  let top = 0;
  for (let i = 0; i < imgHeightList().length; i++) {
    list[i] = top;
    top += imgHeightList()[i] + store.option.scrollModeSpacing * 7;
  }

  return list;
});

/** 漫画流的总高度 */
export const contentHeight = createRootMemo(
  () => (imgTopList().at(-1) ?? 0) + (imgHeightList().at(-1) ?? 0),
);
