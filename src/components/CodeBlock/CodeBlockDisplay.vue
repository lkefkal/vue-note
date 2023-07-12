<template>
  <div class="code-block-container">
    <div class="left-box">
    <CodeBlock :info="props.info"></CodeBlock>
    </div>
    <div class="right-box">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import CodeBlock from "./CodeBlock.vue"
const props = defineProps(['info'])
</script>

<style scoped>
.code-block-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 50em;
}

.left-box{
  max-width: 25em;
}
.right-box{
  box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.2);
  margin: 1.2em 1em;
  padding: 1em;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-grow: 1;
}
</style>