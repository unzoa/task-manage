/*
 * @Date: 2023-02-07 20:58:01
 * @LastEditTime: 2023-02-07 21:18:33
 * @FilePath: /task-manage/src/main.ts
 * @Description:
 *
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
