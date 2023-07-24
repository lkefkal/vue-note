import { Vue, Options } from 'vue-class-component';
import ElMenuGroup from '@/components/ElMenuGroup/ElMenuGroup.vue'

@Options({
  components: {
    ElMenuGroup
  }
})
export default class NavBar extends Vue {
  activePath = ''
  isCollapse = false
  handleOpen(key: string, keyPath: string[]):void {
    console.log(key, keyPath, 'opened')
  }
  handleClose(key: string, keyPath: string[]):void {
    console.log(key, keyPath, 'closed')
  }
  handleWindowSize() {
    if(window.innerWidth < 768) {
      this.isCollapse = true
    } else {
      this.isCollapse = false
    }
  }
  get defaultOpenedsMenu(): string[] {
    return this.$route.path.split('/').filter((item) => item !== '')
  }
  mounted() {
    this.handleWindowSize()
    window.addEventListener('resize', this.handleWindowSize)
  }
}
