<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleSelectContentView = (index:any)=>{
  router.push(index)
  console.log(index)
}

</script>

<template>
  <div class="flex h-lvh w-full bg-gray-300">
    <el-container class="user-layout-container" style="height:auto">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu @select="handleSelectContentView" default-active="/user-center/person">
            <el-menu-item-group>
              <el-menu-item index="/">
                <a class=" text-yellow-800 font-bold">
                  主页面
                </a>
              </el-menu-item>
              </el-menu-item-group>

              <el-menu-item-group>
                <el-menu-item index="/content-center/article-manager">文章管理</el-menu-item>
                <el-menu-item index="/content-center/comment-manager">评论管理</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="/work-center/creation">内容创作</el-menu-item>
              </el-menu-item-group>
          </el-menu>
        </el-scrollbar>
      </el-aside>

      <el-container class="flex h-full w-full bg-sky-100">
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>