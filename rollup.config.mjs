import typescript from 'rollup-plugin-typescript2';
import { version } from 'vue';

const isVue3 = version.startsWith('3.');
let vuePlugin;
if (isVue3) {
  vuePlugin = (await import('@vitejs/plugin-vue')).default;
} else {
  vuePlugin = (await import('@vitejs/plugin-vue2')).default;
}

export default [
  {
    input: 'src/index.ts',
    external: ['vue'],
    plugins: [typescript(), vuePlugin({ isProduction: true })],
    output: {
      file: `dist/vue${isVue3 ? 3 : 2}/index.esm.js`,
      format: 'esm',
      sourcemap: true
    }
  }
];
