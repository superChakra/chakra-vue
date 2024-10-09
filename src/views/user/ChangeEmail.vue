<script lang="ts" setup>
import { ref } from 'vue';
import { Key } from '@element-plus/icons-vue';
const newPhone = ref('');
const verificationCode = ref('');
const nextPassword = ref(true)
const nextEmail = ref(true)
const phone = ref('151****2155')
const email = ref('19****@qq.com')
const handleSendVerificationCode = () => {
  // 发送验证码逻辑
  alert('发送验证码到' + phone.value);
};

const updatePhoneOrEmail = () => {
  // 提交修改逻辑
  console.log('修改手机号为', newPhone.value);
  nextPassword.value = !nextPassword.value
};

const handleToEmail = () => {
  nextEmail.value = !nextEmail.value
}

</script>

<template>
  <div class="min-h-screen w-full bg-gray-100 flex items-center justify-center p-6">
    <div class="bg-white shadow-md rounded-lg w-full max-w-xl p-8 space-y-6" v-if="nextPassword">
      <div class="w-full h-full space-y-6" v-if="nextEmail">
        <h2 class="text-xl font-semibold text-gray-800 text-center">修改邮箱</h2>

        <div class="flex flex-col space-y-2 ">
          <a class="text-sm">验证码将发送到邮箱为:{{ email }}</a>
          <a class="text-sm text-gray-300">如果长时间未收到验证码,请检查邮箱是否已注销</a>
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">验证码</label>
          <div class="flex flex-row">
            <el-input v-model="verificationCode" placeholder="请输入验证码" :prefix-icon="Key" class="h-10 w-2/5" />
            <span class="h-12 w-3/5">
              <el-button @click="handleSendVerificationCode" style="height: 40px;" class="w-full">获取验证码</el-button>
            </span>
          </div>
        </div>
        <!-- 提交修改按钮 -->
        <div class="flex justify-end items-center">
          <el-button @click="nextPassword = !nextPassword" type="primary">下一步</el-button>
        </div>
        <a class="cursor-pointer hover:text-blue-500 text-sm text-gray-600" @click="handleToEmail">邮箱不可用?可通过手机号修改</a>
      </div>
      <div class="w-full h-full space-y-6" v-else>
        <h2 class="text-xl font-semibold text-gray-800 text-center">修改邮箱</h2>

        <div class="flex flex-col space-y-2 ">
          <a class="text-sm">验证码将发送到手机为:{{ phone }}</a>
          <a class="text-sm text-gray-300">如果长时间未收到验证码,请检查手机信号、手机卡是否有效</a>
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">验证码</label>
          <div class="flex flex-row">
            <el-input v-model="verificationCode" placeholder="请输入验证码" :prefix-icon="Key" class="h-10 w-2/5" />
            <span class="h-12 w-3/5">
              <el-button @click="handleSendVerificationCode" style="height: 40px;" class="w-full">获取验证码</el-button>
            </span>
          </div>
        </div>
        <!-- 提交修改按钮 -->
        <div class="flex justify-end items-center">
          <el-button @click="nextPassword = !nextPassword" type="primary">下一步</el-button>
        </div>
      </div>
    </div>

    <div class="bg-white shadow-md rounded-lg w-full max-w-xl p-8 space-y-6" v-else>
      <h2 class="text-xl font-semibold text-gray-800 text-center">修改邮箱</h2>
      <!-- 新手机号或邮箱输入框 -->
      <div class="space-y-1">
        <label class="block text-sm font-medium text-gray-700">新邮箱</label>
        <input v-model="newPhone" type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="请输入新的手机号" />
      </div>
      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">验证码</label>
        <div class="flex flex-row">
          <el-input v-model="verificationCode" placeholder="请输入验证码" :prefix-icon="Key" class="h-10 w-2/5" />
          <span class="h-12 w-3/5">
            <el-button @click="handleSendVerificationCode" style="height: 40px;" class="w-full">获取验证码</el-button>
          </span>
        </div>
      </div>
      <!-- 提交修改按钮 -->
      <div class="text-right">
        <el-button @click="updatePhoneOrEmail" type="success">确认修改</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
