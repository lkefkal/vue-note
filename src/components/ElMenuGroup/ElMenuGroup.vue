<template>
<el-menu-item
  v-for="(path,index) in menuList"
  :index="parentPath+'/'+path"
  :disabled="activePath === path"
  :key="index"
>{{ menuName ? menuName[index] : path }}</el-menu-item>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  props: {
    menuName:{
      type: Array as () => string[],
      default: undefined
    },
    menuList: {
      type: Array as () => string[],
      required: true
    },
    parentPath: {
      type: String,
      required: true
    }
  }
})
export default class ElMenuGroup extends Vue {
  menuList!: string[]
  parentPath!: string
  menuName?: string[]
  get activePath(): string {
    return this.$route.path.split('/').pop()!
  }
}

</script>