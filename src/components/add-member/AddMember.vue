<template>
  <div class="add-member">
    <input type="text" v-model="name" />
    <select v-model="role">
      <option
        v-for="(role, index) in Object.keys($store.state.role)"
        :key="index"
        :value="role">{{$store.state.role[role]}}</option>
    </select>

    <button @click="$store.commit('setMember', {name, role})">提交</button>
  </div>
</template>

<script>
export default {
  name: 'add-member',

  // 模板依赖 (模板内使用的资源)

  components: {},

  // 组合 (向选项里合并 property)

  mixins: [],

  // 接口 (组件的接口)

  props: [],

  // 本地状态 (本地的响应式 property)

  data () {
    return {
      name: '',
      role: ''
    }
  },

  computed: {},

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
  .add-member {
    position: relative;
  }
</style>
