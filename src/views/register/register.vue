<script setup lang="ts">
import { ref } from 'vue';
import { User, Lock, Key } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const username = ref('')
const password = ref('')
const confimPassword = ref('')
const handleRegister = ()=>{
  alert('进行注册')
}
const handleToLogin = ()=>{
  router.push("/login")
}
const handleVerifyCode = ()=>{
  alert('获取验证码')
}

</script>

<template>
  <div class="flex flex-grow bg-gray-300 h-lvh">

    <div class="basis-3/5 bg-login-url bg-cover"></div>
    <div class=" flex flex-col basis-2/5 h-lvh w-full items-center justify-center">
      <h1 class="text-3xl font-bold text-green-600">用户注册</h1>
      <div class="flex flex-col w-4/5">
        <el-input v-model="username" placeholder="请输入手机号或邮箱" :prefix-icon="User" class="h-10 w-36 my-5" />
        <el-input v-model="password" type="password" placeholder="请输入密码" show-password :prefix-icon="Lock"
          class="h-10 w-36" />
        <el-input v-model="confimPassword" type="password" placeholder="请确认密码" show-password :prefix-icon="Lock"
          class="h-10 w-36 my-5" />
        <div class="flex w-full">
          <el-input v-model="username" placeholder="请输入验证码" :prefix-icon="Key" class="h-10 w-2/5" />
          <span class="h-12 w-3/5">
            <el-button @click="handleVerifyCode" style="height: 40px;" class="w-full">获取验证码</el-button>
          </span>
        </div>
      </div>
      <div class="flex flex-row justify-center items-center my-8 w-2/3">
        <el-button class="w-44" style="height: 40px;" @click="handleRegister">注册</el-button>
        <el-button class="w-44" style="height: 40px;" @click="handleToLogin">返回登陆</el-button>
      </div>
    </div>
  </div>
</template>