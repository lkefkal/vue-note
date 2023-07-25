<template>
  <p>quill</p>
  <p>{{ count }}</p>
  <div>
    <loading 
      :active="isLoading"
      :on-cancel="onCancel"
      :is-full-page="fullPage"/>
    <button @click.prevent="handleClick">fetch Data</button>
  </div>
  <el-button @click="$store.commit('increment')">+ 1</el-button>
  <el-button @click="$store.commit('decrement')">- 1</el-button>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Loading from 'vue-loading-overlay';

@Options({
  components: {
    Loading
  },
})
export default class QuillView extends Vue {
  fullPage = true
  $store: any;
  handleClick() {
    this.$store.commit('doRouting')
    setTimeout(() => {
      this.$store.commit('doneRouting')
    }, 1000);
  }
  get isLoading(){
    return this.$store.state.isRouting
  }
  onCancel() {
    console.log('User cancelled the loader.')
  }
  get count(){
    return this.$store.state.count
  }
}
</script>