<script lang="ts" setup>
import { ref, computed } from 'vue';

const search = ref('');
const categories = ['AI', 'Java', 'Python', '深度学习'];

// 模拟软件数据
const softwareList = ref([
  { id: 1, name: 'AI Tool', description: 'AI 开发工具', image: '/path/to/image1.jpg', category: 'AI' },
  { id: 2, name: 'Java IDE', description: '用于 Java 开发的 IDE', image: '/path/to/image2.jpg', category: 'Java' },
  { id: 3, name: 'Python Library', description: 'Python 库管理工具', image: '/path/to/image3.jpg', category: 'Python' },
  { id: 4, name: '深度学习框架', description: '深度学习开发框架', image: '/path/to/image4.jpg', category: '深度学习' },
]);

// 模拟推荐软件数据
const recommendations = ref([
  { id: 1, name: '推荐软件 1', image: '/path/to/recommend1.jpg' },
  { id: 2, name: '推荐软件 2', image: '/path/to/recommend2.jpg' },
]);

// 过滤软件列表
const filteredSoftware = computed(() => {
  if (!search.value) return softwareList.value;
  return softwareList.value.filter(software =>
    software.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <div class="min-h-screen w-full bg-gray-100 p-8">

    <!-- 软件展示区 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-md" v-for="software in filteredSoftware" :key="software.id">
        <img :src="software.image" class="w-full h-32 object-cover rounded-lg mb-4" />
        <h2 class="text-lg font-bold text-gray-700">{{ software.name }}</h2>
        <p class="text-gray-500">{{ software.description }}</p>
        <el-button type="primary" class="mt-4">下载</el-button>
      </div>
    </div>

    <!-- 推荐软件栏 -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold text-gray-700 mb-4">推荐软件</h2>
      <div class="flex space-x-6">
        <div class="bg-white p-6 rounded-lg shadow-md" v-for="recommendation in recommendations"
          :key="recommendation.id">
          <img :src="recommendation.image" class="w-32 h-32 object-cover rounded-lg mb-4" />
          <h3 class="text-lg font-bold text-gray-700">{{ recommendation.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 额外样式可以根据需要调整 */
</style>
