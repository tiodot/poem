import Vuex from 'vuex'
import Vue from 'vue'
import library from './library'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    library
  }
})