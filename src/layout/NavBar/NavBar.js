import { useRouter,useRoute } from 'vue-router';
import ElMenuGroup from '@/components/ElMenuGroup/ElMenuGroup.vue'

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
        default:
          break
      }
    }
    const handleClose = (key, keyPath) => {
      // console.log(key, keyPath)
      router.push({name:'home'})
    }
    
    const handleClick = (path) => {
      router.push(path)
    }
    return {
      handleOpen,
      handleClose,
      handleClick
    }
  }    
}


