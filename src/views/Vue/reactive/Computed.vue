<template>
  <el-descriptions title="computed(<input>)" :column="1">
    <el-descriptions-item label="参数">
      函数 Function 作为 getter 函数
    </el-descriptions-item>
    <el-descriptions-item label="返回">
      一个ref对象，其value属性为函数返回值
    </el-descriptions-item>
    <el-descriptions-item label="使用">
      同ref
    </el-descriptions-item>
    <el-descriptions-item label="特性">
      <div>
        1. computed返回的是一个只读的ref对象，其value属性为函数返回值<br>
        2. computed的响应式体现在computed函数会在其依赖的ref对象发生变化时重新执行<br>
        3. 如果在初始化时手动为computed设置getter和setter，那么computed的值不在为只读

      </div>
    </el-descriptions-item>
  </el-descriptions>
  <p>非响应式对象</p>
  <PCodeBlockDisplay
    :code="code1"
    title="Computed.vue"
    toc="language-html"
  >
  <div class="display">
    <p>{{ 'b=' + b }}</p>
    <p>{{ 'a=1' }}</p>
    <el-button @click="b++" name="1st-btn">+1</el-button>
    <br/>
    <el-button @click="a++">+1</el-button>
  </div>
  </PCodeBlockDisplay>
  <br/>
  <br/>
  <p>响应式对象 & computed设置setter</p>
  <PCodeBlockDisplay
    :code="code2"
    title="Computed.vue"
    toc="language-html"
  >
  <div class="display">
    <p>{{ 'count=' + count }}</p>
    <p>{{ 'countPlusOne=' + countPlusOne }}</p>
    <p>{{ 'doubleCount=' + doubleCount }}</p>
    <el-button @click="count++">count+1</el-button>
    <br/>
    <el-button @click="(countPlusOne as any)++">countPlusOne+1</el-button>
    <br/>
    <el-button @click="doubleCount++">doubleCount+1</el-button>
  </div>
  </PCodeBlockDisplay>
</template>

<script lang="ts" >
import PCodeBlockDisplay from '@/components/PrimCodeBlock/PCodeBlockDisplay/PCodeBlockDisplay.vue';
import { Vue, Options } from 'vue-class-component';
@Options({
  components: {
    PCodeBlockDisplay
  }
})
export default class Computed extends Vue{
  get a(){
    return 1
  }
  get b(){
    return this.a + 1
  }
  get code1(){
    return `
        <scripts setup>
        import { computed } from 'vue'
        let a = 1
        const b = computed(() => a + 1)
        </scripts>

        <template>
          <div class="display">
            <p>{{ 'b=' + b }}</p>
            <p>{{ 'a=1' }}</p>
            // computed返回的是只读的ref
            // 所以无法直接修改其值
            <button @click="b++">+1</button>
            // a是普通变量
            // 所以computed无法监听到其变化
            <button @click="a++">+1</button>
          </div>
        </template>
        `
  }
  count = 0
  get doubleCount (){
    return this.count * 2
  }
  set doubleCount (val){
    this.count = val / 2
  }
  get countPlusOne(){
    return this.count + 1
  }
  get code2(){
    return `
        <scripts setup>
        import { computed, ref } from 'vue'
        let count = ref(0)
        const countPlusOne = computed(() => count.value + 1)
        const doubleCount = computed(() => {
          get: () => count.value * 2
          /** 为computed设置setter */
          set: (val) => {
            count.value = val / 2
          }
        })
        const addCount = () => {
          count.value += 1
        }
        </scripts>

        <template>
          <div class="display">
            <p>{{ 'count=' + count }}</p>
            <p>{{ 'countPlusOne=' + countPlusOne }}</p>
            <p>{{ 'doubleCount=' + doubleCount }}</p>
            <button @click="count++">+1</button>
            <!-- computed返回的是只读ref，所以此按钮无效 -->
            <button @click="countPlusOne++">+1</button>
            <!-- 为computed设置了setter,所以可以直接修改其值-->
            <button @click="doubleCount++">+1</button>
          </div>
        </template>
        `
  }
}
</script>
