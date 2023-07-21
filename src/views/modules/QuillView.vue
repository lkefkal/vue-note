<template>
  <p>quill</p>
  <PCodeBlock :code="code"></PCodeBlock>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import CodeBlock from '@/components/PrimCodeBlock/PCodeBlock/PCodeBlock.vue';
@Options({
  components: {
    CodeBlock
  }
})
export default class QuillView extends Vue {
  get code(){
    return `
        /** 
         * 
         */
        <template>
          <div>
            123
          </div>
        </template>
        `
  }
}
</script>@/utils/handleString/CleanCode