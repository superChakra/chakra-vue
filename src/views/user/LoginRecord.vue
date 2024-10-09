<script lang="ts" setup>
import { ref } from 'vue';

const loginRecordList = ref([
  {
    loginEquipment: "笔记本",
    loginTime: "2024-09-25 12:00",
    loginPosition: "北京市朝阳区",
  },
  {
    loginEquipment: "手机",
    loginTime: "2024-09-24 08:30",
    loginPosition: "上海市浦东新区",
  },
  {
    loginEquipment: "平板电脑",
    loginTime: "2024-09-23 17:45",
    loginPosition: "广州市天河区",
  },
  {
    loginEquipment: "笔记本",
    loginTime: "2024-09-22 21:10",
    loginPosition: "深圳市南山区",
  }
]);

const handleRemoveLoginRecord = ()=>{
  
}

</script>

<template>
  <div class=" min-h-screen w-full flex justify-center items-center bg-gray-100 p-8 ">
    <div class="min-h-screen w-full rounded-lg shadow-lg bg-white p-8 space-y-8">
      <el-table :data="loginRecordList" style="width: 100%">
        <el-table-column prop="loginEquipment" label="登陆设备" />
        <el-table-column prop="loginTime" label="登陆时间"  />
        <el-table-column prop="loginPosition" label="登陆地点"  />
        <el-table-column >
          <el-button type="danger" @click="handleRemoveLoginRecord" >删除设备</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<style scoped></style>