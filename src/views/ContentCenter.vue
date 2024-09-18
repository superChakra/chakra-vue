<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleSelectContentView = (index:any)=>{
  if (index == "/work-center/creation"){
    window.open(index, '_blank');
  }else{
    router.push(index)
  }
}

</script>

<template>
  <div class="flex min-h-screen w-full bg-gray-300">
    <el-container class="user-layout-container" style="height:auto">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu @select="handleSelectContentView" default-active="/user-center/person">
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