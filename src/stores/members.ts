import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from "pinia"

export const useMembers = defineStore('members', () => {
  const members: Ref<Array<{id: number}>> = ref([])

  /**
   * @param {object} member { name: string, role: number }
   */
  function addMember (member: object) {
    members.value.push({
      id: new Date().getTime(),
      ...member
    })
  }

  /**
   * @param {number} member_id
   */
  function delMember (member_id: number) {
    console.log(member_id)
    members.value = members.value.filter(({id}) => id !== member_id)
  }


  /**
   * @param {object} member { id: number, name: string, role: number }
   */
  function editMember (member: object) {
    console.log(member)
  }

  return {
    members,
    addMember,
    delMember,
    editMember
  }
})