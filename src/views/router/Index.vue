<template>
  <div class="container">
    <div v-if="isInHome" style="padding: 5rem;">
      <a href="https://router.vuejs.org/zh/" target="_blank">
      <img name="vue" alt="Vue logo" src="@/assets/logo.svg" height="100"/>
      </a>
      <a href="https://router.vuejs.org/zh/" target="_blank">vue-router</a>
    </div>
  </div>
  <div style="padding: 1.5rem;">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter,useRoute } from 'vue-router';
import { computed } from 'vue';

const router = useRouter()
const route = useRoute()

const isInHome = computed(() => {
  return route.path === '/router'
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
}

.container>div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>