// ==UserScript==
// @name            ComicRead
// @namespace       ComicRead
// @version         9.7.4
// @description     为漫画站增加双页阅读、翻译等优化体验的增强功能。百合会（记录阅读历史、自动签到等）、百合会新站、动漫之家（解锁隐藏漫画）、E-Hentai（关联 nhentai、快捷收藏、标签染色、识别广告页等）、nhentai（彻底屏蔽漫画、无限滚动）、Yurifans（自动签到）、拷贝漫画(copymanga)（显示最后阅读记录）、PonpomuYuri、明日方舟泰拉记事社、禁漫天堂、漫画柜(manhuagui)、漫画DB(manhuadb)、动漫屋(dm5)、绅士漫画(wnacg)、mangabz、komiic、无限动漫、新新漫画、hitomi、koharu、kemono、nekohouse、welovemanga
// @description:en  Add enhanced features to the comic site for optimized experience, including dual-page reading and translation. E-Hentai (Associate nhentai, Quick favorite, Colorize tags, Floating tag list, etc.) | nhentai (Totally block comics, Auto page turning) | hitomi | Anchira | kemono | nekohouse | welovemanga.
// @description:ru  Добавляет расширенные функции для удобства на сайт, такие как двухстраничный режим и перевод.
// @author          hymbz
// @license         AGPL-3.0-or-later
// @noframes
// @match           *://bbs.yamibo.com/*
// @match           *://www.yamibo.com/*
// @match           *://comic.idmzj.com/*
// @match           *://comic.dmzj.com/*
// @match           *://manhua.idmzj.com/*
// @match           *://manhua.dmzj.com/*
// @match           *://m.idmzj.com/*
// @match           *://m.dmzj.com/*
// @match           *://www.idmzj.com/*
// @match           *://www.dmzj.com/*
// @match           *://exhentai.org/*
// @match           *://e-hentai.org/*
// @match           *://nhentai.net/*
// @match           *://yuri.website/*
// @match           *://mangacopy.com/*
// @match           *://copymanga.site/*
// @match           *://copymanga.info/*
// @match           *://copymanga.net/*
// @match           *://copymanga.org/*
// @match           *://copymanga.tv/*
// @match           *://copymanga.com/*
// @match           *://www.mangacopy.com/*
// @match           *://www.copymanga.site/*
// @match           *://www.copymanga.info/*
// @match           *://www.copymanga.net/*
// @match           *://www.copymanga.org/*
// @match           *://www.copymanga.tv/*
// @match           *://www.copymanga.com/*
// @match           *://www.ponpomu.com/*
// @match           *://terra-historicus.hypergryph.com/*
// @match           *://18comic.org/*
// @match           *://18comic.vip/*
// @match           *://tw.manhuagui.com/*
// @match           *://m.manhuagui.com/*
// @match           *://www.mhgui.com/*
// @match           *://www.manhuagui.com/*
// @match           *://www.manhuadb.com/*
// @match           *://www.manhuaren.com/*
// @match           *://m.1kkk.com/*
// @match           *://www.1kkk.com/*
// @match           *://tel.dm5.com/*
// @match           *://en.dm5.com/*
// @match           *://www.dm5.cn/*
// @match           *://www.dm5.com/*
// @match           *://www.wnacg.com/*
// @match           *://wnacg.com/*
// @match           *://www.mangabz.com/*
// @match           *://mangabz.com/*
// @match           *://komiic.com/*
// @match           *://8.twobili.com/*
// @match           *://a.twobili.com/*
// @match           *://www.comicabc.com/*
// @match           *://m.77mh.me/*
// @match           *://www.77mh.me/*
// @match           *://m.77mh.xyz/*
// @match           *://www.77mh.xyz/*
// @match           *://m.77mh.nl/*
// @match           *://www.77mh.nl/*
// @match           *://hitomi.la/*
// @match           *://koharu.to/*
// @match           *://kemono.su/*
// @match           *://kemono.party/*
// @match           *://nekohouse.su/*
// @match           *://nicomanga.com/*
// @match           *://weloma.art/*
// @match           *://welovemanga.one/*
// @match           *://comic-read.pages.dev/*
// @connect         yamibo.com
// @connect         dmzj.com
// @connect         idmzj.com
// @connect         exhentai.org
// @connect         e-hentai.org
// @connect         hath.network
// @connect         nhentai.net
// @connect         hypergryph.com
// @connect         mangabz.com
// @connect         copymanga.site
// @connect         copymanga.info
// @connect         copymanga.net
// @connect         copymanga.org
// @connect         copymanga.tv
// @connect         mangacopy.com
// @connect         xsskc.com
// @connect         self
// @connect         127.0.0.1
// @connect         *
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_addElement
// @grant           GM_getResourceText
// @grant           GM_addStyle
// @grant           GM_xmlhttpRequest
// @grant           GM.addValueChangeListener
// @grant           GM.removeValueChangeListener
// @grant           GM.getResourceText
// @grant           GM.getValue
// @grant           GM.setValue
// @grant           GM.listValues
// @grant           GM.deleteValue
// @grant           unsafeWindow
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURUxpcWB9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i////198il17idng49DY3PT297/K0MTP1M3X27rHzaCxupmstbTByK69xOfr7bfFy3WOmqi4wPz9/X+XomSBjqW1vZOmsN/l6GmFkomeqe7x8vn6+kv+1vUAAAAOdFJOUwDsAoYli9zV+lIqAZEDwV05SQAAAUZJREFUOMuFk+eWgjAUhGPBiLohjZACUqTp+z/gJkqJy4rzg3Nn+MjhwB0AANjv4BEtdITBHjhtQ4g+CIZbC4Qb9FGb0J4P0YrgCezQqgIA14EDGN8fYz+f3BGMASFkTJ+GDAYMUSONzrFL7SVvjNQIz4B9VERRmV0rbJWbrIwidnsd6ACMlEoip3uad3X2HJmqb3gCkkJELwk5DExRDxA6HnKaDEPSsBnAsZoANgJaoAkg12IJqBiPACImXQKF9IDULIHUkOk7kDpeAMykHqCEWACy8ACdSM7LGSg5F3HtAU1rrkaK9uGAshXS2lZ5QH/nVhmlD8rKlmbO3ZsZwLe8qnpdxJRnLaci1X1V5R32fjd5CndVkfYdGpy3D+htU952C/ypzPtdt3JflzZYBy7fi/O1euvl/XH1Pp+Cw3/1P1xOZwB+AWMcP/iw0AlKAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC
// @resource        solid-js https://cdn.jsdelivr.net/npm/solid-js@1.8.19/dist/solid.cjs
// @resource        fflate https://cdn.jsdelivr.net/npm/fflate@0.8.2/umd/index.js
// @resource        qr-scanner https://cdn.jsdelivr.net/npm/qr-scanner@1.4.2/qr-scanner.legacy.min.js
// @resource        dmzjDecrypt https://greasyfork.org/scripts/467177/code/dmzjDecrypt.js?version=1207199
// @resource        solid-js|store https://cdn.jsdelivr.net/npm/solid-js@1.8.19/store/dist/store.cjs
// @resource        solid-js|web https://cdn.jsdelivr.net/npm/solid-js@1.8.19/web/dist/web.cjs
// @supportURL      https://github.com/hymbz/ComicReadScript/issues
// @updateURL       https://github.com/hymbz/ComicReadScript/raw/master/ComicRead-AdGuard.user.js
// @downloadURL     https://github.com/hymbz/ComicReadScript/raw/master/ComicRead-AdGuard.user.js
// ==/UserScript==


const gmApi = {
  GM,
  GM_addElement: typeof GM_addElement === 'undefined' ? undefined : GM_addElement,
  GM_getResourceText,
  GM_xmlhttpRequest,
  GM_addStyle,
  unsafeWindow
};
const gmApiList = Object.keys(gmApi);
const crsLib = {
  // 有些 cjs 模块会检查这个，所以在这里声明下
  process: {
    env: {
      NODE_ENV: 'production'
    }
  },
  ...gmApi
};
const tempName = Math.random().toString(36).slice(2);
const evalCode = code => {
  // 因为部分网站会对 eval 进行限制，比如推特（CSP）、hitomi（代理 window.eval 进行拦截）
  // 所以优先使用最通用的 GM_addElement 来加载
  if (gmApi.GM_addElement) return GM_addElement('script', {
    textContent: code
  })?.remove();

  // eslint-disable-next-line no-eval
  eval.call(unsafeWindow, code);
};

/**
 * 通过 Resource 导入外部模块
 * @param name \@resource 引用的资源名
 */
const selfImportSync = name => {
  let code;

  // 为了方便打包、减少在无关站点上的运行损耗、顺带隔离下作用域
  // 除站点逻辑外的代码会作为字符串存着，要用时再像外部模块一样导入
  switch (name) {
    case 'helper':
      code =`
const solidJs = require('solid-js');
const web = require('solid-js/web');
const helper = require('helper');
const store = require('solid-js/store');

// src/index.ts
var debounce$1 = (callback, wait) => {
  if (web.isServer) {
    return Object.assign(() => void 0, { clear: () => void 0 });
  }
  let timeoutId;
  const clear = () => clearTimeout(timeoutId);
  if (solidJs.getOwner())
    solidJs.onCleanup(clear);
  const debounced = (...args) => {
    if (timeoutId !== void 0)
      clear();
    timeoutId = setTimeout(() => callback(...args), wait);
  };
  return Object.assign(debounced, { clear });
};
var throttle$1 = (callback, wait) => {
  if (web.isServer) {
    return Object.assign(() => void 0, { clear: () => void 0 });
  }
  let isThrottled = false, timeoutId, lastArgs;
  const throttled = (...args) => {
    lastArgs = args;
    if (isThrottled)
      return;
    isThrottled = true;
    timeoutId = setTimeout(() => {
      callback(...lastArgs);
      isThrottled = false;
    }, wait);
  };
  const clear = () => {
    clearTimeout(timeoutId);
    isThrottled = false;
  };
  if (solidJs.getOwner())
    solidJs.onCleanup(clear);
  return Object.assign(throttled, { clear });
};
function leadingAndTrailing(schedule, callback, wait) {
  if (web.isServer) {
    let called = false;
    const scheduled2 = (...args) => {
      if (called)
        return;
      called = true;
      callback(...args);
    };
    return Object.assign(scheduled2, { clear: () => void 0 });
  }
  let State;
  ((State2) => {
    State2[State2["Ready"] = 0] = "Ready";
    State2[State2["Leading"] = 1] = "Leading";
    State2[State2["Trailing"] = 2] = "Trailing";
  })(State || (State = {}));
  let state = 0 /* Ready */;
  const scheduled = schedule((args) => {
    state === 2 /* Trailing */ && callback(...args);
    state = 0 /* Ready */;
  }, wait);
  const fn = (...args) => {
    if (state !== 2 /* Trailing */) {
      if (state === 0 /* Ready */)
        callback(...args);
      state += 1;
    }
    scheduled(args);
  };
  const clear = () => {
    state = 0 /* Ready */;
    scheduled.clear();
  };
  if (solidJs.getOwner())
    solidJs.onCleanup(clear);
  return Object.assign(fn, { clear });
}
function createScheduled(schedule) {
  let listeners = 0;
  let isDirty = false;
  const [track, dirty] = solidJs.createSignal(void 0, { equals: false });
  const call = schedule(() => {
    isDirty = true;
    dirty();
  });
  return () => {
    if (!isDirty)
      call(), track();
    if (isDirty) {
      isDirty = !!listeners;
      return true;
    }
    if (solidJs.getListener()) {
      listeners++;
      solidJs.onCleanup(() => listeners--);
    }
    return false;
  };
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var es6 = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

const isEqual = /*@__PURE__*/getDefaultExportFromCjs(es6);

const throttle = (fn, wait = 100) => leadingAndTrailing(throttle$1, fn, wait);
const debounce = (fn, wait = 100) => debounce$1(fn, wait);
const sleep = ms => new Promise(resolve => {
  window.setTimeout(resolve, ms);
});
const clamp = (min, val, max) => Math.max(Math.min(max, val), min);
const inRange = (min, val, max) => val >= min && val <= max;

/** 判断两个数是否在指定误差范围内相等 */
const approx = (val, target, range) => Math.abs(target - val) <= range;

/**
 * 对 document.querySelector 的封装
 * 将默认返回类型改为 HTMLElement
 */
const querySelector = selector => document.querySelector(selector);

/**
 * 对 document.querySelector 的封装
 * 将默认返回类型改为 HTMLElement
 */
const querySelectorAll = selector => [...document.querySelectorAll(selector)];

/** 返回 Dom 的点击函数 */
const querySelectorClick = (selector, textContent) => {
  let getDom;
  if (typeof selector === 'function') getDom = selector;else if (textContent) {
    getDom = () => querySelectorAll(selector).find(e => e.textContent?.includes(textContent));
  } else getDom = () => querySelector(selector);
  if (getDom()) return () => getDom()?.click();
};

/** 找出数组中出现最多次的元素 */
const getMostItem = list => {
  const counts = new Map();
  for (const val of list) counts.set(val, (counts.get(val) ?? 0) + 1);

  // eslint-disable-next-line unicorn/no-array-reduce
  return [...counts.entries()].reduce((maxItem, item) => maxItem[1] > item[1] ? maxItem : item)[0];
};

/** 创建顺序数组 */
const createSequence = length => [...Array.from({
  length
}).keys()];

/** 判断字符串是否为 URL */
const isUrl = text => {
  // 等浏览器版本上来后可以直接使用 URL.canParse
  try {
    return Boolean(new URL(text));
  } catch {
    return false;
  }
};

/** 将 blob 数据作为文件保存至本地 */
const saveAs = (blob, name = 'download') => {
  const a = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
  a.download = name;
  a.rel = 'noopener';
  a.href = URL.createObjectURL(blob);
  setTimeout(() => a.dispatchEvent(new MouseEvent('click')));
};

/** 滚动页面到指定元素的所在位置 */
const scrollIntoView = (selector, behavior = 'instant') => querySelector(selector)?.scrollIntoView({
  behavior
});

/** 使指定函数延迟运行期间的多次调用直到运行结束 */
const singleThreaded = (callback, defaultContinueRun = true) => {
  const state = {
    running: false,
    continueRun: false
  };
  const fn = async (...args) => {
    if (state.continueRun) return;
    if (state.running) {
      state.continueRun = defaultContinueRun;
      return;
    }
    let res;
    try {
      state.running = true;
      res = await callback(state, ...args);
    } catch (error) {
      state.continueRun = false;
      await sleep(100);
      throw error;
    } finally {
      state.running = false;
    }
    if (state.continueRun) {
      state.continueRun = false;
      setTimeout(fn, 0, ...args);
    } else state.running = false;
    return res;
  };
  return fn;
};

/**
 * 限制 Promise 并发
 * @param fnList 任务函数列表
 * @param callBack 成功执行一个 Promise 后调用，主要用于显示进度
 * @param limit 限制数
 * @returns 所有 Promise 的返回值
 */
const plimit = async (fnList, callBack = undefined, limit = 10) => {
  let doneNum = 0;
  const totalNum = fnList.length;
  const resList = [];
  const execPool = new Set();
  const taskList = fnList.map((fn, i) => {
    let p;
    return () => {
      p = (async () => {
        resList[i] = await fn();
        doneNum += 1;
        execPool.delete(p);
        callBack?.(doneNum, totalNum, resList, i);
      })();
      execPool.add(p);
    };
  });

  // eslint-disable-next-line no-unmodified-loop-condition
  while (doneNum !== totalNum) {
    while (taskList.length > 0 && execPool.size < limit) taskList.shift()();
    await Promise.race(execPool);
  }
  return resList;
};

/**
 * 判断使用参数颜色作为默认值时是否需要切换为黑暗模式
 * @param hexColor 十六进制颜色。例如 #112233
 */
const needDarkMode = hexColor => {
  // by: https://24ways.org/2010/calculating-color-contrast
  const r = Number.parseInt(hexColor.slice(1, 3), 16);
  const g = Number.parseInt(hexColor.slice(3, 5), 16);
  const b = Number.parseInt(hexColor.slice(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq < 128;
};

async function wait(fn, timeout = Number.POSITIVE_INFINITY) {
  let res = await fn();
  let _timeout = timeout;
  while (_timeout > 0 && !res) {
    await sleep(100);
    _timeout -= 10;
    res = await fn();
  }
  return res;
}

/** 等到指定的 dom 出现 */
const waitDom = selector => wait(() => querySelector(selector));

/** 等待指定的图片元素加载完成 */
const waitImgLoad = (target, timeout) => new Promise((resolve, reject) => {
  const img = typeof target === 'string' ? new Image() : target;
  const id = timeout ? window.setTimeout(() => reject(new Error('timeout')), timeout) : undefined;
  const handleError = e => {
    window.clearTimeout(id);
    reject(new Error(e.message));
  };
  const handleLoad = () => {
    window.clearTimeout(id);
    img.removeEventListener('error', handleError);
    resolve(img);
  };
  img.addEventListener('load', handleLoad, {
    once: true
  });
  img.addEventListener('error', handleError, {
    once: true
  });
  if (typeof target === 'string') img.src = target;
});

/** 将指定的布尔值转换为字符串或未定义 */
const boolDataVal = val => val ? '' : undefined;

/** 测试图片 url 能否正确加载 */
const testImgUrl = url => new Promise(resolve => {
  const img = new Image();
  img.onload = () => resolve(true);
  img.onerror = () => resolve(false);
  img.src = url;
});
const canvasToBlob = async (canvas, type, quality = 1) => {
  if (canvas instanceof OffscreenCanvas) return canvas.convertToBlob({
    type,
    quality
  });
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('Canvas toBlob failed')), type, quality);
  });
};

/**
 * 求 a 和 b 的差集，相当于从 a 中删去和 b 相同的属性
 *
 * 不会修改参数对象，返回的是新对象
 */
const difference = (a, b) => {
  const res = {};
  const keys = Object.keys(a);
  for (const key of keys) {
    if (typeof a[key] === 'object' && typeof b[key] === 'object') {
      const _res = difference(a[key], b[key]);
      if (Object.keys(_res).length > 0) res[key] = _res;
    } else if (a[key] !== b?.[key]) res[key] = a[key];
  }
  return res;
};
const _assign = (a, b) => {
  const res = JSON.parse(JSON.stringify(a));
  const keys = Object.keys(b);
  for (const key of keys) {
    if (res[key] === undefined) res[key] = b[key];else if (typeof b[key] === 'object') {
      const _res = _assign(res[key], b[key]);
      if (Object.keys(_res).length > 0) res[key] = _res;
    } else if (res[key] !== b[key]) res[key] = b[key];
  }
  return res;
};

/**
 * Object.assign 的深拷贝版，不会导致子对象属性的缺失
 *
 * 不会修改参数对象，返回的是新对象
 */
const assign = (target, ...sources) => {
  let res = target;
  for (let i = 0; i < sources.length; i += 1) if (sources[i] !== undefined) res = _assign(res, sources[i]);
  return res;
};

/** 根据路径获取对象下的指定值 */
const byPath = (obj, path, handleVal) => {
  const keys = path.split('.');
  let target = obj;
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];

    // 兼容含有「.」的 key
    while (!Reflect.has(target, key) && i < keys.length) {
      i += 1;
      if (keys[i] === undefined) break;
      key += \`.\${keys[i]}\`;
    }
    if (handleVal && i > keys.length - 2 && Reflect.has(target, key)) {
      const res = handleVal(target, key);
      while (i < keys.length - 1) {
        target = target[key];
        i += 1;
        key = keys[i];
      }
      if (res !== undefined) target[key] = res;
      break;
    }
    target = target[key];
  }
  if (target === obj) return null;
  return target;
};
const requestIdleCallback = (callback, timeout) => {
  if (Reflect.has(window, 'requestIdleCallback')) return window.requestIdleCallback(callback, {
    timeout
  });
  return window.setTimeout(callback, 16);
};

/** 获取键盘事件的编码 */
const getKeyboardCode = e => {
  let {
    key
  } = e;
  switch (key) {
    case 'Shift':
    case 'Control':
    case 'Alt':
      return key;
  }
  if (e.ctrlKey) key = \`Ctrl + \${key}\`;
  if (e.altKey) key = \`Alt + \${key}\`;
  if (e.shiftKey) key = \`Shift + \${key}\`;
  return key;
};

/** 将快捷键的编码转换成更易读的形式 */
const keyboardCodeToText = code => code.replace('Control', 'Ctrl').replace('ArrowUp', '↑').replace('ArrowDown', '↓').replace('ArrowLeft', '←').replace('ArrowRight', '→').replace(/^\\s$/, 'Space');

/** 将 HTML 字符串转换为 DOM 对象 */
const domParse = html => new DOMParser().parseFromString(html, 'text/html');

/** 监听键盘事件 */
const linstenKeydown = handler => window.addEventListener('keydown', e => {
  // 跳过输入框的键盘事件
  switch (e.target.tagName) {
    case 'INPUT':
    case 'TEXTAREA':
      return;
  }
  return handler(e);
});

/** 劫持修改原网页上的函数 */
const hijackFn = (fnName, fn) => {
  const rawFn = unsafeWindow[fnName];
  unsafeWindow[fnName] = (...args) => fn(rawFn, args);
};

let publicOwner;
solidJs.createRoot(() => {
  publicOwner = solidJs.getOwner();
});

/** 会自动设置 equals 的 createSignal */
const createEqualsSignal = (init, options) => solidJs.createSignal(init, {
  equals: isEqual,
  ...options
});

/** 会自动设置 equals 和 createRoot 的 createMemo */
const createRootMemo = (fn, init, options) => {
  // 如果函数已经是 createMemo 创建的，就直接使用
  if (fn.name === 'bound readSignal') return fn;
  const _init = init ?? fn(undefined);
  // 自动为对象类型设置 equals
  const _options = options?.equals === undefined && typeof init === 'object' ? {
    ...options,
    equals: isEqual
  } : options;
  return solidJs.getOwner() ? solidJs.createMemo(fn, _init, _options) : solidJs.runWithOwner(publicOwner, () => solidJs.createMemo(fn, _init, _options));
};

/** 节流的 createMemo */
const createThrottleMemo = (fn, wait = 100, init = fn(undefined), options = undefined) => {
  const scheduled = createScheduled(_fn => throttle(_fn, wait));
  return createRootMemo(prev => scheduled() ? fn(prev) : prev, init, options);
};
const createMemoMap = fnMap => {
  const memoMap = Object.fromEntries(Object.entries(fnMap).map(([key, fn]) => [key, createRootMemo(fn)]));
  const map = createRootMemo(() => {
    const obj = {};
    for (const key of Object.keys(memoMap)) Reflect.set(obj, key, memoMap[key]());
    return obj;
  });
  return map;
};
const createRootEffect = (fn, val, options) => solidJs.getOwner() ? solidJs.createEffect(fn, val, options) : solidJs.runWithOwner(publicOwner, () => solidJs.createEffect(fn, val, options));
const createEffectOn = (deps, fn, options) => createRootEffect(solidJs.on(deps, fn, options));
const onAutoMount = fn => {
  const owner = solidJs.getOwner();
  if (!owner) return fn(owner);
  solidJs.onMount(() => {
    const cleanFn = fn(owner);
    if (cleanFn) solidJs.onCleanup(cleanFn);
  });
};

const promisifyRequest = request => new Promise((resolve, reject) => {
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error);
});
const openDb = (version, initSchema) => new Promise((resolve, reject) => {
  const request = indexedDB.open('ComicReadScript', version);
  request.onupgradeneeded = () => initSchema(request.result);
  request.onsuccess = () => resolve(request.result);
  request.onerror = error => {
    console.error('数据库打开失败', error);
    reject(new Error('数据库打开失败'));
  };
});
const useCache = async (initSchema, version = 1) => {
  const db = await openDb(version, initSchema);
  return {
    set: (storeName, value) => promisifyRequest(db.transaction(storeName, 'readwrite').objectStore(storeName).put(value)),
    get: async (storeName, query) => promisifyRequest(db.transaction(storeName, 'readonly').objectStore(storeName).get(query)),
    del: (storeName, query) => promisifyRequest(db.transaction(storeName, 'readwrite').objectStore(storeName).delete(query))
  };
};

const createPointerState = (e, type = 'down') => {
  const xy = [e.clientX, e.clientY];
  return {
    id: e.pointerId,
    type,
    xy,
    initial: xy,
    last: xy,
    startTime: performance.now(),
    target: e.target
  };
};
const useDrag = ({
  ref,
  handleDrag,
  easyMode,
  handleClick,
  skip,
  touches = new Map()
}) => {
  helper.onAutoMount(() => {
    const controller = new AbortController();
    const options = {
      capture: false,
      passive: true,
      signal: controller.signal
    };
    const handleDown = e => {
      if (skip?.(e)) return;
      e.stopPropagation();
      if (!easyMode?.() && e.buttons !== 1) return;
      ref.setPointerCapture(e.pointerId);
      const state = createPointerState(e);
      touches.set(e.pointerId, state);
      handleDrag(state, e);
    };
    const handleMove = e => {
      e.preventDefault();
      if (!easyMode?.() && e.buttons !== 1) return;
      const state = touches.get(e.pointerId);
      if (!state) return;
      state.type = 'move';
      state.xy = [e.clientX, e.clientY];
      handleDrag(state, e);
      state.last = state.xy;
    };
    const handleUp = e => {
      e.stopPropagation();
      ref.releasePointerCapture(e.pointerId);
      const state = touches.get(e.pointerId);
      if (!state) return;
      touches.delete(e.pointerId);
      state.type = 'up';
      state.xy = [e.clientX, e.clientY];

      // 判断单击
      if (handleClick && touches.size === 0 && approx(state.xy[0] - state.initial[0], 0, 5) && approx(state.xy[1] - state.initial[1], 0, 5) && performance.now() - state.startTime < 200) handleClick(e, state.target);
      handleDrag(state, e);
    };
    ref.addEventListener('pointerdown', handleDown, options);
    ref.addEventListener('pointermove', handleMove, {
      ...options,
      passive: false
    });
    ref.addEventListener('pointerup', handleUp, options);
    ref.addEventListener('pointercancel', e => {
      e.stopPropagation();
      const state = touches.get(e.pointerId);
      if (!state) return;
      state.type = 'cancel';
      handleDrag(state, e);
      touches.clear();
    }, {
      capture: false,
      passive: true,
      signal: controller.signal
    });
    if (easyMode) {
      ref.addEventListener('pointerover', handleDown, options);
      ref.addEventListener('pointerout', handleUp, options);
    }
    return () => controller.abort();
  });
};

const useStore = initState => {
  const [_state, _setState] = store.createStore(initState);
  return {
    _state,
    _setState,
    setState: fn => _setState(store.produce(fn)),
    store: _state
  };
};

const useStyleSheet = e => {
  const styleSheet = new CSSStyleSheet();
  helper.onAutoMount(() => {
    const root = e?.getRootNode() ?? document;
    root.adoptedStyleSheets = [...root.adoptedStyleSheets, styleSheet];
    return () => {
      const index = root.adoptedStyleSheets.indexOf(styleSheet);
      if (index !== -1) root.adoptedStyleSheets.splice(index, 1);
    };
  });
  return styleSheet;
};
const useStyle = (css, e) => {
  const styleSheet = useStyleSheet(e);
  if (typeof css === 'string') styleSheet.replaceSync(css);else helper.createEffectOn(helper.createRootMemo(css), style => styleSheet.replaceSync(style));
};
/** 用 CSSStyleSheet 实现和修改 style 一样的效果 */
const useStyleMemo = (selector, styleMapArg, e) => {
  const styleSheet = useStyleSheet(e);
  styleSheet.insertRule(\`\${selector} { }\`);
  const {
    style
  } = styleSheet.cssRules[0];
  // 等火狐实现了 CSS Typed OM 后改用 styleMap 性能会更好，也能使用 CSS Typed OM 的 单位

  const setStyle = (key, val) => {
    if (val === undefined || val === '') return style.removeProperty(key);
    style.setProperty(key, typeof val === 'string' ? val : \`\${val}\`);
  };
  const styleMapList = Array.isArray(styleMapArg) ? styleMapArg : [styleMapArg];
  for (const styleMap of styleMapList) {
    if (typeof styleMap === 'object') {
      for (const [key, val] of Object.entries(styleMap)) {
        const styleText = helper.createRootMemo(val);
        helper.createEffectOn(styleText, newVal => setStyle(key, newVal));
      }
    } else {
      const styleMemoMap = helper.createRootMemo(styleMap);
      helper.createEffectOn(styleMemoMap, map => {
        for (const [key, val] of Object.entries(map)) setStyle(key, val);
      });
    }
  }
};

const zh = {
  alert: {
    comic_load_error: "漫画加载出错",
    download_failed: "下载失败",
    fetch_comic_img_failed: "获取漫画图片失败",
    img_load_failed: "图片加载失败",
    no_img_download: "没有能下载的图片",
    repeat_load: "加载图片中，请稍候",
    server_connect_failed: "无法连接到服务器"
  },
  button: {
    close_current_page_translation: "关闭当前页的翻译",
    download: "下载",
    download_completed: "下载完成",
    downloading: "下载中",
    exit: "退出",
    grid_mode: "网格模式",
    packaging: "打包中",
    page_fill: "页面填充",
    page_mode_double: "双页模式",
    page_mode_single: "单页模式",
    scroll_mode: "卷轴模式",
    setting: "设置",
    translate_current_page: "翻译当前页",
    zoom_in: "放大",
    zoom_out: "缩小"
  },
  description: "为漫画站增加双页阅读、翻译等优化体验的增强功能。",
  end_page: {
    next_button: "下一话",
    prev_button: "上一话",
    tip: {
      end_jump: "已到结尾，继续向下翻页将跳至下一话",
      exit: "已到结尾，继续翻页将退出",
      start_jump: "已到开头，继续向上翻页将跳至上一话"
    }
  },
  hotkeys: {
    enter_read_mode: "进入阅读模式",
    exit: "退出",
    float_tag_list: "悬浮标签列表",
    jump_to_end: "跳至尾页",
    jump_to_home: "跳至首页",
    page_down: "向下翻页",
    page_up: "向上翻页",
    scroll_down: "向下滚动",
    scroll_left: "向左滚动",
    scroll_right: "向右滚动",
    scroll_up: "向上滚动",
    switch_auto_enlarge: "切换图片自动放大选项",
    switch_dir: "切换阅读方向",
    switch_grid_mode: "切换网格模式",
    switch_page_fill: "切换页面填充",
    switch_scroll_mode: "切换卷轴模式",
    switch_single_double_page_mode: "切换单双页模式",
    translate_current_page: "翻译当前页"
  },
  img_status: {
    error: "加载出错",
    loading: "正在加载",
    wait: "等待加载"
  },
  other: {
    auto_enter_read_mode: "自动进入阅读模式",
    "default": "默认",
    disable: "禁用",
    enter_comic_read_mode: "进入漫画阅读模式",
    fab_hidden: "隐藏悬浮按钮",
    fab_show: "显示悬浮按钮",
    fill_page: "填充页",
    img_loading: "图片加载中",
    loading_img: "加载图片中",
    read_mode: "阅读模式"
  },
  pwa: {
    alert: {
      img_data_error: "图片数据错误",
      img_not_found: "找不到图片",
      img_not_found_files: "请选择图片文件或含有图片文件的压缩包",
      img_not_found_folder: "文件夹下没有图片文件或含有图片文件的压缩包",
      not_valid_url: "不是有效的 URL",
      repeat_load: "正在加载其他文件中……",
      unzip_error: "解压出错",
      unzip_password_error: "解压密码错误",
      userscript_not_installed: "未安装 ComicRead 脚本"
    },
    button: {
      enter_url: "输入 URL",
      install: "安装",
      no_more_prompt: "不再提示",
      resume_read: "恢复阅读",
      select_files: "选择文件",
      select_folder: "选择文件夹"
    },
    install_md: "### 每次都要打开这个网页很麻烦？\\n如果你希望\\n1. 能有独立的窗口，像是在使用本地软件一样\\n1. 加入本地压缩文件的打开方式之中，方便直接打开\\n1. 离线使用~~（主要是担心国内网络抽风无法访问这个网页~~\\n### 欢迎将本页面作为 PWA 应用安装到电脑上😃👍",
    message: {
      enter_password: "请输入密码",
      unzipping: "解压缩中"
    },
    tip_enter_url: "请输入压缩包 URL",
    tip_md: "# ComicRead PWA\\n使用 [ComicRead](https://github.com/hymbz/ComicReadScript) 的阅读模式阅读**本地**漫画\\n---\\n### 将图片文件、文件夹、压缩包直接拖入即可开始阅读\\n*也可以选择**直接粘贴**或**输入**压缩包 URL 下载阅读*"
  },
  setting: {
    hotkeys: {
      add: "添加新快捷键",
      restore: "恢复默认快捷键"
    },
    language: "语言",
    option: {
      abreast_duplicate: "每列重复比例",
      abreast_mode: "并排卷轴模式",
      always_load_all_img: "始终加载所有图片",
      auto_switch_page_mode: "自动切换单双页模式",
      background_color: "背景颜色",
      click_page_turn_area: "点击区域",
      click_page_turn_enabled: "点击翻页",
      click_page_turn_swap_area: "左右点击区域交换",
      click_page_turn_vertical: "上下翻页",
      dark_mode: "夜间模式",
      dir_ltr: "从左到右（美漫）",
      dir_rtl: "从右到左（日漫）",
      disable_auto_enlarge: "禁止图片自动放大",
      first_page_fill: "默认启用首页填充",
      fit_to_width: "图片适合宽度",
      jump_to_next_chapter: "翻页至上/下一话",
      paragraph_dir: "阅读方向",
      paragraph_display: "显示",
      paragraph_hotkeys: "快捷键",
      paragraph_operation: "操作",
      paragraph_other: "其他",
      paragraph_scrollbar: "滚动条",
      paragraph_translation: "翻译",
      preload_page_num: "预加载页数",
      scroll_mode_img_scale: "卷轴图片缩放",
      scroll_mode_img_spacing: "卷轴图片间距",
      scrollbar_auto_hidden: "自动隐藏",
      scrollbar_easy_scroll: "快捷滚动",
      scrollbar_position: "位置",
      scrollbar_position_auto: "自动",
      scrollbar_position_bottom: "底部",
      scrollbar_position_hidden: "隐藏",
      scrollbar_position_right: "右侧",
      scrollbar_position_top: "顶部",
      scrollbar_show_img_status: "显示图片加载状态",
      show_clickable_area: "显示点击区域",
      show_comments: "在结束页显示评论",
      swap_page_turn_key: "左右翻页键交换",
      zoom: "图片缩放"
    },
    translation: {
      cotrans_tip: "<p>将使用 <a href=\\"https://cotrans.touhou.ai\\" target=\\"_blank\\">Cotrans</a> 提供的接口翻译图片，该服务器由其维护者用爱发电自费维护</p>\\n<p>多人同时使用时需要排队等待，等待队列达到上限后再上传新图片会报错，需要过段时间再试</p>\\n<p>所以还请 <b>注意用量</b></p>\\n<p>更推荐使用自己本地部署的项目，既不占用服务器资源也不需要排队</p>",
      options: {
        detection_resolution: "文本扫描清晰度",
        direction: "渲染字体方向",
        direction_auto: "原文一致",
        direction_horizontal: "仅限水平",
        direction_vertical: "仅限垂直",
        forceRetry: "忽略缓存强制重试",
        localUrl: "自定义服务器 URL",
        onlyDownloadTranslated: "只下载完成翻译的图片",
        target_language: "目标语言",
        text_detector: "文本扫描器",
        translator: "翻译服务"
      },
      server: "翻译服务器",
      server_selfhosted: "本地部署",
      translate_after_current: "翻译当前页至结尾",
      translate_all_img: "翻译全部图片"
    }
  },
  site: {
    add_feature: {
      associate_nhentai: "关联nhentai",
      auto_page_turn: "无限滚动",
      block_totally: "彻底屏蔽漫画",
      colorize_tag: "标签染色",
      detect_ad: "识别广告页",
      float_tag_list: "悬浮标签列表",
      hotkeys: "快捷键",
      load_original_image: "加载原图",
      open_link_new_page: "在新页面中打开链接",
      quick_favorite: "快捷收藏",
      quick_rating: "快捷评分",
      quick_tag_define: "快捷查看标签定义",
      remember_current_site: "记住当前站点"
    },
    changed_load_failed: "网站发生变化，无法加载漫画",
    ehentai: {
      change_favorite_failed: "收藏夹修改失败",
      change_favorite_success: "收藏夹修改成功",
      change_rating_failed: "评分修改失败",
      change_rating_success: "评分修改成功",
      fetch_favorite_failed: "获取收藏夹信息失败",
      fetch_img_page_source_failed: "获取图片页源码失败",
      fetch_img_page_url_failed: "从详情页获取图片页地址失败",
      fetch_img_url_failed: "从图片页获取图片地址失败",
      html_changed_nhentai_failed: "页面结构发生改变，关联 nhentai 漫画功能无法正常生效",
      ip_banned: "IP地址被禁",
      nhentai_error: "nhentai 匹配出错",
      nhentai_failed: "匹配失败，请在确认登录 {{nhentai}} 后刷新"
    },
    need_captcha: "需要人机验证",
    nhentai: {
      fetch_next_page_failed: "获取下一页漫画数据失败",
      tag_blacklist_fetch_failed: "标签黑名单获取失败"
    },
    settings_tip: "设置",
    show_settings_menu: "显示设置菜单",
    simple: {
      auto_read_mode_message: "已默认开启「自动进入阅读模式」",
      no_img: "未找到合适的漫画图片，\\n如有需要可点此关闭简易阅读模式",
      simple_read_mode: "使用简易阅读模式"
    }
  },
  touch_area: {
    menu: "菜单",
    next: "下页",
    prev: "上页",
    type: {
      edge: "边缘",
      l: "L",
      left_right: "左右",
      up_down: "上下"
    }
  },
  translation: {
    status: {
      "default": "未知状态",
      detection: "正在检测文本",
      downscaling: "正在缩小图片",
      error: "翻译出错",
      "error-lang": "你选择的翻译服务不支持你选择的语言",
      "error-translating": "翻译服务没有返回任何文本",
      "error-with-id": "翻译出错",
      finished: "正在整理结果",
      inpainting: "正在修补图片",
      "mask-generation": "正在生成文本掩码",
      ocr: "正在识别文本",
      pending: "正在等待",
      "pending-pos": "正在等待",
      rendering: "正在渲染",
      saved: "保存结果",
      textline_merge: "正在整合文本",
      translating: "正在翻译文本",
      upscaling: "正在放大图片"
    },
    tip: {
      check_img_status_failed: "检查图片状态失败",
      download_img_failed: "下载图片失败",
      error: "翻译出错",
      get_translator_list_error: "获取可用翻译服务列表时出错",
      id_not_returned: "未返回 id",
      img_downloading: "正在下载图片",
      img_not_fully_loaded: "图片未加载完毕",
      pending: "正在等待，列队还有 {{pos}} 张图片",
      resize_img_failed: "缩放图片失败",
      translation_completed: "翻译完成",
      upload_error: "图片上传出错",
      upload_return_error: "服务器翻译出错",
      wait_translation: "等待翻译"
    },
    translator: {
      baidu: "百度",
      deepl: "DeepL",
      google: "谷歌",
      "gpt3.5": "GPT-3.5",
      none: "删除文本",
      offline: "离线模型",
      original: "原文",
      youdao: "有道"
    }
  }
};

const en = {
  alert: {
    comic_load_error: "Comic loading error",
    download_failed: "Download failed",
    fetch_comic_img_failed: "Failed to fetch comic images",
    img_load_failed: "Image loading failed",
    no_img_download: "No images available for download",
    repeat_load: "Loading image, please wait",
    server_connect_failed: "Unable to connect to the server"
  },
  button: {
    close_current_page_translation: "Close translation of the current page",
    download: "Download",
    download_completed: "Download completed",
    downloading: "Downloading",
    exit: "Exit",
    grid_mode: "Grid mode",
    packaging: "Packaging",
    page_fill: "Page fill",
    page_mode_double: "Double page mode",
    page_mode_single: "Single page mode",
    scroll_mode: "Scroll mode",
    setting: "Settings",
    translate_current_page: "Translate current page",
    zoom_in: "Zoom in",
    zoom_out: "Zoom out"
  },
  description: "Add enhanced features to the comic site for optimized experience, including dual-page reading and translation.",
  end_page: {
    next_button: "Next chapter",
    prev_button: "Prev chapter",
    tip: {
      end_jump: "Reached the last page, scrolling down will jump to the next chapter",
      exit: "Reached the last page, scrolling down will exit",
      start_jump: "Reached the first page, scrolling up will jump to the previous chapter"
    }
  },
  hotkeys: {
    enter_read_mode: "Enter reading mode",
    exit: "Exit",
    float_tag_list: "Floating tag list",
    jump_to_end: "Jump to the last page",
    jump_to_home: "Jump to the first page",
    page_down: "Turn the page to the down",
    page_up: "Turn the page to the up",
    scroll_down: "Scroll down",
    scroll_left: "Scroll left",
    scroll_right: "Scroll right",
    scroll_up: "Scroll up",
    switch_auto_enlarge: "Switch auto image enlarge option",
    switch_dir: "Switch reading direction",
    switch_grid_mode: "Switch grid mode",
    switch_page_fill: "Switch page fill",
    switch_scroll_mode: "Switch scroll mode",
    switch_single_double_page_mode: "Switch single/double page mode",
    translate_current_page: "Translate current page"
  },
  img_status: {
    error: "Load Error",
    loading: "Loading",
    wait: "Waiting for load"
  },
  other: {
    auto_enter_read_mode: "Auto enter reading mode",
    "default": "Default",
    disable: "Disable",
    enter_comic_read_mode: "Enter comic reading mode",
    fab_hidden: "Hide floating button",
    fab_show: "Show floating button",
    fill_page: "Fill Page",
    img_loading: "Image loading",
    loading_img: "Loading image",
    read_mode: "Reading mode"
  },
  pwa: {
    alert: {
      img_data_error: "Image data error",
      img_not_found: "Image not found",
      img_not_found_files: "Please select an image file or a compressed file containing image files",
      img_not_found_folder: "No image files or compressed files containing image files in the folder",
      not_valid_url: "Not a valid URL",
      repeat_load: "Loading other files…",
      unzip_error: "Decompression error",
      unzip_password_error: "Decompression password error",
      userscript_not_installed: "ComicRead userscript not installed"
    },
    button: {
      enter_url: "Enter URL",
      install: "Install",
      no_more_prompt: "Do not prompt again",
      resume_read: "Restore reading",
      select_files: "Select File",
      select_folder: "Select folder"
    },
    install_md: "### Tired of opening this webpage every time?\\nIf you wish to:\\n1. Have an independent window, as if using local software\\n1. Add to the local compressed file opening method for easy direct opening\\n1. Use offline\\n### Welcome to install this page as a PWA app on your computer😃👍",
    message: {
      enter_password: "Please enter your password",
      unzipping: "Unzipping"
    },
    tip_enter_url: "Please enter the URL of the compressed file",
    tip_md: "# ComicRead PWA\\nRead **local** comics using [ComicRead](https://github.com/hymbz/ComicReadScript) reading mode.\\n---\\n### Drag and drop image files, folders, or compressed files directly to start reading\\n*You can also choose to **paste directly** or **enter** the URL of the compressed file for downloading and reading*"
  },
  setting: {
    hotkeys: {
      add: "Add new hotkeys",
      restore: "Restore default hotkeys"
    },
    language: "Language",
    option: {
      abreast_duplicate: "Column duplicates ratio",
      abreast_mode: "Abreast scroll mode",
      always_load_all_img: "Always load all images",
      auto_switch_page_mode: "Auto switch single/double page mode",
      background_color: "Background Color",
      click_page_turn_area: "Touch area",
      click_page_turn_enabled: "Click to turn page",
      click_page_turn_swap_area: "Swap LR clickable areas",
      click_page_turn_vertical: "Vertically arranged clickable areas",
      dark_mode: "Dark mode",
      dir_ltr: "LTR (American comics)",
      dir_rtl: "RTL (Japanese manga)",
      disable_auto_enlarge: "Disable automatic image enlarge",
      first_page_fill: "Enable first page fill by default",
      fit_to_width: "Fit to width",
      jump_to_next_chapter: "Turn to the next/previous chapter",
      paragraph_dir: "Reading direction",
      paragraph_display: "Display",
      paragraph_hotkeys: "Hotkeys",
      paragraph_operation: "Operation",
      paragraph_other: "Other",
      paragraph_scrollbar: "Scrollbar",
      paragraph_translation: "Translation",
      preload_page_num: "Preload page number",
      scroll_mode_img_scale: "Scroll mode image zoom ratio",
      scroll_mode_img_spacing: "Scroll mode image spacing",
      scrollbar_auto_hidden: "Auto hide",
      scrollbar_easy_scroll: "Easy scroll",
      scrollbar_position: "position",
      scrollbar_position_auto: "Auto",
      scrollbar_position_bottom: "Bottom",
      scrollbar_position_hidden: "Hidden",
      scrollbar_position_right: "Right",
      scrollbar_position_top: "Top",
      scrollbar_show_img_status: "Show image loading status",
      show_clickable_area: "Show clickable areas",
      show_comments: "Show comments on the end page",
      swap_page_turn_key: "Swap LR page-turning keys",
      zoom: "Image zoom ratio"
    },
    translation: {
      cotrans_tip: "<p>Using the interface provided by <a href=\\"https://cotrans.touhou.ai\\" target=\\"_blank\\">Cotrans</a> to translate images, which is maintained by its maintainer at their own expense.</p>\\n<p>When multiple people use it at the same time, they need to queue and wait. If the waiting queue reaches its limit, uploading new images will result in an error. Please try again after a while.</p>\\n<p>So please <b>mind the frequency of use</b>.</p>\\n<p>It is highly recommended to use your own locally deployed project, as it does not consume server resources and does not require queuing.</p>",
      options: {
        detection_resolution: "Text detection resolution",
        direction: "Render text orientation",
        direction_auto: "Follow source",
        direction_horizontal: "Horizontal only",
        direction_vertical: "Vertical only",
        forceRetry: "Force retry (ignore cache)",
        localUrl: "customize server URL",
        onlyDownloadTranslated: "Download only the translated images",
        target_language: "Target language",
        text_detector: "Text detector",
        translator: "Translator"
      },
      server: "Translation server",
      server_selfhosted: "Selfhosted",
      translate_after_current: "Translate the current page to the end",
      translate_all_img: "Translate all images"
    }
  },
  site: {
    add_feature: {
      associate_nhentai: "Associate nhentai",
      auto_page_turn: "Infinite scroll",
      block_totally: "Totally block comics",
      colorize_tag: "Colorize tags",
      detect_ad: "Detect advertise page",
      float_tag_list: "Floating tag list",
      hotkeys: "Hotkeys",
      load_original_image: "Load original image",
      open_link_new_page: "Open links in a new page",
      quick_favorite: "Quick favorite",
      quick_rating: "Quick rating",
      quick_tag_define: "Quick view tag define",
      remember_current_site: "Remember the current site"
    },
    changed_load_failed: "The website has undergone changes, unable to load comics",
    ehentai: {
      change_favorite_failed: "Failed to change the favorite",
      change_favorite_success: "Successfully changed the favorite",
      change_rating_failed: "Failed to change the rating",
      change_rating_success: "Successfully changed the rating",
      fetch_favorite_failed: "Failed to get favorite info",
      fetch_img_page_source_failed: "Failed to get the source code of the image page",
      fetch_img_page_url_failed: "Failed to get the image page address from the detail page",
      fetch_img_url_failed: "Failed to get the image address from the image page",
      html_changed_nhentai_failed: "The web page structure has changed, the function to associate nhentai comics is not working properly",
      ip_banned: "IP address is banned",
      nhentai_error: "Error in nhentai matching",
      nhentai_failed: "Matching failed, please refresh after confirming login to {{nhentai}}"
    },
    need_captcha: "Need CAPTCHA verification",
    nhentai: {
      fetch_next_page_failed: "Failed to get next page of comic data",
      tag_blacklist_fetch_failed: "Failed to fetch tag blacklist"
    },
    settings_tip: "Settings",
    show_settings_menu: "Show settings menu",
    simple: {
      auto_read_mode_message: "\\"Auto enter reading mode\\" is enabled by default",
      no_img: "No suitable comic images were found.\\nIf necessary, you can click here to close the simple reading mode.",
      simple_read_mode: "Enter simple reading mode"
    }
  },
  touch_area: {
    menu: "Menu",
    next: "Next Page",
    prev: "Prev Page",
    type: {
      edge: "Edge",
      l: "L",
      left_right: "Left Right",
      up_down: "Up Down"
    }
  },
  translation: {
    status: {
      "default": "Unknown status",
      detection: "Detecting text",
      downscaling: "Downscaling",
      error: "Error during translation",
      "error-lang": "The target language is not supported by the chosen translator",
      "error-translating": "Did not get any text back from the text translation service",
      "error-with-id": "Error during translation",
      finished: "Finishing",
      inpainting: "Inpainting",
      "mask-generation": "Generating mask",
      ocr: "Scanning text",
      pending: "Pending",
      "pending-pos": "Pending",
      rendering: "Rendering",
      saved: "Saved",
      textline_merge: "Merging text lines",
      translating: "Translating",
      upscaling: "Upscaling"
    },
    tip: {
      check_img_status_failed: "Failed to check image status",
      download_img_failed: "Failed to download image",
      error: "Translation error",
      get_translator_list_error: "Error occurred while getting the list of available translation services",
      id_not_returned: "No id returned",
      img_downloading: "Downloading images",
      img_not_fully_loaded: "Image has not finished loading",
      pending: "Pending, {{pos}} in queue",
      resize_img_failed: "Failed to resize image",
      translation_completed: "Translation completed",
      upload_error: "Image upload error",
      upload_return_error: "Error during server translation",
      wait_translation: "Waiting for translation"
    },
    translator: {
      baidu: "baidu",
      deepl: "DeepL",
      google: "Google",
      "gpt3.5": "GPT-3.5",
      none: "Remove texts",
      offline: "offline translator",
      original: "Original",
      youdao: "youdao"
    }
  }
};

const ru = {
  alert: {
    comic_load_error: "Ошибка загрузки комикса",
    download_failed: "Ошибка загрузки",
    fetch_comic_img_failed: "Не удалось загрузить изображения",
    img_load_failed: "Не удалось загрузить изображение",
    no_img_download: "Нет доступных картинок для загрузки",
    repeat_load: "Загрузка изображения, пожалуйста подождите",
    server_connect_failed: "Не удалось подключиться к серверу"
  },
  button: {
    close_current_page_translation: "Скрыть перевод текущей страницы",
    download: "Скачать",
    download_completed: "Загрузка завершена",
    downloading: "Скачивание",
    exit: "Выход",
    grid_mode: "Режим сетки",
    packaging: "Упаковка",
    page_fill: "Заполнить страницу",
    page_mode_double: "Двухчастичный режим",
    page_mode_single: "Одностраничный режим",
    scroll_mode: "Режим прокрутки",
    setting: "Настройки",
    translate_current_page: "Перевести текущую страницу",
    zoom_in: "Приблизить",
    zoom_out: "Уменьшить"
  },
  description: "Добавляет расширенные функции для удобства на сайт, такие как двухстраничный режим и перевод.",
  end_page: {
    next_button: "Следующая глава",
    prev_button: "Предыдущая глава",
    tip: {
      end_jump: "Последняя страница, следующая глава ниже",
      exit: "Последняя страница, ниже комикс будет закрыт",
      start_jump: "Первая страница, выше будет загружена предыдущая глава"
    }
  },
  hotkeys: {
    enter_read_mode: "Режим чтения",
    exit: "Выход",
    float_tag_list: "Плавающий список тегов",
    jump_to_end: "Перейти к последней странице",
    jump_to_home: "Перейти к первой странице",
    page_down: "Перелистнуть страницу вниз",
    page_up: "Перелистнуть страницу вверх",
    scroll_down: "Прокрутить вниз",
    scroll_left: "Прокрутить влево",
    scroll_right: "Прокрутите вправо",
    scroll_up: "Прокрутите вверх",
    switch_auto_enlarge: "Автоматическое приближение",
    switch_dir: "Направление чтения",
    switch_grid_mode: "Режим сетки",
    switch_page_fill: "Заполнение страницы",
    switch_scroll_mode: "Режим прокрутки",
    switch_single_double_page_mode: "Одностраничный/Двухстраничный режим",
    translate_current_page: "Перевести текущую страницу"
  },
  img_status: {
    error: "Ошибка загрузки",
    loading: "Загрузка",
    wait: "Ожидание загрузки"
  },
  other: {
    auto_enter_read_mode: "Автоматически включать режим чтения",
    "default": "Дефолт",
    disable: "Отключить",
    enter_comic_read_mode: "Режим чтения комиксов",
    fab_hidden: "Скрыть плавающую кнопку",
    fab_show: "Показать плавающую кнопку",
    fill_page: "Заполнить страницу",
    img_loading: "Изображение загружается",
    loading_img: "Загрузка изображения",
    read_mode: "Режим чтения"
  },
  pwa: {
    alert: {
      img_data_error: "Ошибка данных изображения",
      img_not_found: "Изображение не найдено",
      img_not_found_files: "Пожалуйста выберите файл или архив с изображениями",
      img_not_found_folder: "В папке не найдены изображения или архивы с изображениями",
      not_valid_url: "Невалидный URL",
      repeat_load: "Загрузка других файлов…",
      unzip_error: "Ошибка распаковки",
      unzip_password_error: "Неверный пароль от архива",
      userscript_not_installed: "ComicRead не установлен"
    },
    button: {
      enter_url: "Ввести URL",
      install: "Установить",
      no_more_prompt: "Больше не показывать",
      resume_read: "Продолжить чтение",
      select_files: "Выбрать файл",
      select_folder: "Выбрать папку"
    },
    install_md: "### Устали открывать эту страницу каждый раз?\\nЕсли вы хотите:\\n1. Иметь отдельное окно, как если бы вы использовали обычное программное обеспечение\\n1. Открывать архивы напрямую\\n1. Пользоваться оффлайн\\n### Установите эту страницу в качестве [PWA](https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5_%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5) на свой компьютер 🐺☝️",
    message: {
      enter_password: "Пожалуйста введите пароль",
      unzipping: "Распаковка"
    },
    tip_enter_url: "Введите URL архива",
    tip_md: "# ComicRead PWA\\nИспользуйте [ComicRead](https://github.com/hymbz/ComicReadScript) для чтения комиксов **локально**.\\n---\\n### Перетащите изображения, папки или архивы чтобы начать читать\\n*Вы так же можете **открыть** или **вставить** URL архива на напрямую*"
  },
  setting: {
    hotkeys: {
      add: "Добавить горячие клавиши",
      restore: "Восстановить горячие клавиши по умолчанию"
    },
    language: "Язык",
    option: {
      abreast_duplicate: "Коэффициент дублирования столбцов",
      abreast_mode: "Режим прокрутки в ряд",
      always_load_all_img: "Всегда загружать все изображения",
      auto_switch_page_mode: "Автоматическое переключение режима одиночной/двойной страницы",
      background_color: "Цвет фона",
      click_page_turn_area: "Область нажатия",
      click_page_turn_enabled: "Перелистывать по клику",
      click_page_turn_swap_area: "Поменять местами правую и левую области переключения страниц",
      click_page_turn_vertical: "Вертикальная область переключения страниц",
      dark_mode: "Ночная тема",
      dir_ltr: "Чтение слева направо (Американские комиксы)",
      dir_rtl: "Чтение справа налево (Японская манга)",
      disable_auto_enlarge: "Отключить автоматическое масштабирование изображений",
      first_page_fill: "Включить заполнение первой страницы по умолчанию",
      fit_to_width: "По ширине",
      jump_to_next_chapter: "Перелистнуть главу",
      paragraph_dir: "Направление чтения",
      paragraph_display: "Отображение",
      paragraph_hotkeys: "Горячие клавиши",
      paragraph_operation: "Управление",
      paragraph_other: "Другое",
      paragraph_scrollbar: "Полоса прокрутки",
      paragraph_translation: "Перевод",
      preload_page_num: "Предзагружать страниц",
      scroll_mode_img_scale: "Коэффициент масштабирования изображения в режиме скроллинга",
      scroll_mode_img_spacing: "Расстояние между страницами в режиме скроллинга",
      scrollbar_auto_hidden: "Автоматически скрывать",
      scrollbar_easy_scroll: "Лёгкая прокрутка",
      scrollbar_position: "Позиция",
      scrollbar_position_auto: "Авто",
      scrollbar_position_bottom: "Снизу",
      scrollbar_position_hidden: "Спрятано",
      scrollbar_position_right: "Справа",
      scrollbar_position_top: "Сверху",
      scrollbar_show_img_status: "Показывать статус загрузки изображения",
      show_clickable_area: "Показывать кликабельные области",
      show_comments: "Показывать комментарии на последней странице",
      swap_page_turn_key: "Поменять местами клавиши переключения страниц",
      zoom: "Коэффициент масштабирования изображения"
    },
    translation: {
      cotrans_tip: "<p>Использует для перевода <a href=\\"https://cotrans.touhou.ai\\" target=\\"_blank\\">Cotrans API</a>, работающий исключительно за счёт своего создателя.</p>\\n<p>Запросы обрабатываются по одному в порядке синхронной очереди. Когда очередь превышает лимит новые запросы будут приводить к ошибке. Если такое случилось попробуйте позже.</p>\\n<p>Так что пожалуйста <b>учитывайте загруженность при выборе</b></p>\\n<p>Настоятельно рекомендовано использовать проект развёрнутый локально т.к. это не потребляет серверные ресурсы и вы не ограничены очередью.</p>",
      options: {
        detection_resolution: "Разрешение распознавания текста",
        direction: "Ориетнация текста",
        direction_auto: "Следование оригиналу",
        direction_horizontal: "Только горизонтально",
        direction_vertical: "Только вертикально",
        forceRetry: "Принудительный повтор(Игнорировать кэш)",
        localUrl: "Настроить URL сервера",
        onlyDownloadTranslated: "Скачать только переведённые изображения",
        target_language: "Целевой язык",
        text_detector: "Детектор текста",
        translator: "Переводчик"
      },
      server: "Сервер",
      server_selfhosted: "Свой",
      translate_after_current: "Переводить страницу до конца",
      translate_all_img: "Перевести все изображения"
    }
  },
  site: {
    add_feature: {
      associate_nhentai: "Ассоциация с nhentai",
      auto_page_turn: "Автопереворот страниц",
      block_totally: "Глобально заблокировать комиксы",
      colorize_tag: "Раскрасить теги",
      detect_ad: "Detect advertise page",
      float_tag_list: "Плавающий список тегов",
      hotkeys: "Горячие клавиши",
      load_original_image: "Загружать оригинальное изображение",
      open_link_new_page: "Открывать ссылки в новой вкладке",
      quick_favorite: "Быстрый фаворит",
      quick_rating: "Быстрый рейтинг",
      quick_tag_define: "Определение тега быстрого просмотра",
      remember_current_site: "Запомнить текущий сайт"
    },
    changed_load_failed: "Страница изменилась, невозможно загрузить комикс",
    ehentai: {
      change_favorite_failed: "Не удалось изменить избранное",
      change_favorite_success: "Избранное успешно изменено",
      change_rating_failed: "Не удалось изменить оценку",
      change_rating_success: "Успешно изменен рейтинг",
      fetch_favorite_failed: "Не удалось получить информацию о избранном",
      fetch_img_page_source_failed: "Не удалось получить исходный код страницы с изображениями",
      fetch_img_page_url_failed: "Не удалось получить адрес страницы изображений из деталей",
      fetch_img_url_failed: "Не удалось получить адрес изображения",
      html_changed_nhentai_failed: "Структура страницы изменилась, функция nhentai manga работает некорректно",
      ip_banned: "IP адрес забанен",
      nhentai_error: "Ошибка сопоставления с nhentai",
      nhentai_failed: "Ошибка сопостовления. Пожалуйста перезагрузите страницу после входа на {{nhentai}}"
    },
    need_captcha: "CAPTCHA",
    nhentai: {
      fetch_next_page_failed: "Не удалось получить следующую страницу",
      tag_blacklist_fetch_failed: "Не удалось получить заблокированные теги"
    },
    settings_tip: "Настройки",
    show_settings_menu: "Показать меню настроек",
    simple: {
      auto_read_mode_message: "\\"Автоматически включать режим чтения\\" по умолчанию",
      no_img: "Не найдено подходящих изображений. Можно нажать тут что бы выключить режим простого чтения.",
      simple_read_mode: "Включить простой режим чтения"
    }
  },
  touch_area: {
    menu: "Меню",
    next: "Следующая страница",
    prev: "Предыдущая страница",
    type: {
      edge: "Грань",
      l: "L",
      left_right: "Лево Право",
      up_down: "Верх Низ"
    }
  },
  translation: {
    status: {
      "default": "Неизвестный статус",
      detection: "Распознавание текста",
      downscaling: "Уменьшение масштаба",
      error: "Ошибка перевода",
      "error-lang": "Целевой язык не поддерживается выбранным переводчиком",
      "error-translating": "Ошибка перевода(пустой ответ)",
      "error-with-id": "Ошибка во время перевода",
      finished: "Завершение",
      inpainting: "Наложение",
      "mask-generation": "Генерация маски",
      ocr: "Распознавание текста",
      pending: "Ожидание",
      "pending-pos": "Ожидание",
      rendering: "Отрисовка",
      saved: "Сохранено",
      textline_merge: "Обьединение текста",
      translating: "Переводится",
      upscaling: "Увеличение изображения"
    },
    tip: {
      check_img_status_failed: "Не удалось проверить статус изображения",
      download_img_failed: "Не удалось скачать изображение",
      error: "Ошибка перевода",
      get_translator_list_error: "Произошла ошибка во время получения списка доступных переводчиков",
      id_not_returned: "ID не вернули(",
      img_downloading: "Скачивание изображений",
      img_not_fully_loaded: "Изображение всё ещё загружается",
      pending: "Ожидение, позиция в очереди {{pos}}",
      resize_img_failed: "Не удалось изменить размер изображения",
      translation_completed: "Перевод завершён",
      upload_error: "Ошибка загрузки изображения",
      upload_return_error: "Ошибка перевода на сервере",
      wait_translation: "Ожидание перевода"
    },
    translator: {
      baidu: "baidu",
      deepl: "DeepL",
      google: "Google",
      "gpt3.5": "GPT-3.5",
      none: "Убрать текст",
      offline: "Оффлайн переводчик",
      original: "Оригинал",
      youdao: "youdao"
    }
  }
};

/* eslint-disable no-console */

const prefix = ['%cComicRead', 'background-color: #607d8b; color: white; padding: 2px 4px; border-radius: 4px;'];
const log = (...args) => console.log(...prefix, ...args);
log.warn = (...args) => console.warn(...prefix, ...args);
log.error = (...args) => {
  console.error(...prefix, ...args);
  if (args[0] instanceof Error) throw args[0];
};

const langList = ['zh', 'en', 'ru'];
/** 判断传入的字符串是否是支持的语言类型代码 */
const isLanguages = lang => Boolean(lang) && langList.includes(lang);

/** 返回浏览器偏好语言 */
const getBrowserLang = () => {
  let newLang;
  for (let i = 0; i < navigator.languages.length; i++) {
    const language = navigator.languages[i];
    const matchLang = langList.find(l => l === language || l === language.split('-')[0]);
    if (matchLang) {
      newLang = matchLang;
      break;
    }
  }
  return newLang;
};
const getSaveLang = async () => typeof GM === 'undefined' ? localStorage.getItem('Languages') : GM.getValue('Languages');
const setSaveLang = async val => typeof GM === 'undefined' ? localStorage.setItem('Languages', val) : GM.setValue('Languages', val);
const getInitLang = async () => {
  const saveLang = await getSaveLang();
  if (isLanguages(saveLang)) return saveLang;
  const lang = getBrowserLang() ?? 'zh';
  setSaveLang(lang);
  return lang;
};

const [lang, setLang] = solidJs.createSignal('zh');
const setInitLang = async () => setLang(await getInitLang());
const t = solidJs.createRoot(() => {
  solidJs.createEffect(solidJs.on(lang, async () => setSaveLang(lang()), {
    defer: true
  }));
  const locales = solidJs.createMemo(() => {
    switch (lang()) {
      case 'en':
        return en;
      case 'ru':
        return ru;
      default:
        return zh;
    }
  });
  return (keys, variables) => {
    let text = byPath(locales(), keys) ?? '';
    if (variables) for (const [k, v] of Object.entries(variables)) text = text.replaceAll(\`{{\${k}}}\`, \`\${String(v)}\`);
    return text;
  };
});

exports.approx = approx;
exports.assign = assign;
exports.boolDataVal = boolDataVal;
exports.byPath = byPath;
exports.canvasToBlob = canvasToBlob;
exports.clamp = clamp;
exports.createEffectOn = createEffectOn;
exports.createEqualsSignal = createEqualsSignal;
exports.createMemoMap = createMemoMap;
exports.createRootEffect = createRootEffect;
exports.createRootMemo = createRootMemo;
exports.createScheduled = createScheduled;
exports.createSequence = createSequence;
exports.createThrottleMemo = createThrottleMemo;
exports.debounce = debounce;
exports.difference = difference;
exports.domParse = domParse;
exports.getInitLang = getInitLang;
exports.getKeyboardCode = getKeyboardCode;
exports.getMostItem = getMostItem;
exports.hijackFn = hijackFn;
exports.inRange = inRange;
exports.isEqual = isEqual;
exports.isLanguages = isLanguages;
exports.isUrl = isUrl;
exports.keyboardCodeToText = keyboardCodeToText;
exports.lang = lang;
exports.langList = langList;
exports.linstenKeydown = linstenKeydown;
exports.log = log;
exports.needDarkMode = needDarkMode;
exports.onAutoMount = onAutoMount;
exports.plimit = plimit;
exports.querySelector = querySelector;
exports.querySelectorAll = querySelectorAll;
exports.querySelectorClick = querySelectorClick;
exports.requestIdleCallback = requestIdleCallback;
exports.saveAs = saveAs;
exports.scrollIntoView = scrollIntoView;
exports.setInitLang = setInitLang;
exports.setLang = setLang;
exports.setSaveLang = setSaveLang;
exports.singleThreaded = singleThreaded;
exports.sleep = sleep;
exports.t = t;
exports.testImgUrl = testImgUrl;
exports.throttle = throttle;
exports.useCache = useCache;
exports.useDrag = useDrag;
exports.useStore = useStore;
exports.useStyle = useStyle;
exports.useStyleMemo = useStyleMemo;
exports.wait = wait;
exports.waitDom = waitDom;
exports.waitImgLoad = waitImgLoad;
`;
      break;
    case 'components/Manga':
      code =`
const web = require('solid-js/web');
const solidJs = require('solid-js');
const helper = require('helper');

const imgState = {
  imgList: [],
  pageList: [],
  fillEffect: {
    '-1': true
  },
  showRange: [0, 0],
  renderRange: [0, 0],
  loadingRange: [0, 0],
  defaultImgType: ''
};

const LanguageMap = {
  zh: 'CHS',
  en: 'ENG'
};
const targetLanguage = LanguageMap[helper.lang()] ?? 'CHS';
const _defaultOption = {
  dir: 'rtl',
  scrollbar: {
    position: 'auto',
    autoHidden: false,
    showImgStatus: true,
    easyScroll: false
  },
  clickPageTurn: {
    enabled: 'ontouchstart' in document.documentElement,
    reverse: false,
    area: 'left_right'
  },
  firstPageFill: true,
  disableZoom: false,
  darkMode: false,
  swapPageTurnKey: false,
  jumpToNext: true,
  alwaysLoadAllImg: false,
  showComment: true,
  preloadPageNum: 20,
  pageNum: 0,
  autoSwitchPageMode: true,
  zoom: {
    ratio: 100,
    offset: {
      x: 0,
      y: 0
    }
  },
  scrollMode: {
    enabled: false,
    spacing: 0,
    imgScale: 1,
    fitToWidth: false,
    abreastMode: false,
    abreastDuplicate: 0.1
  },
  translation: {
    server: 'disable',
    localUrl: undefined,
    forceRetry: false,
    options: {
      size: 'M',
      detector: 'default',
      translator: 'gpt3.5',
      direction: 'auto',
      targetLanguage
    },
    onlyDownloadTranslated: false
  }
};
const defaultOption = () => JSON.parse(JSON.stringify(_defaultOption));
const optionState = {
  defaultOption: defaultOption(),
  option: defaultOption()
};

const otherState = {
  rootSize: {
    width: 0,
    height: 0
  },
  scrollbarSize: {
    width: 0,
    height: 0
  }
};

const propState = {
  commentList: undefined,
  hotkeys: {},
  prop: {
    Exit: undefined,
    Prev: undefined,
    Next: undefined,
    Loading: undefined,
    OptionChange: undefined,
    HotkeysChange: undefined,
    editButtonList: list => list,
    editSettingList: list => list
  }
};

const showState = {
  isMobile: false,
  isDragMode: false,
  activePageIndex: 0,
  gridMode: false,
  show: {
    toolbar: false,
    scrollbar: false,
    touchArea: false,
    endPage: undefined
  },
  page: {
    anima: '',
    vertical: false,
    offset: {
      x: {
        pct: 0,
        px: 0
      },
      y: {
        pct: 0,
        px: 0
      }
    }
  }
};

const {
  store,
  setState,
  _state,
  _setState
} = helper.useStore({
  ...imgState,
  ...showState,
  ...propState,
  ...optionState,
  ...otherState
});
const refs = {
  root: undefined,
  mangaBox: undefined,
  mangaFlow: undefined,
  touchArea: undefined,
  scrollbar: undefined,
  settingPanel: undefined,
  // 结束页上的按钮
  prev: undefined,
  next: undefined,
  exit: undefined
};

const useStyle = css => solidJs.onMount(() => helper.useStyle(css, refs.root));
const useStyleMemo = (selector, styleMapArg) => solidJs.onMount(() => helper.useStyleMemo(selector, styleMapArg, refs.root));

/** 在鼠标静止一段时间后自动隐藏 */
const useHiddenMouse = () => {
  const [hiddenMouse, setHiddenMouse] = solidJs.createSignal(true);
  const hidden = helper.debounce(() => setHiddenMouse(true), 1000);
  return {
    hiddenMouse,
    /** 鼠标移动 */
    onMouseMove() {
      setHiddenMouse(false);
      hidden();
    }
  };
};

/** 触发 onOptionChange */
const triggerOnOptionChange = helper.throttle(() => store.prop.OptionChange?.(helper.difference(store.option, store.defaultOption)), 1000);

/** 在 option 后手动触发 onOptionChange */
const setOption = fn => {
  setState(state => fn(state.option, state));
  triggerOnOptionChange();
};

/** 创建一个专门用于修改指定配置项的函数 */
const createStateSetFn = name => val => setOption(draftOption => helper.byPath(draftOption, name, () => val));

/** 创建用于将 ref 绑定到对应 state 上的工具函数 */
const bindRef = name => e => Reflect.set(refs, name, e);
const watchDomSize = (name, e) => {
  const resizeObserver = new ResizeObserver(([{
    contentRect
  }]) => {
    if (!contentRect.width || !contentRect.height) return;
    setState(state => {
      state[name] = {
        width: contentRect.width,
        height: contentRect.height
      };
    });
  });
  resizeObserver.disconnect();
  resizeObserver.observe(e);
  solidJs.onCleanup(() => resizeObserver.disconnect());
};

/** 将界面恢复到正常状态 */
const resetUI = state => {
  state.show.toolbar = false;
  state.show.scrollbar = false;
  state.show.touchArea = false;
};

const [defaultHotkeys, setDefaultHotkeys] = solidJs.createSignal({
  scroll_up: ['w', 'Shift + W', 'ArrowUp'],
  scroll_down: ['s', 'Shift + S', 'ArrowDown', ' '],
  scroll_left: ['a', 'Shift + A', ',', 'ArrowLeft'],
  scroll_right: ['d', 'Shift + D', '.', 'ArrowRight'],
  page_up: ['PageUp'],
  page_down: [' ', 'PageDown'],
  jump_to_home: ['Home'],
  jump_to_end: ['End'],
  exit: ['Escape'],
  switch_page_fill: ['/', 'm', 'z'],
  switch_scroll_mode: [],
  switch_grid_mode: [],
  switch_single_double_page_mode: [],
  switch_dir: [],
  switch_auto_enlarge: [],
  translate_current_page: []
});

/** 快捷键配置 */
const hotkeysMap = helper.createRootMemo(() => Object.fromEntries(Object.entries(store.hotkeys).flatMap(([name, key]) => key.map(k => [k, name]))));

// 1. 因为不同汉化组处理情况不同不可能全部适配，所以只能是尽量适配*出现频率更多*的情况
/** 记录自动修改过页面填充的图片流 */
const autoCloseFill = new Set();

/** 找到指定页面所处的图片流 */
const findFillIndex = (pageIndex, fillEffect) => {
  let nowFillIndex = pageIndex;
  while (!Reflect.has(fillEffect, nowFillIndex)) nowFillIndex -= 1;
  return nowFillIndex;
};

/** 判断图片是否是跨页图 */
const isWideImg = img => {
  switch (img.type ?? store.defaultImgType) {
    case 'long':
    case 'wide':
      return true;
    default:
      return false;
  }
};

/** 根据图片比例和填充页设置对漫画图片进行排列 */
const handleComicData = (imgList, fillEffect) => {
  const pageList = [];
  let imgCache = null;
  for (let i = 0; i < imgList.length; i += 1) {
    const img = imgList[i];
    if (fillEffect[i - 1]) {
      if (imgCache !== null) pageList.push([imgCache]);
      imgCache = -1;
    }
    if (isWideImg(img)) {
      if (imgCache !== null) {
        const nowFillIndex = findFillIndex(i, fillEffect);

        // 在除结尾外的位置出现了跨页图的话，那张跨页图大概率是页序的「正确答案」
        // 如果这张跨页导致了上面一页缺页，就说明在这之前的填充有误，应该据此调整之前的填充
        // 排除结尾是防止被结尾汉化组图误导
        // 自动调整毕竟有可能误判，所以每个跨页都应该只调整一次，不能重复修改
        if (!autoCloseFill.has(i) && i < imgList.length - 2) {
          autoCloseFill.add(i);
          fillEffect[nowFillIndex] = !fillEffect[nowFillIndex];
          return handleComicData(imgList, fillEffect);
        }
        if (imgCache !== -1) pageList.push([imgCache, -1]);
        imgCache = null;
      }
      if (fillEffect[i] === undefined) fillEffect[i] = false;
      pageList.push([i]);
    } else {
      if (imgCache === null) {
        imgCache = i;
      } else {
        pageList.push([imgCache, i]);
        imgCache = null;
      }
      if (Reflect.has(fillEffect, i)) Reflect.deleteProperty(fillEffect, i);
    }
  }
  if (imgCache !== null && imgCache !== -1) {
    pageList.push([imgCache, -1]);
    imgCache = null;
  }
  return pageList;
};

/** 当前是否为并排卷轴模式 */
const isAbreastMode = helper.createRootMemo(() => store.option.scrollMode.enabled && store.option.scrollMode.abreastMode);

/** 当前是否为普通卷轴模式 */
const isScrollMode = helper.createRootMemo(() => store.option.scrollMode.enabled && !store.option.scrollMode.abreastMode);

/** 当前显示页面 */
const activePage = helper.createRootMemo(() => store.pageList[store.activePageIndex] ?? []);

/** 当前显示的第一张图片的 index */
const activeImgIndex = helper.createRootMemo(() => activePage().find(i => i !== -1) ?? 0);

/** 当前所处的图片流 */
const nowFillIndex = helper.createRootMemo(() => findFillIndex(activeImgIndex(), store.fillEffect));

/** 预加载页数 */
const preloadNum = helper.createRootMemo(() => ({
  back: store.option.preloadPageNum,
  front: Math.floor(store.option.preloadPageNum / 2)
}));

/** 获取图片列表中指定属性的中位数 */
const getImgMedian = sizeFn => {
  const list = store.imgList.filter(img => img.loadType === 'loaded' && img.width).map(sizeFn).sort((a, b) => a - b);
  // 因为涉及到图片默认类型的计算，所以至少等到加载完三张图片再计算，避免被首页大图干扰
  if (list.length < 3) return null;
  return list[Math.floor(list.length / 2)];
};

/** 图片占位尺寸 */
const placeholderSize = helper.createThrottleMemo(() => ({
  width: getImgMedian(img => img.width) ?? 800,
  height: getImgMedian(img => img.height) ?? 1200
}), 500);

/** 并排卷轴模式下的列宽度 */
const abreastColumnWidth = helper.createRootMemo(() => isAbreastMode() ? placeholderSize().width * store.option.scrollMode.imgScale : 0);
const autoPageNum = helper.createThrottleMemo(() => store.rootSize.width >= store.rootSize.height ? 2 : 1);
const pageNum = helper.createRootMemo(() => store.option.pageNum || autoPageNum());

/** 是否为单页模式 */
const isOnePageMode = helper.createRootMemo(() => pageNum() === 1 || store.option.scrollMode.enabled || store.isMobile || store.imgList.length <= 1);

/** 重新计算图片排列 */
const updatePageData = state => {
  const lastActiveImgIndex = activeImgIndex();
  let newPageList = [];
  newPageList = isOnePageMode() ? state.imgList.map((_, i) => [i]) : handleComicData(state.imgList, state.fillEffect);
  if (helper.isEqual(state.pageList, newPageList)) return;
  state.pageList = newPageList;

  // 在图片排列改变后自动跳转回原先显示图片所在的页数
  if (lastActiveImgIndex !== activeImgIndex()) {
    const newActivePageIndex = state.pageList.findIndex(page => page.includes(lastActiveImgIndex));
    if (newActivePageIndex !== -1) state.activePageIndex = newActivePageIndex;
  }
};
updatePageData.throttle = helper.throttle(() => setState(updatePageData), 100);

/**
 * 将处理图片的相关变量恢复到初始状态
 *
 * 必须按照以下顺序调用
 * 1. 修改 imgList
 * 2. resetImgState
 * 3. updatePageData
 */
const resetImgState = state => {
  autoCloseFill.clear();
  // 如果用户没有手动修改过首页填充，才将其恢复初始
  if (typeof state.fillEffect['-1'] === 'boolean') state.fillEffect['-1'] = state.option.firstPageFill && state.imgList.length > 3;
};
helper.createEffectOn([pageNum, isOnePageMode], () => setState(updatePageData));

/** 记录每张图片所在的页面 */
const imgPageMap = helper.createRootMemo(() => {
  const map = {};
  for (let i = 0; i < store.pageList.length; i++) {
    for (const imgIndex of store.pageList[i]) if (imgIndex !== -1) map[imgIndex] = i;
  }
  return map;
});
const [_scrollTop, setScrollTop] = solidJs.createSignal(0);
/** 卷轴模式下的滚动距离 */
const scrollModTop = _scrollTop;
/** 滚动距离 */
const scrollTop = helper.createRootMemo(() => isAbreastMode() ? store.page.offset.x.px : scrollModTop());
const bindScrollTop = dom => {
  dom.addEventListener('scroll', () => setScrollTop(dom.scrollTop), {
    passive: true
  });
};

// 窗口宽度小于800像素时，标记为移动端
helper.createEffectOn(() => store.rootSize.width, width => {
  const isMobile = helper.inRange(1, width, 800);
  if (isMobile === store.isMobile) return;
  setState(state => {
    state.isMobile = isMobile;
    resetImgState(state);
    updatePageData(state);
  });
});

const isWideType = type => type === 'wide' || type === 'long';

// https://www.figma.com/design/h0x2ZHVh3P3bCbnszonRqk/漫画双页阅读比例图
// https://github.com/hymbz/ComicReadScript/issues/174#issuecomment-2252114640
// 用于判断图片类型的比例
const 单页比例 = 1920 / 2 / 1080;
const 横幅比例 = 1920 / 1080;
const 条漫比例 = 1920 / 2 / 1080 / 2;

/** 根据比例判断图片类型 */
const getImgType = img => {
  const imgRatio = img.width / img.height;
  if (imgRatio <= 单页比例) return imgRatio < 条漫比例 ? 'vertical' : '';
  return imgRatio > 横幅比例 ? 'long' : 'wide';
};

/** 更新图片类型。返回是否修改了图片类型 */
const updateImgType = (state, draftImg) => {
  const {
    type
  } = draftImg;
  if (!draftImg.width || !draftImg.height) return false;
  draftImg.type = getImgType(draftImg);
  if (isWideType(type) !== isWideType(draftImg.type)) updatePageData.throttle();
  return (type ?? state.defaultImgType) !== draftImg.type;
};

/** 是否自动开启过卷轴模式 */
let autoScrollMode = false;
helper.createRootEffect(prevIsWide => {
  if (store.rootSize.width === 0 || store.rootSize.height === 0) return;
  const defaultImgType = getImgType(placeholderSize());
  if (defaultImgType === store.defaultImgType) return prevIsWide;
  const isWide = isWideType(defaultImgType);
  setState(state => {
    state.defaultImgType = defaultImgType;

    // 连续出现多张长图后，自动开启卷轴模式
    if (defaultImgType === 'vertical' && !autoScrollMode && !state.option.scrollMode.enabled) {
      state.option.scrollMode.enabled = true;
      autoScrollMode = true;
      return;
    }
    if (isWide !== prevIsWide) updatePageData(state);
  });
  return isWide;
}, false);

let height = 0;
let width = 0;
const setWidth = w => {
  height *= w / width;
  width = w;
  return {
    height,
    width
  };
};

/** 获取指定图片的显示尺寸 */
const getImgDisplaySize = (state, index) => {
  const img = state.imgList[index];
  height = img.height ?? placeholderSize().height;
  width = img.width ?? placeholderSize().width;
  if (!state.option.scrollMode.enabled) return {
    height,
    width
  };
  if (isAbreastMode()) return setWidth(abreastColumnWidth());
  if (state.option.scrollMode.fitToWidth) return setWidth(state.rootSize.width);
  height *= state.option.scrollMode.imgScale;
  width *= state.option.scrollMode.imgScale;
  if (width > state.rootSize.width) return setWidth(state.rootSize.width);
  return {
    height,
    width
  };
};

/** 更新图片尺寸 */
const updateImgSize = (state, index, width, height) => {
  const img = state.imgList[index];
  if (img.width === width && img.height === height) return;
  img.width = width;
  img.height = height;
  img.size = getImgDisplaySize(state, index);
  updateImgType(state, img);
};
helper.createEffectOn([() => store.imgList, () => store.option.scrollMode.enabled, () => store.option.scrollMode.abreastMode, () => store.option.scrollMode.fitToWidth, () => store.option.scrollMode.imgScale, () => store.rootSize, placeholderSize], ([imgList]) => {
  if (imgList.length === 0) return;
  setState(state => {
    for (const [index, img] of state.imgList.entries()) img.size = getImgDisplaySize(state, index);
  });
});

/** 卷轴模式下每张图片的位置 */
const imgTopList = helper.createRootMemo(() => {
  if (!store.option.scrollMode.enabled) return [];
  const list = Array.from({
    length: store.imgList.length
  });
  let top = 0;
  for (let i = 0; i < store.imgList.length; i++) {
    list[i] = top;
    top += store.imgList[i].size.height + store.option.scrollMode.spacing * 7;
  }
  return list;
});

/** 卷轴模式下漫画流的总高度 */
const contentHeight = helper.createRootMemo(() => (imgTopList().at(-1) ?? 0) + (store.imgList.at(-1)?.size.height ?? 0));

// /** 预加载图片尺寸 */
// const preloadImgSize = singleThreaded(async () => {
//   let index = 0;
//   for (; index < store.imgList.length; index++) {
//     const img = store.imgList[index];
//     if (img.size === undefined) continue;
//     const size = await getImgSize(img.src);
//     if (!size) continue;
//     // 防止加载过程中 imgList 变了的情况
//     if (store.imgList[index].src !== img.src) break;
//     // eslint-disable-next-line @typescript-eslint/no-loop-func
//     setState((state) => updateImgSize(state, index, ...size));
//   }
//
//   if (index < store.imgList.length) requestIdleCallback(preloadImgSize);
// });
//
// 空闲期间预加载所有图片的尺寸
// 卷轴模式下需要提前知道尺寸方便正确布局
// 翻页模式下也需要提前发现跨页图重新排序
// requestIdleCallback(preloadImgSize);
var css$1 = ".img img{display:block;object-fit:contain}.img,.img img{height:100%;width:100%}.img{align-content:center;content-visibility:hidden;display:none;margin-left:auto;margin-right:auto;position:relative}.img[data-show]{content-visibility:visible;display:block}.img>picture{background-color:var(--hover-bg-color,#fff3);background-image:var(--md-photo);background-position:50%;background-repeat:no-repeat;background-size:30%;display:block;height:auto;inset:0;margin-bottom:auto;margin-left:inherit;margin-right:inherit;margin-top:auto;max-height:100%;max-width:100%;position:absolute;width:auto}.img[data-load-type=error]>picture:after{background:inherit;background-color:#eee;background-image:var(--md-image-not-supported);content:\\"\\";height:100%;pointer-events:none;position:absolute;right:0;top:0;width:100%}.img[data-load-type=loading]>picture{background-image:var(--md-cloud-download)}:is(.img[data-load-type=loading]>picture) img{animation:show 1s forwards}.mangaFlow[dir=ltr] .img[data-show=\\"1\\"],.mangaFlow[dir=rtl] .img[data-show=\\"0\\"]{margin-left:0;margin-right:auto}.mangaFlow[dir=ltr] .img[data-show=\\"0\\"],.mangaFlow[dir=rtl] .img[data-show=\\"1\\"]{margin-left:auto;margin-right:0}.mangaFlow{display:grid;grid-auto-columns:100%;grid-auto-flow:column;grid-auto-rows:100%;touch-action:none;transform-origin:0 0;-webkit-user-select:none;user-select:none;grid-row-gap:0;backface-visibility:hidden;color:var(--text);height:100%;place-items:center;width:100%}.mangaFlow[data-disable-zoom] .img>picture{height:fit-content;width:fit-content}.mangaFlow[data-hidden-mouse=true]{cursor:none}.mangaFlow[data-vertical]{grid-auto-flow:row}.mangaBox{contain:layout style;height:100%;transform-origin:0 0;transition-duration:0ms;width:100%}.mangaBox[data-animation=page] .mangaFlow,.mangaBox[data-animation=zoom]{transition-duration:.3s}.root:not([data-grid-mode]) .mangaBox{scrollbar-width:none}:is(.root:not([data-grid-mode]) .mangaBox)::-webkit-scrollbar{display:none}.root[data-grid-mode] .mangaFlow{grid-auto-columns:1fr;grid-auto-flow:row;grid-auto-rows:max-content;overflow:auto;grid-row-gap:1.5em;align-items:end;box-sizing:border-box;grid-template-rows:unset}:is(.root[data-grid-mode] .mangaFlow) .img{cursor:pointer;margin-left:auto;margin-right:auto}:is(:is(.root[data-grid-mode] .mangaFlow) .img)>picture{position:relative}:is(:is(.root[data-grid-mode] .mangaFlow) .img)>.gridModeTip{bottom:-1.5em;cursor:auto;direction:ltr;line-height:1.5em;opacity:.5;overflow:hidden;position:absolute;text-align:center;text-overflow:ellipsis;white-space:nowrap;width:100%}[data-load-type=error]:is(:is(.root[data-grid-mode] .mangaFlow) .img),[data-load-type=wait]:is(:is(.root[data-grid-mode] .mangaFlow) .img),[src=\\"\\"]:is(:is(.root[data-grid-mode] .mangaFlow) .img){height:100%}.root[data-scroll-mode]:not([data-grid-mode]) .mangaBox{overflow:auto}:is(.root[data-scroll-mode]:not([data-grid-mode]) .mangaBox) .mangaFlow{grid-row-gap:calc(var(--scroll-mode-spacing)*7px);height:fit-content}[data-abreast-scroll]:is(.root[data-scroll-mode]:not([data-grid-mode]) .mangaBox){overflow:hidden}[data-abreast-scroll]:is(.root[data-scroll-mode]:not([data-grid-mode]) .mangaBox) .mangaFlow{grid-column-gap:calc(var(--scroll-mode-spacing)*7px);align-items:start;height:100%}:is([data-abreast-scroll]:is(.root[data-scroll-mode]:not([data-grid-mode]) .mangaBox) .mangaFlow) .img{height:auto;width:100%;will-change:transform}:is(:is([data-abreast-scroll]:is(.root[data-scroll-mode]:not([data-grid-mode]) .mangaBox) .mangaFlow) .img)>picture{position:relative}@keyframes show{0%{opacity:0}90%{opacity:0}to{opacity:1}}.endPage{align-items:center;background-color:#333d;color:#fff;display:flex;height:100%;justify-content:center;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity .5s;width:100%;z-index:10}.endPage>button{animation:jello .3s forwards;background-color:initial;color:inherit;cursor:pointer;font-size:1.2em;transform-origin:center}[data-is-end]:is(.endPage>button){font-size:3em;margin:2em}.endPage>.tip{margin:auto;position:absolute}.endPage[data-show]{opacity:1;pointer-events:all}.endPage[data-type=start]>.tip{transform:translateY(-10em)}.endPage[data-type=end]>.tip{transform:translateY(10em)}.root[data-mobile] .endPage>button{width:1em}.comments{align-items:flex-end;display:flex;flex-direction:column;max-height:80%;opacity:.3;overflow:auto;padding-right:.5em;position:absolute;right:1em;width:20em}.comments>p{background-color:#333b;border-radius:.5em;margin:.5em .1em;padding:.2em .5em}.comments:hover{opacity:1}.root[data-mobile] .comments{max-height:15em;opacity:.8;top:calc(50% + 15em)}@keyframes jello{0%,11.1%,to{transform:translateZ(0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.7812deg) skewY(-.7812deg)}77.7%{transform:skewX(.3906deg) skewY(.3906deg)}88.8%{transform:skewX(-.1953deg) skewY(-.1953deg)}}.toolbar{align-items:center;display:flex;height:100%;justify-content:flex-start;position:fixed;top:0;z-index:9}.toolbarPanel{display:flex;flex-direction:column;padding:.5em;position:relative;transform:translateX(-100%);transition:transform .2s}:is(.toolbar[data-show],.toolbar:hover) .toolbarPanel{transform:none}.toolbar[data-close] .toolbarPanel{transform:translateX(-100%);visibility:hidden}.toolbarBg{background-color:var(--page-bg);border-bottom-right-radius:1em;border-top-right-radius:1em;filter:opacity(.8);height:100%;position:absolute;right:0;top:0;width:100%}.root[data-mobile] .toolbar{font-size:1.3em}.root[data-mobile] .toolbar:not([data-show]){pointer-events:none}.root[data-mobile] .toolbarBg{filter:opacity(.8)}.SettingPanelPopper{height:0!important;padding:0!important;pointer-events:unset!important;transform:none!important}.SettingPanel{background-color:var(--page-bg);border-radius:.3em;bottom:0;box-shadow:0 3px 1px -2px #0003,0 2px 2px 0 #00000024,0 1px 5px 0 #0000001f;color:var(--text);font-size:1.2em;height:fit-content;margin:auto;max-height:95%;max-width:calc(100% - 5em);overflow:auto;position:fixed;top:0;-webkit-user-select:text;user-select:text;z-index:1}.SettingPanel hr{color:#fff;margin:0}.SettingBlock{display:grid;grid-template-rows:max-content 1fr;transition:grid-template-rows .2s ease-out}.SettingBlock .SettingBlockBody{overflow:hidden;padding:0 .5em 1em;z-index:0}:is(.SettingBlock .SettingBlockBody)>div+:is(.SettingBlock .SettingBlockBody)>div{margin-top:1em}.SettingBlock[data-show=false]{grid-template-rows:max-content 0fr;padding-bottom:unset}.SettingBlock[data-show=false] .SettingBlockBody{padding:unset}.SettingBlockSubtitle{background-color:var(--page-bg);color:var(--text-secondary);cursor:pointer;font-size:.7em;height:3em;line-height:3em;margin-bottom:.1em;position:sticky;text-align:center;top:0;z-index:1}.SettingsItem{align-items:center;display:flex;justify-content:space-between}.SettingsItem+.SettingsItem{margin-top:1em}.SettingsItemName{font-size:.9em;max-width:calc(100% - 4em);overflow-wrap:anywhere;text-align:start;white-space:pre-wrap}.SettingsItemSwitch{align-items:center;background-color:var(--switch-bg);border:0;border-radius:1em;cursor:pointer;display:inline-flex;height:.8em;margin:.3em;padding:0;width:2.3em}.SettingsItemSwitchRound{background:var(--switch);border-radius:100%;box-shadow:0 2px 1px -1px #0003,0 1px 1px 0 #00000024,0 1px 3px 0 #0000001f;height:1.15em;transform:translateX(-10%);transition:transform .1s;width:1.15em}.SettingsItemSwitch[data-checked=true]{background:var(--secondary-bg)}.SettingsItemSwitch[data-checked=true] .SettingsItemSwitchRound{background:var(--secondary);transform:translateX(110%)}.SettingsItemIconButton{background-color:initial;border:none;color:var(--text);cursor:pointer;font-size:1.7em;height:1em;margin:0 .2em 0 0;padding:0}.SettingsItemSelect{background-color:var(--hover-bg-color);border:none;border-radius:5px;cursor:pointer;font-size:.9em;margin:0;max-width:6.5em;outline:none;padding:.3em}.closeCover{height:100%;left:0;position:fixed;top:0;width:100%}.SettingsShowItem{display:grid;transition:grid-template-rows .2s ease-out}.SettingsShowItem>.SettingsShowItemBody{overflow:hidden}:is(.SettingsShowItem>.SettingsShowItemBody)>.SettingsItem{margin-top:1em}.hotkeys{align-items:center;border-bottom:1px solid var(--secondary-bg);color:var(--text);display:flex;flex-grow:1;flex-wrap:wrap;font-size:.9em;padding:2em .2em .2em;position:relative;z-index:1}.hotkeys+.hotkeys{margin-top:.5em}.hotkeys:last-child{border-bottom:none}.hotkeysItem{align-items:center;border-radius:.3em;box-sizing:initial;cursor:pointer;display:flex;font-family:serif;height:1em;margin:.3em;outline:1px solid;outline-color:var(--secondary-bg);padding:.2em 1.2em}.hotkeysItem>svg{background-color:var(--text);border-radius:1em;color:var(--page-bg);display:none;height:1em;margin-left:.4em;opacity:.5}:is(.hotkeysItem>svg):hover{opacity:.9}.hotkeysItem:hover{padding:.2em .5em}.hotkeysItem:hover>svg{display:unset}.hotkeysItem:focus,.hotkeysItem:focus-visible{outline:var(--text) solid 2px}.hotkeysHeader{align-items:center;box-sizing:border-box;display:flex;left:0;padding:0 .5em;position:absolute;top:0;width:100%}.hotkeysHeader>p{background-color:var(--page-bg);line-height:1em;overflow-wrap:anywhere;text-align:start;white-space:pre-wrap}.hotkeysHeader>div[title]{background-color:var(--page-bg);cursor:pointer;display:flex;transform:scale(0);transition:transform .1s}:is(.hotkeysHeader>div[title])>svg{width:1.6em}.hotkeys:hover div[title]{transform:scale(1)}.scrollbar{--arrow-y:clamp(0.45em,calc(var(--slider-midpoint)),calc(var(--scroll-length) - 0.45em));border-left:max(6vw,1em) solid #0000;height:98%;position:absolute;right:3px;top:1%;touch-action:none;-webkit-user-select:none;user-select:none;width:5px;z-index:9}.scrollbar,.scrollbar>div{display:flex;flex-direction:column}.scrollbar>div{align-items:center;flex-grow:1;justify-content:center;pointer-events:none}.scrollbarPage{background-color:var(--secondary);flex-grow:1;height:100%;transform:scaleY(1);transform-origin:bottom;transition:transform 1s;width:100%}.scrollbarPage[data-type=loaded]{transform:scaleY(0)}.scrollbarPage[data-type=wait]{opacity:.5}.scrollbarPage[data-type=error]{background-color:#f005}.scrollbarPage[data-null]{background-color:#fbc02d}.scrollbarPage[data-translation-type]{background-color:initial;transform:scaleY(1);transform-origin:top}.scrollbarPage[data-translation-type=wait]{background-color:#81c784}.scrollbarPage[data-translation-type=show]{background-color:#4caf50}.scrollbarPage[data-translation-type=error]{background-color:#f005}.scrollbarSlider{background-color:var(--scrollbar-slider);border-radius:1em;height:var(--slider-height);justify-content:center;opacity:1;position:absolute;transform:translateY(var(--slider-top));transition:transform .15s,opacity .15s;width:100%;z-index:1}.scrollbarPoper{--poper-top:clamp(0%,calc(var(--slider-midpoint) - 50%),calc(var(--scroll-length) - 100%));background-color:#303030;border-radius:.3em;color:#fff;font-size:.8em;line-height:1.5em;min-height:1.5em;min-width:1em;padding:.2em .5em;position:absolute;right:2em;text-align:center;transform:translateY(var(--poper-top));white-space:pre;width:fit-content}.scrollbar:before{background-color:initial;border:.4em solid #0000;border-left:.5em solid #303030;content:\\"\\";position:absolute;right:2em;transform:translate(140%,calc(var(--arrow-y) - 50%))}.scrollbar:before,.scrollbarPoper{opacity:0;transition:opacity .15s,transform .15s}:is(.scrollbar:hover,.scrollbar[data-force-show]) .scrollbarPoper,:is(.scrollbar:hover,.scrollbar[data-force-show]) .scrollbarSlider,:is(.scrollbar:hover,.scrollbar[data-force-show]):before{opacity:1}.scrollbar[data-drag] .scrollbarPoper,.scrollbar[data-drag] .scrollbarSlider,.scrollbar[data-drag]:before{transition:opacity .15s}.scrollbar[data-auto-hidden]:not([data-force-show]) .scrollbarSlider{opacity:0}.scrollbar[data-auto-hidden]:not([data-force-show]):hover .scrollbarSlider{opacity:1}.scrollbar[data-position=hidden]{display:none}.scrollbar[data-position=top]{border-bottom:max(6vh,1em) solid #0000;top:1px}.scrollbar[data-position=top]:before{border-bottom:.5em solid #303030;right:0;top:1.2em;transform:translate(var(--arrow-x),-120%)}.scrollbar[data-position=top] .scrollbarPoper{top:1.2em}.scrollbar[data-position=bottom]{border-top:max(6vh,1em) solid #0000;bottom:1px;top:unset}.scrollbar[data-position=bottom]:before{border-top:.5em solid #303030;bottom:1.2em;right:0;transform:translate(var(--arrow-x),120%)}.scrollbar[data-position=bottom] .scrollbarPoper{bottom:1.2em}.scrollbar[data-position=bottom],.scrollbar[data-position=top]{--arrow-x:calc(var(--arrow-y)*-1 + 50%);border-left:none;flex-direction:row-reverse;height:5px;right:1%;width:98%}:is(.scrollbar[data-position=top],.scrollbar[data-position=bottom]):before{border-left:.4em solid #0000}:is(.scrollbar[data-position=top],.scrollbar[data-position=bottom]) .scrollbarSlider{height:100%;transform:translateX(calc(var(--slider-top)*-1));width:var(--slider-height)}:is(.scrollbar[data-position=top],.scrollbar[data-position=bottom]) .scrollbarPoper{padding:.1em .3em;right:unset;transform:translateX(calc(var(--poper-top)*-1))}[data-dir=ltr]:is(.scrollbar[data-position=top],.scrollbar[data-position=bottom]){--arrow-x:calc(var(--arrow-y) - 50%);flex-direction:row}[data-dir=ltr]:is(.scrollbar[data-position=top],.scrollbar[data-position=bottom]):before{left:0;right:unset}[data-dir=ltr]:is(.scrollbar[data-position=top],.scrollbar[data-position=bottom]) .scrollbarSlider{transform:translateX(var(--top))}[data-dir=ltr]:is(.scrollbar[data-position=top],.scrollbar[data-position=bottom]) .scrollbarPoper{transform:translateX(var(--poper-top))}:is(.scrollbar[data-position=top],.scrollbar[data-position=bottom]) .scrollbarPage{transform:scaleX(1)}[data-type=loaded]:is(:is(.scrollbar[data-position=top],.scrollbar[data-position=bottom]) .scrollbarPage){transform:scaleX(0)}[data-translation-type]:is(:is(.scrollbar[data-position=top],.scrollbar[data-position=bottom]) .scrollbarPage){transform:scaleX(1)}.scrollbar[data-is-abreast-mode] .scrollbarPoper{line-height:1.5em;text-orientation:upright;writing-mode:vertical-rl}.scrollbar[data-is-abreast-mode][data-dir=ltr] .scrollbarPoper{writing-mode:vertical-lr}.root[data-scroll-mode] .scrollbar:before,.root[data-scroll-mode] :is(.scrollbarSlider,.scrollbarPoper){transition:opacity .15s}:is(.root[data-mobile] .scrollbar:hover) .scrollbarPoper,:is(.root[data-mobile] .scrollbar:hover):before{opacity:0}.touchAreaRoot{color:#fff;display:grid;font-size:3em;grid-template-columns:1fr min(30%,10em) 1fr;grid-template-rows:1fr min(20%,10em) 1fr;height:100%;letter-spacing:.5em;opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity .4s;-webkit-user-select:none;user-select:none;width:100%}.touchAreaRoot[data-show]{opacity:1}.touchAreaRoot .touchArea{align-items:center;display:flex;justify-content:center;text-align:center}[data-area=PREV]:is(.touchAreaRoot .touchArea),[data-area=prev]:is(.touchAreaRoot .touchArea){background-color:#95e1d3e6}[data-area=MENU]:is(.touchAreaRoot .touchArea),[data-area=menu]:is(.touchAreaRoot .touchArea){background-color:#fce38ae6}[data-area=NEXT]:is(.touchAreaRoot .touchArea),[data-area=next]:is(.touchAreaRoot .touchArea){background-color:#f38181e6}[data-area=PREV]:is(.touchAreaRoot .touchArea):after{content:var(--i18n-touch-area-prev)}[data-area=MENU]:is(.touchAreaRoot .touchArea):after{content:var(--i18n-touch-area-menu)}[data-area=NEXT]:is(.touchAreaRoot .touchArea):after{content:var(--i18n-touch-area-next)}.touchAreaRoot[data-vert=true]{flex-direction:column!important}.touchAreaRoot:not([data-turn-page]) .touchArea[data-area=NEXT],.touchAreaRoot:not([data-turn-page]) .touchArea[data-area=PREV],.touchAreaRoot:not([data-turn-page]) .touchArea[data-area=next],.touchAreaRoot:not([data-turn-page]) .touchArea[data-area=prev]{visibility:hidden}.touchAreaRoot[data-area=edge]{grid-template-columns:1fr min(30%,10em) 1fr}.root[data-mobile] .touchAreaRoot{flex-direction:column!important;letter-spacing:0}.root[data-mobile] [data-area]:after{font-size:.8em}.root{background-color:var(--bg);font-size:1em;height:100%;outline:0;overflow:hidden;position:relative;width:100%}.root a{color:var(--text-secondary)}.root[data-mobile]{font-size:.8em}.hidden{display:none!important}.invisible{visibility:hidden!important}.beautifyScrollbar{scrollbar-color:var(--scrollbar-slider) #0000;scrollbar-width:thin}.beautifyScrollbar::-webkit-scrollbar{height:10px;width:5px}.beautifyScrollbar::-webkit-scrollbar-track{background:#0000}.beautifyScrollbar::-webkit-scrollbar-thumb{background:var(--scrollbar-slider)}img,p{margin:0}:where(div,div:focus,div:focus-within,div:focus-visible,button){border:none;outline:none}blockquote{border-left:.25em solid var(--text-secondary,#607d8b);color:var(--text-secondary);font-style:italic;line-height:1.2em;margin:.5em 0 0;overflow-wrap:anywhere;padding:0 0 0 1em;text-align:start;white-space:pre-wrap}svg{width:1em}";
var modules_c21c94f2$1 = {"img":"img","show":"show","mangaFlow":"mangaFlow","mangaBox":"mangaBox","root":"root","gridModeTip":"gridModeTip","endPage":"endPage","jello":"jello","tip":"tip","comments":"comments","toolbar":"toolbar","toolbarPanel":"toolbarPanel","toolbarBg":"toolbarBg","SettingPanelPopper":"SettingPanelPopper","SettingPanel":"SettingPanel","SettingBlock":"SettingBlock","SettingBlockBody":"SettingBlockBody","SettingBlockSubtitle":"SettingBlockSubtitle","SettingsItem":"SettingsItem","SettingsItemName":"SettingsItemName","SettingsItemSwitch":"SettingsItemSwitch","SettingsItemSwitchRound":"SettingsItemSwitchRound","SettingsItemIconButton":"SettingsItemIconButton","SettingsItemSelect":"SettingsItemSelect","closeCover":"closeCover","SettingsShowItem":"SettingsShowItem","SettingsShowItemBody":"SettingsShowItemBody","hotkeys":"hotkeys","hotkeysItem":"hotkeysItem","hotkeysHeader":"hotkeysHeader","scrollbar":"scrollbar","scrollbarPage":"scrollbarPage","scrollbarSlider":"scrollbarSlider","scrollbarPoper":"scrollbarPoper","touchAreaRoot":"touchAreaRoot","touchArea":"touchArea","hidden":"hidden","invisible":"invisible","beautifyScrollbar":"beautifyScrollbar"};

const touches = new Map();
const bound = helper.createMemoMap({
  x: () => -store.rootSize.width * (store.option.zoom.ratio / 100 - 1),
  y: () => -store.rootSize.height * (store.option.zoom.ratio / 100 - 1)
});
const checkBound = state => {
  state.option.zoom.offset.x = helper.clamp(bound().x, state.option.zoom.offset.x, 0);
  state.option.zoom.offset.y = helper.clamp(bound().y, state.option.zoom.offset.y, 0);
};
const zoom = (val, focal, animation = false) => {
  const newScale = helper.clamp(100, val, 300);
  if (newScale === store.option.zoom.ratio) return;

  // 消除放大导致的偏移
  const {
    left,
    top
  } = refs.mangaBox.getBoundingClientRect();
  const x = (focal?.x ?? store.rootSize.width / 2) - left;
  const y = (focal?.y ?? store.rootSize.height / 2) - top;

  // 当前直接放大后的基准点坐标
  const newX = x / (store.option.zoom.ratio / 100) * (newScale / 100);
  const newY = y / (store.option.zoom.ratio / 100) * (newScale / 100);

  // 放大后基准点的偏移距离
  const dx = newX - x;
  const dy = newY - y;
  setOption((draftOption, state) => {
    draftOption.zoom.ratio = newScale;
    draftOption.zoom.offset.x -= dx;
    draftOption.zoom.offset.y -= dy;
    checkBound(state);
    if (animation) state.page.anima = 'zoom';
  });
};

//
// 惯性滑动
//

/** 摩擦系数 */
const FRICTION_COEFF$1 = 0.91;
const mouse = {
  x: 0,
  y: 0
};
const last = {
  x: 0,
  y: 0
};
const velocity = {
  x: 0,
  y: 0
};
let animationId$2 = null;
const cancelAnimation = () => {
  if (!animationId$2) return;
  cancelAnimationFrame(animationId$2);
  animationId$2 = null;
};
let lastTime$1 = 0;

/** 逐帧计算惯性滑动 */
const handleSlideAnima = timestamp => {
  // 当速率足够小时停止计算动画
  if (helper.approx(velocity.x, 0, 1) && helper.approx(velocity.y, 0, 1)) {
    animationId$2 = null;
    return;
  }

  // 在拖拽后模拟惯性滑动
  setOption((draftOption, state) => {
    draftOption.zoom.offset.x += velocity.x;
    draftOption.zoom.offset.y += velocity.y;
    checkBound(state);

    // 确保每16毫秒才减少一次速率，防止在高刷新率显示器上衰减过快
    if (timestamp - lastTime$1 > 16) {
      velocity.x *= FRICTION_COEFF$1;
      velocity.y *= FRICTION_COEFF$1;
      lastTime$1 = timestamp;
    }
  });
  animationId$2 = requestAnimationFrame(handleSlideAnima);
};

/** 逐帧根据鼠标坐标移动元素，并计算速率 */
const handleDragAnima$1 = () => {
  // 当停着不动时退出循环
  if (mouse.x === store.option.zoom.offset.x && mouse.y === store.option.zoom.offset.y) {
    animationId$2 = null;
    return;
  }
  setOption((draftOption, state) => {
    last.x = draftOption.zoom.offset.x;
    last.y = draftOption.zoom.offset.y;
    draftOption.zoom.offset.x = mouse.x;
    draftOption.zoom.offset.y = mouse.y;
    checkBound(state);
    velocity.x = draftOption.zoom.offset.x - last.x;
    velocity.y = draftOption.zoom.offset.y - last.y;
  });
  animationId$2 = requestAnimationFrame(handleDragAnima$1);
};

/** 是否正在双指捏合缩放中 */
let pinchZoom = false;

/** 处理放大后的拖拽移动 */
const handleZoomDrag = ({
  type,
  xy: [x, y],
  last: [lx, ly]
}) => {
  if (store.option.zoom.ratio === 100) return;
  switch (type) {
    case 'down':
      {
        mouse.x = store.option.zoom.offset.x;
        mouse.y = store.option.zoom.offset.y;
        if (animationId$2) cancelAnimation();
        break;
      }
    case 'move':
      {
        if (animationId$2) cancelAnimation();
        mouse.x += x - lx;
        mouse.y += y - ly;
        if (animationId$2 === null) animationId$2 = requestAnimationFrame(handleDragAnima$1);
        break;
      }
    case 'up':
      {
        // 当双指捏合结束，一个手指抬起时，将剩余的指针当作刚点击来处理
        if (pinchZoom) {
          pinchZoom = false;
          mouse.x = store.option.zoom.offset.x;
          mouse.y = store.option.zoom.offset.y;
          return;
        }
        if (animationId$2) cancelAnimationFrame(animationId$2);
        animationId$2 = requestAnimationFrame(handleSlideAnima);
      }
  }
};

//
// 双指捏合缩放
//

/** 初始双指距离 */
let initDistance = 0;
/** 初始缩放比例 */
let initScale = 100;

/** 获取两个指针之间的距离 */
const getDistance = (a, b) => Math.hypot(b.xy[0] - a.xy[0], b.xy[1] - a.xy[1]);

/** 逐帧计算当前屏幕上两点之间的距离，并换算成缩放比例 */
const handlePinchZoomAnima = () => {
  if (touches.size < 2) {
    animationId$2 = null;
    return;
  }
  const [a, b] = [...touches.values()];
  const distance = getDistance(a, b);
  zoom(distance / initDistance * initScale, {
    x: (a.xy[0] + b.xy[0]) / 2,
    y: (a.xy[1] + b.xy[1]) / 2
  });
  animationId$2 = requestAnimationFrame(handlePinchZoomAnima);
};

/** 处理双指捏合缩放 */
const handlePinchZoom = ({
  type
}) => {
  if (touches.size < 2) return;
  switch (type) {
    case 'down':
      {
        pinchZoom = true;
        const [a, b] = [...touches.values()];
        initDistance = getDistance(a, b);
        initScale = store.option.zoom.ratio;
        break;
      }
    case 'up':
      {
        const [a, b] = [...touches.values()];
        initDistance = getDistance(a, b);
        break;
      }
    case 'move':
      {
        if (animationId$2 === null) animationId$2 = requestAnimationFrame(handlePinchZoomAnima);
        break;
      }
    case 'cancel':
      {
        const [a, b] = [...touches.values()];
        initDistance = getDistance(a, b);
        break;
      }
  }
};

const setMessage = (i, msg) => _setState('imgList', i, 'translationMessage', msg);
const request = (url, details) => new Promise((resolve, reject) => {
  if (typeof GM_xmlhttpRequest === 'undefined') reject(new Error(helper.t('pwa.alert.userscript_not_installed')));
  GM_xmlhttpRequest({
    method: 'GET',
    url,
    headers: {
      Referer: window.location.href
    },
    ...details,
    onload: resolve,
    onerror: reject,
    ontimeout: reject
  });
});
const download = async url => {
  if (url.startsWith('blob:')) {
    const res = await fetch(url);
    return res.blob();
  }
  const res = await request(url, {
    responseType: 'blob'
  });
  return res.response;
};
const createFormData = imgBlob => {
  const file = new File([imgBlob], \`image.\${imgBlob.type.split('/').at(-1)}\`, {
    type: imgBlob.type
  });
  const formData = new FormData();
  formData.append('file', file);
  formData.append('mime', file.type);
  formData.append('size', store.option.translation.options.size);
  formData.append('detector', store.option.translation.options.detector);
  formData.append('direction', store.option.translation.options.direction);
  formData.append('translator', store.option.translation.options.translator);
  formData.append('tgt_lang', store.option.translation.options.targetLanguage);
  formData.append('target_language', store.option.translation.options.targetLanguage);
  formData.append('retry', \`\${store.option.translation.forceRetry}\`);
  return formData;
};

/** 将站点列表转为选择器中的选项 */
const createOptions = list => list.map(name => [name, helper.t(\`translation.translator.\${name}\`) || name]);

const url = () => store.option.translation.localUrl || 'http://127.0.0.1:5003';

/** 获取部署服务的可用翻译 */
const getValidTranslators = async () => {
  try {
    const res = await request(\`\${url()}\`);
    const translatorsText = /(?<=validTranslators: ).+?(?=,\\n)/.exec(res.responseText)?.[0];
    if (!translatorsText) return undefined;
    const list = JSON.parse(translatorsText.replaceAll(\`'\`, \`"\`));
    return createOptions(list);
  } catch (error) {
    helper.log.error(helper.t('translation.tip.get_translator_list_error'), error);
    return undefined;
  }
};

/** 使用自部署服务器翻译指定图片 */
const selfhostedTranslation = async i => {
  if (!(await getValidTranslators())) throw new Error(helper.t('alert.server_connect_failed'));
  const img = store.imgList[i];
  setMessage(i, helper.t('translation.tip.img_downloading'));
  let imgBlob;
  try {
    imgBlob = await download(img.src);
  } catch (error) {
    helper.log.error(error);
    throw new Error(helper.t('translation.tip.download_img_failed'));
  }
  let task_id;
  // 上传图片取得任务 id
  try {
    const res = await request(\`\${url()}/submit\`, {
      method: 'POST',
      responseType: 'json',
      data: createFormData(imgBlob)
    });
    task_id = res.response.task_id;
  } catch (error) {
    helper.log.error(error);
    throw new Error(helper.t('translation.tip.upload_error'));
  }
  let errorNum = 0;
  let taskState;
  // 等待翻译完成
  while (!taskState?.finished) {
    try {
      await helper.sleep(200);
      const res = await request(\`\${url()}/task-state?taskid=\${task_id}\`, {
        responseType: 'json'
      });
      taskState = res.response;
      setMessage(i, \`\${helper.t(\`translation.status.\${taskState.state}\`) || taskState.state}\`);
    } catch (error) {
      helper.log.error(error);
      if (errorNum > 5) throw new Error(helper.t('translation.tip.check_img_status_failed'));
      errorNum += 1;
    }
  }
  return URL.createObjectURL(await download(\`\${url()}/result/\${task_id}\`));
};

const handleMessage = (msg, i) => {
  switch (msg.type) {
    case 'result':
      return msg.result.translation_mask;
    case 'pending':
      setMessage(i, helper.t('translation.tip.pending', {
        pos: msg.pos
      }));
      break;
    case 'status':
      setMessage(i, helper.t(\`translation.status.\${msg.status}\`) || msg.status);
      break;
    case 'error':
      throw new Error(\`\${helper.t('translation.tip.error')}：id \${msg.error_id}\`);
    case 'not_found':
      throw new Error(\`\${helper.t('translation.tip.error')}：Not Found\`);
  }
};
const waitTranslationPolling = async (id, i) => {
  let result;
  while (result === undefined) {
    const res = await request(\`https://api.cotrans.touhou.ai/task/\${id}/status/v1\`, {
      responseType: 'json'
    });
    result = handleMessage(res.response, i);
    await helper.sleep(1000);
  }
  return result;
};

/** 等待翻译完成 */
const waitTranslation = (id, i) => {
  const ws = new WebSocket(\`wss://api.cotrans.touhou.ai/task/\${id}/event/v1\`);

  // 如果网站设置了 CSP connect-src 就只能轮询了
  if (ws.readyState > 1) return waitTranslationPolling(id, i);
  return new Promise((resolve, reject) => {
    ws.onmessage = e => {
      try {
        const result = handleMessage(JSON.parse(e.data), i);
        if (result) resolve(result);
      } catch (error) {
        reject(error);
      }
    };
  });
};

/** 将翻译后的内容覆盖到原图上 */
const mergeImage = async (rawImage, maskUri) => {
  const img = await helper.waitImgLoad(URL.createObjectURL(rawImage));
  const canvas = new OffscreenCanvas(img.width, img.height);
  const canvasCtx = canvas.getContext('2d');
  canvasCtx.drawImage(img, 0, 0);
  const img2 = new Image();
  img2.src = URL.createObjectURL(await download(maskUri));
  await helper.waitImgLoad(img2);
  canvasCtx.drawImage(img2, 0, 0);
  return URL.createObjectURL(await helper.canvasToBlob(canvas));
};

/** 缩小过大的图片 */
const resize = async (blob, w, h) => {
  if (w <= 4096 && h <= 4096) return blob;
  const scale = Math.min(4096 / w, 4096 / h);
  const width = Math.floor(w * scale);
  const height = Math.floor(h * scale);
  const img = await helper.waitImgLoad(URL.createObjectURL(blob));
  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, width, height);
  URL.revokeObjectURL(img.src);
  return helper.canvasToBlob(canvas);
};

/** 使用 cotrans 翻译指定图片 */
const cotransTranslation = async i => {
  const img = store.imgList[i];
  setMessage(i, helper.t('translation.tip.img_downloading'));
  let imgBlob;
  try {
    imgBlob = await download(img.src);
  } catch (error) {
    helper.log.error(error);
    throw new Error(helper.t('translation.tip.download_img_failed'));
  }
  try {
    imgBlob = await resize(imgBlob, img.width, img.height);
  } catch (error) {
    helper.log.error(error);
    throw new Error(helper.t('translation.tip.resize_img_failed'));
  }
  let res;
  try {
    res = await request('https://api.cotrans.touhou.ai/task/upload/v1', {
      method: 'POST',
      data: createFormData(imgBlob),
      headers: {
        Origin: 'https://cotrans.touhou.ai',
        Referer: 'https://cotrans.touhou.ai/'
      }
    });
  } catch (error) {
    helper.log.error(error);
    throw new Error(helper.t('translation.tip.upload_error'));
  }
  let resData;
  try {
    resData = JSON.parse(res.responseText);
  } catch {
    throw new Error(\`\${helper.t('translation.tip.upload_return_error')}：\${res.responseText}\`);
  }
  if ('error_id' in resData) throw new Error(\`\${helper.t('translation.tip.upload_return_error')}：\${resData.error_id}\`);
  if (!resData.id) throw new Error(helper.t('translation.tip.id_not_returned'));
  const translation_mask = resData.result?.translation_mask || (await waitTranslation(resData.id, i));
  return mergeImage(imgBlob, translation_mask);
};
const cotransTranslators = ['google', 'youdao', 'baidu', 'deepl', 'gpt3.5', 'offline', 'none'];

/** 翻译指定图片 */
const translationImage = async i => {
  try {
    if (typeof GM_xmlhttpRequest === 'undefined') {
      toast?.error(helper.t('pwa.alert.userscript_not_installed'));
      throw new Error(helper.t('pwa.alert.userscript_not_installed'));
    }
    const img = store.imgList[i];
    if (!img?.src) return;
    if (img.translationType !== 'wait') return;
    if (img.translationUrl) return _setState('imgList', i, 'translationType', 'show');
    if (img.loadType !== 'loaded') return setMessage(i, helper.t('translation.tip.img_not_fully_loaded'));
    const translationUrl = await (store.option.translation.server === 'cotrans' ? cotransTranslation : selfhostedTranslation)(i);
    setState(state => {
      state.imgList[i].translationUrl = translationUrl;
      state.imgList[i].translationMessage = helper.t('translation.tip.translation_completed');
      state.imgList[i].translationType = 'show';
    });
  } catch (error) {
    setState(state => {
      state.imgList[i].translationType = 'error';
      if (error.message) state.imgList[i].translationMessage = error.message;
    });
  }
};

/** 逐个翻译状态为等待翻译的图片 */
const translationAll = helper.singleThreaded(async () => {
  for (let i = 0; i < store.imgList.length; i++) {
    const img = store.imgList[i];
    if (img.loadType !== 'loaded' || img.translationType !== 'wait') continue;
    await translationImage(i);
  }
});

/** 开启或关闭指定图片的翻译 */
const setImgTranslationEnbale = (list, enbale) => {
  setState(state => {
    for (const i of list) {
      const img = state.imgList[i];
      if (!img) continue;
      if (enbale) {
        if (state.option.translation.forceRetry) {
          img.translationType = 'wait';
          img.translationUrl = undefined;
          setMessage(i, helper.t('translation.tip.wait_translation'));
        } else {
          switch (img.translationType) {
            case 'hide':
              {
                img.translationType = 'show';
                break;
              }
            case 'error':
            case undefined:
              {
                img.translationType = 'wait';
                setMessage(i, helper.t('translation.tip.wait_translation'));
                break;
              }
          }
        }
      } else {
        switch (img.translationType) {
          case 'show':
            {
              img.translationType = 'hide';
              break;
            }
          case 'error':
          case 'wait':
            {
              img.translationType = undefined;
              break;
            }
        }
      }
    }
  });
  return translationAll();
};
const [selfhostedOptions, setSelfOptions] = helper.createEqualsSignal([]);

// 在切换翻译服务器的同时切换可用翻译的选项列表
helper.createEffectOn([() => store.option.translation.server, () => store.option.translation.localUrl], async () => {
  if (store.option.translation.server !== 'selfhosted') return;
  setSelfOptions((await getValidTranslators()) ?? []);

  // 如果切换服务器后原先选择的翻译服务失效了，就换成谷歌翻译
  if (!selfhostedOptions().some(([val]) => val === store.option.translation.options.translator)) {
    setOption(draftOption => {
      draftOption.translation.options.translator = 'google';
    });
  }
});
const translatorOptions = helper.createRootMemo(solidJs.on([selfhostedOptions, helper.lang, () => store.option.translation.server], () => store.option.translation.server === 'selfhosted' ? selfhostedOptions() : createOptions(cotransTranslators)));

/** 并排卷轴模式下的全局滚动填充 */
const [abreastScrollFill, _setAbreastScrollFill] = solidJs.createSignal(0);
/** 并排卷轴模式下的每列布局 */
const abreastArea = helper.createRootMemo(prev => {
  if (!isAbreastMode()) return prev;
  const columns = [[]];
  const position = {};
  let length = 0;
  const rootHeight = store.rootSize.height;
  if (!rootHeight || store.imgList.length === 0) return {
    columns,
    position,
    length
  };
  const repeatHeight = rootHeight * store.option.scrollMode.abreastDuplicate;

  /** 当前图片在当前列的所在高度 */
  let top = abreastScrollFill();
  while (top > rootHeight) {
    top -= rootHeight - repeatHeight;
    columns.push([]);
  }
  for (let i = 0; i < store.imgList.length; i++) {
    const imgPosition = [];
    const imgHeight = store.imgList[i].size.height;
    length += imgHeight;
    let height = imgHeight;
    while (height > 0) {
      columns.at(-1).push(i);
      imgPosition.push({
        column: columns.length - 1,
        top
      });
      if (top < 0 && imgPosition.length > 1) top = 0;
      const availableHeight = rootHeight - top;
      top += height;
      height -= availableHeight;

      // 填满一列后换行
      if (top < rootHeight) continue;
      columns.push([]);
      top = height - imgHeight;

      // 复现上列结尾
      if (!repeatHeight || columns.length === 1) continue;
      top += repeatHeight;
      height = Math.min(imgHeight, height + repeatHeight);

      /** 为了复现而出现的空白部分高度 */
      let emptyTop = top;
      let prevImgIndex = i;
      while (prevImgIndex >= 1 && emptyTop > 0) {
        prevImgIndex -= 1;
        // 把上一张图片加进来填补空白
        columns.at(-1).push(prevImgIndex);
        const prevImgHeight = store.imgList[prevImgIndex].size.height;
        emptyTop -= prevImgHeight;
        position[prevImgIndex].push({
          column: columns.length - 1,
          top: emptyTop
        });
      }
    }
    position[i] = imgPosition;
  }
  return {
    columns,
    position,
    length
  };
}, {
  columns: [],
  position: {},
  length: 0
});

/** 头尾滚动的限制值 */
const scrollFillLimit = helper.createRootMemo(() => abreastArea().length - store.rootSize.height);
const setAbreastScrollFill = val => _setAbreastScrollFill(helper.clamp(-scrollFillLimit(), val, scrollFillLimit()));

/** 并排卷轴模式下当前要显示的列 */
const abreastShowColumn = helper.createThrottleMemo(() => {
  if (!isAbreastMode() || abreastArea().columns.length === 0) return {
    start: 0,
    end: 0
  };
  const columnWidth = abreastColumnWidth() + store.option.scrollMode.spacing * 7;
  return {
    start: helper.clamp(0, Math.floor(store.page.offset.x.px / columnWidth), abreastArea().columns.length - 1),
    end: helper.clamp(0, Math.floor((store.page.offset.x.px + store.rootSize.width) / columnWidth), abreastArea().columns.length - 1)
  };
});

/** 并排卷轴模式下的漫画流宽度 */
const abreastContentWidth = helper.createRootMemo(() => abreastArea().columns.length * abreastColumnWidth() + (abreastArea().columns.length - 1) * store.option.scrollMode.spacing * 7);

/** 并排卷轴模式下的最大滚动距离 */
const abreastScrollWidth = helper.createRootMemo(() => abreastContentWidth() - store.rootSize.width);

/** 并排卷轴模式下每个图片所在位置的样式 */
const imgAreaStyle = helper.createRootMemo(() => {
  if (!isAbreastMode() || store.gridMode) return '';
  let styleText = '';
  const selector = (index, imgNum = 0) => \`#_\${index}\${imgNum === 0 ? '' : \`-\${imgNum}\`}\`;
  for (const index of store.imgList.keys()) {
    let imgNum = 0;
    for (const {
      column,
      top
    } of abreastArea().position[index] ?? []) {
      const itemStyle = \`grid-area: _\${column} !important; transform: translateY(\${top}px);\`;
      styleText += \`\${selector(index, imgNum)} { \${itemStyle} }\\n\`;
      imgNum += 1;
    }
  }
  return styleText;
});

/** 滚动内容的长度 */
const scrollLength = helper.createRootMemo(() => {
  if (isScrollMode()) return contentHeight();
  if (isAbreastMode()) return abreastContentWidth();
  return store.pageList.length;
});

/** 滚动内容的滚动进度 */
const scrollProgress = helper.createRootMemo(() => {
  if (isScrollMode()) return scrollTop();
  if (isAbreastMode()) return store.page.offset.x.px;
  return store.activePageIndex;
});

/** 滚动内容的滚动进度百分比 */
const scrollPercentage = helper.createRootMemo(() => scrollProgress() / scrollLength());

/** 滚动条滑块长度 */
const sliderHeight = helper.createRootMemo(() => {
  let itemLength = 1;
  if (isScrollMode()) itemLength = store.rootSize.height;
  if (isAbreastMode()) itemLength = store.rootSize.width;
  return itemLength / scrollLength();
});

/** 当前是否已经滚动到底部 */
const isBottom = helper.createRootMemo(() => scrollPercentage() + sliderHeight() >= 0.9999);

/** 当前是否已经滚动到顶部 */
const isTop = helper.createRootMemo(() => scrollPercentage() === 0);

/** 在卷轴模式下滚动到指定进度 */
const scrollTo = (x, smooth = false) => {
  if (!store.option.scrollMode.enabled) return;
  if (store.option.scrollMode.abreastMode) {
    refs.mangaBox.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    const val = helper.clamp(0, x, abreastScrollWidth());
    return _setState('page', 'offset', 'x', 'px', val);
  }
  refs.mangaBox.scrollTo({
    top: x,
    behavior: smooth ? 'smooth' : 'instant'
  });
};

/** 保存当前滚动进度，并在之后恢复 */
const saveScrollProgress = () => {
  const oldScrollPercentage = scrollPercentage();
  return () => scrollTo(oldScrollPercentage * scrollLength());
};

/** 在卷轴模式下，滚动到能显示指定图片的位置 */
const scrollViewImg = i => {
  if (!store.option.scrollMode.enabled) return;
  if (store.option.scrollMode.abreastMode) {
    const columnNum = abreastArea().columns.findIndex(column => column.includes(i));
    scrollTo(columnNum * abreastColumnWidth());
  } else scrollTo(imgTopList()[i]);
};

/** 在卷轴模式下进行缩放，并且保持滚动进度不变 */
const zoomScrollModeImg = (zoomLevel, set = false) => {
  const jump = saveScrollProgress();
  setOption(draftOption => {
    const newVal = set ? zoomLevel : store.option.scrollMode.imgScale + zoomLevel;
    draftOption.scrollMode.imgScale = helper.clamp(0.1, Number(newVal.toFixed(2)), 3);
  });
  jump();

  // 并排卷轴模式下并没有一个明确直观的滚动进度，
  // 也想不出有什么实现效果能和普通卷轴模式的效果一致,
  // 所以就摆烂不管了，反正现在这样也已经能避免乱跳了
};

/** 切换页面填充 */
const switchFillEffect = () => {
  setState(state => {
    // 如果当前页不是双页显示的就跳过，避免在显示跨页图的页面切换却没看到效果的疑惑
    if (state.pageList[state.activePageIndex].length !== 2) return;
    state.fillEffect[nowFillIndex()] = Number(!state.fillEffect[nowFillIndex()]);
    updatePageData(state);
  });
};

/** 切换卷轴模式 */
const switchScrollMode = () => {
  zoom(100);
  setOption((draftOption, state) => {
    draftOption.scrollMode.enabled = !draftOption.scrollMode.enabled;
    state.page.offset.x.px = 0;
    state.page.offset.y.px = 0;
  });
  // 切换到卷轴模式后自动定位到对应页
  scrollViewImg(store.activePageIndex);
};

/** 切换单双页模式 */
const switchOnePageMode = () => {
  setOption((draftOption, state) => {
    const newPageNum = pageNum() === 1 ? 2 : 1;
    draftOption.pageNum = state.option.autoSwitchPageMode && newPageNum === autoPageNum() ? 0 : newPageNum;
  });
};

/** 切换阅读方向 */
const switchDir = () => {
  setOption(draftOption => {
    draftOption.dir = draftOption.dir === 'rtl' ? 'ltr' : 'rtl';
  });
};

/** 切换网格模式 */
const switchGridMode = () => {
  zoom(100);
  setState(state => {
    state.gridMode = !state.gridMode;
    if (store.option.zoom.ratio !== 100) zoom(100);
    state.page.anima = '';
  });
  // 切换到网格模式后自动定位到当前页
  if (store.gridMode) requestAnimationFrame(() => {
    refs.mangaFlow.children[activeImgIndex()]?.scrollIntoView({
      block: 'center',
      inline: 'center'
    });
  });
};

/** 切换卷轴模式下图片适应宽度 */
const switchFitToWidth = () => {
  const jump = saveScrollProgress();
  setOption(draftOption => {
    draftOption.scrollMode.fitToWidth = !draftOption.scrollMode.fitToWidth;
  });
  jump();
};

/** 当前显示的图片是否正在翻译 */
const isTranslatingImage = helper.createRootMemo(() => activePage().some(i => store.imgList[i]?.translationType && store.imgList[i].translationType !== 'hide'));

/** 切换当前页的翻译状态 */
const switchTranslation = () => setImgTranslationEnbale(activePage(), !isTranslatingImage());

let clickTimeout = null;
const useDoubleClick = (click, doubleClick, timeout = 200) => {
  return event => {
    // 如果点击触发时还有上次计时器的记录，说明这次是双击
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      clickTimeout = null;
      doubleClick?.(event);
      return;
    }

    // 单击事件延迟触发
    clickTimeout = window.setTimeout(() => {
      click(event);
      clickTimeout = null;
    }, timeout);
  };
};

/** 找到普通卷轴模式下指定高度上的图片 */
const findTopImg = (top, initIndex = 0) => {
  if (top > contentHeight()) return imgTopList().length - 1;
  let i = initIndex;
  for (; i < imgTopList().length; i++) if (imgTopList()[i] > top) return i === 0 ? 0 : i - 1;
  return imgTopList().length - 1;
};

/** 获取并排卷轴模式下指定列的指定图片 */
const getAbreastColumnImg = (column, img) => {
  const {
    columns
  } = abreastArea();
  return columns[helper.clamp(0, column, columns.length - 1)]?.at(img) ?? 0;
};

/** 计算显示页面 */
const updateShowRange = state => {
  if (scrollLength() === 0) {
    state.showRange = [0, 0];
    state.renderRange = state.showRange;
  } else if (!state.option.scrollMode.enabled) {
    // 翻页模式
    state.showRange = [state.activePageIndex, state.activePageIndex];
    state.renderRange = [helper.clamp(0, state.activePageIndex - 1, state.pageList.length - 1), helper.clamp(0, state.activePageIndex + 1, state.pageList.length - 1)];
  } else if (state.option.scrollMode.abreastMode) {
    // 并排卷轴模式
    const {
      start,
      end
    } = abreastShowColumn();
    state.showRange = [getAbreastColumnImg(start, 0), getAbreastColumnImg(end, -1)];
    state.renderRange = [getAbreastColumnImg(start - 2, 0), getAbreastColumnImg(end + 2, -1)];
  } else {
    // 普通卷轴模式
    const top = scrollTop();
    const bottom = scrollTop() + state.rootSize.height;
    const renderTop = top - state.rootSize.height;
    const rednerBottom = bottom + state.rootSize.height;
    const renderTopImg = findTopImg(renderTop);
    const topImg = findTopImg(top, renderTopImg);
    const bottomImg = findTopImg(bottom, topImg);
    const renderBottomImg = findTopImg(rednerBottom, bottomImg);
    state.showRange = [topImg, bottomImg];
    state.renderRange = [renderTopImg, renderBottomImg];
  }
};
helper.createEffectOn([scrollLength, () => store.gridMode, () => store.option.scrollMode.enabled, () => store.activePageIndex, () => store.option.scrollMode.abreastMode, () => store.rootSize, abreastShowColumn, scrollTop], helper.throttle(() => setState(updateShowRange))
// 两种卷轴模式下都可以通过在每次滚动后记录
// 当前 \`显示的第一张图片的 bottom\` 和 \`最后一张图片的 top\` 作为忽略范围，
// 在每次滚动后检查是否超出了这个范围，没超出就说明本次滚动不会显示或消失任何图片
// 以此进行性能优化
// 不过两个卷轴模式都要这么处理挺麻烦的，姑且先用 throttle 顶上，后面有需要再优化
);

/** 获取指定范围内页面所包含的图片 */
const getRangeImgList = range => {
  if (range[0] === range[1]) return new Set(store.pageList[range[0]]);
  const list = new Set();
  for (const [a, b] of store.pageList.slice(range[0], range[1] + 1)) {
    list.add(a);
    if (b !== undefined) list.add(b);
  }
  list.delete(-1);
  return list;
};
const renderImgList = helper.createRootMemo(() => getRangeImgList(store.renderRange));
const showImgList = helper.createRootMemo(() => getRangeImgList(store.showRange));

/**
 * 图片显示状态
 *
 * 0 - 页面中的第一张图片
 * 1 - 页面中的最后一张图片
 * '' - 页面中的唯一一张图片
 */
const imgShowState = helper.createRootMemo(() => {
  if (store.pageList.length === 0) return new Map();
  const showRange = store.gridMode ? [0, store.pageList.length - 1] : store.renderRange;
  const stateList = new Map();
  for (let i = showRange[0]; i <= showRange[1]; i++) {
    const page = store.pageList[i];
    if (!page) continue;
    const [a, b] = page;
    if (b === undefined) {
      stateList.set(a, '');
    } else {
      stateList.set(a, 0);
      stateList.set(b, 1);
    }
  }
  return stateList;
});

// 卷轴模式下，将当前显示的第一页作为当前页
helper.createEffectOn(() => store.showRange, ([firstPage]) => {
  if (!store.gridMode && store.option.scrollMode.enabled) _setState('activePageIndex', firstPage ?? 0);
});

/** 将页面移回原位 */
const resetPage = (state, animation = false) => {
  updateShowRange(state);
  state.page.offset.x.pct = 0;
  state.page.offset.y.pct = 0;
  if (state.option.scrollMode.enabled) {
    state.page.anima = '';
    return;
  }
  let i = -1;
  if (helper.inRange(state.renderRange[0], state.activePageIndex, state.renderRange[1])) i = state.activePageIndex - state.renderRange[0];
  if (store.page.vertical) state.page.offset.y.pct = i === -1 ? 0 : -i;else state.page.offset.x.pct = i === -1 ? 0 : i;
  state.page.anima = animation ? 'page' : '';
};

/** 获取指定图片的提示文本 */
const getImgTip = i => {
  if (i === -1) return helper.t('other.fill_page');
  const img = store.imgList[i];

  // 如果图片未加载完毕则在其 index 后增加显示当前加载状态
  if (img.loadType !== 'loaded') return \`\${i + 1} (\${helper.t(\`img_status.\${img.loadType}\`)})\`;
  if (img.translationType && img.translationType !== 'hide' && img.translationMessage) return \`\${i + 1}：\${img.translationMessage}\`;
  return \`\${i + 1}\`;
};

/** 获取指定页面的提示文本 */
const getPageTip = pageIndex => {
  const page = store.pageList[pageIndex];
  if (!page) return 'null';
  const pageIndexText = page.map(index => getImgTip(index));
  if (pageIndexText.length === 1) return pageIndexText[0];
  if (store.option.dir === 'rtl') pageIndexText.reverse();
  return pageIndexText.join(store.option.scrollMode.enabled ? '\\n' : ' | ');
};
helper.createEffectOn(() => store.activePageIndex, () => store.show.endPage && _setState('show', 'endPage', undefined), {
  defer: true
});
helper.createEffectOn(activePage, helper.throttle(() => store.isDragMode || setState(resetPage)));

// 在关闭工具栏的同时关掉滚动条的强制显示
helper.createEffectOn(() => store.show.toolbar, () => store.show.scrollbar && !store.show.toolbar && _setState('show', 'scrollbar', false), {
  defer: true
});

// 在切换网格模式后关掉 滚动条和工具栏 的强制显示
helper.createEffectOn(() => store.gridMode, () => setState(resetUI), {
  defer: true
});

/** 翻页。返回是否成功改变了当前页数 */
const turnPageFn = (state, dir) => {
  if (state.gridMode) return false;
  if (dir === 'prev') {
    switch (state.show.endPage) {
      case 'start':
        if (state.option.jumpToNext) state.prop.Prev?.();
        return false;
      case 'end':
        state.show.endPage = undefined;
        return false;
      default:
        // 弹出卷首结束页
        if (isTop()) {
          if (!state.prop.Exit) return false;
          // 没有 onPrev 时不弹出
          if (!state.prop.Prev || !state.option.jumpToNext) return false;
          state.show.endPage = 'start';
          return false;
        }
        if (state.option.scrollMode.enabled) return false;
        state.activePageIndex -= 1;
        return true;
    }
  } else {
    switch (state.show.endPage) {
      case 'end':
        if (state.prop.Next && state.option.jumpToNext) {
          state.prop.Next();
          return false;
        }
        state.prop.Exit?.(true);
        return false;
      case 'start':
        state.show.endPage = undefined;
        return false;
      default:
        // 弹出卷尾结束页
        if (isBottom()) {
          if (!state.prop.Exit) return false;
          state.show.endPage = 'end';
          return false;
        }
        if (state.option.scrollMode.enabled) return false;
        state.activePageIndex += 1;
        return true;
    }
  }
};
const turnPage = dir => setState(state => turnPageFn(state, dir));
const turnPageAnimation = dir => {
  setState(state => {
    // 无法翻页就恢复原位
    if (!turnPageFn(state, dir)) {
      state.page.offset.x.px = 0;
      state.page.offset.y.px = 0;
      resetPage(state, true);
      state.isDragMode = false;
      return;
    }
    state.isDragMode = true;
    resetPage(state);
    if (store.page.vertical) state.page.offset.y.pct += dir === 'next' ? 1 : -1;else state.page.offset.x.pct += dir === 'next' ? -1 : 1;
    setTimeout(() => {
      setState(draftState => {
        resetPage(draftState, true);
        draftState.page.offset.x.px = 0;
        draftState.page.offset.y.px = 0;
        draftState.isDragMode = false;
      });
    }, 16);
  });
};

/** 根据坐标判断点击的元素 */
const findClickEle = (eleList, {
  x,
  y
}) => [...eleList].find(e => {
  const rect = e.getBoundingClientRect();
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
});

/** 触发 touchArea 操作 */
const handlePageClick = e => {
  const targetArea = findClickEle(refs.touchArea.children, e);
  if (!targetArea) return;
  const areaName = targetArea.dataset.area;
  if (!areaName) return;
  if (areaName === 'menu' || areaName === 'MENU') return setState(state => {
    state.show.scrollbar = !state.show.scrollbar;
    state.show.toolbar = !state.show.toolbar;
  });
  if (!store.option.clickPageTurn.enabled || store.option.zoom.ratio !== 100) return;
  setState(state => {
    resetUI(state);
    turnPageFn(state, areaName.toLowerCase());
  });
};

/** 网格模式下点击图片跳到对应页 */
const handleGridClick = e => {
  const target = findClickEle(refs.root.getElementsByClassName('img'), e);
  if (!target) return;
  const pageNum = imgPageMap()[Number(target.id.slice(1))];
  if (pageNum === undefined) return;
  setState(state => {
    state.activePageIndex = pageNum;
    state.gridMode = false;
  });
  scrollViewImg(pageNum);
};

/** 双击放大 */
const doubleClickZoom = e => !store.gridMode && zoom(store.option.zoom.ratio === 100 ? 350 : 100, e, true);
const handleClick = useDoubleClick(e => store.gridMode ? handleGridClick(e) : handlePageClick(e), doubleClickZoom);

/** 判断翻页方向 */
const getTurnPageDir = startTime => {
  let dir;
  let move;
  let total;
  if (store.page.vertical) {
    move = -store.page.offset.y.px;
    total = refs.root.clientHeight;
  } else {
    move = store.page.offset.x.px;
    total = refs.root.clientWidth;
  }

  // 处理无关速度不考虑时间单纯根据当前滚动距离来判断的情况
  if (!startTime) {
    if (Math.abs(move) > total / 2) dir = move > 0 ? 'next' : 'prev';
    return dir;
  }

  // 滑动距离超过总长度三分之一判定翻页
  if (Math.abs(move) > total / 3) dir = move > 0 ? 'next' : 'prev';
  if (dir) return dir;

  // 滑动速度超过 0.4 判定翻页
  const velocity = move / (performance.now() - startTime);
  if (velocity < -0.4) dir = 'prev';
  if (velocity > 0.4) dir = 'next';
  return dir;
};
let dx$1 = 0;
let dy$1 = 0;
let animationId$1 = null;
const handleDragAnima = () => {
  // 当停着不动时退出循环
  if (dx$1 === store.page.offset.x.px && dy$1 === store.page.offset.y.px) {
    animationId$1 = null;
    return;
  }
  setState(state => {
    if (state.page.vertical) state.page.offset.y.px = dy$1;else state.page.offset.x.px = dx$1;
  });
  animationId$1 = requestAnimationFrame(handleDragAnima);
};
const handleDragEnd = startTime => {
  dx$1 = 0;
  dy$1 = 0;
  if (animationId$1) {
    cancelAnimationFrame(animationId$1);
    animationId$1 = null;
  }

  // 将拖动的页面移回正常位置
  const dir = getTurnPageDir(startTime);
  if (dir) return turnPageAnimation(dir);
  setState(state => {
    state.page.offset.x.px = 0;
    state.page.offset.y.px = 0;
    state.page.anima = 'page';
    state.isDragMode = false;
  });
};
handleDragEnd.debounce = helper.debounce(handleDragEnd, 200);
const handleMangaFlowDrag = ({
  type,
  xy: [x, y],
  initial: [ix, iy],
  startTime
}) => {
  switch (type) {
    case 'move':
      {
        dx$1 = store.option.dir === 'rtl' ? x - ix : ix - x;
        dy$1 = y - iy;
        if (store.isDragMode) {
          animationId$1 ||= requestAnimationFrame(handleDragAnima);
          return;
        }

        // 判断滑动方向
        let slideDir;
        const dxAbs = Math.abs(dx$1);
        const dyAbs = Math.abs(dy$1);
        if (dxAbs > 5 && dyAbs < 5) slideDir = 'horizontal';
        if (dyAbs > 5 && dxAbs < 5) slideDir = 'vertical';
        if (!slideDir) return;
        setState(state => {
          // 根据滑动方向自动切换排列模式
          state.page.vertical = slideDir === 'vertical';
          state.isDragMode = true;
          resetPage(state);
        });
        return;
      }
    case 'up':
      return handleDragEnd(startTime);
  }
};
let lastDeltaY$1 = 0;
let retardStartTime = 0;
let lastWheel = 0;
const handleTrackpadWheel = e => {
  let deltaY = Math.floor(-e.deltaY);
  let absDeltaY = Math.abs(deltaY);
  if (absDeltaY < 2) return;
  let time = 0;
  let now = 0;
  // 为了避免被触摸板的滚动惯性触发，限定一下滚动距离
  if (absDeltaY > 50) {
    now = performance.now();
    time = now - lastWheel;
    lastWheel = now;
  }
  if (store.option.scrollMode.enabled) {
    if (time > 200 && (isTop() && e.deltaY < 0 || isBottom() && e.deltaY > 0)) turnPage(e.deltaY > 0 ? 'next' : 'prev');
    return;
  }

  // 加速度小于指定值后逐渐缩小滚动距离，实现减速效果
  if (Math.abs(absDeltaY - lastDeltaY$1) <= 6) {
    retardStartTime ||= Date.now();
    deltaY *= 1 - Math.min(1, (Date.now() - retardStartTime) / 10 * 0.002);
    absDeltaY = Math.abs(deltaY);
    if (absDeltaY < 2) return;
  } else retardStartTime = 0;
  lastDeltaY$1 = absDeltaY;
  dy$1 += deltaY;
  setState(state => {
    // 滚动至漫画头尾尽头时
    if (isTop() && dy$1 > 0 || isBottom() && dy$1 < 0) {
      if (time > 200) turnPageFn(state, dy$1 < 0 ? 'next' : 'prev');
      dy$1 = 0;
    }

    // 滚动过一页时
    if (dy$1 <= -state.rootSize.height) {
      if (turnPageFn(state, 'next')) dy$1 += state.rootSize.height;
    } else if (dy$1 >= state.rootSize.height && turnPageFn(state, 'prev')) dy$1 -= state.rootSize.height;
    state.page.vertical = true;
    state.isDragMode = true;
    resetPage(state);
  });
  animationId$1 ||= requestAnimationFrame(handleDragAnima);
  handleDragEnd.debounce();
};

// 特意使用 requestAnimationFrame 和 .click() 是为了能和 Vimium 兼容
// （虽然因为使用了 shadow dom 的缘故实际还是不能兼容，但说不定之后就改了呢
const focus = () => requestAnimationFrame(() => {
  refs.mangaBox?.click();
  refs.mangaBox?.focus();
});
const handleMouseDown = e => {
  if (e.button !== 1 || store.option.scrollMode.enabled) return;
  e.stopPropagation();
  e.preventDefault();
  switchFillEffect();
};

/** 卷轴模式下的页面滚动 */
const scrollModeScrollPage = dir => {
  if (!store.show.endPage) {
    scrollTo(scrollTop() + store.rootSize.height * 0.8 * (dir === 'next' ? 1 : -1));
  }
};

/** 根据是否开启了 左右翻页键交换 来切换翻页方向 */
const handleSwapPageTurnKey = nextPage => {
  const next = store.option.swapPageTurnKey ? !nextPage : nextPage;
  return next ? 'next' : 'prev';
};

/** 判断按键代码是否可以输入字母 */
const isAlphabetKey = /^(Shift \\+ )?[a-zA-Z]$/;
const handleKeyDown = e => {
  if (e.target.tagName === 'INPUT' || e.target.className === modules_c21c94f2$1.hotkeysItem) return;
  const code = helper.getKeyboardCode(e);

  // esc 在触发配置操作前，先用于退出一些界面
  if (e.key === 'Escape') {
    if (store.gridMode) {
      e.stopPropagation();
      e.preventDefault();
      return _setState('gridMode', false);
    }
    if (store.show.endPage) {
      e.stopPropagation();
      e.preventDefault();
      return _setState('show', 'endPage', undefined);
    }
  }

  // 处理标注了 data-only-number 的元素
  if (e.target.dataset.onlyNumber !== undefined) {
    // 拦截能输入数字外的按键
    if (isAlphabetKey.test(code)) {
      e.stopPropagation();
      e.preventDefault();
    } else if (code.includes('Enter')) e.target.blur();
    return;
  }

  // 卷轴、网格模式下跳过用于移动的按键
  if ((isScrollMode() || store.gridMode) && !store.show.endPage) {
    switch (e.key) {
      case 'Home':
      case 'End':
      case 'ArrowRight':
      case 'ArrowLeft':
        e.stopPropagation();
        return;
      case 'ArrowUp':
      case 'PageUp':
        e.stopPropagation();
        return store.gridMode || turnPage('prev');
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        e.stopPropagation();
        return store.gridMode || turnPage('next');
    }
  }

  // 拦截已注册的快捷键
  if (Reflect.has(hotkeysMap(), code)) {
    e.stopPropagation();
    e.preventDefault();
  } else return;

  // 并排卷轴模式下的快捷键
  if (isAbreastMode()) {
    switch (hotkeysMap()[code]) {
      case 'scroll_up':
        setAbreastScrollFill(abreastScrollFill() - store.rootSize.height * 0.02);
        return;
      case 'scroll_down':
        setAbreastScrollFill(abreastScrollFill() + store.rootSize.height * 0.02);
        return;
      case 'scroll_left':
        return scrollTo(scrollProgress() + abreastColumnWidth());
      case 'scroll_right':
        return scrollTo(scrollProgress() - abreastColumnWidth());
      case 'page_up':
        return scrollTo(scrollProgress() - store.rootSize.width * 0.8);
      case 'page_down':
        return scrollTo(scrollProgress() + store.rootSize.width * 0.8);
      case 'jump_to_home':
        return scrollTo(0);
      case 'jump_to_end':
        return scrollTo(scrollLength());
    }
  }
  switch (hotkeysMap()[code]) {
    case 'page_up':
    case 'scroll_up':
      {
        if (isScrollMode()) scrollModeScrollPage('prev');
        return turnPage('prev');
      }
    case 'page_down':
    case 'scroll_down':
      {
        if (isScrollMode()) scrollModeScrollPage('next');
        return turnPage('next');
      }
    case 'scroll_left':
      return turnPage(handleSwapPageTurnKey(store.option.dir === 'rtl'));
    case 'scroll_right':
      return turnPage(handleSwapPageTurnKey(store.option.dir !== 'rtl'));
    case 'jump_to_home':
      return _setState('activePageIndex', 0);
    case 'jump_to_end':
      return _setState('activePageIndex', Math.max(0, store.pageList.length - 1));
    case 'switch_page_fill':
      return switchFillEffect();
    case 'switch_scroll_mode':
      return switchScrollMode();
    case 'switch_single_double_page_mode':
      return switchOnePageMode();
    case 'switch_dir':
      return switchDir();
    case 'switch_grid_mode':
      return switchGridMode();
    case 'translate_current_page':
      return switchTranslation();
    case 'switch_auto_enlarge':
      return setOption(draftOption => {
        draftOption.disableZoom = !draftOption.disableZoom;
      });
    case 'exit':
      return store.prop.Exit?.();

    // 阅读模式以外的快捷键转发到网页上去处理
    default:
      document.body.dispatchEvent(new KeyboardEvent('keydown', e));
      document.body.dispatchEvent(new KeyboardEvent('keyup', e));
  }
};

/** 判断两个数值是否是整数倍的关系 */
const isMultipleOf = (a, b) => {
  const decimal = \`\${a < b ? b / a : a / b}\`.split('.')?.[1];
  return !decimal || decimal.startsWith('0000') || decimal.startsWith('9999');
};
let lastDeltaY = -1;
let timeoutId = 0;
let lastPageNum = -1;
let wheelType;
let equalNum = 0;
let diffNum = 0;
const handleWheel = e => {
  if (store.gridMode) return;
  e.stopPropagation();
  if (e.ctrlKey || e.altKey) e.preventDefault();
  const isWheelDown = e.deltaY > 0;
  if (store.show.endPage) return turnPage(isWheelDown ? 'next' : 'prev');

  // 卷轴模式下的图片缩放
  if ((e.ctrlKey || e.altKey) && store.option.scrollMode.enabled && store.option.zoom.ratio === 100) {
    e.preventDefault();
    if (store.option.scrollMode.fitToWidth) return;
    return zoomScrollModeImg(isWheelDown ? -0.05 : 0.05);
  }
  if (e.ctrlKey || e.altKey) {
    e.preventDefault();
    return zoom(store.option.zoom.ratio + (isWheelDown ? -25 : 25), e);
  }
  const nowDeltaY = Math.abs(e.deltaY);

  // 并排卷轴模式下
  if (isAbreastMode() && store.option.zoom.ratio === 100) {
    e.preventDefault();
    // 先触发翻页判断再滚动，防止在滚动到底时立刻触发结束页
    turnPage(isWheelDown ? 'next' : 'prev');
    scrollTo(scrollTop() + e.deltaY);
  }

  // 防止滚动到网页
  if (!isScrollMode()) e.preventDefault();

  // 通过\`两次滚动距离是否成倍数\`和\`滚动距离是否过小\`来判断是否是触摸板
  if (wheelType !== 'trackpad' && (nowDeltaY < 2 || !Number.isInteger(lastDeltaY) && !Number.isInteger(nowDeltaY) && !isMultipleOf(lastDeltaY, nowDeltaY))) {
    wheelType = 'trackpad';
    if (timeoutId) clearTimeout(timeoutId);
    // 如果是触摸板滚动，且上次成功触发了翻页，就重新翻页回去
    if (lastPageNum !== -1) _setState('activePageIndex', lastPageNum);
  }

  // 为了避免因临时卡顿而误判为触摸板
  // 在连续几次滚动量均相同的情况下，将 wheelType 相关变量重置回初始状态
  if (diffNum < 10) {
    if (lastDeltaY === nowDeltaY && nowDeltaY > 5) equalNum += 1;else {
      diffNum += 1;
      equalNum = 0;
    }
    if (equalNum >= 3) {
      wheelType = undefined;
      lastPageNum = -1;
    }
  }
  lastDeltaY = nowDeltaY;
  switch (wheelType) {
    case undefined:
      {
        if (lastPageNum === -1) {
          // 第一次触发滚动没法判断类型，就当作滚轮来处理
          // 但为了避免触摸板前两次滚动事件间隔大于帧生成时间导致得重新翻页回去的闪烁，加个延迟等待下
          lastPageNum = store.activePageIndex;
          timeoutId = window.setTimeout(() => turnPage(isWheelDown ? 'next' : 'prev'), 16);
          return;
        }
        wheelType = 'mouse';
      }
    // falls through

    case 'mouse':
      return turnPage(isWheelDown ? 'next' : 'prev');
    case 'trackpad':
      return handleTrackpadWheel(e);
  }
};

/** 滚动条元素的长度 */
const scrollDomLength = helper.createRootMemo(() => Math.max(store.scrollbarSize.width, store.scrollbarSize.height));

/** 滚动条滑块的中心点高度 */
const sliderMidpoint = helper.createRootMemo(() => scrollDomLength() * (scrollPercentage() + sliderHeight() / 2));

/** 滚动条滑块的位置 */
const sliderTop = helper.createRootMemo(() => \`\${scrollPercentage() * scrollDomLength()}px\`);

/** 滚动条位置 */
const scrollPosition = helper.createRootMemo(() => {
  if (store.option.scrollbar.position === 'auto') {
    if (store.isMobile) return 'top';
    if (isAbreastMode()) return 'bottom';
    // 大部分图片都是宽图时，将滚动条移至底部
    return store.defaultImgType === 'long' ? 'bottom' : 'right';
  }
  return store.option.scrollbar.position;
});

/** 判断点击位置在滚动条上的位置比率 */
const getClickTop = (x, y, e) => {
  switch (scrollPosition()) {
    case 'bottom':
    case 'top':
      return store.option.dir === 'rtl' ? 1 - x / e.offsetWidth : x / e.offsetWidth;
    default:
      return y / e.offsetHeight;
  }
};

/** 计算在滚动条上的拖动距离 */
const getSliderDist = ([x, y], [ix, iy], e) => {
  switch (scrollPosition()) {
    case 'bottom':
    case 'top':
      return store.option.dir === 'rtl' ? (1 - (x - ix)) / e.offsetWidth : (x - ix) / e.offsetWidth;
    default:
      return (y - iy) / e.offsetHeight;
  }
};
const [isDrag, setIsDrag] = solidJs.createSignal(false);
const closeDrag = helper.debounce(() => setIsDrag(false), 200);
let lastType = 'up';

/** 开始拖拽时的 sliderTop 值 */
let startTop = 0;
const handleScrollbarSlider = ({
  type,
  xy,
  initial
}, e) => {
  const [x, y] = xy;

  // 检测是否是拖动操作
  if (type === 'move' && lastType === type) {
    setIsDrag(true);
    closeDrag();
  }
  lastType = type;

  // 跳过拖拽结束事件（单击时会同时触发开始和结束，就用开始事件来完成单击的效果
  if (type === 'up') return focus();
  if (!refs.mangaFlow) return;
  const scrollbarDom = e.target;

  /** 点击位置在滚动条上的位置比率 */
  const clickTop = getClickTop(x, y, e.target);
  if (store.option.scrollMode.enabled) {
    if (type === 'move') {
      const top = helper.clamp(0, startTop + getSliderDist(xy, initial, scrollbarDom), 1) * scrollLength();
      scrollTo(top);
    } else {
      // 确保滚动条的中心会在点击位置
      startTop = clickTop - sliderHeight() / 2;
      const top = startTop * scrollLength();
      scrollTo(top, true);
    }
  } else {
    let newPageIndex = Math.floor(clickTop * store.pageList.length);
    // 处理超出范围的情况
    if (newPageIndex < 0) newPageIndex = 0;else if (newPageIndex >= store.pageList.length) newPageIndex = store.pageList.length - 1;
    if (newPageIndex !== store.activePageIndex) _setState('activePageIndex', newPageIndex);
  }
};

/** 摩擦系数 */
const FRICTION_COEFF = 0.96;
let lastTop = 0;
let dy = 0;
let lastLeft = 0;
let dx = 0;
let animationId = null;
let lastTime = 0;

/** 逐帧计算速率 */
const calcVelocity = () => {
  const nowTop = store.option.scrollMode.abreastMode ? abreastScrollFill() : scrollTop();
  dy = nowTop - lastTop;
  lastTop = nowTop;
  dx = store.page.offset.x.px - lastLeft;
  lastLeft = store.page.offset.x.px;
  animationId = requestAnimationFrame(calcVelocity);
};

/** 逐帧计算惯性滑动 */
const handleSlide = timestamp => {
  // 当速率足够小时停止计算动画
  if (Math.abs(dx) + Math.abs(dy) < 1) {
    animationId = null;
    return;
  }

  // 确保每16毫秒才减少一次速率，防止在高刷新率显示器上衰减过快
  if (timestamp - lastTime > 16) {
    dy *= FRICTION_COEFF;
    dx *= FRICTION_COEFF;
    lastTime = timestamp;
  }
  if (store.option.scrollMode.abreastMode) {
    scrollTo(scrollTop() + dx);
    setAbreastScrollFill(abreastScrollFill() + dy);
  } else scrollTo(scrollTop() + dy);
  animationId = requestAnimationFrame(handleSlide);
};
let initTop = 0;
let initLeft = 0;
let initAbreastScrollFill = 0;
const handleScrollModeDrag = ({
  type,
  xy: [x, y],
  initial: [ix, iy]
}, e) => {
  if (e.pointerType !== 'mouse') return;
  switch (type) {
    case 'down':
      {
        if (animationId) cancelAnimationFrame(animationId);
        initTop = refs.mangaBox.scrollTop;
        initLeft = store.page.offset.x.px * (store.option.dir === 'rtl' ? 1 : -1);
        initAbreastScrollFill = abreastScrollFill();
        requestAnimationFrame(calcVelocity);
        return;
      }
    case 'move':
      {
        if (store.option.scrollMode.abreastMode) {
          const dx = x - ix;
          const dy = y - iy;
          scrollTo((initLeft + dx) * (store.option.dir === 'rtl' ? 1 : -1));
          setAbreastScrollFill(initAbreastScrollFill + dy);
        } else scrollTo(initTop + iy - y);
        return;
      }
    case 'up':
      {
        if (animationId) cancelAnimationFrame(animationId);
        animationId = requestAnimationFrame(handleSlide);
      }
  }
};

/** 图片加载完毕的回调 */
const handleImgLoaded = (i, e) => {
  // 内联图片元素被创建后立刻就会触发 load 事件，如果在调用这个函数前 url 发生改变
  // 就会导致这里获得的是上个 url 图片的尺寸
  if (!e.isConnected) return;
  setState(state => {
    const img = state.imgList[i];
    if (img.width !== e.naturalWidth || img.height !== e.naturalHeight) updateImgSize(state, i, e.naturalWidth, e.naturalHeight);
    img.loadType = 'loaded';
    state.prop.Loading?.(state.imgList, img);
  });
  updateImgLoadType();
  e.decode().catch(() => {});
};

/** 图片加载出错的次数 */
const imgErrorNum = new Map();

/** 图片加载出错的回调 */
const handleImgError = (i, e) => {
  if (!e.isConnected) return;
  imgErrorNum.set(e.src, (imgErrorNum.get(e.src) ?? 0) + 1);
  setState(state => {
    const img = state.imgList[i];
    if (!img) return;
    helper.log.error(i, helper.t('alert.img_load_failed'), e);
    img.loadType = 'error';
    img.type = undefined;
    state.prop.Loading?.(state.imgList, img);
    if (renderImgList().has(i) && (imgErrorNum.get(img.src) ?? 0) < 3) img.loadType = 'wait';
  });
  updateImgLoadType();
};

/** 需要加载的图片 */
const needLoadImgList = helper.createRootMemo(() => {
  const list = new Set();
  for (const [index, img] of store.imgList.entries()) if (img.loadType !== 'loaded' && img.src) list.add(index);
  return list;
});

/** 当前需要加载的图片 */
const loadImgList = new Set();

/** 加载指定图片。返回是否已加载完成 */
const loadImg = index => {
  if (index === -1 || !needLoadImgList().has(index)) return true;
  const img = store.imgList[index];
  if (img.loadType === 'error') return true;
  loadImgList.add(index);
  return false;
};

/** 获取指定页数下的头/尾图片 */
const getPageImg = (pageNum, imgType) => {
  const page = store.pageList[pageNum].filter(i => i !== -1);
  if (page.length === 1) return page[0];
  return imgType === 'start' ? Math.min(...page) : Math.max(...page);
};

/**
 * 以当前显示页为基准，预加载附近指定页数的图片，并取消其他预加载的图片
 * @param target 加载目标页
 * @param loadNum 加载图片数量
 * @returns 返回指定范围内是否还有未加载的图片
 */
const loadRangeImg = (target = 0, loadNum = 2) => {
  let start = getPageImg(store.showRange[0], 'start');
  let end = getPageImg(store.showRange[1], 'end');
  if (target !== 0) {
    if (target < 0) {
      end = start + target;
      start -= 1;
    } else {
      start = end + 1;
      end += target;
    }
    start = helper.clamp(0, start, store.imgList.length - 1);
    end = helper.clamp(0, end, store.imgList.length - 1);
  }

  /** 是否还有未加载的图片 */
  let hasUnloadedImg = false;
  let index = start;
  const condition = start <= end ? () => index <= end : () => index >= end;
  const step = start <= end ? 1 : -1;
  while (condition()) {
    if (!loadImg(index)) hasUnloadedImg = true;
    if (loadImgList.size >= loadNum) return index !== end || hasUnloadedImg;
    index += step;
  }
  return hasUnloadedImg;
};

/** 加载期间尽快获取图片尺寸 */
const checkImgSize = index => {
  const imgDom = refs.mangaFlow.querySelector(\`#_\${index} img\`);
  const timeoutId = setInterval(() => {
    if (!imgDom?.isConnected) return clearInterval(timeoutId);
    const img = store.imgList[index];
    if (!img || img.loadType !== 'loading') return clearInterval(timeoutId);
    if (imgDom.naturalWidth && imgDom.naturalHeight) {
      setState(state => updateImgSize(state, index, imgDom.naturalWidth, imgDom.naturalHeight));
      return clearInterval(timeoutId);
    }
  }, 200);
};
const updateImgLoadType = helper.singleThreaded(() => {
  if (needLoadImgList().size === 0) return;
  loadImgList.clear();
  if (store.imgList.length > 0) {
    // 优先加载当前显示的图片
    loadRangeImg() ||
    // 再加载后面几页
    loadRangeImg(preloadNum().back) ||
    // 再加载前面几页
    loadRangeImg(-preloadNum().front) ||
    // 根据设置决定是否要继续加载其余图片
    !store.option.alwaysLoadAllImg ||
    // 加载当前页后面的图片
    loadRangeImg(Number.POSITIVE_INFINITY, 5) ||
    // 加载当前页前面的图片
    loadRangeImg(Number.NEGATIVE_INFINITY, 5);
  }
  setState(state => {
    for (const index of needLoadImgList()) {
      const img = state.imgList[index];
      if (loadImgList.has(index)) {
        if (img.loadType !== 'loading') {
          img.loadType = 'loading';
          if (img.width === undefined) setTimeout(checkImgSize, 0, index);
        }
      } else if (img.loadType === 'loading') img.loadType = 'wait';
    }
  });
});
helper.createEffectOn([preloadNum, helper.createRootMemo(() => [...renderImgList()].map(i => store.imgList[i])), () => store.option.alwaysLoadAllImg], updateImgLoadType);
helper.createEffectOn(showImgList, helper.debounce(showImgList => {
  // 如果当前显示页面有出错的图片，就重新加载一次
  for (const i of showImgList) {
    if (store.imgList[i]?.loadType !== 'error') continue;
    _setState('imgList', i, 'loadType', 'wait');
    updateImgLoadType();
  }
}, 500), {
  defer: true
});

const EmptyTip = () => {
  let ref;
  helper.onAutoMount(() => {
    let timeoutId = 0;
    const observer = new IntersectionObserver(([{
      isIntersecting
    }]) => {
      if (!isIntersecting) return;
      timeoutId = window.setTimeout(() => {
        ref?.style.removeProperty('opacity');
        timeoutId = 0;
      }, 2000);
    }, {
      threshold: 1
    });
    observer.observe(ref);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  });
  return (() => {
    var _el$ = web.template(\`<h1>\`)();
    var _ref$ = ref;
    typeof _ref$ === "function" ? web.use(_ref$, _el$) : ref = _el$;
    _el$.style.setProperty("opacity", "0");
    _el$.textContent = "NULL";
    return _el$;
  })();
};

const ComicImg = img => {
  const showState = () => imgShowState().get(img.index);
  const src = () => {
    if (img.loadType === 'wait') return '';
    if (img.translationType === 'show') return img.translationUrl;
    return img.src;
  };

  /** 并排卷轴模式下需要复制的图片数量 */
  const cloneNum = solidJs.createMemo(() => {
    if (!isAbreastMode()) return 0;
    const imgPosition = abreastArea().position[img.index];
    if (!imgPosition) return 0;
    return imgPosition.length - 1;
  });

  /** 是否要渲染复制图片 */
  const renderClone = () => !store.gridMode && showState() !== undefined && cloneNum() > 0;
  const _ComicImg = props => (() => {
    var _el$ = web.template(\`<div><picture>\`)(),
      _el$2 = _el$.firstChild;
    web.insert(_el$2, web.createComponent(solidJs.Show, {
      get when() {
        return web.memo(() => img.loadType !== 'wait')() && src();
      },
      get children() {
        var _el$3 = web.template(\`<img draggable=false decoding=sync>\`)();
        _el$3.addEventListener("error", e => handleImgError(img.index, e.currentTarget));
        _el$3.addEventListener("load", e => handleImgLoaded(img.index, e.currentTarget));
        web.effect(_p$ => {
          var _v$ = src(),
            _v$2 = \`\${img.index}\`;
          _v$ !== _p$.e && web.setAttribute(_el$3, "src", _p$.e = _v$);
          _v$2 !== _p$.t && web.setAttribute(_el$3, "alt", _p$.t = _v$2);
          return _p$;
        }, {
          e: undefined,
          t: undefined
        });
        return _el$3;
      }
    }));
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return store.gridMode;
      },
      get children() {
        var _el$4 = web.template(\`<div>\`)();
        web.insert(_el$4, (() => {
          var _c$ = web.memo(() => !!store.gridMode);
          return () => _c$() ? getImgTip(img.index) : '';
        })());
        web.effect(() => web.className(_el$4, modules_c21c94f2$1.gridModeTip));
        return _el$4;
      }
    }), null);
    web.effect(_p$ => {
      var _v$3 = modules_c21c94f2$1.img,
        _v$4 = \`_\${img.index}\`,
        _v$5 = \`_\${props.cloneIndex ? \`\${img.index}-\${props.cloneIndex}\` : img.index}\`,
        _v$6 = showState(),
        _v$7 = img.type ?? store.defaultImgType,
        _v$8 = img.loadType === 'loaded' ? undefined : img.loadType,
        _v$9 = \`\${img.size.width} / \${img.size.height}\`;
      _v$3 !== _p$.e && web.className(_el$, _p$.e = _v$3);
      _v$4 !== _p$.t && ((_p$.t = _v$4) != null ? _el$.style.setProperty("grid-area", _v$4) : _el$.style.removeProperty("grid-area"));
      _v$5 !== _p$.a && web.setAttribute(_el$, "id", _p$.a = _v$5);
      _v$6 !== _p$.o && web.setAttribute(_el$, "data-show", _p$.o = _v$6);
      _v$7 !== _p$.i && web.setAttribute(_el$, "data-type", _p$.i = _v$7);
      _v$8 !== _p$.n && web.setAttribute(_el$, "data-load-type", _p$.n = _v$8);
      _v$9 !== _p$.s && ((_p$.s = _v$9) != null ? _el$2.style.setProperty("aspect-ratio", _v$9) : _el$2.style.removeProperty("aspect-ratio"));
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined,
      s: undefined
    });
    return _el$;
  })();
  return [web.createComponent(_ComicImg, {}), web.createComponent(solidJs.Show, {
    get when() {
      return renderClone();
    },
    get children() {
      return web.createComponent(solidJs.For, {
        get each() {
          return Array.from({
            length: cloneNum()
          });
        },
        children: (_, i) => web.createComponent(_ComicImg, {
          get cloneIndex() {
            return i() + 1;
          }
        })
      });
    }
  })];
};

// 目前即使是不显示的图片也必须挂载上，否则解析好的图片会被浏览器垃圾回收掉，
// 导致在 ehentai 上无法正常加载图片。但这样会在图片过多时造成性能问题，
// 虽然也尝试了将解析好的 Image 对象存储起来挂上引用和另外放到一个避免渲染的 dom 下，
// 但也都失败了，只能暂时先不管了。
// 之后尝试新方案时必须经过如下测试：开个几百页的漫画加载完毕后，再打开二十个标签页切换过去，
const ComicImgFlow = () => {
  const {
    hiddenMouse,
    onMouseMove
  } = useHiddenMouse();
  const handleDrag = (state, e) => {
    if (store.gridMode) return;
    if (touches.size > 1) return handlePinchZoom(state);
    if (store.option.zoom.ratio !== 100) return handleZoomDrag(state);
    if (store.option.scrollMode.enabled) return handleScrollModeDrag(state, e);
    return handleMangaFlowDrag(state);
  };
  solidJs.onMount(() => {
    helper.useDrag({
      ref: refs.mangaBox,
      handleDrag,
      handleClick,
      touches
    });
    bindScrollTop(refs.mangaBox);
  });
  const handleTransitionEnd = () => {
    if (store.isDragMode) return;
    setState(state => {
      if (store.option.zoom.ratio === 100) resetPage(state, true);else state.page.anima = '';
    });
  };

  /** 在当前页之前有图片被加载出来，导致内容高度发生变化后，重新滚动页面，确保当前显示位置不变 */
  helper.createEffectOn([() => store.showRange[0], () => imgTopList()[store.showRange[0]], imgTopList], ([showImg, height, topList], prev) => {
    if (!prev || !height || !isScrollMode()) return;
    const [prevShowImg, prevHeight, prevTopList] = prev;
    if (showImg !== prevShowImg || prevTopList === topList || prevHeight === height) return;
    scrollTo(scrollTop() + height - prevHeight);
    // 目前还是会有轻微偏移，但考虑到大部分情况下都是顺序阅读，本身出现概率就低，就不继续排查优化了
  });
  const pageToText = page => \`\${(page.length === 1 ? [page[0], page[0]] : page).map(i => i === -1 ? '.' : \`_\${i}\`).join(' ')}\`;
  const gridAreas = solidJs.createMemo(() => {
    if (store.pageList.length === 0) return undefined;
    if (store.gridMode) {
      let columnNum;
      if (store.isMobile) columnNum = 2;else if (store.defaultImgType === 'vertical') columnNum = 6;else if (isOnePageMode()) columnNum = 4;else columnNum = 2;
      const areaList = [[]];
      for (const page of store.pageList) {
        if (areaList.at(-1).length === columnNum) areaList.push([]);
        areaList.at(-1).push(pageToText(page));
      }
      while (areaList.at(-1).length !== columnNum) areaList.at(-1).push('. .');
      return areaList.map(line => \`"\${line.join(' ')}"\`).join('\\n') || undefined;
    }
    if (store.option.scrollMode.enabled) {
      if (!store.option.scrollMode.abreastMode) return helper.createSequence(store.imgList.length).map(i => \`"_\${i}"\`).join('\\n');
      return \`"\${helper.createSequence(abreastArea().columns.length).map(i => \`_\${i}\`).join(' ')}"\`;
    }
    return store.page.vertical ? store.pageList.slice(store.renderRange[0], store.renderRange[1] + 1).map(page => \`"\${pageToText(page)}"\`).join('\\n') : \`"\${store.pageList.slice(store.renderRange[0], store.renderRange[1] + 1).map(pageToText).join(' ')}"\`;
  });
  useStyleMemo(\`.\${modules_c21c94f2$1.mangaBox}\`, {
    transform: () => \`translate(\${store.option.zoom.offset.x}px, \${store.option.zoom.offset.y}px)
        scale(\${store.option.zoom.ratio / 100})\`
  });
  const pageX = solidJs.createMemo(() => {
    if (store.gridMode || isScrollMode()) return 0;
    let x = store.page.offset.x.pct * store.rootSize.width + store.page.offset.x.px;
    if (store.option.dir !== 'rtl') x = -x;
    return x;
  });
  useStyleMemo(\`#\${modules_c21c94f2$1.mangaFlow}\`, {
    transform: () => \`translate(
        \${pageX()}px,
        \${store.page.offset.y.pct * store.rootSize.height + store.page.offset.y.px}px
      ) translateZ(0)\`,
    'touch-action'() {
      if (store.gridMode) return 'auto';
      if (store.option.zoom.ratio !== 100) {
        if (!store.option.scrollMode.enabled) return 'none';
        if (store.option.zoom.offset.y === 0) return 'pan-up';
        if (store.option.zoom.offset.y === bound().y) return 'pan-down';
      }
      if (store.option.scrollMode.enabled) return store.option.scrollMode.abreastMode ? 'pan-x' : 'pan-y';
    },
    'grid-template-areas': gridAreas,
    'grid-template-columns'() {
      if (store.imgList.length === 0 || store.gridMode) return undefined;
      if (isAbreastMode()) return \`repeat(\${abreastArea().columns.length}, \${abreastColumnWidth()}px)\`;
      if (isScrollMode()) return undefined;
      if (store.page.vertical) return '50% 50%';
      return \`repeat(\${gridAreas()?.split(' ').length ?? 0}, 50%)\`;
    },
    'grid-template-rows'() {
      if (!isScrollMode() || store.gridMode) return undefined;
      return store.imgList.map(({
        size: {
          height
        }
      }) => \`\${height}px\`).join(' ');
    }
  });
  useStyle(imgAreaStyle);
  return (() => {
    var _el$ = web.template(\`<div tabindex=-1><div tabindex=-1>\`)(),
      _el$2 = _el$.firstChild;
    var _ref$ = bindRef('mangaBox');
    typeof _ref$ === "function" && web.use(_ref$, _el$);
    _el$2.addEventListener("transitionend", handleTransitionEnd);
    var _ref$2 = bindRef('mangaFlow');
    typeof _ref$2 === "function" && web.use(_ref$2, _el$2);
    _el$2.addEventListener("mousemove", onMouseMove);
    web.insert(_el$2, web.createComponent(solidJs.Show, {
      get when() {
        return store.imgList.length === 0;
      },
      get children() {
        return web.createComponent(EmptyTip, {});
      }
    }), null);
    web.insert(_el$2, web.createComponent(solidJs.Index, {
      get each() {
        return store.imgList;
      },
      children: (img, i) => web.createComponent(ComicImg, web.mergeProps({
        index: i
      }, img))
    }), null);
    web.effect(_p$ => {
      var _v$ = \`\${modules_c21c94f2$1.mangaBox} \${modules_c21c94f2$1.beautifyScrollbar}\`,
        _v$2 = store.page.anima,
        _v$3 = helper.boolDataVal(store.option.scrollMode.abreastMode),
        _v$4 = modules_c21c94f2$1.mangaFlow,
        _v$5 = store.option.dir,
        _v$6 = \`\${modules_c21c94f2$1.mangaFlow} \${modules_c21c94f2$1.beautifyScrollbar}\`,
        _v$7 = helper.boolDataVal(store.option.disableZoom && !store.option.scrollMode.enabled),
        _v$8 = helper.boolDataVal(store.option.zoom.ratio !== 100),
        _v$9 = helper.boolDataVal(store.page.vertical),
        _v$10 = !store.gridMode && hiddenMouse(),
        _v$11 = helper.boolDataVal(store.option.scrollMode.fitToWidth);
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.setAttribute(_el$, "data-animation", _p$.t = _v$2);
      _v$3 !== _p$.a && web.setAttribute(_el$, "data-abreast-scroll", _p$.a = _v$3);
      _v$4 !== _p$.o && web.setAttribute(_el$2, "id", _p$.o = _v$4);
      _v$5 !== _p$.i && web.setAttribute(_el$2, "dir", _p$.i = _v$5);
      _v$6 !== _p$.n && web.className(_el$2, _p$.n = _v$6);
      _v$7 !== _p$.s && web.setAttribute(_el$2, "data-disable-zoom", _p$.s = _v$7);
      _v$8 !== _p$.h && web.setAttribute(_el$2, "data-scale-mode", _p$.h = _v$8);
      _v$9 !== _p$.r && web.setAttribute(_el$2, "data-vertical", _p$.r = _v$9);
      _v$10 !== _p$.d && web.setAttribute(_el$2, "data-hidden-mouse", _p$.d = _v$10);
      _v$11 !== _p$.l && web.setAttribute(_el$2, "data-fit-width", _p$.l = _v$11);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined,
      s: undefined,
      h: undefined,
      r: undefined,
      d: undefined,
      l: undefined
    });
    return _el$;
  })();
};

const MdLooksOne = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6 14c-.55 0-1-.45-1-1V9h-1c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdLooksTwo = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4 8c0 1.1-.9 2-2 2h-2v2h3c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-1.1.9-2 2-2h2V9h-3c-.55 0-1-.45-1-1s.45-1 1-1h3c1.1 0 2 .9 2 2z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdViewDay = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M3 21h17c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1M20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1M2 4v1c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdQueue = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1m17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 9h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3V6c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdSettings = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.3 7.3 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68m-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdTranslate = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12.65 15.67c.14-.36.05-.77-.23-1.05l-2.09-2.06.03-.03A17.5 17.5 0 0 0 14.07 6h1.94c.54 0 .99-.45.99-.99v-.02c0-.54-.45-.99-.99-.99H10V3c0-.55-.45-1-1-1s-1 .45-1 1v1H1.99c-.54 0-.99.45-.99.99 0 .55.45.99.99.99h10.18A15.7 15.7 0 0 1 9 11.35c-.81-.89-1.49-1.86-2.06-2.88A.89.89 0 0 0 6.16 8c-.69 0-1.13.75-.79 1.35.63 1.13 1.4 2.21 2.3 3.21L3.3 16.87a.99.99 0 0 0 0 1.42c.39.39 1.02.39 1.42 0L9 14l2.02 2.02c.51.51 1.38.32 1.63-.35M17.5 10c-.6 0-1.14.37-1.35.94l-3.67 9.8c-.24.61.22 1.26.87 1.26.39 0 .74-.24.88-.61l.89-2.39h4.75l.9 2.39c.14.36.49.61.88.61.65 0 1.11-.65.88-1.26l-3.67-9.8c-.22-.57-.76-.94-1.36-.94m-1.62 7 1.62-4.33L19.12 17z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdGrid = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M22 6c0-.55-.45-1-1-1h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-4V3c0-.55-.45-1-1-1s-1 .45-1 1v2H7V3c0-.55-.45-1-1-1s-1 .45-1 1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h2v4H3c-.55 0-1 .45-1 1s.45 1 1 1h2v4H3c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-4h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V7h2c.55 0 1-.45 1-1M7 7h4v4H7zm0 10v-4h4v4zm10 0h-4v-4h4zm0-6h-4V7h4z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdZoomIn = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.78 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.26 4.25c.41.41 1.07.41 1.48 0l.01-.01c.41-.41.41-1.07 0-1.48zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14m0-7c-.28 0-.5.22-.5.5V9H7.5c-.28 0-.5.22-.5.5s.22.5.5.5H9v1.5c0 .28.22.5.5.5s.5-.22.5-.5V10h1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H10V7.5c0-.28-.22-.5-.5-.5">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdZoomOut = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.26 4.25c.41.41 1.07.41 1.48 0l.01-.01c.41-.41.41-1.07 0-1.48zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14m-2-5h4c.28 0 .5.22.5.5s-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

var css = ".iconButtonItem{position:relative}.iconButton,.iconButtonItem{align-items:center;display:flex}.iconButton{background-color:initial;border-radius:9999px;border-style:none;color:var(--text,#fff);cursor:pointer;font-size:1.5em;height:1.5em;justify-content:center;margin:.1em;outline:none;padding:0;width:1.5em}.iconButton:focus,.iconButton:hover{background-color:var(--hover-bg-color,#fff3)}.iconButton.enabled{background-color:var(--text,#fff);color:var(--text-bg,#121212)}.iconButton.enabled:focus,.iconButton.enabled:hover{background-color:var(--hover-bg-color-enable,#fffa)}.iconButton>svg{width:1em}.iconButtonPopper{align-items:center;background-color:#303030;border-radius:.3em;color:#fff;display:flex;font-size:.8em;opacity:0;padding:.4em .5em;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);-webkit-user-select:none;user-select:none;white-space:nowrap}.iconButtonPopper[data-placement=right]{left:calc(100% + 1.5em)}.iconButtonPopper[data-placement=right]:before{border-right-color:var(--switch-bg,#6e6e6e);border-right-width:.5em;right:calc(100% + .5em)}.iconButtonPopper[data-placement=left]{right:calc(100% + 1.5em)}.iconButtonPopper[data-placement=left]:before{border-left-color:var(--switch-bg,#6e6e6e);border-left-width:.5em;left:calc(100% + .5em)}.iconButtonPopper:before{background-color:initial;border:.4em solid #0000;content:\\"\\";pointer-events:none;position:absolute;transition:opacity .15s}.iconButtonItem:is(:hover,:focus,[data-show=true]) .iconButtonPopper{opacity:1}.hidden{display:none}";
var modules_c21c94f2 = {"iconButtonItem":"iconButtonItem","iconButton":"iconButton","enabled":"enabled","iconButtonPopper":"iconButtonPopper","hidden":"hidden"};

/** 图标按钮 */
const IconButton = _props => {
  const props = solidJs.mergeProps({
    placement: 'right'
  }, _props);
  let buttonRef;
  const handleClick = e => {
    props.onClick?.(e);
    // 在每次点击后取消焦点
    buttonRef?.blur();
  };
  return (() => {
    var _el$ = web.template(\`<div><button type=button tabindex=0>\`)(),
      _el$2 = _el$.firstChild;
    web.use(ref => helper.useStyle(css, ref), _el$);
    var _ref$ = buttonRef;
    typeof _ref$ === "function" ? web.use(_ref$, _el$2) : buttonRef = _el$2;
    _el$2.addEventListener("click", handleClick);
    web.insert(_el$2, () => props.children);
    web.insert(_el$, (() => {
      var _c$ = web.memo(() => !!(props.popper || props.tip));
      return () => _c$() ? (() => {
        var _el$3 = web.template(\`<div>\`)();
        web.insert(_el$3, () => props.popper || props.tip);
        web.effect(_p$ => {
          var _v$6 = [modules_c21c94f2.iconButtonPopper, props.popperClassName].join(' '),
            _v$7 = props.placement;
          _v$6 !== _p$.e && web.className(_el$3, _p$.e = _v$6);
          _v$7 !== _p$.t && web.setAttribute(_el$3, "data-placement", _p$.t = _v$7);
          return _p$;
        }, {
          e: undefined,
          t: undefined
        });
        return _el$3;
      })() : null;
    })(), null);
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2.iconButtonItem,
        _v$2 = props.showTip,
        _v$3 = props.tip,
        _v$4 = modules_c21c94f2.iconButton,
        _v$5 = {
          [modules_c21c94f2.hidden]: props.hidden,
          [modules_c21c94f2.enabled]: props.enabled
        };
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.setAttribute(_el$, "data-show", _p$.t = _v$2);
      _v$3 !== _p$.a && web.setAttribute(_el$2, "aria-label", _p$.a = _v$3);
      _v$4 !== _p$.o && web.className(_el$2, _p$.o = _v$4);
      _p$.i = web.classList(_el$2, _v$5, _p$.i);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined
    });
    return _el$;
  })();
};

const MdOutlineFormatTextdirectionLToR = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M9 10v4c0 .55.45 1 1 1s1-.45 1-1V4h2v10c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1H9.17C7.08 2 5.22 3.53 5.02 5.61A4 4 0 0 0 9 10m11.65 7.65-2.79-2.79a.501.501 0 0 0-.86.35V17H6c-.55 0-1 .45-1 1s.45 1 1 1h11v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdOutlineFormatTextdirectionRToL = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M10 10v4c0 .55.45 1 1 1s1-.45 1-1V4h2v10c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1h-6.83C8.08 2 6.22 3.53 6.02 5.61A4 4 0 0 0 10 10m-2 7v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.36V19h11c.55 0 1-.45 1-1s-.45-1-1-1z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

/** 设置菜单项 */
const SettingsItem = props => (() => {
  var _el$ = web.template(\`<div><div> <!> \`)(),
    _el$2 = _el$.firstChild,
    _el$3 = _el$2.firstChild,
    _el$5 = _el$3.nextSibling;
    _el$5.nextSibling;
  web.insert(_el$2, () => props.name, _el$5);
  web.insert(_el$, () => props.children, null);
  web.effect(_p$ => {
    var _v$ = props.class ? \`\${modules_c21c94f2$1.SettingsItem} \${props.class}\` : modules_c21c94f2$1.SettingsItem,
      _v$2 = {
        [props.class ?? '']: Boolean(props.class?.length),
        ...props.classList
      },
      _v$3 = props.style,
      _v$4 = modules_c21c94f2$1.SettingsItemName;
    _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
    _p$.t = web.classList(_el$, _v$2, _p$.t);
    _p$.a = web.style(_el$, _v$3, _p$.a);
    _v$4 !== _p$.o && web.className(_el$2, _p$.o = _v$4);
    return _p$;
  }, {
    e: undefined,
    t: undefined,
    a: undefined,
    o: undefined
  });
  return _el$;
})();

/** 开关式菜单项 */
const SettingsItemSwitch = props => {
  const handleClick = () => props.onChange(!props.value);
  return web.createComponent(SettingsItem, {
    get name() {
      return props.name;
    },
    get ["class"]() {
      return props.class;
    },
    get classList() {
      return props.classList;
    },
    get children() {
      var _el$ = web.template(\`<button type=button><div>\`)(),
        _el$2 = _el$.firstChild;
      _el$.addEventListener("click", handleClick);
      web.effect(_p$ => {
        var _v$ = modules_c21c94f2$1.SettingsItemSwitch,
          _v$2 = props.value,
          _v$3 = modules_c21c94f2$1.SettingsItemSwitchRound;
        _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
        _v$2 !== _p$.t && web.setAttribute(_el$, "data-checked", _p$.t = _v$2);
        _v$3 !== _p$.a && web.className(_el$2, _p$.a = _v$3);
        return _p$;
      }, {
        e: undefined,
        t: undefined,
        a: undefined
      });
      return _el$;
    }
  });
};

const MdClose = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdRefresh = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M17.65 6.35a7.95 7.95 0 0 0-6.48-2.31c-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20a7.98 7.98 0 0 0 7.21-4.56c.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53a5.994 5.994 0 0 1-6.8 3.31c-2.22-.49-4.01-2.3-4.48-4.52A6.002 6.002 0 0 1 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdAdd = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const setHotkeys = (...args) => {
  _setState(...['hotkeys', ...args]);
  store.prop.HotkeysChange?.(Object.fromEntries(Object.entries(store.hotkeys).filter(([name, keys]) => !helper.isEqual(keys.filter(Boolean), defaultHotkeys()[name]))));
};
const delHotkeys = code => {
  for (const [name, keys] of Object.entries(store.hotkeys)) {
    const i = keys.indexOf(code);
    if (i === -1) continue;
    const newKeys = [...store.hotkeys[name]];
    newKeys.splice(i, 1);
    setHotkeys(name, newKeys);
  }
};
const KeyItem = props => {
  const code = () => store.hotkeys[props.operateName][props.i];
  const del = () => delHotkeys(code());
  const handleKeyDown = e => {
    e.stopPropagation();
    e.preventDefault();
    switch (e.key) {
      case 'Tab':
      case 'Enter':
      case 'Escape':
        focus();
        return;
      case 'Backspace':
        setHotkeys(props.operateName, props.i, '');
        return;
    }
    const newCode = helper.getKeyboardCode(e);
    if (!Reflect.has(hotkeysMap(), newCode)) setHotkeys(props.operateName, props.i, newCode);
  };
  return (() => {
    var _el$ = web.template(\`<div tabindex=0>\`)();
    _el$.addEventListener("blur", () => code() || del());
    web.use(ref => code() || setTimeout(() => ref.focus()), _el$);
    _el$.addEventListener("keydown", handleKeyDown);
    web.insert(_el$, () => helper.keyboardCodeToText(code()), null);
    web.insert(_el$, web.createComponent(MdClose, {
      "on:click": del
    }), null);
    web.effect(() => web.className(_el$, modules_c21c94f2$1.hotkeysItem));
    return _el$;
  })();
};
const SettingHotkeys = () => web.createComponent(solidJs.For, {
  get each() {
    return Object.keys(defaultHotkeys());
  },
  children: name => (() => {
    var _el$2 = web.template(\`<div><div><p></p><span></span><div></div><div>\`)(),
      _el$3 = _el$2.firstChild,
      _el$4 = _el$3.firstChild,
      _el$5 = _el$4.nextSibling,
      _el$6 = _el$5.nextSibling,
      _el$7 = _el$6.nextSibling;
    web.insert(_el$4, () => helper.t(\`hotkeys.\${name}\`) || name);
    _el$5.style.setProperty("flex-grow", "1");
    _el$6.addEventListener("click", () => setHotkeys(name, store.hotkeys[name].length, ''));
    web.insert(_el$6, web.createComponent(MdAdd, {}));
    _el$7.addEventListener("click", () => {
      const newKeys = defaultHotkeys()[name] ?? [];
      for (const code of defaultHotkeys()[name]) delHotkeys(code);
      setHotkeys(name, newKeys);
    });
    web.insert(_el$7, web.createComponent(MdRefresh, {}));
    web.insert(_el$2, web.createComponent(solidJs.Index, {
      get each() {
        return store.hotkeys[name];
      },
      children: (_, i) => web.createComponent(KeyItem, {
        operateName: name,
        i: i
      })
    }), null);
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2$1.hotkeys,
        _v$2 = modules_c21c94f2$1.hotkeysHeader,
        _v$3 = helper.t('setting.hotkeys.add'),
        _v$4 = helper.t('setting.hotkeys.restore');
      _v$ !== _p$.e && web.className(_el$2, _p$.e = _v$);
      _v$2 !== _p$.t && web.className(_el$3, _p$.t = _v$2);
      _v$3 !== _p$.a && web.setAttribute(_el$6, "title", _p$.a = _v$3);
      _v$4 !== _p$.o && web.setAttribute(_el$7, "title", _p$.o = _v$4);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined
    });
    return _el$2;
  })()
});

/** 选择器式菜单项 */
const SettingsItemSelect = props => {
  let ref;
  solidJs.createEffect(() => {
    ref.value = props.options?.some(([val]) => val === props.value) ? props.value : '';
  });
  return web.createComponent(SettingsItem, {
    get name() {
      return props.name;
    },
    get ["class"]() {
      return props.class;
    },
    get classList() {
      return props.classList;
    },
    get children() {
      var _el$ = web.template(\`<select>\`)();
      _el$.addEventListener("change", e => props.onChange(e.target.value));
      var _ref$ = ref;
      typeof _ref$ === "function" ? web.use(_ref$, _el$) : ref = _el$;
      _el$.addEventListener("click", () => props.onClick?.());
      web.insert(_el$, web.createComponent(solidJs.For, {
        get each() {
          return props.options;
        },
        children: ([val, label]) => (() => {
          var _el$2 = web.template(\`<option>\`)();
          _el$2.value = val;
          web.insert(_el$2, label ?? val);
          return _el$2;
        })()
      }));
      web.effect(() => web.className(_el$, modules_c21c94f2$1.SettingsItemSelect));
      return _el$;
    }
  });
};


/** 带有动画过渡的切换显示设置项 */
const SettingsShowItem = props => (() => {
  var _el$ = web.template(\`<div><div>\`)(),
    _el$2 = _el$.firstChild;
  web.insert(_el$2, () => props.children);
  web.effect(_p$ => {
    var _v$ = modules_c21c94f2$1.SettingsShowItem,
      _v$2 = props.when ? '1fr' : '0fr',
      _v$3 = modules_c21c94f2$1.SettingsShowItemBody;
    _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
    _v$2 !== _p$.t && ((_p$.t = _v$2) != null ? _el$.style.setProperty("grid-template-rows", _v$2) : _el$.style.removeProperty("grid-template-rows"));
    _v$3 !== _p$.a && web.className(_el$2, _p$.a = _v$3);
    return _p$;
  }, {
    e: undefined,
    t: undefined,
    a: undefined
  });
  return _el$;
})();

const SettingTranslation = () => {
  const isTranslationEnable = solidJs.createMemo(() => store.option.translation.server !== 'disable' && translatorOptions().length > 0);

  /** 是否正在翻译全部图片 */
  const isTranslationAll = solidJs.createMemo(() => isTranslationEnable() && store.imgList.every(img => img.translationType === 'show' || img.translationType === 'wait'));

  /** 是否正在翻译当前页以后的全部图片 */
  const isTranslationAfterCurrent = solidJs.createMemo(() => isTranslationEnable() && store.imgList.slice(activeImgIndex()).every(img => img.translationType === 'show' || img.translationType === 'wait'));
  return [web.createComponent(SettingsItemSelect, {
    get name() {
      return helper.t('setting.translation.server');
    },
    get options() {
      return [['disable', helper.t('other.disable')], ['selfhosted', helper.t('setting.translation.server_selfhosted')], ['cotrans']];
    },
    get value() {
      return store.option.translation.server;
    },
    get onChange() {
      return createStateSetFn('translation.server');
    }
  }), web.createComponent(SettingsShowItem, {
    get when() {
      return store.option.translation.server === 'cotrans';
    },
    get children() {
      var _el$ = web.template(\`<blockquote>\`)();
      web.effect(() => _el$.innerHTML = helper.t('setting.translation.cotrans_tip'));
      return _el$;
    }
  }), web.createComponent(SettingsShowItem, {
    get when() {
      return store.option.translation.server !== 'disable';
    },
    get children() {
      return [web.createComponent(SettingsItemSelect, {
        get name() {
          return helper.t('setting.translation.options.detection_resolution');
        },
        options: [['S', '1024px'], ['M', '1536px'], ['L', '2048px'], ['X', '2560px']],
        get value() {
          return store.option.translation.options.size;
        },
        get onChange() {
          return createStateSetFn('translation.options.size');
        }
      }), web.createComponent(SettingsItemSelect, {
        get name() {
          return helper.t('setting.translation.options.text_detector');
        },
        options: [['default'], ['ctd', 'Comic Text Detector']],
        get value() {
          return store.option.translation.options.detector;
        },
        get onChange() {
          return createStateSetFn('translation.options.detector');
        }
      }), web.createComponent(SettingsItemSelect, {
        get name() {
          return helper.t('setting.translation.options.translator');
        },
        get options() {
          return translatorOptions();
        },
        get value() {
          return store.option.translation.options.translator;
        },
        get onChange() {
          return createStateSetFn('translation.options.translator');
        },
        onClick: () => {
          if (store.option.translation.server !== 'selfhosted') return;
          // 通过手动触发变更，以便在点击时再获取一下翻译列表
          setState(state => {
            state.option.translation.server = 'disable';
            state.option.translation.server = 'selfhosted';
          });
        }
      }), web.createComponent(SettingsItemSelect, {
        get name() {
          return helper.t('setting.translation.options.direction');
        },
        get options() {
          return [['auto', helper.t('setting.translation.options.direction_auto')], ['h', helper.t('setting.translation.options.direction_horizontal')], ['v', helper.t('setting.translation.options.direction_vertical')]];
        },
        get value() {
          return store.option.translation.options.direction;
        },
        get onChange() {
          return createStateSetFn('translation.options.direction');
        }
      }), web.createComponent(SettingsItemSelect, {
        get name() {
          return helper.t('setting.translation.options.target_language');
        },
        options: [['CHS', '简体中文'], ['CHT', '繁體中文'], ['JPN', '日本語'], ['ENG', 'English'], ['KOR', '한국어'], ['VIN', 'Tiếng Việt'], ['CSY', 'čeština'], ['NLD', 'Nederlands'], ['FRA', 'français'], ['DEU', 'Deutsch'], ['HUN', 'magyar nyelv'], ['ITA', 'italiano'], ['PLK', 'polski'], ['PTB', 'português'], ['ROM', 'limba română'], ['RUS', 'русский язык'], ['ESP', 'español'], ['TRK', 'Türk dili']],
        get value() {
          return store.option.translation.options.targetLanguage;
        },
        get onChange() {
          return createStateSetFn('translation.options.targetLanguage');
        }
      }), web.createComponent(SettingsItemSwitch, {
        get name() {
          return helper.t('setting.translation.options.forceRetry');
        },
        get value() {
          return store.option.translation.forceRetry;
        },
        get onChange() {
          return createStateSetFn('translation.forceRetry');
        }
      }), web.createComponent(solidJs.Show, {
        get when() {
          return store.option.translation.server === 'selfhosted';
        },
        get children() {
          return [web.createComponent(SettingsItemSwitch, {
            get name() {
              return helper.t('setting.translation.translate_all_img');
            },
            get value() {
              return isTranslationAll();
            },
            onChange: () => {
              setImgTranslationEnbale(store.imgList.map((_, i) => i), !isTranslationAll());
            }
          }), web.createComponent(SettingsItemSwitch, {
            get name() {
              return helper.t('setting.translation.translate_after_current');
            },
            get value() {
              return isTranslationAfterCurrent();
            },
            onChange: () => {
              setImgTranslationEnbale(store.pageList.slice(store.activePageIndex).flat(), !isTranslationAfterCurrent());
            }
          }), web.createComponent(SettingsItemSwitch, {
            get name() {
              return helper.t('setting.translation.options.localUrl');
            },
            get value() {
              return store.option.translation.localUrl !== undefined;
            },
            onChange: val => {
              setOption(draftOption => {
                draftOption.translation.localUrl = val ? '' : undefined;
              });
            }
          }), web.createComponent(solidJs.Show, {
            get when() {
              return store.option.translation.localUrl !== undefined;
            },
            get children() {
              var _el$2 = web.template(\`<input type=url>\`)();
              _el$2.addEventListener("change", e => {
                setOption(draftOption => {
                  // 删掉末尾的斜杠
                  const url = e.target.value.replace(/\\/$/, '');
                  draftOption.translation.localUrl = url;
                });
              });
              web.effect(() => web.className(_el$2, modules_c21c94f2$1.SettingsItem));
              web.effect(() => _el$2.value = store.option.translation.localUrl);
              return _el$2;
            }
          })];
        }
      }), web.createComponent(SettingsItemSwitch, {
        get name() {
          return helper.t('setting.translation.options.onlyDownloadTranslated');
        },
        get value() {
          return store.option.translation.onlyDownloadTranslated;
        },
        get onChange() {
          return createStateSetFn('translation.onlyDownloadTranslated');
        }
      })];
    }
  })];
};

/** 数值输入框菜单项 */
const SettingsItemNumber = props => {
  const handleInput = e => {
    if (e.currentTarget.textContent.length > props.maxLength) e.currentTarget.blur();
  };
  const handleKeyDown = e => {
    switch (e.key) {
      case 'ArrowUp':
        return props.onChange(Number(e.target.textContent) + (props.step ?? 1));
      case 'ArrowDown':
        return props.onChange(Number(e.target.textContent) - (props.step ?? 1));
    }
  };
  return web.createComponent(SettingsItem, {
    get name() {
      return props.name;
    },
    get ["class"]() {
      return props.class;
    },
    get classList() {
      return props.classList;
    },
    get children() {
      var _el$ = web.template(\`<div><span contenteditable data-only-number></span><span>\`)(),
        _el$2 = _el$.firstChild,
        _el$3 = _el$2.nextSibling;
      _el$2.addEventListener("blur", e => {
        try {
          props.onChange(Number(e.currentTarget.textContent));
        } finally {
          e.currentTarget.textContent = \`\${props.value}\`;
        }
      });
      _el$2.addEventListener("input", handleInput);
      _el$2.addEventListener("keydown", handleKeyDown);
      web.insert(_el$2, () => props.value);
      _el$3.style.setProperty("margin-left", ".1em");
      web.insert(_el$3, () => props.suffix ?? '');
      web.effect(_$p => (_$p = props.suffix ? '.3em' : '.6em') != null ? _el$.style.setProperty("margin-right", _$p) : _el$.style.removeProperty("margin-right"));
      return _el$;
    }
  });
};


const areaArrayMap = {
  left_right: [['prev', 'menu', 'next'], ['PREV', 'MENU', 'NEXT'], ['prev', 'menu', 'next']],
  up_down: [['prev', 'PREV', 'prev'], ['menu', 'MENU', 'menu'], ['next', 'NEXT', 'next']],
  edge: [['next', 'menu', 'next'], ['NEXT', 'MENU', 'NEXT'], ['next', 'PREV', 'next']],
  l: [['PREV', 'prev', 'prev'], ['prev', 'MENU', 'next'], ['next', 'next', 'NEXT']]
};
const areaType = helper.createRootMemo(() => Reflect.has(areaArrayMap, store.option.clickPageTurn.area) ? store.option.clickPageTurn.area : 'left_right');
const dir = helper.createRootMemo(() => {
  if (!store.option.clickPageTurn.reverse) return store.option.dir;
  return store.option.dir === 'rtl' ? 'ltr' : 'rtl';
});
const TouchArea = () => (() => {
  var _el$ = web.template(\`<div>\`)();
  var _ref$ = bindRef('touchArea');
  typeof _ref$ === "function" && web.use(_ref$, _el$);
  web.insert(_el$, web.createComponent(solidJs.For, {
    get each() {
      return areaArrayMap[areaType()];
    },
    children: rows => web.createComponent(solidJs.For, {
      each: rows,
      children: area => (() => {
        var _el$2 = web.template(\`<div role=button tabindex=-1>\`)();
        web.setAttribute(_el$2, "data-area", area);
        web.effect(() => web.className(_el$2, modules_c21c94f2$1.touchArea));
        return _el$2;
      })()
    })
  }));
  web.effect(_p$ => {
    var _v$ = modules_c21c94f2$1.touchAreaRoot,
      _v$2 = dir(),
      _v$3 = helper.boolDataVal(store.show.touchArea),
      _v$4 = areaType(),
      _v$5 = helper.boolDataVal(store.option.clickPageTurn.enabled && !store.option.scrollMode.enabled);
    _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
    _v$2 !== _p$.t && web.setAttribute(_el$, "dir", _p$.t = _v$2);
    _v$3 !== _p$.a && web.setAttribute(_el$, "data-show", _p$.a = _v$3);
    _v$4 !== _p$.o && web.setAttribute(_el$, "data-area", _p$.o = _v$4);
    _v$5 !== _p$.i && web.setAttribute(_el$, "data-turn-page", _p$.i = _v$5);
    return _p$;
  }, {
    e: undefined,
    t: undefined,
    a: undefined,
    o: undefined,
    i: undefined
  });
  return _el$;
})();

/** 默认菜单项 */
const defaultSettingList = () => [[helper.t('setting.option.paragraph_dir'), () => web.createComponent(SettingsItem, {
  get name() {
    return web.memo(() => store.option.dir === 'rtl')() ? helper.t('setting.option.dir_rtl') : helper.t('setting.option.dir_ltr');
  },
  get children() {
    var _el$ = web.template(\`<button type=button>\`)();
    _el$.addEventListener("click", switchDir);
    web.insert(_el$, (() => {
      var _c$ = web.memo(() => store.option.dir === 'rtl');
      return () => _c$() ? web.createComponent(MdOutlineFormatTextdirectionRToL, {}) : web.createComponent(MdOutlineFormatTextdirectionLToR, {});
    })());
    web.effect(() => web.className(_el$, modules_c21c94f2$1.SettingsItemIconButton));
    return _el$;
  }
})], [helper.t('setting.option.paragraph_scrollbar'), () => [web.createComponent(SettingsItemSelect, {
  get name() {
    return helper.t('setting.option.scrollbar_position');
  },
  get options() {
    return [['auto', helper.t('setting.option.scrollbar_position_auto')], ['right', helper.t('setting.option.scrollbar_position_right')], ['top', helper.t('setting.option.scrollbar_position_top')], ['bottom', helper.t('setting.option.scrollbar_position_bottom')], ['hidden', helper.t('setting.option.scrollbar_position_hidden')]];
  },
  get value() {
    return store.option.scrollbar.position;
  },
  get onChange() {
    return createStateSetFn('scrollbar.position');
  }
}), web.createComponent(SettingsShowItem, {
  get when() {
    return store.option.scrollbar.position !== 'hidden';
  },
  get children() {
    return [web.createComponent(solidJs.Show, {
      get when() {
        return !store.isMobile;
      },
      get children() {
        return web.createComponent(SettingsItemSwitch, {
          get name() {
            return helper.t('setting.option.scrollbar_auto_hidden');
          },
          get value() {
            return store.option.scrollbar.autoHidden;
          },
          get onChange() {
            return createStateSetFn('scrollbar.autoHidden');
          }
        });
      }
    }), web.createComponent(SettingsItemSwitch, {
      get name() {
        return helper.t('setting.option.scrollbar_show_img_status');
      },
      get value() {
        return store.option.scrollbar.showImgStatus;
      },
      get onChange() {
        return createStateSetFn('scrollbar.showImgStatus');
      }
    }), web.createComponent(solidJs.Show, {
      get when() {
        return store.option.scrollMode.enabled;
      },
      get children() {
        return web.createComponent(SettingsItemSwitch, {
          get name() {
            return helper.t('setting.option.scrollbar_easy_scroll');
          },
          get value() {
            return store.option.scrollbar.easyScroll;
          },
          get onChange() {
            return createStateSetFn('scrollbar.easyScroll');
          }
        });
      }
    })];
  }
})]], [helper.t('setting.option.paragraph_operation'), () => [web.createComponent(SettingsItemSwitch, {
  get name() {
    return helper.t('setting.option.jump_to_next_chapter');
  },
  get value() {
    return store.option.jumpToNext;
  },
  get onChange() {
    return createStateSetFn('jumpToNext');
  }
}), web.createComponent(SettingsItemSwitch, {
  get name() {
    return helper.t('setting.option.show_clickable_area');
  },
  get value() {
    return store.show.touchArea;
  },
  onChange: () => _setState('show', 'touchArea', !store.show.touchArea)
}), web.createComponent(SettingsItemSwitch, {
  get name() {
    return helper.t('setting.option.click_page_turn_enabled');
  },
  get value() {
    return store.option.clickPageTurn.enabled;
  },
  get onChange() {
    return createStateSetFn('clickPageTurn.enabled');
  }
}), web.createComponent(SettingsShowItem, {
  get when() {
    return store.option.clickPageTurn.enabled;
  },
  get children() {
    return [web.createComponent(SettingsItemSelect, {
      get name() {
        return helper.t('setting.option.click_page_turn_area');
      },
      get options() {
        return Object.keys(areaArrayMap).map(key => [key, helper.t(\`touch_area.type.\${key}\`)]);
      },
      get value() {
        return store.option.clickPageTurn.area;
      },
      get onChange() {
        return createStateSetFn('clickPageTurn.area');
      }
    }), web.createComponent(SettingsItemSwitch, {
      get name() {
        return helper.t('setting.option.click_page_turn_swap_area');
      },
      get value() {
        return store.option.clickPageTurn.reverse;
      },
      get onChange() {
        return createStateSetFn('clickPageTurn.reverse');
      }
    })];
  }
})]], [helper.t('setting.option.paragraph_display'), () => [web.createComponent(SettingsItemSwitch, {
  get name() {
    return helper.t('setting.option.dark_mode');
  },
  get value() {
    return store.option.darkMode;
  },
  get onChange() {
    return createStateSetFn('darkMode');
  }
}), web.createComponent(solidJs.Show, {
  get when() {
    return !store.option.scrollMode.enabled;
  },
  get children() {
    return web.createComponent(SettingsItemSwitch, {
      get name() {
        return helper.t('setting.option.disable_auto_enlarge');
      },
      get value() {
        return store.option.disableZoom;
      },
      get onChange() {
        return createStateSetFn('disableZoom');
      }
    });
  }
}), web.createComponent(SettingsItemSwitch, {
  get name() {
    return helper.t('setting.option.auto_switch_page_mode');
  },
  get value() {
    return store.option.autoSwitchPageMode;
  },
  onChange: val => {
    setOption((draftOption, state) => {
      draftOption.autoSwitchPageMode = val;
      state.option.pageNum = val ? 0 : autoPageNum();
    });
  }
}), web.createComponent(solidJs.Show, {
  get when() {
    return store.option.scrollMode.enabled;
  },
  get children() {
    return [web.createComponent(SettingsItemSwitch, {
      get name() {
        return helper.t('setting.option.abreast_mode');
      },
      get value() {
        return store.option.scrollMode.abreastMode;
      },
      onChange: val => {
        const jump = saveScrollProgress();
        setOption(draftOption => {
          draftOption.scrollMode.abreastMode = val;
        });
        jump();
      }
    }), web.createComponent(SettingsItemNumber, {
      get name() {
        return helper.t('setting.option.scroll_mode_img_scale');
      },
      maxLength: 3,
      suffix: "%",
      step: 5,
      onChange: val => {
        if (!Number.isNaN(val)) zoomScrollModeImg(val / 100, true);
      },
      get value() {
        return Math.round(store.option.scrollMode.imgScale * 100);
      }
    }), web.createComponent(SettingsItemNumber, {
      get name() {
        return helper.t('setting.option.scroll_mode_img_spacing');
      },
      maxLength: 5,
      onChange: val => {
        if (Number.isNaN(val)) return;
        const newVal = helper.clamp(0, val, Number.POSITIVE_INFINITY);
        setOption(draftOption => {
          draftOption.scrollMode.spacing = newVal;
        });
      },
      get value() {
        return Math.round(store.option.scrollMode.spacing);
      }
    }), web.createComponent(solidJs.Show, {
      get when() {
        return store.option.scrollMode.abreastMode;
      },
      get children() {
        return web.createComponent(SettingsItemNumber, {
          get name() {
            return helper.t('setting.option.abreast_duplicate');
          },
          maxLength: 3,
          suffix: "%",
          step: 5,
          onChange: val => {
            if (Number.isNaN(val)) return;
            setOption(draftOption => {
              const newVal = helper.clamp(0, val / 100, 0.95);
              draftOption.scrollMode.abreastDuplicate = newVal;
            });
          },
          get value() {
            return Math.round(store.option.scrollMode.abreastDuplicate * 100);
          }
        });
      }
    }), web.createComponent(solidJs.Show, {
      get when() {
        return !store.option.scrollMode.abreastMode;
      },
      get children() {
        return web.createComponent(SettingsItemSwitch, {
          get name() {
            return helper.t('setting.option.fit_to_width');
          },
          get value() {
            return store.option.scrollMode.fitToWidth;
          },
          onChange: switchFitToWidth
        });
      }
    })];
  }
}), web.createComponent(solidJs.Show, {
  get when() {
    return !store.option.scrollMode.enabled;
  },
  get children() {
    return web.createComponent(SettingsItemNumber, {
      get name() {
        return helper.t('setting.option.zoom');
      },
      maxLength: 3,
      suffix: "%",
      step: 5,
      onChange: val => Number.isNaN(val) || zoom(val),
      get value() {
        return Math.round(store.option.zoom.ratio);
      }
    });
  }
})]], [helper.t('setting.option.paragraph_hotkeys'), SettingHotkeys, true], [helper.t('setting.option.paragraph_translation'), SettingTranslation, true], [helper.t('setting.option.paragraph_other'), () => [web.createComponent(SettingsItemSwitch, {
  get name() {
    return helper.t('setting.option.always_load_all_img');
  },
  get value() {
    return store.option.alwaysLoadAllImg;
  },
  get onChange() {
    return createStateSetFn('alwaysLoadAllImg');
  }
}), web.createComponent(SettingsItemSwitch, {
  get name() {
    return helper.t('setting.option.first_page_fill');
  },
  get value() {
    return store.option.firstPageFill;
  },
  get onChange() {
    return createStateSetFn('firstPageFill');
  }
}), web.createComponent(SettingsItemSwitch, {
  get name() {
    return helper.t('setting.option.show_comments');
  },
  get value() {
    return store.option.showComment;
  },
  get onChange() {
    return createStateSetFn('showComment');
  }
}), web.createComponent(SettingsItemSwitch, {
  get name() {
    return helper.t('setting.option.swap_page_turn_key');
  },
  get value() {
    return store.option.swapPageTurnKey;
  },
  get onChange() {
    return createStateSetFn('swapPageTurnKey');
  }
}), web.createComponent(SettingsItemNumber, {
  get name() {
    return helper.t('setting.option.preload_page_num');
  },
  maxLength: 5,
  onChange: val => {
    if (Number.isNaN(val)) return;
    setOption(draftOption => {
      draftOption.preloadPageNum = helper.clamp(0, val, 99_999);
    });
  },
  get value() {
    return store.option.preloadPageNum;
  }
}), web.createComponent(SettingsItem, {
  get name() {
    return helper.t('setting.option.background_color');
  },
  get children() {
    var _el$2 = web.template(\`<input type=color>\`)();
    _el$2.style.setProperty("width", "2em");
    _el$2.style.setProperty("margin-right", ".4em");
    _el$2.addEventListener("input", helper.throttle(e => {
      if (!e.target.value) return;
      setOption(draftOption => {
        // 在拉到纯黑或纯白时改回初始值
        draftOption.customBackground = e.target.value === '#000000' || e.target.value === '#ffffff' ? undefined : e.target.value;
        if (draftOption.customBackground) draftOption.darkMode = helper.needDarkMode(draftOption.customBackground);
      });
    }, 20));
    web.effect(() => _el$2.value = store.option.customBackground ?? (store.option.darkMode ? '#000000' : '#ffffff'));
    return _el$2;
  }
}), web.createComponent(SettingsItemSelect, {
  get name() {
    return helper.t('setting.language');
  },
  options: [['zh', '中文'], ['en', 'English'], ['ru', 'Русский']],
  get value() {
    return helper.lang();
  },
  onChange: helper.setLang
})], true]];

/** 阻止事件冒泡 */
const stopPropagation = e => {
  e.stopPropagation();
};

/** 从头开始播放元素的动画 */
const playAnimation = e => {
  if (!e) return;
  for (const animation of e.getAnimations()) {
    animation.cancel();
    animation.play();
  }
};


/** 判断滚动事件是否会导致滚动 */
const canScroll = (e, container) => {
  const {
    scrollHeight,
    clientHeight,
    scrollTop
  } = container;
  return scrollHeight > clientHeight && (e.deltaY < 0 && scrollTop > 0 || e.deltaY > 0 && Math.ceil(scrollTop) < scrollHeight - clientHeight);
};

/** 菜单面板 */
const SettingPanel = () => {
  const settingList = helper.createRootMemo(() => store.prop.editSettingList(defaultSettingList()));
  return (() => {
    var _el$ = web.template(\`<div>\`)();
    web.addEventListener(_el$, "scroll", stopPropagation);
    _el$.addEventListener("wheel", e => canScroll(e, refs.settingPanel) && e.stopPropagation());
    var _ref$ = bindRef('settingPanel');
    typeof _ref$ === "function" && web.use(_ref$, _el$);
    _el$.addEventListener("click", stopPropagation);
    web.insert(_el$, web.createComponent(solidJs.For, {
      get each() {
        return settingList();
      },
      children: ([name, SettingItem, hidden], i) => {
        const [show, setShwo] = solidJs.createSignal(!hidden);
        return [web.memo(() => web.memo(() => !!i())() ? web.template(\`<hr>\`)() : null), (() => {
          var _el$2 = web.template(\`<div><div></div><div>\`)(),
            _el$3 = _el$2.firstChild,
            _el$4 = _el$3.nextSibling;
          _el$3.addEventListener("click", () => setShwo(prev => !prev));
          web.insert(_el$3, name, null);
          web.insert(_el$3, () => show() ? null : ' …', null);
          web.insert(_el$4, web.createComponent(SettingItem, {}));
          web.effect(_p$ => {
            var _v$3 = modules_c21c94f2$1.SettingBlock,
              _v$4 = show(),
              _v$5 = modules_c21c94f2$1.SettingBlockSubtitle,
              _v$6 = modules_c21c94f2$1.SettingBlockBody;
            _v$3 !== _p$.e && web.className(_el$2, _p$.e = _v$3);
            _v$4 !== _p$.t && web.setAttribute(_el$2, "data-show", _p$.t = _v$4);
            _v$5 !== _p$.a && web.className(_el$3, _p$.a = _v$5);
            _v$6 !== _p$.o && web.className(_el$4, _p$.o = _v$6);
            return _p$;
          }, {
            e: undefined,
            t: undefined,
            a: undefined,
            o: undefined
          });
          return _el$2;
        })()];
      }
    }));
    web.effect(_p$ => {
      var _v$ = \`\${modules_c21c94f2$1.SettingPanel} \${modules_c21c94f2$1.beautifyScrollbar}\`,
        _v$2 = helper.lang() === 'zh' ? '15em' : '20em';
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && ((_p$.t = _v$2) != null ? _el$.style.setProperty("width", _v$2) : _el$.style.removeProperty("width"));
      return _p$;
    }, {
      e: undefined,
      t: undefined
    });
    return _el$;
  })();
};

/** 工具栏按钮分隔栏 */
const buttonListDivider = () => (() => {
  var _el$ = web.template(\`<div>\`)();
  _el$.style.setProperty("height", "1em");
  return _el$;
})();
const ZoomButton = () => web.createComponent(IconButton, {
  get tip() {
    return web.memo(() => store.option.zoom.ratio === 100)() ? helper.t('button.zoom_in') : helper.t('button.zoom_out');
  },
  get enabled() {
    return store.option.zoom.ratio !== 100;
  },
  onClick: () => doubleClickZoom(),
  get children() {
    return web.createComponent(solidJs.Show, {
      get when() {
        return store.option.zoom.ratio === 100;
      },
      get fallback() {
        return web.createComponent(MdZoomOut, {});
      },
      get children() {
        return web.createComponent(MdZoomIn, {});
      }
    });
  }
});

/** 工具栏的默认按钮列表 */
const defaultButtonList = [
// 单双页模式
() => web.createComponent(IconButton, {
  get tip() {
    return web.memo(() => !!isOnePageMode())() ? helper.t('button.page_mode_single') : helper.t('button.page_mode_double');
  },
  get hidden() {
    return store.isMobile || store.option.scrollMode.enabled;
  },
  onClick: switchOnePageMode,
  get children() {
    return web.memo(() => !!isOnePageMode())() ? web.createComponent(MdLooksOne, {}) : web.createComponent(MdLooksTwo, {});
  }
}),
// 卷轴模式
() => web.createComponent(IconButton, {
  get tip() {
    return helper.t('button.scroll_mode');
  },
  get enabled() {
    return store.option.scrollMode.enabled;
  },
  onClick: switchScrollMode,
  get children() {
    return web.createComponent(MdViewDay, {});
  }
}),
// 页面填充
() => web.createComponent(IconButton, {
  get tip() {
    return helper.t('button.page_fill');
  },
  get enabled() {
    return Boolean(store.fillEffect[nowFillIndex()]);
  },
  get hidden() {
    return isOnePageMode();
  },
  onClick: switchFillEffect,
  get children() {
    return web.createComponent(MdQueue, {});
  }
}),
// 网格模式
() => web.createComponent(IconButton, {
  get tip() {
    return helper.t('button.grid_mode');
  },
  get enabled() {
    return store.gridMode;
  },
  onClick: switchGridMode,
  get children() {
    return web.createComponent(MdGrid, {});
  }
}), buttonListDivider,
// 放大模式
() => web.createComponent(solidJs.Show, {
  get when() {
    return store.option.scrollMode.enabled;
  },
  get fallback() {
    return web.createComponent(ZoomButton, {});
  },
  get children() {
    return [web.createComponent(IconButton, {
      get tip() {
        return helper.t('button.zoom_in');
      },
      get enabled() {
        return store.option.scrollMode.imgScale >= 3;
      },
      onClick: () => zoomScrollModeImg(0.05),
      get children() {
        return web.createComponent(MdZoomIn, {});
      }
    }), web.createComponent(IconButton, {
      get tip() {
        return helper.t('button.zoom_out');
      },
      get enabled() {
        return store.option.scrollMode.imgScale <= 0.1;
      },
      onClick: () => zoomScrollModeImg(-0.05),
      get children() {
        return web.createComponent(MdZoomOut, {});
      }
    })];
  }
}),
// 翻译设置
() => web.createComponent(IconButton, {
  get tip() {
    return web.memo(() => !!isTranslatingImage())() ? helper.t('button.close_current_page_translation') : helper.t('button.translate_current_page');
  },
  get enabled() {
    return isTranslatingImage();
  },
  get hidden() {
    return store.option.translation.server === 'disable';
  },
  onClick: switchTranslation,
  get children() {
    return web.createComponent(MdTranslate, {});
  }
}),
// 设置
() => {
  const [showPanel, setShowPanel] = solidJs.createSignal(false);
  const handleClick = () => {
    const _showPanel = !showPanel();
    _setState('show', 'toolbar', _showPanel);
    setShowPanel(_showPanel);
  };
  const popper = solidJs.createMemo(() => [web.createComponent(SettingPanel, {}), (() => {
    var _el$2 = web.template(\`<div role=button tabindex=-1>\`)();
    _el$2.addEventListener("wheel", e => {
      if (isScrollMode()) refs.mangaBox.scrollBy({
        top: e.deltaY
      });
    });
    _el$2.addEventListener("click", handleClick);
    web.effect(() => web.className(_el$2, modules_c21c94f2$1.closeCover));
    return _el$2;
  })()]);
  return web.createComponent(IconButton, {
    get tip() {
      return helper.t('button.setting');
    },
    get enabled() {
      return showPanel();
    },
    get showTip() {
      return showPanel();
    },
    onClick: handleClick,
    get popperClassName() {
      return showPanel() && modules_c21c94f2$1.SettingPanelPopper;
    },
    get popper() {
      return web.memo(() => !!showPanel())() && popper();
    },
    get children() {
      return web.createComponent(MdSettings, {});
    }
  });
}];


/** 左侧工具栏 */
const Toolbar = () => {
  helper.createEffectOn(() => store.show.toolbar, show => show || focus());
  return (() => {
    var _el$ = web.template(\`<div role=toolbar><div><div>\`)(),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.firstChild;
    _el$2.addEventListener("click", focus);
    web.insert(_el$2, web.createComponent(solidJs.For, {
      get each() {
        return store.prop.editButtonList(defaultButtonList);
      },
      children: ButtonItem => web.createComponent(ButtonItem, {})
    }), null);
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2$1.toolbar,
        _v$2 = helper.boolDataVal(store.show.toolbar),
        _v$3 = helper.boolDataVal(store.isMobile && store.gridMode),
        _v$4 = store.isDragMode ? 'none' : undefined,
        _v$5 = modules_c21c94f2$1.toolbarPanel,
        _v$6 = modules_c21c94f2$1.toolbarBg;
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.setAttribute(_el$, "data-show", _p$.t = _v$2);
      _v$3 !== _p$.a && web.setAttribute(_el$, "data-close", _p$.a = _v$3);
      _v$4 !== _p$.o && ((_p$.o = _v$4) != null ? _el$.style.setProperty("pointer-events", _v$4) : _el$.style.removeProperty("pointer-events"));
      _v$5 !== _p$.i && web.className(_el$2, _p$.i = _v$5);
      _v$6 !== _p$.n && web.className(_el$3, _p$.n = _v$6);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined
    });
    return _el$;
  })();
};

const getScrollbarPage = (img, i, double = false) => {
  let num;
  if (store.option.scrollMode.enabled) num = store.imgList[i].size.height;else num = double ? 2 : 1;
  return {
    num,
    loadType: img.loadType,
    isNull: !img.src,
    translationType: img.translationType
  };
};
const ScrollbarPage = props => {
  const flexBasis = solidJs.createMemo(() => props.num / (store.option.scrollMode.enabled ? contentHeight() : store.imgList.length));
  return (() => {
    var _el$ = web.template(\`<div>\`)();
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2$1.scrollbarPage,
        _v$2 = \`\${flexBasis() * 100}%\`,
        _v$3 = props.loadType,
        _v$4 = helper.boolDataVal(props.isNull),
        _v$5 = props.translationType;
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && ((_p$.t = _v$2) != null ? _el$.style.setProperty("flex-basis", _v$2) : _el$.style.removeProperty("flex-basis"));
      _v$3 !== _p$.a && web.setAttribute(_el$, "data-type", _p$.a = _v$3);
      _v$4 !== _p$.o && web.setAttribute(_el$, "data-null", _p$.o = _v$4);
      _v$5 !== _p$.i && web.setAttribute(_el$, "data-translation-type", _p$.i = _v$5);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined
    });
    return _el$;
  })();
};

/** 显示对应图片加载情况的元素 */
const ScrollbarPageStatus = () => {
  // 将相同类型的页面合并显示
  const scrollbarPageList = helper.createThrottleMemo(() => {
    if (store.pageList.length === 0) return [];
    const list = [];
    let item;
    const handleImg = (i, double = false) => {
      const img = store.imgList[i];
      if (!item) {
        item = getScrollbarPage(img, i, double);
        return;
      }
      if (img.loadType === item.loadType && !img.src === item.isNull && img.translationType === item.translationType) {
        if (store.option.scrollMode.enabled) item.num += store.imgList[i].size.height;else item.num += double ? 2 : 1;
      } else {
        list.push(item);
        item = getScrollbarPage(img, i, double);
      }
    };
    for (let i = 0; i < store.pageList.length; i++) {
      const [a, b] = store.pageList[i];
      if (b === undefined) handleImg(a, !isOnePageMode());else if (a === -1) {
        handleImg(b);
        handleImg(b);
      } else if (b === -1) {
        handleImg(a);
        handleImg(a);
      } else {
        handleImg(a);
        handleImg(b);
      }
    }
    if (item) list.push(item);
    return list;
  }, 200);
  return web.createComponent(solidJs.For, {
    get each() {
      return scrollbarPageList();
    },
    children: page => web.createComponent(ScrollbarPage, page)
  });
};


/** 滚动条 */
const Scrollbar = () => {
  solidJs.onMount(() => {
    helper.useDrag({
      ref: refs.scrollbar,
      handleDrag: handleScrollbarSlider,
      easyMode: () => isScrollMode() && store.option.scrollbar.easyScroll
    });
    watchDomSize('scrollbarSize', refs.scrollbar);
  });

  // 在被滚动时使自身可穿透，以便在卷轴模式下触发页面的滚动
  const [penetrate, setPenetrate] = solidJs.createSignal(false);
  const resetPenetrate = helper.debounce(() => setPenetrate(false));
  const handleWheel = () => {
    setPenetrate(true);
    resetPenetrate();
  };

  /** 是否强制显示滚动条 */
  const showScrollbar = solidJs.createMemo(() => store.show.scrollbar || Boolean(penetrate()));

  /** 滚动条提示文本 */
  const tipText = helper.createThrottleMemo(() => {
    if (store.showRange[0] === store.showRange[1]) return getPageTip(store.showRange[0]);

    /** 并排卷轴模式下的滚动条提示文本 */
    if (isAbreastMode()) {
      const columns = abreastArea().columns.slice(abreastShowColumn().start, abreastShowColumn().end + 1).map(column => column.map(getPageTip));
      if (store.option.dir !== 'rtl') columns.reverse();
      return columns.map(column => column.join(' ')).join('\\n');
    }
    const tipList = [];
    for (let i = store.showRange[0]; i <= store.showRange[1]; i++) tipList.push(getPageTip(i));
    if (isOnePageMode()) return tipList.join('\\n');
    if (tipList.length === 1) return tipList[0];
    if (store.option.dir === 'rtl') tipList.reverse();
    return tipList.join('   ');
  });
  useStyleMemo(\`.\${modules_c21c94f2$1.scrollbar}\`, {
    'pointer-events': () => penetrate() || store.isDragMode || store.gridMode ? 'none' : 'auto',
    '--scroll-length': () => \`\${scrollDomLength()}px\`,
    '--slider-midpoint': () => \`\${sliderMidpoint()}px\`,
    '--slider-height': () => \`\${sliderHeight() * scrollDomLength()}px\`,
    '--slider-top': sliderTop
  });
  return (() => {
    var _el$ = web.template(\`<div role=scrollbar tabindex=-1><div></div><div>\`)(),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.nextSibling;
    _el$.addEventListener("wheel", handleWheel);
    var _ref$ = bindRef('scrollbar');
    typeof _ref$ === "function" && web.use(_ref$, _el$);
    web.insert(_el$3, tipText);
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return store.option.scrollbar.showImgStatus;
      },
      get children() {
        return web.createComponent(ScrollbarPageStatus, {});
      }
    }), null);
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2$1.scrollbar,
        _v$2 = modules_c21c94f2$1.mangaFlow,
        _v$3 = store.activePageIndex || -1,
        _v$4 = helper.boolDataVal(store.option.scrollbar.autoHidden),
        _v$5 = helper.boolDataVal(showScrollbar()),
        _v$6 = store.option.dir,
        _v$7 = scrollPosition(),
        _v$8 = helper.boolDataVal(isAbreastMode()),
        _v$9 = helper.boolDataVal(isDrag()),
        _v$10 = modules_c21c94f2$1.scrollbarSlider,
        _v$11 = {
          [modules_c21c94f2$1.hidden]: store.gridMode
        },
        _v$12 = modules_c21c94f2$1.scrollbarPoper;
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.setAttribute(_el$, "aria-controls", _p$.t = _v$2);
      _v$3 !== _p$.a && web.setAttribute(_el$, "aria-valuenow", _p$.a = _v$3);
      _v$4 !== _p$.o && web.setAttribute(_el$, "data-auto-hidden", _p$.o = _v$4);
      _v$5 !== _p$.i && web.setAttribute(_el$, "data-force-show", _p$.i = _v$5);
      _v$6 !== _p$.n && web.setAttribute(_el$, "data-dir", _p$.n = _v$6);
      _v$7 !== _p$.s && web.setAttribute(_el$, "data-position", _p$.s = _v$7);
      _v$8 !== _p$.h && web.setAttribute(_el$, "data-is-abreast-mode", _p$.h = _v$8);
      _v$9 !== _p$.r && web.setAttribute(_el$, "data-drag", _p$.r = _v$9);
      _v$10 !== _p$.d && web.className(_el$2, _p$.d = _v$10);
      _p$.l = web.classList(_el$2, _v$11, _p$.l);
      _v$12 !== _p$.u && web.className(_el$3, _p$.u = _v$12);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined,
      s: undefined,
      h: undefined,
      r: undefined,
      d: undefined,
      l: undefined,
      u: undefined
    });
    return _el$;
  })();
};

let delayTypeTimer = 0;
const EndPage = () => {
  const handleClick = e => {
    e.stopPropagation();
    if (e.target?.nodeName !== 'BUTTON') _setState('show', 'endPage', undefined);
    focus();
  };
  let ref;
  solidJs.onMount(() => {
    ref.addEventListener('wheel', e => {
      e.preventDefault();
      e.stopPropagation();
      turnPage(e.deltaY > 0 ? 'next' : 'prev');
    }, {
      passive: false
    });
  });

  // state.show.endPage 变量的延时版本，在隐藏的动画效果结束之后才会真正改变
  // 防止在动画效果结束前 tip 就消失或改变了位置
  const [delayType, setDelayType] = solidJs.createSignal();
  solidJs.createEffect(() => {
    if (store.show.endPage) {
      window.clearTimeout(delayTypeTimer);
      setDelayType(store.show.endPage);
    } else {
      delayTypeTimer = window.setTimeout(() => setDelayType(store.show.endPage), 500);
    }
  });
  const tip = solidJs.createMemo(() => {
    switch (delayType()) {
      case 'start':
        if (store.prop.Prev && store.option.jumpToNext) return helper.t('end_page.tip.start_jump');
        break;
      case 'end':
        if (store.prop.Next && store.option.jumpToNext) return helper.t('end_page.tip.end_jump');
        if (store.prop.Exit) return helper.t('end_page.tip.exit');
        break;
    }
    return '';
  });
  return (() => {
    var _el$ = web.template(\`<div role=button tabindex=-1><p></p><button type=button></button><button type=button data-is-end></button><button type=button>\`)(),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.nextSibling,
      _el$4 = _el$3.nextSibling,
      _el$5 = _el$4.nextSibling;
    var _ref$ = ref;
    typeof _ref$ === "function" ? web.use(_ref$, _el$) : ref = _el$;
    _el$.addEventListener("click", handleClick);
    web.insert(_el$2, tip);
    var _ref$2 = bindRef('prev');
    typeof _ref$2 === "function" && web.use(_ref$2, _el$3);
    _el$3.addEventListener("click", () => store.prop.Prev?.());
    web.insert(_el$3, () => helper.t('end_page.prev_button'));
    var _ref$3 = bindRef('exit');
    typeof _ref$3 === "function" && web.use(_ref$3, _el$4);
    _el$4.addEventListener("click", () => store.prop.Exit?.(store.show.endPage === 'end'));
    web.insert(_el$4, () => helper.t('button.exit'));
    var _ref$4 = bindRef('next');
    typeof _ref$4 === "function" && web.use(_ref$4, _el$5);
    _el$5.addEventListener("click", () => store.prop.Next?.());
    web.insert(_el$5, () => helper.t('end_page.next_button'));
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return web.memo(() => !!store.option.showComment)() && delayType() === 'end';
      },
      get children() {
        var _el$6 = web.template(\`<div>\`)();
        web.addEventListener(_el$6, "wheel", stopPropagation);
        web.insert(_el$6, web.createComponent(solidJs.For, {
          get each() {
            return store.commentList;
          },
          children: comment => (() => {
            var _el$7 = web.template(\`<p>\`)();
            web.insert(_el$7, comment);
            return _el$7;
          })()
        }));
        web.effect(() => web.className(_el$6, \`\${modules_c21c94f2$1.comments} \${modules_c21c94f2$1.beautifyScrollbar}\`));
        return _el$6;
      }
    }), null);
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2$1.endPage,
        _v$2 = store.show.endPage,
        _v$3 = delayType(),
        _v$4 = dir() === 'rtl' ? 'row-reverse' : undefined,
        _v$5 = modules_c21c94f2$1.tip,
        _v$6 = {
          [modules_c21c94f2$1.invisible]: !store.prop.Prev
        },
        _v$7 = store.show.endPage ? 0 : -1,
        _v$8 = store.show.endPage ? 0 : -1,
        _v$9 = {
          [modules_c21c94f2$1.invisible]: !store.prop.Next
        },
        _v$10 = store.show.endPage ? 0 : -1;
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.setAttribute(_el$, "data-show", _p$.t = _v$2);
      _v$3 !== _p$.a && web.setAttribute(_el$, "data-type", _p$.a = _v$3);
      _v$4 !== _p$.o && ((_p$.o = _v$4) != null ? _el$.style.setProperty("flex-direction", _v$4) : _el$.style.removeProperty("flex-direction"));
      _v$5 !== _p$.i && web.className(_el$2, _p$.i = _v$5);
      _p$.n = web.classList(_el$3, _v$6, _p$.n);
      _v$7 !== _p$.s && web.setAttribute(_el$3, "tabindex", _p$.s = _v$7);
      _v$8 !== _p$.h && web.setAttribute(_el$4, "tabindex", _p$.h = _v$8);
      _p$.r = web.classList(_el$5, _v$9, _p$.r);
      _v$10 !== _p$.d && web.setAttribute(_el$5, "tabindex", _p$.d = _v$10);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined,
      s: undefined,
      h: undefined,
      r: undefined,
      d: undefined
    });
    return _el$;
  })();
};

const createComicImg = url => ({
  // 使用相对协议路径，防止 Mixed Content 报错
  src: url?.replace(/^http:/, ''),
  loadType: 'wait',
  size: placeholderSize()
});
const useInit = props => {
  watchDomSize('rootSize', refs.root);
  const watchProps = {
    option(state) {
      state.option = helper.assign(state.option, props.defaultOption, props.option);
    },
    defaultOption(state) {
      state.defaultOption = helper.assign(defaultOption(), props.defaultOption);
    },
    fillEffect(state) {
      state.fillEffect = props.fillEffect ?? {
        '-1': true
      };
      updatePageData(state);
    },
    onExit(state) {
      state.prop.Exit = isEnd => {
        playAnimation(refs.exit);
        props.onExit?.(Boolean(isEnd));
        setState(draftState => {
          if (isEnd) draftState.activePageIndex = 0;
          draftState.show.endPage = undefined;
        });
      };
    },
    onPrev(state) {
      state.prop.Prev = props.onPrev ? helper.throttle(() => {
        playAnimation(refs.prev);
        props.onPrev?.();
      }, 1000) : undefined;
    },
    onNext(state) {
      state.prop.Next = props.onNext ? helper.throttle(() => {
        playAnimation(refs.next);
        props.onNext?.();
      }, 1000) : undefined;
    },
    editButtonList(state) {
      state.prop.editButtonList = props.editButtonList ?? (list => list);
    },
    editSettingList(state) {
      state.prop.editSettingList = props.editSettingList ?? (list => list);
    },
    onLoading(state) {
      state.prop.Loading = props.onLoading ? helper.debounce(props.onLoading) : undefined;
    },
    onOptionChange(state) {
      state.prop.OptionChange = props.onOptionChange ? helper.debounce(props.onOptionChange) : undefined;
    },
    onHotkeysChange(state) {
      state.prop.HotkeysChange = props.onHotkeysChange ? helper.debounce(props.onHotkeysChange) : undefined;
    },
    commentList(state) {
      state.commentList = props.commentList;
    }
  };
  for (const [key, fn] of Object.entries(watchProps)) {
    solidJs.createEffect(solidJs.on(() => props[key], () => setState(fn)));
  }
  solidJs.createEffect(() => {
    setState(state => {
      state.hotkeys = {
        ...JSON.parse(JSON.stringify(defaultHotkeys())),
        ...props.hotkeys
      };
    });
  });
  const handleImgList = () => {
    setState(state => {
      state.show.endPage = undefined;

      /** 修改前的当前显示图片 */
      const oldActiveImg = state.pageList[state.activePageIndex]?.map(i => state.imgList?.[i]?.src) ?? [];

      /** 是否需要重置页面填充 */
      let needResetFillEffect = false;
      const fillEffectList = Object.keys(state.fillEffect).map(Number);
      for (const pageIndex of fillEffectList) {
        if (pageIndex === -1) continue;
        if (state.imgList[pageIndex].src === props.imgList[pageIndex]) continue;
        needResetFillEffect = true;
        break;
      }

      /** 是否需要更新页面 */
      let needUpdatePageData = needResetFillEffect || state.imgList.length !== props.imgList.length;
      /** 传入的是否是新漫画 */
      let isNew = true;
      const imgMap = new Map(state.imgList.filter(img => img.src).map(img => [img.src, img]));
      for (let i = 0; i < props.imgList.length; i++) {
        const url = props.imgList[i];
        // 只有旧图一张不剩才算是新漫画
        if (isNew && imgMap.has(url)) isNew = false;
        // 只要有加载好的旧图被删就要更新页面
        const img = url && !needUpdatePageData && state.imgList[i];
        if (img && img.loadType !== 'wait' && img.src && img.src !== url) needUpdatePageData = true;
        state.imgList[i] = imgMap.get(url) ?? createComicImg(url);
      }
      if (state.imgList.length > props.imgList.length) {
        state.imgList.length = props.imgList.length;
        needUpdatePageData = true;
      }
      if (isNew) state.imgList = [...state.imgList];
      state.prop.Loading?.(state.imgList);
      if (isNew || needResetFillEffect) {
        state.fillEffect = props.fillEffect ?? {
          '-1': true
        };
        autoCloseFill.clear();
      }
      if (isNew || needUpdatePageData) {
        updatePageData(state);

        // 当前位于最后一页时最后一页被删的处理
        if (state.activePageIndex >= state.pageList.length) state.activePageIndex = state.pageList.length - 1;
        updateShowRange(state);
      }
      if (isNew || state.pageList.length === 0) {
        resetImgState(state);
        state.activePageIndex = 0;
        scrollTo(0);
        return;
      }

      // 尽量使当前显示的图片在修改后依然不变
      oldActiveImg.some(url => {
        // 跳过填充页和已被删除的图片
        if (!url || props.imgList.includes(url)) return false;
        const newPageIndex = state.pageList.findIndex(page => page.some(index => state.imgList?.[index]?.src === url));
        if (newPageIndex === -1) return false;
        state.activePageIndex = newPageIndex;
        return true;
      });

      // 如果已经翻到了最后一页，且最后一页的图片被删掉了，那就保持在末页显示
      if (state.activePageIndex > state.pageList.length - 1) state.activePageIndex = state.pageList.length - 1;
    });
  };

  // 处理 imgList 参数的初始化和修改
  helper.createEffectOn(() => props.imgList.join(','), helper.throttle(handleImgList, 500));
  focus();
};

/** 深色模式 */
const darkStyle = {
  '--hover-bg-color': '#FFF3',
  '--hover-bg-color-enable': '#FFFa',
  '--switch': '#BDBDBD',
  '--switch-bg': '#6E6E6E',
  '--scrollbar-slider': '#FFF6',
  '--page-bg': '#303030',
  '--secondary': '#7A909A',
  '--secondary-bg': '#556065',
  '--text': 'white',
  '--text-secondary': '#FFFC',
  '--text-bg': '#121212',
  'color-scheme': 'dark'
};

/** 浅色模式 */
const lightStyle = {
  '--hover-bg-color': '#0001',
  '--hover-bg-color-enable': '#0009',
  '--switch': '#FAFAFA',
  '--switch-bg': '#9C9C9C',
  '--scrollbar-slider': '#0006',
  '--page-bg': 'white',
  '--secondary': '#7A909A',
  '--secondary-bg': '#BAC5CA',
  '--text': 'black',
  '--text-secondary': '#0008',
  '--text-bg': '#FAFAFA',
  'color-scheme': 'light'
};
const createSvgIcon = (fill, d) => \`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='\${fill}' viewBox='0 0 24 24'%3E%3Cpath d='\${d}'/%3E%3C/svg%3E")\`;
const MdImageNotSupported = \`m21.9 21.9-8.49-8.49-9.82-9.82L2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31 1.42-1.41zM5 18l3.5-4.5 2.5 3.01L12.17 15l3 3H5zm16 .17L5.83 3H19c1.1 0 2 .9 2 2v13.17z\`;
const MdCloudDownload = \`M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-4.65 4.65c-.2.2-.51.2-.71 0L7 13h3V9h4v4h3z\`;
const MdPhoto = \`M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86-3 3.87L9 13.14 6 17h12l-3.86-5.14z\`;
const useCssVar = () => {
  const svg = () => {
    const fill = store.option.darkMode ? 'rgb(156,156,156)' : 'rgb(110,110,110)';
    return {
      '--md-image-not-supported': \`\${createSvgIcon(fill, MdImageNotSupported)}\`,
      '--md-cloud-download': \`\${createSvgIcon(fill, MdCloudDownload)}\`,
      '--md-photo': \`\${createSvgIcon(fill, MdPhoto)}\`
    };
  };
  const i18n = () => ({
    '--i18n-touch-area-prev': \`\${helper.t('touch_area.prev')}\`,
    '--i18n-touch-area-next': \`\${helper.t('touch_area.next')}\`,
    '--i18n-touch-area-menu': \`\${helper.t('touch_area.menu')}\`
  });
  useStyleMemo(\`.\${modules_c21c94f2$1.root}\`, [{
    '--bg': () => \`\${store.option.customBackground ?? (store.option.darkMode ? '#000' : '#fff')}\`,
    '--scroll-mode-img-scale': () => store.option.scrollMode.imgScale,
    '--scroll-mode-spacing': () => store.option.scrollMode.spacing
  }, () => store.option.darkMode ? darkStyle : lightStyle, svg, i18n]);
};

solidJs.enableScheduling();
/** 漫画组件 */
const Manga = props => {
  useStyle(css$1);
  useCssVar();
  solidJs.onMount(() => useInit(props));
  solidJs.createEffect(() => props.show && focus());
  return (() => {
    var _el$ = web.template(\`<div>\`)();
    var _ref$ = bindRef('root');
    typeof _ref$ === "function" && web.use(_ref$, _el$);
    _el$.addEventListener("click", stopPropagation);
    _el$.addEventListener("mousedown", handleMouseDown);
    _el$.addEventListener("wheel", handleWheel);
    _el$.addEventListener("keydown", handleKeyDown, true);
    _el$.addEventListener("keypress", stopPropagation, true);
    _el$.addEventListener("keyup", stopPropagation, true);
    web.insert(_el$, web.createComponent(ComicImgFlow, {}), null);
    web.insert(_el$, web.createComponent(Toolbar, {}), null);
    web.insert(_el$, web.createComponent(Scrollbar, {}), null);
    web.insert(_el$, web.createComponent(TouchArea, {}), null);
    web.insert(_el$, web.createComponent(EndPage, {}), null);
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2$1.root,
        _v$2 = {
          [modules_c21c94f2$1.hidden]: props.show === false,
          [props.class ?? '']: Boolean(props.class),
          ...props.classList
        },
        _v$3 = helper.boolDataVal(store.isMobile),
        _v$4 = helper.boolDataVal(store.option.scrollMode.enabled),
        _v$5 = helper.boolDataVal(store.gridMode);
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _p$.t = web.classList(_el$, _v$2, _p$.t);
      _v$3 !== _p$.a && web.setAttribute(_el$, "data-mobile", _p$.a = _v$3);
      _v$4 !== _p$.o && web.setAttribute(_el$, "data-scroll-mode", _p$.o = _v$4);
      _v$5 !== _p$.i && web.setAttribute(_el$, "data-grid-mode", _p$.i = _v$5);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined
    });
    return _el$;
  })();
};

exports.Manga = Manga;
exports._setAbreastScrollFill = _setAbreastScrollFill;
exports.abreastArea = abreastArea;
exports.abreastColumnWidth = abreastColumnWidth;
exports.abreastContentWidth = abreastContentWidth;
exports.abreastScrollFill = abreastScrollFill;
exports.abreastScrollWidth = abreastScrollWidth;
exports.abreastShowColumn = abreastShowColumn;
exports.activeImgIndex = activeImgIndex;
exports.activePage = activePage;
exports.autoCloseFill = autoCloseFill;
exports.autoPageNum = autoPageNum;
exports.bindRef = bindRef;
exports.bindScrollTop = bindScrollTop;
exports.bound = bound;
exports.buttonListDivider = buttonListDivider;
exports.checkImgSize = checkImgSize;
exports.contentHeight = contentHeight;
exports.createStateSetFn = createStateSetFn;
exports.defaultHotkeys = defaultHotkeys;
exports.doubleClickZoom = doubleClickZoom;
exports.findFillIndex = findFillIndex;
exports.focus = focus;
exports.getImgTip = getImgTip;
exports.getPageTip = getPageTip;
exports.handleClick = handleClick;
exports.handleComicData = handleComicData;
exports.handleGridClick = handleGridClick;
exports.handleImgError = handleImgError;
exports.handleImgLoaded = handleImgLoaded;
exports.handleKeyDown = handleKeyDown;
exports.handleMangaFlowDrag = handleMangaFlowDrag;
exports.handleMouseDown = handleMouseDown;
exports.handlePageClick = handlePageClick;
exports.handlePinchZoom = handlePinchZoom;
exports.handleScrollModeDrag = handleScrollModeDrag;
exports.handleScrollbarSlider = handleScrollbarSlider;
exports.handleTrackpadWheel = handleTrackpadWheel;
exports.handleWheel = handleWheel;
exports.handleZoomDrag = handleZoomDrag;
exports.hotkeysMap = hotkeysMap;
exports.imgAreaStyle = imgAreaStyle;
exports.imgPageMap = imgPageMap;
exports.imgShowState = imgShowState;
exports.imgTopList = imgTopList;
exports.isAbreastMode = isAbreastMode;
exports.isBottom = isBottom;
exports.isDrag = isDrag;
exports.isOnePageMode = isOnePageMode;
exports.isScrollMode = isScrollMode;
exports.isTop = isTop;
exports.isTranslatingImage = isTranslatingImage;
exports.isWideImg = isWideImg;
exports.nowFillIndex = nowFillIndex;
exports.pageNum = pageNum;
exports.placeholderSize = placeholderSize;
exports.preloadNum = preloadNum;
exports.renderImgList = renderImgList;
exports.resetImgState = resetImgState;
exports.resetPage = resetPage;
exports.resetUI = resetUI;
exports.saveScrollProgress = saveScrollProgress;
exports.scrollDomLength = scrollDomLength;
exports.scrollLength = scrollLength;
exports.scrollModTop = scrollModTop;
exports.scrollPercentage = scrollPercentage;
exports.scrollPosition = scrollPosition;
exports.scrollProgress = scrollProgress;
exports.scrollTo = scrollTo;
exports.scrollTop = scrollTop;
exports.scrollViewImg = scrollViewImg;
exports.setAbreastScrollFill = setAbreastScrollFill;
exports.setDefaultHotkeys = setDefaultHotkeys;
exports.setIsDrag = setIsDrag;
exports.setOption = setOption;
exports.showImgList = showImgList;
exports.sliderHeight = sliderHeight;
exports.sliderMidpoint = sliderMidpoint;
exports.sliderTop = sliderTop;
exports.store = store;
exports.switchDir = switchDir;
exports.switchFillEffect = switchFillEffect;
exports.switchFitToWidth = switchFitToWidth;
exports.switchGridMode = switchGridMode;
exports.switchOnePageMode = switchOnePageMode;
exports.switchScrollMode = switchScrollMode;
exports.switchTranslation = switchTranslation;
exports.touches = touches;
exports.turnPage = turnPage;
exports.turnPageAnimation = turnPageAnimation;
exports.turnPageFn = turnPageFn;
exports.updateImgSize = updateImgSize;
exports.updateImgType = updateImgType;
exports.updatePageData = updatePageData;
exports.updateShowRange = updateShowRange;
exports.watchDomSize = watchDomSize;
exports.zoom = zoom;
exports.zoomScrollModeImg = zoomScrollModeImg;
`;
      break;
    case 'components/IconButton':
      code =`
const web = require('solid-js/web');
const solidJs = require('solid-js');
const helper = require('helper');

var css = ".iconButtonItem{position:relative}.iconButton,.iconButtonItem{align-items:center;display:flex}.iconButton{background-color:initial;border-radius:9999px;border-style:none;color:var(--text,#fff);cursor:pointer;font-size:1.5em;height:1.5em;justify-content:center;margin:.1em;outline:none;padding:0;width:1.5em}.iconButton:focus,.iconButton:hover{background-color:var(--hover-bg-color,#fff3)}.iconButton.enabled{background-color:var(--text,#fff);color:var(--text-bg,#121212)}.iconButton.enabled:focus,.iconButton.enabled:hover{background-color:var(--hover-bg-color-enable,#fffa)}.iconButton>svg{width:1em}.iconButtonPopper{align-items:center;background-color:#303030;border-radius:.3em;color:#fff;display:flex;font-size:.8em;opacity:0;padding:.4em .5em;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);-webkit-user-select:none;user-select:none;white-space:nowrap}.iconButtonPopper[data-placement=right]{left:calc(100% + 1.5em)}.iconButtonPopper[data-placement=right]:before{border-right-color:var(--switch-bg,#6e6e6e);border-right-width:.5em;right:calc(100% + .5em)}.iconButtonPopper[data-placement=left]{right:calc(100% + 1.5em)}.iconButtonPopper[data-placement=left]:before{border-left-color:var(--switch-bg,#6e6e6e);border-left-width:.5em;left:calc(100% + .5em)}.iconButtonPopper:before{background-color:initial;border:.4em solid #0000;content:\\"\\";pointer-events:none;position:absolute;transition:opacity .15s}.iconButtonItem:is(:hover,:focus,[data-show=true]) .iconButtonPopper{opacity:1}.hidden{display:none}";
var modules_c21c94f2 = {"iconButtonItem":"iconButtonItem","iconButton":"iconButton","enabled":"enabled","iconButtonPopper":"iconButtonPopper","hidden":"hidden"};

/** 图标按钮 */
const IconButton = _props => {
  const props = solidJs.mergeProps({
    placement: 'right'
  }, _props);
  let buttonRef;
  const handleClick = e => {
    props.onClick?.(e);
    // 在每次点击后取消焦点
    buttonRef?.blur();
  };
  return (() => {
    var _el$ = web.template(\`<div><button type=button tabindex=0>\`)(),
      _el$2 = _el$.firstChild;
    web.use(ref => helper.useStyle(css, ref), _el$);
    var _ref$ = buttonRef;
    typeof _ref$ === "function" ? web.use(_ref$, _el$2) : buttonRef = _el$2;
    _el$2.addEventListener("click", handleClick);
    web.insert(_el$2, () => props.children);
    web.insert(_el$, (() => {
      var _c$ = web.memo(() => !!(props.popper || props.tip));
      return () => _c$() ? (() => {
        var _el$3 = web.template(\`<div>\`)();
        web.insert(_el$3, () => props.popper || props.tip);
        web.effect(_p$ => {
          var _v$6 = [modules_c21c94f2.iconButtonPopper, props.popperClassName].join(' '),
            _v$7 = props.placement;
          _v$6 !== _p$.e && web.className(_el$3, _p$.e = _v$6);
          _v$7 !== _p$.t && web.setAttribute(_el$3, "data-placement", _p$.t = _v$7);
          return _p$;
        }, {
          e: undefined,
          t: undefined
        });
        return _el$3;
      })() : null;
    })(), null);
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2.iconButtonItem,
        _v$2 = props.showTip,
        _v$3 = props.tip,
        _v$4 = modules_c21c94f2.iconButton,
        _v$5 = {
          [modules_c21c94f2.hidden]: props.hidden,
          [modules_c21c94f2.enabled]: props.enabled
        };
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.setAttribute(_el$, "data-show", _p$.t = _v$2);
      _v$3 !== _p$.a && web.setAttribute(_el$2, "aria-label", _p$.a = _v$3);
      _v$4 !== _p$.o && web.className(_el$2, _p$.o = _v$4);
      _p$.i = web.classList(_el$2, _v$5, _p$.i);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined
    });
    return _el$;
  })();
};

exports.IconButton = IconButton;
`;
      break;
    case 'components/Fab':
      code =`
const web = require('solid-js/web');
const solidJs = require('solid-js');
const helper = require('helper');

const MdMenuBook = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98z"></path><path d="M13.98 11.01c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.54-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39-.08.01-.16.03-.23.03m0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03m0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.7-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

var css = ".fabRoot{font-size:1.1em;transition:transform .2s}.fabRoot[data-show=false]{pointer-events:none}.fabRoot[data-show=false]>button{transform:scale(0)}.fabRoot[data-trans=true]{opacity:.8}.fabRoot[data-trans=true]:focus,.fabRoot[data-trans=true]:focus-visible,.fabRoot[data-trans=true]:hover{opacity:1}.fab{align-items:center;background-color:var(--fab,#607d8b);border:none;border-radius:100%;box-shadow:0 3px 5px -1px #0003,0 6px 10px 0 #00000024,0 1px 18px 0 #0000001f;color:#fff;cursor:pointer;display:flex;font-size:1em;height:3.6em;justify-content:center;transform:scale(1);transition:transform .2s;width:3.6em}.fab>svg{font-size:1.5em;width:1em}.fab:focus,.fab:focus-visible{box-shadow:0 3px 5px -1px #00000080,0 6px 10px 0 #00000057,0 1px 18px 0 #00000052;outline:none}.progress{color:#b0bec5;display:inline-block;height:100%;position:absolute;transform:rotate(-90deg);transition:transform .3s cubic-bezier(.4,0,.2,1) 0ms;width:100%}.progress>svg{stroke:currentcolor;stroke-dasharray:290%;stroke-dashoffset:100%;stroke-linecap:round;transition:stroke-dashoffset .3s cubic-bezier(.4,0,.2,1) 0ms}.progress:hover{color:#cfd8dc}.progress[aria-valuenow=\\"1\\"]{opacity:0;transition:opacity .2s .15s}.popper{align-items:center;background-color:#303030;border-radius:.3em;color:#fff;display:flex;font-size:.8em;opacity:0;padding:.4em .5em;pointer-events:none;position:absolute;right:calc(100% + 1.5em);top:50%;transform:translateY(-50%) scale(0);transform-origin:right;transition:transform .23s,opacity .15s;transition-delay:var(--hide-delay);white-space:nowrap}:is(.fab:hover,.fabRoot[data-focus=true]) .popper{opacity:1;transform:translateY(-50%) scale(1);transition-delay:0ms}.speedDial{align-items:center;bottom:0;display:flex;flex-direction:column-reverse;font-size:1.1em;padding-bottom:120%;pointer-events:none;position:absolute;width:100%;z-index:-1}.speedDialItem{margin:.1em 0;opacity:0;transform:scale(0);transition-delay:var(--hide-delay);transition-duration:.23s;transition-property:transform,opacity}.speedDial:hover,:is(.fabRoot:hover:not([data-show=false]),.fabRoot[data-focus=true])>.speedDial{pointer-events:all}:is(:is(.fabRoot:hover:not([data-show=false]),.fabRoot[data-focus=true])>.speedDial)>.speedDialItem{opacity:unset;transform:unset;transition-delay:var(--show-delay)}.backdrop{background:#000;height:100vh;left:0;opacity:0;pointer-events:none;position:fixed;top:0;transition:opacity .5s;width:100vw}.fabRoot[data-focus=true] .backdrop{pointer-events:unset}:is(.fabRoot:hover:not([data-show=false]),.fabRoot[data-focus=true],.speedDial:hover) .backdrop{opacity:.4}";
var modules_c21c94f2 = {"fabRoot":"fabRoot","fab":"fab","progress":"progress","popper":"popper","speedDial":"speedDial","speedDialItem":"speedDialItem","backdrop":"backdrop"};

/**
 * Fab 按钮
 */
const Fab = _props => {
  const props = solidJs.mergeProps({
    progress: 0,
    initialShow: true,
    autoTrans: false
  }, _props);

  // 上次滚动位置
  let lastY = window.scrollY;
  const [show, setShow] = solidJs.createSignal(props.initialShow);

  // 绑定滚动事件
  const handleScroll = helper.throttle(e => {
    // 跳过非用户操作的滚动
    if (!e.isTrusted) return;
    if (window.scrollY === lastY) return;
    setShow(
    // 滚动到底部时显示
    window.scrollY + window.innerHeight >= document.body.scrollHeight ||
    // 向上滚动时显示，反之隐藏
    window.scrollY - lastY < 0);
    lastY = window.scrollY;
  }, 200);
  solidJs.onMount(() => window.addEventListener('scroll', handleScroll));
  solidJs.onCleanup(() => window.removeEventListener('scroll', handleScroll));

  // 将 forceShow 的变化同步到 show 上
  solidJs.createEffect(() => props.show && setShow(props.show));
  return (() => {
    var _el$ = web.template(\`<div><button type=button tabindex=-1><span role=progressbar><svg viewBox="22 22 44 44"><circle cx=44 cy=44 r=20.2 fill=none stroke-width=3.6>\`)(),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.firstChild,
      _el$4 = _el$3.firstChild;
    web.use(ref => helper.useStyle(css, ref), _el$);
    _el$2.addEventListener("click", () => props.onClick?.());
    web.insert(_el$2, () => props.children ?? web.createComponent(MdMenuBook, {}), _el$3);
    web.insert(_el$2, (() => {
      var _c$ = web.memo(() => !!props.tip);
      return () => _c$() ? (() => {
        var _el$7 = web.template(\`<div>\`)();
        web.insert(_el$7, () => props.tip);
        web.effect(() => web.className(_el$7, modules_c21c94f2.popper));
        return _el$7;
      })() : null;
    })(), null);
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return props.speedDial?.length;
      },
      get children() {
        var _el$5 = web.template(\`<div><div>\`)(),
          _el$6 = _el$5.firstChild;
        _el$6.addEventListener("click", () => props.onBackdropClick?.());
        web.insert(_el$5, web.createComponent(solidJs.For, {
          get each() {
            return props.speedDial;
          },
          children: (SpeedDialItem, i) => (() => {
            var _el$8 = web.template(\`<div>\`)();
            web.insert(_el$8, web.createComponent(SpeedDialItem, {}));
            web.effect(_p$ => {
              var _v$12 = modules_c21c94f2.speedDialItem,
                _v$13 = \`\${(i() + 1) * 30}ms\`,
                _v$14 = \`\${(props.speedDial.length - 1 - i()) * 50}ms\`,
                _v$15 = i() * 30;
              _v$12 !== _p$.e && web.className(_el$8, _p$.e = _v$12);
              _v$13 !== _p$.t && ((_p$.t = _v$13) != null ? _el$8.style.setProperty("--show-delay", _v$13) : _el$8.style.removeProperty("--show-delay"));
              _v$14 !== _p$.a && ((_p$.a = _v$14) != null ? _el$8.style.setProperty("--hide-delay", _v$14) : _el$8.style.removeProperty("--hide-delay"));
              _v$15 !== _p$.o && web.setAttribute(_el$8, "data-i", _p$.o = _v$15);
              return _p$;
            }, {
              e: undefined,
              t: undefined,
              a: undefined,
              o: undefined
            });
            return _el$8;
          })()
        }), null);
        web.effect(_p$ => {
          var _v$ = modules_c21c94f2.speedDial,
            _v$2 = modules_c21c94f2.backdrop;
          _v$ !== _p$.e && web.className(_el$5, _p$.e = _v$);
          _v$2 !== _p$.t && web.className(_el$6, _p$.t = _v$2);
          return _p$;
        }, {
          e: undefined,
          t: undefined
        });
        return _el$5;
      }
    }), null);
    web.effect(_p$ => {
      var _v$3 = modules_c21c94f2.fabRoot,
        _v$4 = props.show ?? show(),
        _v$5 = props.autoTrans,
        _v$6 = props.focus,
        _v$7 = {
          ...props.style,
          '--hide-delay': \`\${props.speedDial.length * 50}ms\`
        },
        _v$8 = modules_c21c94f2.fab,
        _v$9 = modules_c21c94f2.progress,
        _v$10 = props.progress,
        _v$11 = \`\${(1 - props.progress) * 290}%\`;
      _v$3 !== _p$.e && web.className(_el$, _p$.e = _v$3);
      _v$4 !== _p$.t && web.setAttribute(_el$, "data-show", _p$.t = _v$4);
      _v$5 !== _p$.a && web.setAttribute(_el$, "data-trans", _p$.a = _v$5);
      _v$6 !== _p$.o && web.setAttribute(_el$, "data-focus", _p$.o = _v$6);
      _p$.i = web.style(_el$, _v$7, _p$.i);
      _v$8 !== _p$.n && web.className(_el$2, _p$.n = _v$8);
      _v$9 !== _p$.s && web.className(_el$3, _p$.s = _v$9);
      _v$10 !== _p$.h && web.setAttribute(_el$3, "aria-valuenow", _p$.h = _v$10);
      _v$11 !== _p$.r && ((_p$.r = _v$11) != null ? _el$4.style.setProperty("stroke-dashoffset", _v$11) : _el$4.style.removeProperty("stroke-dashoffset"));
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined,
      s: undefined,
      h: undefined,
      r: undefined
    });
    return _el$;
  })();
};

exports.Fab = Fab;
`;
      break;
    case 'components/Toast':
      code =`
const web = require('solid-js/web');
const solidJs = require('solid-js');
const helper = require('helper');
const store$1 = require('solid-js/store');

const [_state, _setState] = store$1.createStore({
  list: [],
  map: {}
});
const setState = fn => _setState(store$1.produce(fn));
const store = _state;
const creatId = () => {
  let id = \`\${Date.now()}\`;
  while (Reflect.has(store.map, id)) id += '_';
  return id;
};

const MdCheckCircle = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M9.29 16.29 5.7 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.59 7.59a.996.996 0 0 1-1.41 0">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdWarning = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3M12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m1 4h-2v-2h2z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdError = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1 4h-2v-2h2z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdInfo = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1-8h-2V7h2z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const toast = (msg, options) => {
  if (!msg) return;
  const id = options?.id ?? (typeof msg === 'string' ? msg : creatId());
  setState(state => {
    if (Reflect.has(state.map, id)) {
      Object.assign(state.map[id], {
        msg,
        ...options,
        update: true
      });
      return;
    }
    state.map[id] = {
      id,
      type: 'info',
      duration: 3000,
      msg,
      ...options
    };
    state.list.push(id);
  });

  /** 弹窗后记录一下 */
  let fn = helper.log;
  switch (options?.type) {
    case 'warn':
      fn = helper.log.warn;
      break;
    case 'error':
      fn = helper.log.error;
      break;
  }
  fn('Toast:', msg);
  if (options?.throw && typeof msg === 'string') throw new Error(msg);
};
toast.dismiss = id => {
  if (!Reflect.has(store.map, id)) return;
  _setState('map', id, 'exit', true);
};
toast.set = (id, options) => {
  if (!Reflect.has(store.map, id)) return;
  setState(state => Object.assign(state.map[id], options));
};
toast.success = (msg, options) => toast(msg, {
  ...options,
  exit: undefined,
  type: 'success'
});
toast.warn = (msg, options) => toast(msg, {
  ...options,
  exit: undefined,
  type: 'warn'
});
toast.error = (msg, options) => toast(msg, {
  ...options,
  exit: undefined,
  type: 'error'
});

var css = ".root{align-items:flex-end;bottom:0;flex-direction:column;font-size:16px;pointer-events:none;position:fixed;right:0;z-index:2147483647}.item,.root{display:flex}.item{align-items:center;animation:bounceInRight .5s 1;background:#fff;border-radius:4px;box-shadow:0 1px 10px 0 #0000001a,0 2px 15px 0 #0000000d;color:#000;cursor:pointer;margin:1em;max-width:min(30em,100vw);overflow:hidden;padding:.8em 1em;pointer-events:auto;position:relative;width:fit-content}.item>svg{color:var(--theme);margin-right:.5em;width:1.5em}.item[data-exit]{animation:bounceOutRight .5s 1}.schedule{background-color:var(--theme);bottom:0;height:.2em;left:0;position:absolute;transform-origin:left;width:100%}.item[data-schedule] .schedule{transition:transform .1s}.item:not([data-schedule]) .schedule{animation:schedule linear 1 forwards}:is(.item:hover,.item[data-schedule],.root[data-paused]) .schedule{animation-play-state:paused}.msg{line-height:1.4em;text-align:start;white-space:break-spaces;width:fit-content;word-break:break-word}.msg h2{margin:0}.msg h3{margin:.7em 0}.msg ul{margin:0;text-align:left}.msg button{background-color:#eee;border:none;border-radius:.4em;cursor:pointer;font-size:inherit;margin:0 .5em;outline:none;padding:.2em .6em}:is(.msg button):hover{background:#e0e0e0}p{margin:0}@keyframes schedule{0%{transform:scaleX(1)}to{transform:scaleX(0)}}@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0) scaleX(3)}60%{opacity:1;transform:translate3d(-25px,0,0) scaleX(1)}75%{transform:translate3d(10px,0,0) scaleX(.98)}90%{transform:translate3d(-5px,0,0) scaleX(.995)}to{transform:translateZ(0)}}@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0) scaleX(.9)}to{opacity:0;transform:translate3d(2000px,0,0) scaleX(2)}}";
var modules_c21c94f2 = {"root":"root","item":"item","bounceInRight":"bounceInRight","bounceOutRight":"bounceOutRight","schedule":"schedule","msg":"msg"};

const iconMap = {
  info: MdInfo,
  success: MdCheckCircle,
  warn: MdWarning,
  error: MdError
};
const colorMap = {
  info: '#3a97d7',
  success: '#23bb35',
  warn: '#f0c53e',
  error: '#e45042',
  custom: '#1f2936'
};

/** 删除 toast */
const dismissToast = id => setState(state => {
  state.map[id].onDismiss?.({
    ...state.map[id]
  });
  const i = state.list.indexOf(id);
  if (i !== -1) state.list.splice(i, 1);
  Reflect.deleteProperty(state.map, id);
});

/** 重置 toast 的 update 属性 */
const resetToastUpdate = id => _setState('map', id, 'update', undefined);
const ToastItem = props => {
  /** 是否要显示进度 */
  const showSchedule = solidJs.createMemo(() => props.duration === Number.POSITIVE_INFINITY && props.schedule ? true : undefined);
  const dismiss = e => {
    e.stopPropagation();
    if (showSchedule() && 'animationName' in e) return;
    toast.dismiss(props.id);
  };

  // 在退出动画结束后才真的删除
  const handleAnimationEnd = () => {
    if (!props.exit) return;
    dismissToast(props.id);
  };
  let scheduleRef;
  solidJs.createEffect(() => {
    if (!props.update) return;
    resetToastUpdate(props.id);
    if (!scheduleRef) return;
    for (const animation of scheduleRef.getAnimations()) {
      animation.cancel();
      animation.play();
    }
  });
  const handleClick = e => {
    props.onClick?.();
    dismiss(e);
  };
  return (() => {
    var _el$ = web.template(\`<div><div>\`)(),
      _el$2 = _el$.firstChild;
    _el$.addEventListener("animationend", handleAnimationEnd);
    _el$.addEventListener("click", handleClick);
    web.insert(_el$, web.createComponent(web.Dynamic, {
      get component() {
        return iconMap[props.type];
      }
    }), _el$2);
    web.insert(_el$2, (() => {
      var _c$ = web.memo(() => typeof props.msg === 'string');
      return () => _c$() ? props.msg : web.createComponent(props.msg, {});
    })());
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return props.duration !== Number.POSITIVE_INFINITY || props.schedule !== undefined;
      },
      get children() {
        var _el$3 = web.template(\`<div>\`)();
        _el$3.addEventListener("animationend", dismiss);
        var _ref$ = scheduleRef;
        typeof _ref$ === "function" ? web.use(_ref$, _el$3) : scheduleRef = _el$3;
        web.effect(_p$ => {
          var _v$ = modules_c21c94f2.schedule,
            _v$2 = \`\${props.duration}ms\`,
            _v$3 = showSchedule() ? \`scaleX(\${props.schedule})\` : undefined;
          _v$ !== _p$.e && web.className(_el$3, _p$.e = _v$);
          _v$2 !== _p$.t && ((_p$.t = _v$2) != null ? _el$3.style.setProperty("animation-duration", _v$2) : _el$3.style.removeProperty("animation-duration"));
          _v$3 !== _p$.a && ((_p$.a = _v$3) != null ? _el$3.style.setProperty("transform", _v$3) : _el$3.style.removeProperty("transform"));
          return _p$;
        }, {
          e: undefined,
          t: undefined,
          a: undefined
        });
        return _el$3;
      }
    }), null);
    web.effect(_p$ => {
      var _v$4 = modules_c21c94f2.item,
        _v$5 = colorMap[props.type],
        _v$6 = showSchedule(),
        _v$7 = props.exit,
        _v$8 = modules_c21c94f2.msg;
      _v$4 !== _p$.e && web.className(_el$, _p$.e = _v$4);
      _v$5 !== _p$.t && ((_p$.t = _v$5) != null ? _el$.style.setProperty("--theme", _v$5) : _el$.style.removeProperty("--theme"));
      _v$6 !== _p$.a && web.setAttribute(_el$, "data-schedule", _p$.a = _v$6);
      _v$7 !== _p$.o && web.setAttribute(_el$, "data-exit", _p$.o = _v$7);
      _v$8 !== _p$.i && web.className(_el$2, _p$.i = _v$8);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined
    });
    return _el$;
  })();
};

const [ref, setRef] = solidJs.createSignal();
const Toaster = () => {
  const [visible, setVisible] = solidJs.createSignal(document.visibilityState === 'visible');
  solidJs.onMount(() => {
    helper.useStyle(css, ref());
    const handleVisibilityChange = () => {
      setVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    solidJs.onCleanup(() => document.removeEventListener('visibilitychange', handleVisibilityChange));
  });
  return (() => {
    var _el$ = web.template(\`<div>\`)();
    web.use(setRef, _el$);
    web.insert(_el$, web.createComponent(solidJs.For, {
      get each() {
        return store.list;
      },
      children: id => web.createComponent(ToastItem, web.mergeProps(() => store.map[id]))
    }));
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2.root,
        _v$2 = visible() ? undefined : '';
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.setAttribute(_el$, "data-paused", _p$.t = _v$2);
      return _p$;
    }, {
      e: undefined,
      t: undefined
    });
    return _el$;
  })();
};

exports.Toaster = Toaster;
exports.ref = ref;
exports.toast = toast;
`;
      break;
    case 'userscript/dmzjApi':
      code =`
const store = require('solid-js/store');
const solidJs = require('solid-js');
const main = require('main');
const dmzjDecrypt = require('dmzjDecrypt');
const helper = require('helper');

/** 根据漫画 id 和章节 id 获取章节数据 */
const getChapterInfo = async (comicId, chapterId) => {
  const res = await main.request(\`https://m.dmzj.com/chapinfo/\${comicId}/\${chapterId}.html\`, {
    responseType: 'json',
    errorText: '获取章节数据失败'
  });
  return res.response;
};

/** 根据漫画 id 和章节 id 获取章节评论 */
const getViewpoint = async (comicId, chapterId) => {
  try {
    const res = await main.request(\`https://manhua.dmzj.com/tpi/api/viewpoint/getViewpoint?type=0&type_id=\${comicId}&chapter_id=\${chapterId}&more=1\`, {
      responseType: 'json',
      errorText: '获取章节评论失败'
    });

    // 还有另一个 api
    // http://v3api.dmzj.com/viewPoint/0/\${comic_id}/\${chapter_id}.json

    return res.response.data.list.map(({
      title,
      num
    }) => \`\${title} [+\${num}]\`);
  } catch {
    return [];
  }
};
const getComicDetail_base = async comicId => {
  const res = await main.request(\`https://api.dmzj.com/dynamic/comicinfo/\${comicId}.json\`, {
    responseType: 'json'
  });
  const {
    info: {
      last_updatetime,
      title
    },
    list
  } = res.response.data;
  return {
    title,
    last_updatetime,
    last_update_chapter_id: undefined,
    chapters: [{
      name: '连载',
      list: list.map(({
        id,
        chapter_name,
        updatetime
      }) => ({
        id,
        title: chapter_name,
        updatetime
      }))
    }]
  };
};
const getComicDetail_v4Api = async comicId => {
  const res = await main.request(\`https://v4api.idmzj.com/comic/detail/\${comicId}?uid=2665531&disable_level=1\`);
  const {
    comicInfo: {
      last_update_chapter_id,
      last_updatetime,
      chapters,
      title
    }
  } = dmzjDecrypt(res.responseText);
  for (const chapter of Object.values(chapters)) chapter.data.sort((a, b) => a.chapter_order - b.chapter_order);
  return {
    title,
    last_updatetime,
    last_update_chapter_id,
    chapters: chapters.map(({
      data,
      title: name
    }) => ({
      name,
      list: data.map(({
        chapter_id,
        chapter_title,
        updatetime
      }) => ({
        id: chapter_id,
        title: chapter_title,
        updatetime
      }))
    }))
  };
};
const getComicDetail_traversal = async (comicId, draftData) => {
  let nextId = draftData.last_update_chapter_id;
  if (!nextId) {
    helper.log.warn('last_update_chapter_id 为空，无法通过遍历获取章节');
    return;
  }
  draftData.chapters[0] = {
    name: '连载',
    list: []
  };
  main.toast.warn('正在通过遍历获取所有章节，耗时可能较长', {
    id: 'traversalTip',
    duration: Number.POSITIVE_INFINITY
  });
  while (nextId) {
    try {
      const {
        chapter_name,
        updatetime,
        prev_chap_id
      } = await getChapterInfo(comicId, nextId);
      draftData.chapters[0].list.push({
        id: nextId,
        title: chapter_name,
        updatetime
      });
      nextId = prev_chap_id;
    } catch {
      nextId = undefined;
    }
  }
  main.toast.dismiss('traversalTip');
};

/** 返回可变 store 类型的漫画数据 */
const useComicDetail = comicId => {
  const data = store.createMutable({});
  const apiFn = [getComicDetail_v4Api, getComicDetail_base, getComicDetail_traversal];
  solidJs.onMount(async () => {
    for (const api of apiFn) {
      try {
        Object.assign(data, await api(comicId, data));
        if (data.chapters?.some(chapter => chapter.list.length)) return;
      } catch {}
    }
    main.toast.error('漫画数据获取失败', {
      duration: Number.POSITIVE_INFINITY
    });
  });
  return data;
};

/** 根据漫画拼音简称找到对应的 id */
const getComicId = async py => {
  const res = await main.request(\`https://manhua.dmzj.com/api/v1/comic2/comic/detail?\${new URLSearchParams({
    channel: 'pc',
    app_name: 'comic',
    version: '1.0.0',
    timestamp: \`\${Date.now()}\`,
    uid: '',
    comic_py: py
  }).toString()}\`, {
    responseType: 'json'
  });
  return res.response.data?.comicInfo?.id;
};

exports.getChapterInfo = getChapterInfo;
exports.getComicId = getComicId;
exports.getViewpoint = getViewpoint;
exports.useComicDetail = useComicDetail;
`;
      break;
    case 'userscript/detectAd':
      code =`
const QrScanner = require('qr-scanner');
const main = require('main');
const helper = require('helper');

const getAdPage = async (list, isAdPage, adList) => {
  let i = list.length - 1;
  let normalNum = 0;
  // 只检查最后十张
  for (; i >= list.length - 10; i--) {
    // 开头肯定不会是广告
    if (i <= 2) break;
    if (adList.has(i)) continue;
    const item = list[i];
    if (!item) break;
    if (await isAdPage(item)) adList.add(i);
    // 找到连续三张正常漫画页后中断
    else if (normalNum >= 2) break;else normalNum += 1;
  }
  let adNum = 0;
  for (i = Math.min(...adList); i < list.length; i++) {
    if (adList.has(i)) {
      adNum += 1;
      continue;
    }

    // 连续两张广告后面的肯定也都是广告
    if (adNum >= 2) adList.add(i);
    // 夹在两张广告中间的肯定也是广告
    else if (adList.has(i - 1) && adList.has(i + 1)) adList.add(i);else adNum = 0;
  }
  return adList;
};

/** 判断像素点是否是灰阶 */
const isGrayscalePixel = (r, g, b) => r === g && r === b;

/** 判断一张图是否是彩图 */
const isColorImg = imgCanvas => {
  // 缩小尺寸放弃细节，避免被黑白图上的小段彩色文字干扰
  const canvas = new OffscreenCanvas(3, 3);
  const ctx = canvas.getContext('2d', {
    alpha: false
  });
  ctx.drawImage(imgCanvas, 0, 0, canvas.width, canvas.height);
  const {
    data
  } = ctx.getImageData(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (!isGrayscalePixel(r, g, b)) return true;
  }
  return false;
};
const imgToCanvas = async img => {
  if (typeof img !== 'string') {
    await helper.wait(() => img.naturalHeight && img.naturalWidth, 1000 * 10);
    try {
      const canvas = new OffscreenCanvas(img.width, img.height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      // 没被 CORS 污染就直接使用这个 canvas
      if (ctx.getImageData(0, 0, 1, 1)) return canvas;
    } catch {}
  }
  const url = typeof img === 'string' ? img : img.src;
  const res = await main.request(url, {
    responseType: 'blob'
  });
  const image = await helper.waitImgLoad(URL.createObjectURL(res.response));
  const canvas = new OffscreenCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);
  return canvas;
};

/** 二维码白名单 */
const qrCodeWhiteList = [
// fanbox
/^https:\\/\\/[^.]+\\.fanbox\\.cc/,
// twitter
/^https:\\/\\/twitter\\.com/, /^https:\\/\\/x\\.com/,
// fantia
/^https:\\/\\/fantia\\.jp/,
// 棉花糖
/^https:\\/\\/marshmallow-qa\\.com/];

/** 判断是否含有二维码 */
const hasQrCode = async (imgCanvas, scanRegion, qrEngine, canvas) => {
  try {
    const {
      data
    } = await QrScanner.scanImage(imgCanvas, {
      qrEngine,
      canvas: canvas,
      scanRegion,
      alsoTryWithoutScanRegion: true
    });
    if (!data) return false;
    helper.log(\`检测到二维码： \${data}\`);
    return qrCodeWhiteList.every(reg => !reg.test(data));
  } catch {
    return false;
  }
};
const isAdImg = async (imgCanvas, qrEngine, canvas) => {
  // 黑白图肯定不是广告
  if (!isColorImg(imgCanvas)) return false;
  const width = imgCanvas.width / 2;
  const height = imgCanvas.height / 2;

  // 分区块扫描图片
  const scanRegionList = [undefined,
  // 右下
  {
    x: width,
    y: height,
    width,
    height
  },
  // 左下
  {
    x: 0,
    y: height,
    width,
    height
  },
  // 右上
  {
    x: width,
    y: 0,
    width,
    height
  },
  // 左上
  {
    x: 0,
    y: 0,
    width,
    height
  }];
  for (const scanRegion of scanRegionList) if (await hasQrCode(imgCanvas, scanRegion, qrEngine, canvas)) return true;
  return false;
};
const byContent = (qrEngine, canvas) => async img => isAdImg(await imgToCanvas(img), qrEngine, canvas);

/** 通过图片内容判断是否是广告 */
const getAdPageByContent = async (imgList, adList) => {
  const qrEngine = await QrScanner.createQrEngine();
  const canvas = new OffscreenCanvas(1, 1);
  return getAdPage(imgList, byContent(qrEngine, canvas), adList);
};

/** 通过文件名判断是否是广告 */
const getAdPageByFileName = async (fileNameList, adList) => getAdPage(fileNameList, fileName => /^[zZ]+/.test(fileName), adList);

exports.getAdPageByContent = getAdPageByContent;
exports.getAdPageByFileName = getAdPageByFileName;
`;
      break;
    case 'main':
      code =`
const solidJs = require('solid-js');
const web = require('solid-js/web');
const helper = require('helper');
const Toast = require('components/Toast');
const Manga = require('components/Manga');
const store = require('solid-js/store');
const IconButton = require('components/IconButton');
const fflate = require('fflate');
const Fab = require('components/Fab');

// src/index.ts
var triggerOptions = !web.isServer && solidJs.DEV ? { equals: false, name: "trigger" } : { equals: false };
var triggerCacheOptions = !web.isServer && solidJs.DEV ? { equals: false, internal: true } : triggerOptions;
var TriggerCache = class {
  #map;
  constructor(mapConstructor = Map) {
    this.#map = new mapConstructor();
  }
  dirty(key) {
    if (web.isServer)
      return;
    this.#map.get(key)?.$$();
  }
  track(key) {
    if (!solidJs.getListener())
      return;
    let trigger = this.#map.get(key);
    if (!trigger) {
      const [$, $$] = solidJs.createSignal(void 0, triggerCacheOptions);
      this.#map.set(key, trigger = { $, $$, n: 1 });
    } else
      trigger.n++;
    solidJs.onCleanup(() => {
      if (trigger.n-- === 1)
        queueMicrotask(() => trigger.n === 0 && this.#map.delete(key));
    });
    trigger.$();
  }
};

// src/index.ts
var $KEYS = Symbol("track-keys");
var ReactiveSet = class extends Set {
  #triggers = new TriggerCache();
  constructor(values) {
    super();
    if (values)
      for (const v of values)
        super.add(v);
  }
  // reads
  get size() {
    this.#triggers.track($KEYS);
    return super.size;
  }
  has(v) {
    this.#triggers.track(v);
    return super.has(v);
  }
  *keys() {
    for (const key of super.keys()) {
      this.#triggers.track(key);
      yield key;
    }
    this.#triggers.track($KEYS);
  }
  values() {
    return this.keys();
  }
  *entries() {
    for (const key of super.keys()) {
      this.#triggers.track(key);
      yield [key, key];
    }
    this.#triggers.track($KEYS);
  }
  [Symbol.iterator]() {
    return this.values();
  }
  forEach(callbackfn) {
    this.#triggers.track($KEYS);
    super.forEach(callbackfn);
  }
  // writes
  add(v) {
    if (!super.has(v)) {
      super.add(v);
      solidJs.batch(() => {
        this.#triggers.dirty(v);
        this.#triggers.dirty($KEYS);
      });
    }
    return this;
  }
  delete(v) {
    const r = super.delete(v);
    if (r) {
      solidJs.batch(() => {
        this.#triggers.dirty(v);
        this.#triggers.dirty($KEYS);
      });
    }
    return r;
  }
  clear() {
    if (super.size) {
      solidJs.batch(() => {
        for (const v of super.keys())
          this.#triggers.dirty(v);
        super.clear();
        this.#triggers.dirty($KEYS);
      });
    }
  }
};

const getDom = id => {
  let dom = document.getElementById(id);
  if (dom) {
    dom.innerHTML = '';
    return dom;
  }
  dom = document.createElement('div');
  dom.id = id;
  document.body.append(dom);
  return dom;
};

/** 挂载 solid-js 组件 */
const mountComponents = (id, fc) => {
  const dom = getDom(id);
  dom.style.setProperty('display', 'unset', 'important');
  const shadowDom = dom.attachShadow({
    mode: 'closed'
  });
  web.render(fc, shadowDom);
  return dom;
};

let dom$2;
const init = () => {
  if (dom$2 || Toast.ref()) return;

  // 提前挂载漫画节点，防止 toast 没法显示在漫画上层
  if (!document.getElementById('comicRead')) {
    const _dom = document.createElement('div');
    _dom.id = 'comicRead';
    document.body.append(_dom);
  }
  dom$2 = mountComponents('toast', () => web.createComponent(Toast.Toaster, {}));
  dom$2.style.setProperty('z-index', '2147483647', 'important');
};
const toast = new Proxy(Toast.toast, {
  get(target, propKey) {
    init();
    return target[propKey];
  },
  apply(target, propKey, args) {
    init();
    const fn = propKey in target ? target[propKey] : target;
    return fn(...args);
  }
});

// 将 xmlHttpRequest 包装为 Promise
const xmlHttpRequest = details => new Promise((resolve, reject) => {
  GM_xmlhttpRequest({
    ...details,
    onload: resolve,
    onerror: reject,
    ontimeout: reject
  });
});
/** 发起请求 */
const request = async (url, details, retryNum = 0, errorNum = 0) => {
  const headers = {
    Referer: window.location.href
  };
  const errorText = \`\${details?.errorText ?? helper.t('alert.comic_load_error')}\\nurl: \${url}\`;
  try {
    // 虽然 GM_xmlhttpRequest 有 fetch 选项，但在 stay 上不太稳定
    // 为了支持 ios 端只能自己实现一下了
    if (details?.fetch ?? (url.startsWith('/') || url.startsWith(window.location.origin))) {
      const res = await fetch(url, {
        method: 'GET',
        headers,
        ...details,
        // eslint-disable-next-line unicorn/no-invalid-fetch-options
        body: details?.data,
        signal: AbortSignal.timeout?.(details?.timeout ?? 1000 * 10)
      });
      if (!details?.noCheckCode && res.status !== 200) {
        helper.log.error(errorText, res);
        throw new Error(errorText);
      }
      let response = null;
      switch (details?.responseType) {
        case 'arraybuffer':
          response = await res.arrayBuffer();
          break;
        case 'blob':
          response = await res.blob();
          break;
        case 'json':
          response = await res.json();
          break;
      }
      return {
        status: res.status,
        statusText: res.statusText,
        response,
        responseText: response ? '' : await res.text()
      };
    }
    const res = await xmlHttpRequest({
      method: 'GET',
      url,
      headers,
      timeout: 1000 * 10,
      ...details
    });
    if (!details?.noCheckCode && res.status !== 200) {
      helper.log.error(errorText, res);
      throw new Error(errorText);
    }
    return res;
  } catch (error) {
    if (errorNum >= retryNum) {
      (details?.noTip ? console.error : toast.error)(errorText);
      throw new Error(errorText);
    }
    helper.log.error(errorText, error);
    await helper.sleep(1000);
    return request(url, details, retryNum, errorNum + 1);
  }
};

/** 轮流向多个 api 发起请求 */
const eachApi = async (url, baseUrlList, details) => {
  for (const baseUrl of baseUrlList) {
    try {
      return await request(\`\${baseUrl}\${url}\`, {
        ...details,
        noTip: true
      });
    } catch {}
  }
  const errorText = details?.errorText ?? helper.t('alert.comic_load_error');
  if (!details?.noTip) toast.error(errorText);
  helper.log.error('所有 api 请求均失败', url, baseUrlList, details);
  throw new Error(errorText);
};

const MdSettings = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.3 7.3 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68m-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdClose = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdFileDownload = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const getExtName = mime => /.+\\/([^;]+)/.exec(mime)?.[1] ?? 'jpg';

/** 下载按钮 */
const DownloadButton = () => {
  const [statu, setStatu] = solidJs.createSignal('button.download');
  const handleDownload = async () => {
    const headers = {
      Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      'User-Agent': navigator.userAgent,
      Referer: window.location.href
    };
    const fileData = {};
    const {
      imgList
    } = Manga.store;
    const imgIndexNum = \`\${imgList.length}\`.length;
    for (let i = 0; i < imgList.length; i += 1) {
      setStatu(\`\${i}/\${imgList.length}\`);
      if (Manga.store.option.translation.onlyDownloadTranslated && imgList[i].translationType !== 'show') continue;
      const img = imgList[i];
      const url = img.translationType === 'show' ? img.translationUrl : img.src;
      const index = \`\${i}\`.padStart(imgIndexNum, '0');
      let data;
      let fileName;
      try {
        const res = await request(url, {
          headers,
          responseType: 'blob',
          errorText: \`\${helper.t('alert.download_failed')}: \${index}\`
        });
        data = res.response;
        fileName = \`\${index}.\${getExtName(data.type)}\`;
      } catch {
        fileName = \`\${index} - \${helper.t('alert.download_failed')}\`;
      }
      fileData[fileName] = new Uint8Array((await data?.arrayBuffer()) ?? []);
    }
    if (Object.keys(fileData).length === 0) {
      toast.warn(helper.t('alert.no_img_download'));
      setStatu('button.download');
      return;
    }
    setStatu('button.packaging');
    const zipped = fflate.zipSync(fileData, {
      level: 0,
      comment: window.location.href
    });
    helper.saveAs(new Blob([zipped]), \`\${document.title}.zip\`);
    setStatu('button.download_completed');
    toast.success(helper.t('button.download_completed'));
  };
  const tip = solidJs.createMemo(() => helper.t(statu()) || \`\${helper.t('button.downloading')} - \${statu()}\`);
  return web.createComponent(IconButton.IconButton, {
    get tip() {
      return tip();
    },
    onClick: handleDownload,
    get enabled() {
      return statu() !== 'button.download';
    },
    get children() {
      return web.createComponent(MdFileDownload, {});
    }
  });
};

let dom$1;

/**
 * 显示漫画阅读窗口
 */
const useManga = async initProps => {
  GM_addStyle(\`
    #comicRead {
      position: fixed;
      top: 0;
      left: 0;
      transform: scale(0);

      width: 100%;
      height: 100%;

      font-size: 16px;

      opacity: 0;

      transition: opacity 300ms, transform 0s 300ms;
    }

    #comicRead[show] {
      transform: scale(1);
      opacity: 1;
      transition: opacity 300ms, transform 100ms;
    }

    /* 防止其他扩展的元素显示到漫画上来 */
    #comicRead[show] ~ :not(#fab, #toast, .comicread-ignore) {
      display: none !important;
      pointer-events: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      z-index: 1 !important;
    }
  \`);
  const [props, setProps] = store.createStore({
    imgList: [],
    show: false,
    ...initProps
  });
  dom$1 = mountComponents('comicRead', () => web.createComponent(Manga.Manga, props));
  dom$1.style.setProperty('z-index', '2147483647', 'important');
  const htmlStyle = document.documentElement.style;
  let lastOverflow = htmlStyle.overflow;
  helper.createEffectOn(helper.createRootMemo(() => props.show && props.imgList.length > 0), show => {
    if (show) {
      dom$1.setAttribute('show', '');
      lastOverflow = htmlStyle.overflow;
      htmlStyle.setProperty('overflow', 'hidden', 'important');
      htmlStyle.setProperty('scrollbar-width', 'none', 'important');
    } else {
      dom$1.removeAttribute('show');
      htmlStyle.overflow = lastOverflow;
      htmlStyle.removeProperty('scrollbar-width');
    }
  }, {
    defer: true
  });
  const ExitButton = () => web.createComponent(IconButton.IconButton, {
    get tip() {
      return helper.t('button.exit');
    },
    onClick: () => props.onExit?.(),
    get children() {
      return web.createComponent(MdClose, {});
    }
  });
  setProps({
    onExit: () => setProps('show', false),
    editButtonList(list) {
      // 在设置按钮上方放置下载按钮
      list.splice(-1, 0, DownloadButton);
      return [...list,
      // 再在最下面添加分隔栏和退出按钮
      Manga.buttonListDivider, ExitButton];
    }
  });
  return [setProps, props];
};

const MdMenuBook = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98z"></path><path d="M13.98 11.01c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.54-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39-.08.01-.16.03-.23.03m0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03m0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.7-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdImageSearch = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18 15v4c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h3.02c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5c0-.55-.45-1-1-1s-1 .45-1 1m-2.5 3H6.52c-.42 0-.65-.48-.39-.81l1.74-2.23a.5.5 0 0 1 .78-.01l1.56 1.88 2.35-3.02c.2-.26.6-.26.79.01l2.55 3.39c.25.32.01.79-.4.79m3.8-9.11c.48-.77.75-1.67.69-2.66-.13-2.15-1.84-3.97-3.97-4.2A4.5 4.5 0 0 0 11 6.5c0 2.49 2.01 4.5 4.49 4.5.88 0 1.7-.26 2.39-.7l2.41 2.41c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42zM15.5 9a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdImportContacts = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdCloudDownload = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-4.65 4.65c-.2.2-.51.2-.71 0L7 13h3V9h4v4z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

let dom;
const useFab = async initProps => {
  GM_addStyle(\`
    #fab {
      --text-bg: transparent;

      position: fixed;
      right: 3vw;
      bottom: 6vh;

      font-size: clamp(12px, 1.5vw, 16px);
    }
  \`);
  const [props, setProps] = store.createStore({
    ...initProps
  });
  const FabIcon = () => {
    switch (props.progress) {
      case undefined:
        {
          // 没有内容的书
          return MdImportContacts;
        }
      case 1:
      case 2:
        {
          // 有内容的书
          return MdMenuBook;
        }
      default:
        {
          return props.progress > 1 ? MdCloudDownload : MdImageSearch;
        }
    }
  };
  dom = mountComponents('fab', () => web.createComponent(Fab.Fab, web.mergeProps(props, {
    get children() {
      return props.children ?? web.createComponent(web.Dynamic, {
        get component() {
          return FabIcon();
        }
      });
    }
  })));
  dom.style.setProperty('z-index', '2147483646', 'important');
  return [setProps, props];
};

const MdAutoFixHigh = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="m20.45 6 .49-1.06L22 4.45a.5.5 0 0 0 0-.91l-1.06-.49L20.45 2a.5.5 0 0 0-.91 0l-.49 1.06-1.05.49a.5.5 0 0 0 0 .91l1.06.49.49 1.05c.17.39.73.39.9 0M8.95 6l.49-1.06 1.06-.49a.5.5 0 0 0 0-.91l-1.06-.48L8.95 2a.492.492 0 0 0-.9 0l-.49 1.06-1.06.49a.5.5 0 0 0 0 .91l1.06.49L8.05 6c.17.39.73.39.9 0m10.6 7.5-.49 1.06-1.06.49a.5.5 0 0 0 0 .91l1.06.49.49 1.06a.5.5 0 0 0 .91 0l.49-1.06 1.05-.5a.5.5 0 0 0 0-.91l-1.06-.49-.49-1.06c-.17-.38-.73-.38-.9.01m-1.84-4.38-2.83-2.83a.996.996 0 0 0-1.41 0L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0L17.7 10.53c.4-.38.4-1.02.01-1.41m-3.5 2.09L12.8 9.8l1.38-1.38 1.41 1.41z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdAutoFixOff = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="m22 3.55-1.06-.49L20.45 2a.5.5 0 0 0-.91 0l-.49 1.06-1.05.49a.5.5 0 0 0 0 .91l1.06.49.49 1.05a.5.5 0 0 0 .91 0l.49-1.06L22 4.45c.39-.17.39-.73 0-.9m-7.83 4.87 1.41 1.41-1.46 1.46 1.41 1.41 2.17-2.17a.996.996 0 0 0 0-1.41l-2.83-2.83a.996.996 0 0 0-1.41 0l-2.17 2.17 1.41 1.41zM2.1 4.93l6.36 6.36-6.17 6.17a.996.996 0 0 0 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l6.17-6.17 6.36 6.36a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdAutoFlashOn = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9a.995.995 0 0 0-.86-1.5H13l2.49-6.65A.994.994 0 0 0 14.56 2H8c-.55 0-1 .45-1 1">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const MdAutoFlashOff = ((props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M16.12 11.5a.995.995 0 0 0-.86-1.5h-1.87l2.28 2.28zm.16-8.05c.33-.67-.15-1.45-.9-1.45H8c-.55 0-1 .45-1 1v.61l6.13 6.13zm2.16 14.43L4.12 3.56a.996.996 0 1 0-1.41 1.41L7 9.27V12c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l2.65-4.55 3.44 3.44c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const useSpeedDial = (options, setOptions) => {
  const DefaultButton = props => web.createComponent(IconButton.IconButton, {
    get tip() {
      return props.showName ?? (helper.t(\`site.add_feature.\${props.optionName}\`) || props.optionName);
    },
    placement: "left",
    showTip: true,
    onClick: () => setOptions({
      ...options,
      [props.optionName]: !options[props.optionName]
    }),
    get children() {
      return props.children ?? (options[props.optionName] ? web.createComponent(MdAutoFixHigh, {}) : web.createComponent(MdAutoFixOff, {}));
    }
  });
  const list = Object.keys(options).map(optionName => {
    switch (optionName) {
      case 'hiddenFAB':
      case 'option':
        return null;
      case 'autoShow':
        return () => web.createComponent(DefaultButton, {
          optionName: "autoShow",
          get showName() {
            return helper.t('other.auto_enter_read_mode');
          },
          get children() {
            return web.memo(() => !!options.autoShow)() ? web.createComponent(MdAutoFlashOn, {}) : web.createComponent(MdAutoFlashOff, {});
          }
        });
      default:
        if (typeof options[optionName] !== 'boolean') return null;
        return () => web.createComponent(DefaultButton, {
          optionName: optionName
        });
    }
  }).filter(Boolean);
  return list;
};

/** 判断版本号1是否小于版本号2 */
const versionLt = (version1, version2) => {
  const v1 = version1.split('.').map(Number);
  const v2 = version2.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    const num1 = v1[i] ?? 0;
    const num2 = v2[i] ?? 0;
    if (num1 < num2) return true;
  }
  return false;
};
/** 在版本号1小于版本号2时显示提示。确保从旧版本跳级上来的用户不会错过 */
const VersionTip = props => // 确保从旧版本直接更新上来的用户可以看到改动提示
web.createComponent(solidJs.Show, {
  get when() {
    return versionLt(props.v1, props.v2);
  },
  get children() {
    return props.children;
  }
});

const migrationOption = async (name, editFn) => {
  try {
    const option = await GM.getValue(name);
    if (!option) throw new Error(\`GM.getValue Error: not found \${name}\`);
    await editFn(option, () => GM.setValue(name, option));
  } catch (error) {
    helper.log.error(\`migration \${name} option error:\`, error);
  }
};

/** 重命名配置项 */
const renameOption = async (name, list) => migrationOption(name, (option, save) => {
  for (const itemText of list) {
    const [path, newName] = itemText.split(' => ');
    helper.byPath(option, path, (parent, key) => {
      helper.log('rename Option', itemText);
      if (newName) Reflect.set(parent, newName, parent[key]);
      Reflect.deleteProperty(parent, key);
    });
  }
  return save();
});

/** 旧版本配置迁移 */
const migration = async () => {
  // 任何样式修改都得更新 css 才行，干脆直接删了
  GM.deleteValue('ehTagColorizeCss');
  const values = await GM.listValues();

  // 8 => 9
  for (const key of values) {
    switch (key) {
      case 'Version':
      case 'Languages':
      case 'ehTagColorizeCss':
        continue;
      case 'Hotkeys':
        {
          await renameOption(key, [
          // 原本上下快捷键是混在一起的，现在分开后要迁移太麻烦了，应该也没多少人改，就直接删了
          'turn_page_up => ', 'turn_page_down => ', 'turn_page_right => scroll_right', 'turn_page_left => scroll_left']);
          break;
        }
      default:
        await migrationOption(key, (option, save) => {
          if (typeof option.option?.scrollMode !== 'boolean') return;
          option.option.scrollMode = {
            enabled: option.option.scrollMode,
            spacing: option.option.scrollModeSpacing,
            imgScale: option.option.scrollModeImgScale,
            fitToWidth: option.option.scrollModeFitToWidth
          };
          return save();
        });
    }
  }

  // 9.3 => 9.4
  await migrationOption('ehentai', (option, save) => {
    if (!Reflect.has(option, 'hotkeys_page_turn')) return;
    option.hotkeys = option.hotkeys_page_turn;
    Reflect.deleteProperty(option, 'hotkeys_page_turn');
    return save();
  });
};

/** 处理版本更新相关 */
const handleVersionUpdate = async () => {
  const version = await GM.getValue('Version');
  if (!version) return GM.setValue('Version', GM.info.script.version);
  if (version === GM.info.script.version) return;

  // 每次版本更新都执行一遍迁移
  await migration();

  // 只在语言为中文时弹窗提示最新更新内容
  if (helper.lang() === 'zh') {
    toast(() => /* eslint-disable i18next/no-literal-string */[(() => {
      var _el$ = web.template(\`<h2>🥳 ComicRead 已更新到 v\`)();
        _el$.firstChild;
      web.insert(_el$, () => GM.info.script.version, null);
      return _el$;
    })(), web.template(\`<h3>修复\`)(), web.template(\`<ul><li>修复网格模式和并排卷轴模式下的显示错误\`)(), web.createComponent(VersionTip, {
      v1: version,
      v2: '9.5.0',
      get children() {
        return [web.template(\`<h3>改动\`)(), web.template(\`<ul><li>原本缩放后可以单独使用滚轮调整缩放比例，<br>现在还需要同时按下 <code>Ctrl/Alt\`)()];
      }
    })] /* eslint-enable i18next/no-literal-string */, {
      id: 'Version Tip',
      type: 'custom',
      duration: Number.POSITIVE_INFINITY,
      // 手动点击关掉通知后才不会再次弹出
      onDismiss: () => GM.setValue('Version', GM.info.script.version)
    });

    // 监听储存的版本数据的变动，如果和当前版本一致就关掉弹窗
    // 防止在更新版本后一次性打开多个页面，不得不一个一个关过去
    const listenerId = await GM.addValueChangeListener('Version', async (_, __, newVersion) => {
      if (newVersion !== GM.info.script.version) return;
      toast.dismiss('Version Tip');
      await GM.removeValueChangeListener(listenerId);
    });
  } else await GM.setValue('Version', GM.info.script.version);
};

/** 清理多余的配置项 */
const clear = (options, defaultOptions) => {
  let isClear = false;
  for (const key of Object.keys(options)) {
    if (Reflect.has(defaultOptions, key)) continue;
    Reflect.deleteProperty(options, key);
    isClear = true;
  }
  return isClear;
};

/**
 * 对修改站点配置的相关方法的封装
 * @param name 站点名
 * @param defaultOptions 默认配置
 */
const useSiteOptions = async (name, defaultOptions = {}) => {
  const _defaultOptions = {
    option: undefined,
    defaultOption: undefined,
    autoShow: true,
    hiddenFAB: false,
    ...defaultOptions
  };
  const saveOptions = await GM.getValue(name);
  const options = store.createMutable(helper.assign(_defaultOptions, saveOptions));
  const setOptions = async newValue => {
    if (newValue) Object.assign(options, newValue);
    // 只保存和默认设置不同的部分
    return GM.setValue(name, helper.difference(options, _defaultOptions));
  };
  const isStored = saveOptions !== undefined;
  // 如果当前站点没有存储配置，就补充上去
  if (!isStored) await GM.setValue(name, {});
  // 否则检查是否有多余的配置
  else if (clear(options, _defaultOptions)) await setOptions();
  return {
    /** 站点配置 */
    options,
    /** 修改站点配置 */
    setOptions,
    /** 是否存过配置 */
    isStored
  };
};

const [hotkeys, setHotkeys] = solidJs.createSignal({});

/**
 * 对基础的初始化操作的封装
 * @param name 站点名
 * @param defaultOptions 默认配置
 */
const useInit = async (name, defaultOptions = {}) => {
  await helper.setInitLang();
  await handleVersionUpdate();
  const {
    options,
    setOptions,
    isStored
  } = await useSiteOptions(name, defaultOptions);
  const [setFab, fabProps] = await useFab({
    tip: helper.t('other.read_mode'),
    speedDial: useSpeedDial(options, setOptions),
    show: false
  });
  setHotkeys(await GM.getValue('Hotkeys', {}));
  Manga.setDefaultHotkeys(hotkeys => ({
    ...hotkeys,
    enter_read_mode: ['v']
  }));
  const [setManga, mangaProps] = await useManga({
    imgList: [],
    option: options.option,
    defaultOption: options.defaultOption,
    onOptionChange: option => setOptions({
      option
    }),
    hotkeys: hotkeys(),
    onHotkeysChange(newValue) {
      GM.setValue('Hotkeys', newValue);
      setHotkeys(newValue);
    }
  });
  const [comicMap, setComicMap] = store.createStore({});
  const [nowComic, switchComic] = solidJs.createSignal('');
  const nowImgList = helper.createRootMemo(() => {
    const comic = comicMap[nowComic()];
    if (!comic?.imgList) return undefined;
    if (!comic.adList?.size) return comic.imgList;
    return comic.imgList.filter((_, i) => !comic.adList?.has(i));
  });
  helper.createEffectOn(nowImgList, list => list && setManga('imgList', list));

  /** 当前加载完成的图片数量 */
  const imgLoadNum = helper.createRootMemo(() => Manga.store.imgList.filter(img => img.loadType === 'loaded').length);

  /** 当前已取得 url 的图片数量 */
  const loadImgNum = helper.createRootMemo(() => nowImgList()?.filter(Boolean)?.length);

  // 设置 Fab 的显示进度
  helper.createEffectOn([loadImgNum, imgLoadNum, () => nowImgList()?.length], ([doneNum, loadNum, totalNum]) => {
    if (doneNum === undefined || totalNum === undefined) return setFab({
      progress: undefined
    });
    if (totalNum === 0) return setFab({
      progress: 0,
      tip: \`\${helper.t('other.loading_img')} - \${doneNum}/\${totalNum}\`
    });

    // 加载图片 url 阶段的进度
    if (doneNum < totalNum) return setFab({
      progress: doneNum / totalNum,
      tip: \`\${helper.t('other.loading_img')} - \${doneNum}/\${totalNum}\`
    });

    // 图片加载阶段的进度
    if (loadNum < totalNum) return setFab({
      progress: 1 + loadNum / totalNum,
      tip: \`\${helper.t('other.img_loading')} - \${loadNum}/\${totalNum}\`
    });
    return setFab({
      progress: 1 + loadNum / totalNum,
      tip: helper.t('other.read_mode'),
      show: !options.hiddenFAB && undefined
    });
  });
  let menuId;
  /** 更新显示/隐藏悬浮按钮的菜单项 */
  const updateHideFabMenu = async () => {
    console.debug(menuId);
    menuId = console.debug(options.hiddenFAB ? helper.t('other.fab_show') : helper.t('other.fab_hidden'), async () => {
      await setOptions({
        ...options,
        hiddenFAB: !options.hiddenFAB
      });
      setFab('show', !options.hiddenFAB && undefined);
      await updateHideFabMenu();
    });
  };
  console.debug(helper.t('site.show_settings_menu'), () => setFab({
    show: true,
    focus: true,
    tip: helper.t('site.settings_tip'),
    children: web.createComponent(MdSettings, {}),
    onBackdropClick: () => setFab({
      show: false,
      focus: false
    })
  }));

  /** 当前是否还需要判断 autoShow */
  const needAutoShow = {
    val: true
  };
  const loadComic = async (id = nowComic()) => {
    if (!Reflect.has(comicMap, id)) throw new Error('comic id error');
    try {
      setComicMap(id, 'imgList', []);
      const newImgList = await comicMap[id].getImgList();
      if (newImgList.length === 0) throw new Error(helper.t('alert.fetch_comic_img_failed'));
      setComicMap(id, 'imgList', newImgList);
    } catch (error) {
      setComicMap(id, 'imgList', undefined);
      helper.log.error(error);
      throw error;
    }
  };
  const showComic = async (id = nowComic()) => {
    if (!Reflect.has(comicMap, id)) throw new Error('comic id error');
    if (id !== nowComic()) switchComic(id);
    switch (comicMap[id].imgList?.length) {
      case 0:
        return toast.warn(helper.t('alert.repeat_load'), {
          duration: 1500
        });
      case undefined:
        {
          try {
            await loadComic(id);
            needAutoShow.val = false;
          } catch (error) {
            return toast.error(error.message);
          }
        }
    }
    setManga('show', true);
  };
  const init = () => {
    setFab({
      onClick: showComic,
      show: !options.hiddenFAB && undefined
    });
    if (needAutoShow.val && options.autoShow) setTimeout(showComic);
    (async () => {
      console.debug(helper.t('other.enter_comic_read_mode'), fabProps.onClick);
      await updateHideFabMenu();
    })();
    helper.linstenKeydown(e => {
      const code = helper.getKeyboardCode(e);
      if (Manga.hotkeysMap()[code] !== 'enter_read_mode') return;
      e.stopPropagation();
      e.preventDefault();
      fabProps.onClick?.();
    });
  };
  return {
    options,
    setOptions,
    setFab,
    setManga,
    mangaProps,
    fabProps,
    needAutoShow,
    isStored,
    comicMap,
    setComicMap,
    nowComic,
    switchComic,
    showComic,
    loadComic,
    /** 设置对应漫画的加载函数 */
    setComicLoad(getImgList, id = '') {
      setComicMap(id, {
        imgList: undefined,
        getImgList
      });
      if (menuId === undefined) return init();
    },
    dynamicLoad: (loadImgFn, length, id = '') => async () => {
      if (comicMap[id].imgList?.length) return comicMap[id].imgList;
      setComicMap(id, 'imgList', Array.from({
        length
      }).fill(''));
      await new Promise(resolve => {
        loadImgFn((i, url) => resolve(setComicMap(id, 'imgList', i, url)));
      });
      return comicMap[id].imgList;
    }
  };
};

/**
 * 通过监视点击等会触发动态加载的事件，在触发后执行指定动作
 * @param update 动态加载后的重新加载
 */
const autoUpdate = update => {
  const refresh = helper.singleThreaded(update);
  for (const eventName of ['click', 'popstate']) window.addEventListener(eventName, refresh, {
    capture: true
  });
  refresh();
};

/** 对简单站点的通用解 */
const universal = async ({
  name,
  wait: waitFn,
  getImgList,
  onPrev,
  onNext,
  onExit,
  getCommentList,
  initOptions,
  SPA
}) => {
  if (SPA?.isMangaPage) await helper.wait(SPA?.isMangaPage);
  if (waitFn) await helper.wait(waitFn);
  const fnMap = await useInit(name, initOptions);
  const {
    options,
    setComicLoad,
    setManga,
    setFab,
    needAutoShow,
    setComicMap,
    showComic
  } = fnMap;
  setComicLoad(() => getImgList(fnMap));
  if (onExit) setManga({
    onExit(isEnd) {
      onExit?.(isEnd);
      setManga({
        show: false
      });
    }
  });
  if (!SPA) {
    if (onNext ?? onPrev) setManga({
      onNext,
      onPrev
    });
    if (getCommentList) setManga({
      commentList: await getCommentList()
    });
    return;
  }
  const {
    isMangaPage,
    getOnPrev,
    getOnNext
  } = SPA;
  let lastUrl = '';
  autoUpdate(async () => {
    if (!(await helper.wait(() => window.location.href !== lastUrl, 5000))) return;
    lastUrl = window.location.href;
    if (isMangaPage && !(await isMangaPage())) {
      setFab('show', false);
      setManga({
        show: false
      });
      setComicMap('', 'imgList', undefined);
      return;
    }
    if (waitFn) await helper.wait(waitFn);
    setManga({
      onPrev: undefined,
      onNext: undefined
    });
    needAutoShow.val = options.autoShow;
    setComicMap('', 'imgList', undefined);
    if (needAutoShow.val && options.autoShow) await showComic('');
    await Promise.all([(async () => getCommentList && setManga({
      commentList: await getCommentList()
    }))(), (async () => getOnPrev && setManga({
      onPrev: await helper.wait(getOnPrev, 5000)
    }))(), (async () => getOnNext && setManga({
      onNext: await helper.wait(getOnNext, 5000)
    }))()]);
  });
};

exports.ReactiveSet = ReactiveSet;
exports.eachApi = eachApi;
exports.handleVersionUpdate = handleVersionUpdate;
exports.hotkeys = hotkeys;
exports.renameOption = renameOption;
exports.request = request;
exports.setHotkeys = setHotkeys;
exports.toast = toast;
exports.universal = universal;
exports.useInit = useInit;
exports.useManga = useManga;
exports.useSiteOptions = useSiteOptions;
exports.useSpeedDial = useSpeedDial;
`;
      break;
    default:
      code = GM_getResourceText(name.replaceAll('/', '|'));
  }
  if (!code) throw new Error(`外部模块 ${name} 未在 @Resource 中声明`);

  // 通过提供 cjs 环境的变量来兼容 umd 模块加载器
  // 将模块导出变量放到 crsLib 对象里，防止污染全局作用域和网站自身的模块产生冲突
  const runCode = `
    window['${tempName}']['${name}'] = {};
    ${''}
    (function (process, require, exports, module, ${gmApiList.join(', ')}) {
      ${code}
    })(
      window['${tempName}'].process,
      window['${tempName}'].require,
      window['${tempName}']['${name}'],
      {
        set exports(value) {
          window['${tempName}']['${name}'] = value;
        },
        get exports() {
          return window['${tempName}']['${name}'];
        },
      },
      ${gmApiList.map(apiName => `window['${tempName}'].${apiName}`).join(', ')}
    );
    ${''}
  `;
  Reflect.deleteProperty(unsafeWindow, tempName);
  unsafeWindow[tempName] = crsLib;
  evalCode(runCode);
  Reflect.deleteProperty(unsafeWindow, tempName);
};
/**
 * 创建一个外部模块的 Proxy，等到读取对象属性时才加载模块
 * @param name 外部模块名
 */
const require = name => {
  // 为了应对 rollup 打包时的工具函数 _interopNamespace，要给外部库加上 __esModule 标志
  const __esModule = {
    value: true
  };
  const selfLibProxy = () => {};
  selfLibProxy.default = {};
  const selfDefault = new Proxy(selfLibProxy, {
    get(_, prop) {
      if (prop === '__esModule') return __esModule;
      if (prop === 'default') return selfDefault;
      if (!crsLib[name]) selfImportSync(name);
      const module = crsLib[name];
      // try {
      //   console.log(module.default?.[prop] ?? module?.[prop]);
      // } catch {
      //   debugger;
      // }
      return module.default?.[prop] ?? module?.[prop];
    },
    apply(_, __, args) {
      if (!crsLib[name]) selfImportSync(name);
      const module = crsLib[name];
      const ModuleFunc = typeof module.default === 'function' ? module.default : module;
      return ModuleFunc(...args);
    },
    construct(_, args) {
      if (!crsLib[name]) selfImportSync(name);
      const module = crsLib[name];
      const ModuleFunc = typeof module.default === 'function' ? module.default : module;
      return new ModuleFunc(...args);
    }
  });
  return selfDefault;
};
crsLib.require = require;

const helper = require('helper');
const main = require('main');

/** 站点配置 */
let options;
try {
  // 匹配站点
  switch (window.location.hostname) {
    // #百合会（记录阅读历史、自动签到等）
    case 'bbs.yamibo.com':
      {
const web = require('solid-js/web');
const solidJs = require('solid-js');
const main = require('main');
const helper = require('helper');


// 多页
// https://bbs.yamibo.com/thread-43598-2-694.html
// 目录页
(async () => {
  const {
    options,
    setComicLoad,
    showComic,
    loadComic,
    setManga,
    needAutoShow
  } = await main.useInit('yamibo', {
    记录阅读进度: true,
    关闭快捷导航的跳转: true,
    修正点击页数时的跳转判定: true,
    固定导航条: true,
    自动签到: true
  });
  GM_addStyle(`#fab { --fab: #6E2B19; }

    ${options.固定导航条 ? '.header-stackup { position: fixed !important }' : ''}

    .historyTag {
      white-space: nowrap;

      border: 2px solid #6e2b19;
    }

    a.historyTag {
      font-weight: bold;

      margin-left: 1em;
      padding: 1px 4px;

      color: #6e2b19;
      border-radius: 4px 0 0 4px;
    }
    a.historyTag:last-child {
      border-radius: 4px;
    }

    div.historyTag {
      display: initial;

      margin-left: -.4em;
      padding: 1px;

      color: RGB(255, 237, 187);
      border-radius: 0 4px 4px 0;
      background-color: #6e2b19;
    }

    #threadlisttableid tbody:nth-child(2n) div.historyTag {
      color: RGB(255, 246, 215);
    }

    /* 将「回复/查看」列加宽一点 */
    .tl .num {
      width: 80px !important;
    }
    `);

  // 自动签到
  if (unsafeWindow.discuz_uid && unsafeWindow.discuz_uid !== '0' && options.自动签到) (async () => {
    const todayString = new Date().toLocaleDateString('zh-CN');
    // 判断当前日期与上次成功签到日期是否相同
    if (todayString === localStorage.getItem('signDate')) return;
    const sign = helper.querySelector('#scbar_form > input[name="formhash"]')?.value;
    if (!sign) return;
    try {
      const res = await fetch(`plugin.php?id=zqlj_sign&sign=${sign}`);
      const body = await res.text();
      if (!/成功！|打过卡/.test(body)) throw new Error('自动签到失败');
      main.toast.success('自动签到成功');
      localStorage.setItem('signDate', todayString);
    } catch {
      main.toast.error('自动签到失败');
    }
  })();
  if (options.关闭快捷导航的跳转) helper.querySelector('#qmenu a')?.setAttribute('href', 'javascript:;');

  // 判断当前页是帖子
  if (/thread(-\d+){3}|mod=viewthread/.test(document.URL)) {
    // 修复微博图床的链接
    for (const e of helper.querySelectorAll('img[file*="sinaimg.cn"]')) e.setAttribute('referrerpolicy', 'no-referrer');
    const fid = unsafeWindow.fid ?? Number(new URLSearchParams(helper.querySelector('h2 > a')?.href).get('fid') ?? '-1');

    // 限定板块启用
    if (fid === 30 || fid === 37) {
      const isFirstPage = !helper.querySelector('.pg > .prev');
      // 第一页以外不自动加载
      if (!isFirstPage) needAutoShow.val = false;
      let imgList = helper.querySelectorAll(':is(.t_fsz, .message) img');
      const updateImgList = () => {
        let i = imgList.length;
        while (i--) {
          const img = imgList[i];

          // 触发懒加载
          const file = img.getAttribute('file');
          if (file && img.src !== file) {
            img.setAttribute('src', file);
            img.setAttribute('lazyloaded', 'true');
          }

          // 测试例子：https://bbs.yamibo.com/thread-502399-1-1.html

          // 删掉表情和小图
          if (img.src.includes('static/image') || img.complete && img.naturalHeight && img.naturalWidth && img.naturalHeight < 500 && img.naturalWidth < 500) imgList.splice(i, 1);
        }
        return imgList.map(img => img.src);
      };
      setComicLoad(updateImgList);
      setManga({
        // 在图片加载完成后再检查一遍有没有小图，有就删掉
        onLoading(_imgList, img) {
          if (img && img.width < 500 && img.height < 500) return loadComic();
        },
        onExit(isEnd) {
          if (isEnd) helper.scrollIntoView('.psth, .rate, #postlist > div:nth-of-type(2)');
          setManga('show', false);
        }
      });
      if (helper.querySelector('div.pti > div.authi')) {
        helper.querySelector('div.pti > div.authi').insertAdjacentHTML('beforeend', '<span class="pipe show">|</span><a id="comicReadMode" class="show" href="javascript:;">漫画阅读</a>');
        document.getElementById('comicReadMode')?.addEventListener('click', () => showComic());
      }

      // 如果帖子内有设置目录
      if (helper.querySelector('#threadindex')) {
        // 在网页通过 ajax 更新对应内容后重新获取漫画图片
        helper.hijackFn('ajaxinnerhtml', (rawFn, args) => {
          rawFn(...args);
          imgList = helper.querySelectorAll('.t_fsz img');
          if (imgList.length === 0 || updateImgList().length === 0) return;
          if (options.autoShow) showComic();
        });
      }
      const tagDom = helper.querySelector('.ptg.mbm.mtn > a');
      // 通过标签确定上/下一话
      if (tagDom) {
        const tagId = tagDom.href.split('id=')[1];
        const reg = /(?<=<th>\s<a href="thread-)\d+(?=-)/g;
        let threadList = [];

        // 先获取包含当前帖后一话在内的同一标签下的帖子id列表，再根据结果设定上/下一话
        const setPrevNext = async (pageNum = 1) => {
          const res = await main.request(`/misc.php?mod=tag&id=${tagId}&type=thread&page=${pageNum}`);
          const newList = [...res.responseText.matchAll(reg)].map(([tid]) => Number(tid));
          threadList = threadList.concat(newList);
          const index = threadList.indexOf(unsafeWindow.tid);
          if (newList.length > 0 && (index === -1 || !threadList[index + 1])) return setPrevNext(pageNum + 1);
          return setManga({
            onPrev: threadList[index - 1] ? () => window.location.assign(`thread-${threadList[index - 1]}-1-1.html`) : undefined,
            onNext: threadList[index + 1] ? () => window.location.assign(`thread-${threadList[index + 1]}-1-1.html`) : undefined
          });
        };
        setTimeout(setPrevNext);
      }
    }
    if (options.记录阅读进度) {
      const tid = unsafeWindow.tid ?? new URLSearchParams(window.location.search).get('tid') ?? /\/thread-(\d+)-\d+-\d+.html/.exec(window.location.pathname)?.[1];
      if (!tid) return;

      /** 回复数 */
      let allReplies;
      try {
        const res = await main.request(`/api/mobile/index.php?module=viewthread&tid=${tid}`, {
          responseType: 'json',
          errorText: '获取帖子回复数时出错',
          noTip: true
        });
        allReplies = Number.parseInt(res.response?.Variables?.thread?.allreplies, 10);
      } catch {}

      /** 当前所在页数 */
      const currentPageNum = Number.parseInt(helper.querySelector('#pgt strong')?.textContent ?? helper.querySelector('#dumppage')?.value ?? '1', 10);
      const cache = await helper.useCache(db => {
        db.createObjectStore('history', {
          keyPath: 'tid'
        });
      });
      const data = await cache.get('history', `${tid}`);
      // 如果是在翻阅之前页数的内容，则跳过不处理
      if (data && currentPageNum < data.lastPageNum) return;

      // 如果有上次阅读进度的数据，则监视上次的进度之后的楼层，否则监视所有
      /** 监视楼层列表 */
      const watchFloorList = helper.querySelectorAll(data?.lastAnchor && currentPageNum === data.lastPageNum ? `#${data.lastAnchor} ~ div` : '#postlist > div, .plc.cl');
      if (watchFloorList.length === 0) return;
      let id = 0;
      /** 储存数据，但是防抖 */
      const debounceSave = saveData => {
        if (id) window.clearTimeout(id);
        id = window.setTimeout(async () => {
          id = 0;
          await cache.set('history', saveData);
        }, 200);
      };

      // 在指定楼层被显示出来后重新存储进度数据
      const observer = new IntersectionObserver(entries => {
        // 找到触发楼层
        const trigger = entries.find(e => e.isIntersecting);
        if (!trigger) return;

        // 取消触发楼层上面楼层的监视
        const triggerIndex = watchFloorList.indexOf(trigger.target);
        if (triggerIndex === -1) return;
        for (const e of watchFloorList.splice(0, triggerIndex + 1)) observer.unobserve(e);

        // 储存数据
        debounceSave({
          tid: `${tid}`,
          lastPageNum: currentPageNum,
          lastReplies: allReplies || data?.lastReplies || 0,
          lastAnchor: trigger.target.id
        });
      }, {
        rootMargin: '-160px'
      });
      for (const e of watchFloorList) observer.observe(e);
    }
    return;
  }

  // 判断当前页是板块
  if (/forum(-\d+){2}|mod=forumdisplay/.test(document.URL)) {
    if (options.修正点击页数时的跳转判定) {
      const List = helper.querySelectorAll('.tps>a');
      let i = List.length;
      while (i--) List[i].setAttribute('onClick', 'atarget(this)');
    }
    if (options.记录阅读进度) {
      const cache = await helper.useCache(db => {
        db.createObjectStore('history', {
          keyPath: 'tid'
        });
      });
      const isMobile = !document.querySelector('#flk');
      const [updateFlag, setUpdateFlag] = solidJs.createSignal(false);
      const updateHistoryTag = () => setUpdateFlag(val => !val);
      let listSelector = 'tbody[id^=normalthread]';
      let getTid = e => e.id.split('_')[1];
      let getUrl = (data, tid) => `thread-${tid}-${data.lastPageNum}-1.html#${data.lastAnchor}`;
      if (isMobile) {
        listSelector = '.threadlist li.list';
        getTid = e => new URLSearchParams(e.children[1].getAttribute('href')).get('tid');
        getUrl = (data, tid) => `forum.php?mod=viewthread&tid=${tid}&extra=page%3D1&mobile=2&page=${data.lastPageNum}#${data.lastAnchor}`;
      }
      for (const e of helper.querySelectorAll(listSelector)) {
        const tid = getTid(e);
        web.render(
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        () => {
          const [data, setData] = solidJs.createSignal();
          helper.createEffectOn(updateFlag, () => cache.get('history', tid).then(setData));
          const url = solidJs.createMemo(() => data() ? getUrl(data(), tid) : '');
          const lastReplies = solidJs.createMemo(() => !isMobile && data() ? Number(e.querySelector('.num a').innerHTML) - data().lastReplies : 0);
          const pc = () => [(() => {
            var _el$ = web.template(`<a class=historyTag>回第<!>页 `)(),
              _el$2 = _el$.firstChild,
              _el$4 = _el$2.nextSibling;
              _el$4.nextSibling;
            web.addEventListener(_el$, "click", unsafeWindow.atarget, true);
            web.insert(_el$, () => data()?.lastPageNum, _el$4);
            web.effect(() => web.setAttribute(_el$, "href", url()));
            return _el$;
          })(), web.createComponent(solidJs.Show, {
            get when() {
              return lastReplies() > 0;
            },
            get children() {
              var _el$5 = web.template(`<div class=historyTag>+`)();
                _el$5.firstChild;
              web.insert(_el$5, lastReplies, null);
              return _el$5;
            }
          })];
          const mobile = () => (() => {
            var _el$7 = web.template(`<li><a>回第<!>页`)(),
              _el$8 = _el$7.firstChild,
              _el$9 = _el$8.firstChild,
              _el$11 = _el$9.nextSibling;
              _el$11.nextSibling;
            web.addEventListener(_el$8, "click", unsafeWindow.atarget, true);
            _el$8.style.setProperty("color", "unset");
            web.insert(_el$8, () => data()?.lastPageNum, _el$11);
            web.effect(() => web.setAttribute(_el$8, "href", url()));
            return _el$7;
          })();
          return web.createComponent(solidJs.Show, {
            get when() {
              return Boolean(data());
            },
            get children() {
              return web.createComponent(solidJs.Show, {
                when: isMobile,
                get children() {
                  return mobile();
                },
                get fallback() {
                  return pc();
                }
              });
            }
          });
        }, isMobile ? e.children[3] : e.getElementsByTagName('th')[0]);
      }

      // 切换回当前页时更新提示
      document.addEventListener('visibilitychange', updateHistoryTag);
      // 点击下一页后更新提示
      helper.querySelector('#autopbn')?.addEventListener('click', updateHistoryTag);
    }
  }
})().catch(error => helper.log.error(error));
web.delegateEvents(["click"]);

        break;
      }

    // #百合会新站
    case 'www.yamibo.com':
      {
        if (!window.location.pathname.includes('/manga/view-chapter')) break;
        const id = new URLSearchParams(window.location.search).get('id');
        if (!id) break;

        /** 总页数 */
        const totalPageNum = Number(helper.querySelector('section div:first-of-type div:last-of-type').innerHTML.split('：')[1]);
        if (Number.isNaN(totalPageNum)) throw new Error(helper.t('site.changed_load_failed'));

        /** 获取指定页数的图片 url */
        const getImg = async i => {
          const res = await main.request(`https://www.yamibo.com/manga/view-chapter?id=${id}&page=${i}`);
          return /(?<=<img id=['"]imgPic['"].+?src=['"]).+?(?=['"])/.exec(res.responseText)[0].replaceAll('&amp;', '&').replaceAll('http://', 'https://');
        };
        const loadImgFn = setImg => helper.plimit(helper.createSequence(totalPageNum).map(i => async () => setImg(i, await getImg(i + 1))));
        options = {
          name: 'newYamibo',
          getImgList: ({
            dynamicLoad
          }) => dynamicLoad(loadImgFn, totalPageNum)(),
          onNext: helper.querySelectorClick('#btnNext'),
          onPrev: helper.querySelectorClick('#btnPrev'),
          onExit: isEnd => isEnd && helper.scrollIntoView('#w1')
        };
        break;
      }

    // #动漫之家（解锁隐藏漫画）
    case 'comic.idmzj.com':
    case 'comic.dmzj.com':
    case 'manhua.idmzj.com':
    case 'manhua.dmzj.com':
      {
const web = require('solid-js/web');
const solidJs = require('solid-js');
const main = require('main');
const dmzjApi = require('userscript/dmzjApi');
const helper = require('helper');

(async () => {
  // 通过 rss 链接，在作者作品页里添加上隐藏漫画的链接
  // TODO: rss 都已失效，过段时间看看还没恢复就可以删了
  // if (window.location.pathname.includes('/tags/')) {
  //   const rssUrl = await wait(
  //     () => querySelector<HTMLAreaElement>('a.rss')?.href,
  //   );
  //   const res = await request(rssUrl, { errorText: '获取作者作品失败' });

  //   // 页面上原有的漫画标题
  //   const titleList = new Set(
  //     querySelectorAll('p.t').map((e) => e.textContent!.replace('[完]', '')),
  //   );
  //   querySelectorAll('div.pic')
  //     .at(-1)
  //     ?.insertAdjacentHTML(
  //       'afterend',
  //       res.responseText
  //         .split('item')
  //         .filter((_, i) => i % 2)
  //         .map((item) => {
  //           const newComicUrl = /manhua.dmzj.com\/(.+?)\?from=rssReader/.exec(
  //             item,
  //           )![1];
  //           return {
  //             newComicUrl,
  //             comicUrl: newComicUrl.split('/')[0],
  //             title: /title><!\[CDATA\[(.+?)]]/.exec(item)![1],
  //             imgUrl: /<img src='(.+?)'/.exec(item)![1],
  //             newComicTitle: /title='(.+?)'/.exec(item)![1],
  //           };
  //         })
  //         .filter(({ title }) => !titleList.has(title))
  //         .map(
  //           (data) => `
  //           <div class="pic">
  //             <a href="/${data.comicUrl}/" target="_blank">
  //             <img src="${data.imgUrl}" alt="${data.title}" title="" style="">
  //             <p class="t">【*隐藏*】${data.title}</p></a>
  //             <p class="d">最新：<a href="/${data.newComicUrl}" target="_blank">${data.newComicTitle}</a></p>
  //           </div>
  //         `,
  //         )
  //         .join(''),
  //     );
  //   return;
  // }

  const getId = async () => {
    const [, comicPy, chapterId] = window.location.pathname.split(/\/|\./);
    if (!comicPy) {
      main.toast.error('漫画数据获取失败', {
        duration: Number.POSITIVE_INFINITY,
        throw: new Error('获取漫画拼音简称失败')
      });
    }
    const comicId = await dmzjApi.getComicId(comicPy);
    return {
      comicId,
      chapterId
    };
  };
  const handleListPage = async () => {
    await helper.waitDom('.newpl_ans');
    // 判断漫画被禁
    // 测试例子：https://manhua.dmzj.com/yanquan/
    if (!helper.querySelector('.cartoon_online_border > img')) return false;
    helper.querySelector('.cartoon_online_border').innerHTML = '获取漫画数据中';

    // 删掉原有的章节 dom
    for (const e of helper.querySelectorAll('.odd_anim_title ~ *')) e.remove();
    const {
      comicId
    } = await getId();
    web.render(() => {
      const comicDetail = dmzjApi.useComicDetail(comicId);
      return web.createComponent(solidJs.For, {
        get each() {
          return comicDetail.chapters;
        },
        children: ({
          name,
          list
        }) => [(() => {
          var _el$ = web.template(`<div class=photo_part><div class=h2_title2><span class="h2_icon h2_icon22"></span><h2> `)(),
            _el$2 = _el$.firstChild,
            _el$3 = _el$2.firstChild,
            _el$4 = _el$3.nextSibling,
            _el$5 = _el$4.firstChild;
          web.insert(_el$4, () => comicDetail.title, _el$5);
          web.insert(_el$4, name === '连载' ? '在线漫画全集' : `漫画其它版本：${name}`, null);
          return _el$;
        })(), (() => {
          var _el$6 = web.template(`<div class=cartoon_online_border_other><ul></ul><div class=clearfix>`)(),
            _el$7 = _el$6.firstChild;
          _el$6.style.setProperty("margin-top", "-8px");
          web.insert(_el$7, web.createComponent(solidJs.For, {
            each: list,
            children: ({
              title,
              id,
              updatetime
            }) => (() => {
              var _el$8 = web.template(`<li><a target=_blank>`)(),
                _el$9 = _el$8.firstChild;
              web.setAttribute(_el$9, "title", title);
              web.setAttribute(_el$9, "href", `https://m.dmzj.com/view/${comicId}/${id}.html`);
              web.insert(_el$9, title);
              web.effect(() => _el$9.classList.toggle("color_red", !!(updatetime === comicDetail.last_updatetime)));
              return _el$8;
            })()
          }));
          return _el$6;
        })()]
      });
    }, helper.querySelector('.middleright_mr'));
    return false;
  };

  /** 切换至上下滚动阅读 */
  const waitSwitchScroll = async () => {
    await helper.waitDom('#qiehuan_txt');
    await helper.wait(() => {
      const dom = helper.querySelector('#qiehuan_txt');
      if (!dom) return;
      if (dom.textContent !== '切换到上下滚动阅读') return true;
      dom.click();
    });
  };
  const getImgList = async () => {
    await waitSwitchScroll();
    await helper.waitDom('.comic_wraCon img');
    return helper.querySelectorAll('.comic_wraCon img').map(e => e.src);
  };
  const checkButton = selector => {
    const dom = helper.querySelector(selector);
    if (dom?.textContent) return () => dom.click();
  };
  const isMangaPage = async () => {
    if (/^\/[^/]*?\/?$/.test(window.location.pathname)) return handleListPage();
    return /^\/.*?\/\d+\.shtml$/.test(window.location.pathname);
  };
  await main.universal({
    name: 'dmzj',
    getImgList,
    onExit: isEnd => isEnd && helper.scrollIntoView('#hd'),
    async getCommentList() {
      const {
        comicId,
        chapterId
      } = await getId();
      return dmzjApi.getViewpoint(comicId, chapterId);
    },
    SPA: {
      isMangaPage,
      getOnPrev: () => checkButton('.display_left #prev_chapter'),
      getOnNext: () => checkButton('.display_right #next_chapter')
    }
  });
})().catch(error => helper.log.error(error));

        break;
      }
    case 'm.idmzj.com':
    case 'm.dmzj.com':
      {
const dmzjDecrypt = require('dmzjDecrypt');
const dmzjApi = require('userscript/dmzjApi');
const main = require('main');
const helper = require('helper');

(async () => {
  // 分别处理目录页和漫画页
  switch (window.location.pathname.split('/')[1]) {
    case 'info':
      {
        // 跳过正常漫画
        if (Reflect.has(unsafeWindow, 'obj_id')) return;
        const comicId = Number.parseInt(window.location.pathname.split('/')[2], 10);
        if (Number.isNaN(comicId)) {
          document.body.innerHTML = '';
          document.body.insertAdjacentHTML('beforeend', `
            请手动输入漫画名进行搜索 <br />
            <input type="search"> <button>搜索</button> <br />
            <div id="list" />
          `);
          helper.querySelector('button').addEventListener('click', async () => {
            const comicName = helper.querySelector('input')?.value;
            if (!comicName) return;
            const res = await main.request(`https://s.acg.dmzj.com/comicsum/search.php?s=${comicName}`, {
              errorText: '搜索漫画时出错'
            });
            const comicList = JSON.parse(res.responseText.slice(20, -1));
            helper.querySelector('#list').innerHTML = comicList.map(({
              id,
              comic_name,
              comic_author,
              comic_url
            }) => `
                <b>《${comic_name}》<b/>——${comic_author}
                <a href="${comic_url}">Web端</a>
                <a href="https://m.dmzj.com/info/${id}.html">移动端</a>
              `).join('<br />');
          });
          return;
        }
        const res = await main.request(`https://v4api.idmzj.com/comic/detail/${comicId}?uid=2665531&disable_level=1`, {
          errorText: '获取漫画数据失败'
        });
        const {
          comicInfo: {
            last_updatetime,
            title,
            chapters
          }
        } = dmzjDecrypt(res.responseText);
        document.title = title;
        document.body.insertAdjacentHTML('beforeend', `<h1>${title}</h1>`);
        for (const chapter of Object.values(chapters)) {
          // 手动构建添加章节 dom
          let temp = `<h2>${chapter.title}</h2>`;
          let i = chapter.data.length;
          while (i--) temp += `<a target="_blank" title="${chapter.data[i].chapter_title}" href="https://m.dmzj.com/view/${comicId}/${chapter.data[i].chapter_id}.html" ${chapter.data[i].updatetime === last_updatetime ? 'style="color:red"' : ''}>${chapter.data[i].chapter_title}</a>`;
          document.body.insertAdjacentHTML('beforeend', temp);
        }
        document.body.childNodes[0].remove();
        GM_addStyle(`
          h1 {
            margin: 0 -20vw;
          }

          h1,
          h2 {
            text-align: center;
          }

          body {
            padding: 0 20vw;
          }

          a {
            display: inline-block;

            min-width: 4em;
            margin: 0 1em;

            line-height: 2em;
            white-space: nowrap;
          }
        `);
        break;
      }
    case 'view':
      {
        // 如果不是隐藏漫画，直接进入阅读模式
        if (unsafeWindow.comic_id) {
          GM_addStyle('.subHeader{display:none !important}');
          await main.universal({
            name: 'dmzj',
            getImgList: () => helper.querySelectorAll('#commicBox img').map(e => e.dataset.original).filter(Boolean),
            getCommentList: () => dmzjApi.getViewpoint(unsafeWindow.subId, unsafeWindow.chapterId),
            onNext: helper.querySelectorClick('#loadNextChapter'),
            onPrev: helper.querySelectorClick('#loadPrevChapter')
          });
          return;
        }
        const tipDom = document.createElement('p');
        tipDom.textContent = '正在加载中，请坐和放宽，若长时间无反应请刷新页面';
        document.body.append(tipDom);
        let data;
        let comicId;
        let chapterId;
        try {
          [, comicId, chapterId] = /(\d+)\/(\d+)/.exec(window.location.pathname);
          data = await dmzjApi.getChapterInfo(comicId, chapterId);
        } catch (error) {
          main.toast.error('获取漫画数据失败', {
            duration: Number.POSITIVE_INFINITY
          });
          tipDom.textContent = error.message;
          throw error;
        }
        tipDom.textContent = `加载完成，即将进入阅读模式`;
        const {
          folder,
          chapter_name,
          next_chap_id,
          prev_chap_id,
          comic_id,
          page_url
        } = data;
        document.title = `${chapter_name} ${folder.split('/').at(1)}`;
        const {
          setManga,
          setComicLoad
        } = await main.useInit('dmzj');
        setManga({
          // 进入阅读模式后禁止退出，防止返回空白页面
          onExit: undefined,
          onNext: next_chap_id ? () => {
            window.location.href = `https://m.dmzj.com/view/${comic_id}/${next_chap_id}.html`;
          } : undefined,
          onPrev: prev_chap_id ? () => {
            window.location.href = `https://m.dmzj.com/view/${comic_id}/${prev_chap_id}.html`;
          } : undefined,
          editButtonList: e => e
        });
        setComicLoad(() => {
          if (page_url.length > 0) return page_url;
          tipDom.innerHTML = `无法获得漫画数据，请通过 <a href="https://github.com/hymbz/ComicReadScript/issues" target="_blank">Github</a> 或 <a href="https://sleazyfork.org/zh-CN/scripts/374903-comicread/feedback#post-discussion" target="_blank">Greasy Fork</a> 进行反馈`;
          return [];
        });
        setManga('commentList', await dmzjApi.getViewpoint(comicId, chapterId));
        break;
      }
  }
})().catch(error => helper.log.error(error));

        break;
      }
    case 'www.idmzj.com':
    case 'www.dmzj.com':
      {
const dmzjApi = require('userscript/dmzjApi');
const main = require('main');
const helper = require('helper');

const turnPage = chapterId => {
  if (!chapterId) return undefined;
  return () => {
    window.open(window.location.href.replace(/(?<=\/)\d+(?=\.html)/, `${chapterId}`), '_self');
  };
};
(async () => {
  await helper.waitDom('.head_wz');
  // 只在漫画页内运行
  const comicId = helper.querySelector('.head_wz [id]')?.id;
  const chapterId = /(?<=\/)\d+(?=\.html)/.exec(window.location.pathname)?.[0];
  if (!comicId || !chapterId) return;
  const {
    setManga,
    setComicLoad
  } = await main.useInit('dmzj');
  try {
    const {
      next_chap_id,
      prev_chap_id,
      page_url
    } = await dmzjApi.getChapterInfo(comicId, chapterId);
    setComicLoad(() => page_url);
    setManga({
      onNext: turnPage(next_chap_id),
      onPrev: turnPage(prev_chap_id)
    });
  } catch {
    main.toast.error('获取漫画数据失败', {
      duration: Number.POSITIVE_INFINITY
    });
  }
})().catch(error => helper.log.error(error));

        break;
      }

    // #E-Hentai（关联 nhentai、快捷收藏、标签染色、识别广告页等）
    case 'exhentai.org':
    case 'e-hentai.org':
      {
const web = require('solid-js/web');
const solidJs = require('solid-js');
const main = require('main');
const Manga = require('components/Manga');
const detectAd = require('userscript/detectAd');
const helper = require('helper');
const store = require('solid-js/store');

const escHandler = [];
const setEscHandler = (order, handler) => {
  escHandler.push(Object.assign(handler, {
    order
  }));
  escHandler.sort((a, b) => b.order - a.order);
};

let hasStyle = false;
const addQuickFavorite = (favoriteButton, root, apiUrl, position) => {
  if (!hasStyle) {
    hasStyle = true;
    GM_addStyle(`
      .comidread-favorites {
        position: absolute;
        z-index: 75;
        left: 0;

        overflow: auto;
        align-content: center;

        box-sizing: border-box;
        width: 100%;
        padding-left: 0.6em;

        border: none;
        border-radius: 0;
      }

      .comidread-favorites-item {
        cursor: pointer;

        display: flex;
        align-items: center;

        width: 100%;
        margin: 1em 0;

        text-align: left;
        overflow-wrap: anywhere;
      }

      .comidread-favorites-item > input {
        pointer-events: none;
        margin: 0 0.5em 0 0;
      }

      .comidread-favorites-item > div {
        flex-shrink: 0;

        width: 15px;
        height: 15px;
        margin: 0 0.5em 0 0;

        background-image: url("https://ehgt.org/g/fav.png");
        background-repeat: no-repeat;
      }

      .gl1t > .comidread-favorites {
        padding: 1em 1.5em;
      }
    `);
  }
  root.style.position = 'relative';
  root.style.height = '100%';
  const [show, setShow] = solidJs.createSignal(false);
  const [favorites, setFavorites] = solidJs.createSignal([]);
  const updateFavorite = async () => {
    try {
      const res = await main.request(apiUrl, {
        errorText: helper.t('site.ehentai.fetch_favorite_failed')
      });
      const dom = helper.domParse(res.responseText);
      const list = [...dom.querySelectorAll('.nosel > div')];
      if (list.length === 10) list[0].querySelector('input').checked = false;
      setFavorites(list);
    } catch {
      main.toast.error(helper.t('site.ehentai.fetch_favorite_failed'));
      setFavorites([]);
    }
  };
  let hasRender = false;
  const renderDom = () => {
    if (hasRender) return;
    hasRender = true;
    const FavoriteItem = (e, index) => {
      const checked = e.querySelector('input').checked;
      const handleClick = async () => {
        if (checked) return;
        setShow(false);
        const formData = new FormData();
        formData.append('favcat', index() === 10 ? 'favdel' : `${index()}`);
        formData.append('apply', 'Apply Changes');
        formData.append('favnote', '');
        formData.append('update', '1');
        const res = await main.request(apiUrl, {
          method: 'POST',
          data: formData,
          errorText: helper.t('site.ehentai.change_favorite_failed')
        });
        main.toast.success(helper.t('site.ehentai.change_favorite_success'));

        // 修改收藏按钮样式的 js 代码
        const updateCode = /\nif\(window.opener.document.+\n/.exec(res.responseText)?.[0]?.replaceAll('window.opener.document', 'window.document');
        if (updateCode) eval(updateCode); // eslint-disable-line no-eval

        await updateFavorite();
      };
      return (() => {
        var _el$ = web.template(`<div class=comidread-favorites-item><input type=radio>`)(),
          _el$2 = _el$.firstChild;
        _el$.$$click = handleClick;
        _el$2.checked = checked;
        web.insert(_el$, web.createComponent(solidJs.Show, {
          get when() {
            return index() <= 9;
          },
          get children() {
            var _el$3 = web.template(`<div>`)();
            web.effect(_$p => (_$p = `0px -${2 + 19 * index()}px`) != null ? _el$3.style.setProperty("background-position", _$p) : _el$3.style.removeProperty("background-position"));
            return _el$3;
          }
        }), null);
        web.insert(_el$, () => e.textContent?.trim(), null);
        return _el$;
      })();
    };
    let background = 'rgba(0, 0, 0, 0)';
    let dom = root;
    while (background === 'rgba(0, 0, 0, 0)') {
      background = getComputedStyle(dom).backgroundColor;
      dom = dom.parentElement;
    }
    web.render(() => web.createComponent(solidJs.Show, {
      get when() {
        return show();
      },
      get children() {
        var _el$4 = web.template(`<span class=comidread-favorites>`)();
        background != null ? _el$4.style.setProperty("background", background) : _el$4.style.removeProperty("background");
        web.insert(_el$4, web.createComponent(solidJs.For, {
          get each() {
            return favorites();
          },
          children: FavoriteItem,
          get fallback() {
            return web.template(`<h3>loading...`)();
          }
        }));
        web.effect(_p$ => {
          var _v$ = `${position[1] - position[0]}px`,
            _v$2 = `${position[0]}px`;
          _v$ !== _p$.e && ((_p$.e = _v$) != null ? _el$4.style.setProperty("height", _v$) : _el$4.style.removeProperty("height"));
          _v$2 !== _p$.t && ((_p$.t = _v$2) != null ? _el$4.style.setProperty("top", _v$2) : _el$4.style.removeProperty("top"));
          return _p$;
        }, {
          e: undefined,
          t: undefined
        });
        return _el$4;
      }
    }), root);
  };

  // 将原本的收藏按钮改为切换显示快捷收藏夹
  const rawClick = favoriteButton.onclick;
  favoriteButton.onclick = null;
  favoriteButton.addEventListener('mousedown', async e => {
    if (e.buttons !== 1 && e.buttons !== 4) return;
    e.stopPropagation();
    e.preventDefault();
    if (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey || e.buttons === 4) return rawClick.call(favoriteButton, e);
    renderDom();
    setShow(val => !val);
    if (show()) await updateFavorite();
  });
};

/** 快捷收藏的界面 */
const quickFavorite = pageType => {
  if (pageType === 'gallery') {
    const button = helper.querySelector('#gdf');
    const root = helper.querySelector('#gd3');
    addQuickFavorite(button, root, `${unsafeWindow.popbase}addfav`, [0, button.firstElementChild.offsetTop]);
    return;
  }

  // 列表页根据不同显示方式分别处理
  switch (pageType) {
    case 't':
      {
        for (const item of helper.querySelectorAll('.gl1t')) {
          const button = item.querySelector('[id^=posted_]');
          const top = item.firstElementChild.getBoundingClientRect().bottom - item.getBoundingClientRect().top;
          const bottom = item.lastElementChild.getBoundingClientRect().top - item.getBoundingClientRect().top;
          const apiUrl = /http.+?(?=')/.exec(button.getAttribute('onclick'))[0];
          addQuickFavorite(button, item, apiUrl, [top, bottom]);
        }
        break;
      }
    case 'e':
      {
        for (const item of helper.querySelectorAll('.gl1e')) {
          const button = item.nextElementSibling.querySelector('[id^=posted_]');
          const bottom = Number.parseInt(getComputedStyle(item).height, 10);
          const apiUrl = /http.+?(?=')/.exec(button.getAttribute('onclick'))[0];
          addQuickFavorite(button, item, apiUrl, [0, bottom]);
        }
        break;
      }
  }
};
web.delegateEvents(["click"]);

/** 关联 nhentai */
const associateNhentai = async (dynamicLoad, setComicLoad, LoadButton) => {
  const titleDom = document.getElementById('gn');
  if (!titleDom || !helper.querySelector('#taglist tbody')) {
    if ((document.getElementById('taglist')?.children.length ?? 1) > 0) main.toast.error(helper.t('site.ehentai.html_changed_nhentai_failed'));
    return;
  }
  const [comicList, setComicList] = solidJs.createSignal();
  const comicTitle = titleDom.textContent.replaceAll(/\s+-/g, ' ');
  const tip = () => {
    if (comicList() === undefined) return 'searching...';
    if (comicList() === null) {
      const url = `https://nhentai.net/search/?q=${comicTitle}`;
      return helper.t('site.ehentai.nhentai_failed', {
        nhentai: `<a href='${url}' target="_blank"> <u> nhentai </u> </a>`
      });
    }
    if (comicList().length === 0) return 'null';
  };
  const nhTagLine = () => (() => {
    var _el$ = web.template(`<tr><td class=tc>nhentai:`)();
      _el$.firstChild;
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return comicList()?.length;
      },
      get fallback() {
        return (// eslint-disable-next-line solid/no-innerhtml
          (() => {
            var _el$4 = web.template(`<td class=tc>`)();
            _el$4.style.setProperty("text-align", "left");
            web.effect(() => _el$4.innerHTML = tip());
            return _el$4;
          })()
        );
      },
      get children() {
        var _el$3 = web.template(`<td>`)();
        web.insert(_el$3, web.createComponent(solidJs.For, {
          get each() {
            return comicList();
          },
          children: ({
            id,
            title
          }) => (() => {
            var _el$5 = web.template(`<div class=gtl><a>`)(),
              _el$6 = _el$5.firstChild;
            web.setAttribute(_el$5, "id", `td_nh:${id}`);
            _el$5.style.setProperty("opacity", "1.0");
            web.setAttribute(_el$6, "id", `nh:${id}`);
            web.setAttribute(_el$6, "href", `https://nhentai.net/g/${id}/`);
            web.setAttribute(_el$6, "onclick", `return toggle_tagmenu(1, 'nh:${id}',this)`);
            web.insert(_el$6, id);
            web.effect(() => web.setAttribute(_el$5, "title", title.japanese || title.english));
            return _el$5;
          })()
        }));
        return _el$3;
      }
    }), null);
    return _el$;
  })();
  web.render(nhTagLine, helper.querySelector('#taglist tbody'));

  // 投票后重新渲染
  helper.hijackFn('tag_update_vote', (rawFn, args) => {
    rawFn(...args);
    web.render(nhTagLine, helper.querySelector('#taglist tbody'));
  });
  try {
    const res = await main.request(`https://nhentai.net/api/galleries/search?query=${comicTitle}`, {
      responseType: 'json',
      errorText: helper.t('site.ehentai.nhentai_error'),
      noTip: true
    });
    setComicList(res.response.result);
  } catch {
    setComicList(null);
  }
  if (!comicList()?.length) return;

  // nhentai api 对应的扩展名
  const fileType = {
    j: 'jpg',
    p: 'png',
    g: 'gif'
  };
  for (const {
    id,
    images,
    num_pages,
    media_id
  } of comicList()) {
    const comicId = `nh:${id}`;
    const loadImgList = setImg => {
      helper.plimit(images.pages.map((page, i) => async () => {
        const imgRes = await main.request(`https://i.nhentai.net/galleries/${media_id}/${i + 1}.${fileType[page.t]}`, {
          headers: {
            Referer: `https://nhentai.net/g/${media_id}`
          },
          responseType: 'blob'
        });
        const url = URL.createObjectURL(imgRes.response);
        setImg(i, url);
      }));
    };
    setComicLoad(dynamicLoad(loadImgList, num_pages, comicId), comicId);
  }
  const tagmenu_act_dom = document.getElementById('tagmenu_act');
  const icon = () => web.template(`<img src=https://ehgt.org/g/mr.gif class=mr alt=">">`)();
  const TagMenu = props => web.createComponent(solidJs.For, {
    get each() {
      return props.children;
    },
    children: item => [icon(), item]
  });
  let dispose;
  helper.hijackFn('_refresh_tagmenu_act', (rawFn, [a]) => {
    dispose?.();
    // 非 nhentai 标签列的用原函数去处理
    if (!a.id.startsWith('nh:')) return rawFn(a);
    if (tagmenu_act_dom.children.length > 0) tagmenu_act_dom.innerHTML = '';
    dispose = web.render(() => web.createComponent(TagMenu, {
      get children() {
        return [(() => {
          var _el$8 = web.template(`<a target=_blank>`)();
          _el$8.innerText = " Jump to nhentai";
          web.effect(() => web.setAttribute(_el$8, "href", a.href));
          return _el$8;
        })(), web.createComponent(LoadButton, {
          get id() {
            return a.id;
          }
        })];
      }
    }), tagmenu_act_dom);
  });
};

/** 快捷键翻页 */
const hotkeysPageTurn = pageType => {
  if (pageType === 'gallery') {
    setEscHandler(0, () => unsafeWindow.selected_tagname ? unsafeWindow.toggle_tagmenu() : true);
    helper.linstenKeydown(e => {
      switch (e.key) {
        case 'ArrowRight':
        case 'd':
          e.preventDefault();
          return helper.querySelector('.ptt td:last-child:not(.ptdd)')?.click();
        case 'ArrowLeft':
        case 'a':
          e.preventDefault();
          return helper.querySelector('.ptt td:first-child:not(.ptdd)')?.click();
      }

      // 使用上下方向键进行投票
      if (!unsafeWindow.selected_tagid) return;
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          return unsafeWindow?.tag_vote_up();
        case 'ArrowDown':
          e.preventDefault();
          return unsafeWindow?.tag_vote_down();
      }
    });
  } else {
    helper.linstenKeydown(e => {
      switch (e.key) {
        case 'ArrowRight':
        case 'd':
          e.preventDefault();
          return helper.querySelector('#unext')?.click();
        case 'ArrowLeft':
        case 'a':
          e.preventDefault();
          return helper.querySelector('#uprev')?.click();
      }
    });
  }
};

// 为每个标签单独生成 css。用于方便调试时排查和修改样式时使用
// const buildTagColorCss = (
//   tag: string,
//   color: string,
//   border: string,
//   background: string,
// ) => `
//   #td_${tag} { background: ${background}; }
//   #td_${tag}.gt { border-color: ${border}; }
//   #td_${tag}:not(.gt) { border-color: ${color}; }
//   #taglist a#ta_${tag} { color: ${color} !important; position: relative; }
const buildTagList = (tagList, prefix) => `\n${[...tagList].map(tag => `${prefix}${tag}`).join(',\n')}\n`;
const getTagSetHtml = async tagset => {
  const url = tagset ? `/mytags?tagset=${tagset}` : '/mytags';
  const res = await main.request(url, {
    fetch: true
  });
  return helper.domParse(res.responseText);
};

/** 获取最新的标签颜色数据 */
const updateTagColor = async () => {
  const backgroundMap = {};
  const borderMap = {};
  const colorMap = {};
  const tagSetList = [];
  // 获取所有标签集的 html
  const defaultTagSet = await getTagSetHtml();
  await Promise.all([...defaultTagSet.querySelectorAll('#tagset_outer select option')].map(async option => {
    const tagSet = option.selected ? defaultTagSet : await getTagSetHtml(option.value);
    if (tagSet.querySelector('#tagset_enable')?.checked) tagSetList.push(tagSet);
  }));
  for (const html of tagSetList) {
    for (const tagDom of html.querySelectorAll('#usertags_outer [id^=tagpreview_]')) {
      const {
        color,
        borderColor,
        background
      } = tagDom.style;
      const tag = tagDom.title.replaceAll(' ', '_').replaceAll(':', '\\:');
      if (!tag) continue;
      backgroundMap[background] ||= new Set();
      backgroundMap[background].add(tag);
      borderMap[borderColor] ||= new Set();
      borderMap[borderColor].add(tag);
      colorMap[color] ||= new Set();
      colorMap[color].add(tag);
    }
  }
  let css = '';
  for (const [background, tagList] of Object.entries(backgroundMap)) {
    css += `:is(${buildTagList(tagList, '#td_')})`;
    css += `{ background: ${background}; }\n\n`;
  }
  for (const [border, tagList] of Object.entries(borderMap)) {
    // 强标签直接覆盖边框颜色
    css += `:is(${buildTagList(tagList, '#td_')}).gt`;
    css += `{ border-color: ${border}; }\n\n`;
  }
  for (const [color, tagList] of Object.entries(colorMap)) {
    // 弱标签将边框颜色改为字体颜色突出显示
    css += `:is(${buildTagList(tagList, '#td_')}):not(.gt)`;
    css += `{ border-color: ${color}; }\n\n`;
    css += `#taglist a:is(${buildTagList(tagList, '#ta_')})`;
    css += `{ color: ${color} !important; position: relative; }\n\n`;
  }
  css += `
    /* 禁用 eh 的变色效果 */
    #taglist a[id] { color: var(--tag) !important; position: relative; }
    #taglist a[id]:hover { color: var(--tag-hover) !important; }

    #taglist a[id]::after {
      content: "";
      background: var(--color);
      width: 100%;
      position: absolute;
      left: 0;
      height: 2px;
      bottom: -7px;
    }
    .tup { --color: var(--tup) }
    .tdn { --color: var(--tdn) }
    #taglist a[id][style="color: blue;"] { --color: blue; }

    /* 避免被上一行的下划线碰到 */
    #taglist div:is(.gt, .gtl, .gtw) { margin-top: 1px; }
  `;
  await GM.setValue('ehTagColorizeCss', css);
  return css;
};
const getTagColorizeCss = async () => {
  let colorizeCss = await GM.getValue('ehTagColorizeCss');
  colorizeCss ||= await updateTagColor();
  return colorizeCss;
};

/** 标签染色 */
const colorizeTag = async pageType => {
  switch (pageType) {
    case 'gallery':
      {
        let css = location.origin === 'https://exhentai.org' ? '--tag: #DDDDDD; --tag-hover: #EEEEEE; --tup: #00E639; --tdn: #FF3333;' : '--tag: #5C0D11; --tag-hover: #8F4701; --tup: green; --tdn: red;';
        css = `#taglist { ${css} }\n\n${await getTagColorizeCss()}`;
        return GM_addStyle(css);
      }
    case 'mytags':
      {
        // 进入时更新
        updateTagColor();
        // 增删标签时会自动刷新页面触发这个更新

        // 点击保存按钮时删除保存的 css，以便在下次需要时重新获取
        document.addEventListener('click', e => e.target.tagName === 'BUTTON' && e.target.id.startsWith('tagsave_') && GM.deleteValue('ehTagColorizeCss'));
      }

    // 除了在 mytags 里更新外，还可以在列表页检查高亮的标签和脚本存储的标签颜色数据是否对应，
    // 在发现不对应时自动更新。但目前我最常用的「缩略图」模式只会返回高亮的标签，
    // 只能检查在 mytags 里删除了标签的情况，所以暂且不实现。
    // 等之后找到办法可以在不额外发起请求的情况下在列表页获取每个画廊的所有标签时再实现
  }
};

/** 快捷评分 */
const quickRating = pageType => {
  let list;
  switch (pageType) {
    case 'gallery':
    case 'mytags':
    case 'mpv':
      return;
    case 'e':
      list = helper.querySelectorAll('#favform > table > tbody > tr');
      break;
    case 'm':
    case 'p':
    case 'l':
      list = helper.querySelectorAll('#favform > table > tbody > tr').slice(1);
      break;
    case 't':
      list = helper.querySelectorAll('.gl1t');
      break;
  }
  GM_addStyle(`
    .comidread-quick-rating {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: click;
    }
  `);
  const coordsList = ['0,0,7,16', '8,0,15,16', '16,0,23,16', '24,0,31,16', '32,0,39,16', '40,0,47,16', '48,0,55,16', '56,0,63,16', '64,0,71,16', '72,0,79,16'];

  /** 修改评分 */
  const editRating = async (url, num) => {
    try {
      const dataRes = await main.request(url, {
        errorText: helper.t('site.ehentai.change_rating_failed'),
        noTip: true
      });
      const reRes = /api_url = "(.+?)".+?gid = (\d+).+?token = "(.+?)".+?apiuid = (\d+).+?apikey = "(.+?)"/s.exec(dataRes.responseText);
      if (!reRes) throw new Error(helper.t('site.ehentai.change_rating_failed'));
      const [, api_url, gid, token, apiuid, apikey] = reRes;
      const res = await main.request(api_url, {
        method: 'POST',
        responseType: 'json',
        data: JSON.stringify({
          method: 'rategallery',
          rating: `${num}`,
          apikey,
          apiuid,
          gid,
          token
        }),
        fetch: true,
        noTip: true
      });
      main.toast.success(`${helper.t('site.ehentai.change_rating_success')}: ${res.response.rating_usr}`);
      return res.response;
    } catch {
      main.toast.error(helper.t('site.ehentai.change_rating_failed'));
      throw new Error(helper.t('site.ehentai.change_rating_failed'));
    }
  };

  /** 根据评分修改显示效果 */
  const updateRatingImage = (dom, num) => {
    // 来自 eh 详情页的 update_rating_image 函数
    let a = Math.round(num + 1);
    const b = -80 + 16 * Math.ceil(a / 2);
    a = a % 2 === 1 ? -21 : -1;
    dom.style.backgroundPosition = `${b}px ${a}px`;
  };
  const renderQuickRating = (item, ir, index) => {
    let basePosition = ir.style.backgroundPosition;
    web.render(() => (() => {
      var _el$ = web.template(`<span class=comidread-quick-rating><img src=https://ehgt.org/g/blank.gif><map>`)(),
        _el$2 = _el$.firstChild,
        _el$3 = _el$2.nextSibling;
      _el$.$$mouseout = () => {
        ir.style.backgroundPosition = basePosition;
      };
      web.setAttribute(_el$, "data-index", index);
      web.setAttribute(_el$2, "usemap", `#rating-${index}`);
      web.setAttribute(_el$3, "name", `rating-${index}`);
      web.insert(_el$3, web.createComponent(solidJs.For, {
        each: coordsList,
        children: (coords, i) => (() => {
          var _el$4 = web.template(`<area shape=rect>`)();
          _el$4.$$click = async () => {
            const res = await editRating(item.querySelector('a').href, i() + 1);
            ir.className = res.rating_cls;
            updateRatingImage(ir, res.rating_usr * 2 - 1);
            basePosition = ir.style.backgroundPosition;
          };
          _el$4.$$mouseover = () => updateRatingImage(ir, i());
          web.setAttribute(_el$4, "coords", coords);
          return _el$4;
        })()
      }));
      return _el$;
    })(), ir);
  };
  for (const [index, item] of list.entries()) {
    const ir = [...item.querySelectorAll('.ir')].at(-1);
    if (!ir) continue;
    // 快捷评分使用得并不多，所以等鼠标移上去再处理，减少性能损耗
    ir.addEventListener('mouseenter', () => renderQuickRating(item, ir, index), {
      once: true
    });
  }
};
web.delegateEvents(["mouseout", "mouseover", "click"]);

const MDLaunch = ((props = {}) => (() => {
  var _el$ = web.template(`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1M14 4c0 .55.45 1 1 1h2.59l-9.13 9.13a.996.996 0 1 0 1.41 1.41L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1">`)();
  web.spread(_el$, props, true, true);
  return _el$;
})());

/** 快捷查看标签定义 */
const quickTagDefine = pageType => {
  if (pageType !== 'gallery') return;
  const tagContent = store.createMutable({});
  const saveTagContent = async tag => {
    if (Reflect.has(tagContent, tag)) return;
    const url = `https://ehwiki.org/wiki/${tag.replaceAll(/[a-z]+:\s?/gi, '')}`;
    const res = await main.request(url, {
      noCheckCode: true
    });
    if (res.status !== 200) {
      tagContent[tag] = (() => {
        var _el$ = web.template(`<h3>`)();
        web.insert(_el$, () => `${res.status} - ${res.statusText}`);
        return _el$;
      })();
      return;
    }
    const html = helper.domParse(res.responseText);
    const content = html.querySelector('#mw-content-text');

    // 将相对链接转换成正确的链接
    for (const dom of content.querySelectorAll('img[src^="/"]')) dom.setAttribute('src', `https://ehwiki.org${dom.getAttribute('src')}`);
    for (const dom of content.getElementsByTagName('a')) {
      const href = dom.getAttribute('href') ?? '';
      if (href.startsWith('/')) dom.setAttribute('href', `https://ehwiki.org${href}`);
      dom.target = '_blank';
    }

    // 删掉附加图
    for (const dom of content.querySelectorAll('.thumb')) dom.remove();
    tagContent[tag] = [(() => {
      var _el$2 = web.template(`<h1><a target=_blank>`)(),
        _el$3 = _el$2.firstChild;
      web.setAttribute(_el$3, "href", url);
      web.insert(_el$3, tag, null);
      web.insert(_el$3, web.createComponent(MDLaunch, {}), null);
      return _el$2;
    })(), content];
  };
  GM_addStyle(`
    #comidread-tag-define {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      text-align: start;
      padding: 0 1em;
      box-sizing: border-box;
    }

    #taglist {
      position: relative;
    }

    #comidread-tag-define h1 {
      border-bottom: 1px solid #a2a9b1;
      margin: 0.4em 0;
    }

    #comidread-tag-define h1 svg {
      height: 0.7em;
      margin-left: 0.2em;
    }

    #comidread-tag-define ul {
      margin: 0.3em 0 0 1.6em;
      padding: 0;
    }

    #comidread-tag-define li {
      margin-bottom: 0.2em;
    }

    #comidread-tag-define div a {
      text-decoration: underline;
    }

    #comidread-tag-define dd {
      margin-left: 1.6em;
    }

    #comidread-tag-define dl {
      margin-top: 0.2em;
      margin-bottom: 0.5em;
    }
  `);
  const [show, setShow] = solidJs.createSignal(false);
  const root = helper.querySelector('#taglist');
  let background = 'rgba(0, 0, 0, 0)';
  let dom = root;
  while (background === 'rgba(0, 0, 0, 0)') {
    background = getComputedStyle(dom).backgroundColor;
    dom = dom.parentElement;
  }
  web.render(() => web.createComponent(solidJs.Show, {
    get when() {
      return show();
    },
    get children() {
      var _el$4 = web.template(`<span id=comidread-tag-define>`)();
      background != null ? _el$4.style.setProperty("background", background) : _el$4.style.removeProperty("background");
      web.insert(_el$4, () => tagContent[unsafeWindow.selected_tagname] ?? web.template(`<h3>loading...`)());
      web.effect(_$p => (_$p = `${root.scrollHeight}px`) != null ? _el$4.style.setProperty("height", _$p) : _el$4.style.removeProperty("height"));
      return _el$4;
    }
  }), root);

  // 直接覆盖原有的函数
  unsafeWindow.tag_define = async () => {
    if (!unsafeWindow.selected_tagname) return;
    if (show()) return setShow(false);
    setShow(true);
    try {
      await saveTagContent(unsafeWindow.selected_tagname);
    } catch (error) {
      console.error(error);
      setShow(false);
    }
  };

  // Esc 关闭
  setEscHandler(2, () => show() ? setShow(false) : true);
};

const MdPictureInPicture = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M18 7h-6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1m3-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2m-1 16.01H4c-.55 0-1-.45-1-1V5.98c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.03c0 .55-.45 1-1 1"/></svg>`;
const getDomPosition = dom => {
  const rect = dom.getBoundingClientRect();
  const computedStyle = getComputedStyle(dom);
  const leftBorder = Number.parseFloat(computedStyle.borderLeftWidth);
  const leftPadding = Number.parseFloat(computedStyle.paddingLeft);
  const topPadding = Number.parseFloat(computedStyle.paddingTop);
  const topBorder = Number.parseFloat(computedStyle.borderTopWidth);
  return {
    left: rect.left + leftBorder + leftPadding,
    top: rect.top + topBorder + topPadding,
    width: computedStyle.width,
    height: computedStyle.height
  };
};
const floatTagList = (pageType, mangaProps) => {
  if (pageType !== 'gallery') return;
  const gd4 = helper.querySelector('#gd4');
  const gd4Style = getComputedStyle(gd4);

  /** 背景颜色 */
  let background = 'rgba(0, 0, 0, 0)';
  let dom = gd4;
  while (background === 'rgba(0, 0, 0, 0)') {
    background = getComputedStyle(dom).backgroundColor;
    dom = dom.parentElement;
  }
  const {
    borderColor
  } = getComputedStyle(helper.querySelector('#gdt'));
  /** 边框样式 */
  const border = `1px solid ${borderColor}`;
  GM_addStyle(`
      #comicread-tag-box {
        position: fixed;
        z-index: 2147483647;

        font-size: 12px;
        text-align: justify;

        background: ${background};
        box-shadow: 0 0 15px -3px #0004;
      }

      #comicread-tag-box > #gd4 {
        margin: 0;
        padding: 0;
        border: none;
      }

      #comicread-tag-box > #ehs-introduce-box {
        position: relative;
        width: 161px;
        height: 100%;
        border-left: ${border};
      }

      #comicread-tag-box-placeholder {
        cursor: pointer;

        float: left;
        display: flex;
        grid-area: gd4;
        justify-content: center;

        margin: 0 0 0 10px;
        padding: 0 0 0 5px;

        border-right: 1px solid ${borderColor};
        border-left: 1px solid ${borderColor};
      }

      #comicread-tag-box-placeholder svg {
        width: 17em;
        opacity: 0.5;
      }

      /* 防止在窗口变小时确认按钮被挤出范围 */
      #tagmenu_new {
        width: fit-content;
      }
    `);
  const {
    store,
    setState,
    _setState,
    _state
  } = helper.useStore({
    open: false,
    top: 0,
    left: 0,
    opacity: 1,
    mouse: {
      x: 0,
      y: 0
    },
    bound: {
      width: 0,
      height: 0
    }
  });
  const setPos = (state, top, left) => {
    state.top = helper.clamp(0, top, state.bound.height);
    state.left = helper.clamp(0, left, state.bound.width);
  };
  const setOpacity = opacity => {
    _setState('opacity', helper.clamp(0.5, opacity, 1));
  };
  setOpacity(Number(localStorage.getItem('floatTagListOpacity')) || 1);

  // 监视鼠标位置，以便在通过快捷键唤出时出现在鼠标所在位置
  document.addEventListener('pointermove', e => {
    setState(state => {
      state.mouse.x = e.clientX;
      state.mouse.y = e.clientY;
    });
  });
  const hadnleResize = () => {
    setState(state => {
      state.bound.width = window.innerWidth - gd4.clientWidth;
      state.bound.height = window.innerHeight - gd4.clientHeight;
      state.top = helper.clamp(0, state.top, state.bound.height);
      state.left = helper.clamp(0, state.left, state.bound.width);
    });
  };
  window.addEventListener('resize', hadnleResize);
  hadnleResize();
  helper.useStyleMemo('#comicread-tag-box', {
    display: () => store.open ? undefined : 'none',
    top: () => `${store.top}px`,
    left: () => `${store.left}px`,
    opacity: () => store.opacity
  });

  // 防止布局偏移的占位元素
  const placeholder = gd4.cloneNode();
  placeholder.id = 'comicread-tag-box-placeholder';
  placeholder.style.display = 'none';
  placeholder.addEventListener('click', () => _setState('open', false));
  placeholder.innerHTML = MdPictureInPicture;
  gd4.before(placeholder);
  const ref = document.createElement('div');
  ref.id = 'comicread-tag-box';
  ref.classList.add('comicread-ignore');
  document.body.append(ref);

  // 使用滚轮调整透明度
  ref.addEventListener('wheel', e => {
    e.stopPropagation();
    e.preventDefault();
    setOpacity(store.opacity + (e.deltaY > 0 ? -0.05 : 0.05));
    localStorage.setItem('floatTagListOpacity', `${store.opacity}`);
  }, {
    passive: false
  });
  const initPos = {
    top: 0,
    left: 0
  };
  helper.useDrag({
    ref: gd4,
    handleDrag({
      type,
      xy: [x, y],
      initial: [ix, iy]
    }) {
      switch (type) {
        case 'down':
          if (!store.open) {
            const pos = getDomPosition(gd4);
            setState(state => {
              // state.open = true;
              state.top = pos.top;
              state.left = pos.left;
            });
          }
          initPos.top = store.top;
          initPos.left = store.left;
          break;
        case 'up':
          setState(state => {
            // 窗口移到原位附近时自动收回
            if (mangaProps.show) return;
            const rect = placeholder.getBoundingClientRect();
            if (helper.approx(state.top, rect.top, 50) && helper.approx(state.left, rect.left, 50)) state.open = false;
          });
          break;
        case 'move':
          setState(state => {
            setPos(state, initPos.top + y - iy, initPos.left + x - ix);
            state.open = true;
          });
          break;
      }
    },
    handleClick: (_, target) => target.click(),
    skip: e => !e.target.matches('#gd4, #taglist, #gwrd, td+td')
  });
  let ehs;
  let ehsParent;
  const handleEhs = () => {
    if (ehs) return;
    ehs = helper.querySelector('#ehs-introduce-box');
    if (!ehs) return;
    ehsParent = ehs.parentElement;

    // 让 ehs 的自动补全列表能显示在顶部
    const autoComplete = helper.querySelector('.eh-syringe-lite-auto-complete-list');
    if (autoComplete) {
      autoComplete.classList.add('comicread-ignore');
      autoComplete.style.zIndex = '2147483647';
      document.body.append(autoComplete);
    }

    // 只在当前有标签被选中时显示 ehs 的标签介绍
    helper.hijackFn('toggle_tagmenu', (rawFn, args) => {
      const res = rawFn(...args);
      if (!unsafeWindow.selected_tagname) helper.querySelector('#ehs-introduce-box .ehs-close')?.click();
      return res;
    });
  };
  helper.createEffectOn(() => store.open, open => {
    handleEhs();
    if (open) {
      const {
        height,
        width
      } = gd4Style;
      placeholder.style.cssText = `height: ${height}; width: ${width};`;
      ref.style.height = height;
      gd4.style.width = width;
      ref.append(gd4);
      if (ehs) ref.append(ehs);
      document.activeElement.blur();
    } else {
      placeholder.style.cssText = `display: none;`;
      gd4.style.width = '';
      placeholder.after(gd4);
      if (ehs) ehsParent.append(ehs);
      Manga.focus();
    }
  }, {
    defer: true
  });
  Manga.setDefaultHotkeys(hotkeys => ({
    ...hotkeys,
    float_tag_list: ['q']
  }));
  setEscHandler(0, () => store.open ? _setState('open', false) : true);
  helper.linstenKeydown(e => {
    const code = helper.getKeyboardCode(e);
    if (Manga.hotkeysMap()[code] !== 'float_tag_list') return;
    e.stopPropagation();
    e.preventDefault();
    setState(state => {
      state.open = !state.open;
      if (!state.open) return;
      setPos(state, state.mouse.y - gd4.clientHeight / 2, state.mouse.x - gd4.clientWidth / 2);
    });
  });

  // 在悬浮状态下打完标签后移开焦点，以便能快速用快捷键关掉悬浮界面
  helper.hijackFn('tag_from_field', (rawFn, args) => {
    if (store.open) document.activeElement.blur();
    return rawFn(...args);
  });
  const newTagInput = helper.querySelector('#newtagfield');

  // 悬浮状态下鼠标划过自动聚焦输入框
  newTagInput.addEventListener('pointerenter', () => store.open && newTagInput.focus());

  /** 根据标签链接获取对应的标签名 */
  const getDropTag = tagUrl => {
    const tagDom = helper.querySelector(`a[href=${CSS.escape(tagUrl)}]`);
    if (!tagDom) return;
    // 有 ehs 的情况下 title 会是标签的简写
    return tagDom.title || tagDom.id.slice(3).replaceAll('_', ' ');
  };

  // 让标签可以直接拖进输入框，方便一次性点赞多个标签
  const handleDrop = e => {
    const text = e.dataTransfer.getData('text');
    const tag = getDropTag(text);
    if (!tag) return;
    e.preventDefault();
    if (!newTagInput.value.includes(tag)) newTagInput.value += `${tag}, `;
  };
  newTagInput.addEventListener('drop', handleDrop);

  // 增大拖拽标签的放置范围，不用非得拖进框
  const taglist = helper.querySelector('#taglist');
  taglist.addEventListener('dragover', e => e.preventDefault());
  taglist.addEventListener('dragenter', e => e.preventDefault());
  taglist.addEventListener('drop', handleDrop);
};


(async () => {
  let pageType;
  if (Reflect.has(unsafeWindow, 'display_comment_field')) pageType = 'gallery';else if (location.pathname === '/mytags') pageType = 'mytags';else if (Reflect.has(unsafeWindow, 'mpvkey')) pageType = 'mpv';else pageType = helper.querySelector('option[value="t"]')?.parentElement?.value;
  if (!pageType) return;
  const {
    options,
    setComicLoad,
    dynamicLoad,
    showComic,
    comicMap,
    setComicMap,
    setFab,
    setManga,
    mangaProps,
    nowComic
  } = await main.useInit('ehentai', {
    /** 关联 nhentai */
    associate_nhentai: true,
    /** 快捷键 */
    hotkeys: true,
    /** 识别广告页 */
    detect_ad: true,
    /** 快捷收藏 */
    quick_favorite: true,
    /** 标签染色 */
    colorize_tag: false,
    /** 快捷评分 */
    quick_rating: true,
    /** 快捷查看标签定义 */
    quick_tag_define: true,
    /** 悬浮标签列表 */
    float_tag_list: false,
    autoShow: false
  });
  if (pageType === 'mpv') {
    return setComicLoad(() => {
      const imgEleList = helper.querySelectorAll('.mimg[id]');
      const loadImgList = async setImg => {
        const imagelist = unsafeWindow.imagelist;
        helper.plimit(imagelist.map((_, i) => async () => {
          const url = () => imagelist[i].i;
          while (!url()) {
            if (!Reflect.has(imagelist[i], 'xhr')) {
              unsafeWindow.load_image(i + 1);
              unsafeWindow.next_possible_request = 0;
            }
            await helper.wait(url);
          }
          setImg(i, url());
        }), undefined, 4);
      };
      return dynamicLoad(loadImgList, imgEleList.length)();
    });
  }

  // 按顺序处理 esc 按键
  helper.linstenKeydown(e => {
    if (e.key !== 'Escape') return;
    for (const handler of escHandler) if (handler() !== true) return e.stopImmediatePropagation();
  });

  // 标签染色
  if (options.colorize_tag) colorizeTag(pageType);
  // 快捷键
  if (options.hotkeys) hotkeysPageTurn(pageType);
  // 悬浮标签列表
  if (options.float_tag_list) helper.requestIdleCallback(() => floatTagList(pageType, mangaProps));
  // 快捷收藏。必须处于登录状态
  if (unsafeWindow.apiuid !== -1 && options.quick_favorite) helper.requestIdleCallback(() => quickFavorite(pageType));
  // 快捷评分
  if (options.quick_rating) helper.requestIdleCallback(() => quickRating(pageType), 1000);
  // 快捷查看标签定义
  if (options.quick_tag_define) helper.requestIdleCallback(() => quickTagDefine(pageType), 1000);

  // 不是漫画页的话
  if (pageType !== 'gallery') return;
  const sidebarDom = document.getElementById('gd5');
  // 表站开启了 Multi-Page Viewer 的话会将点击按钮挤出去，得缩一下位置
  if (sidebarDom.children[6]) sidebarDom.children[6].style.padding = '0';
  const LoadButton = props => {
    const tip = solidJs.createMemo(() => {
      const imgList = comicMap[props.id]?.imgList;
      const progress = imgList?.filter(Boolean).length;
      switch (imgList?.length) {
        case undefined:
          return ' Load comic';
        case progress:
          return ' Read';
        default:
          return ` loading - ${progress}/${imgList.length}`;
      }
    });
    return (() => {
      var _el$ = web.template(`<a href=javascript:;>`)();
      _el$.$$click = () => showComic(props.id);
      web.insert(_el$, tip);
      return _el$;
    })();
  };
  web.render(() => (() => {
    var _el$2 = web.template(`<p class="g2 gsp"><img src=https://ehgt.org/g/mr.gif>`)();
      _el$2.firstChild;
    web.insert(_el$2, web.createComponent(LoadButton, {
      id: ""
    }), null);
    return _el$2;
  })(), sidebarDom);

  // 关联 nhentai
  if (options.associate_nhentai) helper.requestIdleCallback(() => associateNhentai(dynamicLoad, setComicLoad, LoadButton), 1000);

  /** 从图片页获取图片地址 */
  const getImgFromImgPage = async url => {
    const res = await main.request(url, {
      fetch: true,
      errorText: helper.t('site.ehentai.fetch_img_page_source_failed')
    }, 10);
    try {
      return /id="img" src="(.+?)"/.exec(res.responseText)[1];
    } catch {
      throw new Error(helper.t('site.ehentai.fetch_img_url_failed'));
    }
  };

  /** 从详情页获取图片页的地址 */
  const getImgFromDetailsPage = async (pageNum = 0) => {
    const res = await main.request(`${window.location.pathname}${pageNum ? `?p=${pageNum}` : ''}`, {
      fetch: true,
      errorText: helper.t('site.ehentai.fetch_img_page_url_failed')
    });
    // 从详情页获取图片页的地址
    const reRes = res.responseText.matchAll(/<a href="(.{20,50})"><img alt=.+?title=".+?: (.+?)"/gm);
    if (reRes === null) {
      if (res.responseText.includes('Your IP address has been temporarily banned for excessive')) throw new Error(helper.t('site.ehentai.ip_banned'));
      throw new Error(helper.t('site.ehentai.fetch_img_page_url_failed'));
    }
    return [...reRes].map(([, url, fileName]) => [url, fileName]);
  };
  const getImgNum = async () => {
    let numText = helper.querySelector('.gtb .gpc')?.textContent?.replaceAll(',', '').match(/\d+/g)?.at(-1);
    if (numText) return Number(numText);
    const res = await main.request(window.location.href);
    numText = /(?<=<td class="gdt2">)\d+(?= pages<\/td>)/.exec(res.responseText)?.[0];
    if (numText) return Number(numText);
    main.toast.error(helper.t('site.changed_load_failed'));
    return 0;
  };
  const totalImgNum = await getImgNum();
  const placeValueNum = `${totalImgNum}`.length;
  const ehImgList = [];
  const ehImgPageList = [];
  const ehImgFileNameList = [];
  const loadImgList = async setImg => {
    const totalPageNum = Number(helper.querySelector('.ptt td:nth-last-child(2)').textContent);
    for (let pageNum = 0; pageNum < totalPageNum; pageNum++) {
      const startIndex = ehImgList.length;
      const imgPageUrlList = await getImgFromDetailsPage(pageNum);
      await helper.plimit(imgPageUrlList.map(([imgPageUrl, fileName], i) => async () => {
        const imgUrl = await getImgFromImgPage(imgPageUrl);
        const index = startIndex + i;
        ehImgList[index] = imgUrl;
        ehImgPageList[index] = imgPageUrl;
        ehImgFileNameList[index] = fileName;
        setImg(index, imgUrl);
      }));
      if (enableDetectAd) {
        await detectAd.getAdPageByFileName(ehImgFileNameList, comicMap[''].adList);
        await detectAd.getAdPageByContent(ehImgList, comicMap[''].adList);
      }
    }
  };
  setComicLoad(dynamicLoad(loadImgList, totalImgNum));
  const enableDetectAd = options.detect_ad && document.getElementById('ta_other:extraneous_ads');
  if (enableDetectAd) {
    setComicMap('', 'adList', new main.ReactiveSet());
    /** 缩略图元素列表 */
    const thumbnailEleList = [];
    for (const e of helper.querySelectorAll('#gdt img')) {
      const index = Number(e.alt) - 1;
      if (Number.isNaN(index)) return;
      thumbnailEleList[index] = e;
      // 根据当前显示的图片获取一部分文件名
      [, ehImgFileNameList[index]] = e.title.split(/：|: /);
    }
    // 先根据文件名判断一次
    await detectAd.getAdPageByFileName(ehImgFileNameList, comicMap[''].adList);
    // 不行的话再用缩略图识别
    if (comicMap[''].adList.size === 0) await detectAd.getAdPageByContent(thumbnailEleList, comicMap[''].adList);

    // 模糊广告页的缩略图
    helper.useStyle(helper.createRootMemo(() => {
      if (!comicMap['']?.adList?.size) return '';
      const styleList = [...comicMap[''].adList].map(i => {
        const alt = `${i + 1}`.padStart(placeValueNum, '0');
        return `img[alt="${alt}"]:not(:hover) {
            filter: blur(8px);
            clip-path: border-box;
            backdrop-filter: blur(8px);
          }`;
      });
      return styleList.join('\n');
    }));
  }

  /** 获取新的图片页地址 */
  const getNewImgPageUrl = async url => {
    const res = await main.request(url, {
      errorText: helper.t('site.ehentai.fetch_img_page_source_failed')
    });
    const nl = /nl\('(.+?)'\)/.exec(res.responseText)?.[1];
    if (!nl) throw new Error(helper.t('site.ehentai.fetch_img_url_failed'));
    const newUrl = new URL(url);
    newUrl.searchParams.set('nl', nl);
    return newUrl.href;
  };

  /** 刷新指定图片 */
  const reloadImg = async i => {
    const pageUrl = await getNewImgPageUrl(ehImgPageList[i]);
    let imgUrl = '';
    while (!imgUrl || !(await helper.testImgUrl(imgUrl))) {
      imgUrl = await getImgFromImgPage(pageUrl);
      helper.log(`刷新图片 ${i}\n${ehImgList[i]} ->\n${imgUrl}`);
    }
    ehImgList[i] = imgUrl;
    ehImgPageList[i] = pageUrl;
    setComicMap('', 'imgList', i, imgUrl);
  };

  /** 刷新所有错误图片 */
  const reloadErrorImg = helper.singleThreaded(() => helper.plimit(Manga.store.imgList.map((img, i) => () => {
    if (img.loadType !== 'error' || nowComic() !== '') return;
    return reloadImg(i);
  })));
  setManga({
    onExit(isEnd) {
      if (isEnd) helper.scrollIntoView('#cdiv');
      setManga('show', false);
    },
    // 在图片加载出错时刷新图片
    async onLoading(_, img) {
      if (!img || img.loadType !== 'error' || (await helper.testImgUrl(img.src))) return;
      return reloadErrorImg();
    }
  });
  setFab('initialShow', options.autoShow);
})().catch(error => helper.log.error(error));
web.delegateEvents(["click"]);

        break;
      }

    // #nhentai（彻底屏蔽漫画、无限滚动）
    case 'nhentai.net':
      {
const web = require('solid-js/web');
const main = require('main');
const detectAd = require('userscript/detectAd');
const helper = require('helper');

(async () => {
  const {
    options,
    setFab,
    setManga,
    setComicLoad,
    showComic,
    comicMap,
    setComicMap
  } = await main.useInit('nhentai', {
    /** 无限滚动 */
    auto_page_turn: true,
    /** 彻底屏蔽漫画 */
    block_totally: true,
    /** 在新页面中打开链接 */
    open_link_new_page: true,
    /** 识别广告页 */
    detect_ad: true
  });

  // 在漫画详情页
  if (Reflect.has(unsafeWindow, 'gallery')) {
    setManga({
      onExit(isEnd) {
        if (isEnd) helper.scrollIntoView('#comment-container');
        setManga('show', false);
      }
    });
    setComicLoad(() => gallery.images.pages.map(({
      number,
      extension
    }) => `https://i.nhentai.net/galleries/${gallery.media_id}/${number}.${extension}`));
    setFab('initialShow', options.autoShow);
    const comicReadModeDom = (() => {
      var _el$ = web.template(`<a href=javascript:; id=comicReadMode class="btn btn-secondary"><i class="fa fa-book"></i> Read`)();
      _el$.$$click = () => showComic();
      return _el$;
    })();
    document.getElementById('download').after(comicReadModeDom);
    const enableDetectAd = options.detect_ad && helper.querySelector('#tags .tag.tag-144644');
    if (enableDetectAd) {
      setComicMap('', 'adList', new main.ReactiveSet());

      // 先使用缩略图识别
      await detectAd.getAdPageByContent(helper.querySelectorAll('.thumb-container img').map(img => img.dataset.src), comicMap[''].adList);

      // 加载了原图后再用原图识别
      helper.createEffectOn(() => comicMap[''].imgList, imgList => imgList?.length && detectAd.getAdPageByContent(imgList, comicMap[''].adList));

      // 模糊广告页的缩略图
      helper.useStyle(() => {
        if (!comicMap['']?.adList?.size) return '';
        const styleList = [...comicMap[''].adList].map(i => `
            .thumb-container:nth-of-type(${i + 1}):not(:hover) {
              filter: blur(8px);
              clip-path: border-box;
            }`);
        return styleList.join('\n');
      });
    }
    return;
  }

  // 在漫画浏览页
  if (document.getElementsByClassName('gallery').length > 0) {
    if (options.open_link_new_page) for (const e of helper.querySelectorAll('a:not([href^="javascript:"])')) e.setAttribute('target', '_blank');
    const blacklist = (unsafeWindow?._n_app ?? unsafeWindow?.n)?.options?.blacklisted_tags;
    if (blacklist === undefined) main.toast.error(helper.t('site.nhentai.tag_blacklist_fetch_failed'));
    // blacklist === null 时是未登录

    if (options.block_totally && blacklist?.length) GM_addStyle('.blacklisted.gallery { display: none; }');
    if (options.auto_page_turn) {
      let nextUrl = helper.querySelector('a.next')?.href;
      if (!nextUrl) return;
      GM_addStyle(`
        hr { bottom: 1px; box-sizing: border-box; margin: -1em auto 2em; }
        hr:last-child { position: relative; animation: load .8s linear alternate infinite; }
        hr:not(:last-child) { display: none; }
        @keyframes load { 0% { width: 100%; } 100% { width: 0; } }
      `);
      const blackSet = new Set(blacklist);
      const contentDom = document.getElementById('content');
      const loadNextPage = helper.singleThreaded(async () => {
        if (!nextUrl) return;
        const res = await main.request(nextUrl, {
          fetch: true,
          errorText: helper.t('site.nhentai.fetch_next_page_failed')
        });
        const html = helper.domParse(res.responseText);
        history.replaceState(null, '', nextUrl);
        const container = html.querySelector('.index-container');
        for (const gallery of container.querySelectorAll('.gallery')) {
          for (const img of gallery.getElementsByTagName('img')) img.setAttribute('src', img.dataset.src);

          // 判断是否有黑名单标签
          const tags = gallery.dataset.tags.split(' ').map(Number);
          if (tags.some(tag => blackSet.has(tag))) gallery.classList.add('blacklisted');
        }
        const pagination = html.querySelector('.pagination');
        nextUrl = pagination.querySelector('a.next')?.href;
        contentDom.append(container, pagination);
        const hr = document.createElement('hr');
        contentDom.append(hr);
        observer.disconnect();
        observer.observe(hr);
        if (!nextUrl) hr.style.animationPlayState = 'paused';
      }, false);
      loadNextPage();
      const observer = new IntersectionObserver(entries => entries[0].isIntersecting && loadNextPage());
      observer.observe(contentDom.lastElementChild);
      if (helper.querySelector('section.pagination')) contentDom.append(document.createElement('hr'));
    }
  }
})().catch(error => helper.log.error(error));
web.delegateEvents(["click"]);

        break;
      }

    // #Yurifans（自动签到）
    case 'yuri.website':
      {
const main = require('main');
const helper = require('helper');

// 单篇
// https://yuri.website/162404/
// 连载折叠
// https://yuri.website/148990/
// 需要购买
// https://yuri.website/147642/
(async () => {
  const {
    options,
    setManga,
    setComicLoad,
    showComic,
    comicMap,
    needAutoShow
  } = await main.useInit('yurifans', {
    自动签到: true
  });

  // 自动签到
  if (options.自动签到) (async () => {
    // 跳过未登录的情况
    if (!globalThis.b2token) return;
    const todayString = new Date().toLocaleDateString('zh-CN');
    // 判断当前日期与上次成功签到日期是否相同
    if (todayString === localStorage.getItem('signDate')) return;
    try {
      const res = await main.request('/wp-json/b2/v1/userMission', {
        method: 'POST',
        noTip: true,
        headers: {
          Authorization: `Bearer ${b2token}`
        }
      });
      const data = JSON.parse(res.responseText);

      // 首次成功签到 或 重复签到
      if (!(data?.mission?.date || !Number.isNaN(Number(data)))) throw new Error('签到失败');
      main.toast('自动签到成功');
      localStorage.setItem('signDate', todayString);
    } catch {
      main.toast.error('自动签到失败');
    }
  })();

  // 跳过漫画区外的页面
  if (!helper.querySelector('a.post-list-cat-item[title="在线区-漫画"]')) return;

  // 需要购买的漫画
  if (helper.querySelector('.content-hidden')) {
    const imgBody = helper.querySelector('.content-hidden');
    const imgList = imgBody.getElementsByTagName('img');
    if (await helper.wait(() => imgList.length, 1000)) setComicLoad(() => [...imgList].map(e => e.src));
    return;
  }

  // 有折叠内容的漫画
  if (helper.querySelector('.xControl')) {
    needAutoShow.val = false;
    const switchChapter = async i => {
      showComic(i);
      setManga({
        onPrev: Reflect.has(comicMap, i - 1) ? () => switchChapter(i - 1) : undefined,
        onNext: Reflect.has(comicMap, i + 1) ? () => switchChapter(i + 1) : undefined
      });
    };
    for (const [i, a] of helper.querySelectorAll('.xControl > a').entries()) {
      const item = a.parentElement.nextElementSibling;
      setComicLoad(() => [...item.getElementsByTagName('img')].map(e => e.dataset.src ?? ''), i);

      // 只在打开折叠内容时进入阅读模式
      a.addEventListener('click', () => item.getAttribute('style') !== '' && switchChapter(i));
    }
    return;
  }

  // 没有折叠的单篇漫画
  await helper.wait(() => helper.querySelectorAll('.entry-content img').length);
  setComicLoad(() => helper.querySelectorAll('.entry-content img').map(e => e.src));
})();

        break;
      }

    // #拷贝漫画(copymanga)（显示最后阅读记录）
    case 'mangacopy.com':
    case 'copymanga.site':
    case 'copymanga.info':
    case 'copymanga.net':
    case 'copymanga.org':
    case 'copymanga.tv':
    case 'copymanga.com':
    case 'www.mangacopy.com':
    case 'www.copymanga.site':
    case 'www.copymanga.info':
    case 'www.copymanga.net':
    case 'www.copymanga.org':
    case 'www.copymanga.tv':
    case 'www.copymanga.com':
      {
const main = require('main');
const helper = require('helper');

(() => {
  const headers = {
    webp: '1',
    region: '1',
    'User-Agent': 'COPY/2.0.7|',
    version: '2.0.7',
    source: 'copyApp',
    referer: 'com.copymanga.app-2.0.7'
  };
  const token = document.cookie.split('; ').find(cookie => cookie.startsWith('token='))?.replace('token=', '');
  if (token) Reflect.set(headers, 'Authorization', `Token ${token}`);
  let name = '';
  let id = '';
  if (window.location.href.includes('/chapter/')) [,, name,, id] = window.location.pathname.split('/');else if (window.location.href.includes('/comicContent/')) [,,, name, id] = window.location.pathname.split('/');
  if (name && id) {
    const getImgList = async () => {
      const res = await main.request(`/api/v3/comic/${name}/chapter2/${id}?platform=3`, {
        responseType: 'json',
        headers
      });
      const imgList = [];
      const {
        words,
        contents
      } = res.response.results.chapter;
      for (let i = 0; i < contents.length; i++) imgList[words[i]] = contents[i].url.replace('.c800x.', '.c1500x.');
      return imgList;
    };
    options = {
      name: 'copymanga',
      getImgList,
      onNext: helper.querySelectorClick('.comicContent-next a:not(.prev-null)'),
      onPrev: helper.querySelectorClick('.comicContent-prev:not(.index,.list) a:not(.prev-null)'),
      async getCommentList() {
        const chapter_id = window.location.pathname.split('/').at(-1);
        const res = await main.request(`/api/v3/roasts?chapter_id=${chapter_id}&limit=100&offset=0&_update=true`, {
          responseType: 'json',
          errorText: '获取漫画评论失败'
        });
        return res.response.results.list.map(({
          comment
        }) => comment);
      }
    };
    return;
  }

  // 在目录页显示上次阅读记录
  if (window.location.href.includes('/comic/')) {
    const comicName = window.location.href.split('/comic/')[1];
    if (!comicName || !token) return;
    let a;
    const stylesheet = new CSSStyleSheet();
    document.adoptedStyleSheets.push(stylesheet);
    const updateLastChapter = async () => {
      // 因为拷贝漫画的目录是动态加载的，所以要等目录加载出来再往上添加
      if (!a) (async () => {
        a = document.createElement('a');
        const tableRight = await helper.wait(() => helper.querySelector('.table-default-right'));
        a.target = '_blank';
        tableRight.insertBefore(a, tableRight.firstElementChild);
        const span = document.createElement('span');
        span.textContent = '最後閱讀：';
        tableRight.insertBefore(span, tableRight.firstElementChild);
      })();
      a.textContent = '獲取中';
      a.removeAttribute('href');
      const res = await main.request(`${window.location.origin}/api/v3/comic2/${comicName}/query?platform=3`, {
        responseType: 'json',
        fetch: false,
        headers
      });
      const data = res.response?.results?.browse;
      if (!data) {
        a.textContent = data === null ? '無' : '未返回數據';
        return;
      }
      const lastChapterId = data.chapter_id;
      if (!lastChapterId) {
        a.textContent = '接口異常';
        return;
      }
      await stylesheet.replace(`ul a[href*="${lastChapterId}"] {
        color: #fff !important;
        background: #1790E6;
      }`);
      a.href = `${window.location.pathname}/chapter/${lastChapterId}`;
      a.textContent = data.chapter_name;
    };
    setTimeout(updateLastChapter);
    document.addEventListener('visibilitychange', updateLastChapter);
  }
})();

        break;
      }

    // #[PonpomuYuri](https://www.ponpomu.com)
    case 'www.ponpomu.com':
      {
        options = {
          name: 'terraHistoricus',
          wait: () => Boolean(helper.querySelector('.comic-page-container img')),
          getImgList: () => helper.querySelectorAll('.comic-page-container img').map(e => e.dataset.srcset),
          SPA: {
            isMangaPage: () => window.location.href.includes('/comic/'),
            getOnPrev: () => helper.querySelectorClick('.prev-btn:not(.invisible) a'),
            getOnNext: () => helper.querySelectorClick('.next-btn:not(.invisible) a')
          }
        };
        break;
      }

    // #[明日方舟泰拉记事社](https://terra-historicus.hypergryph.com)
    case 'terra-historicus.hypergryph.com':
      {
        const apiUrl = () => `https://terra-historicus.hypergryph.com/api${window.location.pathname}`;
        const getImgUrl = i => async () => {
          const res = await main.request(`${apiUrl()}/page?pageNum=${i + 1}`);
          return JSON.parse(res.responseText).data.url;
        };
        options = {
          name: 'terraHistoricus',
          wait: () => Boolean(helper.querySelector('.HG_COMIC_READER_main')),
          async getImgList() {
            const res = await main.request(apiUrl(), {
              responseType: 'json'
            });
            const pageList = res.response.data.pageInfos;
            if (pageList.length === 0 && window.location.pathname.includes('episode')) throw new Error('获取图片列表时出错');
            return helper.plimit(helper.createSequence(pageList.length).map(getImgUrl));
          },
          SPA: {
            isMangaPage: () => window.location.href.includes('episode'),
            getOnPrev: () => helper.querySelectorClick('footer .HG_COMIC_READER_prev a'),
            getOnNext: () => helper.querySelectorClick('footer .HG_COMIC_READER_prev+.HG_COMIC_READER_buttonEp a')
          }
        };
        break;
      }

    // #[禁漫天堂](https://18comic.vip)
    case 'jmcomic.me':
    case '18comic-jjks.me':
    case '18comic.org':
    case '18comic.vip':
      {
const main = require('main');
const helper = require('helper');

(async () => {
  // 只在漫画页内运行
  if (!window.location.pathname.includes('/photo/')) return;
  const {
    setComicLoad,
    setManga,
    dynamicLoad
  } = await main.useInit('jm');
  while (!unsafeWindow?.onImageLoaded) {
    if (document.readyState === 'complete') {
      main.toast.error('无法获取图片', {
        duration: Number.POSITIVE_INFINITY
      });
      return;
    }
    await helper.sleep(100);
  }
  setManga({
    onPrev: helper.querySelectorClick(() => helper.querySelector('.menu-bolock-ul .fa-angle-double-left')?.parentElement),
    onNext: helper.querySelectorClick(() => helper.querySelector('.menu-bolock-ul .fa-angle-double-right')?.parentElement)
  });
  const imgEleList = helper.querySelectorAll('.scramble-page:not(.thewayhome) > img');

  // 判断当前漫画是否有被分割，没有就直接获取图片链接加载
  // 判断条件来自页面上的 scramble_image 函数
  if (unsafeWindow.aid < unsafeWindow.scramble_id || unsafeWindow.speed === '1') return setComicLoad(() => imgEleList.map(e => e.dataset.original ?? ''));
  const downloadImg = async url => {
    try {
      // 使用 fetch 可以复用本地缓存，但有时候会报 cors 问题
      return await main.request(url, {
        responseType: 'blob',
        fetch: true,
        noTip: true
      }, 3);
    } catch {
      return await main.request(url, {
        responseType: 'blob',
        revalidate: true,
        fetch: false
      }, 3);
    }
  };
  const getImgUrl = async imgEle => {
    if (imgEle.src.startsWith('blob:')) return imgEle.src;
    const originalUrl = imgEle.src;
    const res = await downloadImg(imgEle.dataset.original);
    if (res.response.size === 0) {
      main.toast.warn(`下载原图时出错: ${imgEle.dataset.page}`);
      return '';
    }
    imgEle.src = URL.createObjectURL(res.response);
    try {
      await helper.waitImgLoad(imgEle, 1000 * 10);
    } catch {
      URL.revokeObjectURL(imgEle.src);
      imgEle.src = originalUrl;
      main.toast.warn(`加载原图时出错: ${imgEle.dataset.page}`);
      return '';
    }
    try {
      // 原有的 canvas 可能已被污染，直接删掉
      if (imgEle.nextElementSibling?.tagName === 'CANVAS') imgEle.nextElementSibling.remove();
      unsafeWindow.onImageLoaded(imgEle);
      const blob = await helper.canvasToBlob(imgEle.nextElementSibling, 'image/webp', 1);
      URL.revokeObjectURL(imgEle.src);
      if (!blob) throw new Error('转换图片时出错');
      return `${URL.createObjectURL(blob)}#.webp`;
    } catch (error) {
      imgEle.src = originalUrl;
      main.toast.warn(`转换图片时出错: ${imgEle.dataset.page}, ${error.message}`);
      return '';
    }
  };

  // 先等懒加载触发完毕
  await helper.wait(() => {
    const loadedNum = helper.querySelectorAll('.lazy-loaded').length;
    return loadedNum > 0 && helper.querySelectorAll('canvas').length - loadedNum <= 1;
  });
  const loadImgList = async setImg => helper.plimit(imgEleList.map((img, i) => async () => {
    setImg(i, await getImgUrl(img));
  }));
  setComicLoad(dynamicLoad(loadImgList, imgEleList.length));
})().catch(error => helper.log.error(error));

        break;
      }

    // #[漫画柜(manhuagui)](https://www.manhuagui.com)
    case 'tw.manhuagui.com':
    case 'm.manhuagui.com':
    case 'www.mhgui.com':
    case 'www.manhuagui.com':
      {
        if (!/\/comic\/\d+\/\d+\.html/.test(window.location.pathname)) break;
        let comicInfo;
        try {
          const dataScript = helper.querySelectorAll('body > script:not([src])').find(script => script.innerHTML.startsWith('window['));
          if (!dataScript) throw new Error(helper.t('site.changed_load_failed'));
          comicInfo = JSON.parse(
          // 只能通过 eval 获得数据
          // eslint-disable-next-line no-eval
          eval(dataScript.innerHTML.slice(26)).match(/(?<=.*?\(){.+}/)[0]);
        } catch {
          main.toast.error(helper.t('site.changed_load_failed'));
          break;
        }

        // 让切换章节的提示可以显示在漫画页上
        GM_addStyle(`#smh-msg-box { z-index: 2147483647 !important }`);
        const handlePrevNext = cid => {
          if (cid === 0) return undefined;
          const newUrl = window.location.pathname.replace(/(?<=\/)\d+(?=\.html)/, `${cid}`);
          return () => window.location.assign(newUrl);
        };
        options = {
          name: 'manhuagui',
          getImgList() {
            const sl = Object.entries(comicInfo.sl).map(attr => `${attr[0]}=${attr[1]}`).join('&');
            if (comicInfo.files) return comicInfo.files.map(file => `${unsafeWindow.pVars.manga.filePath}${file}?${sl}`);
            if (comicInfo.images) {
              const {
                origin
              } = new URL(helper.querySelector('#manga img').src);
              return comicInfo.images.map(url => `${origin}${url}?${sl}`);
            }
            main.toast.error(helper.t('site.changed_load_failed'), {
              throw: true
            });
            return [];
          },
          onNext: handlePrevNext(comicInfo.nextId),
          onPrev: handlePrevNext(comicInfo.prevId)
        };
        break;
      }

    // #[漫画DB(manhuadb)](https://www.manhuadb.com)
    case 'www.manhuadb.com':
      {
        if (!Reflect.has(unsafeWindow, 'img_data_arr')) break;
        options = {
          name: 'manhuaDB',
          getImgList: () => unsafeWindow.img_data_arr.map(data => `${unsafeWindow.img_host}/${unsafeWindow.img_pre}/${data.img}`),
          onPrev: () => unsafeWindow.goNumPage('pre'),
          onNext: () => unsafeWindow.goNumPage('next')
        };
        break;
      }

    // #[动漫屋(dm5)](https://www.dm5.com)
    case 'www.manhuaren.com':
    case 'm.1kkk.com':
    case 'www.1kkk.com':
    case 'tel.dm5.com':
    case 'en.dm5.com':
    case 'www.dm5.cn':
    case 'www.dm5.com':
      {
        if (!Reflect.has(unsafeWindow, 'DM5_CID')) break;
        const imgNum = unsafeWindow.DM5_IMAGE_COUNT ?? unsafeWindow.imgsLen;
        if (!(Number.isSafeInteger(imgNum) && imgNum > 0)) {
          main.toast.error(helper.t('site.changed_load_failed'));
          break;
        }
        const getPageImg = async i => {
          const res = await unsafeWindow.$.ajax({
            type: 'GET',
            url: 'chapterfun.ashx',
            data: {
              cid: unsafeWindow.DM5_CID,
              page: i,
              key: unsafeWindow.$('#dm5_key').length > 0 ? unsafeWindow.$('#dm5_key').val() : '',
              language: 1,
              gtk: 6,
              _cid: unsafeWindow.DM5_CID,
              _mid: unsafeWindow.DM5_MID,
              _dt: unsafeWindow.DM5_VIEWSIGN_DT,
              _sign: unsafeWindow.DM5_VIEWSIGN
            }
          });
          // eslint-disable-next-line no-eval
          return eval(res);
        };
        const handlePrevNext = (pcSelector, mobileText) => helper.querySelectorClick(() => helper.querySelector(pcSelector) ?? helper.querySelectorAll('.view-bottom-bar a').find(e => e.textContent?.includes(mobileText)));
        options = {
          name: 'dm5',
          getImgList({
            dynamicLoad
          }) {
            // manhuaren 和 1kkk 的移动端上会直接用一个变量存储所有图片的链接
            if (Array.isArray(unsafeWindow.newImgs) && unsafeWindow.newImgs.every(helper.isUrl)) return unsafeWindow.newImgs;
            return dynamicLoad(async setImg => {
              const imgList = new Set();
              while (imgList.size < imgNum) {
                // 因为每次会返回指定页数及上一页的图片链接，所以加个1减少请求次数
                for (const url of await getPageImg(imgList.size + 1)) {
                  if (imgList.has(url)) continue;
                  imgList.add(url);
                  setImg(imgList.size - 1, url);
                }
              }
            }, imgNum)();
          },
          onPrev: handlePrevNext('.logo_1', '上一章'),
          onNext: handlePrevNext('.logo_2', '下一章'),
          onExit: isEnd => isEnd && helper.scrollIntoView('.postlist')
        };
        break;
      }

    // #[绅士漫画(wnacg)](https://www.wnacg.com)
    case 'www.wn05.cc':
    case 'www.wn04.cc':
    case 'www.wn03.cc':
    case 'www.wnacg.com':
    case 'wnacg.com':
      {
        // 突出显示下拉阅读的按钮
        const buttonDom = helper.querySelector('#bodywrap a.btn');
        if (buttonDom) {
          buttonDom.style.setProperty('background-color', '#607d8b');
          buttonDom.style.setProperty('background-image', 'none');
        }
        if (!Reflect.has(unsafeWindow, 'imglist')) break;
        options = {
          name: 'wnacg',
          getImgList: () => unsafeWindow.imglist.filter(({
            caption
          }) => caption !== '喜歡紳士漫畫的同學請加入收藏哦！').map(({
            url
          }) => new URL(url, window.location.origin).href)
        };
        break;
      }

    // #[mangabz](https://mangabz.com)
    case 'www.mangabz.com':
    case 'mangabz.com':
      {
        if (!Reflect.has(unsafeWindow, 'MANGABZ_CID')) break;
        const imgNum = unsafeWindow.MANGABZ_IMAGE_COUNT ?? unsafeWindow.imgsLen;
        if (!(Number.isSafeInteger(imgNum) && imgNum > 0)) {
          main.toast.error(helper.t('site.changed_load_failed'));
          break;
        }
        const getPageImg = async i => {
          const res = await unsafeWindow.$.ajax({
            type: 'GET',
            url: 'chapterimage.ashx',
            data: {
              cid: unsafeWindow.MANGABZ_CID,
              page: i,
              key: '',
              _cid: unsafeWindow.MANGABZ_CID,
              _mid: unsafeWindow.MANGABZ_MID,
              _dt: unsafeWindow.MANGABZ_VIEWSIGN_DT,
              _sign: unsafeWindow.MANGABZ_VIEWSIGN
            }
          });
          // eslint-disable-next-line no-eval
          return eval(res);
        };
        const handlePrevNext = (pcSelector, mobileText) => helper.querySelectorClick(() => helper.querySelector(pcSelector) ?? helper.querySelectorAll('.bottom-bar-tool a').find(e => e.textContent?.includes(mobileText)));
        options = {
          name: 'mangabz',
          getImgList: ({
            dynamicLoad
          }) => dynamicLoad(async setImg => {
            const imgList = new Set();
            while (imgList.size < imgNum) {
              // 因为每次会返回指定页数及上一页的图片链接，所以加个1减少请求次数
              for (const url of await getPageImg(imgList.size + 1)) {
                if (imgList.has(url)) continue;
                imgList.add(url);
                setImg(imgList.size - 1, url);
              }
            }
          }, imgNum)(),
          onNext: handlePrevNext('body > .container a[href^="/"]:last-child', '下一'),
          onPrev: handlePrevNext('body > .container a[href^="/"]:first-child', '上一')
        };
        break;
      }

    // #[komiic](https://komiic.com)
    case 'komiic.com':
      {
        const query = `
        query imagesByChapterId($chapterId: ID!) {
          imagesByChapterId(chapterId: $chapterId) {
            id
            kid
            height
            width
            __typename
          }
        }`;
        const getImgList = async () => {
          const chapterId = /chapter\/(\d+)/.exec(window.location.pathname)?.[1];
          if (!chapterId) throw new Error(helper.t('site.changed_load_failed'));
          const res = await main.request('/api/query', {
            method: 'POST',
            responseType: 'json',
            headers: {
              'content-type': 'application/json'
            },
            data: JSON.stringify({
              operationName: 'imagesByChapterId',
              variables: {
                chapterId: `${chapterId}`
              },
              query
            })
          });
          return res.response.data.imagesByChapterId.map(({
            kid
          }) => `https://komiic.com/api/image/${kid}`);
        };
        const handlePrevNext = text => async () => {
          await helper.waitDom('.v-bottom-navigation__content');
          return helper.querySelectorClick('.v-bottom-navigation__content > button:not([disabled])', text);
        };
        options = {
          name: 'komiic',
          getImgList,
          SPA: {
            isMangaPage: () => /comic\/\d+\/chapter\/\d+\/images\//.test(window.location.href),
            getOnPrev: handlePrevNext('上一'),
            getOnNext: handlePrevNext('下一')
          }
        };
        break;
      }

    // #[无限动漫](https://www.comicabc.com)
    case '8.twobili.com':
    case 'a.twobili.com':
    case 'www.comicabc.com':
      {
        const pathStartList = ['/online/', '/ReadComic/', '/comic/'];
        if (!pathStartList.some(path => location.pathname.startsWith(path))) break;
        const getImgList = () => {
          const imgList = [];
          if (Reflect.has(unsafeWindow, 'ss')) {
            const {
              ss,
              c,
              ti,
              nn,
              mm,
              f
            } = unsafeWindow;
            for (let i = 1; i <= unsafeWindow.ps; i++) {
              imgList.push([`https://img${ss(c, 4, 2)}.8comic.com`, ss(c, 6, 1), ti, ss(c, 0, 4),
              // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
              `${nn([i])}_${ss(c, mm([i]) + 10, 3, f)}.jpg`].join('/'));
            }
          } else {
            const mainCode = [...document.scripts].find(s => s.textContent.includes('ge(e)')).textContent;
            // 取得混淆過的關鍵代碼
            const [, keyCode] = /ge\([^.]+\.src\s?=\s?([^;]+)/.exec(mainCode);
            const total = unsafeWindow.ps;
            for (let i = 1; i <= total; i++) {
              // 把關鍵代碼裡的(p)或(pp)替換成頁數(1)
              const code = keyCode.replaceAll(/\(pp?\)/g, `(${i})`);
              // 使用 eval 來取得圖片網址
              // eslint-disable-next-line no-eval
              imgList.push(`${location.protocol}${eval(code)}`);
            }
          }
          return imgList;
        };
        options = {
          name: '8comic',
          getImgList,
          onNext: helper.querySelectorClick('#nextvol'),
          onPrev: helper.querySelectorClick('#prevvol')
        };
        break;
      }

    // #[新新漫画](https://www.77mh.nl)
    case 'm.77mh.me':
    case 'www.77mh.me':
    case 'm.77mh.xyz':
    case 'www.77mh.xyz':
    case 'm.77mh.nl':
    case 'www.77mh.nl':
      {
        if (!Reflect.has(unsafeWindow, 'msg')) break;
        options = {
          name: '77mh',
          async getImgList() {
            const baseUrl = unsafeWindow.img_qianz ?? unsafeWindow.ImgSvrList;
            return unsafeWindow.msg.split('|').map(path => `${baseUrl}${path}`);
          },
          onNext: helper.querySelectorClick('#pnpage > a', '下一'),
          onPrev: helper.querySelectorClick('#pnpage > a', '上一')
        };
        break;
      }

    // #[hitomi](https://hitomi.la)
    case 'hitomi.la':
      {
        options = {
          name: 'hitomi',
          wait: () => Reflect.has(unsafeWindow.galleryinfo, 'files'),
          getImgList: () => (unsafeWindow.galleryinfo?.files).map(img => unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo.id, img, 'webp', undefined, 'a'))
        };
        break;
      }

    // #[koharu](https://koharu.to)
    case 'koharu.to':
      {
        const downloadImg = async url => new Promise(resolve => {
          const xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.open('GET', url);
          xhr.onload = () => {
            resolve(URL.createObjectURL(xhr.response));
          };
          xhr.send();
        });
        const isMangaPage = () => window.location.href.includes('/g/');
        options = {
          name: 'koharu',
          async getImgList({
            dynamicLoad
          }) {
            const [,, galleryId, galleryKey] = window.location.pathname.split('/');
            const detailRes = await main.request(`https://api.koharu.to/books/detail/${galleryId}/${galleryKey}`, {
              fetch: true,
              responseType: 'json'
            });
            const [[w, {
              id,
              public_key
            }]] = Object.entries(detailRes.response.data).filter(([, data]) => data.id && data.public_key).sort(([, a], [, b]) => b.size - a.size);
            const {
              created_at,
              updated_at
            } = detailRes.response;
            const dataRes = await main.request(`https://api.koharu.to/books/data/${galleryId}/${galleryKey}/${id}/${public_key}?v=${updated_at ?? created_at}&w=${w}`, {
              fetch: true,
              responseType: 'json'
            });
            const {
              base,
              entries
            } = dataRes.response;
            const totalPageNum = entries.length;
            return dynamicLoad(async setImg => {
              for (const [i, {
                path,
                dimensions
              }] of entries.entries()) {
                if (!isMangaPage) break;
                const startTime = performance.now();
                setImg(i, await downloadImg(`${base}${path}?w=${dimensions[0]}`));
                await helper.sleep(500 - (performance.now() - startTime));
              }
            }, totalPageNum)();
          },
          SPA: {
            isMangaPage
          }
        };
        break;
      }

    // #[kemono](https://kemono.su)
    case 'kemono.su':
    case 'kemono.party':
      {
const main = require('main');
const helper = require('helper');

(async () => {
  if (!location.pathname.includes('/post/')) return;
  const {
    options,
    setComicLoad,
    showComic,
    switchComic,
    needAutoShow
  } = await main.useInit('kemono', {
    autoShow: false,
    defaultOption: {
      pageNum: 1
    },
    /** 加载原图 */
    load_original_image: true
  });
  setComicLoad(() => helper.querySelectorAll('.post__thumbnail a').map(e => e.href), 'original');
  setComicLoad(() => helper.querySelectorAll('.post__thumbnail img').map(e => e.src), 'thumbnail');

  // 在切换时重新获取图片
  helper.createEffectOn(() => options.load_original_image, (isOriginal, prev) => {
    if (!prev) return switchComic(isOriginal ? 'original' : 'thumbnail');
    needAutoShow.val = options.autoShow;
    showComic(isOriginal ? 'original' : 'thumbnail');
  });

  // 加上跳转至 pwa 的链接
  const zipExtension = new Set(['zip', 'rar', '7z', 'cbz', 'cbr', 'cb7']);
  for (const e of helper.querySelectorAll('.post__attachment a')) {
    if (!zipExtension.has(e.href.split('.').pop())) continue;
    const a = document.createElement('a');
    a.href = `https://comic-read.pages.dev/?url=${encodeURIComponent(e.href)}`;
    a.textContent = e.textContent.replace('Download ', 'ComicReadPWA - ');
    a.className = e.className;
    a.style.opacity = '.6';
    e.parentNode.insertBefore(a, e.nextElementSibling);
  }
})();

        break;
      }

    // #[nekohouse](https://nekohouse.su)
    case 'nekohouse.su':
      {
        options = {
          name: 'nekohouse',
          getImgList: () => helper.querySelectorAll('.fileThumb').map(e => e.getAttribute('href')),
          initOptions: {
            autoShow: false,
            defaultOption: {
              pageNum: 1
            }
          }
        };
        break;
      }

    // #[welovemanga](https://welovemanga.one)
    case 'nicomanga.com':
    case 'weloma.art':
    case 'welovemanga.one':
      {
        if (!helper.querySelector('#listImgs, .chapter-content')) break;
        const getImgList = async () => {
          const imgList = helper.querySelectorAll('img.chapter-img:not(.ls-is-cached)').map(e => (e.dataset.src ?? e.dataset.srcset ?? e.dataset.original ?? e.src).trim());
          if (imgList.length > 0 && imgList.every(url => !/loading.*\.gif/.test(url))) return imgList;
          await helper.sleep(500);
          return getImgList();
        };
        options = {
          name: 'welovemanga',
          getImgList,
          onNext: helper.querySelectorClick('.rd_top-right.next:not(.disabled)'),
          onPrev: helper.querySelectorClick('.rd_top-left.prev:not(.disabled)')
        };
        break;
      }

    // 为 pwa 版页面提供 api，以便翻译功能能正常运作
    // case 'localhost':
    case 'comic-read.pages.dev':
      {
        unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest;
        unsafeWindow.toast = main.toast;
        break;
      }
    default:
      {
const web = require('solid-js/web');
const helper = require('helper');
const Manga = require('components/Manga');
const main = require('main');

const getTagText = ele => {
  let text = ele.nodeName;
  if (ele.id && !/\d/.test(ele.id)) text += `#${ele.id}`;
  return text;
};

/** 获取元素仅记录了层级结构关系的选择器 */
const getEleSelector = ele => {
  const parents = [ele.nodeName];
  const root = ele.getRootNode();
  let e = ele;
  while (e.parentNode && e.parentNode !== root) {
    e = e.parentNode;
    parents.push(getTagText(e));
  }
  return parents.reverse().join('>');
};

/** 判断指定元素是否符合选择器 */
const isEleSelector = (ele, selector) => {
  const parents = selector.split('>').reverse();
  let e = ele;
  for (let i = 0; e && i < parents.length; i++) {
    if (getTagText(e) !== parents[i]) return false;
    e = e.parentNode;
  }
  return e === e.getRootNode();
};

// 目录页和漫画页的图片层级相同
// https://www.biliplus.com/manga/
// 图片路径上有 id 元素并且 id 含有漫画 id，不同话数 id 也不同
const createImgData = (oldSrc = '') => ({
  triggedNum: 0,
  observerTimeout: 0,
  oldSrc
});

/** 用于判断是否是图片 url 的正则 */
const isImgUrlRe = /^(((https?|ftp|file):)?\/)?\/[-\w+&@#/%?=~|!:,.;]+[-\w+&@#%=~|]$/;

/** 找出格式为图片 url 的元素属性 */
const getDatasetUrl = e => {
  for (const key of e.getAttributeNames()) {
    // 跳过白名单
    switch (key) {
      case 'src':
      case 'alt':
      case 'class':
      case 'style':
      case 'id':
      case 'title':
      case 'onload':
      case 'onerror':
        continue;
    }
    const val = e.getAttribute(key).trim();
    if (!isImgUrlRe.test(val)) continue;
    return val;
  }
};

/**
 *
 * 通过滚动到指定图片元素位置并停留一会来触发图片的懒加载，返回图片 src 是否发生变化
 *
 * 会在触发后重新滚回原位，当 time 为 0 时，因为滚动速度很快所以是无感的
 */
const triggerEleLazyLoad = async (e, time, isLazyLoaded, runCondition) => {
  const nowScroll = window.scrollY;
  e.scrollIntoView({
    behavior: 'instant'
  });
  e.dispatchEvent(new Event('scroll', {
    bubbles: true
  }));
  try {
    if (isLazyLoaded && time) return await helper.wait(isLazyLoaded, time);
  } finally {
    if (runCondition()) window.scroll({
      top: nowScroll,
      behavior: 'instant'
    });
  }
};

/** 判断一个元素是否已经触发完懒加载 */
const isLazyLoaded = (e, oldSrc) => {
  if (!e.src) return false;
  if (!e.offsetParent) return false;
  // 有些网站会使用 svg 占位
  if (e.src.startsWith('data:image/svg')) return false;
  if (oldSrc !== undefined && e.src !== oldSrc) return true;
  if (e.naturalWidth > 500 || e.naturalHeight > 500) return true;
  return false;
};
const imgMap = new WeakMap();
// eslint-disable-next-line no-autofix/prefer-const
let imgShowObserver;
const getImg = e => imgMap.get(e) ?? createImgData();
const MAX_TRIGGED_NUM = 5;

/** 判断图片元素是否需要触发懒加载 */
const needTrigged = e => !isLazyLoaded(e, imgMap.get(e)?.oldSrc) && (imgMap.get(e)?.triggedNum ?? 0) < MAX_TRIGGED_NUM;

/** 图片懒加载触发完后调用 */
const handleTrigged = e => {
  const img = getImg(e);
  img.observerTimeout = 0;
  img.triggedNum += 1;
  if (isLazyLoaded(e, img.oldSrc) && img.triggedNum < MAX_TRIGGED_NUM) img.triggedNum = MAX_TRIGGED_NUM;
  imgMap.set(e, img);
  if (!needTrigged(e)) imgShowObserver.unobserve(e);
};

/** 监视图片是否被显示的 Observer */
imgShowObserver = new IntersectionObserver(entries => {
  for (const img of entries) {
    const ele = img.target;
    if (img.isIntersecting) {
      imgMap.set(ele, {
        ...getImg(ele),
        observerTimeout: window.setTimeout(handleTrigged, 290, ele)
      });
    } else {
      const timeoutID = imgMap.get(ele)?.observerTimeout;
      if (timeoutID) window.clearTimeout(timeoutID);
    }
  }
});
const turnPageScheduled = helper.createScheduled(fn => helper.throttle(fn, 1000));
/** 触发翻页 */
const triggerTurnPage = async (waitTime, runCondition) => {
  if (!turnPageScheduled()) return;
  const nowScroll = window.scrollY;
  // 滚到底部再滚回来，触发可能存在的自动翻页脚本
  window.scroll({
    top: document.body.scrollHeight,
    behavior: 'instant'
  });
  document.body.dispatchEvent(new Event('scroll', {
    bubbles: true
  }));
  if (waitTime) await helper.sleep(waitTime);
  if (runCondition()) window.scroll({
    top: nowScroll,
    behavior: 'instant'
  });
};
const waitTime = 300;

/** 触发页面上所有图片元素的懒加载 */
const triggerLazyLoad = helper.singleThreaded(async (state, getAllImg, runCondition) => {
  // 过滤掉已经被触发过懒加载的图片
  const targetImgList = getAllImg().filter(needTrigged).sort((a, b) => a.getBoundingClientRect().y - b.getBoundingClientRect().y);
  for (const e of targetImgList) {
    imgShowObserver.observe(e);
    if (!imgMap.has(e)) imgMap.set(e, createImgData(e.src));
  }
  for (const e of targetImgList) {
    await helper.wait(runCondition);
    await triggerTurnPage(0, runCondition);
    if (!needTrigged(e)) continue;
    const datasetUrl = getDatasetUrl(e);
    if (datasetUrl) e.setAttribute('src', datasetUrl);
    if (await triggerEleLazyLoad(e, waitTime, () => isLazyLoaded(e, imgMap.get(e)?.oldSrc), runCondition)) handleTrigged(e);
  }
  await triggerTurnPage(waitTime, runCondition);
  if (targetImgList.length > 0) state.continueRun = true;
});


// 测试案例
// https://www.177picyy.com/html/2023/03/5505307.html
// 需要配合其他翻页脚本使用
// https://www.colamanga.com/manga-za76213/1/5.html
// 直接跳转到图片元素不会立刻触发，还需要停留20ms
// https://www.colamanga.com/manga-kg45140/1/2.html
(async () => {
  /** 执行脚本操作。如果中途中断，将返回 true */
  const start = async () => {
    const {
      options,
      setComicLoad,
      setComicMap,
      setManga,
      setFab,
      setOptions,
      isStored,
      mangaProps
    } = await main.useInit(window.location.hostname, {
      remember_current_site: true,
      selector: ''
    });

    // 通过 options 来迂回的实现禁止记住当前站点
    if (!options.remember_current_site) {
      await GM.deleteValue(window.location.hostname);
      return true;
    }
    if (!isStored) main.toast(() => (() => {
      var _el$ = web.template(`<div><button>`)(),
        _el$2 = _el$.firstChild;
      web.insert(_el$, () => helper.t('site.simple.auto_read_mode_message'), _el$2);
      _el$2.addEventListener("click", () => setOptions({
        autoShow: false
      }));
      web.insert(_el$2, () => helper.t('other.disable'));
      return _el$;
    })(), {
      duration: 1000 * 7
    });

    // 为避免卡死，提供一个删除 selector 的菜单项
    const menuId = console.debug(helper.t('site.simple.simple_read_mode'), () => setOptions({
      selector: ''
    }));

    // 等待 selector 匹配到目标后再继续执行，避免在漫画页外的其他地方运行
    await helper.wait(() => !options.selector || helper.querySelectorAll(options.selector).length >= 2);
    console.debug(menuId);

    /** 记录传入的图片元素中最常见的那个 selector */
    const saveImgEleSelector = imgEleList => {
      if (imgEleList.length < 7) return;
      const selector = helper.getMostItem(imgEleList.map(getEleSelector));
      if (selector !== options.selector) setOptions({
        selector
      });
    };
    const blobUrlMap = new Map();
    // 处理那些 URL.createObjectURL 后马上 URL.revokeObjectURL 的图片
    const handleBlobImg = async e => {
      if (blobUrlMap.has(e.src)) return blobUrlMap.get(e.src);
      if (!e.src.startsWith('blob:')) return e.src;
      if (await helper.testImgUrl(e.src)) return e.src;
      const canvas = document.createElement('canvas');
      const canvasCtx = canvas.getContext('2d');
      canvas.width = e.naturalWidth;
      canvas.height = e.naturalHeight;
      canvasCtx.drawImage(e, 0, 0);
      const url = URL.createObjectURL(await helper.canvasToBlob(canvas));
      blobUrlMap.set(e.src, url);
      return url;
    };
    const handleImgUrl = async e => {
      const url = await handleBlobImg(e);
      if (url.startsWith('http:') && window.location.protocol === 'https:') return url.replace('http:', 'https:');
      return url;
    };

    /** 重复的加载占位图 */
    const placeholderImgList = new Set();
    helper.createEffectOn(() => mangaProps.imgList.filter(url => url && !placeholderImgList.has(url)), helper.throttle(imgList => {
      if (!imgList?.length || imgList.length - new Set(imgList).size <= 4) return;
      const repeatNumMap = new Map();
      for (const url of imgList) {
        const repeatNum = (repeatNumMap.get(url) ?? 0) + 1;
        repeatNumMap.set(url, repeatNum);
        if (repeatNum > 5) placeholderImgList.add(url);
      }
    }));
    const imgBlackList = [
    // 东方永夜机的预加载图片
    '#pagetual-preload',
    // 177picyy 上会在图片下加一个 noscript
    // 本来只是图片元素的 html 代码，但经过东方永夜机加载后就会变成真的图片元素，导致重复
    'noscript'];
    const getAllImg = () => helper.querySelectorAll(`:not(${imgBlackList.join(',')}) > img`);
    let imgEleList;
    let updateImgListTimeout;
    /** 检查筛选符合标准的图片元素用于更新 imgList */
    const updateImgList = helper.singleThreaded(async () => {
      imgEleList = await helper.wait(() => {
        const newImgList = getAllImg().filter(e => e.offsetHeight > 100 && e.offsetWidth > 100 && (e.naturalHeight > 500 && e.naturalWidth > 500 || isEleSelector(e, options.selector))).sort((a, b) => a.getBoundingClientRect().y - b.getBoundingClientRect().y);
        return newImgList.length >= 2 && newImgList;
      });
      if (imgEleList.length === 0) {
        setFab('show', false);
        setManga('show', false);
        return;
      }
      let newImgEleList = imgEleList;

      /** 预计的图片总数 */
      let expectCount = 0;
      /** 还需要继续触发懒加载的图片个数 */
      let needTriggedNum = 0;
      if (options.selector) {
        const expectImgList = helper.querySelectorAll(options.selector);
        expectCount = expectImgList.filter(e => !imgMap.get(e)?.triggedNum || isLazyLoaded(e, imgMap.get(e)?.oldSrc)).length;
        needTriggedNum = expectImgList.filter(needTrigged).length;
        // 根据预计的图片总数补上占位的空图
        const fillImgNum = expectCount - imgEleList.length;
        if (fillImgNum > 0) newImgEleList = [...imgEleList, ...Array.from({
          length: fillImgNum
        })];
      }
      let isEdited = false;
      await helper.plimit(newImgEleList.map((e, i) => async () => {
        let newUrl = '';
        if (e) {
          newUrl = await handleImgUrl(e);
          if (placeholderImgList.has(newUrl)) newUrl = getDatasetUrl(e) ?? '';
        }
        if (newUrl === mangaProps.imgList[i]) return;
        isEdited ||= true;
        setComicMap('', 'imgList', i, newUrl);
      }));
      if (isEdited) saveImgEleSelector(imgEleList);

      // colamanga 会创建随机个数的假 img 元素，导致刚开始时高估页数，需要再删掉多余的页数
      if (mangaProps.imgList.length > newImgEleList.length) setComicMap('', 'imgList', mangaProps.imgList.slice(0, newImgEleList.length));
      if (isEdited || needTriggedNum || imgEleList.some(e => !e.naturalWidth && !e.naturalHeight)) {
        if (updateImgListTimeout) window.clearTimeout(updateImgListTimeout);
        updateImgListTimeout = window.setTimeout(updateImgList, 1000);
      }
    });
    let timeout = false;
    const triggerAllLazyLoad = () => triggerLazyLoad(getAllImg,
    // 只在`开启了阅读模式`和`当前可显示图片数量不足`时通过滚动触发懒加载
    () => mangaProps.show || !timeout && mangaProps.imgList.length === 0);

    /** 监视页面元素发生变化的 Observer */
    const imgDomObserver = new MutationObserver(() => {
      updateImgList();
      triggerAllLazyLoad();
    });
    setComicLoad(async () => {
      if (!imgEleList) {
        imgEleList = [];
        imgDomObserver.observe(document.body, {
          subtree: true,
          childList: true,
          attributes: true,
          attributeFilter: ['src']
        });
        updateImgList();
        triggerAllLazyLoad();
        setTimeout(() => {
          timeout = true;
          if (mangaProps.imgList.length > 0) return;
          main.toast.warn(helper.t('site.simple.no_img'), {
            id: 'no_img',
            duration: Number.POSITIVE_INFINITY,
            async onClick() {
              await setOptions({
                remember_current_site: false
              });
              window.location.reload();
            }
          });
        }, 3000);
      }
      await helper.wait(() => mangaProps.imgList.length);
      main.toast.dismiss('no_img');
      return mangaProps.imgList;
    });

    // 同步滚动显示网页上的图片，用于以防万一保底触发漏网之鱼
    helper.createEffectOn(Manga.renderImgList, helper.throttle(list => {
      if (list.size === 0 || !mangaProps.show) return;
      const lastImgIndex = [...list].at(-1);
      if (lastImgIndex === undefined) return;
      imgEleList[lastImgIndex]?.scrollIntoView({
        behavior: 'instant',
        block: 'end'
      });
    }, 1000), {
      defer: true
    });

    // 在退出阅读模式时跳回之前的滚动位置
    let laseScroll = window.scrollY;
    helper.createEffectOn(() => mangaProps.show, show => {
      if (show) laseScroll = window.scrollY;else window.scroll({
        top: laseScroll,
        behavior: 'instant'
      });
    });
  };
  if ((await GM.getValue(window.location.hostname)) !== undefined) return requestIdleCallback(start);
  const menuId = console.debug(((lang) => {
            switch (lang) {
              case 'en': return 'Enter simple reading mode';case 'ru': return 'Включить простой режим чтения';
              default: return '使用简易阅读模式';
            }
          })(await helper.getInitLang()), async () => !(await start()) && GM.unregisterMenuCommand(menuId));
})().catch(error => helper.log.error(error));

      }
  }
  if (options) main.universal(options);
} catch (error) {
  helper.log.error(error);
}
