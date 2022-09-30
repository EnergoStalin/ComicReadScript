/** 放在脚本开头，用于动态加载外部模块 */

const selfLibName = 'selfLib';
unsafeWindow[selfLibName] = {
  // 有些 cjs 模块会检查这个，所以在这里声明下
  process: { env: { NODE_ENV: process.env.NODE_ENV } },
};

/**
 * 通过 Resource 导入外部模块
 *
 * @param name \@resource 引用的资源名
 */
const selfImportSync = (name: string) => {
  const code = GM_getResourceText(name);
  if (!code) throw new Error(`外部模块 ${name} 未在 @Resource 中声明`);

  // 通过提供 cjs 环境的变量来欺骗 umd 模块加载器
  // 将模块导出变量放到 selfLib 对象里，防止污染全局作用域和网站自身的模块产生冲突
  return GM_addElement('script', {
    textContent: `
      window['${selfLibName}']['${name}'] = {};
      ${isDevMode ? `console.time('导入 ${name}');` : ''}
      (function (process, require, exports, module) {
        ${code}
      })(
        window['${selfLibName}'].process,
        window['${selfLibName}'].require,
        window['${selfLibName}']['${name}'],
        {
          set exports(value) {
            window['${selfLibName}']['${name}'] = value;
          },
        }
      );
      ${isDevMode ? `console.timeEnd('导入 ${name}');` : ''}
    `,
  });
};

interface SelfModule {
  default: {
    (...args: unknown[]): unknown;
    [key: string | symbol]: unknown;
  };
  [key: string | symbol]: unknown;
}

/**
 * 创建一个外部模块的 Proxy，等到读取对象属性时才加载模块
 *
 * @param name 外部模块名
 */
export const require = (name: string) => {
  // rollup 打包后的代码里有时候会先把 default 单独抽出来之后再使用，所以也要把 default 改成动态加载
  const selfDefault = new Proxy(
    function selfLibProxy(...args: unknown[]): unknown {
      if (!unsafeWindow[selfLibName][name]) selfImportSync(name);
      const module = unsafeWindow[selfLibName][name];
      // 作为构造函数调用时加上 new 命令
      if (new.target !== undefined)
        return new (module.default ?? module)(...args);
      return (module.default ?? module)(...args);
    },
    {
      get(_, prop) {
        if (!unsafeWindow[selfLibName][name]) selfImportSync(name);
        const module: SelfModule = unsafeWindow[selfLibName][name];
        return (module.default ?? module)[prop];
      },
    },
  );

  return new Proxy(
    { default: selfDefault },
    {
      get(_, prop) {
        if (prop === 'default') return _.default;
        if (!unsafeWindow[selfLibName][name]) selfImportSync(name);
        const module: SelfModule = unsafeWindow[selfLibName][name];
        return module[prop];
      },
    },
  );
};
unsafeWindow[selfLibName].require = require;
