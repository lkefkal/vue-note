<template>
<el-menu
  @open="handleOpen"
  @close="handleClose"
  unique-opened
  :collapse="isCollapse"
  class="el-menu-vertical-demo"
  :router="true"
>
  <el-card shadow="always">
    <router-link to="/vue">

    <a class="home-link">
      <img src="@/assets/logo.svg" class="title-image"/>
      <span  v-if="!isCollapse">VUE-NOTE</span> 
    </a>
    </router-link>
  </el-card>
  <el-sub-menu index="/vue">
    <template #title>
      <img src="@/assets/logo.svg" class="title-image"/>
      <span>Vue.js</span>
    </template>
    <el-menu-item index="/vue/syntax" >模板语法</el-menu-item>
    <el-sub-menu index="/vue/react">
      <template #title>响应式</template>
      <ElMenuGroup
        :menuList="['reactive','ref', 'computed', 'watch']"
        :parentPath="'/vue/react'"
        ></ElMenuGroup>
    </el-sub-menu>
    <el-sub-menu index="/vue/directive" >
      <template #title>指令</template>
      <ElMenuGroup
        :menuList="['v-bind','v-on', 'v-model', 'v-if', 'v-for']"
        :parentPath="'/vue/directive'"
        ></ElMenuGroup>
    </el-sub-menu>
    <el-sub-menu index="/vue/component">
      <template #title>组件</template>
      <ElMenuGroup
        :menuName="['参数传递','插槽','事件注册','生命周期']"
        :menuList="['props','slot', 'event', 'lifecycle']"
        :parentPath="'/vue/component'"
        ></ElMenuGroup>
    </el-sub-menu>
  </el-sub-menu>
  <el-sub-menu index="/router">
    <!-- <el-icon><icon-menu /></el-icon> -->
    <template #title>
      <img src="@/assets/logo.svg" class="title-image"/>
      <span>Vue-router</span>
    </template>
    <el-menu-item
      index="/router/start"
      >Quick start</el-menu-item>
    <el-menu-item index="/router/path">
        <span>路由匹配</span>
    </el-menu-item>
  </el-sub-menu>
  <el-sub-menu index="3" disabled>
    <!-- <el-icon><document /></el-icon> -->
    <template #title>
      <el-icon style="padding: 0;width: auto;"><ElementPlus /></el-icon>  
      <span>Element-Plus</span>
    </template>
  </el-sub-menu>
  <el-sub-menu index="4" disabled>
    <!-- <el-icon><setting /></el-icon> -->
    <template #title>
      <img src="@/assets/Typescript.png" class="title-image"/>
      <span>Move to TypeScrtpt</span>
    </template>
  </el-sub-menu>
  <el-sub-menu index="/modules">
    <template #title>
      <span>Modules</span>
    </template>
    <el-menu-item
      index="/modules/quill"
      >quill</el-menu-item>
  </el-sub-menu>
</el-menu>
</template>

<script lang="ts" src="./NavBar.ts" />

<style scoped>
.home-link {
  color: black;
  &:hover{
    cursor: pointer;
  }
}
.title-image {
  object-fit: cover;
  height: 1em;
  margin-top: 0.1em;
  margin-right: 0.5em;
}
.el-menu-vertical-demo{
  /* width: 17em; */
  height: 100%;
  overflow-y: scroll;
}

/* @media (max-width: 768px) {
  .el-menu-vertical-demo{
    width: auto;
  }
} */
</style>