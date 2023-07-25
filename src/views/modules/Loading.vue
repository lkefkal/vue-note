<template>
  <p>
    test
  </p>
  <slot name="test" :user="user">
    {{ user.name }}
  </slot>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class Loading extends Vue{
  user = {
    name: 'John Doe'
  }
}
</script>