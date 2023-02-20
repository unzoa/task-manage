# 下载iconfont图标

1. npm i request -D
2. package.json script 增加icon命令
```json
"icon": "node src/libs/tools/utils/iconfont/downloadIcon.js URL=//at.alicdn.com/t/font_1756178_zwjwwqx0pf.css",
```
3. 检查 downloadIcon.js 中 icon 命令内容获取
4. 检查 downloadIcon.js 中下载至目录iconfont是否存在
