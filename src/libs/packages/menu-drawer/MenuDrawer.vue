<template>
  <div class="MenuDrawer">
    <div
      class="menu-icon-wrapper"
      :class="{'act-in': isCollapse, 'act-out': actOut}"
      @click="isCollapse = !isCollapse; hasClick = true">
      <i :class="[isCollapse ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right']" />
    </div>

    <el-drawer
      :visible.sync="isCollapse"
      :with-header="false"
      :size="width"
      :custom-class="bgClass"
      direction="ltr"
      close-on-press-escape
      >
      <slot />
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'MenuDrawer',

  // 模板依赖 (模板内使用的资源)

  components: {},

  // 组合 (向选项里合并 property)

  mixins: [],

  // 接口 (组件的接口)

  props: {
    bgClass: {
      default: ''
    },

    width: {
      default: '300px'
    }
  },

  // 本地状态 (本地的响应式 property)

  data () {
    return {
      hasClick: false,
      isCollapse: false
    }
  },

  computed: {
    actOut () {
      return this.hasClick && !this.isCollapse
    }
  },

  // 事件 (通过响应式事件触发的回调)

  watch: {},

  created () {},

  mounted () {
  },

  // 其他生命周期钩子

  // 非响应式的 property (不依赖响应系统的实例 property)

  methods: {
  }
}
</script>

<style scoped lang="scss">
  .MenuDrawer {
    // 弹出菜单按钮
    .menu-icon-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 100vh;
      line-height: 100vh;
      text-align: center;

      &:hover {
        background-color: #333;
        color: #fff;
        font-weight: bold;
        transition: background-color .3s;
      }
    }

    /*动画*/
    .act-in {
      animation: act-in .5s ease;
      animation-fill-mode: forwards;
    }
    @keyframes act-in {
      0% {
        left: 0;
      }
      100% {
        left: 300px;
      }
    }
    .act-out {
      animation: act-out .5s ease;
      animation-fill-mode: forwards;
    }
    @keyframes act-out {
      0% {
        left: 300px;
      }
      100% {
        left: 0px;
      }
    }
    /*动画结束*/
  }
</style>

<style>
  .v-modal {
    opacity: 0;
  }
</style>
