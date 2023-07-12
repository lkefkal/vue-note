<template>
  <el-descriptions title="ref(<input>)" :column="1">
    <el-descriptions-item label="参数">
      任意值 any
    </el-descriptions-item>
    <el-descriptions-item label="返回">
      {{ `{value: \<input\>} 的响应式代理` }}
    </el-descriptions-item>
    <el-descriptions-item label="使用">
      被自动解包时，直接使用，其余时刻使用需要使用{{ '<ref>.value' }}的形式
    </el-descriptions-item>
    <el-descriptions-item label="解包场景">
      <div>
        1. ref 是模板渲染上下文的顶层属性时才适用自动“解包”。 例如， object 是顶层属性，但 object.foo 不是。
        <br>
        2.当一个 ref 被嵌套在一个响应式对象中，作为属性被访问或更改时，它会自动解包，因此会表现得和一般的属性一样
      </div>
    </el-descriptions-item>
  </el-descriptions>
  <CodeBlockDisplay :info="info">
    <div>
      <button @click="incresement" class="tem-btn">
        {{ count }}
      </button>
      <br/>
      <button @click="count--">减一</button>
    </div>
  </CodeBlockDisplay>
</template>

<script setup>
import CodeBlockDisplay from '@/components/CodeBlock/CodeBlockDisplay.vue';
import { ref } from 'vue';

const count = ref(0)

const incresement = () => {
  count.value += 1
}
const code = `
<scripts setup>
import { ref } from 'vue';
const count = ref(0)
const incresement = () => {
  count.value += 1
}
</scripts>

<template>
  <div>
    <button @click="incresement">
      {{ count }}
    </button>
    <br/>
    <button @click="count--">
      减一
    </button>
  </div>
</template>
`

const info = [{
  fileName:'Ref.Vue',
  code:code,
}]
</script>

<style scoped>
.tem-btn{
  width:3em;
  height: 1.5em;
}
</style>