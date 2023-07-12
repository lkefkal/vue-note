<template>
<el-menu-item
  v-for="(path,index) in menuList"
  :index="menuIndex+(index+1)"
  @click="handleClick(`${parentPath}/${path}`)"
  :disabled="activePath === path"
  :key="menuIndex+index"
>{{ path }}</el-menu-item>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter,useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

const props = defineProps(['menuList','parentPath','menuIndex'])

const activePath = computed(() => {
      const route = useRoute()
      return route.path.split('/').pop()
    })

const handleClick = (path) => {
  router.push(path)
}
</script>