<template>
  <div class="container">
    <div v-if="isInHome" style="padding: 5rem;">
      <a href="https://router.vuejs.org/zh/" target="_blank">
      <img name="vue" alt="Vue logo" src="@/assets/logo.svg" height="100"/>
      </a>
      <a href="https://router.vuejs.org/zh/" target="_blank">vue-router</a>
    </div>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Index extends Vue{
  get isInHome(){
    return this.$route.path === '/router'
  }
}
</script>

<style scoped>
</style>