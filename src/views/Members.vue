<script setup lang="ts">
import { computed, ref } from 'vue'
import role from '../stores/role'
import { useMembersStore } from '../stores/members/members'
import { storeToRefs } from 'pinia'
import type { Member } from '../stores/members/member-type'
const { members } = storeToRefs(useMembersStore())
const {
  addMember,
  delMember,
  editMember
} = useMembersStore()

const membersArrData = computed(() => {
  return members.value.map(i => {
    return {
      ...i,
      role: role[i.role]
    }
  })
})

function showEditMember (id:number) {
  const member = members.value.filter(({id: memberId}) => id === memberId )[0]
  memberObj.value = member // 直接赋值了members数据，编辑后立即修改

  isAddDrawerTitle.value = false
  drawer.value = true
}

function doDelMember (id:number) {
  delMember(id)
}

const drawer = ref(false)
const isAddDrawerTitle = ref(false)
const memberObj = ref<Member>({
  role: 0,
  name: ''
})
function drawerClose () {
  memberObj.value = {} as Member
}

</script>

<template>
  <div class="members">
    <div>
      <el-button
        @click="drawer = true; isAddDrawerTitle = true"
        type="primary"
        plain>addMember</el-button>
      {{memberObj.name}}
    </div>

    <el-drawer
      v-model="drawer"
      title="I am the title"
      :with-header="false"
      @close="drawerClose"
      >
      <span>{{isAddDrawerTitle ? '新增成员' : '编辑成员'}}</span>
      <el-input v-model="memberObj.name" placeholder="成员名" />
      <el-select v-model="memberObj.role" placeholder="角色🎭">
        <el-option
          v-for="(item, index) in role"
          :key="item"
          :label="item"
          :value="index"
        />
      </el-select>

      <el-button
        v-show="isAddDrawerTitle"
        @click="addMember(memberObj)"
        type="primary"
        plain>提交</el-button>
    </el-drawer>

    <el-table :data="membersArrData" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="name" label="NAME" width="180" />
      <el-table-column prop="role" label="ROLE" />
      <el-table-column label="OPERATE">
        <template #default="scope">
          <el-button link type="primary" size="small"
            @click="showEditMember(scope.row.id)">EDIT</el-button>

          <el-button link type="danger" size="small"
            @click="doDelMember(scope.row.id)">DEL</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
