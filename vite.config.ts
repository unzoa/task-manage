import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@request': fileURLToPath(new URL('./src/config/third-plugins/axios/request.ts', import.meta.url)),
    }
  },

  server: {
    port: 8090
  },

  build: {
    // assetsDir: 'static',
    rollupOptions: {
      external: 'element-plus', // 注意看这里
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks(id) { //静态资源分拆打包
          if (id.includes('node_modules')) {
            // 拆分打包的时候不打包 element-plus
            if (id.includes('element-plus')) {
                return;
            }
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          'element-plus': 'elementPlus'
        }
      }
    }
  }
})
