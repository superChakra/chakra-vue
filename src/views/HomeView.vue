<script setup lang="ts">
import { Search, ArrowRightBold } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import type { TabsPaneContext } from 'element-plus'
const router = useRouter();
const searchInput = ref('')
const handleSearch = () => {
  alert('进行搜索')
}

const handleCheckLoginStatus = () => {
  const authorization = localStorage.getItem('authorization');
  console.log(authorization)
  if (authorization?.length == 0 || authorization == null) {
    router.push("/login")
  }
  alert('检查用户登陆状态')
}

const handleShowView = () => {
  alert('跳转到该页面' + selectValue)
}

const handleLogOut = () => {

  alert('退出登陆')
}

const handleSelectMenubar = (tab: TabsPaneContext, event: Event) => {
  console.log(tab.props.label + " " + tab.props.name)
}
const handleShowMore = () => {
  alert('查看更多')
}

const handleShowDetail = () => {
  router.push('/article')
}

const handleSelectMessage = (index: any) => {
  alert(index)
  console.log(index)
}

const selectValue = ref('')

const userAvator = ref('src/assets/avator.jpg')

const menubar = ref('first')

const activeIndex = ref('1')

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleShowHistory = () => {
  router.push('/user-center/history')
}

const handleShowContentCenter = () => {
  router.push("/content-center/article-manager")
}
const articleList = ref([
  {
    "id": "1",
    "author": "张三",
    "imageUrl": "https://example.com/image1.jpg",
    "title": "如何学习Java",
    "summary": "探索高效学习Java的最佳策略与技巧。",
    "category": "编程",
    "likesCount": 120,
    "readingCount": 2000,
    "bookmarkCount": 300
  },
  {
    "id": "2",
    "author": "李四",
    "imageUrl": "https://example.com/image2.jpg",
    "title": "理解Spring Boot",
    "summary": "深入了解Spring Boot框架及其微服务架构应用。",
    "category": "技术",
    "likesCount": 85,
    "readingCount": 1500,
    "bookmarkCount": 180
  },
  {
    "id": "3",
    "author": "王五",
    "imageUrl": "https://example.com/image3.jpg",
    "title": "十大Web开发工具",
    "summary": "回顾每个Web开发人员必备的十大开发工具。",
    "category": "网页开发",
    "likesCount": 95,
    "readingCount": 1800,
    "bookmarkCount": 250
  }
])
</script>

<template>
  <!-- Head -->
  <div class=" min-h-screen w-full flex flex-col bg-white outline-none">
    <div class="flex justify-around bg-white h-16 w-full">
      <div class=" flex flex-1 flex-row items-center h-16 bg-gray-300">
        <div class="flex justify-center items-center h-full w-1/12 mx-2">
          <a href="/" class="bg-logo-url bg-cover h-14 w-14" title="logo"></a>
        </div>
        <div class=" flex flex-row justify-center items-center h-full w-4/12 lg:mx-6 md:mx-4 sm:mx-2">
          <a href="/" title="首页" class="text-xl mx-3 2xl:mx-10 lg:mx-7 md:mx-4 ">首页</a>
          <a href="/blog" title="博客" class="text-xl mx-3 2xl:mx-10 lg:mx-7 md:mx-4">博客</a>
          <a href="/project" title="项目" class="text-xl mx-3  2xl:mx-10 lg:mx-7 md:mx-4">项目</a>
          <a href="#" title="占位符" class="text-xl mx-3 2xl:mx-10 lg:mx-7 md:mx-4">占位</a>
        </div>
        <div class="flex items-center h-full w-3/12 mx-3 -ml-6">
          <el-input v-model="searchInput" placeholder="请输入搜索内容" class="h-8 w-4/5">
            <template #append>
              <el-button :icon="Search" @click="handleSearch" />
            </template>
          </el-input>
        </div>
        <div class="flex flex-row items-center h-full w-4/12">
          <div @click="handleCheckLoginStatus" title="用户" class="flex items-center h-16 w-16 sm:mx-2 md:mx-4 2xl:mx-10">
            <el-dropdown>
              <img :src="userAvator" class="rounded-full h-14 w-14 object-cover">
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    <a @click="handleLogOut">退出登陆</a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <el-dropdown @command="handleSelectMessage" class="2xl:mx-6 lg:mx-4 md:mx-2 sm:mx-0 ">
            <span class="text-base text-black">消息</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="个人私信">个人私信</el-dropdown-item>
                <el-dropdown-item command="系统通知">系统通知</el-dropdown-item>
                <el-dropdown-item command="新增粉丝">新增粉丝</el-dropdown-item>
                <el-dropdown-item command="评论回复">评论回复</el-dropdown-item>
                <el-dropdown-item command="点赞收藏">点赞收藏</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span class="2xl:mx-6 lg:mx-4 md:mx-2 sm:mx-0 cursor-pointer text-base" @click="handleShowHistory">历史记录</span>
          <span class="2xl:mx-6 lg:mx-4 md:mx-2 sm:mx-0 cursor-pointer text-base"
            @click="handleShowContentCenter">内容中心</span>
        </div>
      </div>
    </div>
    <div class="min-h-screen w-full">
      <RouterView></RouterView>
    </div>

  </div>
</template>