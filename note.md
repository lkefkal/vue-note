# VUE 笔记

## 1.VUE基础

### 1.1 模板语法（组合式API）
> HelloWorld.vue
  ```
  /**
    * 显式定义setup
    */
  <script>
  export default {
    /**定义组件的名字*/
    name: 'HelloWorld',
    /**
     * setup函数
     * return中返回的数据和方法将会暴露在组件中，可以在模板中使用
     */
    setup() {
      return {
        msg:'HelloWorld'
      }
    }
  }
  </script>

  /**
   * 与上方写法等价
   * <script setup>
   * const msg = 'HelloWorld'
   * </script>
   */

  /**
   * template是组件的HTML块
   * 使用组件时，会替换掉组件标签，实际插入DOM的是template中的内容
   */
  <template>
  /** 插值语法是双层花括号 {{ }}， 内可使用js语法 */
    <p class="a">{{ msg.raplace(/oW/, 'o W') }}</p>
  </template>
  /**
   * style是组件的样式块
   * 与css语法相同
   */
  <style scoped>
    .a {
      color: red;
    }
  </style>
  ```

对于这样一个单文件组件，可以在其他组件中使用，如下：
> App.vue
  ```
  <template>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </template>

  <script>
  import HelloWorld from './path/to/HelloWorld.vue'
  export default {
    name: 'App',
    components: {
      HelloWorld
    }
  }
  </script>
  ```

### 1.2 响应式数据
  组合式API中定义响应式数据，常用的函数有：
  - ref：返回一个响应式的可更改的ref对象[^1] 
  - reactive：返回一个对象的响应式代理
  - computed: 接受一个函数作为getter， 返回一个只读的ref对象[^2]
  - watch: 监听一个响应式数据的变化，接受一个函数作为回调，当监听的数据发生变化时，会调用回调函数

[^1]: new Proxy({value: val}, handler)， 在语法中使用时需要使用ref.value来进行赋值和读取，在 {{}} 中，ref会被浅解包，所以可以不用加.value
[^2]: 可以手动设置setter使得返回的ref可以更改

> ref() & reactive()
  ```
  <script>
  import { reactive, ref } from 'vue'
  export default {
    setup() {
      const state = reactive({
        count: 0
      })
      const count = ref(0)
      const increment = () => {
        state.count++
        count.value++
      }
      return {
        state,
        count,
        increment
      }
    }
  }
  </script>
  
  <template>
    <div>
      <p>{{ state.count }}</p>
      <p>{{ count }}</p>
      <!-- 为button设置click的监听器，当点击时，调用increment函数 -->
      <button @click="increment">点击</button>
    </div>
  </template>
  ```

> computed()
  ```
  <script>
  import { computed } from 'vue'
  export default {
    setup() {
      const count = ref(0)
      const double = computed(() => count.value * 2)
      return {
        count,
        double
      }
    }
  }
  </script>

  <template>
    <div>
      <p>{{ count }}</p>
      <p>{{ double }}</p>
      <button @click="count++">点击</button>
    </div>
  </template>
  ```
> watch()
  ```
  <script>
  import { ref, watch } from 'vue'
  export default {
    setup() {
      const count = ref(0)
      const stop = watch(count, (val, oldVal) => {
        console.log(val, oldVal)
      })
      return {
        count,
        stop
      }
    }
  }
  </script>

  <template>
    <div>
      <p>{{ count }}</p>
      <button @click="count++">点击</button>
    </div>
  </template>
  ```

### 1.3 常用指令
VUE中内置了一些指令用于提高开发效率，常用的指令有：
- v-bind
- v-on
- v-model
- v-if & v-else-if & v-else
- v-for
#### 1.3.1 v-bind
v-bind可以将一个变量与标签中的属性值进行绑定
```
<script>
export default {
  setup() {
    const url = 'https://www.baidu.com'
    return {
      url
    }
  }
}
</script>

<template>
  <!-- 绑定href属性 -->
  <a v-bind:href="url">百度</a>
</template>
```
v-bind可以简写为" : "", 也可与响应式数据配合使用

```
<script>
import { ref } from 'vue'
export default {
  setup() {
    const url = ref('https://www.baidu.com')
    return {
      url
    }
  }
}
</script>
<template>
  <!-- 绑定href属性 -->
  <a :href="url">百度</a>
</template>
```
#### 1.3.2 v-on
v-on可以将一个函数与标签中的事件进行绑定
```
<script>
export default {
  setup() {
    const handleClick = () => {
      console.log('click')
    }
    return {
      handleClick
    }
  }
}
</script>

<template>
  <!-- 绑定click事件 -->
  <button v-on:click="handleClick">点击</button>
</template>
```
v-on可以简写为" @ "
```
<template>
  <!-- 绑定click事件 -->
  <button @click="handleClick">点击</button>
</template>
```

#### 1.3.3 v-model
v-model可以将一个变量与标签中的value属性进行双向绑定
```
<script>
import { ref } from 'vue'
export default {
  setup() {
    const msg = ref('')
    return {
      msg
    }
  }
}
</script>

<template>
  <!-- 绑定value属性 -->
  <input v-model="msg"/>
</template>
```
以上等价于
```
<template>
  <!-- 绑定value属性 -->
  <input :value="msg" @input="msg = $event.target.value"/>
</template>
```
#### 1.3.4 v-if & v-else-if & v-else
v-if可以根据一个变量的值来判断是否渲染标签
语法与jss if语句相同
```
<script>
import { ref } from 'vue'
export default {
  setup() {
    const flag = ref(true)
    return {
      flag
    }
  }
}
</script>

<template>
  <div v-if="flag">显示</div>
  <div v-else>隐藏</div>
</template>
```

#### 1.3.5 v-for
v-for可以根据一个数组(可枚举对象)的值来渲染标签
语法与js for语句相同
```
<script>
export default {
  setup() {
    const arr = [1, 2, 3]
    return {
      arr
    }
  }
}
</script>

<template>
  <div v-for="item in arr">{{ item }}</div>
  <!-- 也可以使用v-for的第二个参数index
    <div v-for="(item, index) in arr">{{ item }}</div>
    -->
</template>
```
### 1.4 组件传参
#### 1.4.1 向子组件传参(prop)
与HTML的属性写法类似
需要先在子组件中定义props，然后在父组件中使用子组件时，使用v-bind:propName="value"的形式传入
> Child.vue
  ```
  <script>
  export default {
    name: 'Child',
    props: {
      msg: {
        /**可以对传入的参数进行类型验证 */
        type: String,
        /**可以设置默认值 */
        default: 'default msg'
      }
    }
  }
  </scrip>
  ```
> Parent.vue
  ```
  <template>
    <Child :msg="msg"/>
  </template>
  ```

### 1.5 生命周期
  组合式API中，生命周期函数的使用方法如下：
  ```
  <script>
  import { onMounted, onUpdated, onUnmounted } from 'vue'
  export default {
    setup() {
      // 在组件实例初始化完成、props解析完成之后, script setup执行之前调用
      onBeforeCreate(() => {
        console.log('before create')
      })
      // script setup执行之后，挂载还未开始时调用
      onCreated(() => {
        console.log('created')
      })
      // 组件已经完成了响应式设置，但是还没有创建DOM节点时调用
      onBeforeMount(() => {
        console.log('before mount')
      })
      // 组件本身以及全部的同步子组件挂载完成时调用
      onMounted(() => {
        console.log('mounted')
      })
      // 组件内响应式数据发生变化，,组件更新之前调用
      onBeforeUpdate(() => {
        console.log('before update')
      })
      // 组件更新之后调用
      onUpdated(() => {
        console.log('updated')
      })
      //组件卸载后调用
      onUnmounted(() => {
        console.log('unmounted')
      })
    }
  }
  </script>
  ```
  # vue-roter
  ## 1.路由基础
  ### 1.1 路由的基本使用
  > main.js
  ```
  import { createApp } from 'vue'
  import App from './App.vue'
  import router from './router'
  createApp(App).use(router).mount('#app')
  ```
  > router/index.js
  ```
  import { createRouter, createWebHistory } from 'vue-router'
  import Home from '../views/Home.vue'
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router
  ```

  ### 1.2 路由的嵌套
  > router/index.js
  ```
  import { createRouter, createWebHistory } from 'vue-router'
  import Home from '../views/Home.vue'
  import About from '../views/About.vue'
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      children: [
        {
          path: 'a',
          name: 'A',
          component: () => import(/* webpackChunkName: "about" */ '../views/A.vue')
        },
        {
          path: 'b',
          name: 'B',
          component: () => import(/* webpackChunkName: "about" */ '../views/B.vue')
        }
      ]
    }
  ]
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router
  ```
  > About.vue
  ```
  <template>
    <div>
      <h1>About</h1>
      <router-view></router-view>
    </div>
  </template>

  <script>
  export default {
    name: 'About'
  }
  </script>
  ```
  > A.vue
  ```
  <template>
    <div>
      <h1>A</h1>
    </div>
  </template>
  <script>
  export default {
    name: 'A'
  }
  </script>
  ```