<template>
  <div class="container">
    <el-descriptions title="vue 常用内置指令" :column="1">
      <el-descriptions-item label="常用响应式函数">
        <el-button
          v-for="path in ['v-bind','v-on', 'v-model', 'v-if', 'v-for']"
          @click="handleClick(`${path}`)"
          round
          :disabled="whiereIs === path"
        >{{ path }}</el-button>
      </el-descriptions-item>
    </el-descriptions>
    
  </div>
  <div>
    <router-view v-slot="{ Component }">
      <Suspense>
        <template #default>
          <Component :is="Component"/>
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </router-view>
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
  router.push('/vue/directive/' + path)
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