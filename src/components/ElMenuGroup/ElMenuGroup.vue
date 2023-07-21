<template>
<el-menu-item
  v-for="(path,index) in menuList"
  :index="(menuIndex+(index+1).toString())"
  @click="handleClick(`${parentPath}/${path}`)"
  :disabled="activePath === path"
  :key="menuIndex+index"
>{{ path }}</el-menu-item>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  props: {
    menuList: {
      type: Array as () => string[],
      required: true
    },
    parentPath: {
      type: String,
      required: true
    },
    menuIndex: {
      type: String,
      required: true
    }
  }
})
export default class ElMenuGroup extends Vue {
  menuList!: string[]
  parentPath!: string
  menuIndex!: number
  handleClick(path: string): void {
    this.$router.push(path)
  }
  get activePath(): string {
    return this.$route.path.split('/').pop()!
  }
}

</script>