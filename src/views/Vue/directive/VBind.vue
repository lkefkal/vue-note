<template>
  <el-descriptions title="v-bind" :column="1">
    <el-descriptions-item label="用法:">
      <br>
      1. 将 attribute 绑定到表达式。动态地更新所有或者一些 attribute，或者当一个 attribute 存在时，使用它的值。
      <br>
      2. 组件传参，传递进组件的参数必须写为 :prop="value" 的形式，否则会被当做字符串处理。
    </el-descriptions-item>
    <el-descriptions-item label="简写">
      ' : '
    </el-descriptions-item>
    <el-descriptions-item label="修饰符">
      <br>
      .camel - 将短横线命名的 attribute 转变为驼峰式命名。<br>
      .prop - 强制绑定为 DOM property。<br>
      .attr - 强制绑定为 DOM attribute。<br>
    </el-descriptions-item>
  </el-descriptions>
  <CodeBlock :info="info"></CodeBlock>
</template>

<script setup>
import { ref } from 'vue';
import CodeBlock from '@/components/CodeBlock/CodeBlock.vue';

const code = 
`
<!-- 绑定 attribute -->
<img v-bind:src="imageSrc" />

<!-- 动态 attribute 名 -->
<button v-bind:[key]="value"></button>

<!-- 缩写 -->
<img :src="imageSrc" />

<!-- 缩写形式的动态 attribute 名 -->
<button :[key]="value"></button>

<!-- 内联字符串拼接 -->
<img :src="'/path/to/images/' + fileName" />

<!-- class 绑定 -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]"></div>

<!-- style 绑定 -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

<!-- 绑定对象形式的 attribute -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- prop 绑定。“prop” 必须在子组件中已声明。 -->
<MyComponent :prop="someThing" />

<!-- 传递子父组件共有的 prop -->
<MyComponent v-bind="$props" />

<!-- XLink -->
<svg><a :xlink:special="foo"></a></svg>
`

const info = ref([
  {
    code,
    fileName: 'VBind.vue'
  }
])
</script>