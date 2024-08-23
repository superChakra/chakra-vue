<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const username = ref('')
const password = ref('')

const handleLogin = ()=>{
  alert(`username: ${username.value}, password: ${password.value},进行登陆`);
}
const handleToRegister = ()=>{
  router.push("/register")
}
</script>

<template>
  <div class="flex flex-grow bg-gray-300 h-lvh">

    <div class="basis-3/5 bg-login-url bg-cover"></div>
    <div class=" flex flex-col basis-2/5 h-lvh w-full items-center justify-center">
      <h1 class="text-3xl font-bold text-green-600">用户登陆</h1>
      <div class="flex flex-col w-4/5">
        <el-input v-model="username" placeholder="请输入账户" :prefix-icon="User" class=" h-10 w-36 my-5" />
        <el-input v-model="password" type="password" placeholder="请输入密码" show-password :prefix-icon="Lock"
          class="h-10 w-36" />
      </div>
      <div class="flex flex-row justify-center items-center my-8 w-2/3">
        <el-button class="w-44" style="height: 40px;" @click="handleLogin">登陆</el-button>
        <el-button class="w-44" style="height: 40px;" @click="handleToRegister">注册</el-button>
      </div>
    </div>
  </div>
</template>