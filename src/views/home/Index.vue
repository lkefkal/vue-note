<script setup>
</script>

<template>
  <div class="container">
    <h1 class="title">陈镜泽的 Vue 学习笔记</h1>
    <div class="inner-container">
      <a href="https://cn.vuejs.org/" target="_blank">
      <img name="vue" alt="Vue logo" src="@/assets/logo.svg"/>
      </a>
      <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
    </div>
    <div class="inner-container">
      <a href="https://router.vuejs.org/zh/" target="_blank">
        <img alt="vue-router" src="@/assets/logo.svg"/>
      </a>
      <a href="https://router.vuejs.org/zh/" target="_blank">Vue Router</a>
    </div>
    <div class="inner-container">
      <a href="https://element-plus.org/zh-CN/" target="_blank">
        <img alt="Element-Plus" src="@/assets/element-plus-logo.svg" height="80"/>
        <a href="https://element-plus.org/zh-CN/" target="_blank">Element-Plus</a>
      </a>
    </div>
  </div>
</template>

<style scoped>
.title{
  flex:0 0 100%;
  text-align: center;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
}

.container img:not([height]){
  height: 5em;
  width: 5em;
}
.inner-container{
  /* flex-basis: calc(50% - 2em); */
  flex:0 0 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>