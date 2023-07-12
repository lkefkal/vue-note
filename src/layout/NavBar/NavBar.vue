<template>
<el-menu
  @open="handleOpen"
  @close="handleClose"
  unique-opened
>
  <el-card shadow="always">
    <a @click="handleClick('/home')" class="home-link">
      <img src="@/assets/logo.svg" class="title-image"/>
      VUE-NOTE 
    </a>
  </el-card>
  <el-sub-menu index="1">
    <template #title>
      <img src="@/assets/logo.svg" class="title-image"/>
      <span>Vue.js</span>
    </template>
    <el-menu-item
      index="1-1"
      @click="handleClick('/vue/syntax')"
      >模板语法</el-menu-item>
    <el-sub-menu index="1-2">
      <template #title>响应式</template>
      <ElMenuGroup
        :menuList="['reactive','ref', 'computed', 'watch']"
        :parentPath="'/vue/react'"
        :menuIndex="'1-2-'"
        ></ElMenuGroup>
    </el-sub-menu>
    <el-sub-menu index="1-3">
      <template #title>指令</template>
      <ElMenuGroup
        :menuList="['v-bind','v-on', 'v-model', 'v-if', 'v-for']"
        :parentPath="'/vue/directive'"
        :menuIndex="'1-3-'"
        ></ElMenuGroup>
    </el-sub-menu>
    <el-sub-menu index="1-4">
      <template #title>组件</template>
      <ElMenuGroup
        :menuList="['参数传递','插槽','事件注册','生命周期']"
        :parentPath="'/vue/component'"
        :menuIndex="'1-4-'"
        ></ElMenuGroup>
    </el-sub-menu>
  </el-sub-menu>
  <el-menu-item index="2" disabled>
    <!-- <el-icon><icon-menu /></el-icon> -->
    <span>Vue-router</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <!-- <el-icon><document /></el-icon> -->
    <span>Element-Plus</span>
  </el-menu-item>
  <el-menu-item index="4" disabled>
    <!-- <el-icon><setting /></el-icon> -->
    <span>Move to TypeScrtpt</span>
  </el-menu-item>
</el-menu>
</template>

<script src="./NavBar.js">
import { ref } from 'vue';
let index = ref(0)
</script>

<style scoped>
.home-link {
  color: black;
}
.home-link:hover {
  cursor: pointer;
}
.title-image {
  object-fit: cover;
  height: 1em;
  margin-top: 0.1em;
  margin-right: 0.5em;
}
</style>