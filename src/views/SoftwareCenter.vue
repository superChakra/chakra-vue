<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { Search, Refresh } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const softwareValueInput = ref('')

const hotSoftwareList = reactive([
  {
    id: '1',
    category: "ai",
    url: "/project/ai"
  },
  {
    id: '2',
    category: "java",
    url: "/project/java"
  },
  {
    id: '3',
    category: "python",
    url: "/project/python"
  },
  {
    id: '4',
    category: "深度学习",
    url: "/project/deep-learning"
  }
]);

const handleToHome = () => {
  router.push('/')
}
const handleSearchSoftware = () => {
  alert('搜索的值是:' + softwareValueInput.value)
}

const handleRefreshRecommendedSoftware = ()=>{
  alert('刷新推荐列表')
}
const handleToSoftwareDetail  = ()=>{
  router.push('/software/detail')
}
const handleToSoftwareSort = (value:any)=>{
  router.push("/software/sort")
}
</script>
<template>
  <div class="min-h-screen w-full flex flex-col bg-gray-100">
    <!-- Search Section -->
    <div class="h-80 w-full flex justify-center items-center bg-cover  bg-gray-700">
      <a class="h-14 w-3/5 rounded-lg">
        <el-input v-model="softwareValueInput" class="h-14 rounded-lg" placeholder="请输入你需要软件的名称">
          <template #append>
            <el-button :icon="Search" @click="handleSearchSoftware" />
          </template>
        </el-input>
      </a>
    </div>

    <!-- Main Content -->
    <div class="min-h-screen w-full flex flex-col space-y-8 p-4 md:p-6 lg:p-8 items-center">
      <!-- Hot Categories Section -->
      <div class="w-full max-w-7xl border border-gray-200 shadow-lg bg-white rounded-xl p-4 md:p-6">
        <h1 class="text-slate-800 text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6">热门分类</h1>
        <div class="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
          <div
            class="h-20 w-full md:w-40 lg:w-60 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-lg cursor-pointer"
            v-for="item in hotSoftwareList" :key="item.id" @click="handleToSoftwareSort(item.url)">
            <span class="text-base md:text-lg font-medium text-gray-700">{{ item.category }}</span>
          </div>
        </div>
      </div>

      <!-- Featured Software Section -->
      <div class="w-full max-w-7xl flex flex-col bg-white rounded-xl shadow-lg p-4 md:p-6">
        <div class="flex justify-between items-center mb-4 md:mb-6">
          <h2 class="text-slate-800 text-lg md:text-xl lg:text-2xl font-semibold">精选软件</h2>
          <a @click="handleRefreshRecommendedSoftware"
            class="text-blue-500 hover:text-blue-600 flex items-center cursor-pointer">
            <el-icon>
              <Refresh />
            </el-icon> 换一换
          </a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          <div
            class="h-28 w-full flex flex-row items-center border border-gray-200 rounded-lg p-2 md:p-4 shadow-sm hover:shadow-lg cursor-pointer"
            v-for="item in 8" :key="item" @click="handleToSoftwareDetail">
            <div class="h-full w-2/5 bg-pink-100 flex justify-center items-center rounded-lg overflow-hidden">
              <img src="@/assets/logo.png" class="h-full object-cover">
            </div>
            <div class="w-3/5 pl-2 md:pl-4">
              <h3 class="text-sm md:text-base font-medium text-gray-800">软件名称</h3>
              <p class="text-xs md:text-sm text-gray-500">软件介绍</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Software Categories Section -->
      <div class="w-full max-w-7xl flex flex-col bg-white rounded-xl shadow-lg p-4 md:p-6">
        <h2 class="text-slate-800 text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-4">软件分类</h2>
        <div class="flex flex-wrap justify-start gap-4 md:gap-6 border-b pb-2 md:pb-4 mb-4">
          <a v-for="item in 10" :key="item" class="hover:text-blue-500 cursor-pointer text-sm md:text-base">软件类别</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          <div
            class="h-28 w-full flex flex-row items-center border border-gray-200 rounded-lg p-2 md:p-4 shadow-sm hover:shadow-lg"
            v-for="item in 30" :key="item">
            <div class="h-full w-2/5 bg-pink-100 flex justify-center items-center rounded-lg overflow-hidden">
              <img src="@/assets/logo.png" class="h-full object-cover">
            </div>
            <div class="w-3/5 pl-2 md:pl-4">
              <h3 class="text-sm md:text-base font-medium text-gray-800">软件名称</h3>
              <p class="text-xs md:text-sm text-gray-500">软件介绍</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>