<script lang="ts" setup>
import { ref } from 'vue';
import { UploadFilled } from '@element-plus/icons-vue';

const personName = ref('');
const idCard = ref('');
const personIdCard = ref<File[]>([]);

const handleFileUpload = (file: File) => {
  personIdCard.value.push(file);
};

const handleRemoveFile = (file: File) => {
  const index = personIdCard.value.indexOf(file);
  if (index > -1) {
    personIdCard.value.splice(index, 1);
  }
};

const handleSubmit = () => {
  console.log('姓名:', personName.value);
  console.log('身份证:', idCard.value);
  console.log('上传的身份证:', personIdCard.value);
};
</script>

<template>
  <div class="min-h-screen w-full flex justify-center items-center p-8 bg-gray-100">
    <div class="min-h-screen w-full flex flex-col rounded-lg shadow-lg bg-white p-4 space-y-6">
      <div class=" flex justify-center">
        <a class="text-xl text-gray-600 font-medium">实名认证</a>
      </div>

      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">姓名</label>
        <el-input v-model="personName" placeholder="请输入姓名"></el-input>
      </div>


      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">身份证号</label>
        <el-input v-model="idCard" placeholder="请输入身份证号"></el-input>
      </div>


      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">上传身份证</label>
        <el-upload class="" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          list-type="picture" :on-preview="handleFileUpload" :on-remove="handleRemoveFile" multiple>
          <el-icon class="">
            <UploadFilled />
          </el-icon>
          <div class="text-gray-500 text-sm font-medium">
            上传身份证正反面
          </div>
          <template #tip>
            <div class="text-sm text-gray-400">
              上传的图片请尽量清晰，方便工作人员审核
            </div>
          </template>
        </el-upload>
      </div>

      <!-- 提交按钮 -->
      <el-button @click="handleSubmit" type="primary" class="w-full">提交</el-button>
    </div>
  </div>
</template>

<style scoped></style>
