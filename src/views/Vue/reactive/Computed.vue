<template>
  <el-descriptions title="computed(<input>)" :column="1">
    <el-descriptions-item label="参数">
      函数 Function 作为 getter 函数
    </el-descriptions-item>
    <el-descriptions-item label="返回">
      一个ref对象，其value属性为函数返回值
    </el-descriptions-item>
    <el-descriptions-item label="使用">
      同ref
    </el-descriptions-item>
    <el-descriptions-item label="特性">
      <div>
        1. computed返回的是一个只读的ref对象，其value属性为函数返回值<br>
        2. computed的响应式体现在computed函数会在其依赖的ref对象发生变化时重新执行<br>
        3. 如果在初始化时手动为computed设置getter和setter，那么computed的值不在为只读

      </div>
    </el-descriptions-item>
  </el-descriptions>
  <CodeBlockDisplay :info="info">
    <div>
      <button @click="b++">{{ b }}</button>
      <button @click="a++">{{ a }}</button>
    </div>
  </CodeBlockDisplay>
  <CodeBlockDisplay :info="info2">
    <div class="btn-ctn">
      <button @click="count++">{{ count }}</button>
      <button @click="countPlusOne++">{{ countPlusOne }}</button>
      <button @click="double++">{{ double }}</button>
    </div>
  </CodeBlockDisplay>
</template>

<script setup>
import CodeBlockDisplay from '@/components/CodeBlock/CodeBlockDisplay.vue';
import { computed,ref } from 'vue';

let a = 1
const b = computed(() => a + 1)
const code = 
`
<scripts setup>
import { computed } from 'vue';
let a = 1
const b = computed(() => a + 1)
</scripts>

<template>
// b是一个只读的ref，所以click事件无法修改b的值
<button @click="b++">{{ b }}</button>
// a不是一个响应式对象，
// 所以click事件无法触发computed的重新执行
<button @click="a++">{{ a }}</button>
</template>
`
const info = [{
  fileName: 'Computed.vue',
  code
}]


let count = ref(0)
let countPlusOne = computed(() => count.value + 1)
let double = computed({
  get: () => count.value * 2,
  set: val => {
    count.value = val / 2
  }
})
const code2 = 
`
<script>
import { computed,ref } from 'vue';
let count = ref(0)
let countPlusOne = computed(() => count.value + 1)
let double = computed({
  get: () => count.value * 2,
  set: val => {
    count.value = val / 2
  }
})
</scripts>

<template>
  // count是一个ref对象，所以click事件可以修改count的值
  <button @click="count++">{{ count }}</button>
  // countPlusOne是一个只读的ref对象，所以click事件无法修改countPlusOne的值
  <button @click="countPlusOne++">{{ countPlusOne }}</button>
  // double是一个有getter和setter的computed对象，所以click事件可以修改double的值
  <button @click="double++">{{ double }}</button>
</template>
`

const info2 = [{
  fileName: 'Computed2.vue',
  code: code2
}]
</script>

<style scoped>
.btn-ctn{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
