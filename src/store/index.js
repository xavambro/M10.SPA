import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current:''
  },
  getters:{
    getCurrent(state){
      return state.current
    }
  },
  mutations: {
    setCurrent(state,component){
      state.current = component;
    }
  },
  actions: {
  },
  modules: {
  }
})
