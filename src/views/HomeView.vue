<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <add-member />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import AddMember from '../components/add-member'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    AddMember
  }
}
</script>
