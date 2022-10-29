import type { RefObject } from 'react';
import { useRef, useEffect } from 'react';

export interface UseDragState {
  /** 事件类型 */
  type: 'start' | 'dragging' | 'end';
  /** 触发时的 xy 位置 */
  xy: [number, number];
  /** 手势开始时的 xy 位置 */
  initial: [number, number];
  /** 手势开始时间 */
  startTime: number;
}

export interface UseDragOption {
  handleDrag: (state: UseDragState, e: MouseEvent) => void;
}

const defaultStata = (): UseDragState => ({
  type: 'start',
  xy: [0, 0],
  initial: [0, 0],
  startTime: 0,
});
export const useDrag = (ref: RefObject<HTMLElement>, option: UseDragOption) => {
  const { current: state } = useRef<UseDragState>(defaultStata());

  // TODO: 完成触摸事件的适配

  useEffect(() => {
    const { handleDrag } = option;

    const controller = new AbortController();
    if (ref.current) {
      // 在鼠标、手指按下后切换状态
      ref.current.addEventListener(
        'mousedown',
        (e) => {
          e.stopPropagation();
          // 只处理左键按下触发的事件
          if (e.buttons !== 1) return;

          state.type = 'start';
          state.xy = [e.offsetX, e.offsetY];
          state.initial = [e.offsetX, e.offsetY];
          state.startTime = Date.now();
          handleDrag(state, e);
        },
        { capture: false, passive: true, signal: controller.signal },
      );

      // ref.current.addEventListener(
      //   'touchstart',
      //   (e) => {
      //     down.current = true;
      //     handleDrag(e., e.offsetY);
      //   },
      //   { capture: false, passive: true, signal: controller.signal },
      // );

      // 在鼠标、手指移动时根据状态判断是否要触发函数
      ref.current.addEventListener(
        'mousemove',
        (e) => {
          e.stopPropagation();
          if (state.startTime === 0) return;
          // 只处理左键按下触发的事件
          if (e.buttons !== 1) return;

          state.type = 'dragging';
          state.xy = [e.offsetX, e.offsetY];
          handleDrag(state, e);
        },
        { capture: false, passive: true, signal: controller.signal },
      );

      // 在鼠标、手指松开后切换状态
      ref.current.addEventListener(
        'mouseup',
        (e) => {
          e.stopPropagation();
          if (state.startTime === 0) return;

          state.type = 'end';
          state.xy = [e.offsetX, e.offsetY];
          handleDrag(state, e);
          Object.assign(state, defaultStata());
        },
        { capture: false, passive: true, signal: controller.signal },
      );
    }

    return () => controller.abort();
  }, [option, ref, state]);
};
