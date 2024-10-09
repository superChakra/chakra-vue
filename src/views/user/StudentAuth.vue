<script lang="ts" setup>
import { ref } from 'vue';
import { UploadFilled } from '@element-plus/icons-vue';

const schoolName = ref('');
const studentName = ref('');
const studentIdCard = ref<File[]>([]);
const additionalInfo = ref('');

const handleFileUpload = (file: File) => {
  studentIdCard.value.push(file);
};

const handleRemoveFile = (file: File) => {
  const index = studentIdCard.value.indexOf(file);
  if (index > -1) {
    studentIdCard.value.splice(index, 1);
  }
};

const handleSubmit = () => {
  console.log('学校名称:', schoolName.value);
  console.log('学生姓名:', studentName.value);
  console.log('上传的学生证:', studentIdCard.value);
  console.log('附加信息:', additionalInfo.value);
};
</script>

<template>
  <div class="min-h-screen w-full flex justify-center items-center p-8 bg-gray-100">
    <div class="min-h-screen w-full flex flex-col rounded-lg shadow-lg bg-white p-4 space-y-6">
      <div class=" flex justify-center">
        <a class="text-xl text-gray-600 font-medium">学生认证</a>
      </div>

      <!-- 学校名称 -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">学校名称</label>
        <el-input v-model="schoolName" placeholder="请输入学校名称"></el-input>
      </div>

      <!-- 学生姓名 -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">学生姓名</label>
        <el-input v-model="studentName" placeholder="请输入学生姓名"></el-input>
      </div>

      <!-- 上传学生证 -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">上传学生证</label>
        <el-upload class="" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          list-type="picture" :on-preview="handleFileUpload" :on-remove="handleRemoveFile" multiple>
          <el-icon class="">
            <UploadFilled />
          </el-icon>
          <div class="text-gray-500 text-sm font-medium">
            上传学生证正反面<em>或上传学生卡正反面</em>
          </div>
          <template #tip>
            <div class="text-sm text-gray-400">
              上传的图片请尽量清晰，方便工作人员审核
            </div>
          </template>
        </el-upload>
      </div>

      <!-- 附加信息 -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">附加信息</label>
        <el-input v-model="additionalInfo" placeholder="请输入附加信息，例如联系方式、学校邮箱等信息，有利于加快审核"></el-input>
      </div>

      <!-- 提交按钮 -->
      <el-button @click="handleSubmit" type="primary" class="w-full">提交</el-button>
    </div>
  </div>
</template>

<style scoped></style>
