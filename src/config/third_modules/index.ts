/* eslint-disable */
import './axios/axios'
import type { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


// if (process.env.NODE_ENV !== 'production') { // 打包时候不引入，利用index.html下elementui
//   require('element-ui/lib/theme-chalk/index.css')
// }
const data = [
  ElementPlus
]


const modulesList = {
  install ( app: App<Element> ) {
    data.forEach(item => {
      app.use(item)
    })
  }
}

export default modulesList