<script lang="ts" setup>
import { useRouter  } from 'vue-router';
const router = useRouter();

const handleToStudentAuth = ()=>{
router.push('/user-center/auth-student')
}
const handleToRealNameAuth = ()=>{
router.push('/user-center/auth-person')
}

</script>
<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div class="bg-white shadow-md rounded-lg w-full p-8">
      <div class="flex h-32 w-full items-center">
        <img src="@/assets/security-green.svg" class="flex h-32 w-full  bg-slate-50">
      </div>
      <div class="flex flex-col h-lvh w-full space-y-3 mt-3">
        <span class=" h-20 w-full flex flex-row  justify-between items-center border-solid border-b-2 border-gray-50">
          <a class="text-base text-slate-700">学生认证</a>
          <a class="text-base text-blue-500 cursor-pointer" @click="handleToStudentAuth" >立即认证</a>
        </span>
        <span class=" h-20 w-full flex flex-row  justify-between items-center border-solid border-b-2 border-gray-50">
          <a class="text-base text-slate-700">实名认证</a>
          <a class="text-base text-blue-500 cursor-pointer" @click="handleToRealNameAuth" >立即认证</a>
        </span>
      </div>

    </div>
  </div>
</template>

<style scoped></style>