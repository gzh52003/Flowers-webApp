<template>
  <div class="card_vue">
    <mineheader message="我的权益卡" shower="false"></mineheader>
    <div class="card_mid">
      <img src="/img/empty.png" class="card_img" alt />
      <p class="card_p">您还没有可用的权益卡哦...</p>
      <div>
        <van-button type="primary" class="card_but" @click="buycard" round block>购买权益卡</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import mineheader from "./mineheader.vue";
import Vue from "vue";
import { Button } from "vant";
Vue.use(Button);
export default {
  components: {
    mineheader,
  },
  methods: {
    buycard() {
      this.$router.push("/mine/card/buycard");
    },
  },
  created(){
    this.$store.commit("displayTabbar", false);
  },
  destroyed() {
    this.$store.commit("displayTabbar", true);
  },
};
</script>

<style  scoped>
.card_vue {
  /* height: 100vh; */
  /* padding: 54px 0; */
  background: white;
}

.card_mid {
  padding: 54px 0;
}
.card_img {
  height: 95px;
  display: block;
  margin: 0 auto;
}
.card_p {
  margin-top: 40px;
  text-align: center;
  font-size: 14px;
}
.card_but {
  width: 28vw;
  background: #ff734c;
  margin: 0 auto;
  border: none;
  height: 36px;
}
</style>