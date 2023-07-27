<template>
  <p>1. 接口声明</p>
  <PCodeBlock
    :code="interfaceDeclare"
    toc="language-js"
    inDisplay
  ></PCodeBlock>
  <p>2. 接口与类型别名</p>
  <pre>{{`  类型别名和接口非常相似，在大多数情况下你可以在它们之间自由选择。 
  几乎所有的 interface 功能都可以在 type 中使用，
  关键区别在于不能重新开放类型以添加新的属性，而接口始终是可扩展的。`}}</pre>
  <div class="ctn">
    <PCodeBlock
    :code="interfaceAndTypeLeft"
    toc="language-typescript"
    title="interface"
    inDisplay
    ></PCodeBlock>
    <PCodeBlock
      :code="interfaceAndTypeRight"
      toc="language-typescript"
      title="type"
      inDisplay
    ></PCodeBlock>
  </div>
</template>

<script lang="ts" src="./Interface"></script>

<style scoped lang="scss">
.ctn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > div {
    width: 49%;
  }
}
</style>