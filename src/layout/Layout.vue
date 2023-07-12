<template>
    <div class="container">
      <div class="aside">
        <NavBar/>
      </div>
      <div class="inner-container">
        <div class="header">
          <el-breadcrumb :separator-icon="ArrowRight" class="path-container">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in pathName" :key="index" :to="{ path: findPath(item) }">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
          <a href="https://github.com/lkefkal/vue-note" target="_blank">
            <img src="@/assets/fluidicon.png" class="git-icon" title="github" alt="github"/>
          </a>
        </div>
        <el-divider class="divider"/>
        <div class="main" >
          <router-view></router-view>
        </div>
      </div>
    </div>
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
.container {
  height: 100%;
  widows: 100%;
  display: flex;
  flex-direction: row;
}
.inner-container{
  width: 100%;
}
.header{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
}

.path-container {
  padding: 1.5rem 1rem;
}
.divider{
  width: 90%;
  margin:0 5%;
}

.git-icon{
  width: 2rem;
  height: 2rem;
}
</style>
