/*
 * @Date: 2023-02-07 20:58:01
 * @LastEditTime: 2023-02-07 22:14:53
 * @FilePath: /task-manage/src/stores/counter.ts
 * @Description:
 *
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(1)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
    console.log(count.value);
  }

  return { count, doubleCount, increment }
})
