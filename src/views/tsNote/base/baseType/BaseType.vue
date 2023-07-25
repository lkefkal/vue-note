<template>
  <p>定义变量类型</p>
  <PCodeBlock
    :code="defineVarType"
    toc="language-js"
    inDisplay
  ></PCodeBlock>
  <p>常见类型</p>
  <PCodeBlock
    :code="generalType"
    toc="language-js"
    inDisplay
  ></PCodeBlock>
</template>
<script lang="ts" src="./BaseType"></script>
<style scoped>
.ctn p {
  background-color: rgb(45, 45, 45);
  padding: 0 1em;
  line-height: 2em;
  color: rgba(255, 255, 255, 0.915);
  margin: 0 1.5em;
}
</style>