<template>
  <div class="container">
    <template v-for="{title,code,fileName} in props.info">
      <h1 v-if="title">{{ title }}</h1>
      <div class="code-block">
        <p>{{ fileName }}</p>
        <highlightjs :code="code.replace(/scripts/g, 'script')" autodetect class="code-text"></highlightjs>
      </div>
    </template>
  </div>
</template>

<script setup>

const props = defineProps([
  'info'
])
</script>

<style scoped>
.container{
  display: block;
  height: auto;
}

.code-block{
  position: relative;
  min-width: 15em;
}
.code-block p{
  position: absolute;
  right: 1em;
}
</style>