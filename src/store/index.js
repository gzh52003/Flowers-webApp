import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userList: "",
    order: 0
  },
  mutations: {
    saveUserList(state, data) {
      state.userList = data;
    },
    changeorder(state, data) {
      state.order = data
    }
  },
  actions: {

  },
  modules: {
  }
})
