<template>
  <div class="about">
    <p>{{count}}</p>
    <h1>This is an about page</h1>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'

const { count } = storeToRefs(useCounterStore())
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
