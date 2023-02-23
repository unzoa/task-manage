import type { Ref } from 'vue'

export const useMembersStore = defineStore('members', () => {
  const members: Ref<Array<Member>> = ref([])

  function getMembers (id: number | string) {
    // API 查询
  }

  function addMember (member: Member) {
    members.value.push({
      id: new Date().getTime(),
      ...member
    })

    // API 存储
  }

  function delMember (member_id: number) {
    members.value = members.value.filter( ({id}) => id !== member_id )

    // API 删除
  }

  function editMember (member: Member) {
    const { id } = member
    for (const memberkey in members.value) {
      if (members.value[memberkey].id === id) {
        members.value[memberkey] = member

        // API 更新
        break
      }
    }
  }

  return {
    members,
    getMembers,
    addMember,
    delMember,
    editMember
  }
})
