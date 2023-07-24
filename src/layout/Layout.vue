<template>
    <div class="container">
      <div class="aside">
        <NavBar/>
      </div>
      <div class="container-inner">
        <div class="container-header">
          <el-breadcrumb :separator-icon="ArrowRight" class="container-header-path">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in pathName" :key="index" :to="{ path: findPath(item) }">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
          <a href="https://github.com/lkefkal/vue-note" target="_blank">
            <img src="@/assets/fluidicon.png" class="git-icon" title="github" alt="github"/>
          </a>
          <el-divider class="divider"/>
        </div>
        <div class="main" >
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { markRaw } from 'vue';
import NavBar from "./NavBar/NavBar.vue"
import { ArrowRight } from '@element-plus/icons-vue'
const NonReactiveArrowRight = markRaw(ArrowRight);
@Options({
  components: {
    NavBar
  }
})
export default class Layout extends Vue {
  ArrowRight = NonReactiveArrowRight
  findPath(item:string){
    var path = this.$route.path
    var index = path.indexOf(item)
    return path.slice(0,index+item.length)
  }
  get pathName(){
    return (this.$route.path).split('/').slice(1,)
  }
}
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  widows: 100%;
  display: flex;
  flex-direction: row;
  &-inner {
    width: 100%;
    overflow-y: scroll;
    position: relative;
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
  &-header {
    position: relative;
    padding: 0 1.5em;
    top: 0;
    position: sticky;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.8), rgb(255, 255, 255));
    z-index: 1;
      &-path {
        display: inline-block;
        height: 3em;
        line-height: 3em;
      }
      & a {
        position: absolute;
        top: 0.5em;
        right: 1em;
      }
  }
}
.divider{
  margin:0;
}

.main {
  padding: 0 2rem;
  height: 100%;
}
.git-icon{
  width: 2rem;
  height: 2rem;
  margin: 0 1.5rem 0 0;
}
</style>
