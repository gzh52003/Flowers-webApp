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
          积分规则
        </p>
        <p class="balance_num">
          0
          <span class="zhanghuyue">积分</span>
        </p>
        <div class="duihuan">
          <p @click="duihuan">积分兑换</p>
        </div>
      </div>

      <!-- 明细 -->
      <div class="balance_bot">
        <p class="mingxi" @click="gotomes">
          积分明细
          <span>
            <van-icon name="arrow" />
          </span>
        </p>
      </div>
      <div class="bala_jilu">
        <p>暂无记录</p>
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
      this.$router.push("/mine/integral/speak");
    },
    gotomes() {
      this.$router.push("/mine/integral/mes");
    },
    // 兑换
    duihuan() {
      this.$router.push("/mine/integral/change");
    },
  },
  components: {
    listt,
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
  position: relative;
  height: 160px;
}
.duihuan p {
  text-align: center;
  position: absolute;
  margin: 0;
  font-size: 14px;
  color: #fff;
  bottom: 0;
  background: #fe6600;
  height: 36px;
  line-height: 36px;
  width: 100%;
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
  /* margin-left: 20px; */
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
.bala_jilu p {
  margin: 0;
  text-align: center;
  font-size: 14px;
  background: white;
}
</style>