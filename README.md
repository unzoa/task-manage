# task-manage

## 打包

1. 在以下文件名字后面加hash

**路由文件首字母必须大写**

```js vite.config.ts
// 按需引入的插件
const plugins = [
  'element-plus'
]
```

2. 类似element-plus按需引入，参考src/config/third-pkugins/index.ts

## 请求模块

```js
import { get, post, upload } from '@request'

// or
import request from '@request'

request.post('api-name', params{})
```

