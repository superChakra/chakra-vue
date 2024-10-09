<script lang="ts" setup>
import { ref } from 'vue';

const project = ref({
  name: '基于AI的博客推荐系统',
  description: '该项目旨在基于用户偏好推荐博客文章，使用AI算法。',
  creator: 'John Doe',
  date: '2024-09-23',
  coverImage: 'https://via.placeholder.com/150',
  progress: 75,
  likes: 320,
  views: 10450,
  comments: [
    { author: 'Alice', text: '很棒的项目！' },
    { author: 'Bob', text: '我对此非常感兴趣。' },
  ],
  details: '该项目基于自然语言处理技术，分析用户互动并提供个性化的博客推荐。',
});

// 团队成员信息
const teamMembers = ref([
  { name: '张三', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: '李四', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { name: '王五', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
]);

const newComment = ref('');

const addComment = () => {
  if (newComment.value.trim()) {
    project.value.comments.push({
      author: '匿名',
      text: newComment.value.trim(),
    });
    newComment.value = '';
  }
};

const handleLike = () => {
  project.value.likes++
}
</script>


<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <!-- 项目头部 -->
    <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 class="text-2xl font-bold text-gray-800">{{ project.name }}</h1>
          <p class="text-gray-600 mt-2">{{ project.description }}</p>
          <div class="text-sm text-gray-500 mt-1">
            <span>创建者: {{ project.creator }}</span> |
            <span>发布日期: {{ project.date }}</span>
          </div>
        </div>
        <img :src="project.coverImage" alt="项目封面" class="w-48 rounded-lg shadow-lg">
      </div>
    </div>

    <!-- 标签展示 -->
    <div class="flex space-x-3 bg-white rounded-lg shadow-lg p-6 mb-8">
      <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-4 py-2 rounded-full">AI</span>
      <span class="bg-green-100 text-green-800 text-xs font-semibold px-4 py-2 rounded-full">机器学习</span>
      <span class="bg-yellow-100 text-yellow-800 text-xs font-semibold px-4 py-2 rounded-full">自然语言处理</span>
    </div>

    <!-- 团队成员 -->
    <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 class="text-xl font-semibold text-gray-700">团队成员</h2>
      <div class="flex flex-wrap gap-4">
        <div v-for="member in teamMembers" :key="member.name" class="flex items-center space-x-3">
          <img :src="member.avatar" class="w-10 h-10 rounded-full object-cover" />
          <span class="text-gray-700 font-medium">{{ member.name }}</span>
        </div>
      </div>
    </div>

    <!-- 项目进度和统计 -->
    <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="col-span-1">
          <h2 class="text-lg font-medium text-gray-700">进度</h2>
          <div class="relative pt-1">
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div :style="{ width: project.progress + '%' }"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">
              </div>
            </div>
            <span class="flex flex-row items-center justify-between">
              <a class=" text-sm font-medium">{{ project.progress }}% 完成</a>
              <img src="@/assets/like.svg" @click="handleLike" title="点赞" class="h-5 w-5 cursor-pointer">
            </span>
          </div>
        </div>

        <div class="col-span-2 flex justify-around">
          <div class="text-center flex flex-col justify-center items-center">
            <h3 class="text-xl font-semibold">{{ project.likes }}</h3>
            <p class="text-sm text-gray-500">点赞数</p>
          </div>
          <div class="text-center flex flex-col justify-center items-center">
            <h3 class="text-xl font-semibold">{{ project.views }}</h3>
            <p class="text-sm text-gray-500">浏览数</p>
          </div>
          <div class="text-center flex flex-col justify-center items-center">
            <h3 class="text-xl font-semibold">{{ project.comments.length }}</h3>
            <p class="text-sm text-gray-500">评论数</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 项目详情 -->
    <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 class="text-lg font-medium text-gray-700">项目详情</h2>
      <p class="text-gray-600 mt-4">{{ project.details }}</p>
    </div>

    <!-- 评论区 -->
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-lg font-medium text-gray-700 mb-4">评论 ({{ project.comments.length }})</h2>
      <div class="space-y-4">
        <div v-for="(comment, index) in project.comments" :key="index" class="bg-gray-100 rounded-lg p-4">
          <p class="font-semibold text-gray-800">{{ comment.author }}</p>
          <p class="text-gray-600">{{ comment.text }}</p>
        </div>
      </div>

      <!-- 添加评论 -->
      <div class="mt-6">
        <h3 class="text-md font-medium text-gray-700 mb-2">添加评论</h3>
        <div class="flex items-center space-x-4">
          <input v-model="newComment" type="text" placeholder="输入您的评论"
            class=" w-11/12 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
          <button @click="addComment"
            class=" w/ bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* 项目详情页的自定义样式 */
</style>
