<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'

const { count, doubleCount } = storeToRefs(useCounterStore())
const { increment } = useCounterStore()
</script>

<template>
  <main>
    <p>{{ count }}，{{ doubleCount }}</p>
    <button @click="increment">increment</button>
    <TheWelcome />
  </main>
</template>
