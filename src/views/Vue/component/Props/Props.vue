<template>
<el-tabs v-model="activePannel">
  <el-tab-pane label="基础" name="1">
    <BaseView></BaseView>
  </el-tab-pane>
  <el-tab-pane label="直接传递" name="2">
    <Directly></Directly>
  </el-tab-pane>
  <el-tab-pane label="透传属性" name="3">
    <Cross></Cross>
  </el-tab-pane>
  <el-tab-pane label="依赖注入" name="4">
    <Provide></Provide>
  </el-tab-pane>
  
</el-tabs>
</template>

<script lang="ts">
import Directly from './Directly.vue';
import Cross from './Cross.vue';
import Provide from './Provide.vue';
import BaseView from './BaseView.vue';
import { Vue, Options } from 'vue-class-component';

@Options({
  components: {
    Directly,
    Cross,
    Provide,
    BaseView
  }
})
export default class Props extends Vue{
  activePannel = '1';
}
</script>