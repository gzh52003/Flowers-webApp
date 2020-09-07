<template>
  <div id="app">
    <router-view />
    <van-tabbar
      route
      active-color="#FF734C"
      inactive-color="#232628"
      v-show="$store.state.common.showTabbar"
    >
      <van-tabbar-item
        :icon="item.icon"
        v-for="item in menu"
        :key="item.name"
        :to="item.path"
        :badge="item.name==='cart'?cartLength:''"
      >{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import {Tabbar, TabbarItem,NavBar ,Col, Row ,Tab,Tabs,Grid,GridItem,Lazyload,Loading,Card,Button,Search} from 'vant'

Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(Card);
Vue.use(Button);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Lazyload);
Vue.use(Col);
Vue.use(Row);
Vue.use(Loading);
Vue.use(Search);
export default {
  data() {
    return {
      menu: [
        {
          text: "首页",
          name: "home",
          path: "/home",
          icon: "wap-home-o",
        },
        {
          text: "分类",
          name: "classification",
          path: "/classification",
          icon: "apps-o",
        },
        {
          text: "购物车",
          name: "cart",
          path: "/cart",
          icon: "shopping-cart-o",
        },
        {
          text: "我的",
          name: "mine",
          path: "/mine",
          icon: "smile-o",
        },
      ],
    };
  },
  methods:{
    addToStorage(){
      let $this=this;
      localStorage.setItem('goodslist',JSON.stringify($this.$store.state.cart.goodslist))
    },
    addToVux(){
      let a = localStorage.getItem('goodslist');

      this.$store.commit( 'pushstate',JSON.parse(a));
    },
     saveState() {
      let $this = this;
      localStorage.setItem(
        "state",
        JSON.stringify($this.$store.state.userList)
      );
    },

    readState() {
      let $this = this;
      let bb = localStorage.getItem("state").substr(1);
      bb = bb.substring(0, bb.length - 1);
      $this.$store.state.userList = bb;
    },

  },
  computed:{
    cartLength() {
      return this.$store.state.cart.goodslist.length;
    },

  },
  created() {
    console.log(this.$store.state);
    window.addEventListener('beforeunload',this.addToStorage);
    window.addEventListener('load',this.addToVux)
    window.addEventListener("beforeunload", this.saveState);
    window.addEventListener("load", this.readState);
  },
  
};
</script>

<style lang="scss">
</style>
