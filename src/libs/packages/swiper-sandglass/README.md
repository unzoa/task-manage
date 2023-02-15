# swiper-sandglass

> 应用于大数据展示时，列表滚动类型的模块。

## 需求

> 列表数据不断的增加，保证元素平滑滚动，且不过多的增加dom元素数量。

## 使用

```js
<SandGlassData
  ref="sandglass"
  :moreData="sandData"
  style="height: 300px;"
  >
  <template v-slot:default="{data}">
    <p>NUM {{data}}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
  </template>
</SandGlassData>

<button @click="$refs.sandglass.play()">play</button>
<button @click="$refs.sandglass.pause()">puase</button>
<button @click="$refs.sandglass.add()">add</button>
```

## 设计
- **处理**：让dom容器作为一个漏斗，数据从天上掉入沙漏，设置沙漏有蓄沙功能，到蓄沙饱和时，排出最下面沙子，即先进先漏。如图：
```
  ---        ---        ---                -｜
 ---        ---        ---                  ｜- 待显示数据
  --         --         --                 -｜

\    /     \----/     \----/     \----/    -｜
 \--/       \--/       \--/       \--/      ｜- 显示数据（dom渲染）
  \/         \/         \/         \/      -｜

                        - -                 ｜- 益出数据（被删除）
 未满        满了        溢出      停止掉入
```
- **dom与数据设计**：
  - dom内容更新，按照展示方向，纵上，横左，是最新的数据
    - 新进元素从“上”，“左”进入
  - 数据分为：显示数据，待显示数据，益出数据
    - dom渲染“显示数据”
    - 定时程序或事件，将待显示数据依次传入显示数据容器
    - 益出数据会被删除


## props

参数 | 描述 | 类型 | 默认值 | 可选值
:---|:---|:---|:---|:--
moreData | 待展示数据 | Array | [] | -
direction | 横纵展示方向 | String | vertical | horizontal/vertical
slidesPerView | 容器内元素显示个数 | Number | 4 | -
duration | 移动停顿的时间 | Number | 3000 | -
moveTime | 元素移动的时间 | Number | 1500 | -
autoMove | 是否自动移动 | Boolean | true | true/false

## methods

事件 | 描述
:---|:---
play|播放移动
pause|暂停移动
add|配合autoMove:false使用，显示数据中增加一条待显示数据

## slot

> 默认插槽
