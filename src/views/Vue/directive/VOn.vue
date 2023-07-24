<template>
  <el-descriptions title="v-on" :column="1">
    <el-descriptions-item label="用法:">
      给元素绑定事件监听器
    </el-descriptions-item>
    <el-descriptions-item label="简写">
      ' @ '
    </el-descriptions-item>
    <el-descriptions-item label="修饰符">
      <br>
      <pre>
  {{ `.stop - 调用 event.stopPropagation()
  .prevent - 调用 event.preventDefault()
  .capture - 在捕获模式添加事件监听器
  .self - 只有事件从元素本身发出才触发处理函数
  .{keyAlias} - 只在某些按键下触发处理函数
  .once - 最多触发一次处理函数
  .left - 只在鼠标左键事件触发处理函数
  .right - 只在鼠标右键事件触发处理函数
  .middle - 只在鼠标中键事件触发处理函数
  .passive - 通过 { passive: true } 附加一个 DOM 事件` }}
  </pre>
    </el-descriptions-item>
  </el-descriptions>
  <PCodeBlock
    :code="code"
    title="VOn.vue"
    toc="language-html"
    />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import PCodeBlock from '@/components/PrimCodeBlock/PCodeBlock/PCodeBlock';

@Options({
  components: {
    PCodeBlock
  }
})
export default class VOn extends Vue{
  get code(){ 
    return`
        <!-- 方法处理函数 -->
        <button v-on:click="doThis"></button>

        <!-- 动态事件 -->
        <button v-on:[event]="doThis"></button>

        <!-- 内联声明 -->
        <button v-on:click="doThat('hello', $event)"></button>

        <!-- 缩写 -->
        <button @click="doThis"></button>

        <!-- 使用缩写的动态事件 -->
        <button @[event]="doThis"></button>

        <!-- 停止传播 -->
        <button @click.stop="doThis"></button>

        <!-- 阻止默认事件 -->
        <button @click.prevent="doThis"></button>

        <!-- 不带表达式地阻止默认事件 -->
        <form @submit.prevent></form>

        <!-- 链式调用修饰符 -->
        <button @click.stop.prevent="doThis"></button>

        <!-- 按键用于 keyAlias 修饰符-->
        <input @keyup.enter="onEnter" />

        <!-- 点击事件将最多触发一次 -->
        <button v-on:click.once="doThis"></button>

        <!-- 对象语法 -->
        <button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
      `
      }
}
</script>