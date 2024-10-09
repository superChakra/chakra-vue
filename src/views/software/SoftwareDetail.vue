<script lang="ts" setup>
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
      <!-- Software Details Section -->
      <section class="bg-white shadow-lg rounded-lg overflow-hidden mb-10">
        <div class="lg:flex">
          <!-- Software Cover -->
          <div class="lg:w-1/3 bg-gray-300">
            <img src="https://via.placeholder.com/400x400" alt="软件封面" class="w-full h-full object-cover" />
          </div>

          <!-- Software Info -->
          <div class="lg:w-2/3 p-8 space-y-6">
            <!-- Software Title and Version -->
            <div>
              <h2 class="text-3xl font-bold text-gray-800">软件名称</h2>
              <p class="text-gray-500">版本 1.0.0 | 发布日期: 2024-09-19</p>
            </div>

            <!-- Software Description -->
            <div>
              <h3 class="text-2xl font-semibold text-gray-700">软件简介</h3>
              <p class="text-gray-600 mt-2">
                这是一款功能强大且易于使用的软件，适合各种用户。无论是日常任务管理还是团队协作，均可通过该软件获得极大帮助。
              </p>
            </div>

            <!-- Software Features -->
            <div>
              <h3 class="text-2xl font-semibold text-gray-700">主要功能</h3>
              <ul class="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>任务管理功能</li>
                <li>实时协作与文件共享</li>
                <li>支持多种插件与扩展</li>
                <li>跨平台支持（Windows, macOS, Linux）</li>
              </ul>
            </div>

            <!-- Download Section -->
            <div class="mt-6">
              <h3 class="text-2xl font-semibold text-gray-700">下载与安装</h3>
              <div class="mt-4 flex space-x-4">
                <button
                  class="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all">
                  下载 Windows 版本
                </button>
                <button class="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all">
                  下载 macOS 版本
                </button>
                <button class="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition-all">
                  下载 Linux 版本
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Future Recommendation Section -->
      <section>
        <div class="bg-white shadow-lg rounded-lg p-8">
          <h3 class="text-2xl font-semibold text-gray-800">推荐软件</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <!-- Placeholder for Recommended Software -->
            <div class="bg-gray-200 p-6 rounded-lg text-center">
              <img src="https://via.placeholder.com/150" alt="推荐软件1" class="mx-auto mb-4" />
              <h4 class="text-lg font-semibold text-gray-700">软件名称1</h4>
              <button
                class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all">
                立即下载
              </button>
            </div>

            <div class="bg-gray-200 p-6 rounded-lg text-center">
              <img src="https://via.placeholder.com/150" alt="推荐软件2" class="mx-auto mb-4" />
              <h4 class="text-lg font-semibold text-gray-700">软件名称2</h4>
              <button
                class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all">
                立即下载
              </button>
            </div>

            <!-- Add more recommended software as needed -->
          </div>
        </div>
      </section>
    </main>

    <!-- Page Footer -->
    <footer class="bg-gray-100 text-center py-4 mt-10">
      <p class="text-gray-500 text-sm">© 2024 软件公司. 保留所有权利.</p>
    </footer>
  </div>
</template>

<style scoped></style>
