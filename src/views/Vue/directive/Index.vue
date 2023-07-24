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
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
  components: {
  }
})
export default class Index extends Vue {
  handleClick(path: string) {
    this.$router.push('/vue/directive/' + path)
  }
  get whiereIs() {
    return this.$route.path.split('/').pop()
  }
}

</script>

<style scoped>
.container {
  padding-top: 1em;
}
</style>