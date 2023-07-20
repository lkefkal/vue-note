<template>
  <div class="container">
    <div v-if="isInHome" >
      <a href="https://cn.vuejs.org/" target="_blank">
      <img name="vue" alt="Vue logo" src="@/assets/logo.svg" height="100"/>
      </a>
      <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
    </div>
  </div>
  <router-view></router-view>
</template>


<script lang="ts" src="./VueView.ts">
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

</style>