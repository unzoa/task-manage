/* eslint-disable */
import type { App } from 'vue'
import './axios'
// import ElementPlus from 'element-plus'
import { ElButton, ElDrawer, ElInput, ElTable, ElTableColumn, ElSelect, ElOption } from 'element-plus'

const plugins: any = [
  // ElementPlus
  ElButton, ElDrawer, ElInput, ElTable, ElTableColumn, ElSelect, ElOption
]

const thirdPlugin = {
  install ( app: App<Element> ) {
    plugins.forEach((item: any) => {
      app.use(item)
    })
  }
}

export default thirdPlugin