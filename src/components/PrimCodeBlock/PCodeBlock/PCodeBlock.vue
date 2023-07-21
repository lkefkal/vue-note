<template>
  <div class="code-container">
    <span>template</span>
    <el-button text @click="clickCopy" title="复制">
      <p v-if="isCopyed">已复制</p>
      <el-icon><CopyDocument /></el-icon>
    </el-button>
    <pre class="code-block">
      <code class="inner-code language-html">
        {{ cleanCode }}
      </code>
    </pre>
  </div>
</template>

<script lang="ts" src="./PCodeBlock"></script>

<style scoped lang="scss">
.code-container {
  position: relative;
  margin: 0 1em;
  & span,button {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    color: aliceblue;
    font-family: 'JetBrains Mono', monospace;
  }
  & button{
    display: none;
    &:hover{
      color: #000000;
      background-color: rgba(243, 243, 243, 0);
    }
  }
  &:hover{
    & span{
      display: none;
    }
    & button{
      display: flex;
    }
  }
}
.code-block {
  border-radius: 0.5em;
  padding: 0;
  display: flex;
  & .inner-code {
    flex-grow: 1;
    padding: 0;
    line-height: 1.5em;
    font-size: 0.9em;
    color: #d6dce8;
  }
}
</style>