import { createApp, } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import request from './config/third_modules/axios/request'
import { router, modulesList } from './config'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(modulesList)

app.provide('request', request)

app.mount('#app')
