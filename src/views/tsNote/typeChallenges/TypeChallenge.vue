<template>
  <div v-if="isInHome">
    <p>类型体操</p>
    <el-row :gutter="10">
      <el-col :span="6"
        v-for="(quiz, idx) in quizzes"
        :key="idx"
      >
        <el-card
          shadow="hover" 
          class="card-btn"
          @click="handleClick(quiz)"
          > 
          {{ quiz.title }} 
        </el-card>
      </el-col>
    </el-row>
  </div>  
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
</router-view>
</template>

<script lang="ts" src="./TypeChallenge.ts"></script>

<style scoped lang="scss">
.card-btn {
  cursor: pointer;
}
</style>