import Vuex from 'vuex'
import Vue from 'vue'
import library from './library'
import work from './work'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    library,
    work
  }
})