<template>
  <div class="container">
    <el-descriptions title="vue 响应式" :column="1">
      <el-descriptions-item label="原理">
        new Proxy(target, handler)
      </el-descriptions-item>
      <el-descriptions-item label="常用响应式函数">
        <el-button
          v-for="path in ['reactive','ref', 'computed', 'watch']"
          @click="handleClick(`${path}`)"
          round
          :disabled="whiereIs === path"
        >{{ path }}</el-button>
      </el-descriptions-item>
    </el-descriptions>
    
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter,useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

const whiereIs = computed(() => {
  // console.log(route.path.split('/').pop())
  return route.path.split('/').pop()
})

const handleClick = (path) => {
  router.push('/vue/react/' + path)
}
</script>

<style scoped>
.container {
  padding:0.5em 1.5em;
}

.container+div {
  padding:0.5em 1.5em;
}
</style>