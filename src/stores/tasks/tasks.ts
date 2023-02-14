import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

interface TaskContent {
  "task_name": string,
  "task_alias": string, // 简称
  "manager_name": string, // 负责人
  "members": Array<number>, // 参与者
  "start_time": string, // 开始时间
  "status": number // 状态
}

interface Task extends TaskContent {
  "task_id": number
}

export default defineStore('tasks', () => {
  const tasks: Ref<Array<Task>> = ref([])

  function addTask (taskContent: TaskContent) {
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
