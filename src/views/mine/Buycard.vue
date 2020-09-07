<template>
  <div class="buy_card">
    <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <van-icon name="arrow-left" class="jiantou public_blo" />
      </template>
      <template #right>
        <van-icon name="wap-nav" class="jiantou public_blo">
          <listt v-show="isshow=='true'"></listt>
        </van-icon>
      </template>
      <template #title>
        <img src="\img\wx_login_logo.png" />
      </template>
    </van-nav-bar>

    <!-- 轮播图 -->
    <div>
      <van-swipe @change="onChange" height="409" class="buycard_lun">
        <van-swipe-item>
          <img src="\img\1074017.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="\img\201901071850320418.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="\img\201901151628367491.jpg" alt />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/3</div>
        </template>
      </van-swipe>
      <p class="buycard_love">真爱·黄金卡-</p>

      <div class="buycard_mes">
        <p class="buycard_mes_tit">图文详情</p>
        <van-image width="100vw" height="310" src="\img\by_20190108151823265.jpg" />
        <van-image width="100vw" height="80" src="\img\by_20190108151823762.jpg" />
        <van-image width="100vw" height="180" src="\img\by_20190108151824220.jpg" />

        <van-image width="100vw" height="263" src="\img\by_20190115162407906.jpg" />
        <van-image width="100vw" height="715" src="\img\by_20190108151825493.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import listt from "./publist.vue";

import Vue from "vue";
import { Swipe, SwipeItem, Image as VanImage } from "vant";

Vue.use(Swipe);
Vue.use(VanImage);
Vue.use(SwipeItem);
export default {
  data() {
    return {
      isshow: "false",
      current: 0,
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
    onChange(index) {
      this.current = index;
    },
  },
  components: {
    listt,
  },
};
</script>

<style scoped>
.public_blo {
  color: #000;
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.buycard_lun img {
  height: 409px;
  width: 100vw;
  background: #fff;
}
.buycard_love {
  padding: 12px 16px 12px;
  margin: 0;
  background: #fff;
  line-height: 16px;
  font-size: 14px;
}
.buycard_mes {
  margin-top: 6px;
  /* padding: 12px 16px 12px; */
  background: #fff;
  font-size: 16px;
  line-height: 21px;
}
.buycard_mes_tit {
  padding: 0 16px;
}
.buycard_mes .van-image {
  display: block;
}
</style>