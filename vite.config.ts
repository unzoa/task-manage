/*
 * @Date: 2023-02-07 20:58:01
 * @LastEditTime: 2023-02-07 21:44:57
 * @FilePath: /task-manage/vite.config.ts
 * @Description:
 *
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  build: {
    assetsDir: 'static'
  }
})
