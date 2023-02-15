<template>
  <div class="loading-con">
    <div
      :style="{
        background: bg,
        color: textColor
      }">
      <i :class="icon"></i>
      <span>{{text}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loading',

  props: {
    bg: {
      type: String,
      default: '#333'
    },

    icon: {
      default: 'el-icon-loading'
    },

    text: {
      default: '加载中，请稍等...'
    },

    textColor: {
      type: String,
      default: '#fff'
    }
  }
}
</script>
<style scoped="scoped" lang="scss">
  .loading-con {
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 9999;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    div {
      box-sizing: border-box;
      padding: 30px 50px;
      border-radius: 10px;
    }
  }
</style>
