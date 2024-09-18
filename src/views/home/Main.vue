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
  alert('展示文章详情')
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
  <div class="flex flex-col bg-white min-h-screen outline-none">
    <!--轮播图  -->
    <div>
      <el-carousel height="200px" class="" motion-blur>
        <el-carousel-item v-for="item in 4" :key="item">
          <img src="@/assets/avator.jpg" class="h-full w-full object-contain">
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 主体部分 -->
    <div class="flex h-lvh w-full ">
      <el-row class=" flex h-full w-full">
        <el-col :span="15" class="flex bg-gray-100 h-full w-full">
          <el-tabs v-model="menubar" class="p-4" @tab-click="handleSelectMenubar">
            <el-tab-pane label="推荐" name="first" class="flex flex-col h-full w-full p-2">
              <div class="flex flex-row bg-white h-32 w-full mb-1 border-solid border-gray border-b rounded-md"
                v-for="article in articleList" :key="article.id">
                <div class=" flex w-3/12 h-full">
                  <img src="@/assets/security.png" class=" flex h-full w-full object-cover">
                </div>
                <div class="flex flex-col w-9/12 ">
                  <div class="flex flex-col w-full h-full">
                    <h1 class="flex px-4 py-1 text-lg cursor-pointer text-gray-700" @click="handleShowDetail">{{
                      article.title }}</h1>
                    <p class="flex px-4 text-sm cursor-default">{{ article.summary }}</p>
                  </div>
                  <span class="flex flex-row items-center px-4 py-1 text-sm text-gray-700 cursor-default">
                    <a class="flex">收藏数: {{ article.bookmarkCount }}</a>
                    <a class="flex mx-10">点赞数: {{ article.likesCount }}</a>
                    <a class="flex">阅读数: {{ article.readingCount }}</a>
                    <a class="flex mx-10">作者: {{ article.author }}</a>
                  </span>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="资讯" name="second">
              Config
            </el-tab-pane>
            <el-tab-pane label="占位" name="third">
              Role
            </el-tab-pane>
            <el-tab-pane label="占位" name="fourth">
              Task
            </el-tab-pane>
          </el-tabs>
        </el-col>

        <el-col :span="9" class="flex h-full w-full">
          <div class="flex flex-col w-full h-full bg-slate-200 items-center py-4">
            <div class="block w-4/5 h-96 bg-gray-100  border rounded-lg shadow-gray-400 shadow-sm">
              <div class="flex flex-col h-full w-full">
                <div class="flex flex-row-reverse items-center pr-4 pt-4 mb-2" title="更多">
                  <span class="flex cursor-pointer " @click="handleShowMore">
                    <el-icon>
                      <ArrowRightBold />
                    </el-icon>
                  </span>
                  <span class="flex cursor-pointer " @click="handleShowMore">更多</span>
                </div>
                <div class="flex flex-col h-full w-full">
                  <div class="flex flex-row justify-between h-full w-full" v-for="item in 10" :key="item">
                    <span class="flex pl-6 cursor-default">文章标题</span>
                    <span class="flex pr-6 cursor-default">热度</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

    </div>
    <!-- foot部分 -->
    <div class="flex h-52 w-full items-center justify-center bg-gray-400">
      <h1 class=" text-gray-600 font-bold text-3xl">欢迎来到chakra的网站,希望你有一个不错的体验</h1>
    </div>
  </div>
</template>