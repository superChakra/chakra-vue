<script lang="ts" setup>
import { ref } from 'vue';

const user = ref({
  email: 'zhangsan@example.com',
  username: 'zhangsan',
  phone: '123-456-7890',
  password: '',
  confirmPassword: '',
  notifications: {
    emailNotifications: true,
    smsNotifications: false,
  },
});

const updateAccountSettings = () => {
  // 在这里处理更新逻辑，例如发送请求到服务器
  alert('账号设置已更新成功！');
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div class="bg-white shadow-md rounded-lg w-full p-8">
      <div class="flex h-32 w-full items-center">
        <img src="@/assets/security-blue.svg" class="flex h-32 w-full bg-slate-50">
      </div>
      <div class="flex flex-col h-lvh w-full space-y-3 mt-3">
        <span class="flex flex-row h-20 w-full items-center justify-between border-solid border-b-2 border-gray-50">
          <a class="text-base text-slate-700">密码</a>
          <a class="text-base text-blue-500 cursor-pointer">修改密码</a>
        </span>
        <span class="flex flex-row h-20 w-full items-center justify-between border-solid border-b-2 border-gray-50">
          <a class="text-base text-slate-700">手机号</a>
          <a class="text-base text-blue-500 cursor-pointer">修改手机号</a>
        </span>
        <span class="flex flex-row h-20 w-full items-center justify-between border-solid border-b-2 border-gray-50">
          <a class="text-base text-slate-700">邮箱</a>
          <a class="text-base text-blue-500 cursor-pointer">修改邮箱</a>
        </span>
        <span class="flex flex-row h-20 w-full items-center justify-between  border-solid border-b-2 border-gray-50">
          <a class="text-base text-slate-700">第三方账户</a>
          <a class="text-base text-blue-500 cursor-pointer">修改第三方账户</a>
        </span>
        <span class="flex flex-row h-20 w-full items-center justify-between border-solid border-b-2 border-gray-50">
          <a class="text-base text-slate-700">登陆记录</a>
          <a class="text-base text-blue-500 cursor-pointer">查看登陆记录</a>
        </span>
        <span class="flex flex-row h-20 w-full items-center justify-between border-solid border-b-2 border-gray-50">
          <a class="text-base text-slate-700">账号注销</a>
          <a class="text-base text-blue-500 cursor-pointer">立即注销</a>
        </span>
      </div>
    </div>
  </div>

</template>

<style scoped>
/* 可以在这里添加更多自定义样式 */
</style>
