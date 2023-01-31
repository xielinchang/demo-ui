import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // 覆盖默认的 .html 入口
      input: 'examples/main.js'
    }
  },
 /*  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./examples/assets/scss/global.scss";',
      }
    }
  }, */
  plugins: [vue()],
})
