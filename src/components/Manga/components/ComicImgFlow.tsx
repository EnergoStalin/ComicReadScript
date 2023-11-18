import type { Component } from 'solid-js';
import { Index, onCleanup, onMount } from 'solid-js';

import { boolDataVal } from 'helper';
import { setState, store } from '../hooks/useStore';
import {
  bindRef,
  handleClick,
  updateRenderPage,
  handlePinchZoom,
  handleZoomDrag,
  handleMangaFlowDrag,
  touches,
  handleObserver,
  updateDrag,
} from '../hooks/useStore/slice';
import { useHiddenMouse } from '../hooks/useHiddenMouse';
import type { UseDrag } from '../hooks/useDrag';
import { useDrag } from '../hooks/useDrag';
import { ComicPage } from './ComicPage';

import classes from '../index.module.css';

export const ComicImgFlow: Component = () => {
  const { hiddenMouse, onMouseMove } = useHiddenMouse();

  const handleDrag: UseDrag = (state, e) => {
    if (store.gridMode) return;
    if (touches.size > 1) return handlePinchZoom(state, e);
    if (store.zoom.scale !== 100) return handleZoomDrag(state, e);
    if (!store.option.scrollMode) return handleMangaFlowDrag(state, e);
  };

  onMount(() => {
    useDrag({ ref: store.ref.mangaFlow, handleDrag, handleClick, touches });
    setState((state) => {
      state.observer = new IntersectionObserver(handleObserver, {
        root: store.ref.mangaFlow,
        threshold: 0.01,
      });
    });
    onCleanup(() => {
      setState((state) => {
        state.observer?.disconnect();
        state.observer = null;
      });
    });
  });

  const handleTransitionEnd = () => {
    if (store.dragMode) return;
    setState((state) => {
      if (store.zoom.scale === 100) updateRenderPage(state, true);
      else state.page.anima = '';
    });
  };

  const pageX = () => {
    const x = `calc(${store.page.offset.x.pct}% + ${store.page.offset.x.px}px)`;
    return store.option.dir === 'rtl' ? x : `calc(${x} * -1)`;
  };

  return (
    <div
      id={classes.mangaFlow}
      ref={bindRef('mangaFlow')}
      dir={store.option.dir}
      class={`${classes.mangaFlow} ${classes.beautifyScrollbar}`}
      data-scroll-mode={boolDataVal(!store.gridMode && store.option.scrollMode)}
      data-disable-zoom={boolDataVal(
        store.option.disableZoom || store.option.scrollMode,
      )}
      data-grid-mode={boolDataVal(store.gridMode)}
      data-scale-mode={boolDataVal(store.zoom.scale !== 100)}
      data-vertical={boolDataVal(store.page.vertical)}
      data-animation={store.page.anima}
      data-hidden-mouse={!store.gridMode && hiddenMouse()}
      on:mousemove={onMouseMove}
      onTransitionEnd={handleTransitionEnd}
      onScroll={() => setState(updateDrag)}
      style={{
        '--scale': store.zoom.scale / 100,
        '--zoom-x': `${store.zoom.offset.x || 0}px`,
        '--zoom-y': `${store.zoom.offset.y || 0}px`,
        '--page-x': pageX(),
        '--page-y': `calc(${store.page.offset.y.pct}% + ${store.page.offset.y.px}px)`,
      }}
      tabIndex={-1}
    >
      <Index each={store.pageList} fallback={<h1>NULL</h1>}>
        {(page, i) => <ComicPage page={page()} index={i} />}
      </Index>
    </div>
  );
};
