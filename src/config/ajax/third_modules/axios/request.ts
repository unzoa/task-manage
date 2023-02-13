import axios from 'axios'
import type {
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios'

export default {
  get: <T>(url: string, params?: T, config?: AxiosRequestConfig): Promise<any> => {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          ...config,
        })
        .then((res: AxiosResponse) => {
          resolve(res)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  },

  post: <T>(url: string, data?: T, config?: AxiosRequestConfig): Promise<any> => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          ...config,
        })
        .then((res: AxiosResponse) => {
          resolve(res)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  },

  // 上传文件
  upload: (url: string, data?: any, config?: AxiosRequestConfig) => {
    // 将数据转化为formatdata对象
    let formData = new FormData()
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key])
    })

    return new Promise((resolve, reject) => {
      axios
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          ...config,
        })
        .then((res: AxiosResponse) => {
          resolve(res)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }
}
