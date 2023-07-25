<template>
  <p>quill</p>
  <p>{{ count }}</p>
  <el-button @click="$store.commit('increment')">+ 1</el-button>
  <el-button @click="$store.commit('decrement')">- 1</el-button>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class QuillView extends Vue {
  get count(){
    return this.$store.state.count
  }
}
</script>