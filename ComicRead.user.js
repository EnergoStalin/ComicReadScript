// ==UserScript==
// @name            ComicRead
// @namespace       ComicRead
// @version         7.3.1
// @description     为漫画站增加双页阅读、翻译等优化体验的增强功能。百合会——「记录阅读历史，体验优化」、百合会新站、动漫之家——「解锁隐藏漫画」、ehentai——「匹配 nhentai 漫画」、nhentai——「彻底屏蔽漫画，自动翻页」、PonpomuYuri、明日方舟泰拉记事社、禁漫天堂、拷贝漫画(copymanga)、漫画柜(manhuagui)、漫画DB(manhuadb)、动漫屋(dm5)、绅士漫画(wnacg)、mangabz、komiic、hitomi、kemono、welovemanga
// @description:en  Add enhanced features to the comic site for optimized experience, including dual-page reading and translation.
// @description:ru  Добавляет расширенные функции для удобства на сайт, такие как двухстраничный режим и перевод.
// @author          hymbz
// @license         AGPL-3.0-or-later
// @noframes
// @match           *://*/*
// @connect         cdn.jsdelivr.net
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
// @connect         self
// @connect         127.0.0.1
// @connect         *
// @grant           GM_addElement
// @grant           GM_getResourceText
// @grant           GM_xmlhttpRequest
// @grant           GM.addValueChangeListener
// @grant           GM.removeValueChangeListener
// @grant           GM.getResourceText
// @grant           GM.addStyle
// @grant           GM.getValue
// @grant           GM.setValue
// @grant           GM.listValues
// @grant           GM.deleteValue
// @grant           GM.registerMenuCommand
// @grant           GM.unregisterMenuCommand
// @grant           unsafeWindow
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURUxpcWB9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i////198il17idng49DY3PT297/K0MTP1M3X27rHzaCxupmstbTByK69xOfr7bfFy3WOmqi4wPz9/X+XomSBjqW1vZOmsN/l6GmFkomeqe7x8vn6+kv+1vUAAAAOdFJOUwDsAoYli9zV+lIqAZEDwV05SQAAAUZJREFUOMuFk+eWgjAUhGPBiLohjZACUqTp+z/gJkqJy4rzg3Nn+MjhwB0AANjv4BEtdITBHjhtQ4g+CIZbC4Qb9FGb0J4P0YrgCezQqgIA14EDGN8fYz+f3BGMASFkTJ+GDAYMUSONzrFL7SVvjNQIz4B9VERRmV0rbJWbrIwidnsd6ACMlEoip3uad3X2HJmqb3gCkkJELwk5DExRDxA6HnKaDEPSsBnAsZoANgJaoAkg12IJqBiPACImXQKF9IDULIHUkOk7kDpeAMykHqCEWACy8ACdSM7LGSg5F3HtAU1rrkaK9uGAshXS2lZ5QH/nVhmlD8rKlmbO3ZsZwLe8qnpdxJRnLaci1X1V5R32fjd5CndVkfYdGpy3D+htU952C/ypzPtdt3JflzZYBy7fi/O1euvl/XH1Pp+Cw3/1P1xOZwB+AWMcP/iw0AlKAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC
// @resource        solid-js https://unpkg.com/solid-js@1.7.3/dist/solid.cjs
// @resource        solid-js/store https://unpkg.com/solid-js@1.7.3/store/dist/store.cjs
// @resource        solid-js/web https://unpkg.com/solid-js@1.7.3/web/dist/web.cjs
// @resource        panzoom https://unpkg.com/panzoom@9.4.3/dist/panzoom.min.js
// @resource        fflate https://unpkg.com/fflate@0.7.4/umd/index.js
// @resource        dmzjDecrypt https://greasyfork.org/scripts/467177-dmzjdecrypt/code/dmzjDecrypt.js?version=1207199
// @supportURL      https://github.com/hymbz/ComicReadScript/issues
// @updateURL       https://github.com/hymbz/ComicReadScript/raw/master/ComicRead.user.js
// @downloadURL     https://github.com/hymbz/ComicReadScript/raw/master/ComicRead.user.js
// ==/UserScript==

/**
 * 虽然在打包的时候已经尽可能保持代码格式不变了，但因为脚本代码比较多的缘故
 * 所以真对脚本代码感兴趣的话，推荐还是直接上 github 仓库来看
 * <https://github.com/hymbz/ComicReadScript>
 * 对站点逻辑感兴趣的，结合 `src\index.ts` 看 `src\site` 下的对应文件即可
 */

const gmApi = {
  GM,
  GM_addElement,
  GM_getResourceText,
  GM_xmlhttpRequest,
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

/**
 * 通过 Resource 导入外部模块
 * @param name \@resource 引用的资源名
 */
const selfImportSync = name => {
  const code = name !== 'main' ? GM_getResourceText(name) :`
const solidJs = require('solid-js');
const web = require('solid-js/web');
const store$2 = require('solid-js/store');
const fflate = require('fflate');
const createPanZoom = require('panzoom');
const main = require('main');

const sleep = ms => new Promise(resolve => {
  window.setTimeout(resolve, ms);
});
const clamp = (min, val, max) => Math.max(Math.min(max, val), min);

/** 根据传入的条件列表的真假，对 val 进行取反 */
const ifNot = (val, ...conditions) => {
  let res = !!val;
  conditions.forEach(v => {
    if (v) res = !res;
  });
  return res;
};

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

/**
 * 添加元素
 * @param node 被添加元素
 * @param textnode 添加元素
 * @param referenceNode 参考元素，添加元素将插在参考元素前
 */
const insertNode = (node, textnode, referenceNode = null) => {
  const temp = document.createElement('div');
  temp.innerHTML = textnode;
  const frag = document.createDocumentFragment();
  while (temp.firstChild) frag.appendChild(temp.firstChild);
  node.insertBefore(frag, referenceNode);
};

/** 返回 Dom 的点击函数 */
const querySelectorClick = selector => {
  const getDom = () => typeof selector === 'string' ? querySelector(selector) : selector();
  if (getDom()) return () => getDom()?.click();
};

/** 判断两个列表中包含的值是否相同 */
const isEqualArray = (a, b) => a.length === b.length && !a.some(t => !b.includes(t));

/** 找出数组中出现最多次的元素 */
const getMostItem = list => {
  const counts = list.reduce((map, val) => {
    map.set(val, map.get(val) ?? 0 + 1);
    return map;
  }, new Map());
  return [...counts.entries()].reduce((maxItem, item) => maxItem[1] > item[1] ? maxItem : item)[0];
};

/** 将数组扩充到指定长度，不足项用空字符串补足 */
const createFillImgList = (imgList, length) => [...imgList, ...Array(length - imgList.length).fill('')];

/** 将对象转为 URLParams 类型的字符串 */
const dataToParams = data => Object.entries(data).map(([key, val]) => \`\${key}=\${val}\`).join('&');

/** 将 blob 数据作为文件保存至本地 */
const saveAs = (blob, name = 'download') => {
  const a = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
  a.download = name;
  a.rel = 'noopener';
  a.href = URL.createObjectURL(blob);
  setTimeout(() => a.dispatchEvent(new MouseEvent('click')));
};

/** 监听键盘事件 */
const linstenKeyup = handler => window.addEventListener('keyup', e => {
  // 跳过输入框的键盘事件
  switch (e.target.tagName) {
    case 'INPUT':
    case 'TEXTAREA':
      return;
  }
  handler(e);
});

/** 滚动页面到指定元素的所在位置 */
const scrollIntoView = selector => querySelector(selector)?.scrollIntoView();

/** 循环执行指定函数 */
const loop = async (fn, ms = 0) => {
  await fn();
  setTimeout(loop, ms, fn);
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
  while (doneNum !== totalNum) {
    while (taskList.length && execPool.size < limit) {
      taskList.shift()();
    }
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
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq < 128;
};

/** 等到传入的函数返回 true */
const wait = async (fn, timeout = Infinity) => {
  let res = await fn();
  let _timeout = timeout;
  while (_timeout > 0 && !res) {
    res = await fn();
    await sleep(10);
    _timeout -= 10;
  }
  return res;
};

/** 等到指定的 dom 出现 */
const waitDom = selector => wait(() => querySelector(selector));

/** 等待指定的图片元素加载完成 */
const waitImgLoad = (img, timeout = 1000 * 10) => new Promise(resolve => {
  const id = window.setTimeout(() => resolve(new ErrorEvent('timeout')), timeout);
  img.addEventListener('load', () => {
    resolve(null);
    window.clearTimeout(id);
  });
  img.addEventListener('error', e => {
    resolve(e);
    window.clearTimeout(id);
  });
});

/**
 *
 * 通过滚动到指定图片元素位置并停留一会来触发图片的懒加载
 *
 * 会在触发后重新滚回原位，当 time 为 0 时，因为滚动速度很快所以是无感的
 */
const triggerEleLazyLoad = async (e, time = 0, oldSrc = e.src) => {
  const nowScroll = window.scrollY;
  e.scrollIntoView();
  e.dispatchEvent(new Event('scroll', {
    bubbles: true
  }));
  if (time) await wait(() => e.src !== oldSrc, time);
  window.scroll({
    top: nowScroll,
    behavior: 'auto'
  });
};

/** 测试图片 url 能否正确加载 */
const testImgUrl = url => new Promise(resolve => {
  const img = new Image();
  img.onload = () => resolve(true);
  img.onerror = () => resolve(false);
  img.src = url;
});
const canvasToBlob = (canvas, type, quality) => new Promise((resolve, reject) => {
  canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('Canvas toBlob failed')), type, quality);
});

/**
 * 求 a 和 b 的差集，相当于从 a 中删去和 b 相同的属性
 *
 * 不会修改参数对象，返回的是新对象
 */
const difference = (a, b) => {
  const res = {};
  const keys = Object.keys(a);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (typeof a[key] === 'object' && typeof b[key] === 'object') {
      const _res = difference(a[key], b[key]);
      if (Object.keys(_res).length) res[key] = _res;
    } else if (a[key] !== b?.[key]) res[key] = a[key];
  }
  return res;
};

/**
 * Object.assign 的深拷贝版，不会导致 a 子对象属性的缺失
 *
 * 不会修改参数对象，返回的是新对象
 */
const assign = (a, b) => {
  const res = JSON.parse(JSON.stringify(a));
  const keys = Object.keys(b);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (res[key] === undefined) res[key] = b[key];else if (typeof b[key] === 'object') {
      const _res = assign(res[key], b[key]);
      if (Object.keys(_res).length) res[key] = _res;
    } else if (res[key] !== b[key]) res[key] = b[key];
  }
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

/**
 * 通过监视点击等会触发动态加载的事件，在触发动态加载后更新图片列表等
 * @param update 动态加载后的重新加载
 */
const autoUpdate = update => {
  let running = false;
  const refresh = async () => {
    running = true;
    try {
      await update();
    } finally {
      running = false;
    }
  };
  ['click', 'popstate'].forEach(eventName => {
    window.addEventListener(eventName, () => setTimeout(() => {
      if (running) return;
      refresh();
    }, 100));
  });
  refresh();
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

const prefix = ['%cComicRead', 'background-color: #607d8b; color: white; padding: 2px 4px; border-radius: 4px;'];
const log = (...args) =>
// eslint-disable-next-line no-console
console.log.apply(null, [...prefix, ...args]);
log.warn = (...args) =>
// eslint-disable-next-line no-console
console.warn.apply(null, [...prefix, ...args]);
log.error = (...args) =>
// eslint-disable-next-line no-console
console.error.apply(null, [...prefix, ...args]);

const langList = ['zh', 'en', 'ru'];
/** 判断传入的字符串是否是支持的语言类型代码 */
const isLanguages = lang => !!lang && langList.includes(lang);

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
const getSaveLang = () => typeof GM !== 'undefined' ? GM.getValue('Languages') : localStorage.getItem('Languages');
const setSaveLang = val => typeof GM !== 'undefined' ? GM.setValue('Languages', val) : localStorage.setItem('Languages', val);
const getInitLang = async () => {
  const saveLang = await getSaveLang();
  if (isLanguages(saveLang)) return saveLang;
  const lang = getBrowserLang() ?? 'zh';
  setSaveLang(lang);
  return lang;
};

const zh = {
  alert: {
    comic_load_error: "漫画加载出错",
    download_failed: "下载失败",
    fetch_comic_img_failed: "获取漫画图片失败",
    img_load_failed: "图片加载失败",
    repeat_load: "加载图片中，请稍候",
    server_connect_failed: "无法连接到服务器"
  },
  button: {
    close_current_page_translation: "关闭当前页的翻译",
    download: "下载",
    download_completed: "下载完成",
    downloading: "下载中",
    exit: "退出",
    packaging: "打包中",
    page_fill: "页面填充",
    page_mode_double: "双页模式",
    page_mode_single: "单页模式",
    scroll_mode: "卷轴模式",
    setting: "设置",
    translate_current_page: "翻译当前页",
    zoom_in: "放大"
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
    jump_to_end: "跳至尾页",
    jump_to_home: "跳至首页",
    switch_auto_enlarge: "切换图片自动放大选项",
    switch_dir: "切换阅读方向",
    switch_page_fill: "切换页面填充",
    switch_scroll_mode: "切换卷轴模式",
    switch_single_double_page_mode: "切换单双页模式",
    turn_page_down: "向下翻页",
    turn_page_left: "向左翻页",
    turn_page_right: "向右翻页",
    turn_page_up: "向上翻页"
  },
  img_status: {
    error: "加载出错",
    loading: "正在加载",
    wait: "等待加载"
  },
  other: {
    auto_enter_read_mode: "自动进入阅读模式",
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
    tip_md: "# ComicRead PWA\\n使用 [ComicRead](https://github.com/hymbz/ComicReadScript) 的阅读模式阅读**本地**漫画\\n---\\n### 将图片文件、文件夹、压缩包直接拖入即可开始阅读\\n*也可以选择输入压缩包 URL 下载阅读*"
  },
  setting: {
    hotkeys: {
      add: "添加新快捷键",
      restore: "恢复默认快捷键"
    },
    language: "语言",
    option: {
      always_load_all_img: "始终加载所有图片",
      background_color: "背景颜色",
      click_page_turn_enabled: "启用点击翻页",
      click_page_turn_swap_area: "左右点击区域交换",
      click_page_turn_vertical: "上下翻页",
      dark_mode: "启用夜间模式",
      dir_ltr: "从左到右（美漫）",
      dir_rtl: "从右到左（日漫）",
      disable_auto_enlarge: "禁止图片自动放大",
      first_page_fill: "默认启用首页填充",
      jump_to_next_chapter: "翻页至上/下一话",
      paragraph_dir: "阅读方向",
      paragraph_display: "显示",
      paragraph_hotkeys: "快捷键",
      paragraph_operation: "操作",
      paragraph_other: "其他",
      paragraph_scrollbar: "滚动条",
      paragraph_translation: "翻译",
      preload_page_num: "预加载页数",
      scrollbar_auto_hidden: "自动隐藏滚动条",
      scrollbar_show: "显示滚动条",
      scrollbar_show_img_status: "显示图片加载状态",
      show_clickable_area: "显示点击区域",
      show_comments: "在结束页显示评论",
      swap_page_turn_key: "左右翻页键交换"
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
        target_language: "目标语言",
        text_detector: "文本扫描器",
        translator: "翻译服务"
      },
      server: "翻译服务器",
      server_selfhosted: "本地部署",
      translate_all_img: "翻译全部图片"
    }
  },
  site: {
    add_feature: {
      associate_nhentai: "关联nhentai",
      auto_page_turn: "自动翻页",
      block_totally: "彻底屏蔽漫画",
      hotkeys_page_turn: "快捷键翻页",
      open_link_new_page: "在新页面中打开链接",
      remember_current_site: "记住当前站点"
    },
    ehentai: {
      fetch_img_page_source_failed: "获取图片页源码失败",
      fetch_img_page_url_failed: "从详情页获取图片页地址失败",
      fetch_img_url_failed: "从图片页获取图片地址失败",
      html_changed_load_failed: "页面结构发生改变，无法加载漫画",
      html_changed_nhentai_failed: "页面结构发生改变，关联 nhentai 漫画功能无法正常生效",
      ip_banned: "IP地址被禁",
      nhentai_error: "nhentai 匹配出错",
      nhentai_failed: "匹配失败，请在确认登录 {{nhentai}} 后刷新"
    },
    nhentai: {
      fetch_next_page_failed: "获取下一页漫画数据失败",
      tag_blacklist_fetch_failed: "标签黑名单获取失败"
    },
    settings_tip: "设置",
    show_settings_menu: "显示设置菜单",
    simple: {
      auto_read_mode_message: "已默认开启「自动进入阅读模式」",
      simple_read_mode: "使用简易阅读模式"
    }
  },
  touch_area: {
    menu: "菜 单",
    next: "下 一 页",
    prev: "上 一 页"
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
    repeat_load: "Loading image, please wait",
    server_connect_failed: "Unable to connect to the server"
  },
  button: {
    close_current_page_translation: "Close translation of the current page",
    download: "Download",
    download_completed: "Download completed",
    downloading: "Downloading",
    exit: "Exit",
    packaging: "Packaging",
    page_fill: "Page fill",
    page_mode_double: "Double page mode",
    page_mode_single: "Single page mode",
    scroll_mode: "Scroll mode",
    setting: "Settings",
    translate_current_page: "Translate current page",
    zoom_in: "Zoom in"
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
    jump_to_end: "Jump to the last page",
    jump_to_home: "Jump to the first page",
    switch_auto_enlarge: "Switch auto image enlarge option",
    switch_dir: "Switch reading direction",
    switch_page_fill: "Switch page fill",
    switch_scroll_mode: "Switch scroll mode",
    switch_single_double_page_mode: "Switch single/double page mode",
    turn_page_down: "Turn the page to the down",
    turn_page_left: "Turn the page to the left",
    turn_page_right: "Turn the page to the right",
    turn_page_up: "Turn the page to the up"
  },
  img_status: {
    error: "Load Error",
    loading: "Loading",
    wait: "Waiting for load"
  },
  other: {
    auto_enter_read_mode: "Auto enter reading mode",
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
    tip_md: "# ComicRead PWA\\nRead **local** comics using [ComicRead](https://github.com/hymbz/ComicReadScript) reading mode.\\n---\\n### Drag and drop image files, folders, or compressed files directly to start reading\\n*You can also choose to enter the URL of the compressed file for downloading and reading*"
  },
  setting: {
    hotkeys: {
      add: "Add new hotkeys",
      restore: "Restore default hotkeys"
    },
    language: "Language",
    option: {
      always_load_all_img: "Always load all images",
      background_color: "Background Color",
      click_page_turn_enabled: "Enable click to turn page",
      click_page_turn_swap_area: "Swap LR clickable areas",
      click_page_turn_vertical: "Vertically arranged clickable areas",
      dark_mode: "Enable dark mode",
      dir_ltr: "LTR (American comics)",
      dir_rtl: "RTL (Japanese manga)",
      disable_auto_enlarge: "Disable automatic image enlarge",
      first_page_fill: "Enable first page fill by default",
      jump_to_next_chapter: "Turn to the next/previous chapter",
      paragraph_dir: "Reading direction",
      paragraph_display: "Display",
      paragraph_hotkeys: "Hotkeys",
      paragraph_operation: "Operation",
      paragraph_other: "Other",
      paragraph_scrollbar: "Scrollbar",
      paragraph_translation: "Translation",
      preload_page_num: "Preload page number",
      scrollbar_auto_hidden: "Auto hide the scrollbar",
      scrollbar_show: "Show scrollbar",
      scrollbar_show_img_status: "Show image loading status",
      show_clickable_area: "Show clickable areas",
      show_comments: "Show comments on the end page",
      swap_page_turn_key: "Swap LR page-turning keys"
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
        target_language: "Target language",
        text_detector: "Text detector",
        translator: "Translator"
      },
      server: "Translation server",
      server_selfhosted: "Selfhosted",
      translate_all_img: "Translate all images"
    }
  },
  site: {
    add_feature: {
      associate_nhentai: "Associate nhentai",
      auto_page_turn: "Auto page turning",
      block_totally: "Totally block comics",
      hotkeys_page_turn: "Page turning with hotkeys",
      open_link_new_page: "Open links in a new page",
      remember_current_site: "Remember the current site"
    },
    ehentai: {
      fetch_img_page_source_failed: "Failed to get the source code of the image page",
      fetch_img_page_url_failed: "Failed to get the image page address from the detail page",
      fetch_img_url_failed: "Failed to get the image address from the image page",
      html_changed_load_failed: "The web page structure has changed, unable to load comics",
      html_changed_nhentai_failed: "The web page structure has changed, the function to associate nhentai comics is not working properly",
      ip_banned: "IP address is banned",
      nhentai_error: "Error in nhentai matching",
      nhentai_failed: "Matching failed, please refresh after confirming login to {{nhentai}}"
    },
    nhentai: {
      fetch_next_page_failed: "Failed to get next page of comic data",
      tag_blacklist_fetch_failed: "Failed to fetch tag blacklist"
    },
    settings_tip: "Settings",
    show_settings_menu: "Show settings menu",
    simple: {
      auto_read_mode_message: "\\"Auto enter reading mode\\" is enabled by default",
      simple_read_mode: "Enter simple reading mode"
    }
  },
  touch_area: {
    menu: "Menu",
    next: "Next Page",
    prev: "Prev Page"
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
    repeat_load: "Загрузка изображения, пожалуйста подождите",
    server_connect_failed: "Не удалось подключиться к серверу"
  },
  button: {
    close_current_page_translation: "Скрыть перевод текущей страницы",
    download: "Скачать",
    download_completed: "Загрузка завершена",
    downloading: "Скачивание",
    exit: "Выход",
    packaging: "Упаковка",
    page_fill: "Заполнить страницу",
    page_mode_double: "Двухчастичный режим",
    page_mode_single: "Одностраничный режим",
    scroll_mode: "Режим прокрутки",
    setting: "Настройки",
    translate_current_page: "Перевести текущую страницу",
    zoom_in: "Приблизить"
  },
  description: "Добавляет расширенные функции для удобства на сайт, такие как двухстраничный режим и перевод.",
  end_page: {
    next_button: "Следующая глава",
    prev_button: "Предыдущая глава",
    tip: {
      end_jump: "Последняя страница, ниже будет загружена следующая глава",
      exit: "Последняя страница, ниже комикс будет закрыт",
      start_jump: "Это первая страница, выше будет загружена предыдущая глава"
    }
  },
  hotkeys: {
    enter_read_mode: "Перейти в режим чтения",
    exit: "Выход",
    jump_to_end: "Перейти к последней странице",
    jump_to_home: "Перейти к первой странице",
    switch_auto_enlarge: "Автоматическое приближение изображения",
    switch_dir: "Переключить направление чтения",
    switch_page_fill: "Переключить заполнение страницы",
    switch_scroll_mode: "Переключить режим прокрутки",
    switch_single_double_page_mode: "Одностраничный/Двухстраничный режим",
    turn_page_down: "Перелистнуть страницу вниз",
    turn_page_left: "Перелистнуть страницу влево",
    turn_page_right: "Перелистнуть страницу вправо",
    turn_page_up: "Перелистнуть страницу вверх"
  },
  img_status: {
    error: "Ошибка загрузки",
    loading: "Загрузка",
    wait: "Ожидание загрузки"
  },
  other: {
    auto_enter_read_mode: "Автоматически включать режим чтения",
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
      img_not_found_files: "Пожалуйста выберите файл изображения или архив с изображениями",
      img_not_found_folder: "В папке не найдены изображения или архивы с изображениями",
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
    tip_md: "# ComicRead PWA\\nИспользуйте [ComicRead](https://github.com/hymbz/ComicReadScript) для чтения комиксов локально.\\n---\\n### Перетащите изображения, папки или архивы чтобы начать читать\\n*Вы так же можете открыть архив по URL напрямую*"
  },
  setting: {
    hotkeys: {
      add: "Добавить горячие клавиши",
      restore: "Восстановить горячие клавиши по умолчанию"
    },
    language: "Язык",
    option: {
      always_load_all_img: "Всегда загружать все изображения",
      background_color: "Цвет фона",
      click_page_turn_enabled: "Включить перелистывание страниц по клику",
      click_page_turn_swap_area: "Поменять местами правую и левую области переключения страниц",
      click_page_turn_vertical: "Вертикальная область переключения страниц",
      dark_mode: "Тёмная тема",
      dir_ltr: "Чтение слева направо (Американские комиксы)",
      dir_rtl: "Чтение справа налево (Японская манга)",
      disable_auto_enlarge: "Отключить автоматическое масштабирование изображений",
      first_page_fill: "Включить заполнение первой страницы по умолчанию",
      jump_to_next_chapter: "Перелистнуть главу",
      paragraph_dir: "Направление чтения",
      paragraph_display: "Отображение",
      paragraph_hotkeys: "Горячие клавиши",
      paragraph_operation: "Управление",
      paragraph_other: "Другое",
      paragraph_scrollbar: "Полоса прокрутки",
      paragraph_translation: "Перевод",
      preload_page_num: "Предзагружать страниц",
      scrollbar_auto_hidden: "Автоматически скрывать полосу прокрутки",
      scrollbar_show: "Показывать полосу прокрутки",
      scrollbar_show_img_status: "Показывать статус загрузки изображения",
      show_clickable_area: "Показывать кликабельные области",
      show_comments: "Показывать комментарии на последней странице",
      swap_page_turn_key: "Поменять местами клавиши переключения страниц"
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
        target_language: "Целевой язык",
        text_detector: "Детектор текста",
        translator: "Переводчик"
      },
      server: "Сервер",
      server_selfhosted: "Свой",
      translate_all_img: "Перевести все изображения"
    }
  },
  site: {
    add_feature: {
      associate_nhentai: "Ассоциация с nhentai",
      auto_page_turn: "Автопереворот страниц",
      block_totally: "Глобально заблокировать комиксы",
      hotkeys_page_turn: "Переворот страниц горячими клавишами",
      open_link_new_page: "Открывать ссылки в новой вкладке",
      remember_current_site: "Запомнить текущий сайт"
    },
    ehentai: {
      fetch_img_page_source_failed: "Не удалось получить исходный код страницы с изображениями",
      fetch_img_page_url_failed: "Не удалось получить адрес страницы изображений из деталей",
      fetch_img_url_failed: "Не удалось получить адрес изображения",
      html_changed_load_failed: "Структура страницы изменилась, невозможно загрузить комикс",
      html_changed_nhentai_failed: "Структура страницы изменилась, функция nhentai manga работает некорректно",
      ip_banned: "IP адрес забанен",
      nhentai_error: "Ошибка сопоставления с nhentai",
      nhentai_failed: "Ошибка сопостовления. Пожалуйста перезагрузите страницу после входа на {{nhentai}}"
    },
    nhentai: {
      fetch_next_page_failed: "Не удалось получить следующую страницу",
      tag_blacklist_fetch_failed: "Не удалось получить заблокированные теги"
    },
    settings_tip: "Настройки",
    show_settings_menu: "Показать меню настроек",
    simple: {
      auto_read_mode_message: "\\"Автоматически включать режим чтения\\" по умолчанию",
      simple_read_mode: "Включить простой режим чтения"
    }
  },
  touch_area: {
    menu: "Меню",
    next: "Следующая страница",
    prev: "Предыдущая страница"
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

const [lang, setLang] = solidJs.createSignal('zh');
const setInitLang = async () => setLang(await getInitLang());
const t = solidJs.createRoot(() => {
  solidJs.createEffect(solidJs.on(lang, () => setSaveLang(lang()), {
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

  // eslint-disable-next-line solid/reactivity
  return (keys, variables) => {
    let text = byPath(locales(), keys) ?? '';
    if (variables) Object.entries(variables).forEach(([k, v]) => {
      text = text.replaceAll(\`{{\${k}}}\`, \`\${v}\`);
    });
    if (!text) log.warn('unknown i18n key', keys);
    return text;
  };
});

const getDom = id => {
  let dom = document.getElementById(id);
  if (dom) {
    dom.innerHTML = '';
    return dom;
  }
  dom = document.createElement('div');
  dom.id = id;
  document.body.appendChild(dom);
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

var css$3 = ".index_module_root__5c9082fe{align-items:flex-end;bottom:0;display:flex;flex-direction:column;font-size:16px;pointer-events:none;position:fixed;right:0;z-index:2147483647}.index_module_item__5c9082fe{align-items:center;animation:index_module_bounceInRight__5c9082fe .5s 1;background:#fff;border-radius:4px;box-shadow:0 1px 10px 0 #0000001a,0 2px 15px 0 #0000000d;color:#000;cursor:pointer;display:flex;margin:1em;max-width:min(30em,100vw);overflow:hidden;padding:.8em 1em;pointer-events:auto;position:relative;width:-moz-fit-content;width:fit-content}.index_module_item__5c9082fe>svg{color:var(--theme);margin-right:.5em;width:1.5em}.index_module_item__5c9082fe[data-exit]{animation:index_module_bounceOutRight__5c9082fe .5s 1}.index_module_schedule__5c9082fe{background-color:var(--theme);bottom:0;height:.2em;left:0;position:absolute;transform-origin:left;width:100%}.index_module_item__5c9082fe[data-schedule] .index_module_schedule__5c9082fe{transition:transform .1s}.index_module_item__5c9082fe:not([data-schedule]) .index_module_schedule__5c9082fe{animation:index_module_schedule__5c9082fe linear 1 forwards}:is(.index_module_item__5c9082fe:hover,.index_module_item__5c9082fe[data-schedule],.index_module_root__5c9082fe[data-paused]) .index_module_schedule__5c9082fe{animation-play-state:paused}.index_module_msg__5c9082fe{text-align:start;width:-moz-fit-content;width:fit-content}.index_module_msg__5c9082fe h2,.index_module_msg__5c9082fe h3{margin:.3em 0}.index_module_msg__5c9082fe ul{margin:0;text-align:left}.index_module_msg__5c9082fe button{background-color:#eee;border:none;border-radius:.4em;cursor:pointer;font-size:inherit;margin:0 .5em;outline:none;padding:.2em .6em}.index_module_msg__5c9082fe button:hover{background:#e0e0e0}p{margin:0}@keyframes index_module_schedule__5c9082fe{0%{transform:scaleX(1)}to{transform:scaleX(0)}}@keyframes index_module_bounceInRight__5c9082fe{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0) scaleX(3)}60%{opacity:1;transform:translate3d(-25px,0,0) scaleX(1)}75%{transform:translate3d(10px,0,0) scaleX(.98)}90%{transform:translate3d(-5px,0,0) scaleX(.995)}to{transform:translateZ(0)}}@keyframes index_module_bounceOutRight__5c9082fe{20%{opacity:1;transform:translate3d(-20px,0,0) scaleX(.9)}to{opacity:0;transform:translate3d(2000px,0,0) scaleX(2)}}";
var modules_c21c94f2$3 = {"root":"index_module_root__5c9082fe","item":"index_module_item__5c9082fe","bounceInRight":"index_module_bounceInRight__5c9082fe","bounceOutRight":"index_module_bounceOutRight__5c9082fe","schedule":"index_module_schedule__5c9082fe","msg":"index_module_msg__5c9082fe"};

const [_state$1, _setState$1] = store$2.createStore({
  list: [],
  map: {}
});
const setState$1 = fn => _setState$1(store$2.produce(fn));

// eslint-disable-next-line solid/reactivity
const store$1 = _state$1;
const creatId = () => {
  let id = \`\${Date.now()}\`;
  while (Reflect.has(store$1.map, id)) {
    id += '_';
  }
  return id;
};

const _tmpl$$Q = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.59 7.59a.996.996 0 0 1-1.41 0z">\`);
const MdCheckCircle = ((props = {}) => (() => {
  const _el$ = _tmpl$$Q();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$P = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z">\`);
const MdWarning = ((props = {}) => (() => {
  const _el$ = _tmpl$$P();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$O = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z">\`);
const MdError = ((props = {}) => (() => {
  const _el$ = _tmpl$$O();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$N = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z">\`);
const MdInfo = ((props = {}) => (() => {
  const _el$ = _tmpl$$N();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const toast$2 = (msg, options) => {
  if (!msg) return;
  const id = options?.id ?? (typeof msg === 'string' ? msg : creatId());
  setState$1(state => {
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
  let fn = log;
  switch (options?.type) {
    case 'warn':
      fn = log.warn;
      break;
    case 'error':
      fn = log.error;
      break;
  }
  fn.call(null, 'Toast:', msg);
  if (options?.throw && typeof msg === 'string') throw new Error(msg);
};
toast$2.dismiss = id => {
  if (!Reflect.has(store$1.map, id)) return;
  setState$1(state => {
    state.map[id].exit = true;
  });
};
toast$2.set = (id, options) => {
  if (!Reflect.has(store$1.map, id)) return;
  setState$1(state => {
    Object.assign(state.map[id], options);
  });
};
toast$2.success = (msg, options) => toast$2(msg, {
  ...options,
  type: 'success'
});
toast$2.warn = (msg, options) => toast$2(msg, {
  ...options,
  type: 'warn'
});
toast$2.error = (msg, options) => {
  toast$2(msg, {
    ...options,
    type: 'error'
  });
};

const _tmpl$$M = /*#__PURE__*/web.template(\`<div>\`),
  _tmpl$2$b = /*#__PURE__*/web.template(\`<div><div>\`);
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
const dismissToast = id => setState$1(state => {
  state.map[id].onDismiss?.({
    ...state.map[id]
  });
  const i = state.list.findIndex(t => t === id);
  if (i !== -1) state.list.splice(i, 1);
  Reflect.deleteProperty(state.map, id);
});

/** 重置 toast 的 update 属性 */
const resetToastUpdate = id => setState$1(state => {
  Reflect.deleteProperty(state.map[id], 'update');
});
const ToastItem = props => {
  /** 是否要显示进度 */
  const showSchedule = solidJs.createMemo(() => props.duration === Infinity && props.schedule ? true : undefined);
  const dismiss = e => {
    e.stopPropagation();
    if (showSchedule() && 'animationName' in e) return;
    toast$2.dismiss(props.id);
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
    scheduleRef?.getAnimations().forEach(animation => {
      animation.cancel();
      animation.play();
    });
  });
  return (() => {
    const _el$ = _tmpl$2$b(),
      _el$2 = _el$.firstChild;
    _el$.addEventListener("animationend", handleAnimationEnd);
    _el$.addEventListener("click", dismiss);
    web.insert(_el$, web.createComponent(web.Dynamic, {
      get component() {
        return iconMap[props.type];
      }
    }), _el$2);
    web.insert(_el$2, (() => {
      const _c$ = web.memo(() => typeof props.msg === 'string');
      return () => _c$() ? props.msg : web.createComponent(props.msg, {});
    })());
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return props.duration !== Infinity || props.schedule !== undefined;
      },
      get children() {
        const _el$3 = _tmpl$$M();
        _el$3.addEventListener("animationend", dismiss);
        const _ref$ = scheduleRef;
        typeof _ref$ === "function" ? web.use(_ref$, _el$3) : scheduleRef = _el$3;
        web.effect(_p$ => {
          const _v$ = modules_c21c94f2$3.schedule,
            _v$2 = \`\${props.duration}ms\`,
            _v$3 = showSchedule() ? \`scaleX(\${props.schedule})\` : undefined;
          _v$ !== _p$._v$ && web.className(_el$3, _p$._v$ = _v$);
          _v$2 !== _p$._v$2 && ((_p$._v$2 = _v$2) != null ? _el$3.style.setProperty("animation-duration", _v$2) : _el$3.style.removeProperty("animation-duration"));
          _v$3 !== _p$._v$3 && ((_p$._v$3 = _v$3) != null ? _el$3.style.setProperty("transform", _v$3) : _el$3.style.removeProperty("transform"));
          return _p$;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined
        });
        return _el$3;
      }
    }), null);
    web.effect(_p$ => {
      const _v$4 = modules_c21c94f2$3.item,
        _v$5 = colorMap[props.type],
        _v$6 = showSchedule(),
        _v$7 = props.exit,
        _v$8 = modules_c21c94f2$3.msg;
      _v$4 !== _p$._v$4 && web.className(_el$, _p$._v$4 = _v$4);
      _v$5 !== _p$._v$5 && ((_p$._v$5 = _v$5) != null ? _el$.style.setProperty("--theme", _v$5) : _el$.style.removeProperty("--theme"));
      _v$6 !== _p$._v$6 && web.setAttribute(_el$, "data-schedule", _p$._v$6 = _v$6);
      _v$7 !== _p$._v$7 && web.setAttribute(_el$, "data-exit", _p$._v$7 = _v$7);
      _v$8 !== _p$._v$8 && web.className(_el$2, _p$._v$8 = _v$8);
      return _p$;
    }, {
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined
    });
    return _el$;
  })();
};

const _tmpl$$L = /*#__PURE__*/web.template(\`<div>\`);
const Toaster = () => {
  const [visible, setVisible] = solidJs.createSignal(document.visibilityState === 'visible');
  solidJs.onMount(() => {
    const handleVisibilityChange = () => {
      setVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    solidJs.onCleanup(() => document.removeEventListener('visibilitychange', handleVisibilityChange));
  });
  return (() => {
    const _el$ = _tmpl$$L();
    web.insert(_el$, web.createComponent(solidJs.For, {
      get each() {
        return store$1.list;
      },
      children: id => web.createComponent(ToastItem, web.mergeProps(() => store$1.map[id]))
    }));
    web.effect(_p$ => {
      const _v$ = modules_c21c94f2$3.root,
        _v$2 = visible() ? undefined : '';
      _v$ !== _p$._v$ && web.className(_el$, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && web.setAttribute(_el$, "data-paused", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _el$;
  })();
};

const ToastStyle = css$3;

const _tmpl$$K = /*#__PURE__*/web.template(\`<style type="text/css">\`);
let dom$1;
const init = () => {
  if (dom$1) return;

  // 提前挂载漫画节点，防止 toast 没法显示在漫画上层
  if (!document.getElementById('comicRead')) {
    const _dom = document.createElement('div');
    _dom.id = 'comicRead';
    document.body.appendChild(_dom);
  }
  dom$1 = mountComponents('toast', () => [web.createComponent(Toaster, {}), (() => {
    const _el$ = _tmpl$$K();
    web.insert(_el$, ToastStyle);
    return _el$;
  })()]);
  dom$1.style.setProperty('z-index', '2147483647', 'important');
};
const toast$1 = new Proxy(toast$2, {
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
const request$1 = async (url, details, errorNum = 0) => {
  const errorText = details?.errorText ?? t('alert.comic_load_error');
  try {
    const res = await xmlHttpRequest({
      method: 'GET',
      url,
      headers: {
        Referer: window.location.href
      },
      fetch: url.includes(window.location.origin),
      ...details
    });
    if (res.status !== 200) throw new Error(errorText);
    return res;
  } catch (error) {
    if (errorNum >= 3) {
      if (errorText && !details?.noTip) toast$1.error(errorText);
      throw new Error(errorText);
    }
    log.error(errorText, error);
    await sleep(1000);
    return request$1(url, details, errorNum + 1);
  }
};

const _tmpl$$J = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="m20.45 6 .49-1.06L22 4.45a.5.5 0 0 0 0-.91l-1.06-.49L20.45 2a.5.5 0 0 0-.91 0l-.49 1.06-1.05.49a.5.5 0 0 0 0 .91l1.06.49.49 1.05c.17.39.73.39.9 0zM8.95 6l.49-1.06 1.06-.49a.5.5 0 0 0 0-.91l-1.06-.48L8.95 2a.492.492 0 0 0-.9 0l-.49 1.06-1.06.49a.5.5 0 0 0 0 .91l1.06.49L8.05 6c.17.39.73.39.9 0zm10.6 7.5-.49 1.06-1.06.49a.5.5 0 0 0 0 .91l1.06.49.49 1.06a.5.5 0 0 0 .91 0l.49-1.06 1.05-.5a.5.5 0 0 0 0-.91l-1.06-.49-.49-1.06c-.17-.38-.73-.38-.9.01zm-1.84-4.38-2.83-2.83a.996.996 0 0 0-1.41 0L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0L17.7 10.53c.4-.38.4-1.02.01-1.41zm-3.5 2.09L12.8 9.8l1.38-1.38 1.41 1.41-1.38 1.38z">\`);
const MdAutoFixHigh = ((props = {}) => (() => {
  const _el$ = _tmpl$$J();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$I = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="m22 3.55-1.06-.49L20.45 2a.5.5 0 0 0-.91 0l-.49 1.06-1.05.49a.5.5 0 0 0 0 .91l1.06.49.49 1.05a.5.5 0 0 0 .91 0l.49-1.06L22 4.45c.39-.17.39-.73 0-.9zm-7.83 4.87 1.41 1.41-1.46 1.46 1.41 1.41 2.17-2.17a.996.996 0 0 0 0-1.41l-2.83-2.83a.996.996 0 0 0-1.41 0l-2.17 2.17 1.41 1.41 1.47-1.45zM2.1 4.93l6.36 6.36-6.17 6.17a.996.996 0 0 0 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l6.17-6.17 6.36 6.36a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42z">\`);
const MdAutoFixOff = ((props = {}) => (() => {
  const _el$ = _tmpl$$I();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$H = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9a.995.995 0 0 0-.86-1.5H13l2.49-6.65A.994.994 0 0 0 14.56 2H8c-.55 0-1 .45-1 1z">\`);
const MdAutoFlashOn = ((props = {}) => (() => {
  const _el$ = _tmpl$$H();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$G = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M16.12 11.5a.995.995 0 0 0-.86-1.5h-1.87l2.28 2.28.45-.78zm.16-8.05c.33-.67-.15-1.45-.9-1.45H8c-.55 0-1 .45-1 1v.61l6.13 6.13 3.15-6.29zm2.16 14.43L4.12 3.56a.996.996 0 1 0-1.41 1.41L7 9.27V12c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l2.65-4.55 3.44 3.44c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41z">\`);
const MdAutoFlashOff = ((props = {}) => (() => {
  const _el$ = _tmpl$$G();
  web.spread(_el$, props, true, true);
  return _el$;
})());

var css$2 = ".index_module_iconButtonItem__9645dd99{align-items:center;display:flex;position:relative}.index_module_iconButton__9645dd99{align-items:center;background-color:initial;border-radius:9999px;border-style:none;color:var(--text,#fff);cursor:pointer;display:flex;font-size:1.5em;height:1.5em;justify-content:center;margin:.1em;outline:none;padding:0;width:1.5em}.index_module_iconButton__9645dd99:focus,.index_module_iconButton__9645dd99:hover{background-color:var(--hover_bg_color,#fff3)}.index_module_iconButton__9645dd99.index_module_enabled__9645dd99{background-color:var(--text,#fff);color:var(--text_bg,#121212)}.index_module_iconButton__9645dd99.index_module_enabled__9645dd99:focus,.index_module_iconButton__9645dd99.index_module_enabled__9645dd99:hover{background-color:var(--hover_bg_color_enable,#fffa)}.index_module_iconButton__9645dd99>svg{width:1em}.index_module_iconButtonPopper__9645dd99{align-items:center;background-color:#303030;border-radius:.3em;color:#fff;display:flex;font-size:.8em;opacity:0;padding:.4em .5em;position:absolute;top:50%;transform:translateY(-50%);user-select:none;white-space:nowrap}.index_module_iconButtonPopper__9645dd99[data-placement=right]{left:calc(100% + 1.5em)}.index_module_iconButtonPopper__9645dd99[data-placement=right]:before{border-right-color:var(--switch_bg,#6e6e6e);border-right-width:.5em;right:calc(100% + .5em)}.index_module_iconButtonPopper__9645dd99[data-placement=left]{right:calc(100% + 1.5em)}.index_module_iconButtonPopper__9645dd99[data-placement=left]:before{border-left-color:var(--switch_bg,#6e6e6e);border-left-width:.5em;left:calc(100% + .5em)}.index_module_iconButtonPopper__9645dd99:before{background-color:initial;border:.4em solid #0000;content:\\"\\";position:absolute;transition:opacity .15s}.index_module_iconButtonItem__9645dd99:focus .index_module_iconButtonPopper__9645dd99,.index_module_iconButtonItem__9645dd99:hover .index_module_iconButtonPopper__9645dd99,.index_module_iconButtonItem__9645dd99[data-show=true] .index_module_iconButtonPopper__9645dd99{opacity:1}.index_module_hidden__9645dd99{display:none}";
var modules_c21c94f2$2 = {"iconButtonItem":"index_module_iconButtonItem__9645dd99","iconButton":"index_module_iconButton__9645dd99","enabled":"index_module_enabled__9645dd99","iconButtonPopper":"index_module_iconButtonPopper__9645dd99","hidden":"index_module_hidden__9645dd99"};

const _tmpl$$F = /*#__PURE__*/web.template(\`<div><button type="button" tabindex="-1">\`),
  _tmpl$2$a = /*#__PURE__*/web.template(\`<div>\`);
const IconButtonStyle = css$2;
/** 图标按钮 */
const IconButton = _props => {
  const props = solidJs.mergeProps({
    placement: 'right'
  }, _props);
  let buttonRef;
  const handleClick = e => {
    // 在每次点击后取消焦点
    buttonRef?.blur();
    props.onClick?.(e);
  };
  return (() => {
    const _el$ = _tmpl$$F(),
      _el$2 = _el$.firstChild;
    const _ref$ = buttonRef;
    typeof _ref$ === "function" ? web.use(_ref$, _el$2) : buttonRef = _el$2;
    _el$2.addEventListener("click", handleClick);
    web.insert(_el$2, () => props.children);
    web.insert(_el$, (() => {
      const _c$ = web.memo(() => !!(props.popper || props.tip));
      return () => _c$() ? (() => {
        const _el$3 = _tmpl$2$a();
        web.insert(_el$3, () => props.popper || props.tip);
        web.effect(_p$ => {
          const _v$6 = [modules_c21c94f2$2.iconButtonPopper, props.popperClassName].join(' '),
            _v$7 = props.placement;
          _v$6 !== _p$._v$6 && web.className(_el$3, _p$._v$6 = _v$6);
          _v$7 !== _p$._v$7 && web.setAttribute(_el$3, "data-placement", _p$._v$7 = _v$7);
          return _p$;
        }, {
          _v$6: undefined,
          _v$7: undefined
        });
        return _el$3;
      })() : null;
    })(), null);
    web.effect(_p$ => {
      const _v$ = modules_c21c94f2$2.iconButtonItem,
        _v$2 = props.showTip,
        _v$3 = props.tip,
        _v$4 = modules_c21c94f2$2.iconButton,
        _v$5 = {
          [modules_c21c94f2$2.hidden]: props.hidden,
          [modules_c21c94f2$2.enabled]: props.enabled
        };
      _v$ !== _p$._v$ && web.className(_el$, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && web.setAttribute(_el$, "data-show", _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && web.setAttribute(_el$2, "aria-label", _p$._v$3 = _v$3);
      _v$4 !== _p$._v$4 && web.className(_el$2, _p$._v$4 = _v$4);
      _p$._v$5 = web.classList(_el$2, _v$5, _p$._v$5);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return _el$;
  })();
};

const useSpeedDial = (options, setOptions) => {
  const DefaultButton = props => {
    return web.createComponent(IconButton, {
      get tip() {
        return props.showName ?? props.optionName;
      },
      placement: "left",
      onClick: () => setOptions({
        ...options,
        [props.optionName]: !options[props.optionName]
      }),
      get children() {
        return props.children ?? (options[props.optionName] ? web.createComponent(MdAutoFixHigh, {}) : web.createComponent(MdAutoFixOff, {}));
      }
    });
  };
  const list = Object.keys(options).map(optionName => {
    switch (optionName) {
      case 'hiddenFAB':
      case 'option':
      case 'hotkeys':
        return null;
      case 'autoShow':
        return () => web.createComponent(DefaultButton, {
          optionName: "autoShow",
          get showName() {
            return t('other.auto_enter_read_mode');
          },
          get children() {
            return web.memo(() => !!options.autoShow)() ? web.createComponent(MdAutoFlashOn, {}) : web.createComponent(MdAutoFlashOff, {});
          }
        });
      default:
        if (typeof options[optionName] !== 'boolean') return null;
        return () => web.createComponent(DefaultButton, {
          get optionName() {
            return t(\`site.add_feature.\${optionName}\`) || optionName;
          }
        });
    }
  }).filter(Boolean);
  return list;
};

/* eslint-disable no-param-reassign */

const promisifyRequest = request => new Promise((resolve, reject) => {
  // eslint-disable-next-line no-multi-assign
  request.oncomplete = request.onsuccess = () => resolve(request.result);
  // eslint-disable-next-line no-multi-assign
  request.onabort = request.onerror = () => reject(request.error);
});
const useCache = (initSchema, version = 1) => {
  const request = indexedDB.open('ComicReadScript', version);
  request.onupgradeneeded = () => {
    initSchema(request.result);
  };
  const dbp = promisifyRequest(request);
  const useStore = (storeName, txMode, callback) => dbp.then(db => callback(db.transaction(storeName, txMode).objectStore(storeName)));
  return {
    /** 存入数据 */
    set: (storeName, value) => useStore(storeName, 'readwrite', async store => {
      store.put(value);
      await promisifyRequest(store.transaction);
    }),
    /** 根据主键直接获取数据 */
    get: (storeName, query) => useStore(storeName, 'readonly', store => promisifyRequest(store.get(query))),
    /** 查找符合条件的数据 */
    find: (storeName, query, index) => useStore(storeName, 'readonly', store => promisifyRequest((index ? store.index(index) : store).getAll(query))),
    /** 删除符合条件的数据 */
    del: (storeName, query, index) => useStore(storeName, 'readwrite', async store => {
      if (index) {
        store.index(index).openCursor(query).onsuccess = async function onsuccess() {
          if (!this.result) return;
          await promisifyRequest(this.result.delete());
          this.result.continue();
        };
        await promisifyRequest(store.transaction);
      } else {
        store.delete(query);
        await promisifyRequest(store.transaction);
      }
    })

    // each: <K extends keyof Schema & string>(
    //   storeName: K,
    //   query: IDBValidKey | IDBKeyRange | null,
    //   callback: (cursor: IDBCursorWithValue) => void,
    // ) =>
    //   useStore(storeName, 'readonly', (store) => {
    //     store.openCursor(query).onsuccess = function onsuccess() {
    //       if (!this.result) return;
    //       callback(this.result);
    //       this.result.continue();
    //     };
    //     return promisifyRequest(store.transaction);
    //   }),
  };
};

const _tmpl$$E = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z">\`);
const MdFileDownload = ((props = {}) => (() => {
  const _el$ = _tmpl$$E();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$D = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z">\`);
const MdClose = ((props = {}) => (() => {
  const _el$ = _tmpl$$D();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const useStore = initState => {
  const [_state, _setState] = store$2.createStore(initState);
  return {
    _state,
    _setState,
    setState: fn => _setState(store$2.produce(fn)),
    store: _state
  };
};

const imgState = {
  imgList: [],
  pageList: [],
  /** 页面填充数据 */
  fillEffect: {
    '-1': true
  },
  /** 当前页数 */
  activePageIndex: 0,
  /** 比例 */
  proportion: {
    单页比例: 0,
    横幅比例: 0,
    条漫比例: 0
  }
};

const ScrollbarState = {
  /** 滚动条 */
  scrollbar: {
    /** 滚动条提示文本 */
    tipText: '',
    /** 滚动条高度比率 */
    dragHeight: 0,
    /** 滚动条所处高度比率 */
    dragTop: 0
  },
  /**
   * 用于防止滚轮连续滚动导致过快触发事件的锁
   *
   * - 在缩放时开启，结束缩放一段时间后关闭。开启时禁止翻页。
   * - 在首次触发结束页时开启，一段时间关闭。开启时禁止触发结束页的上下话切换功能。
   */
  scrollLock: false
};

const LanguageMap = {
  zh: 'CHS',
  en: 'ENG'
};
const targetLanguage = LanguageMap[lang()] ?? 'CHS';
const defaultOption = {
  dir: 'rtl',
  scrollbar: {
    enabled: true,
    autoHidden: false,
    showImgStatus: true
  },
  onePageMode: false,
  scrollMode: false,
  clickPageTurn: {
    enabled: 'ontouchstart' in document.documentElement,
    reverse: false,
    vertical: false
  },
  firstPageFill: true,
  disableZoom: false,
  darkMode: false,
  swapPageTurnKey: false,
  jumpToNext: true,
  alwaysLoadAllImg: false,
  scrollModeImgScale: 1,
  showComment: true,
  preloadPageNum: 20,
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
    }
  }
};
const OptionState = {
  option: JSON.parse(JSON.stringify(defaultOption))
};

const defaultHotkeys = {
  turn_page_up: ['w', 'ArrowUp', 'PageUp'],
  turn_page_down: [' ', 's', 'ArrowDown', 'PageDown'],
  turn_page_right: ['d', '.', 'ArrowRight'],
  turn_page_left: ['a', ',', 'ArrowLeft'],
  jump_to_home: ['Home'],
  jump_to_end: ['End'],
  exit: ['Escape'],
  switch_page_fill: ['/', 'm', 'z'],
  switch_scroll_mode: [],
  switch_single_double_page_mode: [],
  switch_dir: [],
  switch_auto_enlarge: []
};
const OtherState = {
  panzoom: undefined,
  /** 当前是否处于放大模式 */
  isZoomed: false,
  /** 是否强制显示侧边栏 */
  showToolbar: false,
  /** 是否强制显示滚动条 */
  showScrollbar: false,
  /** 是否显示结束页 */
  showEndPage: false,
  /** 是否显示点击区域 */
  showTouchArea: false,
  /** 结束页状态。showEndPage 更改时自动计算 */
  endPageType: undefined,
  /** 评论列表 */
  commentList: undefined,
  /** 快捷键配置 */
  hotkeys: {},
  /** 点击结束页按钮时触发的回调 */
  onExit: undefined,
  /** 点击上一话按钮时触发的回调 */
  onPrev: undefined,
  /** 点击下一话按钮时触发的回调 */
  onNext: undefined,
  /** 图片加载状态发生变化时触发的回调 */
  onLoading: undefined,
  /** 配置发生变化时触发的回调 */
  onOptionChange: undefined,
  /** 快捷键配置发生变化时触发的回调 */
  onHotkeysChange: undefined,
  editButtonList: list => list,
  editSettingList: list => list,
  prevRef: undefined,
  nextRef: undefined,
  exitRef: undefined,
  flag: {
    /** 是否需要自动判断开启卷轴模式 */
    autoScrollMode: true,
    /** 是否需要自动将未加载图片类型设为跨页图 */
    autoWide: true
  }
};

const {
  store,
  setState,
  _state,
  _setState
} = useStore({
  ...imgState,
  ...ScrollbarState,
  ...OptionState,
  ...OtherState,
  rootRef: undefined,
  mangaFlowRef: undefined,
  prevAreaRef: undefined,
  nextAreaRef: undefined,
  menuAreaRef: undefined
});

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The \`this\` context and all arguments are passed through,
 *                                            as-is, to \`callback\` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every \`delay\` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            \`delay\` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If \`debounceMode\` is true (at begin), schedule \`clear\` to execute after \`delay\` ms. If \`debounceMode\` is
 *                                            false (at end), schedule \`callback\` to execute after \`delay\` ms.
 *
 * @returns {Function} A new, throttled, function.
 */
function throttle (delay, callback, options) {
  var _ref = options || {},
      _ref$noTrailing = _ref.noTrailing,
      noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
      _ref$noLeading = _ref.noLeading,
      noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
      _ref$debounceMode = _ref.debounceMode,
      debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * \`callback\` is executed at the proper times in \`throttle\` and \`end\`
   * debounce modes.
   */


  var timeoutID;
  var cancelled = false; // Keep track of the last time \`callback\` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel(options) {
    var _ref2 = options || {},
        _ref2$upcomingOnly = _ref2.upcomingOnly,
        upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  /*
   * The \`wrapper\` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which \`callback\`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute \`callback\` and update the \`lastExec\` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If \`debounceMode\` is true (at begin) this is used to clear the flag
     * to allow future \`callback\` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      /*
       * Since \`wrapper\` is being called for the first time and
       * \`debounceMode\` is true (at begin), execute \`callback\`
       * and noLeading != true.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        /*
         * In throttle mode with noLeading, if \`delay\` time has
         * been exceeded, update \`lastExec\` and schedule \`callback\`
         * to execute after \`delay\` ms.
         */
        lastExec = Date.now();

        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        /*
         * In throttle mode without noLeading, if \`delay\` time has been exceeded, execute
         * \`callback\`.
         */
        exec();
      }
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since \`delay\` time has not been
       * exceeded, schedule \`callback\` to execute \`delay\` ms after most
       * recent execution.
       *
       * If \`debounceMode\` is true (at begin), schedule \`clear\` to execute
       * after \`delay\` ms.
       *
       * If \`debounceMode\` is false (at end), schedule \`callback\` to
       * execute after \`delay\` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The \`this\` context and all arguments are passed through, as-is,
 *                                        to \`callback\` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed \`delay\` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for \`delay\` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, callback, options) {
  var _ref = options || {},
      _ref$atBegin = _ref.atBegin,
      atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;

  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}

const initPanzoom = state => {
  // 销毁之前可能创建过的实例
  state.panzoom?.dispose();
  const panzoom = createPanZoom(state.mangaFlowRef, {
    // 边界限制
    bounds: true,
    boundsPadding: 1,
    // 禁止缩小
    minZoom: 1,
    // 禁用默认的双击缩放
    zoomDoubleClickSpeed: 1,
    // 禁止处理手指捏合动作，交给浏览器去缩放
    pinchSpeed: 0,
    // 忽略键盘事件
    filterKey: () => true,
    // 不处理 touch 事件
    onTouch: () => false,
    // 在 处于卷轴模式 或 不处于缩放状态且没有按下 alt/ctrl 时，不进行缩放
    beforeWheel: e => store.option.scrollMode || !(e.altKey || e.ctrlKey) && panzoom.getTransform().scale === 1,
    // 处于放大状态时才允许拖动
    beforeMouseDown: () => panzoom.getTransform().scale === 1
  });
  panzoom.on('zoom', throttle(200, () => {
    setState(draftState => {
      if (!draftState.scrollLock) draftState.scrollLock = true;
      draftState.isZoomed = panzoom.getTransform().scale !== 1;
    });
    setState(async draftState => {
      if (!draftState.isZoomed && draftState.scrollLock) {
        // 防止在放大模式下通过滚轮缩小至原尺寸后立刻跳转至下一页，所以加一个延时
        await sleep(200);
        draftState.scrollLock = false;
      }
    });
  }));
  state.panzoom = panzoom;
};

// 1. 因为不同汉化组处理情况不同不可能全部适配，所以只能是尽量适配*出现频率更多*的情况
// 2. 因为大部分用户都不会在意正确页序，所以应该尽量少加填充页
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
  switch (img.type) {
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
    if (!isWideImg(img)) {
      if (imgCache !== null) {
        pageList.push([imgCache, i]);
        imgCache = null;
      } else {
        imgCache = i;
      }
      if (Reflect.has(fillEffect, i)) Reflect.deleteProperty(fillEffect, i);
    } else {
      if (imgCache !== null) {
        const nowFillIndex = findFillIndex(i, fillEffect);

        // 在除结尾外的位置出现了跨页图的话，那张跨页图大概率是页序的「正确答案」
        // 如果这张跨页导致了缺页就说明在这之前的页面填充有误，应该调整之前的填充设置
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
      if (fillEffect[i] === undefined && img.loadType !== 'loading') fillEffect[i] = false;
      pageList.push([i]);
    }
  }
  if (imgCache !== null && imgCache !== -1) {
    pageList.push([imgCache, -1]);
    imgCache = null;
  }
  return pageList;
};

/** 漫画流的容器 */
const mangaFlowEle = () => store.mangaFlowRef?.parentNode;

/** 漫画流的总高度 */
const contentHeight = () => mangaFlowEle().scrollHeight;

/** 能显示出漫画的高度 */
const windowHeight = () => store.rootRef?.offsetHeight ?? 0;

/** 更新滚动条滑块的高度和所处高度 */
const updateDrag = state => {
  if (!state.option.scrollMode) {
    state.scrollbar.dragHeight = 0;
    state.scrollbar.dragTop = 0;
    return;
  }
  state.scrollbar.dragHeight = windowHeight() / (contentHeight() || windowHeight());
};

/** 获取指定图片的提示文本 */
const getImgTip = (state, i) => {
  if (i === -1) return t('other.fill_page');
  const img = state.imgList[i];

  // 如果图片未加载完毕则在其 index 后增加显示当前加载状态
  if (img.loadType !== 'loaded') return \`\${i + 1} (\${t(\`img_status.\${img.loadType}\`)})\`;
  if (img.translationType && img.translationType !== 'hide' && img.translationMessage) return \`\${i + 1}：\${img.translationMessage}\`;
  return \`\${i + 1}\`;
};

/** 获取指定页面的提示文本 */
const getPageTip = (state, pageIndex) => {
  const page = state.pageList[pageIndex];
  if (!page) return ['null'];
  const pageIndexText = page.map(index => getImgTip(state, index));
  if (state.option.dir === 'rtl') pageIndexText.reverse();
  return pageIndexText;
};
const getTipText = state => {
  if (!state.pageList.length || !state.mangaFlowRef) return '';
  if (!state.option.scrollMode) return getPageTip(state, state.activePageIndex).join(' | ');

  /** 当前显示图片的列表 */
  const activeImageIndexList = [];
  const {
    scrollTop
  } = mangaFlowEle();
  const imgEleList = store.mangaFlowRef.childNodes;
  const scrollBottom = scrollTop + store.rootRef.offsetHeight;

  // 通过一个一个检查图片元素所在高度来判断图片是否被显示
  for (let i = 0; i < imgEleList.length; i += 1) {
    const element = imgEleList[i];
    // 当图片的顶部位置在视窗口的底部位置时中断循环
    if (element.offsetTop > scrollBottom) break;
    // 当图片的底部位置还未达到视窗口的顶部位置时，跳到下一个图片
    if (element.offsetTop + element.offsetHeight < scrollTop) continue;
    activeImageIndexList.push(+element.alt - 1);
  }
  state.activePageIndex = activeImageIndexList.at(0) ?? 0;
  return activeImageIndexList.map(index => getPageTip(state, index)).join('\\n');
};

/** 更新滚动条提示文本 */
const updateTipText = throttle(100, () => {
  setState(state => {
    state.scrollbar.tipText = getTipText(state);
  });
});

/** 处理漫画页的滚动事件 */
const handleMangaFlowScroll = () => {
  if (!store.option.scrollMode) return;
  setState(state => {
    state.scrollbar.dragTop = !mangaFlowEle || !contentHeight() ? 0 : mangaFlowEle().scrollTop / contentHeight();
    updateDrag(state);
  });
  updateTipText();
};

/** 开始拖拽时的 dragTop 值 */
let startTop = 0;
const dragOption = {
  handleDrag: ({
    type,
    xy: [, y],
    initial: [, iy]
  }, e) => {
    // 跳过拖拽结束事件（单击时会同时触发开始和结束，就用开始事件来完成单击的效果
    if (type === 'end') return;
    // 跳过没必要处理的情况
    if (type === 'dragging' && y === iy) return;
    if (!store.mangaFlowRef) return;

    /** 滚动条高度 */
    const scrollbarHeight = e.target.offsetHeight;
    /** 点击位置在滚动条上的位置比率 */
    const clickTop = y / scrollbarHeight;
    let top = clickTop;
    if (store.option.scrollMode) {
      if (type === 'dragging') {
        /** 在滚动条上的移动比率 */
        const dy = (y - iy) / scrollbarHeight;
        top = startTop + dy;
        // 处理超出范围的情况
        if (top < 0) top = 0;else if (top > 1) top = 1;
        mangaFlowEle().scrollTo({
          top: top * contentHeight(),
          behavior: 'instant'
        });
      } else {
        // 确保滚动条的中心会在点击位置
        top -= store.scrollbar.dragHeight / 2;
        startTop = top;
        mangaFlowEle().scrollTo({
          top: top * contentHeight(),
          behavior: 'smooth'
        });
      }
    } else {
      let newPageIndex = Math.floor(top * store.pageList.length);
      // 处理超出范围的情况
      if (newPageIndex < 0) newPageIndex = 0;else if (newPageIndex >= store.pageList.length) newPageIndex = store.pageList.length - 1;
      if (newPageIndex !== store.activePageIndex) {
        setState(state => {
          state.activePageIndex = newPageIndex;
        });
      }
    }
  }
};
solidJs.createRoot(() => {
  // 更新滚动条提示文本
  solidJs.createEffect(solidJs.on([() => store.activePageIndex, () => store.pageList, () => store.scrollbar.dragHeight, () => store.scrollbar.dragTop, () => store.option.scrollMode, () => store.option.dir, lang], updateTipText));

  // 在关闭 showToolbar 的同时关掉 showScrollbar
  solidJs.createEffect(solidJs.on(() => store.showToolbar, () => {
    if (store.showScrollbar && !store.showToolbar) setState(state => {
      state.showScrollbar = false;
    });
  }, {
    defer: true
  }));
});

/** 触发 onOptionChange */
const triggerOnOptionChange = () => setTimeout(() => store.onOptionChange?.(difference(store.option, defaultOption)));

/** 在 option 后手动触发 onOptionChange */
const setOption = fn => {
  setState(state => fn(state.option, state));
  triggerOnOptionChange();
};

/** 创建一个专门用于修改指定配置项的函数 */
const createStateSetFn = name => val => setOption(draftOption => byPath(draftOption, name, () => val));

/** 创建用于将 ref 绑定到对应 state 上的工具函数 */
const bindRef = (name, fn) => e => {
  setState(state => {
    Reflect.set(state, name, e);
    fn?.(state);
  });
};

const {
  activeImgIndex,
  nowFillIndex,
  activePage,
  imgPlaceholderHeight,
  preloadNum
} = solidJs.createRoot(() => {
  const activeImgIndexMemo = solidJs.createMemo(() => store.pageList[store.activePageIndex]?.find(i => i !== -1) ?? 0);
  const nowFillIndexMemo = solidJs.createMemo(() => findFillIndex(activeImgIndexMemo(), store.fillEffect));
  const activePageMemo = solidJs.createMemo(() => store.pageList[store.activePageIndex] ?? []);
  const imgPlaceholderHeightMemo = solidJs.createMemo(() => {
    if (!store.option.scrollMode) return 0;
    // 使用所有已加载图片高度的中位数
    const heightList = store.imgList.filter(img => img.loadType === 'loaded' && img.height).map(img => img.height).sort();
    if (!heightList.length) return windowHeight();
    return heightList[Math.floor(heightList.length / 2)] * store.option.scrollModeImgScale;
  });
  const preloadNumMemo = solidJs.createMemo(() => ({
    front: store.option.preloadPageNum,
    back: Math.floor(store.option.preloadPageNum / 2)
  }));
  return {
    /** 当前显示的第一张图片的 index */
    activeImgIndex: activeImgIndexMemo,
    /** 当前所处的图片流 */
    nowFillIndex: nowFillIndexMemo,
    /** 当前显示页面 */
    activePage: activePageMemo,
    /** 卷轴模式下的图片占位高度 */
    imgPlaceholderHeight: imgPlaceholderHeightMemo,
    /** 预加载页数 */
    preloadNum: preloadNumMemo
  };
});

/**
 * 预加载指定页数的图片，并取消其他预加载的图片
 * @param state state
 * @param startIndex 起始 page index
 * @param endIndex 结束 page index
 * @param loadNum 加载图片的数量
 * @returns 返回指定范围内的图片在执行前是否还有未加载完的
 */
const loadImg = (state, startIndex, endIndex = startIndex + 1, loadNum = 2) => {
  let editNum = 0;
  state.pageList.slice(Math.max(startIndex, 0), clamp(0, state.pageList.length, endIndex)).flat().some(index => {
    if (index === -1) return false;
    const img = state.imgList[index];
    if (!img.src) return false;
    if (img.loadType === 'wait') {
      img.loadType = 'loading';
      editNum += 1;
    }
    return editNum >= loadNum;
  });
  const edited = editNum > 0;
  if (edited) updateTipText();
  return edited;
};
const zoomScrollModeImg = zoomLevel => {
  setOption(draftOption => {
    draftOption.scrollModeImgScale = !zoomLevel ? 1 : clamp(0.1,
    // 放大到整数再运算，避免精度丢失导致的奇怪的值
    (store.option.scrollModeImgScale * 10 + zoomLevel * 10) / 10, 3);
  });
  // 在调整图片缩放后使当前滚动进度保持不变
  setState(state => {
    mangaFlowEle().scrollTo({
      top: contentHeight() * state.scrollbar.dragTop
    });
  });
  handleMangaFlowScroll();
};

/** 根据当前页数更新所有图片的加载状态 */
const updateImgLoadType = debounce(100, state => {
  const {
    imgList,
    activePageIndex
  } = state;

  // 先将所有加载中的图片状态改为暂停
  imgList.forEach((img, i) => {
    if (img.loadType === 'loading') imgList[i].loadType = 'wait';
  });
  return (
    // 优先加载当前显示页
    loadImg(state, activePageIndex, activePageIndex + 1) ||
    // 再加载后面几页
    loadImg(state, activePageIndex + 1, activePageIndex + preloadNum().front) ||
    // 再加载前面几页
    loadImg(state, activePageIndex - 10, activePageIndex - preloadNum().back) ||
    // 根据设置决定是否要继续加载其余图片
    !state.option.alwaysLoadAllImg && imgList.length > 60 ||
    // 加载当前页后面的图片
    loadImg(state, activePageIndex + 1, imgList.length, 5) ||
    // 加载剩余未加载页面
    loadImg(state, 0, imgList.length, 5)
  );
});

/** 重新计算 PageData */
const updatePageData = state => {
  const {
    imgList,
    fillEffect,
    option: {
      onePageMode,
      scrollMode
    }
  } = state;
  if (onePageMode || scrollMode || imgList.length <= 1) state.pageList = imgList.map((_, i) => [i]);else state.pageList = handleComicData(imgList, fillEffect);
  updateDrag(state);
  updateImgLoadType(state);
};
updatePageData.debounce = debounce(100, updatePageData);

/** 根据比例更新图片类型 */
const updateImgType = (state, draftImg) => {
  const {
    width,
    height,
    type
  } = draftImg;
  if (!width || !height) return;
  const imgRatio = width / height;
  if (imgRatio <= state.proportion.单页比例) {
    draftImg.type = imgRatio < state.proportion.条漫比例 ? 'vertical' : '';
  } else {
    draftImg.type = imgRatio > state.proportion.横幅比例 ? 'long' : 'wide';
  }
  if (type === draftImg.type) {
    updateDrag(state);
    updateImgLoadType(state);
    return;
  }
  updatePageData.debounce(state);
};

/** 处理显示窗口的长宽变化 */
const handleResize = (state, width, height) => {
  if (!(width && height)) return;
  state.proportion.单页比例 = Math.min(width / 2 / height, 1);
  state.proportion.横幅比例 = width / height;
  state.proportion.条漫比例 = state.proportion.单页比例 / 2;
  state.imgList.forEach(img => updateImgType(state, img));
};

/** 在图片排列改变后自动跳转回原先显示图片所在的页数 */
const jumpBackPage = state => {
  const lastActiveImgIndex = activeImgIndex();
  return () => {
    state.activePageIndex = state.pageList.findIndex(page => page.includes(lastActiveImgIndex));
  };
};

/** 切换页面填充 */
const switchFillEffect = () => {
  setState(state => {
    // 如果当前页不是双页显示的就跳过，避免在显示跨页图的页面切换却没看到效果的疑惑
    if (state.pageList[state.activePageIndex].length !== 2) return;
    const jump = jumpBackPage(state);
    state.fillEffect[nowFillIndex()] = !state.fillEffect[nowFillIndex()];
    updatePageData(state);
    jump();
  });
};

/** 切换卷轴模式 */
const switchScrollMode = () => {
  store.panzoom?.smoothZoomAbs(0, 0, 1);
  setOption((draftOption, state) => {
    state.activePageIndex = 0;
    draftOption.scrollMode = !draftOption.scrollMode;
    draftOption.onePageMode = draftOption.scrollMode;
    updatePageData(state);
  });
  setTimeout(handleMangaFlowScroll);
};

/** 切换单双页模式 */
const switchOnePageMode = () => {
  setOption((draftOption, state) => {
    const jump = jumpBackPage(state);
    draftOption.onePageMode = !draftOption.onePageMode;
    updatePageData(state);
    jump();
  });
};

/** 切换阅读方向 */
const switchDir = () => setOption(draftOption => {
  draftOption.dir = draftOption.dir !== 'rtl' ? 'rtl' : 'ltr';
});
solidJs.createRoot(() => {
  // 页数发生变动时
  solidJs.createEffect(solidJs.on(() => store.activePageIndex, () => {
    setState(state => {
      updateImgLoadType(state);
      if (state.endPageType) state.endPageType = undefined;
    });
  }, {
    defer: true
  }));
});

const setHotkeys = (...args) => {
  _setState.apply(undefined, ['hotkeys', ...args]);
  store.onHotkeysChange?.(Object.fromEntries(Object.entries(store.hotkeys).filter(([name, keys]) => !defaultHotkeys[name] || !isEqualArray(keys, defaultHotkeys[name]))));
};
const {
  hotkeysMap
} = solidJs.createRoot(() => {
  const hotkeysMapMemo = solidJs.createMemo(() => Object.fromEntries(Object.entries(store.hotkeys).flatMap(([name, key]) => key.map(k => [k, name]))));
  return {
    /** 快捷键配置 */
    hotkeysMap: hotkeysMapMemo
  };
});

/** 删除指定快捷键 */
const delHotkeys = code => {
  Object.entries(store.hotkeys).forEach(([name, keys]) => {
    const i = keys.indexOf(code);
    if (i === -1) return;
    const newKeys = [...store.hotkeys[name]];
    newKeys.splice(i, 1);
    setHotkeys(name, newKeys);
  });
};

var css$1 = ".index_module_img__cd47b47c{background-color:var(--hover_bg_color,#fff3);content-visibility:hidden;display:none;height:100%;max-width:100%;object-fit:contain;z-index:1}.index_module_img__cd47b47c[data-show]{content-visibility:visible;display:unset}.index_module_img__cd47b47c[data-fill=left]{transform:translate(50%)}.index_module_img__cd47b47c[data-fill=right]{transform:translate(-50%)}.index_module_img__cd47b47c[data-load-type=loading]{animation:index_module_show__cd47b47c 2s forwards;max-width:100vw!important;opacity:0;position:absolute}.index_module_img__cd47b47c[data-load-type=error],.index_module_img__cd47b47c[data-load-type=wait]{height:40em!important;opacity:0;position:absolute;width:40em}.index_module_mangaFlowBox__cd47b47c{height:100%;outline:none;scrollbar-width:none}.index_module_mangaFlowBox__cd47b47c::-webkit-scrollbar{display:none}.index_module_mangaFlowBox__cd47b47c[data-hiddenMouse=true]{cursor:none}.index_module_mangaFlow__cd47b47c{align-items:center;color:var(--text);display:flex;height:100%;justify-content:center;user-select:none}.index_module_mangaFlow__cd47b47c.index_module_disableZoom__cd47b47c .index_module_img__cd47b47c{height:unset;max-height:100%;object-fit:scale-down}.index_module_mangaFlow__cd47b47c.index_module_scrollMode__cd47b47c{flex-direction:column;justify-content:flex-start;overflow:visible}.index_module_mangaFlow__cd47b47c.index_module_scrollMode__cd47b47c .index_module_img__cd47b47c{display:unset;height:auto;max-height:unset;max-width:unset;object-fit:contain;width:calc(var(--scrollModeImgScale)*var(--width))}.index_module_mangaFlow__cd47b47c.index_module_scrollMode__cd47b47c .index_module_img__cd47b47c[data-load-type=wait]{display:unset;flex-basis:var(--img_placeholder_height);flex-shrink:0;visibility:hidden}.index_module_mangaFlow__cd47b47c[dir=ltr]{flex-direction:row}.index_module_mangaFlow__cd47b47c>svg{background-color:var(--bg);color:var(--text_secondary);position:absolute;width:20em}.index_module_mangaFlow__cd47b47c>svg[data-fill=left]{transform:translate(100%)}.index_module_mangaFlow__cd47b47c>svg[data-fill=right]{transform:translate(-100%)}@keyframes index_module_show__cd47b47c{0%{opacity:0}90%{opacity:0}to{opacity:1}}.index_module_endPage__cd47b47c{align-items:center;background-color:#333d;color:#fff;display:flex;height:100%;justify-content:center;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity .5s;width:100%;z-index:10}.index_module_endPage__cd47b47c>button{animation:index_module_jello__cd47b47c .3s forwards;background-color:initial;border:0;color:inherit;cursor:pointer;font-size:1.2em;transform-origin:center}.index_module_endPage__cd47b47c>button[data-is-end]{font-size:3em;margin:2em}.index_module_endPage__cd47b47c>button:focus-visible{outline:none}.index_module_endPage__cd47b47c>.index_module_tip__cd47b47c{margin:auto;position:absolute}.index_module_endPage__cd47b47c[data-show]{opacity:1;pointer-events:all}.index_module_endPage__cd47b47c[data-type=start]>.index_module_tip__cd47b47c{transform:translateY(-10em)}.index_module_endPage__cd47b47c[data-type=end]>.index_module_tip__cd47b47c{transform:translateY(10em)}.index_module_comments__cd47b47c{align-items:flex-end;display:flex;flex-direction:column;max-height:80%;opacity:.3;overflow:auto;padding-right:.5em;position:absolute;right:1em;width:20em}.index_module_comments__cd47b47c>p{background-color:#333b;border-radius:.5em;margin:.5em .1em;padding:.2em .5em}.index_module_comments__cd47b47c:hover{opacity:1}@keyframes index_module_jello__cd47b47c{0%,11.1%,to{transform:translateZ(0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.7812deg) skewY(-.7812deg)}77.7%{transform:skewX(.3906deg) skewY(.3906deg)}88.8%{transform:skewX(-.1953deg) skewY(-.1953deg)}}.index_module_toolbar__cd47b47c{align-items:center;display:flex;height:100%;justify-content:flex-start;position:fixed;top:0;z-index:9}.index_module_toolbarPanel__cd47b47c{display:flex;flex-direction:column;padding:.5em;position:relative;transform:translateX(-100%);transition:transform .2s}.index_module_toolbar__cd47b47c[data-show=true] .index_module_toolbarPanel__cd47b47c{transform:none}.index_module_toolbarBg__cd47b47c{backdrop-filter:blur(3px);background-color:var(--page_bg);border-bottom-right-radius:1em;border-top-right-radius:1em;filter:opacity(.3);height:100%;position:absolute;right:0;top:0;width:100%}.index_module_SettingPanelPopper__cd47b47c{height:0!important;padding:0!important;transform:none!important}.index_module_SettingPanel__cd47b47c{background-color:var(--page_bg);border-radius:.3em;bottom:0;box-shadow:0 3px 1px -2px #0003,0 2px 2px 0 #00000024,0 1px 5px 0 #0000001f;color:var(--text);font-size:1.2em;height:-moz-fit-content;height:fit-content;margin:auto;max-height:95vh;overflow:auto;position:fixed;top:0;user-select:text;z-index:1}.index_module_SettingPanel__cd47b47c hr{color:#fff;margin:0}.index_module_SettingBlock__cd47b47c{display:grid;grid-template-rows:max-content 1fr;padding:0 .5em 1em;transition:grid-template-rows .2s ease-out}.index_module_SettingBlock__cd47b47c .index_module_SettingBlockBody__cd47b47c{overflow:hidden;z-index:0}:is(.index_module_SettingBlock__cd47b47c .index_module_SettingBlockBody__cd47b47c)>div+:is(.index_module_SettingBlock__cd47b47c .index_module_SettingBlockBody__cd47b47c)>div{margin-top:1em}.index_module_SettingBlock__cd47b47c[data-show=false]{grid-template-rows:max-content 0fr;padding-bottom:unset}.index_module_SettingBlockSubtitle__cd47b47c{background-color:var(--page_bg);color:var(--text_secondary);cursor:pointer;font-size:.7em;height:3em;line-height:3em;margin-bottom:.1em;position:sticky;text-align:center;top:0;z-index:1}.index_module_SettingsItem__cd47b47c{align-items:center;display:flex;justify-content:space-between}.index_module_SettingsItem__cd47b47c+.index_module_SettingsItem__cd47b47c{margin-top:1em}.index_module_SettingsItemName__cd47b47c{font-size:.9em;max-width:calc(100% - 4em);overflow-wrap:anywhere;text-align:start;white-space:pre-wrap}.index_module_SettingsItemSwitch__cd47b47c{align-items:center;background-color:var(--switch_bg);border:0;border-radius:1em;cursor:pointer;display:inline-flex;height:.8em;margin:.3em;padding:0;width:2.3em}.index_module_SettingsItemSwitchRound__cd47b47c{background:var(--switch);border-radius:100%;box-shadow:0 2px 1px -1px #0003,0 1px 1px 0 #00000024,0 1px 3px 0 #0000001f;height:1.15em;transform:translateX(-10%);transition:transform .1s;width:1.15em}.index_module_SettingsItemSwitch__cd47b47c[data-checked=true]{background:var(--secondary_bg)}.index_module_SettingsItemSwitch__cd47b47c[data-checked=true] .index_module_SettingsItemSwitchRound__cd47b47c{background:var(--secondary);transform:translateX(110%)}.index_module_SettingsItemIconButton__cd47b47c{background-color:initial;border:none;color:var(--text);cursor:pointer;font-size:1.7em;height:1em;margin:0 .2em 0 0;padding:0}.index_module_SettingsItemSelect__cd47b47c{background-color:var(--hover_bg_color);border:none;border-radius:5px;cursor:pointer;font-size:1em;margin:0;outline:none;padding:.3em 0 .3em .3em;width:6em}.index_module_closeCover__cd47b47c{height:100%;left:0;position:fixed;top:0;width:100%}.index_module_SettingsShowItem__cd47b47c{display:grid;transition:grid-template-rows .2s ease-out}.index_module_SettingsShowItem__cd47b47c>.index_module_SettingsShowItemBody__cd47b47c{overflow:hidden}.index_module_SettingsShowItem__cd47b47c>.index_module_SettingsShowItemBody__cd47b47c>.index_module_SettingsItem__cd47b47c{margin-top:1em}.index_module_hotkeys__cd47b47c{align-items:center;border-bottom:1px solid var(--secondary_bg);color:var(--text);display:flex;flex-grow:1;flex-wrap:wrap;font-size:.9em;padding:2em .2em .2em;position:relative;z-index:1}.index_module_hotkeys__cd47b47c+.index_module_hotkeys__cd47b47c{margin-top:.5em}.index_module_hotkeys__cd47b47c:last-child{border-bottom:none}.index_module_hotkeysItem__cd47b47c{align-items:center;border-radius:.3em;box-sizing:initial;cursor:pointer;display:flex;font-family:serif;height:1em;margin:.3em;outline:1px solid;outline-color:var(--secondary_bg);padding:.2em 1.2em}.index_module_hotkeysItem__cd47b47c>svg{background-color:var(--text);border-radius:1em;color:var(--page_bg);display:none;height:1em;margin-left:.4em;opacity:.5}.index_module_hotkeysItem__cd47b47c>svg:hover{opacity:.9}.index_module_hotkeysItem__cd47b47c:hover{padding:.2em .5em}.index_module_hotkeysItem__cd47b47c:hover>svg{display:unset}.index_module_hotkeysItem__cd47b47c:focus,.index_module_hotkeysItem__cd47b47c:focus-visible{outline:var(--text) solid 2px}.index_module_hotkeysHeader__cd47b47c{align-items:center;box-sizing:border-box;display:flex;left:0;padding:0 .5em;position:absolute;top:0;width:100%}.index_module_hotkeysHeader__cd47b47c>p{background-color:var(--page_bg);line-height:1em;overflow-wrap:anywhere;text-align:start;white-space:pre-wrap}.index_module_hotkeysHeader__cd47b47c>div[title]{background-color:var(--page_bg);cursor:pointer;display:flex;transform:scale(0);transition:transform .1s}.index_module_hotkeysHeader__cd47b47c>div[title]>svg{width:1.6em}.index_module_hotkeys__cd47b47c:hover div[title]{transform:scale(1)}.index_module_scrollbar__cd47b47c{border-left:max(6vw,1em) solid #0000;display:flex;flex-direction:column;height:98%;opacity:0;outline:none;position:absolute;right:3px;top:1%;touch-action:none;transition:opacity .15s;user-select:none;width:5px;z-index:9}.index_module_scrollbar__cd47b47c>div{display:flex;flex-direction:column;flex-grow:1;pointer-events:none}.index_module_scrollbar__cd47b47c:hover,.index_module_scrollbar__cd47b47c[data-show=true]{opacity:1}.index_module_scrollbarDrag__cd47b47c{background-color:var(--scrollbar_drag);border-radius:1em;justify-content:center;position:absolute;width:100%;z-index:1}.index_module_scrollbarPage__cd47b47c{background-color:var(--secondary);flex-grow:1;transform:scaleY(1);transform-origin:bottom;transition:transform 1s}.index_module_scrollbarPage__cd47b47c[data-type=loaded]{transform:scaleY(0)}.index_module_scrollbarPage__cd47b47c[data-type=wait]{opacity:.5}.index_module_scrollbarPage__cd47b47c[data-type=error]{background-color:#f005}.index_module_scrollbarPage__cd47b47c[data-null]{background-color:#fbc02d}.index_module_scrollbarPage__cd47b47c[data-translation-type]{background-color:initial;transform:scaleY(1);transform-origin:top}.index_module_scrollbarPage__cd47b47c[data-translation-type=wait]{background-color:#81c784}.index_module_scrollbarPage__cd47b47c[data-translation-type=show]{background-color:#4caf50}.index_module_scrollbarPage__cd47b47c[data-translation-type=error]{background-color:#f005}.index_module_scrollbarPoper__cd47b47c{align-items:center;background-color:#303030;border-radius:.3em;color:#fff;display:flex;font-size:.8em;line-height:1.5em;opacity:0;padding:.2em .5em;position:absolute;right:2em;text-align:center;transition:opacity .15s;white-space:pre;width:-moz-fit-content;width:fit-content}.index_module_scrollbarPoper__cd47b47c[data-show=true]{opacity:1}.index_module_scrollbarPoper__cd47b47c:after{background-color:#303030;background-color:initial;border:.4em solid #0000;border-left:.5em solid #303030;content:\\"\\";left:100%;position:absolute}.index_module_scrollbar__cd47b47c:hover .index_module_scrollbarPoper__cd47b47c{opacity:1}.index_module_touchAreaRoot__cd47b47c{color:#fff;display:flex;font-size:3em;height:100%;pointer-events:none;position:absolute;top:0;user-select:none;visibility:hidden;width:100%}.index_module_touchAreaRoot__cd47b47c[data-vert=true]{flex-direction:column!important}@media (width <= 600px){.index_module_touchAreaRoot__cd47b47c{flex-direction:column!important}}.index_module_touchArea__cd47b47c{align-items:center;display:flex;flex-grow:1;justify-content:center;outline:none}.index_module_touchArea__cd47b47c>h6{text-orientation:upright;writing-mode:vertical-lr}.index_module_touchArea__cd47b47c[data-area=menu]{flex-basis:4em;flex-grow:0}.index_module_touchAreaRoot__cd47b47c[data-show=true]{visibility:visible}.index_module_touchAreaRoot__cd47b47c[data-show=true] .index_module_touchArea__cd47b47c[data-area=prev]{background-color:#95e1d3e6}.index_module_touchAreaRoot__cd47b47c[data-show=true] .index_module_touchArea__cd47b47c[data-area=menu]{background-color:#fce38ae6}.index_module_touchAreaRoot__cd47b47c[data-show=true] .index_module_touchArea__cd47b47c[data-area=next]{background-color:#f38181e6}.index_module_touchAreaRoot__cd47b47c[data-scroll-mode=true] .index_module_touchArea__cd47b47c[data-area=next],.index_module_touchAreaRoot__cd47b47c[data-scroll-mode=true] .index_module_touchArea__cd47b47c[data-area=prev]{visibility:hidden}.index_module_hidden__cd47b47c{display:none}.index_module_invisible__cd47b47c{visibility:hidden}.index_module_opacity1__cd47b47c{opacity:1}.index_module_opacity0__cd47b47c{opacity:0}.index_module_root__cd47b47c{background-color:var(--bg);height:100%;outline:0;overflow:hidden;position:relative;width:100%}.index_module_root__cd47b47c a{color:var(--text_secondary)}.index_module_beautifyScrollbar__cd47b47c{scrollbar-color:var(--scrollbar_drag) #0000;scrollbar-width:thin}.index_module_beautifyScrollbar__cd47b47c::-webkit-scrollbar{height:10px;width:5px}.index_module_beautifyScrollbar__cd47b47c::-webkit-scrollbar-track{background:#0000}.index_module_beautifyScrollbar__cd47b47c::-webkit-scrollbar-thumb{background:var(--scrollbar_drag)}p{margin:0}blockquote{border-left:.25em solid var(--text_secondary,#607d8b);color:var(--text_secondary);font-style:italic;line-height:1.2em;margin:.5em 0 0;overflow-wrap:anywhere;padding:0 0 0 1em;text-align:start;white-space:pre-wrap}svg{width:1em}";
var modules_c21c94f2$1 = {"img":"index_module_img__cd47b47c","show":"index_module_show__cd47b47c","mangaFlowBox":"index_module_mangaFlowBox__cd47b47c","mangaFlow":"index_module_mangaFlow__cd47b47c","disableZoom":"index_module_disableZoom__cd47b47c","scrollMode":"index_module_scrollMode__cd47b47c","endPage":"index_module_endPage__cd47b47c","jello":"index_module_jello__cd47b47c","tip":"index_module_tip__cd47b47c","comments":"index_module_comments__cd47b47c","toolbar":"index_module_toolbar__cd47b47c","toolbarPanel":"index_module_toolbarPanel__cd47b47c","toolbarBg":"index_module_toolbarBg__cd47b47c","SettingPanelPopper":"index_module_SettingPanelPopper__cd47b47c","SettingPanel":"index_module_SettingPanel__cd47b47c","SettingBlock":"index_module_SettingBlock__cd47b47c","SettingBlockBody":"index_module_SettingBlockBody__cd47b47c","SettingBlockSubtitle":"index_module_SettingBlockSubtitle__cd47b47c","SettingsItem":"index_module_SettingsItem__cd47b47c","SettingsItemName":"index_module_SettingsItemName__cd47b47c","SettingsItemSwitch":"index_module_SettingsItemSwitch__cd47b47c","SettingsItemSwitchRound":"index_module_SettingsItemSwitchRound__cd47b47c","SettingsItemIconButton":"index_module_SettingsItemIconButton__cd47b47c","SettingsItemSelect":"index_module_SettingsItemSelect__cd47b47c","closeCover":"index_module_closeCover__cd47b47c","SettingsShowItem":"index_module_SettingsShowItem__cd47b47c","SettingsShowItemBody":"index_module_SettingsShowItemBody__cd47b47c","hotkeys":"index_module_hotkeys__cd47b47c","hotkeysItem":"index_module_hotkeysItem__cd47b47c","hotkeysHeader":"index_module_hotkeysHeader__cd47b47c","scrollbar":"index_module_scrollbar__cd47b47c","scrollbarDrag":"index_module_scrollbarDrag__cd47b47c","scrollbarPage":"index_module_scrollbarPage__cd47b47c","scrollbarPoper":"index_module_scrollbarPoper__cd47b47c","touchAreaRoot":"index_module_touchAreaRoot__cd47b47c","touchArea":"index_module_touchArea__cd47b47c","hidden":"index_module_hidden__cd47b47c","invisible":"index_module_invisible__cd47b47c","opacity1":"index_module_opacity1__cd47b47c","opacity0":"index_module_opacity0__cd47b47c","root":"index_module_root__cd47b47c","beautifyScrollbar":"index_module_beautifyScrollbar__cd47b47c"};

/** 判断当前是否已经滚动到底部 */
const isBottom = state => state.option.scrollMode ? store.scrollbar.dragHeight + store.scrollbar.dragTop >= 0.999 : state.activePageIndex === state.pageList.length - 1;

/** 判断当前是否已经滚动到顶部 */
const isTop = state => state.option.scrollMode ? store.scrollbar.dragTop === 0 : state.activePageIndex === 0;

/** 翻页 */
const turnPage = dir => setState(state => {
  if (dir === 'prev') {
    switch (state.endPageType) {
      case 'start':
        if (!state.scrollLock && state.option.jumpToNext) state.onPrev?.();
        return;
      case 'end':
        state.endPageType = undefined;
        return;
      default:
        // 弹出卷首结束页
        if (isTop(state)) {
          if (!state.onExit) return;
          // 没有 onPrev 时不弹出
          if (!state.onPrev || !state.option.jumpToNext) return;
          state.endPageType = 'start';
          state.scrollLock = true;
          window.setTimeout(() => {
            state.scrollLock = false;
          }, 200);
          return;
        }
        if (!state.option.scrollMode) state.activePageIndex -= 1;
    }
  } else {
    switch (state.endPageType) {
      case 'end':
        if (state.scrollLock) return;
        if (state.onNext && state.option.jumpToNext) {
          state.onNext();
          return;
        }
        state.onExit?.(true);
        return;
      case 'start':
        state.endPageType = undefined;
        return;
      default:
        // 弹出卷尾结束页
        if (isBottom(state)) {
          if (!state.onExit) return;
          state.endPageType = 'end';
          state.scrollLock = true;
          window.setTimeout(() => {
            state.scrollLock = false;
          }, 200);
          return;
        }
        if (!state.option.scrollMode) state.activePageIndex += 1;
    }
  }
});
const handleWheel = e => {
  e.stopPropagation();
  if (e.ctrlKey && !store.option.scrollMode || e.altKey && !store.option.scrollMode || !store.endPageType && store.scrollLock) return e.preventDefault();
  const isWheelDown = e.deltaY > 0;

  // 实现卷轴模式下的缩放
  if (!store.endPageType && (e.altKey || e.ctrlKey)) {
    e.preventDefault();
    zoomScrollModeImg(isWheelDown ? -0.1 : 0.1);
    // 在调整图片缩放后使当前滚动进度保持不变
    setState(state => {
      mangaFlowEle().scrollTo({
        top: contentHeight() * state.scrollbar.dragTop
      });
    });
    handleMangaFlowScroll();
    return;
  }
  return turnPage(isWheelDown ? 'next' : 'prev');
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
  const code = getKeyboardCode(e);

  // 处理标注了 data-only-number 的元素
  if (e.target.getAttribute('data-only-number') !== null) {
    // 拦截能输入数字外的按键
    if (isAlphabetKey.test(code)) {
      e.stopPropagation();
      e.preventDefault();
    } else if (code.includes('Enter')) e.target.blur();
    return;
  }

  // 卷轴模式下跳过用于移动的按键
  if (store.option.scrollMode && !store.endPageType) {
    switch (e.key) {
      case 'Home':
      case 'End':
      case 'ArrowRight':
      case 'ArrowLeft':
        return;
      case 'ArrowUp':
      case 'PageUp':
        return turnPage('prev');
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        return turnPage('next');
    }
  }

  // 拦截已注册的快捷键
  if (Reflect.has(hotkeysMap(), code)) {
    e.stopPropagation();
    e.preventDefault();
  }
  switch (hotkeysMap()[code]) {
    case 'turn_page_up':
      return turnPage('prev');
    case 'turn_page_down':
      return turnPage('next');
    case 'turn_page_right':
      return turnPage(handleSwapPageTurnKey(store.option.dir !== 'rtl'));
    case 'turn_page_left':
      return turnPage(handleSwapPageTurnKey(store.option.dir === 'rtl'));
    case 'jump_to_home':
      return setState(state => {
        state.activePageIndex = 0;
      });
    case 'jump_to_end':
      return setState(state => {
        state.activePageIndex = state.pageList.length - 1;
      });
    case 'switch_page_fill':
      return switchFillEffect();
    case 'switch_scroll_mode':
      return switchScrollMode();
    case 'switch_single_double_page_mode':
      return switchOnePageMode();
    case 'switch_dir':
      return switchDir();
    case 'switch_auto_enlarge':
      return setOption(draftOption => {
        draftOption.disableZoom = !draftOption.disableZoom;
      });
    case 'exit':
      return store.onExit?.();
  }
};
const handleMouseDown = e => {
  if (e.button !== 1 || store.option.scrollMode) return;
  e.stopPropagation();
  e.preventDefault();
  switchFillEffect();
};
const focus = () => (store.mangaFlowRef ?? store.rootRef)?.parentElement?.focus();

const _tmpl$$C = /*#__PURE__*/web.template(\`<img>\`);
/** 检查已加载图片中是否**连续**出现了多个指定类型的图片 */
const checkImgTypeCount = (state, fn, maxNum = 3) => {
  let num = 0;
  for (let i = 0; i < state.imgList.length; i++) {
    const img = state.imgList[i];
    if (img.loadType !== 'loaded') continue;
    if (!fn(img)) {
      num = 0;
      continue;
    }
    num += 1;
    if (num >= maxNum) return true;
  }
  return false;
};

/** 图片加载完毕的回调 */
const handleImgLoaded = (i, e) => {
  setState(state => {
    const img = state.imgList[i];
    if (!img) return;
    if (img.loadType === 'error' && e.src !== img.src) return;
    img.loadType = 'loaded';
    img.height = e.naturalHeight;
    img.width = e.naturalWidth;
    updateImgType(state, img);
    state.onLoading?.(state.imgList, img);
    // 因为火狐浏览器在图片进入视口前，即使已经加载完了也不会对图片进行解码
    // 所以需要手动调用 decode 提前解码，防止在翻页时闪烁
    e.decode();
    switch (img.type) {
      // 连续出现多张跨页图后，将剩余未加载图片类型设为跨页图
      case 'long':
      case 'wide':
        {
          if (!state.flag.autoWide || !checkImgTypeCount(state, isWideImg)) return;
          state.imgList.forEach((comicImg, index) => {
            if (comicImg.loadType === 'wait' && comicImg.type === '') state.imgList[index].type = 'wide';
          });
          state.flag.autoWide = false;
          break;
        }

      // 连续出现多张长图后，自动开启卷轴模式
      case 'vertical':
        {
          if (!state.flag.autoScrollMode || !checkImgTypeCount(state, image => image.type === 'vertical')) return;
          state.option.scrollMode = true;
          state.flag.autoScrollMode = false;
          break;
        }
    }
  });
};

/** 图片加载出错的回调 */
const handleImgError = (i, e) => {
  // 跳过因为 src 为空导致的错误
  if (e.getAttribute('src') === '') return;
  setState(state => {
    const img = state.imgList[i];
    if (!img) return;
    img.loadType = 'error';
    log.error(t('alert.img_load_failed'), e);
    state.onLoading?.(state.imgList, img);
  });
};

/** 漫画图片 */
const ComicImg = props => {
  const show = solidJs.createMemo(() => store.option.scrollMode || activePage().includes(props.index));
  const fill = solidJs.createMemo(() => {
    if (!show() || activePage().length === 1) return;

    // 判断是否有填充页
    const fillIndex = activePage().indexOf(-1);
    if (fillIndex !== -1) return ifNot(fillIndex, store.option.dir !== 'rtl') ? 'left' : 'right';

    // 判断自己的类型
    if (props.img.loadType !== 'loaded') return ifNot(activePage().indexOf(props.index), store.option.dir === 'rtl') ? 'left' : 'right';

    // 判断另一张图
    const anotherImg = store.imgList[activePage().find(i => i !== props.index)];
    if (anotherImg.loadType !== 'loaded') return ifNot(activePage().indexOf(props.index), store.option.dir === 'rtl') ? 'left' : 'right';
  });
  const src = solidJs.createMemo(() => {
    if (props.img.loadType === 'wait') return '';
    if (props.img.translationType === 'show') return props.img.translationUrl;
    return props.img.src;
  });

  // 如果要显示的是出错图片，就重新加载一次
  solidJs.createEffect(solidJs.on(show, () => {
    if (show() && props.img.loadType === 'error') _setState('imgList', props.index, 'loadType', 'loading');
  }));
  return (() => {
    const _el$ = _tmpl$$C();
    _el$.addEventListener("error", e => handleImgError(props.index, e.currentTarget));
    _el$.addEventListener("load", e => handleImgLoaded(props.index, e.currentTarget));
    web.effect(_p$ => {
      const _v$ = modules_c21c94f2$1.img,
        _v$2 = store.option.scrollMode && props.img.width ? \`min(100vw, \${props.img.width}px)\` : undefined,
        _v$3 = src(),
        _v$4 = \`\${props.index + 1}\`,
        _v$5 = show() ? '' : undefined,
        _v$6 = fill(),
        _v$7 = props.img.type || undefined,
        _v$8 = props.img.loadType === 'loaded' ? undefined : props.img.loadType;
      _v$ !== _p$._v$ && web.className(_el$, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && ((_p$._v$2 = _v$2) != null ? _el$.style.setProperty("--width", _v$2) : _el$.style.removeProperty("--width"));
      _v$3 !== _p$._v$3 && web.setAttribute(_el$, "src", _p$._v$3 = _v$3);
      _v$4 !== _p$._v$4 && web.setAttribute(_el$, "alt", _p$._v$4 = _v$4);
      _v$5 !== _p$._v$5 && web.setAttribute(_el$, "data-show", _p$._v$5 = _v$5);
      _v$6 !== _p$._v$6 && web.setAttribute(_el$, "data-fill", _p$._v$6 = _v$6);
      _v$7 !== _p$._v$7 && web.setAttribute(_el$, "data-type", _p$._v$7 = _v$7);
      _v$8 !== _p$._v$8 && web.setAttribute(_el$, "data-load-type", _p$._v$8 = _v$8);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined
    });
    return _el$;
  })();
};

const _tmpl$$B = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="m21.19 21.19-.78-.78L18 18l-4.59-4.59-9.82-9.82-.78-.78a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22L3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61c.39.39 1.02.39 1.41 0 .39-.39.39-1.03 0-1.42zM6.02 18c-.42 0-.65-.48-.39-.81l2.49-3.2a.5.5 0 0 1 .78-.01l2.1 2.53L12.17 15l3 3H6.02zm14.98.17L5.83 3H19c1.1 0 2 .9 2 2v13.17z">\`);
const MdImageNotSupported = ((props = {}) => (() => {
  const _el$ = _tmpl$$B();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$A = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-4.65 4.65c-.2.2-.51.2-.71 0L7 13h3V9h4v4h3z">\`);
const MdCloudDownload = ((props = {}) => (() => {
  const _el$ = _tmpl$$A();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$z = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68a.5.5 0 0 1-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02z">\`);
const MdPhoto = ((props = {}) => (() => {
  const _el$ = _tmpl$$z();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const loadTypeSvg = {
  error: MdImageNotSupported,
  loading: MdCloudDownload,
  wait: MdCloudDownload
};
const getComponent = img => {
  if (!img) return;
  if (!img.src) return MdPhoto;
  return loadTypeSvg[img.loadType];
};
const ShowSvg = index => {
  const position = solidJs.createMemo(() => {
    if (activePage().length === 1) return;
    return activePage().indexOf(index) ? 'after' : 'before';
  });
  return web.createComponent(web.Dynamic, {
    get component() {
      return getComponent(store.imgList[index]);
    },
    get style() {
      return {
        transform: position() && \`translate(\${position() === 'before' ? '' : '-'}100%)\`
      };
    }
  });
};
const LoadTypeTip = () => web.createComponent(solidJs.For, {
  get each() {
    return activePage();
  },
  children: ShowSvg
});

const _tmpl$$y = /*#__PURE__*/web.template(\`<div><div data-area="prev" role="button" tabindex="-1"><h6></h6></div><div data-area="menu" role="button" tabindex="-1"><h6></h6></div><div data-area="next" role="button" tabindex="-1"><h6>\`);
const handleClick = {
  prev: () => {
    if (store.option.clickPageTurn.enabled) turnPage('prev');
  },
  next: () => {
    if (store.option.clickPageTurn.enabled) turnPage('next');
  },
  menu: () => {
    // 处于放大模式时跳过不处理
    if (store.isZoomed) return;
    setState(state => {
      state.showScrollbar = !state.showScrollbar;
      state.showToolbar = !state.showToolbar;
    });
  }
};

/** 根据点击坐标触发指定的操作 */
const handlePageClick = ({
  clientX: x,
  clientY: y
}) => {
  if (store.isZoomed) return;

  // 找到当前
  const targetArea = [store.nextAreaRef, store.menuAreaRef, store.prevAreaRef].find(e => {
    if (!e) return false;
    const rect = e.getBoundingClientRect();
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  });
  if (!targetArea) return;
  handleClick[targetArea.getAttribute('data-area')]();
};
const TouchArea = () => (() => {
  const _el$ = _tmpl$$y(),
    _el$2 = _el$.firstChild,
    _el$3 = _el$2.firstChild,
    _el$4 = _el$2.nextSibling,
    _el$5 = _el$4.firstChild,
    _el$6 = _el$4.nextSibling,
    _el$7 = _el$6.firstChild;
  const _ref$ = bindRef('prevAreaRef');
  typeof _ref$ === "function" && web.use(_ref$, _el$2);
  web.insert(_el$3, () => t('touch_area.prev'));
  const _ref$2 = bindRef('menuAreaRef');
  typeof _ref$2 === "function" && web.use(_ref$2, _el$4);
  web.insert(_el$5, () => t('touch_area.menu'));
  const _ref$3 = bindRef('nextAreaRef');
  typeof _ref$3 === "function" && web.use(_ref$3, _el$6);
  web.insert(_el$7, () => t('touch_area.next'));
  web.effect(_p$ => {
    const _v$ = modules_c21c94f2$1.touchAreaRoot,
      _v$2 = ifNot(store.option.clickPageTurn.enabled && store.option.clickPageTurn.reverse, store.option.dir !== 'rtl') ? undefined : 'row-reverse',
      _v$3 = store.isZoomed ? 'move' : undefined,
      _v$4 = store.showTouchArea,
      _v$5 = store.option.clickPageTurn.vertical,
      _v$6 = store.option.scrollMode,
      _v$7 = modules_c21c94f2$1.touchArea,
      _v$8 = modules_c21c94f2$1.touchArea,
      _v$9 = modules_c21c94f2$1.touchArea;
    _v$ !== _p$._v$ && web.className(_el$, _p$._v$ = _v$);
    _v$2 !== _p$._v$2 && ((_p$._v$2 = _v$2) != null ? _el$.style.setProperty("flex-direction", _v$2) : _el$.style.removeProperty("flex-direction"));
    _v$3 !== _p$._v$3 && ((_p$._v$3 = _v$3) != null ? _el$.style.setProperty("cursor", _v$3) : _el$.style.removeProperty("cursor"));
    _v$4 !== _p$._v$4 && web.setAttribute(_el$, "data-show", _p$._v$4 = _v$4);
    _v$5 !== _p$._v$5 && web.setAttribute(_el$, "data-vert", _p$._v$5 = _v$5);
    _v$6 !== _p$._v$6 && web.setAttribute(_el$, "data-scroll-mode", _p$._v$6 = _v$6);
    _v$7 !== _p$._v$7 && web.className(_el$2, _p$._v$7 = _v$7);
    _v$8 !== _p$._v$8 && web.className(_el$4, _p$._v$8 = _v$8);
    _v$9 !== _p$._v$9 && web.className(_el$6, _p$._v$9 = _v$9);
    return _p$;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined,
    _v$5: undefined,
    _v$6: undefined,
    _v$7: undefined,
    _v$8: undefined,
    _v$9: undefined
  });
  return _el$;
})();

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

/** 在鼠标静止一段时间后自动隐藏 */
const useHiddenMouse = () => {
  const [hiddenMouse, setHiddenMouse] = solidJs.createSignal(true);
  const hidden = debounce(1000, () => setHiddenMouse(true));
  return {
    hiddenMouse,
    /** 鼠标移动 */
    onMouseMove: () => {
      setHiddenMouse(false);
      hidden();
    }
  };
};

const _tmpl$$x = /*#__PURE__*/web.template(\`<div tabindex="-1"><div>\`),
  _tmpl$2$9 = /*#__PURE__*/web.template(\`<h1>NULL\`);

/**
 * 漫画图片流的容器
 */
const ComicImgFlow = () => {
  const handleClick = e => handlePageClick(e);

  /** 处理双击缩放 */
  const handleDoubleClickZoom = e => {
    setTimeout(() => {
      if (!store.panzoom || store.option.scrollMode) return;
      const {
        scale
      } = store.panzoom.getTransform();

      // 当缩放到一定程度时再双击会缩放回原尺寸，否则正常触发缩放
      if (scale >= 2) store.panzoom.smoothZoomAbs(0, 0, 1);else store.panzoom.smoothZoomAbs(e.clientX, e.clientY, scale + 1);
    });
  };
  const {
    hiddenMouse,
    onMouseMove
  } = useHiddenMouse();
  return (() => {
    const _el$ = _tmpl$$x(),
      _el$2 = _el$.firstChild;
    web.use(e => e.addEventListener('scroll', handleMangaFlowScroll, {
      passive: true
    }), _el$);
    _el$.addEventListener("mousemove", onMouseMove);
    const _ref$ = bindRef('mangaFlowRef', initPanzoom);
    typeof _ref$ === "function" && web.use(_ref$, _el$2);
    _el$2.addEventListener("click", useDoubleClick(handleClick, handleDoubleClickZoom));
    web.insert(_el$2, web.createComponent(solidJs.Index, {
      get each() {
        return store.imgList;
      },
      get fallback() {
        return _tmpl$2$9();
      },
      children: (img, i) => web.createComponent(ComicImg, {
        get img() {
          return img();
        },
        index: i
      })
    }), null);
    web.insert(_el$2, web.createComponent(LoadTypeTip, {}), null);
    web.effect(_p$ => {
      const _v$ = modules_c21c94f2$1.mangaFlowBox,
        _v$2 = store.option.scrollMode ? 'auto' : 'hidden',
        _v$3 = hiddenMouse(),
        _v$4 = modules_c21c94f2$1.mangaFlow,
        _v$5 = modules_c21c94f2$1.mangaFlow,
        _v$6 = {
          [modules_c21c94f2$1.disableZoom]: store.option.disableZoom || store.option.scrollMode,
          [modules_c21c94f2$1.scrollMode]: store.option.scrollMode
        },
        _v$7 = store.option.dir;
      _v$ !== _p$._v$ && web.className(_el$, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && ((_p$._v$2 = _v$2) != null ? _el$.style.setProperty("overflow", _v$2) : _el$.style.removeProperty("overflow"));
      _v$3 !== _p$._v$3 && web.setAttribute(_el$, "data-hiddenmouse", _p$._v$3 = _v$3);
      _v$4 !== _p$._v$4 && web.setAttribute(_el$2, "id", _p$._v$4 = _v$4);
      _v$5 !== _p$._v$5 && web.className(_el$2, _p$._v$5 = _v$5);
      _p$._v$6 = web.classList(_el$2, _v$6, _p$._v$6);
      _v$7 !== _p$._v$7 && web.setAttribute(_el$2, "dir", _p$._v$7 = _v$7);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return _el$;
  })();
};

const _tmpl$$w = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 14c-.55 0-1-.45-1-1V9h-1c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1z">\`);
const MdLooksOne = ((props = {}) => (() => {
  const _el$ = _tmpl$$w();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$v = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.1-.9 2-2 2h-2v2h3c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-1.1.9-2 2-2h2V9h-3c-.55 0-1-.45-1-1s.45-1 1-1h3c1.1 0 2 .9 2 2v2z">\`);
const MdLooksTwo = ((props = {}) => (() => {
  const _el$ = _tmpl$$v();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$u = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M3 21h17c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 4v1c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1z">\`);
const MdViewDay = ((props = {}) => (() => {
  const _el$ = _tmpl$$u();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$t = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 9h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3V6c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z">\`);
const MdQueue = ((props = {}) => (() => {
  const _el$ = _tmpl$$t();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$s = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68zm-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">\`);
const MdSettings = ((props = {}) => (() => {
  const _el$ = _tmpl$$s();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$r = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">\`);
const MdSearch = ((props = {}) => (() => {
  const _el$ = _tmpl$$r();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$q = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M12.65 15.67c.14-.36.05-.77-.23-1.05l-2.09-2.06.03-.03A17.52 17.52 0 0 0 14.07 6h1.94c.54 0 .99-.45.99-.99v-.02c0-.54-.45-.99-.99-.99H10V3c0-.55-.45-1-1-1s-1 .45-1 1v1H1.99c-.54 0-.99.45-.99.99 0 .55.45.99.99.99h10.18A15.66 15.66 0 0 1 9 11.35c-.81-.89-1.49-1.86-2.06-2.88A.885.885 0 0 0 6.16 8c-.69 0-1.13.75-.79 1.35.63 1.13 1.4 2.21 2.3 3.21L3.3 16.87a.99.99 0 0 0 0 1.42c.39.39 1.02.39 1.42 0L9 14l2.02 2.02c.51.51 1.38.32 1.63-.35zM17.5 10c-.6 0-1.14.37-1.35.94l-3.67 9.8c-.24.61.22 1.26.87 1.26.39 0 .74-.24.88-.61l.89-2.39h4.75l.9 2.39c.14.36.49.61.88.61.65 0 1.11-.65.88-1.26l-3.67-9.8c-.22-.57-.76-.94-1.36-.94zm-1.62 7 1.62-4.33L19.12 17h-3.24z">\`);
const MdTranslate = ((props = {}) => (() => {
  const _el$ = _tmpl$$q();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$p = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M9 10v4c0 .55.45 1 1 1s1-.45 1-1V4h2v10c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1H9.17C7.08 2 5.22 3.53 5.02 5.61A3.998 3.998 0 0 0 9 10zm11.65 7.65-2.79-2.79a.501.501 0 0 0-.86.35V17H6c-.55 0-1 .45-1 1s.45 1 1 1h11v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7z">\`);
const MdOutlineFormatTextdirectionLToR = ((props = {}) => (() => {
  const _el$ = _tmpl$$p();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$o = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M10 10v4c0 .55.45 1 1 1s1-.45 1-1V4h2v10c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1h-6.83C8.08 2 6.22 3.53 6.02 5.61A3.998 3.998 0 0 0 10 10zm-2 7v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.36V19h11c.55 0 1-.45 1-1s-.45-1-1-1H8z">\`);
const MdOutlineFormatTextdirectionRToL = ((props = {}) => (() => {
  const _el$ = _tmpl$$o();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$n = /*#__PURE__*/web.template(\`<div><div> <!> \`);
/** 设置菜单项 */
const SettingsItem = props => (() => {
  const _el$ = _tmpl$$n(),
    _el$2 = _el$.firstChild,
    _el$3 = _el$2.firstChild,
    _el$5 = _el$3.nextSibling;
    _el$5.nextSibling;
  web.insert(_el$2, () => props.name, _el$5);
  web.insert(_el$, () => props.children, null);
  web.effect(_p$ => {
    const _v$ = props.class ? \`\${modules_c21c94f2$1.SettingsItem} \${props.class}\` : modules_c21c94f2$1.SettingsItem,
      _v$2 = {
        [props.class ?? '']: !!props.class?.length,
        ...props.classList
      },
      _v$3 = props.style,
      _v$4 = modules_c21c94f2$1.SettingsItemName;
    _v$ !== _p$._v$ && web.className(_el$, _p$._v$ = _v$);
    _p$._v$2 = web.classList(_el$, _v$2, _p$._v$2);
    _p$._v$3 = web.style(_el$, _v$3, _p$._v$3);
    _v$4 !== _p$._v$4 && web.className(_el$2, _p$._v$4 = _v$4);
    return _p$;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined
  });
  return _el$;
})();

const _tmpl$$m = /*#__PURE__*/web.template(\`<button type="button"><div>\`);
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
      const _el$ = _tmpl$$m(),
        _el$2 = _el$.firstChild;
      _el$.addEventListener("click", handleClick);
      web.effect(_p$ => {
        const _v$ = modules_c21c94f2$1.SettingsItemSwitch,
          _v$2 = props.value,
          _v$3 = modules_c21c94f2$1.SettingsItemSwitchRound;
        _v$ !== _p$._v$ && web.className(_el$, _p$._v$ = _v$);
        _v$2 !== _p$._v$2 && web.setAttribute(_el$, "data-checked", _p$._v$2 = _v$2);
        _v$3 !== _p$._v$3 && web.className(_el$2, _p$._v$3 = _v$3);
        return _p$;
      }, {
        _v$: undefined,
        _v$2: undefined,
        _v$3: undefined
      });
      return _el$;
    }
  });
};

const _tmpl$$l = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M17.65 6.35a7.95 7.95 0 0 0-6.48-2.31c-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20a7.98 7.98 0 0 0 7.21-4.56c.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53a5.994 5.994 0 0 1-6.8 3.31c-2.22-.49-4.01-2.3-4.48-4.52A6.002 6.002 0 0 1 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71l-.64.65z">\`);
const MdRefresh = ((props = {}) => (() => {
  const _el$ = _tmpl$$l();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$k = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z">\`);
const MdAdd = ((props = {}) => (() => {
  const _el$ = _tmpl$$k();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$j = /*#__PURE__*/web.template(\`<div tabindex="0">\`),
  _tmpl$2$8 = /*#__PURE__*/web.template(\`<div><div><p></p><span></span><div></div><div>\`);
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
    const newCode = getKeyboardCode(e);
    if (!Reflect.has(hotkeysMap(), newCode)) setHotkeys(props.operateName, props.i, newCode);
  };
  return (() => {
    const _el$ = _tmpl$$j();
    _el$.addEventListener("blur", () => code() || del());
    web.use(ref => code() || setTimeout(() => ref.focus()), _el$);
    _el$.addEventListener("keydown", handleKeyDown);
    web.insert(_el$, () => keyboardCodeToText(code()), null);
    web.insert(_el$, web.createComponent(MdClose, {
      "on:click": del
    }), null);
    web.effect(() => web.className(_el$, modules_c21c94f2$1.hotkeysItem));
    return _el$;
  })();
};
const SettingHotkeys = () => web.createComponent(solidJs.For, {
  get each() {
    return Object.entries(store.hotkeys);
  },
  children: ([name, keys]) => (() => {
    const _el$2 = _tmpl$2$8(),
      _el$3 = _el$2.firstChild,
      _el$4 = _el$3.firstChild,
      _el$5 = _el$4.nextSibling,
      _el$6 = _el$5.nextSibling,
      _el$7 = _el$6.nextSibling;
    web.insert(_el$4, () => t(\`hotkeys.\${name}\`) || name);
    _el$5.style.setProperty("flex-grow", "1");
    _el$6.addEventListener("click", () => setHotkeys(name, store.hotkeys[name].length, ''));
    web.insert(_el$6, web.createComponent(MdAdd, {}));
    _el$7.addEventListener("click", () => {
      const newKeys = defaultHotkeys[name] ?? [];
      newKeys.forEach(delHotkeys);
      setHotkeys(name, newKeys);
    });
    web.insert(_el$7, web.createComponent(MdRefresh, {}));
    web.insert(_el$2, web.createComponent(solidJs.Index, {
      each: keys,
      children: (_, i) => web.createComponent(KeyItem, {
        operateName: name,
        i: i
      })
    }), null);
    web.effect(_p$ => {
      const _v$ = modules_c21c94f2$1.hotkeys,
        _v$2 = modules_c21c94f2$1.hotkeysHeader,
        _v$3 = t('setting.hotkeys.add'),
        _v$4 = t('setting.hotkeys.restore');
      _v$ !== _p$._v$ && web.className(_el$2, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && web.className(_el$3, _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && web.setAttribute(_el$6, "title", _p$._v$3 = _v$3);
      _v$4 !== _p$._v$4 && web.setAttribute(_el$7, "title", _p$._v$4 = _v$4);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return _el$2;
  })()
});

const _tmpl$$i = /*#__PURE__*/web.template(\`<select>\`),
  _tmpl$2$7 = /*#__PURE__*/web.template(\`<option>\`);
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
      const _el$ = _tmpl$$i();
      _el$.addEventListener("change", e => props.onChange(e.target.value));
      const _ref$ = ref;
      typeof _ref$ === "function" ? web.use(_ref$, _el$) : ref = _el$;
      _el$.addEventListener("click", () => props.onClick?.());
      web.insert(_el$, web.createComponent(solidJs.For, {
        get each() {
          return props.options;
        },
        children: ([val, label]) => (() => {
          const _el$2 = _tmpl$2$7();
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

const setMessage = (i, msg) => {
  setState(state => {
    state.imgList[i].translationMessage = msg;
  });
  updateTipText();
};
const request = (url, details) => new Promise((resolve, reject) => {
  if (typeof GM_xmlhttpRequest === 'undefined') reject(new Error(t('pwa.alert.userscript_not_installed')));
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
const createOptions = list => list.map(name => [name, t(\`translation.translator.\${name}\`) || name]);

const url = () => store.option.translation.localUrl || 'http://127.0.0.1:5003';

/** 获取部署服务的可用翻译 */
const getValidTranslators = async () => {
  try {
    const res = await request(\`\${url()}\`);
    const translatorsText = res.responseText.match(/(?<=validTranslators: ).+?(?=,\\n)/)?.[0];
    if (!translatorsText) return undefined;
    const list = JSON.parse(translatorsText.replaceAll(\`'\`, \`"\`));
    return createOptions(list);
  } catch (e) {
    log.error(t('translation.tip.get_translator_list_error'), e);
    return undefined;
  }
};

/** 使用自部署服务器翻译指定图片 */
const selfhostedTranslation = async i => {
  if (!(await getValidTranslators())) throw new Error(t('alert.server_connect_failed'));
  const img = store.imgList[i];
  setMessage(i, t('translation.tip.img_downloading'));
  let imgBlob;
  try {
    imgBlob = await download(img.src);
  } catch (error) {
    log.error(error);
    throw new Error(t('translation.tip.download_img_failed'));
  }
  let task_id;
  // 上传图片取得任务 id
  try {
    const res = await request(\`\${url()}/submit\`, {
      method: 'POST',
      data: createFormData(imgBlob)
    });
    const resData = JSON.parse(res.responseText);
    task_id = resData.task_id;
  } catch (error) {
    log.error(error);
    throw new Error(t('translation.tip.upload_error'));
  }
  let errorNum = 0;
  let taskState;
  // 等待翻译完成
  while (!taskState?.finished) {
    try {
      await sleep(200);
      const res = await request(\`\${url()}/task-state?taskid=\${task_id}\`);
      taskState = JSON.parse(res.responseText);
      setMessage(i, \`\${t(\`translation.status.\${taskState.state}\`) || taskState.state}\`);
    } catch (error) {
      log.error(error);
      if (errorNum > 5) throw new Error(t('translation.tip.check_img_status_failed'));
      errorNum += 1;
    }
  }
  return URL.createObjectURL(await download(\`\${url()}/result/\${task_id}\`));
};

/** 等待翻译完成 */
const waitTranslation = (id, i) => {
  const ws = new WebSocket(\`wss://api.cotrans.touhou.ai/task/\${id}/event/v1\`);
  return new Promise((resolve, reject) => {
    ws.onmessage = e => {
      const msg = JSON.parse(e.data);
      switch (msg.type) {
        case 'result':
          resolve(msg.result.translation_mask);
          break;
        case 'pending':
          setMessage(i, t('translation.tip.pending', {
            pos: msg.pos
          }));
          break;
        case 'status':
          setMessage(i, t(\`translation.status.\${msg.status}\`) || msg.status);
          break;
        case 'error':
          reject(new Error(\`\${t('translation.tip.error')}：id \${msg.error_id}\`));
          break;
        case 'not_found':
          reject(new Error(\`\${t('translation.tip.error')}：Not Found\`));
          break;
      }
    };
  });
};

/** 将翻译后的内容覆盖到原图上 */
const mergeImage = async (rawImage, maskUri) => {
  const canvas = document.createElement('canvas');
  const canvasCtx = canvas.getContext('2d');
  const img = new Image();
  img.src = URL.createObjectURL(rawImage);
  await new Promise((resolve, reject) => {
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      canvasCtx.drawImage(img, 0, 0);
      resolve(null);
    };
    img.onerror = reject;
  });
  const img2 = new Image();
  img2.src = maskUri;
  img2.crossOrigin = 'anonymous';
  await new Promise(resolve => {
    img2.onload = () => {
      canvasCtx.drawImage(img2, 0, 0);
      resolve(null);
    };
  });
  return URL.createObjectURL(await canvasToBlob(canvas));
};

/** 缩小过大的图片 */
const resize = async (blob, w, h) => {
  if (w <= 4096 && h <= 4096) return blob;
  const img = new Image();
  img.src = URL.createObjectURL(blob);
  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
  });
  if (w <= 4096 && h <= 4096) return blob;
  const scale = Math.min(4096 / w, 4096 / h);
  const width = Math.floor(w * scale);
  const height = Math.floor(h * scale);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, width, height);
  URL.revokeObjectURL(img.src);
  return canvasToBlob(canvas);
};

/** 使用 cotrans 翻译指定图片 */
const cotransTranslation = async i => {
  const img = store.imgList[i];
  setMessage(i, t('translation.tip.img_downloading'));
  let imgBlob;
  try {
    imgBlob = await download(img.src);
  } catch (error) {
    log.error(error);
    throw new Error(t('translation.tip.download_img_failed'));
  }
  try {
    imgBlob = await resize(imgBlob, img.width, img.height);
  } catch (error) {
    log.error(error);
    throw new Error(t('translation.tip.resize_img_failed'));
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
    log.error(error);
    throw new Error(t('translation.tip.upload_error'));
  }
  let resData;
  try {
    resData = JSON.parse(res.responseText);
  } catch (_) {
    throw new Error(\`\${t('translation.tip.upload_return_error')}：\${res.responseText}\`);
  }
  if ('error_id' in resData) throw new Error(\`\${t('translation.tip.upload_return_error')}：\${resData.error_id}\`);
  if (!resData.id) throw new Error(t('translation.tip.id_not_returned'));
  const translation_mask = resData.result?.translation_mask || (await waitTranslation(resData.id, i));
  return mergeImage(imgBlob, translation_mask);
};
const cotransTranslators = ['google', 'youdao', 'baidu', 'deepl', 'gpt3.5', 'offline', 'none'];

/** 翻译指定图片 */
const translationImage = async i => {
  try {
    if (typeof GM_xmlhttpRequest === 'undefined') {
      toast?.error(t('pwa.alert.userscript_not_installed'));
      throw new Error(t('pwa.alert.userscript_not_installed'));
    }
    const img = store.imgList[i];
    if (!img?.src) return;
    if (img.translationType !== 'wait') return;
    if (img.translationUrl) return setState(state => {
      state.imgList[i].translationType = 'show';
    });
    if (img.loadType !== 'loaded') return setMessage(i, t('translation.tip.img_not_fully_loaded'));
    const translationUrl = await (store.option.translation.server === 'cotrans' ? cotransTranslation : selfhostedTranslation)(i);
    setState(state => {
      state.imgList[i].translationUrl = translationUrl;
      state.imgList[i].translationMessage = t('translation.tip.translation_completed');
      state.imgList[i].translationType = 'show';
    });
  } catch (error) {
    setState(state => {
      state.imgList[i].translationType = 'error';
      if (error.message) state.imgList[i].translationMessage = error.message;
    });
  } finally {
    updateTipText();
  }
};
let running = false;

/** 逐个翻译状态为等待翻译的图片 */
const translationAll = async () => {
  if (running) return;
  const i = store.imgList.findIndex(img => img.loadType === 'loaded' && img.translationType === 'wait');
  if (i === -1) return;
  running = true;
  try {
    await translationImage(i);
  } finally {
    running = false;
  }
  return translationAll();
};

/** 开启或关闭指定图片的翻译 */
const setImgTranslationEnbale = (list, enbale) => {
  setState(state => {
    list.forEach(i => {
      const img = state.imgList[i];
      if (!img) return;
      if (enbale) {
        if (state.option.translation.forceRetry) {
          img.translationType = 'wait';
          img.translationUrl = undefined;
          setMessage(i, t('translation.tip.wait_translation'));
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
                setMessage(i, t('translation.tip.wait_translation'));
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
    });
  });
  return translationAll();
};
const translatorOptions = solidJs.createRoot(() => {
  const [selfhostedOptions, setSelfOptions] = solidJs.createSignal([]);

  // 在切换翻译服务器的同时切换可用翻译的选项列表
  solidJs.createEffect(solidJs.on([() => store.option.translation.server, () => store.option.translation.localUrl], async () => {
    if (store.option.translation.server !== 'selfhosted') return;
    setSelfOptions((await getValidTranslators()) ?? []);

    // 如果切换服务器后原先选择的翻译服务失效了，就换成谷歌翻译
    if (!selfhostedOptions().some(([val]) => val === store.option.translation.options.translator)) {
      setOption(draftOption => {
        draftOption.translation.options.translator = 'google';
      });
    }
  }));
  const options = solidJs.createMemo(solidJs.on([selfhostedOptions, lang], () => store.option.translation.server === 'selfhosted' ? selfhostedOptions() : createOptions(cotransTranslators)));
  return options;
});

const _tmpl$$h = /*#__PURE__*/web.template(\`<div><div>\`);

/** 带有动画过渡的切换显示设置项 */
const SettingsShowItem = props => (() => {
  const _el$ = _tmpl$$h(),
    _el$2 = _el$.firstChild;
  web.insert(_el$2, () => props.children);
  web.effect(_p$ => {
    const _v$ = modules_c21c94f2$1.SettingsShowItem,
      _v$2 = props.when ? '1fr' : '0fr',
      _v$3 = modules_c21c94f2$1.SettingsShowItemBody;
    _v$ !== _p$._v$ && web.className(_el$, _p$._v$ = _v$);
    _v$2 !== _p$._v$2 && ((_p$._v$2 = _v$2) != null ? _el$.style.setProperty("grid-template-rows", _v$2) : _el$.style.removeProperty("grid-template-rows"));
    _v$3 !== _p$._v$3 && web.className(_el$2, _p$._v$3 = _v$3);
    return _p$;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined
  });
  return _el$;
})();

const _tmpl$$g = /*#__PURE__*/web.template(\`<blockquote>\`),
  _tmpl$2$6 = /*#__PURE__*/web.template(\`<input type="url">\`);
const SettingTranslation = () => {
  /** 是否正在翻译全部图片 */
  const isTranslationAll = solidJs.createMemo(() => store.imgList.every(img => img.translationType === 'show' || img.translationType === 'wait'));
  return [web.createComponent(SettingsItemSelect, {
    get name() {
      return t('setting.translation.server');
    },
    get options() {
      return [['disable', t('other.disable')], ['selfhosted', t('setting.translation.server_selfhosted')], ['cotrans']];
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
      const _el$ = _tmpl$$g();
      web.effect(() => _el$.innerHTML = t('setting.translation.cotrans_tip'));
      return _el$;
    }
  }), web.createComponent(SettingsShowItem, {
    get when() {
      return store.option.translation.server !== 'disable';
    },
    get children() {
      return [web.createComponent(SettingsItemSelect, {
        get name() {
          return t('setting.translation.options.detection_resolution');
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
          return t('setting.translation.options.text_detector');
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
          return t('setting.translation.options.translator');
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
          return t('setting.translation.options.direction');
        },
        get options() {
          return [['auto', t('setting.translation.options.direction_auto')], ['h', t('setting.translation.options.direction_horizontal')], ['v', t('setting.translation.options.direction_vertical')]];
        },
        get value() {
          return store.option.translation.options.direction;
        },
        get onChange() {
          return createStateSetFn('translation.options.direction');
        }
      }), web.createComponent(SettingsItemSelect, {
        get name() {
          return t('setting.translation.options.target_language');
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
          return t('setting.translation.options.forceRetry');
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
              return t('setting.translation.translate_all_img');
            },
            get value() {
              return isTranslationAll();
            },
            onChange: () => setImgTranslationEnbale(store.imgList.map((_, i) => i), !isTranslationAll())
          }), web.createComponent(SettingsItemSwitch, {
            get name() {
              return t('setting.translation.options.localUrl');
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
              const _el$2 = _tmpl$2$6();
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
      })];
    }
  })];
};

const _tmpl$$f = /*#__PURE__*/web.template(\`<button type="button">\`),
  _tmpl$2$5 = /*#__PURE__*/web.template(\`<div contenteditable data-only-number>\`),
  _tmpl$3$4 = /*#__PURE__*/web.template(\`<input type="color">\`);
/** 默认菜单项 */
const defaultSettingList = () => [[t('setting.option.paragraph_dir'), () => web.createComponent(SettingsItem, {
  get name() {
    return web.memo(() => store.option.dir === 'rtl')() ? t('setting.option.dir_rtl') : t('setting.option.dir_ltr');
  },
  get children() {
    const _el$ = _tmpl$$f();
    _el$.addEventListener("click", switchDir);
    web.insert(_el$, (() => {
      const _c$ = web.memo(() => store.option.dir === 'rtl');
      return () => _c$() ? web.createComponent(MdOutlineFormatTextdirectionRToL, {}) : web.createComponent(MdOutlineFormatTextdirectionLToR, {});
    })());
    web.effect(() => web.className(_el$, modules_c21c94f2$1.SettingsItemIconButton));
    return _el$;
  }
})], [t('setting.option.paragraph_scrollbar'), () => [web.createComponent(SettingsItemSwitch, {
  get name() {
    return t('setting.option.scrollbar_show');
  },
  get value() {
    return store.option.scrollbar.enabled;
  },
  get onChange() {
    return createStateSetFn('scrollbar.enabled');
  }
}), web.createComponent(SettingsShowItem, {
  get when() {
    return store.option.scrollbar.enabled;
  },
  get children() {
    return [web.createComponent(SettingsItemSwitch, {
      get name() {
        return t('setting.option.scrollbar_auto_hidden');
      },
      get value() {
        return store.option.scrollbar.autoHidden;
      },
      get onChange() {
        return createStateSetFn('scrollbar.autoHidden');
      }
    }), web.createComponent(SettingsItemSwitch, {
      get name() {
        return t('setting.option.scrollbar_show_img_status');
      },
      get value() {
        return store.option.scrollbar.showImgStatus;
      },
      get onChange() {
        return createStateSetFn('scrollbar.showImgStatus');
      }
    })];
  }
})]], [t('setting.option.paragraph_operation'), () => [web.createComponent(SettingsItemSwitch, {
  get name() {
    return t('setting.option.jump_to_next_chapter');
  },
  get value() {
    return store.option.jumpToNext;
  },
  get onChange() {
    return createStateSetFn('jumpToNext');
  }
}), web.createComponent(SettingsItemSwitch, {
  get name() {
    return t('setting.option.click_page_turn_enabled');
  },
  get value() {
    return store.option.clickPageTurn.enabled;
  },
  get onChange() {
    return createStateSetFn('clickPageTurn.enabled');
  }
}), web.createComponent(SettingsItemSwitch, {
  get name() {
    return t('setting.option.click_page_turn_vertical');
  },
  get value() {
    return store.option.clickPageTurn.vertical;
  },
  get onChange() {
    return createStateSetFn('clickPageTurn.vertical');
  }
}), web.createComponent(SettingsItemSwitch, {
  get name() {
    return t('setting.option.show_clickable_area');
  },
  get value() {
    return store.showTouchArea;
  },
  onChange: () => {
    setState(state => {
      state.showTouchArea = !state.showTouchArea;
    });
  }
}), web.createComponent(SettingsShowItem, {
  get when() {
    return store.option.clickPageTurn.enabled;
  },
  get children() {
    return web.createComponent(SettingsItemSwitch, {
      get name() {
        return t('setting.option.click_page_turn_swap_area');
      },
      get value() {
        return store.option.clickPageTurn.reverse;
      },
      get onChange() {
        return createStateSetFn('clickPageTurn.reverse');
      }
    });
  }
})]], [t('setting.option.paragraph_display'), () => [web.createComponent(SettingsItemSwitch, {
  get name() {
    return t('setting.option.dark_mode');
  },
  get value() {
    return store.option.darkMode;
  },
  get onChange() {
    return createStateSetFn('darkMode');
  }
}), web.createComponent(SettingsItemSwitch, {
  get name() {
    return t('setting.option.disable_auto_enlarge');
  },
  get value() {
    return store.option.disableZoom;
  },
  get onChange() {
    return createStateSetFn('disableZoom');
  }
})]], [t('setting.option.paragraph_hotkeys'), SettingHotkeys, true], [t('setting.option.paragraph_translation'), SettingTranslation, true], [t('setting.option.paragraph_other'), () => [web.createComponent(SettingsItemSwitch, {
  get name() {
    return t('setting.option.always_load_all_img');
  },
  get value() {
    return store.option.alwaysLoadAllImg;
  },
  onChange: val => {
    setOption(draftOption => {
      draftOption.alwaysLoadAllImg = val;
    });
    setState(updateImgLoadType);
  }
}), web.createComponent(SettingsItemSwitch, {
  get name() {
    return t('setting.option.first_page_fill');
  },
  get value() {
    return store.option.firstPageFill;
  },
  get onChange() {
    return createStateSetFn('firstPageFill');
  }
}), web.createComponent(SettingsItemSwitch, {
  get name() {
    return t('setting.option.show_comments');
  },
  get value() {
    return store.option.showComment;
  },
  get onChange() {
    return createStateSetFn('showComment');
  }
}), web.createComponent(SettingsItemSwitch, {
  get name() {
    return t('setting.option.swap_page_turn_key');
  },
  get value() {
    return store.option.swapPageTurnKey;
  },
  get onChange() {
    return createStateSetFn('swapPageTurnKey');
  }
}), web.createComponent(SettingsItem, {
  get name() {
    return t('setting.option.preload_page_num');
  },
  get children() {
    const _el$2 = _tmpl$2$5();
    _el$2.addEventListener("blur", e => {
      const number = +e.currentTarget.textContent;
      if (!Number.isNaN(number)) setOption(draftOption => {
        draftOption.preloadPageNum = clamp(0, number, 99999);
      });
      // eslint-disable-next-line no-param-reassign
      e.currentTarget.textContent = \`\${store.option.preloadPageNum}\`;
    });
    _el$2.style.setProperty("margin-right", ".7em");
    _el$2.addEventListener("input", e => e.currentTarget.textContent.length > 5 && e.currentTarget.blur());
    web.insert(_el$2, () => store.option.preloadPageNum ?? 0);
    return _el$2;
  }
}), web.createComponent(SettingsItem, {
  get name() {
    return t('setting.option.background_color');
  },
  get children() {
    const _el$3 = _tmpl$3$4();
    _el$3.style.setProperty("width", "2em");
    _el$3.style.setProperty("margin-right", ".4em");
    _el$3.addEventListener("input", throttle(20, e => {
      if (!e.target.value) return;
      setOption(draftOption => {
        // 在拉到纯黑或纯白时改回初始值
        draftOption.customBackground = e.target.value === '#000000' || e.target.value === '#ffffff' ? undefined : e.target.value;
        if (draftOption.customBackground) draftOption.darkMode = needDarkMode(draftOption.customBackground);
      });
    }));
    web.effect(() => _el$3.value = store.option.customBackground ?? (store.option.darkMode ? '#000000' : '#ffffff'));
    return _el$3;
  }
}), web.createComponent(SettingsItemSelect, {
  get name() {
    return t('setting.language');
  },
  options: [['zh', '中文'], ['en', 'English'], ['ru', 'Русский']],
  get value() {
    return lang();
  },
  onChange: setLang
})], true]];

/** 阻止事件冒泡 */
const stopPropagation = e => {
  e.stopPropagation();
};

/** 从头开始播放元素的动画 */
const playAnimation = e => e?.getAnimations().forEach(animation => {
  animation.cancel();
  animation.play();
});

const _tmpl$$e = /*#__PURE__*/web.template(\`<div>\`),
  _tmpl$2$4 = /*#__PURE__*/web.template(\`<div><div></div><div>\`),
  _tmpl$3$3 = /*#__PURE__*/web.template(\`<hr>\`);

/** 菜单面板 */
const SettingPanel = () => {
  const settingList = solidJs.createMemo(() => store.editSettingList(defaultSettingList()));
  const width = solidJs.createMemo(() => lang() !== 'zh' ? '20em' : '15em');
  return (() => {
    const _el$ = _tmpl$$e();
    web.addEventListener(_el$, "wheel", stopPropagation);
    web.addEventListener(_el$, "scroll", stopPropagation);
    web.insert(_el$, web.createComponent(solidJs.For, {
      get each() {
        return settingList();
      },
      children: ([name, SettingItem, hidden], i) => {
        const [show, setShwo] = solidJs.createSignal(!hidden);
        return [web.memo((() => {
          const _c$ = web.memo(() => !!i());
          return () => _c$() ? _tmpl$3$3() : null;
        })()), (() => {
          const _el$2 = _tmpl$2$4(),
            _el$3 = _el$2.firstChild,
            _el$4 = _el$3.nextSibling;
          _el$3.addEventListener("click", () => setShwo(prev => !prev));
          web.insert(_el$3, name, null);
          web.insert(_el$3, () => show() ? null : ' …', null);
          web.insert(_el$4, web.createComponent(SettingItem, {}));
          web.effect(_p$ => {
            const _v$3 = modules_c21c94f2$1.SettingBlock,
              _v$4 = show(),
              _v$5 = modules_c21c94f2$1.SettingBlockSubtitle,
              _v$6 = modules_c21c94f2$1.SettingBlockBody;
            _v$3 !== _p$._v$3 && web.className(_el$2, _p$._v$3 = _v$3);
            _v$4 !== _p$._v$4 && web.setAttribute(_el$2, "data-show", _p$._v$4 = _v$4);
            _v$5 !== _p$._v$5 && web.className(_el$3, _p$._v$5 = _v$5);
            _v$6 !== _p$._v$6 && web.className(_el$4, _p$._v$6 = _v$6);
            return _p$;
          }, {
            _v$3: undefined,
            _v$4: undefined,
            _v$5: undefined,
            _v$6: undefined
          });
          return _el$2;
        })()];
      }
    }));
    web.effect(_p$ => {
      const _v$ = \`\${modules_c21c94f2$1.SettingPanel} \${modules_c21c94f2$1.beautifyScrollbar}\`,
        _v$2 = width();
      _v$ !== _p$._v$ && web.className(_el$, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && ((_p$._v$2 = _v$2) != null ? _el$.style.setProperty("width", _v$2) : _el$.style.removeProperty("width"));
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _el$;
  })();
};

const _tmpl$$d = /*#__PURE__*/web.template(\`<div>\`),
  _tmpl$2$3 = /*#__PURE__*/web.template(\`<div role="button" tabindex="-1">\`);
/** 工具栏按钮分隔栏 */
const buttonListDivider = () => (() => {
  const _el$ = _tmpl$$d();
  _el$.style.setProperty("height", "1em");
  return _el$;
})();

/** 工具栏的默认按钮列表 */
const defaultButtonList = [
// 单双页模式
() => web.createComponent(IconButton, {
  get tip() {
    return web.memo(() => !!store.option.onePageMode)() ? t('button.page_mode_single') : t('button.page_mode_double');
  },
  get hidden() {
    return store.option.scrollMode;
  },
  onClick: switchOnePageMode,
  get children() {
    return web.memo(() => !!store.option.onePageMode)() ? web.createComponent(MdLooksOne, {}) : web.createComponent(MdLooksTwo, {});
  }
}),
// 卷轴模式
() => web.createComponent(IconButton, {
  get tip() {
    return t('button.scroll_mode');
  },
  get enabled() {
    return store.option.scrollMode;
  },
  onClick: switchScrollMode,
  get children() {
    return web.createComponent(MdViewDay, {});
  }
}),
// 页面填充
() => web.createComponent(IconButton, {
  get tip() {
    return t('button.page_fill');
  },
  get enabled() {
    return store.fillEffect[nowFillIndex()];
  },
  get hidden() {
    return store.option.onePageMode;
  },
  onClick: switchFillEffect,
  get children() {
    return web.createComponent(MdQueue, {});
  }
}), buttonListDivider,
// 放大模式
() => web.createComponent(IconButton, {
  get tip() {
    return t('button.zoom_in');
  },
  get enabled() {
    return store.isZoomed || store.option.scrollMode && store.option.scrollModeImgScale > 1;
  },
  onClick: () => {
    if (store.option.scrollMode) {
      return zoomScrollModeImg(store.option.scrollModeImgScale < 1 || store.option.scrollModeImgScale > 1.6 ? undefined : 0.2);
    }
    if (!store.panzoom) return;
    const {
      scale
    } = store.panzoom.getTransform();
    if (scale === 1) store.panzoom.smoothZoom(0, 0, 1.2);else store.panzoom.smoothZoomAbs(0, 0, 1);
  },
  get children() {
    return web.createComponent(MdSearch, {});
  }
}),
// 翻译设置
() => {
  /** 当前显示的图片是否正在翻译 */
  const isTranslatingImage = solidJs.createMemo(() => activePage().some(i => store.imgList[i]?.translationType && store.imgList[i].translationType !== 'hide'));
  return web.createComponent(IconButton, {
    get tip() {
      return web.memo(() => !!isTranslatingImage())() ? t('button.close_current_page_translation') : t('button.translate_current_page');
    },
    get enabled() {
      return isTranslatingImage();
    },
    get hidden() {
      return store.option.translation.server === 'disable';
    },
    onClick: () => setImgTranslationEnbale(activePage(), !isTranslatingImage()),
    get children() {
      return web.createComponent(MdTranslate, {});
    }
  });
},
// 设置
props => {
  const [showPanel, setShowPanel] = solidJs.createSignal(false);
  const handleClick = () => {
    const _showPanel = !showPanel();
    setState(state => {
      state.showToolbar = _showPanel;
    });
    setShowPanel(_showPanel);
  };
  const popper = solidJs.createMemo(() => [web.createComponent(SettingPanel, {}), (() => {
    const _el$2 = _tmpl$2$3();
    _el$2.addEventListener("click", () => {
      handleClick();
      props.onMouseLeave();
      setState(state => {
        state.showToolbar = false;
        state.showScrollbar = false;
      });
      focus();
    });
    web.effect(() => web.className(_el$2, modules_c21c94f2$1.closeCover));
    return _el$2;
  })()]);
  return web.createComponent(IconButton, {
    get tip() {
      return t('button.setting');
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

const useHover = () => {
  const [isHover, setIsHover] = solidJs.createSignal(false);
  return {
    isHover,
    /** 鼠标移入 */
    handleMouseEnter: () => setIsHover(true),
    /** 鼠标移出 */
    handleMouseLeave: () => setIsHover(false)
  };
};

const _tmpl$$c = /*#__PURE__*/web.template(\`<div role="toolbar"><div><div>\`);

/** 左侧工具栏 */
const Toolbar = () => {
  const {
    isHover,
    handleMouseEnter,
    handleMouseLeave
  } = useHover();
  const show = solidJs.createMemo(() => isHover() || store.showToolbar);
  solidJs.createEffect(() => show() || focus());
  return (() => {
    const _el$ = _tmpl$$c(),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.firstChild;
    web.addEventListener(_el$, "mouseenter", handleMouseEnter);
    web.addEventListener(_el$, "mouseleave", handleMouseLeave);
    web.insert(_el$2, web.createComponent(solidJs.For, {
      get each() {
        return store.editButtonList(defaultButtonList);
      },
      children: ButtonItem => web.createComponent(ButtonItem, {
        onMouseLeave: handleMouseLeave
      })
    }), null);
    web.effect(_p$ => {
      const _v$ = modules_c21c94f2$1.toolbar,
        _v$2 = show(),
        _v$3 = modules_c21c94f2$1.toolbarPanel,
        _v$4 = modules_c21c94f2$1.toolbarBg;
      _v$ !== _p$._v$ && web.className(_el$, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && web.setAttribute(_el$, "data-show", _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && web.className(_el$2, _p$._v$3 = _v$3);
      _v$4 !== _p$._v$4 && web.className(_el$3, _p$._v$4 = _v$4);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return _el$;
  })();
};

const defaultStata = () => ({
  type: 'start',
  xy: [0, 0],
  initial: [0, 0],
  startTime: 0
});
const state = defaultStata();
const useDrag = ref => {
  solidJs.onMount(() => {
    const controller = new AbortController();
    const {
      handleDrag
    } = dragOption;
    if (ref) {
      // 在鼠标、手指按下后切换状态
      ref.addEventListener('pointerdown', e => {
        e.stopPropagation();
        // 只处理左键按下触发的事件
        if (e.buttons !== 1) return;
        state.type = 'start';
        state.xy = [e.offsetX, e.offsetY];
        state.initial = [e.offsetX, e.offsetY];
        state.startTime = Date.now();
        handleDrag(state, e);
      }, {
        capture: false,
        passive: true,
        signal: controller.signal
      });

      // 在鼠标、手指移动时根据状态判断是否要触发函数
      ref.addEventListener('pointermove', e => {
        e.stopPropagation();
        if (state.startTime === 0) return;
        // 只处理左键按下触发的事件
        if (e.buttons !== 1) return;
        state.type = 'dragging';
        state.xy = [e.offsetX, e.offsetY];
        handleDrag(state, e);
      }, {
        capture: false,
        passive: true,
        signal: controller.signal
      });

      // 在鼠标、手指松开后切换状态
      ref.addEventListener('pointerup', e => {
        e.stopPropagation();
        if (state.startTime === 0) return;
        state.type = 'end';
        state.xy = [e.offsetX, e.offsetY];
        handleDrag(state, e);
        Object.assign(state, defaultStata());
        focus();
      }, {
        capture: false,
        passive: true,
        signal: controller.signal
      });
    }
    solidJs.onCleanup(() => controller.abort());
  });
};

const _tmpl$$b = /*#__PURE__*/web.template(\`<div>\`);

/** 显示对应图片加载情况的元素 */
const ScrollbarImg = props => {
  const img = solidJs.createMemo(() => store.imgList[props.index]);
  return (() => {
    const _el$ = _tmpl$$b();
    web.effect(_p$ => {
      const _v$ = modules_c21c94f2$1.scrollbarPage,
        _v$2 = props.index,
        _v$3 = img()?.loadType,
        _v$4 = img()?.src ? undefined : '',
        _v$5 = img()?.translationType;
      _v$ !== _p$._v$ && web.className(_el$, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && web.setAttribute(_el$, "data-index", _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && web.setAttribute(_el$, "data-type", _p$._v$3 = _v$3);
      _v$4 !== _p$._v$4 && web.setAttribute(_el$, "data-null", _p$._v$4 = _v$4);
      _v$5 !== _p$._v$5 && web.setAttribute(_el$, "data-translation-type", _p$._v$5 = _v$5);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return _el$;
  })();
};

/** 滚动条上用于显示对应页面下图片加载情况的元素 */
const ScrollbarPage = props => {
  const flexBasis = solidJs.createMemo(() => {
    if (!store.option.scrollMode) return undefined;
    return \`\${(store.imgList[props.a]?.height || windowHeight()) / contentHeight() * 100}%\`;
  });
  return (() => {
    const _el$2 = _tmpl$$b();
    web.insert(_el$2, web.createComponent(ScrollbarImg, {
      get index() {
        return props.a !== -1 ? props.a : props.b;
      }
    }), null);
    web.insert(_el$2, (() => {
      const _c$ = web.memo(() => !!props.b);
      return () => _c$() ? web.createComponent(ScrollbarImg, {
        get index() {
          return props.b !== -1 ? props.b : props.a;
        }
      }) : null;
    })(), null);
    web.effect(() => flexBasis() != null ? _el$2.style.setProperty("flex-basis", flexBasis()) : _el$2.style.removeProperty("flex-basis"));
    return _el$2;
  })();
};

const _tmpl$$a = /*#__PURE__*/web.template(\`<div role="scrollbar" tabindex="-1"><div><div>\`);

/** 滚动条 */
const Scrollbar = () => {
  /** 滚动条高度 */
  const height = solidJs.createMemo(() => store.scrollbar.dragHeight ? \`\${store.scrollbar.dragHeight * 100}%\` : \`\${1 / store.pageList.length * 100}%\`);

  /** 滚动条位置高度 */
  const top = solidJs.createMemo(() => store.option.scrollMode ? \`\${store.scrollbar.dragTop * 100}%\` : \`\${1 / store.pageList.length * 100 * store.activePageIndex}%\`);

  // 在被滚动时使自身可穿透，以便在卷轴模式下触发页面的滚动
  const [penetrate, setPenetrate] = solidJs.createSignal(false);
  const resetPenetrate = debounce(200, () => setPenetrate(false));
  const handleWheel = () => {
    setPenetrate(true);
    resetPenetrate();
  };

  /** 是否强制显示滚动条 */
  const showScrollbar = solidJs.createMemo(() => store.showScrollbar || !!penetrate());
  return (() => {
    const _el$ = _tmpl$$a(),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.firstChild;
    _el$.addEventListener("wheel", handleWheel);
    web.use(e => useDrag(e), _el$);
    web.insert(_el$3, () => store.scrollbar.tipText);
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return store.option.scrollbar.showImgStatus;
      },
      get children() {
        return web.createComponent(solidJs.For, {
          get each() {
            return store.pageList;
          },
          children: ([a, b]) => web.createComponent(ScrollbarPage, {
            a: a,
            b: b
          })
        });
      }
    }), null);
    web.effect(_p$ => {
      const _v$ = modules_c21c94f2$1.scrollbar,
        _v$2 = {
          [modules_c21c94f2$1.hidden]: !store.option.scrollbar.enabled && !showScrollbar()
        },
        _v$3 = penetrate() ? 'none' : 'auto',
        _v$4 = modules_c21c94f2$1.mangaFlow,
        _v$5 = store.activePageIndex || -1,
        _v$6 = !store.option.scrollbar.autoHidden || showScrollbar(),
        _v$7 = modules_c21c94f2$1.scrollbarDrag,
        _v$8 = height(),
        _v$9 = top(),
        _v$10 = store.option.scrollMode ? undefined : 'top 150ms',
        _v$11 = modules_c21c94f2$1.scrollbarPoper,
        _v$12 = {
          [modules_c21c94f2$1.hidden]: !store.scrollbar.tipText
        },
        _v$13 = showScrollbar();
      _v$ !== _p$._v$ && web.className(_el$, _p$._v$ = _v$);
      _p$._v$2 = web.classList(_el$, _v$2, _p$._v$2);
      _v$3 !== _p$._v$3 && ((_p$._v$3 = _v$3) != null ? _el$.style.setProperty("pointer-events", _v$3) : _el$.style.removeProperty("pointer-events"));
      _v$4 !== _p$._v$4 && web.setAttribute(_el$, "aria-controls", _p$._v$4 = _v$4);
      _v$5 !== _p$._v$5 && web.setAttribute(_el$, "aria-valuenow", _p$._v$5 = _v$5);
      _v$6 !== _p$._v$6 && web.setAttribute(_el$, "data-show", _p$._v$6 = _v$6);
      _v$7 !== _p$._v$7 && web.className(_el$2, _p$._v$7 = _v$7);
      _v$8 !== _p$._v$8 && ((_p$._v$8 = _v$8) != null ? _el$2.style.setProperty("height", _v$8) : _el$2.style.removeProperty("height"));
      _v$9 !== _p$._v$9 && ((_p$._v$9 = _v$9) != null ? _el$2.style.setProperty("top", _v$9) : _el$2.style.removeProperty("top"));
      _v$10 !== _p$._v$10 && ((_p$._v$10 = _v$10) != null ? _el$2.style.setProperty("transition", _v$10) : _el$2.style.removeProperty("transition"));
      _v$11 !== _p$._v$11 && web.className(_el$3, _p$._v$11 = _v$11);
      _p$._v$12 = web.classList(_el$3, _v$12, _p$._v$12);
      _v$13 !== _p$._v$13 && web.setAttribute(_el$3, "data-show", _p$._v$13 = _v$13);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined,
      _v$11: undefined,
      _v$12: undefined,
      _v$13: undefined
    });
    return _el$;
  })();
};

const _tmpl$$9 = /*#__PURE__*/web.template(\`<div>\`),
  _tmpl$2$2 = /*#__PURE__*/web.template(\`<div role="button" tabindex="-1"><p></p><button type="button"></button><button type="button" data-is-end></button><button type="button">\`),
  _tmpl$3$2 = /*#__PURE__*/web.template(\`<p>\`);
let delayTypeTimer = 0;
const EndPage = () => {
  const handleClick = e => {
    e.stopPropagation();
    if (e.target?.nodeName !== 'BUTTON') setState(state => {
      state.endPageType = undefined;
    });
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

  // state.endPageType 变量的延时版本，在隐藏的动画效果结束之后才会真正改变
  // 防止在动画效果结束前 tip 就消失或改变了位置
  const [delayType, setDelayType] = solidJs.createSignal();
  solidJs.createEffect(() => {
    if (store.endPageType) {
      window.clearTimeout(delayTypeTimer);
      setDelayType(store.endPageType);
    } else {
      delayTypeTimer = window.setTimeout(() => setDelayType(store.endPageType), 500);
    }
  });
  const tip = solidJs.createMemo(() => {
    switch (delayType()) {
      case 'start':
        if (store.onPrev && store.option.jumpToNext) return t('end_page.tip.start_jump');
        break;
      case 'end':
        if (store.onNext && store.option.jumpToNext) return t('end_page.tip.end_jump');
        if (store.onExit) return t('end_page.tip.exit');
        break;
    }
    return '';
  });
  return (() => {
    const _el$ = _tmpl$2$2(),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.nextSibling,
      _el$4 = _el$3.nextSibling,
      _el$5 = _el$4.nextSibling;
    const _ref$ = ref;
    typeof _ref$ === "function" ? web.use(_ref$, _el$) : ref = _el$;
    _el$.addEventListener("click", handleClick);
    web.insert(_el$2, tip);
    const _ref$2 = bindRef('prevRef');
    typeof _ref$2 === "function" && web.use(_ref$2, _el$3);
    _el$3.addEventListener("click", () => store.onPrev?.());
    web.insert(_el$3, () => t('end_page.prev_button'));
    const _ref$3 = bindRef('exitRef');
    typeof _ref$3 === "function" && web.use(_ref$3, _el$4);
    _el$4.addEventListener("click", () => store.onExit?.(store.endPageType === 'end'));
    web.insert(_el$4, () => t('button.exit'));
    const _ref$4 = bindRef('nextRef');
    typeof _ref$4 === "function" && web.use(_ref$4, _el$5);
    _el$5.addEventListener("click", () => store.onNext?.());
    web.insert(_el$5, () => t('end_page.next_button'));
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return web.memo(() => !!store.option.showComment)() && delayType() === 'end';
      },
      get children() {
        const _el$6 = _tmpl$$9();
        web.addEventListener(_el$6, "wheel", stopPropagation);
        web.insert(_el$6, web.createComponent(solidJs.For, {
          get each() {
            return store.commentList;
          },
          children: comment => (() => {
            const _el$7 = _tmpl$3$2();
            web.insert(_el$7, comment);
            return _el$7;
          })()
        }));
        web.effect(() => web.className(_el$6, \`\${modules_c21c94f2$1.comments} \${modules_c21c94f2$1.beautifyScrollbar}\`));
        return _el$6;
      }
    }), null);
    web.effect(_p$ => {
      const _v$ = modules_c21c94f2$1.endPage,
        _v$2 = store.endPageType,
        _v$3 = delayType(),
        _v$4 = modules_c21c94f2$1.tip,
        _v$5 = {
          [modules_c21c94f2$1.invisible]: !store.onPrev
        },
        _v$6 = store.endPageType ? 0 : -1,
        _v$7 = store.endPageType ? 0 : -1,
        _v$8 = {
          [modules_c21c94f2$1.invisible]: !store.onNext
        },
        _v$9 = store.endPageType ? 0 : -1;
      _v$ !== _p$._v$ && web.className(_el$, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && web.setAttribute(_el$, "data-show", _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && web.setAttribute(_el$, "data-type", _p$._v$3 = _v$3);
      _v$4 !== _p$._v$4 && web.className(_el$2, _p$._v$4 = _v$4);
      _p$._v$5 = web.classList(_el$3, _v$5, _p$._v$5);
      _v$6 !== _p$._v$6 && web.setAttribute(_el$3, "tabindex", _p$._v$6 = _v$6);
      _v$7 !== _p$._v$7 && web.setAttribute(_el$4, "tabindex", _p$._v$7 = _v$7);
      _p$._v$8 = web.classList(_el$5, _v$8, _p$._v$8);
      _v$9 !== _p$._v$9 && web.setAttribute(_el$5, "tabindex", _p$._v$9 = _v$9);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined
    });
    return _el$;
  })();
};

/** 深色模式的 css 变量 */
const dark = {
  '--hover_bg_color': '#FFF3',
  '--hover_bg_color_enable': '#FFFa',
  '--switch': '#BDBDBD',
  '--switch_bg': '#6E6E6E',
  '--scrollbar_drag': '#FFF6',
  '--page_bg': '#303030',
  '--secondary': '#7A909A',
  '--secondary_bg': '#556065',
  '--text': 'white',
  '--text_secondary': '#FFFC',
  '--text_bg': '#121212',
  'color-scheme': 'dark'
};

/** 浅色模式的 css 变量 */
const light = {
  '--hover_bg_color': '#0001',
  '--hover_bg_color_enable': '#0009',
  '--switch': '#FAFAFA',
  '--switch_bg': '#9C9C9C',
  '--scrollbar_drag': '#0006',
  '--page_bg': 'white',
  '--secondary': '#7A909A',
  '--secondary_bg': '#BAC5CA',
  '--text': 'black',
  '--text_secondary': '#0008',
  '--text_bg': '#FAFAFA',
  'color-scheme': 'light'
};
const cssVar = solidJs.createRoot(() => {
  const _cssVar = solidJs.createMemo(() => ({
    '--bg': store.option.customBackground ?? (store.option.darkMode ? '#000000' : '#ffffff'),
    '--scrollModeImgScale': store.option.scrollModeImgScale,
    '--img_placeholder_height': \`\${imgPlaceholderHeight()}px\`,
    ...(store.option.darkMode ? dark : light)
  }));
  return _cssVar;
});

/** 初始化 */
const useInit$1 = (props, rootRef) => {
  // 绑定 rootRef
  setState(state => {
    state.rootRef = rootRef;
  });

  // 初始化配置
  solidJs.createEffect(() => {
    setState(state => {
      if (props.option) state.option = assign(state.option, props.option);
      state.hotkeys = {
        ...JSON.parse(JSON.stringify(defaultHotkeys)),
        ...props.hotkeys
      };
    });
  });

  // 在 rootDom 的大小改变时更新比例，并重新计算图片类型
  const resizeObserver = new ResizeObserver(throttle(100, ([entries]) => {
    const {
      width,
      height
    } = entries.contentRect;
    setState(state => {
      handleResize(state, width, height);
    });
  }));
  // 初始化页面比例
  setState(state => {
    handleResize(state, rootRef.scrollWidth, rootRef.scrollHeight);
  });
  resizeObserver.disconnect();
  resizeObserver.observe(rootRef);
  solidJs.onCleanup(() => resizeObserver.disconnect());
  solidJs.createEffect(() => {
    setState(state => {
      state.onExit = props.onExit ? isEnd => {
        playAnimation(store.exitRef);
        props.onExit?.(!!isEnd);
        if (isEnd) state.activePageIndex = 0;
        state.endPageType = undefined;
      } : undefined;
      state.onPrev = props.onPrev ? () => {
        playAnimation(store.prevRef);
        props.onPrev?.();
      } : undefined;
      state.onNext = props.onNext ? () => {
        playAnimation(store.nextRef);
        props.onNext?.();
      } : undefined;
      if (props.editButtonList) state.editButtonList = props.editButtonList;
      if (props.editSettingList) state.editSettingList = props.editSettingList;
      state.commentList = props.commentList;
      state.onLoading = props.onLoading ? debounce(100, props.onLoading) : undefined;
      state.onOptionChange = props.onOptionChange ? debounce(100, props.onOptionChange) : undefined;
      state.onHotkeysChange = props.onHotkeysChange ? debounce(100, props.onHotkeysChange) : undefined;
    });
  });

  // 处理 imgList fillEffect 参数的初始化和修改
  solidJs.createEffect(() => {
    setState(state => {
      if (props.fillEffect) state.fillEffect = props.fillEffect;

      // 处理初始化
      if (!state.imgList.length) {
        state.flag.autoScrollMode = true;
        state.flag.autoWide = true;
        autoCloseFill.clear();
        state.fillEffect[-1] = state.option.firstPageFill;
        state.imgList = [...props.imgList].map(imgUrl => ({
          type: '',
          src: imgUrl || '',
          loadType: 'wait'
        }));
        updatePageData(state);
        state.onLoading?.(state.imgList);
        return;
      }
      if (isEqualArray(props.imgList, state.imgList.map(({
        src
      }) => src))) return state.onLoading?.(state.imgList);
      state.endPageType = undefined;

      /** 修改前的当前显示图片 */
      const oldActiveImg = state.pageList[state.activePageIndex]?.map(i => state.imgList?.[i]?.src) ?? [];
      state.imgList = [...props.imgList].map(imgUrl => state.imgList.find(img => img.src === imgUrl) ?? {
        type: '',
        src: imgUrl || '',
        loadType: 'wait'
      });
      state.fillEffect = {
        '-1': true
      };
      updatePageData(state);
      state.onLoading?.(state.imgList);
      if (state.pageList.length === 0) {
        state.activePageIndex = 0;
        return;
      }

      // 尽量使当前显示的图片在修改后依然不变
      oldActiveImg.some(imgUrl => {
        // 跳过填充页和已被删除的图片
        if (!imgUrl || props.imgList.includes(imgUrl)) return false;
        const newPageIndex = state.pageList.findIndex(page => page.some(index => state.imgList?.[index]?.src === imgUrl));
        if (newPageIndex === -1) return false;
        state.activePageIndex = newPageIndex;
        return true;
      });

      // 如果已经翻到了最后一页，且最后一页的图片被删掉了，那就保持在末页显示
      if (state.activePageIndex > state.pageList.length - 1) state.activePageIndex = state.pageList.length - 1;
    });
  });
};

const _tmpl$$8 = /*#__PURE__*/web.template(\`<div role="presentation" tabindex="-1">\`);
const MangaStyle = css$1;
solidJs.enableScheduling();
/** 漫画组件 */
const Manga = props => {
  let rootRef;
  solidJs.onMount(() => {
    useInit$1(props, rootRef);
    focus();
  });
  solidJs.createEffect(() => props.show && focus());
  return (() => {
    const _el$ = _tmpl$$8();
    web.addEventListener(_el$, "wheel", handleWheel);
    const _ref$ = rootRef;
    typeof _ref$ === "function" ? web.use(_ref$, _el$) : rootRef = _el$;
    _el$.addEventListener("mousedown", handleMouseDown);
    _el$.addEventListener("keydown", handleKeyDown, true);
    _el$.addEventListener("keypress", stopPropagation, true);
    _el$.addEventListener("keyup", stopPropagation, true);
    web.insert(_el$, web.createComponent(ComicImgFlow, {}), null);
    web.insert(_el$, web.createComponent(Toolbar, {}), null);
    web.insert(_el$, web.createComponent(Scrollbar, {}), null);
    web.insert(_el$, web.createComponent(TouchArea, {}), null);
    web.insert(_el$, web.createComponent(EndPage, {}), null);
    web.effect(_p$ => {
      const _v$ = modules_c21c94f2$1.root,
        _v$2 = {
          [modules_c21c94f2$1.hidden]: props.show === false,
          [props.class ?? '']: !!props.class,
          ...props.classList
        },
        _v$3 = cssVar();
      _v$ !== _p$._v$ && web.className(_el$, _p$._v$ = _v$);
      _p$._v$2 = web.classList(_el$, _v$2, _p$._v$2);
      _p$._v$3 = web.style(_el$, _v$3, _p$._v$3);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _el$;
  })();
};

const _tmpl$$7 = /*#__PURE__*/web.template(\`<style type="text/css">\`);
let dom;

/**
 * 显示漫画阅读窗口
 */
const useManga = async initProps => {
  await GM.addStyle(\`
    @supports (height: 100dvh) {
      #comicRead {
        height: 100dvh;
      }
    }

    #comicRead {
      position: fixed;
      top: 0;
      left: 0;
      transform: scale(0);

      width: 100vw;
      height: 100vh;

      font-size: 16px;

      opacity: 0;

      transition: opacity 300ms, transform 0s 300ms;
    }

    #comicRead[show] {
      transform: scale(1);
      opacity: 1;
      transition: opacity 300ms, transform 100ms;
    }
  \`);
  const [props, setProps] = store$2.createStore({
    imgList: [],
    show: false,
    ...initProps
  });
  const set = recipe => {
    if (!dom) {
      dom = mountComponents('comicRead', () => [web.createComponent(Manga, props), (() => {
        const _el$ = _tmpl$$7();
        web.insert(_el$, IconButtonStyle);
        return _el$;
      })(), (() => {
        const _el$2 = _tmpl$$7();
        web.insert(_el$2, MangaStyle);
        return _el$2;
      })()]);
      dom.style.setProperty('z-index', '2147483647', 'important');
    }
    setProps(typeof recipe === 'function' ? store$2.produce(recipe) : recipe);
    if (props.imgList.length && props.show) {
      dom.setAttribute('show', '');
      document.documentElement.style.overflow = 'hidden';
    } else {
      dom.removeAttribute('show');
      document.documentElement.style.overflow = 'unset';
    }
  };

  /** 下载按钮 */
  const DownloadButton = () => {
    const [statu, setStatu] = solidJs.createSignal('button.download');
    const handleDownload = async () => {
      const fileData = {};
      const imgIndexNum = \`\${props.imgList.length}\`.length;
      for (let i = 0; i < props.imgList.length; i += 1) {
        setStatu(\`\${i}/\${props.imgList.length}\`);
        const index = \`\${i}\`.padStart(imgIndexNum, '0');
        const fileExt = props.imgList[i].match(/.+\\/.+\\.(\\w+)/)?.[1] ?? 'jpg';
        const fileName = \`\${index}.\${fileExt}\`;
        try {
          const res = await request$1(props.imgList[i], {
            responseType: 'arraybuffer'
          });
          fileData[fileName] = new Uint8Array(res.response);
        } catch (error) {
          toast$1.error(\`\${fileName} \${t('alert.download_failed')}\`);
          fileData[\`\${index} - \${t('alert.download_failed')}.\${fileExt}\`] = new Uint8Array();
        }
      }
      setStatu('button.packaging');
      const zipped = fflate.zipSync(fileData, {
        level: 0,
        comment: window.location.href
      });
      saveAs(new Blob([zipped]), \`\${document.title}.zip\`);
      setStatu('button.download_completed');
      toast$1.success(t('button.download_completed'));
    };
    const tip = solidJs.createMemo(() => t(statu()) || \`\${t('button.downloading')} - \${statu()}\`);
    return web.createComponent(IconButton, {
      get tip() {
        return tip();
      },
      onClick: handleDownload,
      get children() {
        return web.createComponent(MdFileDownload, {});
      }
    });
  };
  setProps({
    onExit: () => set({
      show: false
    }),
    editButtonList: list => {
      // 在设置按钮上方放置下载按钮
      list.splice(-1, 0, DownloadButton);
      return [...list,
      // 再在最下面添加分隔栏和退出按钮
      buttonListDivider, () => web.createComponent(IconButton, {
        get tip() {
          return t('button.exit');
        },
        onClick: () => props.onExit?.(),
        get children() {
          return web.createComponent(MdClose, {});
        }
      })];
    }
  });
  return [set, props, setProps];
};

const _tmpl$$6 = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79zM21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98v9.47z"></path><path d="M13.98 11.01c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.54-.5 3.53-.66 5.36-.45.41.05.71.42.66.83-.05.41-.42.71-.83.66-1.62-.19-3.39-.04-4.73.39-.08.01-.16.03-.23.03zm0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83-.05.41-.42.71-.83.66-1.62-.19-3.39-.04-4.73.39a.97.97 0 0 1-.23.03zm0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83-.05.41-.42.7-.83.66-1.62-.19-3.39-.04-4.73.39a.97.97 0 0 1-.23.03z">\`);
const MdMenuBook = ((props = {}) => (() => {
  const _el$ = _tmpl$$6();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$5 = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M18 15v4c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h3.02c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5c0-.55-.45-1-1-1s-1 .45-1 1zm-2.5 3H6.52c-.42 0-.65-.48-.39-.81l1.74-2.23a.5.5 0 0 1 .78-.01l1.56 1.88 2.35-3.02c.2-.26.6-.26.79.01l2.55 3.39c.25.32.01.79-.4.79zm3.8-9.11c.48-.77.75-1.67.69-2.66-.13-2.15-1.84-3.97-3.97-4.2A4.5 4.5 0 0 0 11 6.5c0 2.49 2.01 4.5 4.49 4.5.88 0 1.7-.26 2.39-.7l2.41 2.41c.39.39 1.03.39 1.42 0 .39-.39.39-1.03 0-1.42l-2.41-2.4zM15.5 9a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z">\`);
const MdImageSearch = ((props = {}) => (() => {
  const _el$ = _tmpl$$5();
  web.spread(_el$, props, true, true);
  return _el$;
})());

const _tmpl$$4 = /*#__PURE__*/web.template(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79zM21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98v9.47z">\`);
const MdImportContacts = ((props = {}) => (() => {
  const _el$ = _tmpl$$4();
  web.spread(_el$, props, true, true);
  return _el$;
})());

var css = ".index_module_fabRoot__36cc95e4{font-size:1.1em;transition:transform .2s}.index_module_fabRoot__36cc95e4[data-show=false]{pointer-events:none}.index_module_fabRoot__36cc95e4[data-show=false]>button{transform:scale(0)}.index_module_fabRoot__36cc95e4[data-trans=true]{opacity:.8}.index_module_fabRoot__36cc95e4[data-trans=true]:focus,.index_module_fabRoot__36cc95e4[data-trans=true]:focus-visible,.index_module_fabRoot__36cc95e4[data-trans=true]:hover{opacity:1}.index_module_fab__36cc95e4{align-items:center;background-color:var(--fab,#607d8b);border:none;border-radius:100%;box-shadow:0 3px 5px -1px #0003,0 6px 10px 0 #00000024,0 1px 18px 0 #0000001f;color:#fff;cursor:pointer;display:flex;font-size:1em;height:3.6em;justify-content:center;transform:scale(1);transition:transform .2s;width:3.6em}.index_module_fab__36cc95e4>svg{font-size:1.5em;width:1em}.index_module_fab__36cc95e4:hover{background-color:var(--fab_hover,#78909c)}.index_module_fab__36cc95e4:focus,.index_module_fab__36cc95e4:focus-visible{box-shadow:0 3px 5px -1px #00000080,0 6px 10px 0 #00000057,0 1px 18px 0 #00000052;outline:none}.index_module_progress__36cc95e4{color:#b0bec5;display:inline-block;height:100%;position:absolute;transform:rotate(-90deg);transition:transform .3s cubic-bezier(.4,0,.2,1) 0ms;width:100%}.index_module_progress__36cc95e4>svg{stroke:currentcolor;stroke-dasharray:290%;stroke-dashoffset:100%;stroke-linecap:round;transition:stroke-dashoffset .3s cubic-bezier(.4,0,.2,1) 0ms}.index_module_progress__36cc95e4:hover{color:#cfd8dc}.index_module_progress__36cc95e4[aria-valuenow=\\"1\\"]{opacity:0;transition:opacity .2s .15s}.index_module_popper__36cc95e4{align-items:center;background-color:#303030;border-radius:.3em;color:#fff;display:none;font-size:.8em;padding:.4em .5em;position:absolute;right:calc(100% + 1.5em);top:50%;transform:translateY(-50%);white-space:nowrap}:is(.index_module_fab__36cc95e4:hover,.index_module_fabRoot__36cc95e4[data-focus=true]) .index_module_popper__36cc95e4{display:flex}.index_module_speedDial__36cc95e4{align-items:center;bottom:0;display:flex;flex-direction:column-reverse;font-size:1.1em;padding-bottom:120%;pointer-events:none;position:absolute;width:100%;z-index:-1}.index_module_speedDialItem__36cc95e4{margin:.1em 0;opacity:0;transform:scale(0);transition-delay:var(--hide-delay);transition-duration:.23s;transition-property:transform,opacity}.index_module_speedDial__36cc95e4:hover,:is(.index_module_fabRoot__36cc95e4:hover:not([data-show=false]),.index_module_fabRoot__36cc95e4[data-focus=true])>.index_module_speedDial__36cc95e4{pointer-events:all}:is(.index_module_fabRoot__36cc95e4:hover:not([data-show=false]),.index_module_fabRoot__36cc95e4[data-focus=true])>.index_module_speedDial__36cc95e4>.index_module_speedDialItem__36cc95e4{opacity:unset;transform:unset;transition-delay:var(--show-delay)}.index_module_backdrop__36cc95e4{background:#000;height:100vh;left:0;opacity:0;pointer-events:none;position:fixed;top:0;transition:opacity .5s;width:100vw}.index_module_fabRoot__36cc95e4[data-focus=true] .index_module_backdrop__36cc95e4{pointer-events:unset}:is(.index_module_fabRoot__36cc95e4:hover:not([data-show=false]),.index_module_fabRoot__36cc95e4[data-focus=true],.index_module_speedDial__36cc95e4:hover) .index_module_backdrop__36cc95e4{opacity:.4}";
var modules_c21c94f2 = {"fabRoot":"index_module_fabRoot__36cc95e4","fab":"index_module_fab__36cc95e4","progress":"index_module_progress__36cc95e4","popper":"index_module_popper__36cc95e4","speedDial":"index_module_speedDial__36cc95e4","speedDialItem":"index_module_speedDialItem__36cc95e4","backdrop":"index_module_backdrop__36cc95e4"};

const _tmpl$$3 = /*#__PURE__*/web.template(\`<div><div>\`),
  _tmpl$2$1 = /*#__PURE__*/web.template(\`<div><button type="button" tabindex="-1"><span role="progressbar"><svg viewBox="22 22 44 44"><circle cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6">\`),
  _tmpl$3$1 = /*#__PURE__*/web.template(\`<div>\`);
const FabStyle = css;
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
  const handleScroll = throttle(200, e => {
    // 跳过非用户操作的滚动
    if (e.isTrusted === false) return;
    if (window.scrollY === lastY) return;
    setShow(
    // 滚动到底部时显示
    window.scrollY + window.innerHeight >= document.body.scrollHeight ||
    // 向上滚动时显示，反之隐藏
    window.scrollY - lastY < 0);
    lastY = window.scrollY;
  });
  solidJs.onMount(() => window.addEventListener('scroll', handleScroll));
  solidJs.onCleanup(() => window.removeEventListener('scroll', handleScroll));

  // 将 forceShow 的变化同步到 show 上
  solidJs.createEffect(() => {
    if (props.show) setShow(props.show);
  });
  return (() => {
    const _el$ = _tmpl$2$1(),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.firstChild,
      _el$4 = _el$3.firstChild;
    _el$2.addEventListener("click", () => props.onClick?.());
    web.insert(_el$2, () => props.children ?? web.createComponent(MdMenuBook, {}), _el$3);
    web.insert(_el$2, (() => {
      const _c$ = web.memo(() => !!props.tip);
      return () => _c$() ? (() => {
        const _el$7 = _tmpl$3$1();
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
        const _el$5 = _tmpl$$3(),
          _el$6 = _el$5.firstChild;
        _el$6.addEventListener("click", () => props.onBackdropClick?.());
        web.insert(_el$5, web.createComponent(solidJs.For, {
          get each() {
            return props.speedDial;
          },
          children: (SpeedDialItem, i) => (() => {
            const _el$8 = _tmpl$3$1();
            web.insert(_el$8, web.createComponent(SpeedDialItem, {}));
            web.effect(_p$ => {
              const _v$12 = modules_c21c94f2.speedDialItem,
                _v$13 = {
                  '--show-delay': \`\${i() * 30}ms\`,
                  '--hide-delay': \`\${(props.speedDial.length - 1 - i()) * 50}ms\`
                },
                _v$14 = i() * 30;
              _v$12 !== _p$._v$12 && web.className(_el$8, _p$._v$12 = _v$12);
              _p$._v$13 = web.style(_el$8, _v$13, _p$._v$13);
              _v$14 !== _p$._v$14 && web.setAttribute(_el$8, "data-i", _p$._v$14 = _v$14);
              return _p$;
            }, {
              _v$12: undefined,
              _v$13: undefined,
              _v$14: undefined
            });
            return _el$8;
          })()
        }), null);
        web.effect(_p$ => {
          const _v$ = modules_c21c94f2.speedDial,
            _v$2 = modules_c21c94f2.backdrop;
          _v$ !== _p$._v$ && web.className(_el$5, _p$._v$ = _v$);
          _v$2 !== _p$._v$2 && web.className(_el$6, _p$._v$2 = _v$2);
          return _p$;
        }, {
          _v$: undefined,
          _v$2: undefined
        });
        return _el$5;
      }
    }), null);
    web.effect(_p$ => {
      const _v$3 = modules_c21c94f2.fabRoot,
        _v$4 = props.style,
        _v$5 = props.show ?? show(),
        _v$6 = props.autoTrans,
        _v$7 = props.focus,
        _v$8 = modules_c21c94f2.fab,
        _v$9 = modules_c21c94f2.progress,
        _v$10 = props.progress,
        _v$11 = \`\${(1 - props.progress) * 290}%\`;
      _v$3 !== _p$._v$3 && web.className(_el$, _p$._v$3 = _v$3);
      _p$._v$4 = web.style(_el$, _v$4, _p$._v$4);
      _v$5 !== _p$._v$5 && web.setAttribute(_el$, "data-show", _p$._v$5 = _v$5);
      _v$6 !== _p$._v$6 && web.setAttribute(_el$, "data-trans", _p$._v$6 = _v$6);
      _v$7 !== _p$._v$7 && web.setAttribute(_el$, "data-focus", _p$._v$7 = _v$7);
      _v$8 !== _p$._v$8 && web.className(_el$2, _p$._v$8 = _v$8);
      _v$9 !== _p$._v$9 && web.className(_el$3, _p$._v$9 = _v$9);
      _v$10 !== _p$._v$10 && web.setAttribute(_el$3, "aria-valuenow", _p$._v$10 = _v$10);
      _v$11 !== _p$._v$11 && ((_p$._v$11 = _v$11) != null ? _el$4.style.setProperty("stroke-dashoffset", _v$11) : _el$4.style.removeProperty("stroke-dashoffset"));
      return _p$;
    }, {
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined,
      _v$11: undefined
    });
    return _el$;
  })();
};

const _tmpl$$2 = /*#__PURE__*/web.template(\`<style type="text/css">\`);
let mounted = false;
const useFab = async initProps => {
  await GM.addStyle(\`
    #fab {
      --text_bg: transparent;

      position: fixed;
      right: 3vw;
      bottom: 6vh;

      font-size: clamp(12px, 1.5vw, 16px);
    }
  \`);
  const [props, setProps] = store$2.createStore({
    ...initProps
  });
  const FabIcon = () => {
    switch (props.progress) {
      case undefined:
        // 没有内容的书
        return MdImportContacts;
      case 1:
      case 2:
        // 有内容的书
        return MdMenuBook;
      default:
        return props.progress > 1 ? MdCloudDownload : MdImageSearch;
    }
  };
  const set = recipe => {
    if (!mounted) {
      const dom = mountComponents('fab', () => [web.createComponent(Fab, web.mergeProps(props, {
        get children() {
          return props.children ?? web.createComponent(web.Dynamic, {
            get component() {
              return FabIcon();
            }
          });
        }
      })), (() => {
        const _el$ = _tmpl$$2();
        web.insert(_el$, IconButtonStyle);
        return _el$;
      })(), (() => {
        const _el$2 = _tmpl$$2();
        web.insert(_el$2, FabStyle);
        return _el$2;
      })()]);
      dom.style.setProperty('z-index', '2147483646', 'important');
      mounted = true;
    }
    if (recipe) setProps(typeof recipe === 'function' ? store$2.produce(recipe) : recipe);
  };
  return [set, props];
};

const _tmpl$$1 = /*#__PURE__*/web.template(\`<h2>🥳 ComicRead 已更新到 v\`),
  _tmpl$2 = /*#__PURE__*/web.template(\`<h3>修复\`),
  _tmpl$3 = /*#__PURE__*/web.template(\`<ul><li>更新禁漫天堂的网址\`);

/** 重命名配置项 */
const renameOption = async (name, list) => {
  try {
    const option = await GM.getValue(name);
    if (!option) throw new Error(\`GM.getValue Error: not found \${name}\`);
    for (let i = list.length - 1; i; i--) {
      const [path, newName] = list[i].split(' => ');
      byPath(option, path, (parent, key) => {
        log('rename Option', list[i]);
        Reflect.set(parent, newName, parent[key]);
        Reflect.deleteProperty(parent, key);
      });
    }
    await GM.setValue(name, option);
  } catch (error) {
    log.error(\`migration \${name} option error:\`, error);
  }
};

/** 旧版本配置迁移 */
const migration = async () => {
  const values = await GM.listValues();

  // 6 => 7
  for (let i = 0; i < values.length; i++) {
    const key = values[i];
    switch (key) {
      case 'Version':
      case 'Languages':
        continue;
      case 'HotKeys':
        {
          await renameOption(key, ['向上翻页 => turn_page_up', '向下翻页 => turn_page_down', '向右翻页 => turn_page_right', '向左翻页 => turn_page_left', '跳至首页 => jump_to_home', '跳至尾页 => jump_to_end', '退出 => exit', '切换页面填充 => switch_page_fill', '切换卷轴模式 => switch_scroll_mode', '切换单双页模式 => switch_single_double_page_mode', '切换阅读方向 => switch_dir', '进入阅读模式 => enter_read_mode']);
          break;
        }
      default:
        await renameOption(key, ['option.scrollbar.showProgress => showImgStatus', 'option.clickPage => clickPageTurn', 'option.clickPage.overturn => reverse', 'option.swapTurnPage => swapPageTurnKey', 'option.flipToNext => jumpToNext',
        // ehentai
        '匹配nhentai => associate_nhentai', '快捷键翻页 => hotkeys_page_turn',
        // nhentai
        '自动翻页 => auto_page_turn', '彻底屏蔽漫画 => block_totally', '在新页面中打开链接 => open_link_new_page',
        // other
        '记住当前站点 => remember_current_site']);
    }
  }
};

/** 处理版本更新相关 */
const handleVersionUpdate = async () => {
  const version = await GM.getValue('Version');
  if (!version) return GM.setValue('Version', GM.info.script.version);
  if (version === GM.info.script.version) return;
  if (version.split('.')[0] !== GM.info.script.version.split('.')[0]) await migration();

  // 只在语言为中文时弹窗提示最新更新内容
  if (lang() === 'zh') {
    toast$1(() => [(() => {
      const _el$ = _tmpl$$1();
        _el$.firstChild;
      web.insert(_el$, () => GM.info.script.version, null);
      return _el$;
    })(), _tmpl$2(), _tmpl$3()], {
      id: 'Version Tip',
      type: 'custom',
      duration: Infinity,
      // 手动点击关掉通知后才不会再次弹出
      onDismiss: () => GM.setValue('Version', GM.info.script.version)
    });

    // 监听储存的版本数据的变动，如果和当前版本一致就关掉弹窗
    // 防止在更新版本后一次性打开多个页面，不得不一个一个关过去
    const listenerId = await GM.addValueChangeListener('Version', async (_, __, newVersion) => {
      if (newVersion !== GM.info.script.version) return;
      toast$1.dismiss('Version Tip');
      await GM.removeValueChangeListener(listenerId);
    });
  } else await GM.setValue('Version', GM.info.script.version);
};

const getHotkeys = async () => ({
  enter_read_mode: ['v'],
  ...(await GM.getValue('Hotkeys', {}))
});

/**
 * 对修改站点配置的相关方法的封装
 * @param name 站点名
 * @param defaultOptions 默认配置
 */
const useSiteOptions = async (name, defaultOptions = {}) => {
  const _defaultOptions = {
    autoShow: true,
    hiddenFAB: false,
    ...defaultOptions
  };
  const saveOptions = await GM.getValue(name);
  const options = store$2.createMutable({
    ..._defaultOptions,
    ...saveOptions
  });
  const setOptions = async newValue => {
    Object.assign(options, newValue);

    // 只保存和默认设置不同的部分
    return GM.setValue(name, difference(options, _defaultOptions));
  };
  const [hotkeys, setHotkeys] = solidJs.createSignal(await getHotkeys());
  const isStored = saveOptions !== undefined;
  // 如果当前站点没有存储配置，就补充上去
  if (!isStored) GM.setValue(name, options);
  return {
    /** 站点配置 */
    options,
    /** 修改站点配置 */
    setOptions,
    /** 是否存过配置 */
    isStored,
    /** 快捷键配置 */
    hotkeys,
    /** 处理快捷键配置的变动 */
    onHotkeysChange: newValue => {
      GM.setValue('Hotkeys', newValue);
      setHotkeys(newValue);
    },
    /** 进入阅读模式的快捷键 */
    readModeHotkeys: solidJs.createRoot(() => {
      const readModeHotkeysMemo = solidJs.createMemo(() => new Set(Object.assign([], hotkeys().enter_read_mode)));
      return readModeHotkeysMemo;
    })
  };
};

/**
 * 对基础的初始化操作的封装
 * @param name 站点名
 * @param defaultOptions 默认配置
 */
const useInit = async (name, defaultOptions = {}) => {
  await setInitLang();
  await handleVersionUpdate();
  const {
    options,
    setOptions,
    readModeHotkeys,
    hotkeys,
    onHotkeysChange,
    isStored
  } = await useSiteOptions(name, defaultOptions);
  const [setFab, fabProps] = await useFab({
    tip: t('other.read_mode'),
    speedDial: useSpeedDial(options, setOptions),
    show: !options.hiddenFAB && undefined
  });

  /** 处理 Manga 组件的 onLoading 回调，将图片加载状态联动到 Fab 上 */
  const onLoading = list => {
    if (list.length === 0) return;
    const loadNum = list.filter(image => image.loadType === 'loaded').length;

    /** 图片加载进度 */
    const progress = 1 + loadNum / list.length;
    if (progress !== 2) {
      setFab({
        progress,
        tip: \`\${t('other.img_loading')} - \${loadNum}/\${list.length}\`
      });
    } else {
      // 图片全部加载完成后恢复 Fab 状态
      setFab({
        progress,
        tip: t('other.read_mode'),
        show: undefined
      });
    }
  };
  const [setManga, mangaProps, _setManga] = await useManga({
    imgList: [],
    option: options.option,
    onOptionChange: option => setOptions({
      option
    }),
    hotkeys: hotkeys(),
    onHotkeysChange,
    onLoading
  });
  let menuId;
  /** 更新显示/隐藏悬浮按钮的菜单项 */
  const updateHideFabMenu = async () => {
    await GM.unregisterMenuCommand(menuId);
    menuId = await GM.registerMenuCommand(options.hiddenFAB ? t('other.fab_show') : t('other.fab_hidden'), async () => {
      await setOptions({
        ...options,
        hiddenFAB: !options.hiddenFAB
      });
      setFab(state => {
        state.show = !options.hiddenFAB && undefined;
      });
      await updateHideFabMenu();
    });
  };

  /** 当前是否还需要判断 autoShow */
  const needAutoShow = {
    val: true
  };
  return {
    options,
    setOptions,
    setFab,
    setManga,
    _setManga,
    mangaProps,
    needAutoShow,
    isStored,
    /** Manga 组件的默认 onLoading */
    onLoading,
    /**
     * 对 加载图片 和 进入阅读模式 相关初始化的封装
     * @param getImgList 返回图片列表的函数
     * @returns 自动加载图片并进入阅读模式的函数
     */
    init: getImgList => {
      const firstRun = menuId === undefined;

      /** 是否正在加载图片中 */
      let loading = false;

      /** 加载 imgList */
      const loadImgList = async (initImgList, show) => {
        loading = true;
        try {
          if (!initImgList) setFab({
            progress: 0,
            show: true
          });
          const newImgList = initImgList ?? (await getImgList());
          if (newImgList.length === 0) throw new Error(t('alert.fetch_comic_img_failed'));
          setManga(state => {
            state.imgList = [...newImgList];
            if (show || needAutoShow.val && options.autoShow) {
              state.show = true;
              needAutoShow.val = false;
            }
          });
        } catch (e) {
          log.error(e);
          if (show) toast$1.error(e.message);
          setFab({
            progress: undefined
          });
        } finally {
          loading = false;
        }
      };

      /** 进入阅读模式 */
      const showComic = async () => {
        if (loading) return toast$1.warn(t('alert.repeat_load'), {
          duration: 1500
        });
        if (!mangaProps.imgList.length) return loadImgList(undefined, true);
        setManga({
          show: true
        });
      };
      setFab({
        onClick: showComic
      });
      if (needAutoShow.val && options.autoShow) showComic();
      if (firstRun) {
        GM.registerMenuCommand(t('other.enter_comic_read_mode'), fabProps.onClick);
        updateHideFabMenu();
        window.addEventListener('keydown', e => {
          if (e.target.tagName === 'INPUT') return;
          const code = getKeyboardCode(e);
          if (!readModeHotkeys().has(code)) return;
          e.stopPropagation();
          e.preventDefault();
          fabProps.onClick?.();
        });
      }
      return {
        /** 进入阅读模式 */
        showComic,
        /** 加载 imgList */
        loadImgList
      };
    },
    /** 使用动态更新来加载 imgList */
    dynamicUpdate: (work, totalImgNum) => {
      const updateImgList = async () => {
        setManga({
          onLoading: undefined
        });
        _setManga('imgList', Array(totalImgNum).fill(''));
        await work((i, imgUrl) => _setManga('imgList', i, imgUrl));
        setManga({
          onLoading
        });
      };
      return async () => {
        if (mangaProps.imgList.length === totalImgNum) return mangaProps.imgList;
        setTimeout(updateImgList);
        await wait(() => mangaProps.imgList.some(Boolean));
        return mangaProps.imgList;
      };
    }
  };
};

/** 处理延时出现的上/下一话的按钮 */
const handleDelayPrevNext = async (fn, num = 0) => {
  if (!fn || num >= 25) return;
  const domClickFn = await fn();
  if (domClickFn) return domClickFn;
  await main.sleep(200);
  return handleDelayPrevNext(fn, num + 1);
};

/** 对简单站点的通用解 */
const universalInit = async ({
  name,
  exit,
  wait: waitFn,
  getImgList,
  onPrev,
  onNext,
  onExit,
  getCommentList,
  initOptions,
  SPA
}) => {
  if (SPA?.isMangaPage) await main.wait(SPA?.isMangaPage);
  if (waitFn) await main.wait(waitFn);
  if (await exit?.()) return;
  const fnMap = await main.useInit(name, initOptions);
  const {
    init,
    options,
    setManga,
    setFab,
    needAutoShow
  } = fnMap;
  const {
    loadImgList
  } = init(() => getImgList(fnMap));
  if (onExit) setManga({
    onExit: isEnd => {
      onExit?.(isEnd);
      setManga({
        show: false
      });
    }
  });
  if (!SPA) {
    if (onNext || onPrev) setManga({
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
  main.autoUpdate(async () => {
    if (window.location.href === lastUrl) return;
    lastUrl = window.location.href;
    if (isMangaPage && !(await isMangaPage())) {
      setFab({
        show: false
      });
      setManga({
        show: false,
        imgList: []
      });
      return;
    }
    if (waitFn) await main.wait(waitFn);

    // 先将 imgList 清空以便 activePageIndex 归零
    setManga({
      imgList: []
    });
    needAutoShow.val = options.autoShow;
    await loadImgList();
    await Promise.all([async () => getCommentList && setManga({
      commentList: await getCommentList()
    }), async () => getOnPrev && setManga({
      onPrev: await handleDelayPrevNext(getOnPrev)
    }), async () => getOnNext && setManga({
      onNext: await handleDelayPrevNext(getOnNext)
    })].map(fn => fn()));
  });
};

const _tmpl$ = /*#__PURE__*/web.template(\`<div><button>\`);
/**
 * 提示当前开启了自动进入阅读模式的弹窗
 *
 * 因为直接放到 site/other 里会导致打包时自动加入 import solidjs 的代码，
 * 所以只能单独放这好打包进 main 里
 */
const autoReadModeMessage = setOptions => () => (() => {
  const _el$ = _tmpl$(),
    _el$2 = _el$.firstChild;
  web.insert(_el$, () => main.t('site.simple.auto_read_mode_message'), _el$2);
  _el$2.addEventListener("click", () => setOptions({
    autoShow: false
  }));
  web.insert(_el$2, () => main.t('other.disable'));
  return _el$;
})();

exports.assign = assign;
exports.autoReadModeMessage = autoReadModeMessage;
exports.autoUpdate = autoUpdate;
exports.byPath = byPath;
exports.canvasToBlob = canvasToBlob;
exports.clamp = clamp;
exports.createFillImgList = createFillImgList;
exports.dataToParams = dataToParams;
exports.difference = difference;
exports.getKeyboardCode = getKeyboardCode;
exports.getMostItem = getMostItem;
exports.ifNot = ifNot;
exports.insertNode = insertNode;
exports.isEqualArray = isEqualArray;
exports.keyboardCodeToText = keyboardCodeToText;
exports.lang = lang;
exports.linstenKeyup = linstenKeyup;
exports.log = log;
exports.loop = loop;
exports.needDarkMode = needDarkMode;
exports.plimit = plimit;
exports.querySelector = querySelector;
exports.querySelectorAll = querySelectorAll;
exports.querySelectorClick = querySelectorClick;
exports.request = request$1;
exports.saveAs = saveAs;
exports.scrollIntoView = scrollIntoView;
exports.setInitLang = setInitLang;
exports.setLang = setLang;
exports.sleep = sleep;
exports.t = t;
exports.testImgUrl = testImgUrl;
exports.toast = toast$1;
exports.triggerEleLazyLoad = triggerEleLazyLoad;
exports.universalInit = universalInit;
exports.useCache = useCache;
exports.useFab = useFab;
exports.useInit = useInit;
exports.useManga = useManga;
exports.useSiteOptions = useSiteOptions;
exports.useSpeedDial = useSpeedDial;
exports.wait = wait;
exports.waitDom = waitDom;
exports.waitImgLoad = waitImgLoad;
`
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
  // 因为在一些网站比如推特会触发CSP，所以不能使用 eval 来执行
  GM_addElement('script', {
    textContent: runCode
  });
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


/** 站点配置 */
let options;

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
const main = require('main');
try {
  // 匹配站点
  switch (window.location.hostname) {
    // #百合会——「记录阅读历史，体验优化」
    case 'bbs.yamibo.com':
      {
const web = require('solid-js/web');
const main = require('main');

const _tmpl$ = /*#__PURE__*/web.template(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68zm-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">`);
const MdSettings = ((props = {}) => (() => {
  const _el$ = _tmpl$();
  web.spread(_el$, props, true, true);
  return _el$;
})());

(async () => {
  const {
    options,
    setFab,
    setManga,
    init,
    onLoading,
    needAutoShow
  } = await main.useInit('yamibo', {
    记录阅读进度: true,
    关闭快捷导航的跳转: true,
    修正点击页数时的跳转判定: true,
    固定导航条: true,
    自动签到: true
  });
  await GM.addStyle(`#fab { --fab: #6E2B19; --fab_hover: #A15640; }

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
  if (options.自动签到) (async () => {
    const todayString = new Date().toLocaleDateString('zh-CN');
    // 判断当前日期与上次成功签到日期是否相同
    if (todayString === localStorage.getItem('signDate')) return;
    const sign = main.querySelector('#scbar_form > input[name="formhash"]')?.value;
    if (!sign) return;
    try {
      const res = await fetch(`plugin.php?id=zqlj_sign&sign=${sign}`);
      const body = await res.text();
      if (!/成功！|打过卡/.test(body)) throw new Error('自动签到失败');
      main.toast.success('自动签到成功');
      localStorage.setItem('signDate', todayString);
    } catch (e) {
      main.toast.error('自动签到失败');
    }
  })();
  if (options.关闭快捷导航的跳转)
    // eslint-disable-next-line no-script-url
    main.querySelector('#qmenu a')?.setAttribute('href', 'javascript:;');

  // 增加菜单项，以便在其他板块用于调整其他功能的开关
  await GM.registerMenuCommand('显示设置菜单', () => setFab({
    show: true,
    focus: true,
    tip: '设置',
    children: web.createComponent(MdSettings, {}),
    onBackdropClick: () => setFab({
      show: false,
      focus: false
    })
  }));

  // 判断当前页是帖子
  if (/thread(-\d+){3}|mod=viewthread/.test(document.URL)) {
    // 修复微博图床的链接
    main.querySelectorAll('img[file*="sinaimg.cn"]').forEach(e => {
      e.setAttribute('referrerpolicy', 'no-referrer');
    });

    // 限定板块启用
    if (unsafeWindow.fid === 30 || unsafeWindow.fid === 37) {
      const isFirstPage = !main.querySelector('.pg > .prev');
      // 第一页以外不自动加载
      if (!isFirstPage) needAutoShow.val = false;
      let imgList = main.querySelectorAll('.t_fsz img');
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
      updateImgList();
      const {
        showComic,
        loadImgList
      } = init(() => imgList.map(img => img.src));
      setManga({
        // 在图片加载完成后再检查一遍有没有小图，有就删掉
        onLoading: _imgList => {
          onLoading(_imgList);
          if (imgList.length !== updateImgList().length) return loadImgList();
        },
        onExit: isEnd => {
          if (isEnd) main.scrollIntoView('.psth, .rate, #postlist > div:nth-of-type(2)');
          setManga({
            show: false
          });
        }
      });
      setFab({
        progress: isFirstPage ? 1 : undefined,
        tip: '阅读模式',
        show: undefined
      });

      // 虽然有 Fab 了不需要这个按钮，但都点习惯了没有还挺别扭的（
      main.insertNode(main.querySelector('div.pti > div.authi'), '<span class="pipe show">|</span><a id="comicReadMode" class="show" href="javascript:;">漫画阅读</a>');
      document.getElementById('comicReadMode')?.addEventListener('click', showComic);

      // 如果帖子内有设置目录
      if (main.querySelector('#threadindex')) {
        let id;
        main.querySelectorAll('#threadindex li').forEach(dom => {
          dom.addEventListener('click', () => {
            if (id) return;
            id = window.setInterval(() => {
              imgList = main.querySelectorAll('.t_fsz img');
              if (!imgList.length || !updateImgList().length) {
                setFab({
                  progress: undefined
                });
                return;
              }
              setManga({
                imgList: updateImgList(),
                show: options.autoShow ?? undefined
              });
              setFab({
                progress: 1
              });
              window.clearInterval(id);
            }, 100);
          });
        });
      }
      const tagDom = main.querySelector('.ptg.mbm.mtn > a');
      // 通过标签确定上/下一话
      if (tagDom) {
        const tagId = tagDom.href.split('id=')[1];
        const reg = /(?<=<th>\s<a href="thread-)\d+(?=-)/g;
        let threadList = [];

        // 先获取包含当前帖后一话在内的同一标签下的帖子id列表，再根据结果设定上/下一话
        const setPrevNext = async (pageNum = 1) => {
          const res = await main.request(`https://bbs.yamibo.com/misc.php?mod=tag&id=${tagId}&type=thread&page=${pageNum}`);
          const newList = [...res.responseText.matchAll(reg)].map(([tid]) => +tid);
          threadList = threadList.concat(newList);
          const index = threadList.findIndex(tid => tid === unsafeWindow.tid);
          if (newList.length && (index === -1 || !threadList[index + 1])) return setPrevNext(pageNum + 1);
          return setManga({
            onPrev: threadList[index - 1] ? () => {
              window.location.assign(`thread-${threadList[index - 1]}-1-1.html`);
            } : undefined,
            onNext: threadList[index + 1] ? () => {
              window.location.assign(`thread-${threadList[index + 1]}-1-1.html`);
            } : undefined
          });
        };
        setTimeout(setPrevNext);
      }
    }
    if (options.记录阅读进度) {
      const {
        tid
      } = unsafeWindow;
      const res = await main.request(`https://bbs.yamibo.com/api/mobile/index.php?module=viewthread&tid=${tid}`, {
        errorText: '获取帖子回复数时出错'
      });
      /** 回复数 */
      const allReplies = parseInt(JSON.parse(res.responseText)?.Variables?.thread?.allreplies, 10);
      if (!allReplies) return;

      /** 当前所在页数 */
      const currentPageNum = parseInt(main.querySelector('#pgt strong')?.innerHTML ?? '1', 10);
      const cache = main.useCache(db => {
        db.createObjectStore('history', {
          keyPath: 'tid'
        });
      });
      const data = await cache.get('history', `${tid}`);
      // 如果是在翻阅之前页数的内容，则跳过不处理
      if (data && currentPageNum < data.lastPageNum) return;

      // 如果有上次阅读进度的数据，则监视上次的进度之后的楼层，否则监视所有
      /** 监视楼层列表 */
      const watchFloorList = main.querySelectorAll(data?.lastAnchor && currentPageNum === data.lastPageNum ? `#${data.lastAnchor} ~ div` : '#postlist > div');
      if (!watchFloorList.length) return;
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
        const triggerIndex = watchFloorList.findIndex(e => e === trigger.target);
        if (triggerIndex === -1) return;
        watchFloorList.splice(0, triggerIndex + 1).forEach(e => observer.unobserve(e));

        // 储存数据
        debounceSave({
          tid: `${tid}`,
          lastPageNum: currentPageNum,
          lastReplies: allReplies,
          lastAnchor: trigger.target.id
        });
      }, {
        threshold: 1.0
      });
      watchFloorList.forEach(e => observer.observe(e));
    }
    return;
  }

  // 判断当前页是板块
  if (/forum(-\d+){2}|mod=forumdisplay/.test(document.URL)) {
    if (options.修正点击页数时的跳转判定) {
      const List = main.querySelectorAll('.tps>a');
      let i = List.length;
      while (i--) List[i].setAttribute('onClick', 'atarget(this)');
    }
    if (options.记录阅读进度) {
      const cache = main.useCache(db => {
        db.createObjectStore('history', {
          keyPath: 'tid'
        });
      });

      // 更新页面上的阅读进度提示
      const updateHistoryTag = () => {
        // 先删除所有进度提示
        main.querySelectorAll('.historyTag').forEach(e => e.remove());

        // 再添加上进度提示
        return Promise.all(main.querySelectorAll('tbody[id^=normalthread]').map(async e => {
          const tid = e.id.split('_')[1];
          const data = await cache.get('history', tid);
          if (!data) return;
          const lastReplies = +e.querySelector('.num a').innerHTML - data.lastReplies;
          main.insertNode(e.getElementsByTagName('th')[0], `
                <a
                  class="historyTag"
                  onClick="atarget(this)"
                  href="thread-${tid}-${data.lastPageNum}-1.html#${data.lastAnchor}"
                >
                  回第${data.lastPageNum}页
                </a>
                ${lastReplies > 0 ? `<div class="historyTag">+${lastReplies}</div>` : ''}
              `);
        }));
      };
      updateHistoryTag();

      // 切换回当前页时更新提示
      document.addEventListener('visibilitychange', updateHistoryTag);
      // 点击下一页后更新提示
      main.querySelector('#autopbn').addEventListener('click', updateHistoryTag);
    }
  }
})();

        options = false;
        break;
      }
    // #百合会新站
    case 'www.yamibo.com':
      {
        const id = new URLSearchParams(window.location.search).get('id');

        /** 总页数 */
        const totalPageNum = +main.querySelector('section div:first-of-type div:last-of-type').innerHTML.split('：')[1];
        if (Number.isNaN(totalPageNum)) throw new Error('页面结构发生改变，无法正常运行');

        /** 获取指定页数的图片 url */
        const getImg = async (i = 1) => {
          const res = await main.request(`https://www.yamibo.com/manga/view-chapter?id=${id}&page=${i}`);
          return res.responseText.match(/(?<=<img id=['"]imgPic['"].+?src=['"]).+?(?=['"])/)[0].replaceAll('&amp;', '&');
        };
        options = {
          name: 'newYamibo',
          exit: () => !window.location.pathname.includes('/manga/view-chapter'),
          getImgList: ({
            setFab
          }) => main.plimit(Object.keys([...new Array(totalPageNum)]).map(i => () => getImg(+i + 1)), (doneNum, totalNum) => {
            setFab({
              progress: doneNum / totalNum,
              tip: `加载图片中 - ${doneNum}/${totalNum}`
            });
          }),
          onNext: main.querySelectorClick('#btnNext'),
          onPrev: main.querySelectorClick('#btnPrev'),
          onExit: isEnd => isEnd && main.scrollIntoView('#w1')
        };
        break;
      }

    // #动漫之家——「解锁隐藏漫画」
    case 'manhua.idmzj.com':
    case 'manhua.dmzj.com':
      {
const web = require('solid-js/web');
const solidJs = require('solid-js');
const main = require('main');
const store = require('solid-js/store');
const dmzjDecrypt = require('dmzjDecrypt');

const prefix = ['%cComicRead', 'background-color: #607d8b; color: white; padding: 2px 4px; border-radius: 4px;'];
const log = (...args) =>
// eslint-disable-next-line no-console
console.log.apply(null, [...prefix, ...args]);
log.warn = (...args) =>
// eslint-disable-next-line no-console
console.warn.apply(null, [...prefix, ...args]);
log.error = (...args) =>
// eslint-disable-next-line no-console
console.error.apply(null, [...prefix, ...args]);

/** 根据漫画 id 和章节 id 获取章节数据 */
const getChapterInfo = async (comicId, chapterId) => {
  const res = await main.request(`https://m.dmzj.com/chapinfo/${comicId}/${chapterId}.html`, {
    errorText: '获取章节数据失败'
  });
  return JSON.parse(res.responseText);
};

/** 根据漫画 id 和章节 id 获取章节评论 */
const getViewpoint = async (comicId, chapterId) => {
  try {
    const res = await main.request(`https://manhua.dmzj.com/tpi/api/viewpoint/getViewpoint?type=0&type_id=${comicId}&chapter_id=${chapterId}&more=1`, {
      errorText: '获取章节评论失败'
    });

    // 还有另一个 api
    // http://v3api.dmzj.com/viewPoint/0/${comic_id}/${chapter_id}.json

    return JSON.parse(res.responseText).data.list.map(({
      title,
      num
    }) => `${title} [+${num}]`);
  } catch (_) {
    return [];
  }
};
const getComicDetail_base = async comicId => {
  const res = await main.request(`https://api.dmzj.com/dynamic/comicinfo/${comicId}.json`);
  const {
    info: {
      last_updatetime,
      title
    },
    list
  } = JSON.parse(res.responseText).data;
  return {
    title,
    last_updatetime,
    last_update_chapter_id: null,
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
  const res = await main.request(`https://v4api.idmzj.com/comic/detail/${comicId}?uid=2665531&disable_level=1`);
  const {
    comicInfo: {
      last_update_chapter_id,
      last_updatetime,
      chapters,
      title
    }
  } = dmzjDecrypt(res.responseText);
  Object.values(chapters).forEach(chapter => {
    chapter.data.sort((a, b) => a.chapter_order - b.chapter_order);
  });
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
    log.warn('last_update_chapter_id 为空，无法通过遍历获取章节');
    return;
  }
  draftData.chapters[0] = {
    name: '连载',
    list: []
  };
  main.toast.warn('正在通过遍历获取所有章节，耗时可能较长', {
    id: 'traversalTip',
    duration: Infinity
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
    } catch (_) {
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
    for (let i = 0; i < apiFn.length; i++) {
      try {
        Object.assign(data, await apiFn[i](comicId, data));
        if (data.chapters?.some(chapter => chapter.list.length)) return;
      } catch (_) {}
    }
    main.toast.error('漫画数据获取失败', {
      duration: Infinity
    });
  });
  return data;
};

/** 根据漫画拼音简称找到对应的 id */
const getComicId = async py => {
  const res = await main.request(`https://manhua.dmzj.com/api/v1/comic2/comic/detail?${new URLSearchParams({
    channel: 'pc',
    app_name: 'comic',
    version: '1.0.0',
    timestamp: `${Date.now()}`,
    uid: '',
    comic_py: py
  }).toString()}`);
  return JSON.parse(res.responseText).data?.comicInfo?.id;
};

const _tmpl$ = /*#__PURE__*/web.template(`<div class="photo_part"><div class="h2_title2"><span class="h2_icon h2_icon22"></span><h2> `),
  _tmpl$2 = /*#__PURE__*/web.template(`<div class="cartoon_online_border_other"><ul></ul><div class="clearfix">`),
  _tmpl$3 = /*#__PURE__*/web.template(`<li><a target="_blank">`);
(async () => {
  // 通过 rss 链接，在作者作品页里添加上隐藏漫画的链接
  if (window.location.pathname.includes('/tags/')) {
    const res = await main.request(main.querySelector('a.rss').href, {
      errorText: '获取作者作品失败'
    });

    // 页面上原有的漫画标题
    const titleList = main.querySelectorAll('#hothit p.t').map(e => e.innerText.replace('[完]', ''));
    main.insertNode(document.getElementById('hothit'), res.responseText.split('item').filter((_, i) => i % 2).map(item => {
      const newComicUrl = /manhua.dmzj.com\/(.+?)\?from=rssReader/.exec(item)[1];
      return {
        newComicUrl,
        comicUrl: newComicUrl.split('/')[0],
        title: /title><!\[CDATA\[(.+?)]]/.exec(item)[1],
        imgUrl: /<img src='(.+?)'/.exec(item)[1],
        newComicTitle: /title='(.+?)'/.exec(item)[1]
      };
    }).filter(({
      title
    }) => !titleList.includes(title)).map(data => `
            <div class="pic">
              <a href="/${data.comicUrl}/" target="_blank">
              <img src="${data.imgUrl}" alt="${data.title}" title="" style="">
              <p class="t">【*隐藏*】${data.title}</p></a>
              <p class="d">最新：<a href="/${data.newComicUrl}" target="_blank">${data.newComicTitle}</a></p>
            </div>
          `).join(''));
    return;
  }
  const getId = async () => {
    const [, comicPy, chapterId] = window.location.pathname.split(/\/|\./);
    if (!comicPy) {
      main.toast.error('漫画数据获取失败', {
        duration: Infinity,
        throw: new Error('获取漫画拼音简称失败')
      });
    }
    const comicId = await getComicId(comicPy);
    return {
      comicId,
      chapterId
    };
  };
  const isListPageRe = /^\/[^/]*?\/?$/;
  const isMangaPageRe = /^\/.*?\/\d+\.shtml$/;
  const handleListPage = async () => {
    await main.waitDom('.newpl_ans');
    // 判断漫画被禁
    // 测试例子：https://manhua.dmzj.com/yanquan/
    if (!main.querySelector('.cartoon_online_border > img')) return false;
    main.querySelector('.cartoon_online_border').innerHTML = '获取漫画数据中';

    // 删掉原有的章节 dom
    main.querySelectorAll('.odd_anim_title ~ *').forEach(e => e.parentNode?.removeChild(e));
    const {
      comicId
    } = await getId();
    web.render(() => {
      const comicDetail = useComicDetail(comicId);
      return web.createComponent(solidJs.For, {
        get each() {
          return comicDetail.chapters;
        },
        children: ({
          name,
          list
        }) => [(() => {
          const _el$ = _tmpl$(),
            _el$2 = _el$.firstChild,
            _el$3 = _el$2.firstChild,
            _el$4 = _el$3.nextSibling,
            _el$5 = _el$4.firstChild;
          web.insert(_el$4, () => comicDetail.title, _el$5);
          web.insert(_el$4, name === '连载' ? '在线漫画全集' : `漫画其它版本：${name}`, null);
          return _el$;
        })(), (() => {
          const _el$6 = _tmpl$2(),
            _el$7 = _el$6.firstChild;
          _el$6.style.setProperty("margin-top", "-8px");
          web.insert(_el$7, web.createComponent(solidJs.For, {
            each: list,
            children: ({
              title,
              id,
              updatetime
            }) => (() => {
              const _el$8 = _tmpl$3(),
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
    }, main.querySelector('.middleright_mr'));
    return false;
  };

  /** 切换至上下滚动阅读 */
  const waitSwitchScroll = async () => {
    await main.waitDom('#qiehuan_txt');
    await main.wait(() => {
      const dom = main.querySelector('#qiehuan_txt');
      if (!dom) return;
      if (dom.innerText !== '切换到上下滚动阅读') return true;
      dom.click();
    });
  };
  const getImgList = async () => {
    await waitSwitchScroll();
    await main.waitDom('.comic_wraCon img');
    return main.querySelectorAll('.comic_wraCon img').map(e => e.src);
  };
  const checkButton = selector => {
    const dom = main.querySelector(selector);
    if (dom && dom.innerText) return () => dom.click();
  };
  const isMangaPage = async () => {
    if (isListPageRe.test(window.location.pathname)) return handleListPage();
    return isMangaPageRe.test(window.location.pathname);
  };
  await main.universalInit({
    name: 'dmzj',
    getImgList,
    onExit: isEnd => isEnd && main.scrollIntoView('#hd'),
    getCommentList: async () => {
      const {
        comicId,
        chapterId
      } = await getId();
      return getViewpoint(comicId, chapterId);
    },
    SPA: {
      isMangaPage,
      getOnPrev: () => checkButton('.display_left #prev_chapter'),
      getOnNext: () => checkButton('.display_right #next_chapter')
    }
  });
})();

        options = false;
        break;
      }
    case 'm.idmzj.com':
    case 'm.dmzj.com':
      {
const main = require('main');
const dmzjDecrypt = require('dmzjDecrypt');

/** 根据漫画 id 和章节 id 获取章节数据 */
const getChapterInfo = async (comicId, chapterId) => {
  const res = await main.request(`https://m.dmzj.com/chapinfo/${comicId}/${chapterId}.html`, {
    errorText: '获取章节数据失败'
  });
  return JSON.parse(res.responseText);
};

/** 根据漫画 id 和章节 id 获取章节评论 */
const getViewpoint = async (comicId, chapterId) => {
  try {
    const res = await main.request(`https://manhua.dmzj.com/tpi/api/viewpoint/getViewpoint?type=0&type_id=${comicId}&chapter_id=${chapterId}&more=1`, {
      errorText: '获取章节评论失败'
    });

    // 还有另一个 api
    // http://v3api.dmzj.com/viewPoint/0/${comic_id}/${chapter_id}.json

    return JSON.parse(res.responseText).data.list.map(({
      title,
      num
    }) => `${title} [+${num}]`);
  } catch (_) {
    return [];
  }
};

(async () => {
  const {
    setManga,
    init
  } = await main.useInit('dmzj');

  // 分别处理目录页和漫画页
  switch (window.location.pathname.split('/')[1]) {
    case 'info':
      {
        // 跳过正常漫画
        if (Reflect.has(unsafeWindow, 'obj_id')) return;
        const comicId = parseInt(window.location.pathname.split('/')[2], 10);
        if (Number.isNaN(comicId)) {
          document.body.removeChild(document.body.childNodes[0]);
          main.insertNode(document.body, `
          请手动输入漫画名进行搜索 <br />
          <input type="search"> <button>搜索</button> <br />
          <div id="list" />
        `);
          main.querySelector('button').addEventListener('click', async () => {
            const comicName = main.querySelector('input')?.value;
            if (!comicName) return;
            const res = await main.request(`https://s.acg.dmzj.com/comicsum/search.php?s=${comicName}`, {
              errorText: '搜索漫画时出错'
            });
            const comicList = JSON.parse(res.responseText.slice(20, -1));
            main.querySelector('#list').innerHTML = comicList.map(({
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
        main.insertNode(document.body, `<h1>${title}</h1>`);
        Object.values(chapters).forEach(chapter => {
          // 手动构建添加章节 dom
          let temp = `<h2>${chapter.title}</h2>`;
          let i = chapter.data.length;
          while (i--) temp += `<a target="_blank" title="${chapter.data[i].chapter_title}" href="https://m.dmzj.com/view/${comicId}/${chapter.data[i].chapter_id}.html" ${chapter.data[i].updatetime === last_updatetime ? 'style="color:red"' : ''}>${chapter.data[i].chapter_title}</a>`;
          main.insertNode(document.body, temp);
        });
        document.body.removeChild(document.body.childNodes[0]);
        await GM.addStyle(`
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
          await GM.addStyle('.subHeader{display:none !important}');
          setManga({
            onNext: main.querySelectorClick('#loadNextChapter'),
            onPrev: main.querySelectorClick('#loadPrevChapter')
          });
          init(() => main.querySelectorAll('#commicBox img').map(e => e.getAttribute('data-original')).filter(src => src));
          return;
        }
        const tipDom = document.createElement('p');
        tipDom.innerText = '正在加载中，请坐和放宽，若长时间无反应请刷新页面';
        document.body.appendChild(tipDom);
        let data;
        let comicId;
        let chapterId;
        try {
          [, comicId, chapterId] = /(\d+)\/(\d+)/.exec(window.location.pathname);
          data = await getChapterInfo(comicId, chapterId);
        } catch (error) {
          main.toast.error('获取漫画数据失败', {
            duration: Infinity
          });
          tipDom.innerText = error.message;
          throw error;
        }
        tipDom.innerText = `加载完成，即将进入阅读模式`;
        const {
          folder,
          chapter_name,
          next_chap_id,
          prev_chap_id,
          comic_id,
          page_url
        } = data;
        document.title = `${chapter_name} ${folder.split('/').at(1)}` ?? folder;
        setManga({
          // 进入阅读模式后禁止退出，防止返回空白页面
          onExit: () => {},
          onNext: next_chap_id ? () => {
            window.location.href = `https://m.dmzj.com/view/${comic_id}/${next_chap_id}.html`;
          } : undefined,
          onPrev: prev_chap_id ? () => {
            window.location.href = `https://m.dmzj.com/view/${comic_id}/${prev_chap_id}.html`;
          } : undefined,
          editButtonList: e => e
        });
        init(() => {
          if (page_url.length) return page_url;
          tipDom.innerHTML = `无法获得漫画数据，请通过 <a href="https://github.com/hymbz/ComicReadScript/issues" target="_blank">Github</a> 或 <a href="https://greasyfork.org/zh-CN/scripts/374903-comicread/feedback#post-discussion" target="_blank">Greasy Fork</a> 进行反馈`;
          return [];
        });
        setManga({
          commentList: await getViewpoint(comicId, chapterId)
        });
        break;
      }
  }
})();

        options = false;
        break;
      }
    case 'www.idmzj.com':
    case 'www.dmzj.com':
      {
const main = require('main');

/** 根据漫画 id 和章节 id 获取章节数据 */
const getChapterInfo = async (comicId, chapterId) => {
  const res = await main.request(`https://m.dmzj.com/chapinfo/${comicId}/${chapterId}.html`, {
    errorText: '获取章节数据失败'
  });
  return JSON.parse(res.responseText);
};

const chapterIdRe = /(?<=\/)\d+(?=\.html)/;
const turnPage = chapterId => {
  if (!chapterId) return undefined;
  return () => {
    window.open(window.location.href.replace(/(?<=\/)\d+(?=\.html)/, `${chapterId}`), '_self');
  };
};
(async () => {
  await main.waitDom('.head_wz');
  // 只在漫画页内运行
  const comicId = main.querySelector('.head_wz [id]')?.id;
  const chapterId = window.location.pathname.match(chapterIdRe)?.[0];
  if (!comicId || !chapterId) return;
  const {
    setManga,
    init
  } = await main.useInit('dmzj');
  try {
    const {
      next_chap_id,
      prev_chap_id,
      page_url
    } = await getChapterInfo(comicId, chapterId);
    init(() => page_url);
    setManga({
      onNext: turnPage(next_chap_id),
      onPrev: turnPage(prev_chap_id)
    });
  } catch (_) {
    main.toast.error('获取漫画数据失败', {
      duration: Infinity
    });
  }
})();

        options = false;
        break;
      }

    // #ehentai——「匹配 nhentai 漫画」
    case 'exhentai.org':
    case 'e-hentai.org':
      {
const web = require('solid-js/web');
const main = require('main');

const _tmpl$ = /*#__PURE__*/web.template(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68zm-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">`);
const MdSettings = ((props = {}) => (() => {
  const _el$ = _tmpl$();
  web.spread(_el$, props, true, true);
  return _el$;
})());

(async () => {
  const {
    options,
    setFab,
    setManga,
    init,
    dynamicUpdate
  } = await main.useInit('ehentai', {
    /** 关联 nhentai */
    associate_nhentai: true,
    /** 快捷键翻页 */
    hotkeys_page_turn: true,
    autoShow: false
  });

  // 不是漫画页的话
  if (!Reflect.has(unsafeWindow, 'gid')) {
    await GM.registerMenuCommand(main.t('site.show_settings_menu'), () => setFab({
      show: true,
      focus: true,
      tip: main.t('site.settings_tip'),
      children: web.createComponent(MdSettings, {}),
      onBackdropClick: () => setFab({
        show: false,
        focus: false
      })
    }));
    if (options.hotkeys_page_turn) {
      main.linstenKeyup(e => {
        switch (e.key) {
          case 'ArrowRight':
          case 'd':
            main.querySelector('#dnext')?.click();
            break;
          case 'ArrowLeft':
          case 'a':
            main.querySelector('#dprev')?.click();
            break;
        }
      });
    }
    return;
  }
  if (Reflect.has(unsafeWindow, 'mpvkey')) {
    const imgEleList = main.querySelectorAll('.mi0[id]');
    init(dynamicUpdate(setImg => main.plimit(imgEleList.map((ele, i) => async () => {
      const getUrl = () => ele.querySelector('img')?.src;
      if (!getUrl()) unsafeWindow.load_image(i + 1);
      unsafeWindow.next_possible_request = 0;
      const imgUrl = await main.wait(getUrl);
      setImg(i, imgUrl);
    }), undefined, 4), imgEleList.length));
    return;
  }
  setManga({
    onExit: isEnd => {
      if (isEnd) main.scrollIntoView('#cdiv');
      setManga({
        show: false
      });
    }
  });

  // 虽然有 Fab 了不需要这个按钮，但都点习惯了没有还挺别扭的（
  main.insertNode(document.getElementById('gd5'), '<p class="g2 gsp"><img src="https://ehgt.org/g/mr.gif"><a id="comicReadMode" href="javascript:;"> Load comic</a></p>');
  const comicReadModeDom = document.getElementById('comicReadMode');

  /** 从图片页获取图片地址 */
  const getImgFromImgPage = async url => {
    const res = await main.request(url, {
      errorText: main.t('site.ehentai.fetch_img_page_source_failed')
    });
    try {
      return res.responseText.split('id="img" src="')[1].split('"')[0];
    } catch (error) {
      throw new Error(main.t('site.ehentai.fetch_img_url_failed'));
    }
  };

  /** 从详情页获取图片页的地址的正则 */
  const getImgFromDetailsPageRe = /(?<=<a href=").{20,50}(?="><img alt="\d+")/gm;

  /** 从详情页获取图片页的地址 */
  const getImgFromDetailsPage = async (pageNum = 0) => {
    const res = await main.request(`${window.location.pathname}${pageNum ? `?p=${pageNum}` : ''}`, {
      errorText: main.t('site.ehentai.fetch_img_page_url_failed')
    });

    // 从详情页获取图片页的地址
    const imgPageList = res.responseText.match(getImgFromDetailsPageRe);
    if (imgPageList === null) {
      if (res.responseText.includes('Your IP address has been temporarily banned for excessive')) throw new Error(main.t('site.ehentai.ip_banned'));
      throw new Error(main.t('site.ehentai.fetch_img_page_url_failed'));
    }
    return imgPageList;
  };
  const getImgNum = async () => {
    let numText = main.querySelector('.gtb .gpc')?.textContent?.match(/\d+/g)?.at(-1);
    if (numText) return +numText;
    const res = await main.request(window.location.href);
    numText = res.responseText.match(/(?<=<td class="gdt2">)\d+(?= pages<\/td>)/)?.[0];
    if (numText) return +numText;
    main.toast.error(main.t('site.ehentai.html_changed_load_failed'));
    return 0;
  };
  const totalImgNum = await getImgNum();
  const ehImgList = [];
  const {
    loadImgList
  } = init(dynamicUpdate(async setImg => {
    comicReadModeDom.innerHTML = ` loading`;
    const totalPageNum = +main.querySelector('.ptt td:nth-last-child(2)').textContent;
    for (let pageNum = 0; pageNum < totalPageNum; pageNum++) {
      const startIndex = ehImgList.length;
      const imgPageUrlList = await getImgFromDetailsPage(pageNum);
      await main.plimit(imgPageUrlList.map((imgPageUrl, i) => async () => {
        const imgUrl = await getImgFromImgPage(imgPageUrl);
        const index = startIndex + i;
        ehImgList[index] = imgUrl;
        setImg(index, imgUrl);
      }), _doneNum => {
        const doneNum = startIndex + _doneNum;
        setFab({
          progress: doneNum / totalImgNum,
          tip: `${main.t('other.loading_img')} - ${doneNum}/${totalImgNum}`
        });
        comicReadModeDom.innerHTML = doneNum !== totalImgNum ? ` loading - ${doneNum}/${totalImgNum}` : ` Read`;
      });
    }
  }, totalImgNum));
  setFab({
    initialShow: options.autoShow
  });
  comicReadModeDom.addEventListener('click', () => loadImgList(ehImgList.length ? ehImgList : undefined, true));
  if (options.hotkeys_page_turn) {
    main.linstenKeyup(e => {
      switch (e.key) {
        case 'ArrowRight':
        case 'd':
          main.querySelector('.ptt td:last-child:not(.ptdd)')?.click();
          break;
        case 'ArrowLeft':
        case 'a':
          main.querySelector('.ptt td:first-child:not(.ptdd)')?.click();
          break;
      }
    });
  }
  if (options.associate_nhentai) {
    const titleDom = document.getElementById('gn');
    const taglistDom = main.querySelector('#taglist tbody');
    if (!titleDom || !taglistDom) {
      main.toast.error(main.t('site.ehentai.html_changed_nhentai_failed'));
      return;
    }
    const title = encodeURI(titleDom.innerText);
    const newTagLine = document.createElement('tr');
    let res;
    try {
      res = await main.request(`https://nhentai.net/api/galleries/search?query=${title}`, {
        errorText: main.t('site.ehentai.nhentai_error'),
        noTip: true
      });
    } catch (_) {
      newTagLine.innerHTML = `
      <td class="tc">nhentai:</td>
      <td class="tc" style="text-align: left;">
        ${main.t('site.ehentai.nhentai_failed', {
        nhentai: `<a href='https://nhentai.net/search/?q=${title}' target="_blank" ><u>nhentai</u></a>`
      })}
      </td>`;
      taglistDom.appendChild(newTagLine);
      return;
    }
    const nHentaiComicInfo = JSON.parse(res.responseText);

    // 构建新标签行
    if (nHentaiComicInfo.result.length) {
      let temp = '<td class="tc">nhentai:</td><td>';
      let i = nHentaiComicInfo.result.length;
      while (i) {
        i -= 1;
        const tempComicInfo = nHentaiComicInfo.result[i];
        temp += `<div id="td_nhentai:${tempComicInfo.id}" class="gtl" style="opacity:1.0" title="${tempComicInfo.title.japanese ? tempComicInfo.title.japanese : tempComicInfo.title.english}"><a href="https://nhentai.net/g/${tempComicInfo.id}/" index=${i} onClick="return toggle_tagmenu('nhentai:${tempComicInfo.id}',this)">${tempComicInfo.id}</a></a></div>`;
      }
      newTagLine.innerHTML = `${temp}</td>`;
    } else newTagLine.innerHTML = '<td class="tc">nhentai:</td><td class="tc" style="text-align: left;">Null</td>';
    taglistDom.appendChild(newTagLine);

    // 重写 _refresh_tagmenu_act 函数，加入脚本的功能
    const nhentaiImgList = {};
    const raw_refresh_tagmenu_act = unsafeWindow._refresh_tagmenu_act;
    unsafeWindow._refresh_tagmenu_act = function _refresh_tagmenu_act(a, b) {
      if (a.includes('nhentai:')) {
        const tagmenu_act_dom = document.getElementById('tagmenu_act');
        tagmenu_act_dom.innerHTML = ['', `<a href="${b.href}" target="_blank"> Jump to nhentai</a>`, `<a href="#"> ${nhentaiImgList[selected_tag] ? 'Read' : 'Load comic'}</a>`].join('<img src="https://ehgt.org/g/mr.gif" class="mr" alt=">">');
        const nhentaiComicReadModeDom = tagmenu_act_dom.querySelector('a[href="#"]');

        // 加载 nhentai 漫画
        nhentaiComicReadModeDom.addEventListener('click', async e => {
          e.preventDefault();
          const comicInfo = nHentaiComicInfo.result[+selected_link.getAttribute('index')];
          let loadNum = 0;
          if (!nhentaiImgList[selected_tag]) {
            nhentaiComicReadModeDom.innerHTML = ` loading - ${loadNum}/${comicInfo.num_pages}`;
            // 用于转换获得图片文件扩展名的 dict
            const fileType = {
              j: 'jpg',
              p: 'png',
              g: 'gif'
            };
            nhentaiImgList[selected_tag] = await Promise.all(comicInfo.images.pages.map(async (page, i) => {
              const imgRes = await main.request(`https://i.nhentai.net/galleries/${comicInfo.media_id}/${i + 1}.${fileType[page.t]}`, {
                headers: {
                  Referer: `https://nhentai.net/g/${comicInfo.media_id}`
                },
                responseType: 'blob'
              });
              const blobUrl = URL.createObjectURL(imgRes.response);
              loadNum += 1;
              nhentaiComicReadModeDom.innerHTML = ` loading - ${loadNum}/${comicInfo.num_pages}`;
              return blobUrl;
            }));
            nhentaiComicReadModeDom.innerHTML = ' Read';
          }
          await loadImgList(nhentaiImgList[selected_tag], true);
        });
      }
      // 非 nhentai 标签列的用原函数去处理
      else raw_refresh_tagmenu_act(a, b);
    };
  }
})();

        options = false;
        break;
      }

    // #nhentai——「彻底屏蔽漫画，自动翻页」
    case 'nhentai.net':
      {
const main = require('main');

/** 用于转换获得图片文件扩展名 */
const fileType = {
  j: 'jpg',
  p: 'png',
  g: 'gif'
};
(async () => {
  const {
    options,
    setFab,
    setManga,
    init
  } = await main.useInit('nhentai', {
    /** 自动翻页 */
    auto_page_turn: true,
    /** 彻底屏蔽漫画 */
    block_totally: true,
    /** 在新页面中打开链接 */
    open_link_new_page: true
  });

  // 在漫画详情页
  if (Reflect.has(unsafeWindow, 'gallery')) {
    setManga({
      onExit: isEnd => {
        if (isEnd) main.scrollIntoView('#comment-container');
        setManga({
          show: false
        });
      }
    });

    // 虽然有 Fab 了不需要这个按钮，但我自己都点习惯了没有还挺别扭的（
    main.insertNode(document.getElementById('download').parentNode, '<a href="javascript:;" id="comicReadMode" class="btn btn-secondary"><i class="fa fa-book"></i> Read</a>');
    const comicReadModeDom = document.getElementById('comicReadMode');
    const {
      showComic
    } = init(() => gallery.images.pages.map(({
      number,
      extension
    }) => `https://i.nhentai.net/galleries/${gallery.media_id}/${number}.${extension}`));
    setFab({
      initialShow: options.autoShow
    });
    comicReadModeDom.addEventListener('click', showComic);
    return;
  }

  // 在漫画浏览页
  if (document.getElementsByClassName('gallery').length) {
    if (options.open_link_new_page) main.querySelectorAll('a:not([href^="javascript:"])').forEach(e => e.setAttribute('target', '_blank'));
    const blacklist = (unsafeWindow?._n_app ?? unsafeWindow?.n)?.options?.blacklisted_tags;
    if (blacklist === undefined) main.toast.error(main.t('site.nhentai.tag_blacklist_fetch_failed'));
    // blacklist === null 时是未登录

    if (options.block_totally && blacklist?.length) await GM.addStyle('.blacklisted.gallery { display: none; }');
    if (options.auto_page_turn) {
      await GM.addStyle(`
        hr { bottom: 0; box-sizing: border-box; margin: -1em auto 2em; }
        hr:last-child { position: relative; animation: load .8s linear alternate infinite; }
        hr:not(:last-child) { display: none; }
        @keyframes load { 0% { width: 100%; } 100% { width: 0; } }
      `);
      let pageNum = Number(main.querySelector('.page.current')?.innerHTML ?? '');
      if (Number.isNaN(pageNum)) return;
      let loadLock = !pageNum;
      const contentDom = document.getElementById('content');
      const apiUrl = (() => {
        if (window.location.pathname === '/') return 'https://nhentai.net/api/galleries/all?';
        if (main.querySelector('a.tag')) return `https://nhentai.net/api/galleries/tagged?tag_id=${main.querySelector('a.tag')?.classList[1].split('-')[1]}&`;
        if (window.location.pathname.includes('search')) return `https://nhentai.net/api/galleries/search?query=${new URLSearchParams(window.location.search).get('q')}&`;
        return '';
      })();
      const loadNewComic = async () => {
        if (loadLock || contentDom.lastElementChild.getBoundingClientRect().top > window.innerHeight) return undefined;
        loadLock = true;
        pageNum += 1;
        const res = await main.request(`${apiUrl}page=${pageNum}${window.location.pathname.includes('popular') ? '&sort=popular ' : ''}`, {
          errorText: main.t('site.nhentai.fetch_next_page_failed')
        });
        const {
          result,
          num_pages
        } = JSON.parse(res.responseText);
        let comicDomHtml = '';
        result.forEach(comic => {
          const blacklisted = comic.tags.some(tag => blacklist?.includes(tag.id));
          comicDomHtml += `<div class="gallery${blacklisted ? ' blacklisted' : ''}" data-tags="${comic.tags.map(e => e.id).join(' ')}"><a ${options.open_link_new_page ? 'target="_blank"' : ''} href="/g/${comic.id}/" class="cover" style="padding:0 0 ${comic.images.thumbnail.h / comic.images.thumbnail.w * 100}% 0"><img is="lazyload-image" class="" width="${comic.images.thumbnail.w}" height="${comic.images.thumbnail.h}" src="https://t.nhentai.net/galleries/${comic.media_id}/thumb.${fileType[comic.images.thumbnail.t]}"><div class="caption">${comic.title.english}</div></a></div>`;
        });

        // 构建页数按钮
        if (comicDomHtml) {
          const target = options.open_link_new_page ? 'target="_blank" ' : '';
          const pageNumDom = [];
          for (let i = pageNum - 5; i <= pageNum + 5; i += 1) {
            if (i > 0 && i <= num_pages) pageNumDom.push(`<a ${target}href="?page=${i}" class="page${i === pageNum ? ' current' : ''}">${i}</a>`);
          }
          main.insertNode(contentDom, `<h1>${pageNum}</h1>
             <div class="container index-container">${comicDomHtml}</div>
             <section class="pagination">
              <a ${target}href="?page=1" class="first">
                <i class="fa fa-chevron-left"></i>
                <i class="fa fa-chevron-left"></i>
              </a>
              <a ${target}href="?page=${pageNum - 1}" class="previous">
                <i class="fa fa-chevron-left"></i>
              </a>
              ${pageNumDom.join('')}
                ${pageNum === num_pages ? '' : `<a ${target}shref="?page=${pageNum + 1}" class="next">
                        <i class="fa fa-chevron-right"></i>
                      </a>
                      <a ${target}href="?page=${num_pages}" class="last">
                        <i class="fa fa-chevron-right"></i>
                        <i class="fa fa-chevron-right"></i>
                      </a>`}
              </section>`);
        }

        // 添加分隔线
        contentDom.appendChild(document.createElement('hr'));
        if (pageNum < num_pages) loadLock = false;else contentDom.lastElementChild.style.animationPlayState = 'paused';

        // 当前页的漫画全部被屏蔽或当前显示的漫画少到连滚动条都出不来时，继续加载
        if (!comicDomHtml || contentDom.offsetHeight < document.body.offsetHeight) return loadNewComic();
        return undefined;
      };
      window.addEventListener('scroll', loadNewComic);
      if (main.querySelector('section.pagination')) contentDom.appendChild(document.createElement('hr'));
      await loadNewComic();
    }
  }
})();

        options = false;
        break;
      }

    // #PonpomuYuri
    case 'www.ponpomu.com':
      {
        options = {
          name: 'terraHistoricus',
          wait: () => !!main.querySelector('.comic-page-container img'),
          getImgList: () => main.querySelectorAll('.comic-page-container img').map(e => e.getAttribute('data-srcset')),
          SPA: {
            isMangaPage: () => window.location.href.includes('/comic/'),
            getOnPrev: () => main.querySelectorClick('.prev-btn a'),
            getOnNext: () => main.querySelectorClick('.next-btn a')
          }
        };
        break;
      }

    // #明日方舟泰拉记事社
    case 'terra-historicus.hypergryph.com':
      {
        const apiUrl = () => `https://terra-historicus.hypergryph.com/api${window.location.pathname}`;
        const getImgUrl = i => async () => {
          const res = await main.request(`${apiUrl()}/page?pageNum=${i + 1}`);
          return JSON.parse(res.response).data.url;
        };
        options = {
          name: 'terraHistoricus',
          wait: () => !!main.querySelector('footer .HG_GAME_JS_BRIDGE__wrapper'),
          getImgList: async ({
            setFab
          }) => {
            const res = await main.request(apiUrl());
            const pageList = JSON.parse(res.response).data.pageInfos;
            if (pageList.length === 0 && window.location.pathname.includes('episode')) throw new Error('获取图片列表时出错');
            return main.plimit([...Array(pageList.length).keys()].map(getImgUrl), (doneNum, totalNum) => {
              setFab({
                progress: doneNum / totalNum,
                tip: `加载图片中 - ${doneNum}/${totalNum}`
              });
            });
          },
          SPA: {
            isMangaPage: () => window.location.href.includes('episode'),
            getOnPrev: () => main.querySelectorClick('footer .HG_GAME_JS_BRIDGE__prev a'),
            getOnNext: () => main.querySelectorClick('footer .HG_GAME_JS_BRIDGE__buttonEp+.HG_GAME_JS_BRIDGE__buttonEp a')
          }
        };
        break;
      }

    // #禁漫天堂
    // 发布页：https://jmcomic.ltd
    case '18-comic.work':
    case '18comic-god.biz':
    case '18-comic2.work':
    case 'jmcomic.me':
    case 'jmcomic1.me':
    case '18comic.org':
    case '18comic.vip':
      {
const main = require('main');

// 已知问题：某些漫画始终会有几页在下载原图时出错
// 并且这类漫画下即使关掉脚本，也还是会有几页就是加载不出来
// 比较神秘的是这两种情况下加载不出来的图片还不一样
// 并且在多次刷新的情况下都是那几张图片加载不出来
// 另外这类漫画也有概率出现，在关闭脚本的情况下所有图片都加载不出来的情况，只能刷新
// 就很怪
// 对此只能放弃
(async () => {
  // 只在漫画页内运行
  if (!window.location.pathname.includes('/photo/')) return;
  const {
    init,
    setManga,
    setFab,
    dynamicUpdate
  } = await main.useInit('jm');
  while (!unsafeWindow?.onImageLoaded) {
    if (document.readyState === 'complete') {
      main.toast.error('无法获取图片', {
        duration: Infinity
      });
      return;
    }
    await main.sleep(100);
  }
  setManga({
    onPrev: main.querySelectorClick(() => main.querySelector('.menu-bolock-ul .fa-angle-double-left')?.parentElement),
    onNext: main.querySelectorClick(() => main.querySelector('.menu-bolock-ul .fa-angle-double-right')?.parentElement)
  });
  const imgEleList = main.querySelectorAll('.scramble-page > img');

  // 判断当前漫画是否有被分割，没有就直接获取图片链接加载
  // 判断条件来自页面上的 scramble_image 函数
  if (unsafeWindow.aid < unsafeWindow.scramble_id || unsafeWindow.speed === '1') {
    init(() => imgEleList.map(e => e.getAttribute('data-original')));
    return;
  }
  const isBlobUrl = /^blob:https?:\/\//;
  const getImgUrl = async imgEle => {
    if (isBlobUrl.test(imgEle.src)) return imgEle.src;
    const originalUrl = imgEle.src;
    const res = await main.request(imgEle.getAttribute('data-original'), {
      responseType: 'blob',
      revalidate: true,
      fetch: true
    });
    if (!res.response.size) {
      main.toast.warn(`下载原图时出错: ${imgEle.getAttribute('data-page')}`);
      return '';
    }
    imgEle.src = URL.createObjectURL(res.response);
    const err = await main.waitImgLoad(imgEle);
    if (err) {
      URL.revokeObjectURL(imgEle.src);
      imgEle.src = originalUrl;
      main.toast.warn(`加载原图时出错: ${imgEle.getAttribute('data-page')}`);
      return '';
    }
    try {
      unsafeWindow.onImageLoaded(imgEle);
      const blob = await main.canvasToBlob(imgEle.nextElementSibling, 'image/webp', 1);
      URL.revokeObjectURL(imgEle.src);
      if (!blob) throw new Error('');
      return `${URL.createObjectURL(blob)}#.webp`;
    } catch (error) {
      imgEle.src = originalUrl;
      main.toast.warn(`转换图片时出错: ${imgEle.getAttribute('data-page')}`);
      return '';
    }
  };

  // 先等懒加载触发完毕
  await main.wait(() => main.querySelectorAll('.lazy-loaded.hide').length && main.querySelectorAll('.lazy-loaded.hide').length === main.querySelectorAll('canvas').length);
  init(dynamicUpdate(setImg => main.plimit(imgEleList.map((img, i) => async () => setImg(i, await getImgUrl(img))), (doneNum, totalNum) => {
    setFab({
      progress: doneNum / totalNum,
      tip: `加载图片中 - ${doneNum}/${totalNum}`
    });
  }), imgEleList.length));
  const retry = (num = 0) => setManga(async state => {
    for (let i = 0; i < imgEleList.length; i++) {
      if (state.imgList[i]) continue;
      state.imgList[i] = await getImgUrl(imgEleList[i]);
      await main.sleep(1000);
    }
    if (num < 60 && state.imgList.some(url => !url)) setTimeout(retry, 1000 * 5, num + 1);
  });
  retry();
})();

        options = false;
        break;
      }

    // #拷贝漫画(copymanga)
    case 'copymanga.site':
    case 'copymanga.info':
    case 'copymanga.net':
    case 'copymanga.org':
    case 'copymanga.tv':
    case 'copymanga.com':
    case 'www.copymanga.site':
    case 'www.copymanga.info':
    case 'www.copymanga.net':
    case 'www.copymanga.org':
    case 'www.copymanga.tv':
    case 'www.copymanga.com':
      {
        options = {
          name: 'copymanga',
          exit: () => !window.location.href.includes('/chapter/'),
          getImgList: async () => {
            const res = await main.request(window.location.href.replace(/.*?(?=\/comic\/)/, 'https://api.copymanga.site/api/v3'));
            return JSON.parse(res.responseText).results.chapter.contents.map(({
              url
            }) => url);
          },
          onNext: main.querySelectorClick('.comicContent-next a:not(.prev-null)'),
          onPrev: main.querySelectorClick('.comicContent-prev:not(.index,.list) a:not(.prev-null)'),
          getCommentList: async () => {
            const chapter_id = window.location.pathname.split('/').at(-1);
            const res = await main.request(`https://api.copymanga.site/api/v3/roasts?chapter_id=${chapter_id}&limit=100&offset=0&_update=true`);
            return JSON.parse(res.responseText).results.list.map(({
              comment
            }) => comment);
          }
        };
        break;
      }

    // #漫画柜(manhuagui)
    case 'www.manhuagui.com':
    case 'www.mhgui.com':
    case 'tw.manhuagui.com':
      {
        // 让切换章节的提示可以显示在漫画页上
        GM.addStyle(`#smh-msg-box { z-index: 2147483647 !important }`);
        options = {
          name: 'manhuagui',
          exit: () => !Reflect.has(unsafeWindow, 'cInfo'),
          getImgList: () => {
            const comicInfo = JSON.parse(
            // 只能通过 eval 获得数据
            // eslint-disable-next-line no-eval
            eval(main.querySelectorAll('body > script')[1].innerHTML.slice(26)).slice(12, -12));
            const sl = Object.entries(comicInfo.sl).map(attr => `${attr[0]}=${attr[1]}`).join('&');
            return comicInfo.files.map(file => `${unsafeWindow.pVars.manga.filePath}${file}?${sl}`);
          },
          onNext: unsafeWindow.cInfo.nextId !== 0 ? main.querySelectorClick('a.nextC') : undefined,
          onPrev: unsafeWindow.cInfo.prevId !== 0 ? main.querySelectorClick('a.prevC') : undefined
        };
        break;
      }

    // #漫画DB(manhuadb)
    case 'www.manhuadb.com':
      {
        options = {
          name: 'manhuaDB',
          exit: () => !Reflect.has(unsafeWindow, 'img_data_arr'),
          getImgList: () => unsafeWindow.img_data_arr.map(data => `${unsafeWindow.img_host}/${unsafeWindow.img_pre}/${data.img}`),
          onPrev: () => unsafeWindow.goNumPage('pre'),
          onNext: () => unsafeWindow.goNumPage('next')
        };
        break;
      }

    // #动漫屋(dm5)
    case 'tel.dm5.com':
    case 'en.dm5.com':
    case 'www.dm5.com':
    case 'www.dm5.cn':
    case 'www.1kkk.com':
      {
        const getImgList = async (fnMap, imgList = []) => {
          const res = await unsafeWindow.$.ajax({
            type: 'GET',
            url: 'chapterfun.ashx',
            data: {
              cid: unsafeWindow.DM5_CID,
              page: imgList.length + 1,
              key: unsafeWindow.$('#dm5_key').length ? unsafeWindow.$('#dm5_key').val() : '',
              language: 1,
              gtk: 6,
              _cid: unsafeWindow.DM5_CID,
              _mid: unsafeWindow.DM5_MID,
              _dt: unsafeWindow.DM5_VIEWSIGN_DT,
              _sign: unsafeWindow.DM5_VIEWSIGN
            }
          });

          // 返回的数据只能通过 eval 获得
          const newImgList = [...imgList,
          // eslint-disable-next-line no-eval
          ...eval(res)];
          if (newImgList.length !== unsafeWindow.DM5_IMAGE_COUNT) {
            // 在 Fab 按钮上通过进度条和提示文本显示当前进度
            fnMap.setFab({
              progress: newImgList.length / unsafeWindow.DM5_IMAGE_COUNT,
              tip: `加载图片中 - ${newImgList.length}/${unsafeWindow.DM5_IMAGE_COUNT}`
            });
            return getImgList(fnMap, newImgList);
          }
          return newImgList;
        };
        options = {
          name: 'dm5',
          exit: () => !Reflect.has(unsafeWindow, 'DM5_CID'),
          getImgList,
          onNext: main.querySelectorClick('.logo_2'),
          onPrev: main.querySelectorClick('.logo_1'),
          onExit: isEnd => isEnd && main.scrollIntoView('.postlist')
        };
        break;
      }

    // #绅士漫画(wnacg)
    case 'www.wn3.lol':
    case 'www.wnacg.com':
    case 'wnacg.com':
      {
        options = {
          name: 'wnacg',
          exit: () => !Reflect.has(unsafeWindow, 'imglist'),
          getImgList: () => unsafeWindow.imglist.filter(({
            caption
          }) => caption !== '喜歡紳士漫畫的同學請加入收藏哦！').map(({
            url
          }) => new URL(url, window.location.origin).href)
        };
        // 突出显示下拉阅读的按钮
        const buttonDom = main.querySelector('#bodywrap a.btn');
        if (buttonDom) {
          buttonDom.style.setProperty('background-color', '#607d8b');
          buttonDom.style.setProperty('background-image', 'none');
        }
        break;
      }

    // #mangabz
    case 'www.mangabz.com':
    case 'mangabz.com':
      {
        const getImgList = async (fnMap, imgList = []) => {
          const res = await unsafeWindow.$.ajax({
            type: 'GET',
            url: 'chapterimage.ashx',
            data: {
              cid: unsafeWindow.MANGABZ_CID,
              page: imgList.length + 1,
              key: '',
              _cid: unsafeWindow.MANGABZ_CID,
              _mid: unsafeWindow.MANGABZ_MID,
              _dt: unsafeWindow.MANGABZ_VIEWSIGN_DT,
              _sign: unsafeWindow.MANGABZ_VIEWSIGN
            }
          });

          // 返回的数据只能通过 eval 获得
          const newImgList = [...imgList,
          // eslint-disable-next-line no-eval
          ...eval(res)];
          if (newImgList.length !== unsafeWindow.MANGABZ_IMAGE_COUNT) {
            // 在 Fab 按钮上通过进度条和提示文本显示当前进度
            fnMap.setFab({
              progress: newImgList.length / unsafeWindow.MANGABZ_IMAGE_COUNT,
              tip: `加载图片中 - ${newImgList.length}/${unsafeWindow.MANGABZ_IMAGE_COUNT}`
            });
            return getImgList(fnMap, newImgList);
          }
          return newImgList;
        };
        options = {
          name: 'mangabz',
          exit: () => !Reflect.has(unsafeWindow, 'MANGABZ_CID'),
          getImgList,
          onNext: main.querySelectorClick('body > .container a[href^="/"]:last-child'),
          onPrev: main.querySelectorClick('body > .container a[href^="/"]:first-child')
        };
        break;
      }

    // #komiic
    case 'komiic.com':
      {
        const getImgList = async () => {
          const imgList = main.querySelectorAll('.imageContainer > img').map(e => e.getAttribute('data-src') ?? '');
          if (imgList.includes('')) {
            await main.sleep(100);
            return getImgList();
          }
          return imgList;
        };
        const handlePrevNext = text => async () => {
          // 点击唤出底栏
          const id = window.setInterval(() => {
            main.querySelector('.ComicImageContainer')?.click();
          }, 500);
          await main.waitDom('.ComicImage__bottom-menu-center');
          window.clearInterval(id);
          const buttonDom = main.querySelectorAll('.ComicImage__bottom-menu-center button:not([disabled])').find(e => e.innerText.includes(text));
          return main.querySelectorClick(() => buttonDom);
        };
        const urlMatchRe = /comic\/\d+\/chapter\/\d+\/images\//;
        options = {
          name: 'komiic',
          wait: () => !!main.querySelector('.imageContainer > img'),
          getImgList,
          SPA: {
            isMangaPage: () => urlMatchRe.test(window.location.href),
            getOnPrev: handlePrevNext('上一'),
            getOnNext: handlePrevNext('下一')
          }
        };
        break;
      }

    // #hitomi
    case 'hitomi.la':
      {
        options = {
          name: 'hitomi',
          getImgList: () => main.wait(() => unsafeWindow.galleryinfo?.files).then(files => files.map(img => unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo.id, img, 'webp', undefined, 'a')))
        };
        break;
      }

    // #kemono
    case 'kemono.party':
      {
        options = {
          name: 'kemono',
          getImgList: () => main.querySelectorAll('.post__thumbnail > a').map(e => e.href),
          initOptions: {
            autoShow: false,
            option: {
              onePageMode: true
            }
          }
        };
        break;
      }

    // #welovemanga
    case 'nicomanga.com':
    case 'weloma.art':
    case 'welovemanga.one':
      {
        const imgSelector = '#listImgs img.chapter-img.chapter-img:not(.ls-is-cached)';
        const isLoadingGifRe = /loading.*\.gif/;
        const getImgList = async () => {
          const imgList = main.querySelectorAll(imgSelector).map(e => e.getAttribute('data-src')?.trim() ?? e.getAttribute('data-original')?.trim() ?? e.src);
          if (imgList.every(url => !isLoadingGifRe.test(url))) return imgList;
          await main.sleep(500);
          return getImgList();
        };
        options = {
          name: 'welovemanga',
          exit: () => !main.querySelector('#listImgs'),
          getImgList,
          onNext: main.querySelectorClick('.rd_top-right.next:not(.disabled)'),
          onPrev: main.querySelectorClick('.rd_top-left.prev:not(.disabled)')
        };
        break;
      }

    // 为 pwa 版页面提供 api，以便翻译功能能正常运作
    case 'comic-read.pages.dev':
      {
        unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest;
        options = false;
        break;
      }
  }
  if (options) main.universalInit(options);else if (options !== false) {
const main = require('main');

const langList = ['zh', 'en', 'ru'];
/** 判断传入的字符串是否是支持的语言类型代码 */
const isLanguages = lang => !!lang && langList.includes(lang);

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
const getSaveLang = () => typeof GM !== 'undefined' ? GM.getValue('Languages') : localStorage.getItem('Languages');
const setSaveLang = val => typeof GM !== 'undefined' ? GM.setValue('Languages', val) : localStorage.setItem('Languages', val);
const getInitLang = async () => {
  const saveLang = await getSaveLang();
  if (isLanguages(saveLang)) return saveLang;
  const lang = getBrowserLang() ?? 'zh';
  setSaveLang(lang);
  return lang;
};

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */
function throttle (delay, callback, options) {
  var _ref = options || {},
      _ref$noTrailing = _ref.noTrailing,
      noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
      _ref$noLeading = _ref.noLeading,
      noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
      _ref$debounceMode = _ref.debounceMode,
      debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */


  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel(options) {
    var _ref2 = options || {},
        _ref2$upcomingOnly = _ref2.upcomingOnly,
        upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */
        lastExec = Date.now();

        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec();
      }
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, callback, options) {
  var _ref = options || {},
      _ref$atBegin = _ref.atBegin,
      atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;

  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}


// 测试案例
// https://www.177picyy.com/html/2023/03/5505307.html
//  需要配合其他翻页脚本使用
// https://www.colamanga.com/manga-za76213/1/5.html
//  直接跳转到图片元素不会立刻触发，还需要停留20ms
// https://www.colamanga.com/manga-kg45140/1/2.html
(async () => {
  /** 执行脚本操作。如果中途中断，将返回 true */
  const start = async () => {
    const {
      setManga,
      setFab,
      init,
      options,
      setOptions,
      isStored,
      mangaProps,
      _setManga
    } = await main.useInit(window.location.hostname, {
      remember_current_site: true,
      selector: ''
    });

    // 通过 options 来迂回的实现禁止记住当前站点
    if (!options.remember_current_site) {
      await GM.deleteValue(window.location.hostname);
      return true;
    }
    if (!isStored) main.toast(main.autoReadModeMessage(setOptions), {
      duration: 1000 * 7
    });

    // 为避免卡死，提供一个删除 selector 的菜单项
    const menuId = await GM.registerMenuCommand(main.t('site.simple.simple_read_mode'), () => setOptions({
      selector: ''
    }));

    // 等待 selector 匹配到目标后再继续执行，避免在漫画页外的其他地方运行
    await main.wait(() => !options.selector || main.querySelector(options.selector));
    await GM.unregisterMenuCommand(menuId);

    /** 获取元素仅记录了层级结构关系的 selector */
    const getEleSelector = ele => {
      const parents = [ele.nodeName];
      const root = ele.getRootNode();
      let e = ele;
      while (e.parentNode && e.parentNode !== root) {
        e = e.parentNode;
        parents.push(e.nodeName);
      }
      return parents.reverse().join('>');
    };

    /** 记录传入的图片元素中最常见的那个 selector */
    const saveImgEleSelector = imgEleList => {
      if (imgEleList.length < 7) return;
      const selector = main.getMostItem(imgEleList.map(getEleSelector));
      if (selector !== options.selector) setOptions({
        selector
      });
    };

    /** 用于判断是否是图片 url 的正则 */
    const isImgUrlRe = /^(((https?|ftp|file):)?\/)?\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#%=~_|]$/;

    /** 检查元素属性，将格式为图片 url 的属性值作为 src */
    const tryCorrectUrl = e => {
      e.getAttributeNames().some(key => {
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
            return false;
        }
        const val = e.getAttribute(key).trim();
        if (!isImgUrlRe.test(val)) return false;
        e.setAttribute('src', val);
        return true;
      });
    };
    const blobUrlMap = new Map();
    // 处理那些 URL.createObjectURL 后马上 URL.revokeObjectURL 的图片
    const handleBlobImg = async e => {
      if (blobUrlMap.has(e.src)) return blobUrlMap.get(e.src);
      if (!e.src.startsWith('blob:')) return e.src;
      if (await main.testImgUrl(e.src)) return e.src;
      const canvas = document.createElement('canvas');
      const canvasCtx = canvas.getContext('2d');
      canvas.width = e.naturalWidth;
      canvas.height = e.naturalHeight;
      canvasCtx.drawImage(e, 0, 0);
      const url = URL.createObjectURL(await main.canvasToBlob(canvas));
      blobUrlMap.set(e.src, url);
      return url;
    };
    const imgBlackList = [
    // 东方永夜机的预加载图片
    '#pagetual-preload',
    // 177picyy 上会在图片下加一个 noscript
    // 本来只是图片元素的 html 代码，但经过东方永夜机加载后就会变成真的图片元素，导致重复
    'noscript'];
    const getAllImg = () => main.querySelectorAll(`:not(${imgBlackList.join(',')}) > img`)
    // 根据位置从小到大排序
    .sort((a, b) => a.offsetTop - b.offsetTop);

    // 使用 triggerEleLazyLoad 会导致正常的滚动在滚到一半时被打断，所以加个锁限制一下
    let scrollLock = false;
    const closeScrollLock = debounce(1000, () => {
      scrollLock = false;
    });
    window.addEventListener('scroll', () => {
      scrollLock = true;
      closeScrollLock();
    });
    const getScrollLock = () => !scrollLock;

    /** 已经被触发过懒加载的图片 */
    const triggedImgList = new Set();

    /** 触发懒加载 */
    const triggerLazyLoad = async () => {
      const nowScroll = window.scrollY;
      // 滚到底部再滚回来，触发可能存在的自动翻页脚本
      window.scroll({
        top: document.body.scrollHeight,
        behavior: 'auto'
      });
      document.body.dispatchEvent(new Event('scroll', {
        bubbles: true
      }));
      window.scroll({
        top: nowScroll,
        behavior: 'auto'
      });

      // 过滤掉已经被触发过懒加载的图片
      const targetImgList = getAllImg().filter(e => !triggedImgList.has(e));
      const oldSrcList = targetImgList.map(e => e.src);
      for (let i = 0; i < targetImgList.length; i++) {
        await main.wait(getScrollLock);
        const e = targetImgList[i];
        tryCorrectUrl(e);

        // 只在`开启了阅读模式所以用户看不到网页滚动`和`当前可显示图片数量不足`时，
        // 才在触发懒加载时停留一段时间，避免用户看着页面跳来跳去操作不了
        const lazyLoadWaitTime = mangaProps.show || mangaProps.imgList.length < 2 ? 300 : 0;
        await main.triggerEleLazyLoad(e, lazyLoadWaitTime, oldSrcList[i]);
        if (
        // src 发生改变的肯定是成功触发了的
        oldSrcList[i] !== e.src ||
        // 停留过一段时间还没触发的大概率是没有懒加载的
        // 虽然也有概率误判，但到时再加长等待时间就是了
        // 不把停留过的图片忽略掉的话，遇上图片元素多的站点要等很久才能触发完一遍
        lazyLoadWaitTime) triggedImgList.add(e);
      }
    };
    let imgEleList;
    const updateImgList = async () => {
      imgEleList = await main.wait(() => {
        const newImgList = getAllImg().filter(e => e.naturalHeight > 500 && e.naturalWidth > 500);
        return newImgList.length >= 2 && newImgList;
      });
      if (imgEleList.length === 0) {
        setFab({
          show: false
        });
        setManga({
          show: false
        });
        return;
      }
      let isEdited = false;
      await main.plimit(imgEleList.map((e, i) => async () => {
        const newUrl = await handleBlobImg(e);
        if (newUrl === mangaProps.imgList[i]) return;
        if (!isEdited) isEdited = true;
        _setManga('imgList', i, newUrl);
      }));
      if (isEdited) saveImgEleSelector(imgEleList);
    };
    init(async () => {
      if (!imgEleList) {
        imgEleList = [];
        // 为保证兼容，只能简单粗暴的不断检查
        main.loop(triggerLazyLoad, 500);
        main.loop(updateImgList, 1000);
      }
      await main.wait(() => mangaProps.imgList.some(Boolean));
      return mangaProps.imgList;
    });
  };
  if ((await GM.getValue(window.location.hostname)) !== undefined) return start();
  const menuId = await GM.registerMenuCommand(((lang) => {
            switch (lang) {
              case 'en': return 'Enter simple reading mode';case 'ru': return 'Включить простой режим чтения';
              default: return '使用简易阅读模式';
            }
          })(await getInitLang()), () => !start() && GM.unregisterMenuCommand(menuId));
})();

  }
} catch (error) {
  main.log.error(error);
}
