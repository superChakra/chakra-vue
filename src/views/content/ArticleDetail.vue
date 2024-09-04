<script lang="ts" setup>
import { ref } from 'vue';
import { ElButton } from 'element-plus';

const article = ref({
  content: '<ul>测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</ul>',
  title: '文章标题测试数据',
  likes: '123',
  favorite: '12312',
  reading: '1231',
  url: 'https://media-demo-bucket.oss-cn-shanghai.aliyuncs.com/chakra.png'
});

const user = ref({
  name: "张三"
});
</script>

<template>
  <div class="flex min-h-screen w-full bg-sky-200 justify-center items-center">
    <div class="flex flex-row min-h-screen w-11/12  bg-white shadow-lg rounded-lg overflow-hidden">
      <!-- Sidebar -->
      <aside class="flex flex-col w-1/4 bg-slate-200 p-6">
        <div class="flex flex-col items-center p-4 bg-white border border-slate-100 shadow-md rounded-lg space-y-4">
          <div class="h-24 w-24 rounded-full overflow-hidden">
            <img :src="article.url" class="h-full w-full object-cover">
          </div>
          <span class="text-xl font-semibold text-gray-800">作者: {{ user.name }}</span>
          <div class="flex flex-col w-full gap-2">
            <div class="flex justify-between text-lg text-gray-700">
              <span>收藏数:</span>
              <span>{{ article.favorite }}</span>
            </div>
            <div class="flex justify-between text-lg text-gray-700">
              <span>点赞数:</span>
              <span>{{ article.likes }}</span>
            </div>
            <div class="flex justify-between text-lg text-gray-700">
              <span>浏览数:</span>
              <span>{{ article.reading }}</span>
            </div>
          </div>
          <div class="flex justify-end items-end space-x-4 mt-4">
            <el-button class="w-24">关注</el-button>
            <el-button class="w-24">收藏</el-button>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex flex-col w-3/4 bg-gray-50 p-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">{{ article.title }}</h1>
        <div class="text-base text-gray-700 leading-relaxed" v-html="article.content"></div>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
