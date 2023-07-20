<template>
<el-menu
  @open="handleOpen"
  @close="handleClose"
  unique-opened
  :collapse="isCollapse"
  class="el-menu-vertical-demo"
>
  <el-card shadow="always">
    <a @click="handleClick('/home')" class="home-link">
      <img src="@/assets/logo.svg" class="title-image"/>
      <span  v-if="!isCollapse">VUE-NOTE</span> 
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
      class="no-padding"
      >模板语法</el-menu-item>
    <el-sub-menu index="1-2" class="no-padding">
      <template #title>响应式</template>
      <ElMenuGroup
        :menuList="['reactive','ref', 'computed', 'watch']"
        :parentPath="'/vue/react'"
        :menuIndex="'1-2-'"
        ></ElMenuGroup>
    </el-sub-menu>
    <el-sub-menu index="1-3" class="no-padding">
      <template #title>指令</template>
      <ElMenuGroup
        :menuList="['v-bind','v-on', 'v-model', 'v-if', 'v-for']"
        :parentPath="'/vue/directive'"
        :menuIndex="'1-3-'"
        ></ElMenuGroup>
    </el-sub-menu>
    <el-sub-menu index="1-4" class="no-padding">
      <template #title>组件</template>
      <ElMenuGroup
        :menuList="['参数传递','插槽','事件注册','生命周期']"
        :parentPath="'/vue/component'"
        :menuIndex="'1-4-'"
        ></ElMenuGroup>
    </el-sub-menu>
  </el-sub-menu>
  <el-sub-menu index="2" class="no-padding">
    <!-- <el-icon><icon-menu /></el-icon> -->
    <template #title>
      <img src="@/assets/logo.svg" class="title-image"/>
      <span>Vue-router</span>
    </template>
    <el-menu-item
      index="2-1"
      @click="handleClick('/router/start')"
      class="no-padding"
      >Quick start</el-menu-item>
    <el-menu-item
      index="2-2"
      @click="handleClick('/router/path')"
      >
        <span>路由匹配</span>
    </el-menu-item>
  </el-sub-menu>
  <el-sub-menu index="3" disabled class="no-padding">
    <!-- <el-icon><document /></el-icon> -->
    <template #title>
      <el-icon style="padding: 0;width: auto;"><ElementPlus /></el-icon>  
      <span>Element-Plus</span>
    </template>
  </el-sub-menu>
  <el-sub-menu index="4" disabled class="no-padding">
    <!-- <el-icon><setting /></el-icon> -->
    <template #title>
      <img src="@/assets/Typescript.png" class="title-image"/>
      <span>Move to TypeScrtpt</span>
    </template>
  </el-sub-menu>
  <el-sub-menu index="5" class="no-padding">
    <template #title>
      <span>Modules</span>
    </template>
    <el-menu-item
      index="5-1"
      @click="handleClick('/modules/quill')"
      >quill</el-menu-item>
  </el-sub-menu>
</el-menu>
</template>

<script src="./NavBar.js" />

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

.no-padding {
  padding: 0;
}

/* @media (max-width: 768px) {
  .el-menu-vertical-demo{
    width: auto;
  }
} */
</style>