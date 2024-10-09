<script lang="ts" setup>
import { ref } from 'vue'
import { Key } from '@element-plus/icons-vue';
const oldPassword = ref('')
const verificationCode = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const isUsePhoneToChangePassword = ref(false)
const handleChangePassword = () => {
  if (newPassword.value !== confirmPassword.value) {
    alert('两次输入的密码不一致')
    return
  }
  alert('密码修改成功')
}

const handleUsePhoneChangePassword = ()=>{
  isUsePhoneToChangePassword.value = !isUsePhoneToChangePassword.value
}
const handleSendVerificationCode = ()=>{

}
const phone = ref('151****2155')
</script>

<template>
  <div class="min-h-screen w-full bg-gray-100 flex items-center justify-center p-6">
    <div class="bg-white shadow-lg rounded-lg w-full max-w-md p-8 space-y-6" v-if="isUsePhoneToChangePassword">

      <h2 class="text-xl font-semibold text-gray-800 text-center">修改手机号</h2>

      <div class="flex flex-col space-y-2 ">
        <a class="text-sm">验证码将发送到手机为:{{ phone }}</a>
        <a class="text-sm text-gray-300">如果长时间未收到验证码,请检查手机信号、手机卡是否有效</a>
      </div>

      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">验证码</label>
        <div class="flex flex-row">
          <el-input v-model="verificationCode" placeholder="请输入验证码" :prefix-icon="Key" class="w-2/5" />
          <span class="w-3/5">
            <el-button @click="handleSendVerificationCode" style="height: 40px;" class="w-full">获取验证码</el-button>
          </span>
        </div>
      </div>

      <!-- New Password Input -->
      <div class="space-y-2">
        <label for="newPassword" class="block text-sm font-medium text-gray-700">新密码</label>
        <el-input v-model="newPassword" type="password" placeholder="请输入新密码" show-password />
      </div>

      <!-- Confirm Password Input -->
      <div class=" space-y-2">
        <label for="confirmPassword" class="block text-sm font-medium text-gray-700">确认密码</label>
        <el-input v-model="confirmPassword" type="password" placeholder="请再次输入新密码" show-password />
      </div>

      <!-- 提交修改按钮 -->
      <div class="flex justify-end">
        <el-button @click="handleChangePassword" type="primary" class=" w-40">确认修改</el-button>
      </div>
    </div>
    <div class="bg-white shadow-lg rounded-lg w-full max-w-md  p-8 space-y-6" v-else>
      <!-- Header -->
      <h1 class="text-2xl font-bold text-gray-800 text-center">修改密码</h1>
      <!-- Phone Number Input -->
      <div>
        <label for="oldPassword" class="block text-sm font-medium text-gray-700">原密码</label>
        <div class="mt-1 flex">
          <el-input v-model="oldPassword" type="password" placeholder="请输入原密码" show-password />
        </div>
      </div>
      <!-- New Password Input -->
      <div>
        <label for="newPassword" class="block text-sm font-medium text-gray-700">新密码</label>
        <el-input v-model="newPassword" type="password" placeholder="请输入新密码" show-password />
      </div>

      <!-- Confirm Password Input -->
      <div>
        <label for="confirmPassword" class="block text-sm font-medium text-gray-700">确认密码</label>
        <el-input v-model="confirmPassword" type="password" placeholder="请再次输入新密码" show-password />
      </div>

      <!-- Submit Button -->
      <div class="flex justify-end">
        <el-button @click="handleChangePassword" type="primary" class=" w-40">确认修改</el-button>
      </div>
      <div>
        <a class="text-sm text-gray-400 cursor-pointer hover:text-blue-500"
          @click="handleUsePhoneChangePassword">忘记密码？使用手机号验证码修改密码</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Customize the button hover state and inputs for better interaction */
button:focus {
  outline: none;
}
</style>
