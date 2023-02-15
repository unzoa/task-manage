<template>
  <div class="v-echart">
    <p v-if="emptyText">{{emptyText}}</p>

    <div
      :id="id"
      class="no-print"
      style="width: 100%; height: 100%;"
      ></div>
  </div>
</template>

<script type="text/javascript">
/* eslint-disable */
import * as echarts from 'echarts'
export default {
  name: 'VEchart',

  props: {
    id: {
      type: String,
      default: 'chart-id'
    },

    option: {
      type: Object,
      default: () => {}
    },

    map: {
      type: String,
      default: ''
    },

    clearable: {
      type: Boolean,
      default: true
    },

    resizeable: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      chart: {},
      emptyText: '加载中...'
    }
  },

  watch: {
    option (op) {
      this.init(op, true)
    }
  },

  methods: {
    init (op, watchEnd = false) {
      if (Object.keys(op).length) {
        this.emptyText = ''
        this.draw(op)
      } else {
        // 是一个异步请求时，mounted中APi可能还未能返回：显示“加载中..”
        // watch 返回 {} 即可显示 '未查询到数据'
        this.emptyText = watchEnd ? '未查询到数据' : '加载中...'
      }
    },

    draw (op) {
      if (this.clearable) this.chart.clear()

      this.chart.setOption(op)
      this.$emit('chart', this.chart)

      window.addEventListener('resize', this.chartResize)
    },

    chartResize () {
      if (!this.resizeable) return

      this.$utils.debounce(() => {
        this.chart.resize()
      }).bind(this)()
    }
  },

  mounted () {
    if (this.map) {
      const map = require(`./map/${this.map}.json`)
      echarts.registerMap(this.map, map)
    }

    this.chart = echarts.init(document.querySelector('#' + this.id))
    this.init(this.option)
  },

  destroyed () {
    window.removeEventListener('resize', this.chartResize)
  }
}
</script>

<style lang="scss" scoped>
  .v-echart {
    position: relative;
    height: 100%;
    width: 100%;
    p {
      position: absolute;

      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0;

      text-align: center;
      color: #c0c4cc;
      font-size: 18px;
    }
  }

  @media print {
    .no-print {
      display: none;
    }
  }
</style>
