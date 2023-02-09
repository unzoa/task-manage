<script setup lang="ts">
import role from '../stores/role'
import { useMembersStore } from '../stores/members'
import { storeToRefs } from 'pinia'
const { members } = storeToRefs(useMembersStore())
const {
  addMember,
  delMember,
  editMember
} = useMembersStore()

function showEditMember () {

}

function doDelMember (id:number) {
  delMember(id)
}

</script>

<template>
  <div class="members">
    <div>
      <button @click="addMember({name: 'john', role: 1})">addMember</button>
    </div>

    <table width="100%" border>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>ROLE</th>
          <th>OPERATE</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="member in members"
          :key="member.id">
          <td>{{member.id}}</td>
          <td>{{member.name}}</td>
          <td>{{role[member.role]}}</td>
          <td>
            <button @click="showEditMember">edit</button>
            <button @click="doDelMember(member.id)">del</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>