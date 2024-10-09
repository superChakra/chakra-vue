<script lang="ts" setup>
import { ref } from 'vue';
const comments =  ref([
  { id: 1, author: '张三', summary: '这是一条评论内容示例这是一条评论内容示例这是一条评论内容示例这是一条评论内容示例。', date: '2024-09-01' },
  { id: 2, author: '李四', summary: '另外一条评论内容示例。', date: '2024-09-02' },
])

</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center top-0 p-6">
    <div class="bg-white shadow-md rounded-lg w-full p-2">
      <div class="flex min-h-screen w-full">
        <el-table :data="comments">
          <el-table-column prop="author" label="用户名" />
          <el-table-column prop="summary" label="评论内容" />
          <el-table-column prop="date" label="日期" />
          <el-table-column label="操作">
            <div class="flex flex-row">
              <el-button type="primary">回复</el-button>
              <el-button type="warning">删除</el-button>
            </div>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
