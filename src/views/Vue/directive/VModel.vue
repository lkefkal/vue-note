<template>
  <el-descriptions title="v-model" :column="1">
    <el-descriptions-item label="用法:">
      在表单输入元素或组件上创建双向绑定
    </el-descriptions-item>
    <el-descriptions-item label="适用范围">
      {{ `\<input\>
          \<select\>
          \<textarea\>
          \<component\> // 自定义组件
          ` }}
    </el-descriptions-item>
    <el-descriptions-item label="修饰符">
      <br>
      .lazy - 监听 change 事件而不是 input<br>
      .number - 将输入的合法字符串转为数字<br>
      .trim - 移除输入内容两端空格<br>
    </el-descriptions-item>
  </el-descriptions>
  <PCodeBlockDisplay
    :code="code"
    title="VModel.vue"
    toc="language-html"
  >
  <div>
    <p>input: {{ input }}</p>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
  </PCodeBlockDisplay>
</template>

<script lang="ts">
import PCodeBlockDisplay from '@/components/PrimCodeBlock/PCodeBlockDisplay/PCodeBlockDisplay.vue'
import { Vue, Options} from 'vue-class-component';

@Options({
  components:{
    PCodeBlockDisplay
  }
})
export default class VModel extends Vue {
  input = ''
  get code(){
    return `
        <script setup>
        import { ref } from 'vue';
        const input = ref('')
        </scripts>

        <template>
          <p>input: {{ input }}</p>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <!--
            --等价于
            -- <el-input :value="input" @input="input = $event" placeholder="请输入内容"></el-input>
            -->
        </template>
        `
  }
}
</script>