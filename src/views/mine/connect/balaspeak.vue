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
    <div class="rule">
      <p>1.余额大于订单金额：后台订单处理人员将第一时间抵扣订单相应金额并直接安排订单；</p>
      <p>
        2.余额小于订单金额：需要您补交差额货款（订单金额-余额），请点此链接补交：
        <a>在线补款>></a>
      </p>
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
      // console.log("asd");
      this.isshow = this.isshow == "false" ? "true" : "false";
    },
  },
  components: {
    listt,
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
.rule {
  padding: 16px;
  color: #494949;
  font-size: 12px;
}
.rule p {
  line-height: 22px;
  margin: 0;
}
.rule a {
  color: #f60;
  text-decoration: underline;
}
</style>