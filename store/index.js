import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      colorTheme: 'night',
    }
  },
  mutations: {
   switchTheme(state){
      state.colorTheme = state.colorTheme === 'light' ? 'night' : 'light'
   }
  }
})

export default store