<template>
  <div id="app">
    <router-view/>
    <van-tabbar  route active-color="#FF734C" inactive-color="#232628">
      <van-tabbar-item :icon="item.icon" v-for="item in menu" :key="item.name" :to="item.path">{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import {Tabbar, TabbarItem,NavBar } from 'vant'
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  data(){
    return {
      menu:[{
        text:'首页',
        name:'home',
        path:'/home',
        icon:'wap-home-o'
      },{
        text:'分类',
        name:'classification',
        path:'/classification',
        icon:'apps-o'
      },{
        text:'购物车',
        name:'cart',
        path:'/cart',
        icon:'shopping-cart-o'
      },{
        text:'我的',
        name:'mine',
        path:'/mine',
        icon:'smile-o'
      },]
    }
  }
}
</script>

<style lang="scss">

</style>
