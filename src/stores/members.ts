import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from "pinia"

interface Member {
  id: number,
  name: string,
  role: number
}

interface NewMember {
  name: string,
  role: number
}

export const useMembersStore = defineStore('members', () => {
  const members: Ref<Array<Member>> = ref([])

  /**
   * @param {object} member
   */
  function addMember (member: NewMember) {
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
    const memberId = member.id
    members.value = members.value.map( (memberItem) => {
      return memberItem.id === memberId ? member : memberItem
    } )
  }

  return {
    members,
    addMember,
    delMember,
    editMember
  }
})
