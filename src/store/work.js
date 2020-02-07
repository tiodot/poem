import Work from '../model/work'


export default {
  state: {
    currentWork: null
  },
  mutations: {
    setCurrentWork(state, payload) {
      state.currentWork = payload
    }
  },
  actions: {
    getCurrentWork({commit}, payload) {
      Work.getById(payload).then(res => {
        commit('setCurrentWork', res)
      })
    }
  }
}