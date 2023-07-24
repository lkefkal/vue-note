<template>
  <el-descriptions title="v-if" :column="1">
    <el-descriptions-item label="用法:">
      条件渲染<br>
      根据v-if中的值的真假来决定是否渲染元素
    </el-descriptions-item>
      
  </el-descriptions>
  <PCodeBlockDisplay
    :code="code"
    title="v-if"
  >
    <div>
      <el-button @click="shouldRender = !shouldRender">Click</el-button>
      <p v-if="shouldRender">v-if===true</p>
      <p v-else>v-if===false</p>
    </div>
  </PCodeBlockDisplay>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import PCodeBlockDisplay from '@/components/PrimCodeBlock/PCodeBlockDisPlay/PCodeBlockDisplay.vue'

@Options({
  components: {
    PCodeBlockDisplay
  }
})
export default class VIf extends Vue{
  shouldRender = true
  get code(){
    return`
        <script setup>
        import { ref } from 'vue';
        const shouldRender = ref(true)
        </scripts>

        <template>
          <el-button @click="shouldRender = !shouldRender">Click</el-button>
          <p v-if="shouldRender">v-if===true</p>
          <p v-else>v-if===false</p>
        </template>
        `
  }
}
</script>