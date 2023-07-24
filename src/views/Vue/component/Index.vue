<template>
  <div v-if="isInHome" style="padding:0 1.5rem">
    <h1>
      组件基础
    </h1>
    <p>使用{{ '<script setup></script>' }}构建的vue组件</p>
    <PCodeBlock :code="code1" title="App.vue"/>
    <p>使用{{ 'setup 函数' }}构建的js组件</p>
    <PCodeBlock :code="code2" title="App.js" toc="language-js"/>
  </div>
  <div class="router-ctn">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import PCodeBlock from '@/components/PrimCodeBlock/PCodeBlock/PCodeBlock.vue';

@Options({
  components:{
    PCodeBlock
  }
})
export default class Component extends Vue {
  get isInHome(){
    return /\/component$/.test(this.$route.path)
  }
  get code1(){
    return (
      `<scripts setup>
        import { ref } from 'vue'

        const count = ref(0)
        </scripts>

        <template>
          <button @click="count++">You clicked me {{ count }} times.</button>
        </template>
        `
    )
  }
  get code2(){
    return(
      `
      import { ref } from 'vue'
        export default {
          setup() {
            const count = ref(0)
            return { count }
          },
          template: \`
            <button @click="count++">
              You clicked me {{ count }} times.
            </button>
            \`
          // 或者 \`template: '#my-template-element'\`
        }
        `
    )
  }
}
// import { ref,computed } from 'vue';
// import { useRoute,useRouter } from 'vue-router';
// import CodeBlock from '@/components/CodeBlock/CodeBlock.vue';

// const route = useRoute()
// const router = useRouter()
// const isInHome = computed(() => /\/component$/.test(route.path))

// const code1 = 
// `
// <scripts setup>
// import { ref } from 'vue'

// const count = ref(0)
// </scripts>

// <template>
//   <button @click="count++">You clicked me {{ count }} times.</button>
// </template>
// `
// const code2 =
// `
// import { ref } from 'vue'

// export default {
//   setup() {
//     const count = ref(0)
//     return { count }
//   },
//   template: \`
//     <button @click="count++">
//       You clicked me {{ count }} times.
//     </button>
//     \`
//   // 或者 \`template: '#my-template-element'\`
// }
// `
// const info = [
//   {
//     title: '使用setup 构建的单文件组件',
//     fileName: 'App.vue',
//     code: code1
//   },
//   {
//     title: '不使用setup 构建的js组件',
//     fileName: 'App.js',
//     code: code2
//   }
// ]
</script>
