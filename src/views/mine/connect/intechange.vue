<template>
  <div class="bspeak">
    <van-nav-bar class="balaspeak" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <van-icon name="arrow-left" class="jiantou public_blo" />
      </template>
      <template #right>
        <van-icon name="wap-nav" class="jiantou public_blo">
          <listt v-show="isshow=='true'"></listt>
        </van-icon>
      </template>
      <template #title>积分兑换</template>
    </van-nav-bar>

    <!-- 内容 -->
    <div>
      <p class="youhuijuan">优惠券兑换</p>
      <div class="juan">
        <!-- 20 -->
        <div class="juanzi1">
          <van-row class="pp">
            <van-col span="3" offset="2" class="oo">通用劵</van-col>
            <van-col span="7" offset="1" class="pp1">
              <p class="new2">
                <span class="new1">￥</span>20
              </p>
              <p class="new1">所需积分:2000</p>
            </van-col>
            <van-col span="6" offset="4" class="pp1">
              <p class="new1 newnew">
                立即
                <br />兑换
              </p>
            </van-col>
          </van-row>
        </div>
        <!-- 15 -->
        <div class="juanzi2">
          <van-row class="pp">
            <van-col span="3" offset="2" class="oo">通用劵</van-col>
            <van-col span="7" offset="1" class="pp1">
              <p class="new2">
                <span class="new1">￥</span>15
              </p>
              <p class="new1">所需积分:1500</p>
            </van-col>
            <van-col span="6" offset="4" class="pp1">
              <p class="new1 newnew">
                立即
                <br />兑换
              </p>
            </van-col>
          </van-row>
        </div>
        <!-- 10 -->
        <div class="juanzi3">
          <van-row class="pp">
            <van-col span="3" offset="2" class="oo">通用劵</van-col>
            <van-col span="7" offset="1" class="pp1">
              <p class="new2">
                <span class="new1">￥</span>10
              </p>
              <p class="new1">所需积分:1000</p>
            </van-col>
            <van-col span="6" offset="4" class="pp1">
              <p class="new1 newnew">
                立即
                <br />兑换
              </p>
            </van-col>
          </van-row>
        </div>
        <!-- 5 -->
        <div class="juanzi4">
          <van-row class="pp">
            <van-col span="3" offset="2" class="oo">通用劵</van-col>
            <van-col span="7" offset="1" class="pp1">
              <p class="new2">
                <span class="new1">￥</span>5
              </p>
              <p class="new1">所需积分:500</p>
            </van-col>
            <van-col span="6" offset="4" class="pp1">
              <p class="new1 newnew">
                立即
                <br />兑换
              </p>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import listt from "../publist.vue";

// Vue.use(Image);
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
  },
  components: {
    listt,
  },
};
</script>

<style  scoped>
.bspeak {
  background: #f7f7f7;
  height: 100vh;
}
.youhuijuan {
  margin: 0;
  font-size: 16px;
  margin-left: 10px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  color: #494949;
}
.juanzi {
  margin-top: 10px;
}
.juan {
  padding: 5px;
  font-size: 12px;
  color: #fff;
  /* box-sizing: border-box; */
  background: #fff;
}
.juanzi1 {
  width: 100%;
  height: 113px;
  position: relative;
  background: url("https://img02.hua.com/m/member/coupon_20_m.png") no-repeat;
  background-size: 98% 98%;
}
.juanzi2 {
  width: 100%;
  height: 113px;
  position: relative;

  background: url("https://img02.hua.com/m/member/coupon_15_m.png") no-repeat;
  background-size: 98% 98%;
}
.juanzi3 {
  width: 100%;
  height: 113px;
  position: relative;
  background: url("https://img02.hua.com/m/member/coupon_10_m.png") no-repeat;
  background-size: 98% 98%;
}
.juanzi4 {
  width: 100%;
  height: 113px;
  position: relative;
  background: url("https://img02.hua.com/m/member/coupon_5_m.png") no-repeat;
  background-size: 98% 98%;
}
.pp .oo {
  line-height: 113px;
}
.pp p {
  margin: 0;
}
.pp .new2 {
  font-size: 36px;
}
.pp .new1 {
  font-size: 16px;
}
.pp1 p {
  margin: 0;
}
.pp1 p {
  padding-top: 20px;
  /* line-height: 30px; */
}
.pp .pp1 {
  display: table-cell;
}
.pp .new1 {
  font-size: 12px;
}
.pp .oo1 {
  font-size: 24px;
}
.pp1 .newnew {
  font-size: 24px;
}
</style>