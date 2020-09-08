<template>
  <div class="balance">
    <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <van-icon name="arrow-left" class="jiantou public_blo" />
      </template>
      <template #right>
        <van-icon name="wap-nav" class="jiantou public_blo">
          <listt v-show="isshow=='true'"></listt>
        </van-icon>
      </template>
      <template #title>账户余额</template>
    </van-nav-bar>

    <!-- 内容 -->
    <div>
      <div class="banance_nei">
        <p class="balance_speck" @click="balance_rule">
          <span class="iconfont icon-49"></span>
          使用说明
        </p>
        <p class="zhanghuyue">账户余额(元)</p>
        <p class="balance_num">0</p>
      </div>

      <!-- 明细 -->
      <div class="balance_bot">
        <p class="mingxi" @click="gotomes">
          交易明细
          <span>
            <van-icon name="arrow" />
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import listt from "./publist.vue";
import Vue from "vue";
import { NavBar } from "vant";
Vue.use(NavBar);
export default {
  data() {
    return {
      isshow: "false",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      // console.log("asd");
      this.isshow = this.isshow == "false" ? "true" : "false";
    },
    balance_rule() {
      this.$router.push("/mine/balance/speak");
    },
    gotomes() {
      this.$router.push("/mine/balance/mes");
    },
  },
  components: {
    listt,
  },
  created(){
    this.$store.commit("displayTabbar", false);
  },
  destroyed() {
    this.$store.commit("displayTabbar", true);
  },
};
</script>
<style scoped >
.public_blo {
  color: #000;
}
.balance .van-nav-bar {
  background: rgba(250, 250, 250, 0.9);
}
.banance_nei {
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(#ff9f00),
    to(#fe6600)
  );
  height: 160px;
}
.banance_nei .balance_speck {
  margin: 0;
  color: #fff;
  font-size: 12px;
  text-align: right;
  padding: 12px 10px 0 0;
}
.zhanghuyue {
  margin: 0;
  font-size: 18px;
  color: #fff;
  text-align: left;
  margin-left: 20px;
}
.balance_num {
  font-size: 48px;
  margin: 0;
  color: #fff;
  text-align: left;
  margin-left: 20px;
}
.mingxi {
  margin: 0;
  font-size: 14px;
  line-height: 36px;
}
.mingxi span {
  float: right;
  /* text-align: right; */
}
.balance_bot {
  border-bottom: 1px solid #e4e4e4;
  background: #fff;
  padding: 5px 16px;
}
</style>