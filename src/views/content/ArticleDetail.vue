<script lang="ts" setup>
import { ref } from 'vue';

const article = ref({
  content: `    <h1>IPython</h1>
    <p>IPython（Interactive Python）是一个功能丰富的命令行环境，用于交互式和探索性编程，特别针对Python语言进行了优化。它提供了比标准Python shell更强大的功能，是数据科学、科学计算、教育和软件开发等领域的常用工具。</p>

    <h2>主要特点和作用：</h2>
    <ol>
        <li><strong>增强的Shell：</strong>
            <ul>
                <li>提供了更强大的命令历史记录管理。</li>
                <li>支持制表符自动补全。</li>
                <li>提供了语法高亮和语法错误提示。</li>
                <li>支持多行编辑。</li>
            </ul>
        </li>
        <li><strong>Magic Commands：</strong> IPython引入了一系列以百分号（%）或两个百分号（%%）开头的magic命令，用于执行各种任务，如系统命令调用、代码执行控制、文件读写等。</li>
        <li><strong>变量检查和对象查看：</strong> 可以方便地查看变量内容、类型和大小；支持查看对象的文档字符串和源代码。</li>
        <li><strong>调试支持：</strong> 提供了一个内置的调试器，可以直接在shell中设置断点、单步执行代码等。</li>
        <li><strong>内省功能：</strong> 支持动态获取对象的信息，如属性、方法、类定义等。</li>
        <li><strong>扩展功能：</strong> 用户可以编写自己的扩展来增加新功能。</li>
        <li><strong>Jupyter Notebook集成：</strong> Jupyter Notebook基于IPython内核构建，允许用户创建和分享包含实时代码、方程、可视化和叙述文本的文档。</li>
        <li><strong>多语言支持：</strong> 除了Python，还可以通过不同的内核支持其他编程语言。</li>
        <li><strong>多界面支持：</strong> IPython支持多种前端界面，包括命令行界面（CLI）、Jupyter Notebook、Jupyter Lab等。</li>
    </ol>

    <h1>Jupyter Notebook</h1>
    <p>Jupyter Notebook 是一个非常流行的开源 Web 应用程序，主要用于创建和分享包含实时代码、方程、可视化和叙述文本的文档。它是基于浏览器的交互式笔记本，广泛应用于数据科学、科学计算、教育和软件开发等领域。</p>

    <h2>主要作用和特点：</h2>
    <ol>
        <li><strong>交互式编程环境：</strong> 用户可以在浏览器中编写代码并立即看到运行结果；支持多种编程语言，包括 Python、Julia、R 等，通过不同的内核实现。</li>
        <li><strong>富文本和多媒体支持：</strong> 支持 Markdown 语法，用于撰写文档和注释；支持 LaTeX 数学公式；可以嵌入图片、视频等多媒体元素。</li>
        <li><strong>数据可视化：</strong> 可以直接在笔记本中绘制图表和图形；支持 Matplotlib、Seaborn、Plotly 等绘图库。</li>
        <li><strong>文档化和分享：</strong> Jupyter Notebook 文件以 .ipynb 格式存储，是一种 JSON 格式文件；可以导出为多种格式，如 HTML、PDF、Markdown 和静态网站等，方便分享和发布；支持在线协作和版本控制。</li>
        <li><strong>教育和教学：</strong> 可以创建交互式教程和课程材料；教师可以创建包含代码示例、问题和练习的文档，学生可以填写答案并在同一环境中运行代码。</li>
        <li><strong>研究和报告：</strong> 适合撰写包含数据处理、模型训练和结果分析的研究报告；方便跟踪整个研究过程，使结果易于验证和重现。</li>
        <li><strong>轻量级和快速启动：</strong> 占用资源较少，启动速度快；可以在本地计算机上运行，也可以部署在服务器上供多人使用。</li>
        <li><strong>集成工具和插件：</strong> 支持多种插件（nbextensions），可以增强功能，如代码折叠、单元格隐藏等。</li>
        <li><strong>环境管理和包安装：</strong> 常常与 Anaconda 发行版一起使用，便于管理 Python 环境和安装必要的软件包。</li>
        <li><strong>多平台兼容：</strong> 可以在 Windows、macOS 和 Linux 上运行。</li>
    </ol>

    <h1>Anaconda</h1>
    <p>Anaconda 是一个非常流行的 Python 和 R 数据科学和机器学习领域的发行版。它包含了 Conda 包管理器以及一系列常用的科学计算库。</p>

    <h2>主要组成部分：</h2>
    <ol>
        <li><strong>Anaconda Navigator：</strong> 这是一个图形用户界面 (GUI)，用于启动 Anaconda 中的应用程序，例如 Jupyter Notebook 和 Spyder，并管理 Conda 环境。</li>
        <li><strong>Conda：</strong> Conda 是一个跨平台的包管理器，它可以轻松地安装和更新软件包及其依赖项。它最初是为了与 Anaconda 一起使用而设计的，但现在也可以独立于 Anaconda 使用。</li>
        <li><strong>预装的库和工具：</strong> Anaconda 预装了一些常用的库和工具，例如 NumPy、Pandas、Matplotlib、SciPy、IPython、Jupyter Notebook 等，这些对于数据分析和科学计算非常重要。</li>
        <li><strong>Anaconda Cloud：</strong> 这是一个用于共享和管理 Conda 包和环境的云服务。</li>
    </ol>

    <h2>特点：</h2>
    <ol>
        <li><strong>环境隔离：</strong> Conda 允许你创建多个独立的 Python 或 R 环境，每个环境都可以有自己的包集合和 Python 版本。这使得管理项目依赖变得简单。</li>
        <li><strong>跨平台：</strong> Anaconda 支持 Windows、macOS 和 Linux 操作系统。</li>
        <li><strong>社区贡献：</strong> 除了官方维护的包之外，社区成员还可以上传和维护自己的包到 Anaconda Cloud 或其他 Conda 通道。</li>
        <li><strong>易于安装和使用：</strong> Anaconda 提供了一个简单的安装程序，用户可以通过它来安装 Anaconda 并开始使用。</li>
        <li><strong>安全性：</strong> Anaconda 经常更新其软件包，以确保它们的安全性和稳定性。</li>
    </ol>`,
  title: '文章标题测试数据',
  likes: '123',
  favorite: '12312',
  reading: '1231',
  url: 'https://media-demo-bucket.oss-cn-shanghai.aliyuncs.com/chakra.png'
});

const user = ref({
  name: "张三"
});
</script>

<template>
  <div class="flex min-h-screen w-full bg-sky-200 justify-center items-center">
    <div class="flex flex-row min-h-screen w-11/12  bg-white shadow-lg rounded-lg overflow-hidden">
      <!-- Sidebar -->
      <aside class="flex flex-col w-1/4 bg-slate-200 p-6">
        <div class="flex flex-col items-center p-4 bg-white border border-slate-100 shadow-md rounded-lg space-y-4">
          <div class="h-24 w-24 rounded-full overflow-hidden">
            <img :src="article.url" class="h-full w-full object-cover">
          </div>
          <span class="text-xl font-semibold text-gray-800">{{ user.name }}</span>
          <div class="flex flex-col w-full gap-2">

          </div>
          <div class="flex justify-end items-end space-x-4 mt-4">
            <el-button class="w-24">关注</el-button>
            <el-button class="w-24">收藏</el-button>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex flex-col w-3/4 bg-gray-50 p-8 space-y-8">
        <h1 class="text-3xl font-bold text-gray-800">{{ article.title }}</h1>
        <div class=" h-24 w-full flex flex-col justify-around rounded-lg p-2 bg-gray-300">
          <div class="h-8 w-full flex flex-row items-center space-x-10">
            <a>用户名: 张三</a>
            <a>文章创建时间</a>
            <a>阅读量</a>
            <a>收藏数</a>
            <a>点赞数</a>
          </div>
          <div class="h-8 w-full flex flex-row items-center space-x-8">
            <a>文章标签:</a>
            <a class="h-8 min-w-10 border-2 border-solid border-gray-300 rounded-lg flex justify-center items-center bg-gray-50"
              v-for="item in 3" :key="item">标签</a>
          </div>
        </div>
        <div class="text-base text-gray-700 leading-relaxed" v-html="article.content">

        </div>
        <div class="h-20 w-full flex flex-row items-center p-6 bg-gray-300 rounded-md shadow-md">
          <div class="h-full w-1/3 flex flex-row items-center space-x-2 ">
            <img class="flex h-12 w-12 bg-red-100 justify-center items-center rounded-full">
            <a class="flex">用户名</a>
            <a
              class="h-8 w-16 flex justify-center items-center border-2 border-solid rounded-lg border-gray-300 bg-gray-200 cursor-pointer hover:shadow-inner hover:bg-white">关注</a>
          </div>
          <div class="h-full w-2/3 flex flex-row space-x-6 items-center bg-white">
            <img src="@/assets/like.svg" class="h-5">
            <img src="@/assets/dislike.svg" class="h-5">
            <img src="@/assets/comment.svg" class="h-5">
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
