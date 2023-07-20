<template>
  <p>quill</p>
  <Test>
    <template #test="{ user }">
      <p>{{ `name:${user.name}, age:${user.age}` }}</p>
    </template>
  </Test>
</template>

<script setup>
import Test from './test.vue'
import { ref } from 'vue';

</script>