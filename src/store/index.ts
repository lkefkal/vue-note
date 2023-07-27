import { createStore } from 'vuex'

const pageCache = new Map()

const state = {
  count: 0,
  isRouting: false,
  pageCache,
}

const mutations = {
  increment(state:any) {
    state.count++
  },
  decrement(state:any) {
    state.count--
  },
  doRouting(state:any) {
    state.isRouting = true

  },
  doneRouting(state:any) {
    state.isRouting = false
  },
  addCache(state:any, payload:any) {
    state.pageCache.set(payload.path, true)
  }
}

const actions = {}


const store = createStore({
  state,
  mutations,
  actions,
})


export default store