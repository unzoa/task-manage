export default {
  role: {
    0: '组长',
    1: '组员'
  },

  members: [
    { id: 1, name: '张甜', role: 0 }
  ],

  tasks: [
    {
      "task_id": "",
      "task_name": "",
      "task_alias": "", // 简称
      "manager_name": "", // 负责人
      "members": [], // 参与者
      "start_time": "", // 开始时间
      "status": "" // 状态
    }
  ],

  task_season: [
    {
      season_id: '',
      task_id: '',
      members: [],
      "start_time": "", // 本阶段开始
      "end_time": "", // 本阶段结束
      "progress": "", // 进度
      "status": "" // 状态
    }
  ],

  members_report: {
    1: [ // member_id
      {
        task_id: '',
        season_id: '',
        start_time: '',
        end_time: '',
        report_id: '',
      }
    ]
  },

  members_report_contents: [
    {
      member_id: '',
      report_id: '',
      content_id: "",
      title: '',
      "progress": 0,
      "output": ''
    }
  ]
}
