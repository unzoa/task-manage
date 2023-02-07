<!--
 * @Date: 2023-02-07 21:20:48
 * @LastEditTime: 2023-02-07 22:01:08
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

Q: pinna 使用
A:

Q: pwa 使用
A:
