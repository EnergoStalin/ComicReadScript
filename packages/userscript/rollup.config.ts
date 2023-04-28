/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import type { OutputPlugin, RollupOptions, Plugin } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import ts from 'rollup-plugin-ts';
import esbuild from 'rollup-plugin-esbuild';
import prettier from 'rollup-plugin-prettier';
import css from 'rollup-plugin-import-css';
import del from 'rollup-plugin-delete';
import serve from 'rollup-plugin-serve';
import watchAssets from 'rollup-plugin-watch-assets';
import { babel } from '@rollup/plugin-babel';

import type { MetaValues } from 'rollup-plugin-userscript-metablock';
import metablock from 'rollup-plugin-userscript-metablock';

// eslint-disable-next-line import/no-relative-packages
import pkg from '../../package.json' assert { type: 'json' };
import resource from './resource.json' assert { type: 'json' };

const isDevMode = process.env.NODE_ENV === 'development';

export const meta = {
  name: pkg.name,
  namespace: pkg.name,
  version: pkg.version,
  description: pkg.description,
  author: pkg.author,
  license: pkg.license,

  noframes: true,
  match: '*://*/*',
  connect: [
    'cdn.jsdelivr.net',
    'yamibo.com',
    'dmzj.com',
    'idmzj.com',
    'exhentai.org',
    'e-hentai.org',
    'nhentai.net',
    'mangabz.com',
    'copymanga.site',
    'copymanga.info',
    'copymanga.net',
    'copymanga.org',
    'copymanga.com',
    '*',
  ],
  grant: [
    'GM_addElement',
    'GM_getResourceText',
    'GM_xmlhttpRequest',
    'GM.getResourceText',
    'GM.addStyle',
    'GM.getValue',
    'GM.setValue',
    'GM.deleteValue',
    'GM.registerMenuCommand',
    'GM.unregisterMenuCommand',
    'unsafeWindow',
  ],
  resource: resource[isDevMode ? 'dev' : 'prod'],
  supportURL: 'https://github.com/hymbz/ComicReadScript/issues',
  updateURL:
    'https://github.com/hymbz/ComicReadScript/raw/master/ComicRead.user.js',
  downloadURL:
    'https://github.com/hymbz/ComicReadScript/raw/master/ComicRead.user.js',
} as MetaValues;

/** 开发服务器的端口 */
const DEV_PORT = '2405';
const siteFileList = fs.readdirSync('src/site');

const buildConfig = (
  config: RollupOptions,
  ...plugins: Array<OutputPlugin | false>
): RollupOptions => ({
  plugins: [
    replace({
      values: {
        DEV_PORT,
        isDevMode: `${isDevMode}`,
        'process.env.NODE_ENV': isDevMode ? `'development'` : `'production'`,
      },

      preventAssignment: true,
    }),

    nodeResolve({ browser: true, extensions: ['.js', '.ts', '.tsx'] }),
    commonjs(),
    css(),

    // isDevMode ? esbuild({ target: 'esnext', charset: 'utf8' }) : ts(),
    // ts({
    //   transpiler: 'babel',
    //   babelConfig: {
    //     presets: ['solid'],
    //     plugins: ['inline-react-svg'],
    //   },
    //   transpileOnly: true,
    // }),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.ts', '.tsx'],
      exclude: ['node_modules/**'],
      presets: ['@babel/preset-env', '@babel/preset-typescript', 'solid'],
      plugins: ['@babel/plugin-transform-runtime', 'inline-react-svg'],
    }),

    ...plugins,
  ],
  external: [
    ...Object.keys(meta.resource ?? {}),
    /\/helper$/,
    // /@crs\/ui-component.*(?<!css)$/,
  ],

  ...config,
});

export default [
  // 编译 dev.user.js
  buildConfig(
    {
      input: 'src/dev.ts',
      // 忽略使用 eval 的警告
      onwarn(warning, warn) {
        if (warning.code !== 'EVAL') warn(warning);
      },
      output: {
        file: 'dist/dev.user.js',
        plugins: [
          metablock({
            file: '',
            override: (({ grant = [], ...otherMeta }) => ({
              ...otherMeta,

              // 添加 xmlHttpRequest 权限
              grant: [...new Set([...grant, 'GM_xmlhttpRequest'])],
              // 允许请求所有域
              connect: '*',
            }))(meta),
          }),
        ],
      },
    },
    del({ targets: 'dist/*' }),
    isDevMode &&
      serve({
        contentBase: ['dist'],
        port: DEV_PORT,
        host: '127.0.0.1',
      }),
  ),

  // 单独打包每个站点的代码
  ...siteFileList.map((fileName) =>
    buildConfig({
      input: { [fileName.split('.')[0]]: `src/site/${fileName}` },
      output: {
        dir: 'dist/cache',
        format: 'cjs',
        generatedCode: 'es2015',
        exports: 'none',
        strict: false,
        inlineDynamicImports: true,
      },
      context: 'this',
      onwarn(warning, warn) {
        // 禁用使用 eval 的警告
        if (warning.code !== 'EVAL') warn(warning);
      },
    }),
  ),

  buildConfig(
    {
      input: 'src/helper/index.ts',
      output: {
        file: 'dist/cache/helper.js',
        format: 'cjs',
        generatedCode: 'es2015',
        strict: false,
        plugins: [
          {
            name: 'injectCode',
            // 删掉 inline-react-svg 插入的 react 依赖
            renderChunk: (code) => code.replace(`require('react');\n`, ''),
          },
        ],
      },
      external: [...Object.keys(meta.resource ?? {})],
    },
    // watchAssets({ assets: ['../ui-component/dist/*'] }),
  ),

  // 生成自定义动态导入的代码
  buildConfig(
    {
      input: 'src/helper/import.ts',
      output: {
        file: 'dist/cache/import.js',
        plugins: [
          {
            name: 'injectCode',
            renderChunk(code) {
              let newCode = code;
              // 将 ts 变量声明替换为 dist/cache 下的文件代码，并转为字符串型变量做好处理
              newCode = newCode.replace(
                /const (\w+)Code = ['"]{2};(?=\n)/g,
                (_, name) =>
                  `const ${name}Code = \`\n${fs
                    .readFileSync(`./dist/cache/${name}.js`)
                    .toString()
                    .replaceAll('\\', '\\\\')
                    .replaceAll('`', '\\`')
                    .replaceAll('${', '\\${')}\`;\n`,
              );
              return newCode;
            },
          },
        ],
      },
    },
    // watchAssets({ assets: ['dist/cache/helper.js'] }),
  ),

  // 编译 index.user.js
  {
    input: 'src/index.tsx',
    output: {
      file: 'dist/index.user.js',
      format: 'cjs',
      generatedCode: 'es2015',
      exports: 'none',
      plugins: [
        {
          name: 'injectSiteCode',
          renderChunk(code) {
            let newCode = code;
            // 根据注释替换导入为 dist/cache 下的文件代码
            newCode = newCode.replace(
              /(?<=\n)\s*\/\/ #(.+)(?=\n)/g,
              (_, name) =>
                fs.readFileSync(`./dist/cache/${name}.js`)?.toString(),
            );
            // 删除 export 语句
            newCode = newCode.replace(/\nexport.+};\n/g, '');
            // 在开发模式时计算下脚本的运行消耗时间
            if (isDevMode)
              newCode = `console.time('脚本启动消耗时间')\n${newCode}\nconsole.timeEnd('脚本启动消耗时间')`;
            return newCode;
          },
        } as Plugin,
        !isDevMode &&
          prettier({
            singleQuote: true,
            trailingComma: 'all',
            parser: 'babel',
          }),
        metablock({ file: '', override: meta }),
      ],
    },
    // plugins: [
    //   watchAssets({
    //     assets: ['dist/**/*', '!dist/index.user.js'],
    //   }),
    // ],
    treeshake: false,
  },
];
