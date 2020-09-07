<template>
  <div class="publist">
    <div @click="gotohome" class="hhhh">
      <van-icon name="wap-home-o" color="#000" size="20" />
      <span>首页</span>
    </div>
    <div @click="gotolist">
      <van-icon name="apps-o" color="#000" size="20" />
      <span>分类搜索</span>
    </div>
    <div @click="gotocar">
      <van-icon name="shopping-cart-o" color="#000" size="20" />
      <span>购物车</span>
    </div>
    <div @click="gotomine">
      <van-icon name="smile-o" color="#000" size="20" />
      <span>我的</span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  methods: {
    gotohome() {
      this.$router.push("/home");
    },
    gotolist() {
      this.$router.push("/searching");
    },
    gotocar() {
      this.$router.push("/cart");
    },
    gotomine() {
      this.$router.push("/mine");
    },
  },
};
</script>

<style  scoped>
.publist {
  background: #fff;
  color: #000;
  right: 0;
  position: absolute;
  z-index: 9;
  box-shadow: 0 1px 3px #fff;
  top: 26px;
  border: 1px solid #ccc;
}

.publist div {
  width: 82px;
  line-height: 42px;
  padding: 0 12px;
}
.publist span {
  font-size: 14px;
  float: right;
  width: 60px;
}
</style>