<template>
  <div class="container">
    <template v-for="{title,code,fileName} in info">
      <h1 v-if="title">{{ title }}</h1>
      <div class="code-block">
        <p>{{ fileName }}</p>
        <highlightjs :code="code.replace(/scripts/g, 'script')" autodetect class="code-text"></highlightjs>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import type CodeBlockInfoArray from "./CodeBlockInfoArray.d.ts";

@Options({
  props: {
    info: {
      type: Array as () => CodeBlockInfoArray,
      required: true
    }
  }
})
export default class CodeBlock extends Vue {
  info!: CodeBlockInfoArray
}
</script>

<style scoped>
.container{
  display: block;
  height: auto;
}

.code-block{
  position: relative;
  min-width: 15em;
}
.code-block p{
  position: absolute;
  right: 1em;
}
</style>./CodeBlockInfoArray.js