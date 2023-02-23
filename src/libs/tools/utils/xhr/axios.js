import Axios from 'axios'

const ajaxFn = {
  get (Interface, requestData = {}) {
    return new Promise((resolve, reject) => {
      Axios.get(Interface, {
        params: requestData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(res => {
          resolve(res)
        }).catch(res => {
          reject(res)
        })
    })
  },

  blob (Interface, requestData = {}) {
    const configOri = {
      params: requestData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      responseType: 'blob'
    }
    return new Promise((resolve, reject) => {
      Axios.get(Interface, configOri)
        .then(r => {
          resolve(window.URL.createObjectURL(new Blob([r])))
        }).catch(res => {
          reject(res)
        })
    })
  },

  post (Interface, requestData = {}, raw = false) {
    return new Promise((resolve, reject) => {
      const options = {
        headers: {
          'Content-Type': raw
            ? 'application/json;charset=utf-8'
            : 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }

      raw || (
        options.transformRequest = [function (requestData) { // 转换数据格式，有待测试传送文件的方式时候同样可行。
          let ret = ''
          for (const it in requestData) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(requestData[it]) + '&'
          }
          ret = ret.slice(0, ret.length - 1)
          return ret
        }]
      )

      Axios.post(Interface, requestData, options)
        .then(res => {
          resolve(res)
        }).catch(res => {
          reject(res)
        })
    })
  },

  upload (Interface, formData, config) {
    return new Promise((resolve, reject) => {
      Axios.post(Interface, formData, config)
        .then(res => {
          resolve(res)
        }).catch(res => {
          reject(res)
        })
    })
  }
}

export default ajaxFn
