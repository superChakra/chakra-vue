<script lang="ts" setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Image from '@tiptap/extension-image'
import { onMounted, onUnmounted, ref } from 'vue'
import { useUserStore } from '@/stores/index'
const userStore = useUserStore();

const title = ref('');
const summary = ref('');

const editor = useEditor({
  editorProps: {
    attributes: {
      class: 'prose prose-lg focus:outline-none min-w-full no-scrollbar min-h-full',
    },
  },
  extensions: [
    Image,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Underline,
    StarterKit.configure({
      heading: {
        levels: [1, 2, 3, 4, 5, 6],
      },
    }),
    Table.configure({
      resizable: true,
    }),
    TableRow,
    TableHeader,
    TableCell,
    Placeholder.configure({
      placeholder: 'Write something …',
    }),
    Color.configure({ types: [TextStyle.name] }),
    TextStyle.configure({}),
  ],
  content: '',
  // 初始化后，将光标放置在编辑器中
  autofocus: true,
})

const handlePaste = (event: ClipboardEvent) => {
  const items = event.clipboardData?.items
  if (!items) return

  for (const item of items) {
    if (item.type.startsWith('image/')) {
      const file = item.getAsFile()
      if (file) {
        const reader = new FileReader()
        reader.onload = () => {
          const base64 = reader.result as string
          if (editor.value) {
            editor.value
              .chain()
              .focus()
              .setImage({ src: base64 })
              .run()
          }
        }
        reader.readAsDataURL(file)
      }
    }
  }
}


const handleContent = () => {
  if (editor.value) {

    console.log(editor.value.getHTML)
  }
}

const handleSave = () => {
  alert('保存')
}

const handleSaveAndPublish = () => {
  alert('保存并发布')
}
onMounted(() => {
  window.addEventListener('paste', handlePaste)
})

onUnmounted(() => {
  window.removeEventListener('paste', handlePaste)
})
const showWorkDialog = ref(false)
</script>

<template>
  <div v-if="editor" class="flex flex-col h-lvh w-full bg-slate-400">

    <!-- Toolbar -->
    <div class="flex flex-wrap h-16 w-full border-b border-gray-300 items-center mx-auto ">

      <div class="flex h-full w-1/6 bg-red-200">
        <img src="@/assets/work-center.png" class=" object-fill">
      </div>

      <div class="flex flex-wrap h-16 w-2/3 border-b border-gray-300 justify-around items-center">
        <!-- Heading Dropdown -->
        <el-dropdown title="标题">
          <img src="@/assets/editor/heading.svg" class="h-6 w-6 cursor-pointer">
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                  :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                  H1
                </button>
              </el-dropdown-item>
              <el-dropdown-item>
                <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                  :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                  H2
                </button>
              </el-dropdown-item>
              <el-dropdown-item>
                <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                  :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                  H3
                </button>
              </el-dropdown-item>
              <el-dropdown-item>
                <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
                  :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
                  H4
                </button>
              </el-dropdown-item>
              <el-dropdown-item>
                <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
                  :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
                  H5
                </button>
              </el-dropdown-item>
              <el-dropdown-item>
                <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
                  :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
                  H6
                </button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <!-- Formatting Buttons -->
        <button @click="editor.chain().focus().toggleBold().run()"
          :disabled="!editor.can().chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }">
          <img src="@/assets/editor/bold.svg" class="h-6 w-6" title="加粗">
        </button>

        <button @click="editor.chain().focus().toggleItalic().run()"
          :disabled="!editor.can().chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }">
          <img src="@/assets/editor/italic.svg" class="h-6 w-6" title="斜体">
        </button>

        <button @click="editor.chain().focus().toggleStrike().run()"
          :disabled="!editor.can().chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }">
          <img src="@/assets/editor/strike.svg" class="h-6 w-6" title="删除线">
        </button>

        <!-- Horizontal Rule -->
        <button @click="editor.chain().focus().setHorizontalRule().run()">
          <img src="@/assets/editor/horizontalRule.svg" class="h-6 w-6" title="分割线">
        </button>

        <!-- Underline -->
        <button @click="editor.chain().focus().toggleUnderline().run()"
          :class="{ 'is-active': editor.isActive('underline') }">
          <img src="@/assets/editor/underline.svg" class="h-6 w-6" title="下划线">
        </button>

        <button @click="editor.chain().focus().toggleCodeBlock().run()"
          :class="{ 'is-active': editor.isActive('codeBlock') }">
          <img src="@/assets/editor/code.svg" class="h-6 w-6" title="代码块">
        </button>

        <!-- Lists Dropdown -->
        <el-dropdown title="列表">
          <img src="@/assets/editor/list.svg" class="h-6 w-6 cursor-pointer">
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <button @click="editor.chain().focus().toggleBulletList().run()"
                  :class="{ 'is-active': editor.isActive('bulletList') }">
                  <img src="@/assets/editor/orderList.svg" class="h-6 w-6" title="有序列表">
                </button>
              </el-dropdown-item>
              <el-dropdown-item>
                <button @click="editor.chain().focus().toggleOrderedList().run()"
                  :class="{ 'is-active': editor.isActive('orderedList') }">
                  <img src="@/assets/editor/bulletList.svg" class="h-6 w-6" title="无序列表">
                </button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <!-- Alignment Dropdown -->
        <el-dropdown title="对齐方式">
          <img src="@/assets/editor/alignment.svg" class="h-6 w-6 cursor-pointer">
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <button @click="editor.chain().focus().setTextAlign('left').run()"
                  :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }">
                  <img src="@/assets/editor/leftAlign.svg" class="h-6 w-6" title="左对齐">
                </button>
              </el-dropdown-item>
              <el-dropdown-item>
                <button @click="editor.chain().focus().setTextAlign('center').run()"
                  :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">
                  <img src="@/assets/editor/centerAlign.svg" class="h-6 w-6" title="居中对齐">
                </button>
              </el-dropdown-item>
              <el-dropdown-item>
                <button @click="editor.chain().focus().setTextAlign('right').run()"
                  :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">
                  <img src="@/assets/editor/rightAlign.svg" class="h-6 w-6" title="右对齐">
                </button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <!-- Undo/Redo -->
        <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
          <img src="@/assets/editor/undo.svg" class="h-6 w-6" title="回退">
        </button>

        <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
          <img src="@/assets/editor/redo.svg" class="h-6 w-6" title="重做">
        </button>
      </div>

      <div class="flex h-full w-1/6 items-center justify-evenly">
        <el-button class="w-2/3 h-full" type="success" @click="showWorkDialog = !showWorkDialog">保存</el-button>
      </div>
    </div>

    <!-- Editor Area -->
    <div class="flex flex-col h-full w-full bg-gray-300 items-center">
      <div class="flex h-full w-5/6 p-4 shadow-lg bg-gray-200 border border-gray-200 rounded-lg overflow-auto">
        <div class="w-full h-full bg-gray-100 border border-gray-200 rounded-lg overflow-auto no-scrollbar">
          <EditorContent :editor="editor" @paste="handlePaste" />
        </div>
      </div>
    </div>
  </div>

  <el-dialog v-model="showWorkDialog" width="640px" title="文章内容" class="flex flex-col h-160 w-160 bg-gray-500">
    <div class="flex flex-col items-center h-128 w-full">
      <div class="flex flex-row justify-center items-center h-32 w-full">
        <el-input v-model="title" maxlength="100" placeholder="请输入文章标题" show-word-limit type="text"
          class="w-5/6 h-14" />
      </div>

      <div class="flex flex-row justify-center h-96 w-full ">
        <el-input v-model="summary" maxlength="100" placeholder="请输入文章摘要  (提示:默认是文章标题)" show-word-limit type="textarea"
          :autosize="{ minRows: 18 }" class="w-5/6 max-h-96 resize-none overflow-auto" />
      </div>
    </div>
    <template #footer>
      <div class="flex justify-end h-20 w-full">
        <el-button @click="handleSave" class="w-20 mx-10">保存</el-button>
        <el-button @click="handleSaveAndPublish" class="w-20 mx-5">发布</el-button>
      </div>
    </template>
  </el-dialog>

</template>

<style scoped>
/* Basic editor styles */
.tiptap :first-child {
  margin-top: 0;
}

/* List styles */
.tiptap ul,
.tiptap ol {
  padding: 0 1rem;
  margin: 1.25rem 1rem 1.25rem 0.4rem;
}

.tiptap ul li p,
.tiptap ol li p {
  margin-top: 0.25em;
  margin-bottom: 0.25em;
}

/* Heading styles */
.tiptap h1,
.tiptap h2,
.tiptap h3,
.tiptap h4,
.tiptap h5,
.tiptap h6 {
  line-height: 1.1;
  margin-top: 2.5rem;
  text-wrap: pretty;
  /* Note: `text-wrap` might not be supported, check compatibility */
}

.tiptap h1,
.tiptap h2 {
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
}

.tiptap h1 {
  font-size: 1.4rem;
}

.tiptap h2 {
  font-size: 1.2rem;
}

.tiptap h3 {
  font-size: 1.1rem;
}

.tiptap h4,
.tiptap h5,
.tiptap h6 {
  font-size: 1rem;
}

/* Code and preformatted text styles */
.tiptap code {
  background-color: var(--purple-light);
  border-radius: 0.4rem;
  color: var(--black);
  font-size: 0.85rem;
  padding: 0.25em 0.3em;
}

.tiptap pre code {
  background: none;
  color: inherit;
  font-size: 0.8rem;
  padding: 0;
}

.tiptap blockquote {
  border-left: 3px solid var(--gray-3);
  margin: 1.5rem 0;
  padding-left: 1rem;
}

.tiptap hr {
  border: none;
  border-top: 1px solid var(--gray-2);
  margin: 2rem 0;
}

/* Table-specific styling */
.tiptap table {
  border-collapse: collapse;
  margin: 0;
  overflow: hidden;
  table-layout: fixed;
  width: 100%;
}

.tiptap table td,
.tiptap table th {
  border: 1px solid var(--gray-3);
  box-sizing: border-box;
  min-width: 1em;
  padding: 6px 8px;
  position: relative;
  vertical-align: top;
}

.tiptap table td>* {
  margin-bottom: 0;
}

.tiptap table th {
  background-color: var(--gray-1);
  font-weight: bold;
  text-align: left;
}

.tiptap table .selectedCell::after {
  background: var(--gray-2);
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  position: absolute;
  z-index: 2;
}

.tiptap table .column-resize-handle {
  background-color: var(--purple);
  bottom: -2px;
  pointer-events: none;
  position: absolute;
  right: -2px;
  top: 0;
  width: 4px;
}

.tiptap .tableWrapper {
  margin: 1.5rem 0;
  overflow-x: auto;
}

.tiptap.resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}

.tiptap img {
  display: block;
  height: auto;
  margin: 1.5rem 0;
  max-width: 100%;
}

.tiptap img.ProseMirror-selectednode {
  outline: 3px solid var(--purple);
}
</style>
