export default {
  install: (app, options) => {
    // 注入一个全局可用的 $translate() 方法
    app.config.globalProperties.$translate = (key) => {
      // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    }

    // 我们可以通过 provide 来为插件用户供给一些内容。举例来说，
    // 我们可以将插件接收到的 options 参数提供给整个应用，让任何组件都能使用这个翻译字典对象。
    app.provide('i18n', options)
  }
}

/** 注册
app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour!'
  }
})
*/

/** 使用 1
<h1>{{ $translate('greetings.hello') }}</h1>
*/

/** 使用 2
import { inject } from 'vue'
const i18n = inject('i18n')
console.log(i18n.greetings.hello)
*/
