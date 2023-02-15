<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import role from '../stores/role'
import { useMembersStore } from '../stores/members/members'
import type { Member } from '../stores/members/member-type'

const { members } = storeToRefs(useMembersStore())
const { addMember, delMember, editMember } = useMembersStore()

const membersArrData = computed(() => {
  return members.value.map(i => {
    return {
      ...i,
      role: role[i.role]
    }
  })
})

// 抽屉组件：增加和编辑成员信息
const drawerShow = ref(false)
const isAddDrawerTitle = ref(false)
const memberObj = ref({} as Member)
function drawerClose () {
  memberObj.value = {} as Member
}

// 成员信息操作
// 显示编辑
function showEditMember (id:number) {
  const member = members.value.filter(({id: memberId}) => id === memberId )[0]
  memberObj.value = {...member} // 拷贝对象，否则直接赋值了member数据，编辑后立即修改

  isAddDrawerTitle.value = false
  drawerShow.value = true
}
// 执行删除
function doDelMember (id:number) {
  // 确认是否删除
  // ...
  delMember(id)
}
</script>

<template>
  <div class="members">
    <div>
      <el-button
        @click="drawerShow = true; isAddDrawerTitle = true"
        type="primary"
        plain>addMember</el-button>
    </div>

    <el-drawer
      v-model="drawerShow"
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
        @click="isAddDrawerTitle ? addMember(memberObj) : editMember(memberObj)"
        type="primary"
        plain>提交</el-button>
    </el-drawer>

    <el-table :data="membersArrData" stripe border style="width: 100%">
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
