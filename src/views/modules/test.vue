<template>
  <p>
    test
  </p>
  <slot name="test" :user="user">
    {{ user.name }}
  </slot>
</template>

<script setup>
import { ref } from 'vue';
let user = ref({
  name: 'quill',
  age: 12
})
</script>