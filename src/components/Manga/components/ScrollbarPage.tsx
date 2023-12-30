import type { Component } from 'solid-js';
import { createMemo } from 'solid-js';

import { store } from '../store';
import { contentHeight, placeholderSize } from '../actions';
import { boolDataVal } from '../../../helper';

import classes from '../index.module.css';

/** 显示对应图片加载情况的元素 */
const ScrollbarImg: Component<{ index: number }> = (props) => {
  const img = createMemo(() => store.imgList[props.index]);

  return (
    <div
      class={classes.scrollbarPage}
      data-index={props.index}
      data-type={img()?.loadType}
      data-null={boolDataVal(!img()?.src)}
      data-translation-type={img()?.translationType}
    />
  );
};

/** 滚动条上用于显示对应页面下图片加载情况的元素 */
export const ScrollbarPage: Component<{ a: number; b?: number }> = (props) => {
  const flexBasis = createMemo(() => {
    if (!store.option.scrollMode) return undefined;
    return `${
      ((store.imgList[props.a]?.height || placeholderSize().height) /
        contentHeight()) *
      store.option.scrollModeImgScale
    }%`;
  });

  return (
    <div style={{ 'flex-basis': flexBasis() }}>
      <ScrollbarImg index={props.a !== -1 ? props.a : props.b!} />
      {props.b ? (
        <ScrollbarImg index={props.b !== -1 ? props.b : props.a} />
      ) : null}
    </div>
  );
};
