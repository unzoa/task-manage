<template>
  <div class="TextOmitted">
    <el-tooltip
      class="item"
      :effect="effect"
      :content="content"
      :placement="align">
      <p>{{nameFilter()}}</p>
    </el-tooltip>
  </div>
</template>
<script>
export default {
  name: 'TextOmitted',

  props: {
    content: String,
    length: Number,

    effect: {
      type: String,
      default: 'light'
    },

    align: {
      type: String,
      default: 'top'
    }
  },

  methods: {
    nameFilter () {
      const nameVal = this.content
      const nameLen = this.length

      return nameVal.length > nameLen
        ? nameVal.slice(0, nameLen) + '...'
        : nameVal
    }
  }
}
</script>

<style scoped="scoped">
  .TextOmitted {
    display: inline-block;
  }
</style>
