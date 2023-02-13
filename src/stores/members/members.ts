import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from "pinia"
import type { Member } from './member-type'

export const useMembersStore = defineStore('members', () => {
  const members: Ref<Array<Member>> = ref([])

  /**
   * @param {object} member
   */
  function addMember (member: Member) {
    members.value.push({
      id: new Date().getTime(),
      ...member
    })
  }

  /**
   * @param {number} member_id
   */
  function delMember (member_id: number) {
    members.value = members.value.filter( ({id}) => id !== member_id )
  }


  /**
   * @param {object} member
   */
  function editMember (member: Member) {
    const { id } = member
    for (const memberkey in members.value) {
      if (members.value[memberkey].id === id) {
        members.value[memberkey] = member
        break
      }
    }
  }

  return {
    members,
    addMember,
    delMember,
    editMember
  }
})
