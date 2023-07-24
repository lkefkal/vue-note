<template>
  <div class="container">
    <div class="container-left">
      <PCodeBlock
        :code="code"
        :title="title" 
        :toc="toc" 
        :inDisplay="true"
      ></PCodeBlock>
    </div>
    <div
      class="container-right"
    ><slot></slot></div>
  </div>
</template>

<script lang="ts" src="./PCodeBlockDisplay"></script>

<style scoped lang="scss">
.container {
  display: flex;
  widows: 100%;
  flex-direction: row;
  justify-content: space-between;
  &-left{
    flex-grow: 1;
    padding-right: 0.3em;
    height: 100%;
    overflow: auto;
  }
  &-right{
    max-width: 50%;
    min-width: 30%;
    margin:0;
    padding: 1em;
    box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;
  }
}
:slotted(div){
  display: flex;
  flex-direction: column;
  align-items: center;
  & button{
    width: 5em;
}
}
</style>