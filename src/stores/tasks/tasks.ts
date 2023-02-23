import type { Ref } from 'vue'

export default defineStore('tasks', () => {
  const tasks: Ref<Array<Task>> = ref([])

  function addTask (taskContent: Task) {
    tasks.value.push({
      task_id: new Date().getTime(),
      ...taskContent
    })
  }

  function delTask (taskId: number) {
    tasks.value = tasks.value.filter( ({ task_id }) => task_id !== taskId )
  }

  function editTask (task: Task) {
    const { task_id: id } = task
    for (const taskkey in tasks.value) {
      if (tasks.value[taskkey].task_id === id) {
        tasks.value[taskkey] = task
        break
      }
    }
  }

  return { tasks, addTask, delTask, editTask }
})
