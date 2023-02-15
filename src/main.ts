import { createApp, } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router, thirdPlugin } from './config'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(thirdPlugin)

app.mount('#app')
