## 引入lib

### 完整引入

```js
import Vue from 'vue'
import lib from '../lib'
import '../lib/theme-chalk/reset.css'
import '../lib/theme-chalk/custom-ui.scss'
Vue.use(lib)
```

### 按需引入

```js
import {
  Loading,
  Menu,
  MenuDrawer,
  SwiperSandglass,
  TextOmitted,
  Upload,
  VEchart,

  Ajax,
  Utils
} from '../lib'

// 全局
import Vue from 'vue'
Vue.use(Loading)

// 组件内使用
component: {
  Loading
}
```

