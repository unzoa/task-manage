declare interface Task {
  task_id?: number
  "task_name": string
  "task_alias": string // 简称
  "manager_name": string // 负责人
  "members": Array<number> // 参与者
  "start_time": string // 开始时间
  "status": number // 状态
}
