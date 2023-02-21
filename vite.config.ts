import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 保持不变的插件，不做hash
// 这里数据类型之所以是个对象，因为有时候不得不改遍版本
// 改变value值即可在打包中体现
const stablePluginObj = {
  '@vue': 'vue@v1.0.0',
  'vue-router': 'vue-router',
  'escape-html': 'escape-html',
  'normalize-wheel-es': 'normalize-wheel-es',
  'lodash-es': 'lodash-es',
  '@popperjs': '@popperjs',
  'axios': 'axios',
  'pinia': 'pinia'
} as { [k:string]: string }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@request': fileURLToPath(new URL('./src/config/third-plugins/axios/request.ts', import.meta.url)),
    }
  },

  server: {
    port: 8080
  },

  build: {
    rollupOptions: {
      output: {
        chunkFileNames: chunkInfo => stablePluginObj[chunkInfo.name]
          ? `static/js/chunk/stable/${stablePluginObj[chunkInfo.name]}.js`
          : `static/js/chunk/[name]-[hash].js`,
        entryFileNames: 'static/js/entry/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 包名
            const moduleName = id.toString().split('node_modules/')[1].split('/')[0].toString()

            // 返回要固定的包名
            // 注意：当入口文件index-[hash].js变大时，注释这里，检查是否有需要增加的固定包名
            if (stablePluginObj[moduleName]) return moduleName
          }
        }
      }
    }
  }
})
