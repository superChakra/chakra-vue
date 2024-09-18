<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
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
    id:'4',
    category:"深度学习",
    url:"/project/deep-learning"
  }
]);

const handleToHome = () => {
  router.push('/')
}
const handleSearchSoftware = () => {
  alert('搜索的值是:' + softwareValueInput.value)
}
const handleToSoftwareView = (value: any) => {
  router.push("/software/software-detail")
  alert(value)
}
</script>
<template>
  <div class=" min-h-screen w-full flex outline-none bg-gray-200">
    <div class="min-h-screen w-full flex-col">
      <div class="h-80 w-full flex justify-center items-center bg-login-url  bg-cover">
        <el-input v-model="softwareValueInput" style="max-width: 600px; height: 50px;" placeholder="请输入你需要软件的名称">
          <template #append>
            <el-button :icon="Search" @click="handleSearchSoftware" />
          </template>
        </el-input>
      </div>
      <div class=" min-h-screen w-full flex justify-center bg-slate-300">
        <div class="h-56 w-11/12 border-slate-200  border shadow-md bg-white rounded-lg p-8 space-x-4">
          <h1 class="text-slate-600 text-xl font-bold">热门软件</h1>
          <div class="h-full w-full space-x-6 flex flex-row items-center ">
            <div class="h-24 w-48 border-gray-100 flex shadow-sm border-2 items-center rounded-lg justify-center hover:shadow-lg "
              v-for="item in hotSoftwareList" :key="item.id">
              <a class="text-base text-slate-700 cursor-pointer" @click="handleToSoftwareView(item.url)">
                {{ item.category }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped></style>