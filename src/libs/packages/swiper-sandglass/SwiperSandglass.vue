<template>
  <div class="SwiperSandglass">
    <div class="sands-wrapper">
      <ul>
        <li
          v-for="(i, j) in showData"
          :key="j"
          class="sand"
          :class="{
            [direction]: true,
            active: j === 0 && move
          }"
          :style="{
            'animation-duration': moveTime + 'ms',

            height: sandHeight,
            'margin-top': sandMarginTop(j),

            width: sandWidth,
            'margin-left': sandMarginLeft(j)
          }"
          >
          <div>
            <slot :data="i"/>
          </div>
        </li>
      </ul>
    </div>

    <!-- <button @click="add">add</button> -->
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SwiperSandglass',

  props: {
    direction: {
      type: String,
      default: 'vertical' // horizontal vertical
    },
    slidesPerView: { // 显示几个
      type: Number,
      default: 4
    },
    duration: { // 停顿时间
      type: Number,
      default: 3000
    },
    moveTime: { // 移动的时间
      type: Number,
      default: 1500
    },
    moreData: { // 待展示数据
      type: Array,
      default: () => []
    },

    autoMove: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      autoplayTimer: {},
      isPause: false,

      move: false, // 是否处于移动

      // [新, ..., 旧]
      showData: [], // 渲染数据
      waitData: [], // 等待渲染的数据

      // 遍历元素的不同方向时的宽高
      horizontalWidth: 0,
      verticalHeight: 0
    }
  },

  watch: {
    moreData () {
      // 准备进入waitData
      this.inject2waitData()
    }
  },

  computed: {
    sandWidth () {
      return this.direction === 'horizontal'
        ? `${100 / this.slidesPerView}%`
        : ''
    },

    sandMarginLeft () {
      return (j) => this.direction === 'horizontal' && j === 0 && this.move
        ? `-${100 / this.slidesPerView}%`
        : ''
    },

    sandHeight () {
      return this.direction === 'vertical'
        ? 100 / this.slidesPerView + '%'
        : '100px'
    },

    sandMarginTop () {
      return (j) => this.direction === 'vertical' && j === 0 && this.move
        ? `-${this.verticalHeight}px`
        : ''
    }
  },

  methods: {
    inject2waitData (isMounted) {
      if (isMounted) {
        // 前提：数据的排序是 [新,...,旧]
        const viewCount = this.moreData.length - this.slidesPerView
        this.showData = this.moreData.slice(viewCount, this.moreData.length)
        this.waitData = this.moreData.slice(0, viewCount)
      } else {
        // 与waitData合并去重
        // this.waitData = _.unionBy(arr, this.waitData, 'id')

        this.waitData = [...this.moreData, ...this.waitData]
      }
    },

    add () {
      const waitInject = this.waitData[this.waitData.length - 1] // 获取最后一个
      if (!waitInject) return false
      this.waitData.pop()

      this.showData.unshift(waitInject)
      this.move = true
      setTimeout(() => {
        this.move = false

        // 删除第一个li节点
        if (this.showData.length > this.slidesPerView) {
          this.showData.pop()
        }
      }, this.moveTime)
    },

    action () {
      this.autoplayTimer = setInterval(() => {
        this.isPause || this.add()
      }, this.duration)
    },

    // 暂停自动移动
    pause () {
      this.isPause = true
    },

    play () {
      this.isPause = false
    }
  },

  mounted () {
    this.inject2waitData(1)
    this.autoMove && this.action()

    this.$nextTick(() => {
      this.horizontalWidth = document.querySelector('.sand').offsetWidth
      this.verticalHeight = document.querySelector('.sand').offsetHeight
    })
  }
}
</script>

<style scoped="scoped" lang="scss">
  .SwiperSandglass {
    position: relative;

    .sands-wrapper {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    ul {
      height: 100%;
      width: 100%;
      padding: 0;
      margin: 0;
      font-size: 0;
      white-space: nowrap;

      li {
        list-style: none;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        overflow: hidden;
        font-size: 12px;

        > div {
          white-space: normal;
        }
      }
    }

    .horizontal {
      display: inline-block;
      box-sizing: border-box;
      border-right: 1px solid #eee;
    }

    $bg-before: rgba(224, 224, 224, 0.247);
    $bg-after: rgba(255, 255, 255, 0);

    .horizontal.active {
      animation: activeHorizontal ease forwards;
    }

    @keyframes activeHorizontal {
      0% {
        background-color: $bg-before;
      }
      100% {
        margin-left: 0;
        background-color: $bg-after;
      }
    }

    .vertical.active {
      animation: activeVertical ease forwards;
    }

    @keyframes activeVertical {
      0% {
        background-color: $bg-before;
      }
      100% {
        margin-top: 0;
        background-color: $bg-after;
      }
    }
  }
</style>
