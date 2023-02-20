import path from 'path';
import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-define-options/vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@joy',
        replacement: `${path.resolve(__dirname, '../../examples')}/`,
      },
    ],
  },
  plugins: [vueJsx(), DefineOptions()],
  server: {
    port: 3002,
  },
});
