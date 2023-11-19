export const ShowState = {
  /** 当前设备是否是移动端 */
  isMobile: false,
  /** 是否处于拖拽模式 */
  isDragMode: false,

  /** 当前页数 */
  activePageIndex: 0,

  /** 网格模式 */
  gridMode: false,

  /** 滚动条 */
  scrollbar: {
    /** 滚动条高度比率 */
    dragHeight: 0,
    /** 滚动条所处高度比率 */
    dragTop: 0,
  },

  show: {
    /** 是否强制显示工具栏 */
    toolbar: false,
    /** 是否强制显示滚动条 */
    scrollbar: false,
    /** 是否显示点击区域 */
    touchArea: false,
    /** 结束页状态 */
    endPage: undefined as undefined | 'start' | 'end',
  },

  page: {
    /** 动画效果 */
    anima: '' as '' | 'zoom' | 'page',
    /** 竖向排列 */
    vertical: false,

    /** 正常显示页面所需的偏移量 */
    offset: {
      x: { pct: 0, px: 0 },
      y: { pct: 0, px: 0 },
    },
  },

  zoom: {
    /** 缩放大小 */
    scale: 100,
    /** 确保缩放前后基准点不变所需的偏移量 */
    offset: { x: 0, y: 0 },
  },
};
