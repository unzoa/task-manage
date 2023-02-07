<!--
 * @Date: 2023-02-07 21:20:48
 * @LastEditTime: 2023-02-07 22:21:30
 * @FilePath: /task-manage/USEAGE.md
 * @Description:
 *
-->
# useage

Q: Cannot find module 'node:url'
A: 切换node版本, 更换默认版本 nvm alias default v18.14.0

Q: dist assets 文件夹 变成 static
A: vite.config.ts 配置
```js
export default defineConfig({
  build: {
    assetsDir: 'static'
  }
})
```

Q: pinia 使用
A:
Q: state直接解构会使其失去响应式，
A: 这时候可以用 pinia 的 storeToRefs
  Q: function 会报错,
  ```
  Property 'increment' does not exist on type 'StoreToRefs<Store<"counter", _UnwrapAll<Pick<{ count: Ref<number>; doubleCount: ComputedRef<number>; increment: () => void; }, "count">>, Pick<{ count: Ref<number>; doubleCount: ComputedRef<...>; increment: () => void; }, "doubleCount">, Pick<...>>>'.ts(2339)
  ```

Q: pwa 使用
A:
