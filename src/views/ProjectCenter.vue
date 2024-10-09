<script lang="ts" setup>
import { Search, Medal } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const selectProjectValue = ref('')

const handleToProjectDetail = ()=>{
  router.push('/project-detail')
}

</script>
<template>
  <div class=" min-h-screen w-full flex bg-gray-200 justify-center items-center">
    <div class=" min-h-screen w-11/12 grid grid-cols-12 justify-center gap-x-8">
      <div class=" min-h-screen w-full col-span-8 flex flex-col rounded-lg space-y-8">
        <div class="h-96 w-full flex flex-col rounded-lg shadow-lg p-8 bg-white">
          <a class="text-xl font-medium">热门项目</a>
          <div class="h-full w-full ">
            <!--轮播图  -->
              <el-carousel class="h-full w-full" motion-blur>
                <el-carousel-item v-for="item in 4" :key="item">
                  <img src="@/assets/avator.jpg" class="h-full w-full object-contain">
                </el-carousel-item>
              </el-carousel>
          </div>
        </div>
        <div class=" min-h-screen w-full flex flex-col rounded-lg shadow-lg bg-white space-y-3 p-8">
          <div class="w-full flex flex-row justify-between items-center">
            <a class="text-lg font-medium text-gray-600">项目中心</a>
            <a class="w-44 lg:w-52 rounded-lg">
              <el-input v-model="selectProjectValue" placeholder="请输入项目的名称">
                <template #append>
                  <el-button :icon="Search" />
                </template>
              </el-input>
            </a>
          </div>
          <div class="w-full flex  ">
            <div class="h-full w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-4 lg:gap-6">
              <div class=" h-64 w-52 grid grid-rows-3 rounded-lg shadow-lg " v-for="item in 6" :key="item">
                <div class="h-full w-full ">
                  <img src="@/assets/logo.png" class="h-full w-full object-fill">
                </div>
                <div class="h-full w-full grid grid-rows-6 row-span-2 p-3 relative shadow-md hover:shadow-lg  ">
                  <a class="text-base cursor-pointer hover:text-blue-500 " @click="handleToProjectDetail" >项目的名称</a>
                  <a class="text-sm">项目内容讲解</a>
                  <span class="rows-span-4 absolute bottom-3 left-4  space-x-8 lg:space-x-14 bg-white text-sm ">
                    <a class="">浏览:{{ item + 100 }}</a>
                    <a>点赞:{{ item * 10 }}</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="min-h-screen w-full col-span-4 flex flex-col rounded-lg space-y-8 ">
        <div class="min-h-96 w-full flex flex-col rounded-lg shadow-lg p-5 bg-white">
          <a class="text-base text-gray-500 font-medium">项目热力榜</a>
          <div class="h-full w-full flex flex-col space-y-3 p-3">
            <div class="text-base flex flex-row items-center space-x-3 relative" v-for="item in 10" :key="item">
              <a class="text-xl w-5 text-gray-400 font-semibold">{{ item }}</a>
              <a class="text-base text-gray-700 cursor-pointer" @click="handleToProjectDetail">项目{{ item }}</a>
              <a class="text-sm absolute right-0 flex items-center" title="热力值">
                <el-icon>
                  <Medal class="text-yellow-500" />
                </el-icon>{{ 10-item }}</a>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>