<script lang="ts" setup>
import { ref } from 'vue';

const isEdit = ref(false);
const user = ref({
  name: '张三',
  gender: '男',
  birthday: '1990-05-20',
  avatarUrl: 'https://example.com/avatar.jpg',
  address: '中国，北京',
  occupation: '软件工程师',
  location: '中国，北京',
  bio: '热爱编程，擅长前端开发和后端架构设计。',
  skills: 'JavaScript, TypeScript, Vue.js, Node.js',
  experience: '5年软件开发经验,曾参与多个大型项目。',
  education: '北京大学 计算机科学与技术学士',
  socialMedia: {
    linkedIn: 'https://www.linkedin.com/in/zhangsan',
    github: 'https://github.com/zhangsan',
    twitter: 'https://twitter.com/zhangsan',
  },
});

const updatedAvatar = ref<File | null>(null);
const previewAvatarUrl = ref(user.value.avatarUrl);

const updateUserInfo = () => {
  // 在这里处理更新逻辑，例如发送请求到服务器
  isEdit.value = false;
  user.value.avatarUrl = previewAvatarUrl.value;
  // 提示保存成功
  alert('个人信息已更新成功！');
};

const onAvatarChange = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    updatedAvatar.value = file;
    const reader = new FileReader();
    reader.onload = () => {
      previewAvatarUrl.value = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
};

const cancelEdit = () => {
  isEdit.value = false;
  previewAvatarUrl.value = user.value.avatarUrl;
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-8">
    <div class="bg-white shadow-md rounded-lg w-full max-w-5xl p-8">
      <!-- 展示个人信息 -->
      <div v-if="!isEdit">
        <div class="flex items-center space-x-6">
          <img :src="user.avatarUrl" alt="用户头像" class="w-32 h-32 rounded-full object-cover border-4 border-gray-300" />
          <div>
            <h1 class="text-3xl font-semibold text-gray-800">{{ user.name }}</h1>
            <p class="text-gray-600 mt-2">{{ user.occupation }}</p>
            <p class="text-gray-600">{{ user.location }}</p>
          </div>
        </div>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 class="text-xl font-medium text-gray-700 mb-4">个人信息</h2>
            <div class="text-gray-600 space-y-2">
              <p><span class="font-medium">性别：</span>{{ user.gender }}</p>
              <p><span class="font-medium">生日：</span>{{ user.birthday }}</p>
              <p><span class="font-medium">地址：</span>{{ user.address }}</p>
            </div>
          </div>

          <div>
            <h2 class="text-xl font-medium text-gray-700 mb-4">简介</h2>
            <p class="text-gray-600">{{ user.bio }}</p>
          </div>

          <div>
            <h2 class="text-xl font-medium text-gray-700 mb-4">专业技能</h2>
            <p class="text-gray-600">{{ user.skills }}</p>
          </div>

          <div>
            <h2 class="text-xl font-medium text-gray-700 mb-4">经历与教育</h2>
            <p class="text-gray-600"><span class="font-medium">工作经验：</span>{{ user.experience }}</p>
            <p class="text-gray-600 mt-2"><span class="font-medium">教育背景：</span>{{ user.education }}</p>
          </div>

          <div>
            <h2 class="text-xl font-medium text-gray-700 mb-4">社交媒体</h2>
            <div class="space-y-2">
              <a :href="user.socialMedia.linkedIn" class="text-blue-600 hover:underline" target="_blank">LinkedIn</a>
              <a :href="user.socialMedia.github" class="text-blue-600 hover:underline" target="_blank">GitHub</a>
              <a :href="user.socialMedia.twitter" class="text-blue-600 hover:underline" target="_blank">Twitter</a>
            </div>
          </div>
        </div>

        <div class="mt-8 flex justify-end">
          <el-button @click="isEdit = true" type="warning"
            class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            编辑信息
          </el-button>
        </div>
      </div>

      <!-- 编辑个人信息 -->
      <div v-else>
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">编辑个人信息</h2>
        <form @submit.prevent="updateUserInfo" class="space-y-6">
          <div class="flex items-center space-x-6">
            <img :src="previewAvatarUrl" alt="预览头像"
              class="w-32 h-32 rounded-full object-cover border-4 border-gray-300" />
            <div>
              <label class="block text-gray-700 font-medium mb-2">更新头像</label>
              <input type="file" accept="image/*" @change="onAvatarChange" class="block w-full text-gray-700" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 font-medium mb-2">姓名</label>
              <input v-model="user.name" type="text"
                class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>

            <div>
              <label class="block text-gray-700 font-medium mb-2">性别</label>
              <select v-model="user.gender"
                class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                <option value="男">男</option>
                <option value="女">女</option>
                <option value="其他">其他</option>
              </select>
            </div>

            <div>
              <label class="block text-gray-700 font-medium mb-2">生日</label>
              <input v-model="user.birthday" type="date"
                class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>

            <div>
              <label class="block text-gray-700 font-medium mb-2">地址</label>
              <input v-model="user.address" type="text"
                class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>

            <div>
              <label class="block text-gray-700 font-medium mb-2">职业</label>
              <input v-model="user.occupation" type="text"
                class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label class="block text-gray-700 font-medium mb-2">位置</label>
              <input v-model="user.location" type="text"
                class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label class="block text-gray-700 font-medium mb-2">个人简介</label>
            <textarea v-model="user.bio" rows="4"
              class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 font-medium mb-2">专业技能</label>
              <textarea v-model="user.skills" rows="3"
                class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>

            <div>
              <label class="block text-gray-700 font-medium mb-2">工作经验</label>
              <textarea v-model="user.experience" rows="3"
                class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
          </div>
          <div>
            <label class="block text-gray-700 font-medium mb-2">教育背景</label>
            <input v-model="user.education" type="text"
              class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label class="block text-gray-700 font-medium mb-2">社交媒体链接</label>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input v-model="user.socialMedia.linkedIn" type="url" placeholder="LinkedIn"
                class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input v-model="user.socialMedia.github" type="url" placeholder="GitHub"
                class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input v-model="user.socialMedia.twitter" type="url" placeholder="Twitter"
                class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div class="flex justify-end space-x-4 mt-6">
            <button type="button" @click="cancelEdit"
              class="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition">
              取消
            </button>
            <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 可以在这里添加更多自定义样式 */
</style>
