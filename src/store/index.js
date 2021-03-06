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
    },
      state: {
    userList: "",
    order: 0,
   
  },
  mutations: {
    saveUserList(state, data) {
      state.userList = data;
    },
    changeorder(state, data) {
      state.order = data
    },
  setClass(state,data){
    state.classStatus = data
  }
  },
      actions: {
  
      },
}) 

// export default new Vuex.Store({
//   state: {
//     userList: "",
//     order: 0
//   },
//   mutations: {
//     saveUserList(state, data) {
//       state.userList = data;
//     },
//     changeorder(state, data) {
//       state.order = data
//     }
//   },
//   actions: {

//   },
//   modules: {
//   }
// })


export default store