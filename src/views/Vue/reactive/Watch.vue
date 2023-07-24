<template>
  <el-descriptions title="watch(<input>,callback((<oldVal>, <newVal>) => {}))" :column="1">
    <el-descriptions-item label="参数">
      <br>
      1. {{`\<input\>`}}可以是一个响应式对象，也可以是一个getter函数<br/>
      2. callback()函数接收两个参数，分别是旧值和新值<br/>
    </el-descriptions-item>
    <el-descriptions-item label="返回">
      一个停止侦听函数，调用它可以停止侦听
    </el-descriptions-item>
    <el-descriptions-item label="使用">
      可以监听一个响应式对象的变化，也可以监听一个getter函数的变化，当监听的对象发生变化时，callback()函数会被调用
    </el-descriptions-item>
  </el-descriptions>
  <PCodeBlockDisplay
    :code="code"
    title="Computed.vue"
    toc="language-html"
  >
    <div>
      <el-button name="unChangableBtn" @click="(a as any)++">{{ 'a=' + a }}</el-button>
      <br/>
      <br/>
      <label for="user">输入人数:</label><br/>
      <input type="number" v-model="count" name="user"/>
      <p v-for="(user,idx) in users" :key="idx">{{ (user as User).name }}</p>
      <p v-if="count<=0">人数不能小于1</p>
    </div>
  </PCodeBlockDisplay>
</template>

<script lang="ts">
import { Vue, Options} from 'vue-class-component';
import PCodeBlockDisplay from '@/components/PrimCodeBlock/PCodeBlockDisplay/PCodeBlockDisplay.vue';
import axios from 'axios'

type User = {
  name:string,
  id:number
}
type Users = User[] | ''

@Options({
  components:{
    PCodeBlockDisplay
  },
  watch:{
    a(newVal, oldVal, onCleanUp){
      console.log(newVal, oldVal)
    },
    count(newVal, oldVal){
      if(this.count <= 0){
        this.users = ''
        return
      }else{
        axios.get('/api/user/'+newVal)
        .then(res => {
          this.users = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  }
})
export default class Watch extends Vue {
  get a(){
    return 1
  }
  count = 0
  users:Users = ''

  get code() {
    return `
        <scripts setup>
        import { watch, ref } from 'vue';
        import { UserName } from "@/api/user.js"
        // a不是响应式对象，watch无法监听其状态
        let a = 0
        // count是响应式对象，watch可以监听其状态
        let count = ref(0)
        let users = ref('')

        watch(() => a, async (newVal, oldVal) => {
          console.log(newVal, oldVal)
        })
        watch(count, async (newVal, oldVal) => {
          if(count.value <= 0){
            userName.value = ''
            return
          }else{
            axios.get('/api/user/'+this.count)
            .then(res => {
              this.users = res.data.data
            })
            .catch(err => {
              console.log(err)
            })
          }
        })
        </scripts>

        <template>
          <div>
            <el-button @click="a++">{{ 'a=' + a }}</el-button>
            <br/>
            <label for="user">输入人数:</label>
            <input v-model="count" type="number" name="user"/>
            <p v-if="count<=0">请输入人数，人数不得小于1</p>
            <p v-for="(user,idx) in users" :key="idx">{{ user.name }}</p>
          </div>
        </template>
        `
  }
}
</script>