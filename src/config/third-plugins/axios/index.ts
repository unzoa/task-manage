import axios from 'axios'
import type {
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { pushCancelToken } from './interruptRequest'

import project from '../../project-which'
const { api } = project

function TOKEN () {
  return localStorage[localStorage.tokenName + '_token'] || ''
}

// axios.defaults.baseURL = ''

// 全局拦截器
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    //....可以在这里加上token值
    config.cancelToken = new axios.CancelToken(cancel => {
      pushCancelToken((config.url as string), cancel)
    })

    switch (config.method) {
      case 'get':
        config.params = {
          ...config.params,
          token: TOKEN(),
          submit_user: localStorage.userName
        }
        break

      case 'post':
        if (Object.prototype.toString.call(config.data) === '[object FormData]') {
          config.data.append('token', TOKEN())
          config.data.append('submit_user', localStorage.userName)
        } else {
          config.data.token = TOKEN()
          config.data.submit_user = localStorage.userName
        }
        break

      default:
        break
    }
    // 绑定真实API
    config.url = api[config.url!] || config.url


    return config
  },
  (err: any) => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  (res: AxiosResponse) => {
    let result = res.data || res
    // .... 可以在这里设置token过期后的操作
    return result
  },
  (err: any) => {
    return Promise.reject(err)
  }
)
