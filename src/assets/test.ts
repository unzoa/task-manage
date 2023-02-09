import { ref } from 'vue'
import type { Ref } from 'vue'

export const t = () => {
  const a: Ref<number> = ref(1)

  function ince (b: number) {
    a.value+= b
  }

  return { a, ince }
}
