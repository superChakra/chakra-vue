<script lang="ts" setup>
import { ref } from 'vue';
const comments =  ref([
  { id: 1, author: '张三', summary: '这是一条评论内容示例这是一条评论内容示例这是一条评论内容示例这是一条评论内容示例。', date: '2024-09-01' },
  { id: 2, author: '李四', summary: '另外一条评论内容示例。', date: '2024-09-02' },
])

const  totalComments =  50
const pageSize  =  10 // 示例总评论数
const dialogVisible = false    
const selectedComment =  {}
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center top-0 p-6">
    <div class="bg-white shadow-md rounded-lg w-full p-8">
      <div class="flex min-h-screen w-full">
        <el-table :data="comments">
          <el-table-column prop="author" label="作者" class="w-1/4 bg-red-500" />
          <el-table-column prop="summary" label="评论内容" class="w-1/4 bg-blue-500" />
          <el-table-column prop="date" label="日期" class="w-1/4 bg-green-500" />
          <el-table-column label="操作" class="w-1/4 bg-gray-500 space-x-3">
            <el-button type="primary">查看</el-button>
            <el-button type="warning">删除</el-button>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
