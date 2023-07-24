<template>
  <el-descriptions title="reactive()" :column="1">
    <el-descriptions-item label="参数">
      对象  Object
    </el-descriptions-item>
    <el-descriptions-item label="返回">
      对象的响应式代理
    </el-descriptions-item>
    <el-descriptions-item label="使用">
      与JS中 new Proxy() 的使用方法相同，vue会根据组件中对reactive变量的引用自动设置handler
    </el-descriptions-item>
  </el-descriptions>
  <PCodeBlockDisplay
    :code="code"
    title="Reactive.vue"
    toc="language-js"
    >
    <div>
      <el-button @click="addState">{{ 'state=' + state.count }}</el-button>
    </div>
  </PCodeBlockDisplay>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PCodeBlockDisplay from '@/components/PrimCodeBlock/PCodeBlockDisplay/PCodeBlockDisplay.vue'

@Options({
  components: {
    PCodeBlockDisplay
  }
})
export default class Reactive extends Vue {
  state = {
    count: 0
  }
  addState = () => {
    this.state.count += 1
  }
  get code() {
    return `
        <scripts setup>
        import { reactive } from 'vue'
        let state = reactive({
          count: 0
        })
        const addState = () => {
          state.count += 1
        }
        </scripts>

        <template>
          <button @click="addState">{{ 'state=' + state}}</button>
        </template>
        `
  }
}
</script>

<style scoped>
.tem-btn{
  width:3em;
  height: 1.5em;
}
</style>