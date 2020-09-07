<template>
  <div>
    <mineheader message="我的优惠券" shower="false"></mineheader>
    <div>
      <van-tabs v-model="active" title-active-color="orange" color="orange">
        <van-tab title="未使用">
          <van-coupon-cell
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"
          />
          <!-- 优惠券列表 -->
          <van-popup
            v-model="showList"
            round
            position="bottom"
            style="height: 90%; padding-top: 4px;"
          >
            <van-coupon-list
              :coupons="coupons"
              :chosen-coupon="chosenCoupon"
              :disabled-coupons="disabledCoupons"
              @change="onChange"
              @exchange="onExchange"
            />
          </van-popup>
        </van-tab>
        <van-tab title="已使用"></van-tab>
        <van-tab title="已失效"></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import mineheader from "./mineheader.vue";
import Vue from "vue";
// import axios from "axios";
import { Tab, Tabs, CouponCell, CouponList, Popup } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(Popup);
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元",
};

const dis = {
  available: 1,
  condition: "无使用门槛\n最多优惠30元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "5",
  unitDesc: "元",
};

export default {
  components: {
    mineheader,
  },
  data() {
    return {
      active: 0,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [dis],
      showList: false,
      youshow: false,
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
      console.log(index);
    },
    onExchange(code) {
      this.coupons.push(coupon);
      console.log(code);
    },
    // showjuan() {
    //   console.log("as");
    //   this.youshow = "true";
    // },
  },
};
</script>

<style >
</style>