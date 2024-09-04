<script lang="ts" setup>
const handleRemoveAllFavorite = () => {
  alert("清空收藏")
}

const handleRemoveFavorite = () => {
  alert("删除收藏")
}
</script>
<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div class="bg-white shadow-md rounded-lg w-full p-8 space-y-3">
      <div class="h-16 w-full flex justify-end items-center">
        <el-button @click="handleRemoveAllFavorite" type="danger" class="w-28">清空收藏</el-button>
      </div>
      <div class="min-h-screen w-full flex flex-col space-y-3">
        <div v-for="item in 10 " :key="item"
          class="flex flex-col h-32 w-full p-4 border-solid border-2 shadow-md hover:shadow-lg shadow-gray-100 border-slate-50">
          <h1 class="text-xl text-gray-700 cursor-pointer">标题</h1>
          <p class="text-base text-gray-600 my-2">具体文本文章</p>
          <div class="flex flex-row justify-between items-center">
            <a class="text-base text-gray-700 "> 作者:{{ }}</a>
            <el-button @click="handleRemoveFavorite" type="warning" class="w-20">删除</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>