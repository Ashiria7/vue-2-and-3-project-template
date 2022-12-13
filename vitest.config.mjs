import { defineConfig } from 'vitest/config';
import { version } from 'vue';

const isVue3 = version.startsWith('3.');
let vuePlugin;
if (isVue3) {
  vuePlugin = (await import('@vitejs/plugin-vue')).default;
} else {
  vuePlugin = (await import('@vitejs/plugin-vue2')).default;
}
export default defineConfig({
  plugins: [vuePlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      clean: true,
      cleanOnRerun: true
    },
    watch: false
  }
});
