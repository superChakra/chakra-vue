<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleSelectView = (index: any) => {
  console.log(index)
  router.push(index)

}
</script>
<template>
  <div class="flex min-h-screen w-full bg-gray-300">
    <el-container class="user-layout-container" style="height:auto">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu @select="handleSelectView" default-active="/user-center/person">
            <el-menu-item-group>
              <el-menu-item index="/user-center/profile">个人资料</el-menu-item>
              <el-menu-item index="/user-center/account">账号设置</el-menu-item>
              <el-menu-item index="/user-center/auth">信息认证</el-menu-item>
              <el-menu-item index="/user-center/favorite">我的收藏</el-menu-item>
              <el-menu-item index="/user-center/history">浏览历史</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group>
              <el-menu-item index="/content-center/article-manager">内容管理</el-menu-item>
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