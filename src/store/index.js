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

export default store;
