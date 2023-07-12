<template>
  <el-descriptions title="watch(<input>,callback((<oldVal>, <newVal>) => {}))" :column="1">
    <el-descriptions-item label="参数">
      <br>
      1. {{`\<input\>`}}可以是一个响应式对象，也可以是一个getter函数<br/>
      2. callback()函数接收两个参数，分别是旧值和新值<br/>
    </el-descriptions-item>
    <el-descriptions-item label="返回">
      一个停止侦听函数，调用它可以停止侦听
    </el-descriptions-item>
    <el-descriptions-item label="使用">
      可以监听一个响应式对象的变化，也可以监听一个getter函数的变化，当监听的对象发生变化时，callback()函数会被调用
    </el-descriptions-item>
  </el-descriptions>
  <CodeBlockDisplay :info="info">
    <div>
      <el-button @click="a++">{{ a }}</el-button>
      <br/>
      <label for="user">输入人数:</label>
      <input v-model="count" type="number" name="user"/>
      <p v-if="count<=0">请输入人数，人数不得小于1</p>
      <p v-for="(name,idx) in userName" :key="idx">{{ name.name }}</p>
    </div>
  </CodeBlockDisplay>
</template>

<script setup>
import { watch, ref } from 'vue';
import { UserName } from "@/api/user.js"
import CodeBlockDisplay from '@/components/CodeBlock/CodeBlockDisplay.vue';

let a = 0
let count = ref(0)
let userName = ref('')
watch(() => a, async (newVal, oldVal, onCleanUp) => {
  console.log(newVal, oldVal)
  
  onCleanUp(() => {
    console.log('clean up')
  })
})
watch(count, async (newVal, oldVal) => {
  if(count.value <= 0){
    userName.value = ''
    return
  }else{
    try{
      const res = await fetch("http://127.0.0.1:3000" + UserName.getUserNameUrl(count.value))
      userName.value = await res.json()
    }catch(err){
      console.log(err)
    }
  }
})

const code = 
`
<scripts setup>
import { watch, ref } from 'vue';
import { UserName } from "@/api/user.js"
/**
 * a不是一个响应式对象，
 * 所以watch无法对a的变化进行响应
 * /
let a = 0
let count = ref(0)
let userName = ref('')

watch(() => a, async (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
watch(count, async (newVal, oldVal) => {
  if(count.value <= 0){
    userName.value = ''
    return
  }else{
    try{
      const res = await fetch("http://127.0.0.1:3000" + UserName.getUserNameUrl(count.value))
      userName.value = await res.json()
    }catch(err){
      console.log(err)
    }
  }
})
</scripts>

<template>
  <div>
    <el-button @click="a++">{{ a }}</el-button>
    <br/>
    <label for="user">输入人数:</label>
    <input v-model="count" type="number" name="user"/>
    <p v-if="count<=0">请输入人数，人数不得小于1</p>
    <p v-for="(name,idx) in userName" :key="idx">{{ name.name }}</p>
  </div>
</template>
`

const info = [{
  fileName:'Watch.vue',
  code,
}]
</script>