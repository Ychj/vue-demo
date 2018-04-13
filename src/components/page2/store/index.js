import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state'
import actions from './actions'
import mutations from './mutations'

const store = new Vuex.Store({
  namespaced:true,
  state,
  mutations,
  actions
})

export default store;
