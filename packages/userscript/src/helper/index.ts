/* eslint-disable @typescript-eslint/no-unsafe-return */
// import raxios from 'axios';
// import type { AxiosAdapter } from 'axios';
// import axiosGmxhrAdapter from 'axios-userscript-adapter';

// export const axios = raxios.create({
//   adapter: axiosGmxhrAdapter as AxiosAdapter,
//   timeout: 10 * 1000,
// });

/**
 * 对 document.querySelector 的封装
 * 将默认返回类型改为 HTMLElement
 *
 * @param selector
 */
export const querySelector = <T extends HTMLElement = HTMLElement>(
  selector: string,
) => document.querySelector<T>(selector);

/**
 * 判断两个列表值是否相同
 *
 * @param a
 * @param b
 */
export const isEqualArray = <T>(a: T[], b: T[]): boolean =>
  a.length === b.length && !!a.filter((t) => !b.includes(t));

/**
 * 添加元素
 *
 * @param textnode 添加元素
 * @param node 被添加元素
 * @param referenceNode 参考元素，添加元素将插在参考元素前
 */
export const insertDom = (
  textnode: string,
  node: HTMLElement = document.body,
  referenceNode: HTMLElement | null = null,
) => {
  const temp = document.createElement('div');
  temp.innerHTML = textnode;
  const frag = document.createDocumentFragment();
  while (temp.firstChild) frag.appendChild(temp.firstChild);
  node.insertBefore(frag, referenceNode);
};

/**
 *
 * @param name 站点名
 * @param defaultValue 默认值
 * @param onChange 发生变更时的回调
 */
export const useSiteOptions = async <T extends Record<string, unknown>>(
  name: string,
  defaultValue: T,
  // TODO: 重构为数组
  onChange?: (options: T) => Promise<void>,
) => {
  const rawValue = await GM.getValue<T | undefined>(name);
  let options = rawValue ?? defaultValue;

  return {
    options,
    setOptions: async (newValue: T) => {
      options = newValue;
      await GM.setValue(name, options);
      await onChange?.(options);
    },
    /** 该站点是否有储存配置 */
    isRecorded: rawValue !== undefined,
  };
};
