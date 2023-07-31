<template>
    <div class="container">
      <div class="aside">
        <NavBar/>
      </div>
      <div class="container-inner">
        <div class="container-header">
          <span v-if="shouldShowTypeOne">
            <el-breadcrumb :separator-icon="ArrowRight" class="container-header-path">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="(item,index) in pathName" :key="index" :to="{ path: findPath(item) }">{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
            <a href="https://github.com/lkefkal/vue-note" target="_blank">
              <img src="@/assets/fluidicon.png" class="git-icon" title="github" alt="github"/>
            </a>
          </span>
          <span v-else style="line-height: 3em;">
            <el-button :class="isInHomePage && 'active'" @click="$router.push('/tsNote/challenge')">
              <el-icon><HomeFilled /></el-icon>
            </el-button>
            <!-- <button @click="handleTest">test</button> -->
            <span v-for="(val,idx) in quizPages">
              <el-button
                :class="'path-btn ' + ($route.path.match((val as [string,string])[1]) && 'active')"
                @click="handleClickPathBtn((val as Array<string>)[1])"
                :disabled="$route.path.match((val as [string,string])[1]) !== null"
                >
                {{ (val as [string,string])[0] }}
                <button class="path-btn-cancel" @click="handleCancel((val as [string,string]), $event)">
                  <el-icon class="path-btn-cancel-icon"><CloseBold /></el-icon>
                </button>
              </el-button>
            </span>
          </span>
          <el-divider class="divider"/>
        </div>
        <div class="main" >
          <loading v-model:active="isLoading"
            :is-full-page="true"
          />
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
import Loading from 'vue-loading-overlay';

const NonReactiveArrowRight = markRaw(ArrowRight);
@Options({
  components: {
    NavBar,
    Loading
  }
})
export default class Layout extends Vue {
  ArrowRight = NonReactiveArrowRight
  $store: any;
  findPath(item:string){
    var path = this.$route.path
    var index = path.indexOf(item)
    return path.slice(0,index+item.length)
  }
  get pathName(){
    return (this.$route.path).split('/').slice(1,)
  }
  get isLoading(){
    return this.$store.state.isRouting
  }
  get shouldShowTypeOne(){
    return !this.$route.path.match(/\/tsNote\/challenge/)
  }
  get isInHomePage(){
    return this.$route.path.match(/\/tsNote\/challenge$/)
  }
  get quizPages(){
    return Array.from(this.$store.state.quizPageCache)
  }
  handleClickPathBtn(path: string){
    this.$router.push(path)
  }
  handleCancel(val:[string,string], event:Event){
    event.stopPropagation()
    if(val[1] === this.$route.path.split('/').pop()){
      this.$router.push('/tsNote/challenge')
    }
    this.$store.commit('deleteQuizCache',{title:val[0]})
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
  padding: 1em 2rem;height: 100%;
}
.git-icon{
  width: 2rem;
  height: 2rem;
  margin: 0 1.5rem 0 0;
}

.path-btn {
  margin: 0;
  padding: 0 0.2em 0 0.4em;
  height: 1.7em;
  color: black;
  &-cancel {
    margin-left: 0.5em;
    border: 0;
    height: 1.5em;
    width: 1.5em;
    background: transparent;
    border-radius: 1em;
    position: relative;
    &:hover{
      background: rgba(128, 128, 128, 0.539);
    }

    &-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
.active {
  background: rgba(128, 128, 128, 0.539);
}
</style>
