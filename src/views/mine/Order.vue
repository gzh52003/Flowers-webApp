<template>
  <div>
    <mineheader message="我的订单" shower="false"></mineheader>
    <div>
      <van-tabs v-model="active" title-active-color="orange" color="orange">
        <van-tab title=" 全部"></van-tab>
        <van-tab title="代付款">内容 2</van-tab>
        <van-tab title="今日配送">内容 3</van-tab>
        <van-tab title="待评价">内容 4</van-tab>
      </van-tabs>
    </div>

    <!-- list -->
    <div>
      <!-- 没有数据 -->
      <div class="emtyp">
        <img src="\img\order_empty.png" class="emp_img" alt />
        <div class="emp_not">还没有相关的订单哦...</div>
        <van-button type="primary" round block class="emp_look">去首页看看</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
// import axios from "axios";
import { Tab, Tabs, Button } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Button);
import mineheader from "./mineheader.vue";
export default {
  components: {
    mineheader,
  },
  data() {
    return {
      active: 0,
    };
  },
  created() {
    // axios
    this.$store.commit('displayTabbar',false);
    this.$request
      .get("http://120.24.63.27:2001/api/order", {
        params: {},
      })
      .then((res) => {
        console.log(res.data);
      });
  },
  destroyed(){
    this.$store.commit('displayTabbar',true);
  }
};
</script>

<style scoped>
.emtyp {
  height: 375px;
  box-sizing: border-box;
  padding: 30px 0;
}
.emp_img {
  width: 30vw;
  height: 142px;
  display: block;
  margin: 0 auto;
  margin-bottom: 17px;
}
.emp_look {
  width: 28vw;
  background: #ff734c;
  margin: 0 auto;
  border: none;
  height: 36px;
}
.emp_not {
  text-align: center;
  margin-bottom: 17px;
  font-size: 14px;
}
</style>