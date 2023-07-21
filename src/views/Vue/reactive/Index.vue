<template>
  <el-descriptions title="vue 响应式" :column="1" class="title">
    <el-descriptions-item label="原理">
      <code>new Proxy(target, handler)</code>
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
  <router-view></router-view>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class VueView extends Vue {
  handleClick(path:string){
    this.$router.push('/vue/react/' + path)
  }
  get whiereIs(){
    return (this.$route.path).split('/').pop()
  }
}
</script>

<style scoped lang="scss">
.title {
  padding: 1em 0 0 0;
}
</style>