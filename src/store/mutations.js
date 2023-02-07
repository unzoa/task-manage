export default {
  /**
   * @param member { name role }
  */
  setMember (state, member) {
    state.members.push({
      id: new Date().getTime(),
      ...member
    })
  },

  /**
   * @param task { task_name, manager_name, members, start_time }
  */
  setTask (state, task) {
    state.tasks.push({
      task_id: new Date().getTime(),
      ...task
    })
  },

  /**
   * @param season {}
  */
  setSeason (state, season) {
    state.task_season.push({
      season_id: new Date().getTime(),
      ...season
    })
  },

  /**
   * @param memberReport { member_id task_id season_id }
  */
  setReport (state, memberReport) {
    const { member_id: memberId } = memberReport
    delete memberReport.member_id
    const newMemberReport = {
      report_id: new Date().getTime(),
      ...memberReport
    }
    if (state.members_report[memberId]) {
      state.members_report[memberId].push(newMemberReport)
    } else {
      state.members_report[memberId] = newMemberReport
    }
  },

  setReportContent (state, reportContent) {
    state.members_report_contents.push({
      content_id: new Date().getTime(),
      ...reportContent
    })
  }
}
