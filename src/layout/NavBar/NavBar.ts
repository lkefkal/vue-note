import { Vue, Options } from 'vue-class-component';
import ElMenuGroup from '@/components/ElMenuGroup/ElMenuGroup.vue'

@Options({
  components: {
    ElMenuGroup
  }
})
export default class NavBar extends Vue {
  activePath = ''
  handleOpen(key: string) {
    if(this.isCollapse) return
    switch(key) {
      case '1':
        this.$router.push('/vue')
        break
      case '1-2':
        this.$router.push('/vue/react')
        break
      case '1-3':
        this.$router.push('/vue/directive')
        break
      case '1-4':
        this.$router.push('/vue/component')
        break
      case '2':
        this.$router.push('/router')
        break
      default:
        break
    }
  }
  handleClose() {
    if(this.isCollapse) return
    this.$router.push({name:'home'})
  }
  handleClick(path: string) {
    this.$router.push(path)
  }
  isCollapse = false
  handleWindowSize() {
    if(window.innerWidth < 768) {
      this.isCollapse = true
    } else {
      this.isCollapse = false
    }
  }
  mounted() {
    this.handleWindowSize()
    window.addEventListener('resize', this.handleWindowSize)
  }
}
