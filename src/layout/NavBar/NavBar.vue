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
    <router-link to="/home">

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
      <el-menu-item index="/vue/component">组件基础</el-menu-item>
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
  <el-sub-menu index="/vuex" disabled>
    <template #title>
      <img src="@/assets/logo.svg" class="title-image"/>
      <span>VueX</span>
    </template>
  </el-sub-menu>
  <el-sub-menu index="/ElementPus" disabled>
    <!-- <el-icon><document /></el-icon> -->
    <template #title>
      <el-icon style="padding: 0;width: auto;"><ElementPlus /></el-icon>  
      <span>Element-Plus</span>
    </template>
  </el-sub-menu>
  <el-sub-menu index="/tsNote">
    <!-- <el-icon><setting /></el-icon> -->
    <template #title>
      <img src="@/assets/Typescript.png" class="title-image"/>
      <span>Move to TypeScrtpt</span>
    </template>
    <el-sub-menu index="/tsNote/base">
      <template #title>
          基础
      </template>
      <ElMenuGroup
        :menuName="['基础类型','接口','类','函数','泛型','枚举','类型推论','类型兼容性','高级类型']"
        :menuList="['baseType','interface', 'classes', 'function', 'generic', 'enum', 'typeInference', 'typeCompatibility', 'advancedType']"
        :parentPath="'/tsNote/base'"
        ></ElMenuGroup>
    </el-sub-menu>
    <el-menu-item index="/tsNote/cheatsheet">Cheat Sheet</el-menu-item>
    <el-menu-item index="/tsNote/challenge">类型体操</el-menu-item>
  </el-sub-menu>
  <el-sub-menu index="/modules">
    <template #title>
      <span>Modules</span>
    </template>
    <el-menu-item
      index="/modules/quill"
    > 
      quill
    </el-menu-item>
    <el-menu-item
      index="/modules/demo"
    >
      Demo
    </el-menu-item>
  </el-sub-menu>
</el-menu>
</template>

<script lang="ts" src="./NavBar.ts" />

<style scoped lang="scss">
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
  &::-webkit-scrollbar{
    width: 0.5em;
    &-thumb{
      background-color: darkgrey;
      border-radius: 4px;
      background-clip: padding-box; 
      border: 2px solid transparent; 
      &:hover{
        background-color: grey;
      }
    }
    &-track{
      background-color: lightgrey;
      border-radius: 4px;
    }
  }
}

</style>