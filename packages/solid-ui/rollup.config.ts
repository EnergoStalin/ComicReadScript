/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import type { RollupOptions, Plugin } from 'rollup';
import ts from 'rollup-plugin-ts';
import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import svgr from '@svgr/rollup';
import resource from '@crs/userscript/resource.json';

const buildConfig = (config: RollupOptions): RollupOptions => ({
  plugins: [
    svgr({
      icon: true,
      svgProps: {
        stroke: 'currentColor',
        fill: 'currentColor',
        strokeWidth: '0',
      },
      namedExport: 'default',
    }),
    nodeResolve(),
    commonjs(),
    postcss({
      extract: true,
    }) as any,
    ts(),
  ],
  output: {
    dir: 'dist',
    format: 'cjs',
    generatedCode: 'es2015',
    strict: false,
    plugins: [
      // 将组件改为懒加载
      {
        name: 'lazyload',
        renderChunk(code) {
          return `${code.replace('\n\n', '\n\nconst main = () => {\n\n')}

}

const selfModule = module.exports;
module.exports = new Proxy(selfModule, {
  get(_, prop) {
    if (selfModule[prop] === undefined) main();
    return selfModule[prop];
  },
  apply(_, __, args) {
    if (selfModule[prop] === undefined) main();
    return selfModule[prop](...args);
  },
  construct(_, args) {
    if (selfModule[prop] === undefined) main();
    return new selfModule[prop](...args);
  },
});
`;
        },
      } as Plugin,
    ],
  },
  external: [...Object.keys(resource.prod ?? {})],

  ...config,
});

export default () =>
  fs
    .readdirSync('src/containers')
    .map((name) =>
      buildConfig({ input: { [name]: `src/containers/${name}/index.tsx` } }),
    );
