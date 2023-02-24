<script setup lang="ts">

import upload from '../libs/packages/upload@1.0.3'

const upd = ref<upload>({} as upload)


onMounted(() => {
  upd.value = new upload('upd', 'https://www.biweicloud.com:9012/api/file_upload/', {
    data: {
      task_number: 'task_1676530245',
      file_type: 1,
      file_attr: 0,
      file_name: 'ShadowsocksX-NG-R8.dmg',
      file_path: '',
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImJ3eV96bGoiLCJ1c2VyX2lkIjoxMDM0LCJleHAiOjE2NzcxMzk3MjYsIm9yaWdfaWF0IjoxNjc3MTE4MTI2fQ.Bhsfjre8QopOK58loJswUFoeaHic9FvqXfz5qYNpYvk',
      submit_user: 'bwy_zlj'
    },
    dragAble: true,
    dragWrapperId: 'dg'
  }, {
    failMessageList (list) {
      console.log(list)
    },
    onProgress (progress) {
      console.log(progress)
    },
    beforeDrag () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(0)
        }, 1000);
      })
    }
  })
})

</script>

<template>
  <div class="task-wrapper">
    <div id="dg" style="width: 500px; height: 500px; background-color: #999;">
      <form>
        <input
          id="upd"
          hidden
          type="file"
          multiple
          @change="upd.change"
          />
        <el-button @click="upd.click()">选择文件</el-button>
        <el-button @click="upd.syncSubmit()">同步上传</el-button>
      </form>
    </div>
  </div>
</template>
