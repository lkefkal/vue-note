<template>
  <div :class="inDisplay?'code-container margin-inDisplay':'code-container margin-normal'">
    <span style="font-size: 0.7em;">{{ title }}</span>
    <el-button text @click="clickCopy" title="复制">
      <p v-if="isCopyed" style="padding: 0 0.5em 0 0;">已复制</p>
      <el-icon><CopyDocument /></el-icon>
    </el-button>
    <pre class="code-block">
      <code :class="'inner-code ' + toc">
        {{ cleanCode }}
      </code>
    </pre>
  </div>
</template>

<script lang="ts" src="./PCodeBlock"></script>

<style scoped lang="scss">

.margin-inDisplay{
  margin: 0;
}
.margin-normal{
  margin: 0 1.5em
}
.code-container {
  position: relative;
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
  margin: 0;
  & .inner-code {
    flex-grow: 1;
    padding: 0;
    line-height: 1.5em;
    font-size: 0.9em;
    color: #d6dce8;
  }
}
</style>