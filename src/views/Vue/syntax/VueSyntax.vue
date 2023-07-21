<template>
  <h1>模板语法</h1>
  <PCodeBlock :code="code1"></PCodeBlock>
  <h1>SFC的使用</h1>
  <PCodeBlock :code="code2"></PCodeBlock>
  <div style="padding:1.5rem">  
    <h1>书写风格/细节</h1>
    <p>组件命名使用PascalCase，属性命名使用camelCase</p>
  </div>
</template>

<script lang="ts" src="./VueSyntax.ts" />

<style scoped lang="scss">
.container{
  display: block;
  height: auto;
  padding: 1.5em;
}

.code-block{
  display: block;
  position: relative;
  & p {
    position: absolute;
    top: 0.5em;
    right: 1em;
  }
}
</style>