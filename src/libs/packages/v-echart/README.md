# v-echart

## 依赖

**echarts** 需要全局已注册

```js
// 新版本
import * as echarts from 'echarts'

// 老版本
import echarts from 'echarts'

Vue.prototype.echarts = echarts
```

## props

```js
id: { // [必须] chart 节点
  type: String,
  default: 'chart-id'
},

option: { // [必须]
  type: Object,
  default: () => {}
},

map: { // 如果使用地图，传入地图名称
  type: String,
  default: ''
},

clearable: { // 清空上一次渲染
  type: Boolean,
  default: true
},

resizeable: { // 允许随容器变化而变化
  type: Boolean,
  default: true
}
```

## map

> props map 对应如下文件名。

🌰:

```js
map="anhui"
```

```js
anhui.json
beijing.json
chongqing.json
fujian.json
gansu.json
guangdong.json
guangxi.json
guizhou.json
hainan.json
hebei.json
heilongjiang.json
henan.json
hubei.json
hunan.json
jiangsu.json
jiangxi.json
jilin.json
liaoning.json
neimenggu.json
ningxia.json
qinghai.json
shaanxi.json
shandong.json
shanghai.json
shanxi.json
sichuan.json
tianjin.json
world.json
xinjiang.json
xizang.json
yunnan.json
zhejiang.json
```
