import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import common from './commom'

Vue.use(Vuex)
const store = new Vuex.Store({
  // store模块化
    modules:{
      cart,
      common
    }
}) 

<<<<<<< HEAD
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
=======
export default store;
>>>>>>> 0a86a585efbfe7345520f0ae511f2dbff1930aff
