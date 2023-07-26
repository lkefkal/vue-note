<template>
  <el-carousel trigger="click" height="100vh" :autoplay="false">
    <el-carousel-item v-for="(imgSrc, idx) in imgSrcs" :key="idx">
      <img :src="imgSrc" alt="123" class="imgs"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts" src="./CheatSheet"></script>

<style scoped>
.imgs{
  max-width: 100%;
  height: auto;
}
</style>