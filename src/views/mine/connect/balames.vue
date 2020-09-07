<template>
  <div>
    <van-nav-bar class="balaspeak" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <van-icon name="arrow-left" class="jiantou public_blo" />
      </template>
      <template #right>
        <van-icon name="wap-nav" class="jiantou public_blo">
          <listt v-show="isshow=='true'"></listt>
        </van-icon>
      </template>
      <template #title>交易明细</template>
    </van-nav-bar>

    <!-- 记录 -->
    <div class="bala_jilu">
      <p>暂无记录</p>
      <div class="refill tc"></div>
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

.bala_jilu p {
  margin: 0;
  text-align: center;
  font-size: 14px;
  background: white;
}
.refill {
  clear: both;
  padding-top: 15px;
  border-bottom: 1px solid #e4e4e4;
}
</style>