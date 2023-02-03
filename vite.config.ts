import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // 覆盖默认的 .html 入口
      input: 'examples/main.js',
    },
  },
  /* 全局引入css */
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "./examples/assets/scss/global.scss";',
  //     }
  //   }
  // },
  plugins: [vue(), DefineOptions()],
});
