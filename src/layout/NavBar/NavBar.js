import { useRouter,useRoute } from 'vue-router';
import ElMenuGroup from '@/components/ElMenuGroup/ElMenuGroup.vue'
import {ref} from 'vue'

export default{
  name: 'NavBar',
  computed: {
    activePath() {
      const route = useRoute()
      return route.path.split('/').pop()
    }
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    
    const handleOpen = (key, keyPath) => {
      // router.push('./111')
      // console.log(key, keyPath)
      if(isCollapse.value) return
      switch(key) {
        case '1':
          router.push('/vue')
          break
        case '1-2':
          router.push('/vue/react')
          break
        case '1-3':
          router.push('/vue/directive')
          break
        case '1-4':
          router.push('/vue/component')
          break
        case '2':
          router.push('/router')
          break
        default:
          break
      }
    }
    const handleClose = (key, keyPath) => {
      // console.log(key, keyPath)
      if(isCollapse.value) return
      router.push({name:'home'})
    }
    
    const handleClick = (path) => {
      router.push(path)
    }
    const isCollapse = ref(false)
    const handleWindowSize = () => {
      if(window.innerWidth < 768) {
        isCollapse.value = true
      } else {
        isCollapse.value = false
      }
    }
    return {
      handleOpen,
      handleClose,
      handleClick,
      isCollapse,
      handleWindowSize,
    }
  },
  mounted() {
    this.handleWindowSize()
    window.addEventListener('resize', this.handleWindowSize)
  }    
}


