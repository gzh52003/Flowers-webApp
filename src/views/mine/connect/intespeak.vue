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
      <template #title>积分使用帮助</template>
    </van-nav-bar>
    <!-- 文本 -->
    <div class="bala_rules">
      <h4>一、如何使用积分</h4>
      <p>1.购物抵现</p>
      <p>· 100积分抵扣1人民币，每单最多用积分抵扣订单金额的20%</p>
      <p>· 消费时可使用积分的数量是500的整数倍，如500、1000、1500等积分</p>
      <p>· 如果拥有的积分数小于500个，则不可在提交订单页使用积分支付</p>

      <p>2.积分兑换</p>
      <p>· 您可以在“我的-积分-积分兑换”中进行兑换优惠券或小礼品</p>

      <h4>二、如何获取积分</h4>
      <p>1.购物回馈积分</p>
      <p>· 订单送货完毕后可按实付金额1:1比例获取积分</p>
      <p>2.评价赠送积分</p>
      <p>· 评价订单中第1个商品：纯文字评论，送300积分；晒图+文字评论，送500积分；晒2张图+文字评论，送600积分；晒3张图或以上+文字评论，送700积分</p>
      <p>· 评价订单中第2个商品或更多商品时，每多一个评价送100积分</p>
      <h4>三、积分有效期</h4>
      <p>· 积分有效期为一年(365天)，可通过下单延长有效期。系统将分别在每笔积分获取一年后对该笔未使用积分作过期清零处理，如在此一年内有下单，则积分有效期顺延一年</p>
      <p>· 例如2019.2.26系统将判断2018.2.25~2019.2.25期间是否有下单，如无有效订单，清空2018.2.25获取但未使用的积分；如有有效订单则积分有效期顺延一年</p>
    </div>
  </div>
</template>

<script>
import listt from "../publist.vue";
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
      this.isshow = this.isshow == "false" ? "true" : "false";
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

<style scoped>
.bspeak {
  background: #f7f7f7;
  height: 100vh;
}
.public_blo {
  color: #000;
}
.balaspeak {
  background: rgba(250, 250, 250, 0.9);
}
.bala_rules {
  width: 94%;
  padding: 0 3% 25px;
  max-width: 640px;
  margin: 0 auto;
}
.bala_rules h4 {
  margin: 17px 0 5px;
  font-size: 12px;
}
.bala_rules p {
  line-height: 18px;
  font-size: 12px;
  margin: 0;
  margin-left: 24px;
}
</style>