<!--
 * @Date: 2023-02-07 21:20:48
 * @LastEditTime: 2023-02-09 17:07:28
 * @FilePath: /task-manage/USEAGE.md
 * @Description:
 *
-->
# useage

Q: Cannot find module 'node:url'
A: 切换node版本, 更换默认版本 nvm alias default v18.14.0

---

Q: dist assets 文件夹 变成 static
A: vite.config.ts 配置
```js
export default defineConfig({
  build: {
    assetsDir: 'static'
  }
})
```

---

Q: pinia 使用
A: [Pinia官网](https://pinia.vuejs.org/zh/introduction.html)
Q: 直接解构会使其失去响应式，"官方文档说的很清楚store 是一个用reactive 包裹的对象，像setup 中的props 一样，我们不能对其进行解构"
A: 这时候可以用 pinia 的 storeToRefs, 它将为任何响应式属性创建 refs
  Q: function 会报错,
  ```
  Property 'increment' does not exist on type 'StoreToRefs<Store<"counter", _UnwrapAll<Pick<{ count: Ref<number>; doubleCount: ComputedRef<number>; increment: () => void; }, "count">>, Pick<{ count: Ref<number>; doubleCount: ComputedRef<...>; increment: () => void; }, "doubleCount">, Pick<...>>>'.ts(2339)
  ```
  A: fucntion不是响应式属性 ？

---

Q: pwa 使用
A:

---

Q: vue3 + ts + vite 自建js文件报错，不能找到包
A: 在根目录下 env.d.ts 中添加
```ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*'
```

Q: 添加全局属性
A: app.config.globalProperties.
```js
// plugins/i18n.js
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
  }
}
```

Q: JSX
A: ts中  tsconfig.json配置 "jsx": "preserve", 组件后缀 .jsx .tsx
```jsx
export default (props, { slots, emit, attrs}) => {
  ...
  return <div></div> // 注意：1. 如果父组件处写了class，本组件内className将失效
}
```

Q：ts 运行时不校验
A：
