<template>
  <div class="home">
    <van-nav-bar class="homeheader" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
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
      <van-swipe-item v-for="pic in swiper" :key="pic.swiper_img">
        <img :src="pic.swiper_img" alt />
      </van-swipe-item>
    </van-swipe>

    <div class="conpany-info">
      <div class="conpany-info-item">
        <van-icon name="checked" />认证龙头企业
      </div>
      <div class="conpany-info-item" style="margin-left:16px;">
        <van-icon name="checked" />15年品
      </div>
      <div class="conpany-info-item" style="margin-left:16px;">
        <van-icon name="checked" />3小时送
      </div>
      <div class="conpany-info-item" style="margin-left:16px;">
        <van-icon name="checked" />最近
        <a href="##">123213</a>条好评
      </div>
    </div>
    <van-divider />
    <van-grid column-num="5" :border="false">
      <van-grid-item v-for="item in flowers" :icon="item.icon" :text="item.text" :key="item.text" to="/goods" />
    </van-grid>
    <van-divider />
    <div class="festival">
      <div class="festival-banner">
        <a href="##"><img src="/img/festival.png" alt="教师节专题"></a>
      </div>
      <div class="festival-product">
        <div class="festivalCon" v-for="fes in festival" :key="fes.title" :style="fes.backgroud_url">
          <p class="title">{{fes.title}}</p>
          <p class="sub_title">{{fes.sub_title}}</p>
          <p class="price">{{fes.price}}</p>
        </div>
      </div>
      <div class="scene">
        <div class="modetitle">一秒选花</div>
        <van-grid :border="false" :column-num="3" class="songRen">
        <van-grid-item>
          <van-image src="/img/use_lover1.png"  />
        </van-grid-item>
        <van-grid-item>
          <van-image src="/img/use_elder.png" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="/img/use_friends.png" />
        </van-grid-item>
      </van-grid>
          <div class="box"></div>
      </div>
      
    </div>
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

        icon:"/img/category_flower1.png" ,
        text:"鲜花" ,
      },{
         icon:"/img/category_flower2.png" ,
        text:"永生花" ,
      },{
         icon:"/img/category_cake3.png" ,
        text:"蛋糕" ,
      },{
         icon:"/img/category_gift.png" ,
        text:"礼品" ,
      },{
         icon:"/img/category_chocolate.png" ,
        text:"巧克力" ,
      }],
      swiper:[{
        swiper_img:'/img/swiper1.jpg'
      },{
        swiper_img:'/img/swiper2.jpg'
      },{
        swiper_img:'/img/swiper3.jpg'
      },{
        swiper_img:'/img/swiper4.jpg'
      },],
      festival:[{
        title:'温暖向阳',
        sub_title:'全网热销',
        price:'￥296',
        backgroud_url:'background-image:url(/img/fs1.jpg)'
      },{
        title:'韩式爆款',
        sub_title:'致敬恩师',
        price:'￥239',
         backgroud_url:'background-image:url(/img/fs2.jpg)'
      },{
        title:'丰富花材',
        sub_title:'老师桌面风景',
        price:'￥245',
         backgroud_url:'background-image:url(/img/fs3.jpg)'
      },{
        title:'高端礼盒',
        sub_title:'芳香馥郁',
        price:'￥388',
         backgroud_url:'background-image:url(/img/fs4.jpg)'
      },]
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
html{
  margin: 0;
  padding: 0;
  background: #E9ECF0;
}
div{
 margin:0;
 padding:0
}
html{
  font-size: 14px;
}
.van-nav-bar__title img {
  height: 100%;
  width: 150px;
}
.homeheader {
  background-color: #435448;
}
.van-tabbar {
  background: #f7f9fa;
}
.my-swipe .van-swipe-item{
  height: 180px;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
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
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  background: #fff;
}
.conpany-info > .conpany-info-item {
  width: auto;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 12px;
}
.conpany-info > .conpany-info-item:before {
  font-size: 14px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  color: #435448;
  vertical-align: bottom;
}
.conpany-info > .conpany-info-item + .conpany-info-item {
  margin-left: 12px;
}
.van-grid-item__content{
  padding:7px 6px;
}
.van-divider{
  margin:0;
}
.festival-banner{
  height:90px;
  background-color: #fff;
  img{
    width:100%
  }
}
.festival-product{
  background: #b96757;
  box-sizing: border-box;
  height: 200px;
  padding: 10px 8px;
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
  .festivalCon{
    width: 151.5px;
    height:86px;
    padding:0 12px;
    margin-left: 4px;
    background: #fff;
    border-radius: 4px;
    background-position-x: 70px;
    background-repeat:no-repeat;
    background-size:100px 86px;
    .title{
      color: #232628;
      font-size: 14px;
      line-height: 14px;
      margin: 12px 0px 0px;
    }
    .sub_title{
      color: #71797F;
      font-size: 12px;
      line-height: 12px;
      margin: 5px 0;
    }
    .price{
      color:#FF734C;
      font-size:14px;
      margin:0;
      padding: 12px 0px 0px;
    }
  }
}
.modetitle{
 color: #232628;
 font-size: 16px;
 height: 16px;
 line-height: 16px;
 padding: 12px;
}
.modetitle:before {
  content: '';
  display: inline-block;
  width: 3px;
  height: 14px;
  background: #435448;
  margin-right: 6px;
}
.box{
  height: 500px;
}
.songRen{
  height: 130px;
}
</style>
