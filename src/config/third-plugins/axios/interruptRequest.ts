// 取消请求
// 使用
/*

axios.js 配置文件
axios.interceptors.request.use(
  config => {
    config.cancelToken = new Axios.CancelToken(cancel => {
      pushCancelToken(config.url, cancel)
    })
  }
)


router.js 配置
import { clearRequest } from '../third-plugins/axios/interruptRequest'
router.beforeEach((to, from, next) => {
  clearRequest() // 路由切换时，取消上个路由的所有请求
})

*/

let cancelTokenArr: any[] = []

// 不取消请求的api ｜ URL
const notClearAPI = ['aptinfo_list', 'http://localhost:3000/test']

export const pushCancelToken = (api: string, cancel: any) => {
  cancelTokenArr.push({
    api,
    cancel
  })
}

export const clearRequest = () => {
  cancelTokenArr.forEach(item => {
    if (notClearAPI.includes(item.api)) return
    item.cancel('路由跳转取消请求')
  })
  cancelTokenArr = []
}
