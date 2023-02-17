import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 在以下文件名字后面加hash
// 按需引入的插件
const plugins = [
  'element-plus'
]

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
    port: 8090
  },

  build: {
    rollupOptions: {
      output: {
        chunkFileNames: (chunkInfo) => {
            const name = chunkInfo.name
            const nameCharCode = name.slice(0).charCodeAt(0) // 路由文件首字母大写
            if ( nameCharCode >= 65 && nameCharCode <= 90 ) {
              return `static/js/router/[name]-[hash].js`
            }
            if ( plugins.includes( name ) ) {
              return `static/js/plugins/[name]-[hash].js`
            }
            return 'static/js/chunk/[name].js'
        },
        entryFileNames: 'static/js/entry/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks(id) { //静态资源分拆打包
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  }
})
