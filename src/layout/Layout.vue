<template>
    <el-container class="container">
      <el-aside class="aside">
        <NavBar/>
      </el-aside>
      <el-container>
        <el-header class="header">
          <el-breadcrumb :separator-icon="ArrowRight" class="path-container">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in pathName" :key="index" :to="{ path: findPath(item) }">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
          <a href="https://github.com/lkefkal/vue-note" target="_blank">
            <img src="@/assets/fluidicon.png" class="git-icon" title="github" alt="github"/>
          </a>
        </el-header>
        <el-divider class="divider"/>
        <el-main class="main" >
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup>
import NavBar from "./NavBar/NavBar.vue"
import { useRouter,useRoute } from 'vue-router'
import { computed } from "vue"

import { ArrowRight } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()

const findPath = (item) => {
  var path = route.path
  var index = path.indexOf(item)
  return path.slice(0,index+item.length)
}

const pathName = computed(() => {
  return (route.path).split('/').slice(1,)
})
</script>

<style scoped>
/* *{
  border: 1px solid red;
} */
.container {
  height: 100%;
}

.header{
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: space-between;
  align-items: center;
}

.path-container {
  padding: 1.5em 1em;
}
.divider{
  width: 90%;
  margin:0 5%;
}

.git-icon{
  width: 2em;
  height: 2em;
}
</style>
