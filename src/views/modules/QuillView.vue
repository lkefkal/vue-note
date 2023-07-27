<template>
  <p>quill</p>
  <div>
    <button @click="$store.commit('increment')">{{  count }}</button>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

export default class QuillView extends Vue {
  get count() {
    return this.$store.state.count;
  }
}
</script>