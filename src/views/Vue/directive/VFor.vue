<template>
  <el-descriptions title="v-for" :column="1">
    <el-descriptions-item label="用法:">
      循环渲染
    </el-descriptions-item>
      
  </el-descriptions>
  <PCodeBlockDisplay
    :code="code"
    title="v-for"
  >
    <div>
      <p
        v-for="(val,idx) in [1,2,3,4,5]"
        :key="idx"
      >{{ val }}</p>
    </div>
  </PCodeBlockDisplay>
</template>

<script lang="ts">
import PCodeBlockDisplay from '@/components/PrimCodeBlock/PCodeBlockDisPlay/PCodeBlockDisplay.vue'
import { Vue, Options } from 'vue-class-component';

@Options({
  components: {
    PCodeBlockDisplay
  }
})
export default class VFor extends Vue{
  get code(){
    return`
        <template>
          <p
            v-for="(val,idx) in [1,2,3,4,5]"
            :key="idx"
          >{{ val }}</p>
        </template>
        `
  }
}
</script>