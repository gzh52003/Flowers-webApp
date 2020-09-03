<template>
  <div class="home">
    <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <i class="iconfont icon-fenlei" style="font-size:24px;color:#fff"></i>
      </template>
      <template #title>
        <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" alt />
      </template>
      <template #right>
        <i class="iconfont icon-004erji-2" style="font-size:24px;color:#fff"></i>
      </template>
    </van-nav-bar>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#FF734C">
      <van-swipe-item>
        <img src="https://img02.hua.com/slider/18_youflower_m.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://img02.hua.com/slider/20_teacherday_banner_m.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://img02.hua.com/slider/19_birthday_banner_m.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://img02.hua.com/slider/20_xingzuo_chunvzuo.jpg" alt />
      </van-swipe-item>
    </van-swipe>

    <div class="conpany-info">
      <div class="conpany-info-item">
        <van-icon name="checked" />认证龙头企业
      </div>
      <div class="conpany-info-item">
        <van-icon name="checked" />15年品
      </div>
      <div class="conpany-info-item">
        <van-icon name="checked" />3小时送
      </div>
      <div class="conpany-info-item">
        <van-icon name="checked" />最近
        <a href="##">123213</a>条好评
      </div>
    </div>
    <van-divider />
    <van-grid column-num="5" :border="false">
      <van-grid-item v-for="item in flowers" :icon="item.icon" :text="item.text" :key="item.text" to="/goods" />
    </van-grid>
    <van-divider />
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Icon,Grid,GridItem,Divider } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Divider);
export default {
  name: "Home",
  data(){
    return {
      flowers:[{
        icon:"https://img02.hua.com/m/home/img/m_home_category_flower.png" ,
        text:"鲜花" ,
      },{
         icon:"https://img02.hua.com/m/home/img/m_home_category_ppf.png" ,
        text:"永生花" ,
      },{
         icon:"https://img02.hua.com/m/home/img/m_home_category_cake.png" ,
        text:"蛋糕" ,
      },{
         icon:"https://img02.hua.com/m/home/img/m_home_category_gift.png" ,
        text:"礼品" ,
      },{
         icon:"https://img02.hua.com/m/home/img/m_home_category_chocolate.png" ,
        text:"巧克力" ,
      }]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/classification");
    },
    onClickRight() {
      this.$router.push("/contant");
    }
  }
};
</script>

<style lang="scss">
body,
html,
div {
  margin: 0;
  padding: 0;
}
.van-nav-bar__title img {
  height: 100%;
  width: 150px;
}
.van-nav-bar {
  background-color: #435448;
}
.van-tabbar {
  background: #f7f9fa;
}
.my-swipe .van-swipe-item img {
  width: 100%;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);

  span {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
}
.conpany-info {
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #fff;
}
.conpany-info > .conpany-info-item {
  width: auto;
  height: 2.39rem;
  line-height: 2.39rem;
  text-align: center;
  font-size: 0.78571429rem;
}
.conpany-info > .conpany-info-item:before {
  font-size: 1rem;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  color: #435448;
  margin-right: 2px;
  vertical-align: bottom;
}
.conpany-info > .conpany-info-item + .conpany-info-item {
  margin-left: 0.85714286rem;
}
.van-grid-item__content{
  padding:7px 6px;
}
.van-divider{
  margin:0;
}
</style>
