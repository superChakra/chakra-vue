<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const handleToContentCreation = () => {
  router.push('/work-center/creation')
  console.log('进行创作')
}
const handleEditArticle = ()=>{

}
const handleRemoveArticle = ()=>{

}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div class="bg-white shadow-md rounded-lg w-full p-8 space-y-3">
      <div class="h-16 w-full flex justify-end items-center">
        <el-button @click="handleToContentCreation" type="success" class="w-28">创作文章</el-button>
      </div>
      <div class="min-h-screen w-full flex flex-col space-y-3">
        <div v-for="item in 10 " :key="item"
          class="flex flex-col h-32 w-full p-4 border-solid border-2 shadow-md hover:shadow-lg shadow-gray-100 border-slate-50">
          <h1 class="text-xl text-gray-700 cursor-pointer">标题</h1>
          <p class="text-base text-gray-600 my-2">文本摘要</p>
          <div class="flex flex-row items-center">
            <span class="flex flex-row justify-start space-x-20 items-center w-2/3">
              <a class="flex">收藏数: {{ }}</a>
              <a class="flex">点赞数: {{ }}</a>
              <a class="flex">阅读数: {{ }}</a>
              <a class="flex">文章状态: {{ }}</a>
            </span>
            <span class="flex flex-row justify-end items-center space-x-5 w-1/3 ">
              <el-button @click="handleEditArticle" type="primary" class="w-20">修改</el-button>
              <el-button @click="handleRemoveArticle" type="warning" class="w-20">删除</el-button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>