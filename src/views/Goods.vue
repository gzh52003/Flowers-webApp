<template>
  <div class="goods">
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <i class="iconfont icon-zuojiantou" style="font-size:20px;color:#232628"></i>
      </template>
      <template #title>
        <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" alt />
      </template>
      <template #right>
        <i class="iconfont icon-option" style="font-size:16px;color:#232628"></i>
      </template>
    </van-nav-bar>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button class="addToCart" color="#be99ff" type="warning" text="加入购物车" />
      <van-goods-action-button class="buyNow" color="#7232dd" type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
export default {
  data() {
    return {};
  },
  methods:{
    onClickLeft(){

    },
    onClickRight(){

    }
  },
  created() {
    this.$store.commit("displayTabbar", false);
  },
  destroyed() {
    this.$store.commit("displayTabbar", true);
  }
};
</script>

<style lang="scss">
.addToCart {
  width: 112px;
  height: 49px;
  .van-button__content {
    background-color: #3d4d42;
  }
}
.buyNow {
  width: 112px;
  height: 49px;
  margin-right: 0px;
  .van-button__content {
    background-color: #ff734c;
  }
}
</style>