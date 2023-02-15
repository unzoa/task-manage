/* eslint-disable */
import type { App } from 'vue'
import './axios'
import ElementPlus from 'element-plus'

const plugins= [
  ElementPlus
]

const thirdPlugin = {
  install ( app: App<Element> ) {
    plugins.forEach(item => {
      app.use(item)
    })
  }
}

export default thirdPlugin