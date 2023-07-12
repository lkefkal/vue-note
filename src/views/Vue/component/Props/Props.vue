<template>
<el-tabs v-model="activePannel">
  <el-tab-pane label="直接传递" name="1">
    <Directly></Directly>
  </el-tab-pane>
  <el-tab-pane label="透传属性" name="2">
    <Cross></Cross>
  </el-tab-pane>
  <el-tab-pane label="依赖注入" name="3">
    <Provide></Provide>
  </el-tab-pane>
  
</el-tabs>
</template>

<script setup>
import Directly from './Directly.vue';
import Cross from './Cross.vue';
import Provide from './Provide.vue';
import { ref } from 'vue';

const activePannel = ref('1');

</script>