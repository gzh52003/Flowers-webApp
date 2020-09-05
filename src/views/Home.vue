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
        <div class="festivalCon" v-for="fes in festival" :key="fes.title" :style="fes.backgroud_url" @click="gotogoods(fes.title)">
          <p class="title">{{fes.title}}</p>
          <p class="sub_title">{{fes.sub_title}}</p>
          <p class="price">{{fes.price}}</p>
        </div>
      </div>
      <div class="scene">
        <div class="modetitle">一秒选花</div>
        <van-grid :border="false" :column-num="3" class="songRen">
          <van-grid-item v-for="song in givePeople" :key="song.song_url" class="songRenCon" style="position:relative">
            <van-image :src="song.songren_url"  />
            <span class="songrentxt">{{song.songren_text}}</span>
          </van-grid-item>
        </van-grid>
        <van-grid :border="false" :column-num="4" class="occasion">
          <van-grid-item v-for="occs in occasion" :key="occs.occasion_url" class="occasionCon" style="position:relative">
            <van-image :src="occs.occasion_url"  />
            <span class="occasiontxt" style="font-size:14px;color: #232628; position:absolute;top:10px;">{{occs.occasion_text}}</span>
          </van-grid-item>
        </van-grid>
        <div class="rexiao">
          <div class="rexiaoCon" style="border-right:none;background:url(/img/m_home_ranklist2.png);background-size:184px 160px;">
            <p class="title">热销榜</p>
            <p class="sub_title">集万千宠爱</p>
            <p class="price"><van-tag round class="tag" type="warning">大家都在买</van-tag><span>热销22.0万</span></p>
          </div>
          <div class="rexiaoCon" style="background:url(/img/m_home_special2.png);background-size:184px 160px;">
            <p class="title">特价专区</p>
            <p class="sub_title">超值好货</p>
            <p class="price"><van-tag round class="tag" type="warning">限时直降</van-tag><span>￥158<del>￥186</del></span></p>
          </div>
        </div>
        <van-grid :border="false" :column-num="3" class="songRen">
          <van-grid-item v-for="newf in newFlowers" :key="newf.newFlowers_url" class="songRenCon" style="position:relative">
            <van-image :src="newf.newFlowers_url"  />
            <span class="songrentxt" style="background:rgba(35, 38, 40, 0.8);display:block;width:113px;padding:4px 0;bottom:0px;text-align:center;font-size:12px;">{{newf.newFlowers_text}}</span>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="product">
        <h3 class="product-title">送恋人/爱情鲜花</h3>
        <div class="product-list">
          <van-card
            v-for="item in loveFlowers"
            :key="item._id"
            class="product-item-pic"
            :origin-price="item.LinePrice"
            :desc="item.Instro"
            :title="item.Cpmc"
            :thumb="item.img_url"
          >
            <template #tags>
              <van-tag round type="warning">{{item.tag_promo}}</van-tag>
            </template>
            <template #price>
              <p class="product-item-price">￥{{item.Price}}</p>
            </template>
            <template #price-top>
              <div class="product-item-info-promo">经典爆款，年销售冠军！</div>
            </template>
            <template #bottom>
              <div class="salesCount">已销售{{item.Sales}}万件</div>
            </template>
            <template #footer>
              <van-icon class="product-item-cart" name="shopping-cart-o" size="20" @click="gotocart"/>
            </template>
          </van-card>
        </div>
          <van-button class="watchmore" type="default">查看更多</van-button>
      </div>
      <div class="product">
        <h3 class="product-title">送长辈鲜花</h3>
        <div class="product-list">
          <van-card
            v-for="item in forOlder"
            :key="item._id"
            class="product-item-pic"
            :origin-price="item.LinePrice"
            :desc="item.Instro"
            :title="item.Cpmc"
            :thumb="item.img_url"
          >
            <template #tags>
              <van-tag round type="warning">{{item.tag_promo}}</van-tag>
            </template>
            <template #price>
              <p class="product-item-price">￥{{item.Price}}</p>
            </template>
            <template #price-top>
              <div class="product-item-info-promo">经典爆款，年销售冠军！</div>
            </template>
            <template #bottom>
              <div class="salesCount">已销售{{item.Sales}}万件</div>
            </template>
            <template #footer>
              <van-icon class="product-item-cart" name="shopping-cart-o" size="20" @click="gotocart"/>
            </template>
          </van-card>
        </div>
          <van-button class="watchmore" type="default">查看更多</van-button>
      </div>
      <!-- <div class="product">
        <h3 class="product-title">永生花推荐</h3>
        <div class="product-list">
          <van-grid :border="false" :column-num="2">
            <van-grid-item class="recommendList">
              <img src="https://img01.hua.com/uploadpic/newpic/1073033.jpg_220x240.jpg" alt="">
              <div class="recommendmsg">
                <p><van-tag round plain type="warning">标签</van-tag></p>
                <p class="title">一生一世·厄瓜多尔进口永生红玫1朵，双色永生绣球</p>
                <div class="recommendmsg-price">
                  <div class="recommendmsg-priceL">
                    <div class="info-prices"><strong>¥198</strong><del>¥259</del></div>
                    <p class="info-sales">已销售1.3万件</p>
                  </div>
                  <div class="recommendmsg-priceR">
                    <van-icon name="shopping-cart-o" size="20px" @click="gotocart"/>
                  </div>
                </div>
              </div>
            </van-grid-item>
            <van-grid-item  class="recommendList">
              <van-image src="https://img01.hua.com/uploadpic/newpic/1073287.jpg_220x240.jpg" />
            </van-grid-item>
          </van-grid>
        </div>
      </div> -->
      <template>
        <div class="product">
        <h3 class="product-title">永生花推荐</h3>
        <div class="product-list" >
          <van-grid :border="false" :column-num="2">
            <van-grid-item class="recommendList"  v-for="recommed in recommendgoods1" :key="recommed.id">
              <img :src="recommed.img_url" alt="">
              <div class="recommendmsg">
                <p><van-tag round plain type="warning" v-show="recommed.tag_promo!==''">{{recommed.tag_promo}}</van-tag></p>
                <p class="title">{{recommed.Instro}}</p>
                <div class="recommendmsg-price">
                  <div class="recommendmsg-priceL">
                    <div class="info-prices"><strong>¥{{recommed.Price}}</strong><del>¥{{recommed.LinePrice}}</del></div>
                    <p class="info-sales">已销售{{recommed.Sales}}万件</p>
                  </div>
                  <div class="recommendmsg-priceR">
                    <van-icon name="shopping-cart-o" size="20px" @click="gotocart"/>
                  </div>
                </div>
              </div>
            </van-grid-item>
          </van-grid>
        </div>
        <van-button class="watchmore" type="default">查看更多</van-button>
      </div>
      </template>
      <div class="product">
        <h3 class="product-title">永生花推荐</h3>
        <div class="product-list" >
          <van-grid :border="false" :column-num="2">
            <van-grid-item class="recommendList"  v-for="recommed in recommendgoods2" :key="recommed.id">
              <img :src="recommed.img_url" alt="">
              <div class="recommendmsg">
                <p><van-tag round plain type="warning" v-show="recommed.tag_promo!==''">{{recommed.tag_promo}}</van-tag></p>
                <p class="title">{{recommed.Instro}}</p>
                <div class="recommendmsg-price">
                  <div class="recommendmsg-priceL">
                    <div class="info-prices"><strong>¥{{recommed.Price}}</strong><del>¥{{recommed.LinePrice}}</del></div>
                    <p class="info-sales">已销售{{recommed.Sales}}万件</p>
                  </div>
                  <div class="recommendmsg-priceR">
                    <van-icon name="shopping-cart-o" size="20px" @click="gotocart"/>
                  </div>
                </div>
              </div>
            </van-grid-item>
          </van-grid>
        </div>
        <van-button class="watchmore" type="default">查看更多</van-button>
      </div>
      <div class="product">
        <h3 class="product-title">永生花推荐</h3>
        <div class="product-list" >
          <van-grid :border="false" :column-num="2">
            <van-grid-item class="recommendList"  v-for="recommed in recommendgoods3" :key="recommed.id">
              <img :src="recommed.img_url" alt="">
              <div class="recommendmsg">
                <p><van-tag round plain type="warning" v-show="recommed.tag_promo!==''">{{recommed.tag_promo}}</van-tag></p>
                <p class="title">{{recommed.Instro}}</p>
                <div class="recommendmsg-price">
                  <div class="recommendmsg-priceL">
                    <div class="info-prices"><strong>¥{{recommed.Price}}</strong><del>¥{{recommed.LinePrice}}</del></div>
                    <p class="info-sales">已销售{{recommed.Sales}}万件</p>
                  </div>
                  <div class="recommendmsg-priceR">
                    <van-icon name="shopping-cart-o" size="20px" @click="gotocart"/>
                  </div>
                </div>
              </div>
            </van-grid-item>
          </van-grid>
        </div>
        <van-button class="watchmore" type="default">查看更多</van-button>
      </div>
      <div class="product" style="margin-bottom:0">
        <h3 class="product-title">永生花推荐</h3>
        <div class="product-list" >
          <van-grid :border="false" :column-num="2">
            <van-grid-item class="recommendList"  v-for="recommed in recommendgoods4" :key="recommed.id">
              <img :src="recommed.imgurl" alt=""/>
              <span>{{recommed.img_url}}</span>
              <div class="recommendmsg">
                <p><van-tag round plain type="warning" v-show="recommed.tag_promo!==''">{{recommed.tag_promo}}</van-tag></p>
                <p class="title">{{recommed.Instro}}</p>
                <div class="recommendmsg-price">
                  <div class="recommendmsg-priceL">
                    <div class="info-prices"><strong>¥{{recommed.Price}}</strong><del>¥{{recommed.LinePrice}}</del></div>
                    <p class="info-sales">已销售{{recommed.Sales}}万件</p>
                  </div>
                  <div class="recommendmsg-priceR">
                    <van-icon name="shopping-cart-o" size="20px" @click="gotocart"/>
                  </div>
                </div>
              </div>
            </van-grid-item>
          </van-grid>
        </div>
        <van-button class="watchmore" type="default">查看更多</van-button>
      </div>
    </div>
    <div class="tuangou">
      <img src="https://img02.hua.com/m/home/img/m_home_qiyetuangou.png">
    </div>
    <div class="brand">
      <h3 class="brand-title">为什么选择我们</h3>
      <div class="brand-list">
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="value in brand" :key="value.brand_text" :icon="value.brand_url" :text="value.brand_text" size="64"/>
        </van-grid>
      </div>
    </div>
    <div class="footer">
      <div class="footer-links">
        <a class="footer-links-item" href="/qiyetuangou/" title="企业团购">企业团购</a>
        <a class="footer-links-item" href="/you/" title="设计师款">设计师款</a>
        <a class="footer-links-item" href="/huadian/" title="同城鲜花">同城鲜花</a>
        <a class="footer-links-item" href="/huayu/" title="花语大全">花语大全</a>
      </div>
      <div class="footer-links" style="padding-top:0;">
        <a class="footer-links-item" href="/qiyetuangou/" title="花礼优势">花礼优势</a>
        <a class="footer-links-item" href="/you/" title="勇敢爱">勇敢爱</a>
        <a class="footer-links-item" href="/huadian/" title="常见问题">常见问题</a>
        <a class="footer-links-item" href="/huayu/" title="关于我们">关于我们</a>
      </div>
      <div class="footer-entry">
            <div class="footer-entry-item footer-entry-item-appdl">
                <a href="/mbzzy/" class="navigation">
                    <i class="iconfont icon-shouji54"></i>
                    <p>客户端</p>
                </a>
            </div>
            <div class="footer-entry-item">
                <a href="/chat/" class="navigation">
                    <i class="iconfont icon-kefu"></i>
                    <p>客服</p>
                </a>
            </div>
        </div>
      <p class="footer-copyright">Copyright © 2005~2020 花礼网（中国鲜花礼品网）版权所有<br>中国鲜花网领先品牌，鲜花速递专家！<br>深圳市百易信息技术有限公司  粤ICP备09171662号</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Icon,Grid,GridItem,Divider,Image as VanImage,Tag } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Divider);
Vue.use(VanImage);
Vue.use(Tag);

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
      }],
      givePeople:[{
        songren_url:'/img/use_lover1.png',
        songren_text:'送恋人'
      },{
        songren_url:'/img/use_elder.png',
        songren_text:'送长辈'
      },{
        songren_url:'/img/use_friends.png',
        songren_text:'送朋友'
      }],
      occasion:[{
        occasion_url:'/img/birthday.png',
        occasion_text:'生日祝福'
      },{
        occasion_url:'/img/profess.png',
        occasion_text:'表白求婚'
      },{
        occasion_url:'/img/business2.png',
        occasion_text:'开业商务'
      },{
        occasion_url:'/img/anniversary2.png',
        occasion_text:'周年纪念'
      }],
      newFlowers:[{
        newFlowers_url:'/img/m_home_category_new3.jpg',
        newFlowers_text:'新品来袭'
      },{
        newFlowers_url:'/img/m_home_category_quality3.jpg',
        newFlowers_text:'品味之选'
      },{
        newFlowers_url:'/img/m_home_category_you3.jpg',
        newFlowers_text:'设计师甄选'
      }],
      loveFlowers:[],
      forOlder:[],
      recommendgoods1:[],
      recommendgoods2:[],
      recommendgoods3:[],
      recommendgoods4:[],
      brand:[{
        brand_url:'https://img02.hua.com/m/pro_detail/m_details_brand_01.png',
        brand_text:'获评鲜花龙头企业',
      },{
        brand_url:'https://img02.hua.com/m/pro_detail/m_details_brand_02.png',
        brand_text:'1~3小时送花上门',
      },{
        brand_url:'https://img02.hua.com/m/pro_detail/m_details_brand_03.png',
        brand_text:'赛事冠军花艺师团队',
      },{
        brand_url:'https://img02.hua.com/m/pro_detail/m_details_brand_04.png',
        brand_text:'严选花材',
      },{
        brand_url:'https://img02.hua.com/m/pro_detail/m_details_brand_05.png',
        brand_text:'12道严苛品控标准',
      },{
        brand_url:'https://img02.hua.com/m/pro_detail/m_details_brand_06.png',
        brand_text:'500万用户信赖好评',
      },]
    }
  },
  methods: {
    gotocart(){
      this.$router.push("/cart");
    },
    gotogoods(title){
      console.log(this.$router);
      this.$router.push(`/goods/${title}`)
      console.log(title);
    }
    ,
    onClickLeft() {
      this.$router.push("/classification");
    },
    onClickRight() {
      this.$router.push("/contant");
    }
  },
  async created(){
    const {data:loveFlowers} = await this.$request.post('/goods/list',{
      itemcodes:'9010966,9012471,9012154,9012450,9012243,9012177,9012474,9012455'
    })
    this.loveFlowers = loveFlowers.data;
    const {data:forOlder} = await this.$request.post('/goods/list',{
      itemcodes:'9012452,9012092,9012461,9012332,9012072,9010741'
    })
    this.forOlder = forOlder.data;

    const {data:recommendgoods1} = await this.$request.post('/goods/list',{
      itemcodes:'1073033,1073287,1073100,1073276'
    })
  
    this.recommendgoods1=recommendgoods1.data

    const {data:recommendgoods2} = await this.$request.post('/goods/list',{
      itemcodes:'5302071,5602016,5221035,5010040'
    })
 
    this.recommendgoods2=recommendgoods2.data

    const {data:recommendgoods3} = await this.$request.post('/goods/list',{
      itemcodes:'1076062,1076113,1061006,1061040'
    })
   
    this.recommendgoods3=recommendgoods3.data

    const {data:recommendgoods4} = await this.$request.post('/goods/list',{
      itemcodes:'1205050,1207009,1201028,1207010'
    })

    this.recommendgoods4=recommendgoods4.data
    
  }
  
};
</script>

<style lang="scss">
body,
html{
  margin: 0;
  padding: 0;
  font-size: 16px;
  background: #E9ECF0;
}
div,p,h3,h4,span{
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
 background: #fff;
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
.scene{
  background: #fff;
  padding-bottom: 16px;
  margin-bottom:8px; 
}
.songRen{
  height: 130px;
  .songrentxt{
    font-size: 14px;
    color:#fff;
    position: absolute;
    bottom: 5px;
  }
}
.songRenCon{
  .van-grid-item__content{
    padding:0px 6px;
  }
}
.occasion{
  padding: 8px 6px 0px;
  background: #fff;
}
.occasion .van-grid-item__content{
  height: 94px;
  padding: 0px 2px;  
  .occassionCon{
    .occasiontxt{
      font-size: 14px;
      color: #232628;
      position:absolute;
      top:10px;
    }
  }
}
.rexiao{
  width: 363px;
  height: 160px;
  padding: 0 6px;
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  .rexiaoCon{
    padding:12px;
    border: 1px solid #E9ECF0;
    color:#232628;
    .title{
      font-size: 14px;
      line-height: 14px;
    }
    .sub_title{
      font-size: 12px;
      color:#71797F;
      margin-bottom: 88px;
    }
    .price{
      font-size: 12px;
      .tag{
        margin-right: 32px;
      }
      del{
        color: #B4BABF;
      }
    }
  }
}
.product{
  // height:1747px;
  background: #fff;
  padding-bottom: 20px;
  margin-bottom: 8px;
  .watchmore{
    width: 96px;
    height: 26px;
    display: block;
    margin: 0 auto;
    font-size: 14px;;
    border: 1px solid #232628;
    line-height: 14px;
    text-align: center;
    border-radius: 2px;
  }
}
.product-title {
    font-size: 16px;
    line-height: 16px;
    padding: 20px 0;
    text-align: center;
    font-weight: normal;
}
.product-list{
  // height: 1645px;
  padding: 0 8px 24px;
}
.product-item-pic{
  padding: 0px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 12px 0 #e9ecf0;
  .product-item-cart{
    width: 20px;
    height: 23px;
    position: absolute;
    right:20px;
    bottom:18px;
  }
  .van-card__thumb{
    width: 176px ;
    height:192px ;
  }
  .van-card__content{
    padding: 0 20px;
    color:#232628;
    .van-card__title{
      font-weight: 300;
      font-size: 14px;
      padding:18px 0 0;
    }
    .van-card__desc{
      line-height: 12px;
      color:#232628;
      margin-bottom: 6px;
    }
    .product-item-info-promo{
      margin-top: 12px;
      padding: 10px 0;
      border-top: 1px solid #E9ECF0;
      border-bottom: 1px solid #E9ECF0;
      font-size: 11px;;
      font-weight: 500;
      position: absolute;
      top: 74px
    }
    .product-item-price{
        font-size: 18px;
        color: #FF734C;
        font-weight: 500;
        position: absolute;
        bottom: 28px;
    }
    .van-card__bottom{
      width:123px;
      height: 22px;
     .salesCount{
        font-size: 12px;
        color: #71797F;
        position: absolute;
        bottom:12px;
     }
     .van-card__origin-price{
       position: absolute;
        bottom: 26px;
        left:70px;
     }
    }
  }
}
.goodslist .van-grid-item__content{
  width: 183px;
  height:300px;
  .van-image{
    width: 175px;
    height: 191px;
  }
}
.recommendList{
  width: 173px;
  height: 300px;
   margin-bottom:8px;
  box-sizing: border-box;
  box-shadow: 0 8px 9px 0 #e9ecf0;
  .van-grid-item__content{
    width: 175px;
    padding: 0px;
    justify-content: space-between;
    img{
      width: 100%;
      height: 192px;
    }
  }
  .recommendmsg{
    width: 175px;
    height: 110px;
    box-sizing:border-box;
    background: #fff;
    padding:0px 8px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .van-tag{
      padding: 0 4px;
    }
    .title{
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .recommendmsg-price{
      width: 159px;
      height: 38px;
      .recommendmsg-priceL{
        .info-prices{
          line-height: 22px;
          height: 22px;
          strong {
            font-size: 18px;
            color: #FF734C;
            font-weight: 500;
          }
           del {
            font-size: 10px;;
            color: #71797F;
            margin-left:6px;
          }
        }
        .info-sales{
          font-size:10px;
          color: #71797F;
        }
      }
      .recommendmsg-priceR{
        .van-icon{
          position: absolute;
          right: 16px;
          bottom: 26px;
        }
      }
    }
  }
}
.tuangou{
  width: 100%;
  height: 125px;
  img{
    width: 100%;
    height: 100%;
  }
}
.brand{
  width: 100%;
  height: 272px;
  background: #fff;
  .brand-title{
    font-size: 16px;
    padding: 20px 0;
    text-align: center;
    font-weight: normal;
  }
  .brand-list{
    width: 100%;
    height: 216px;
    .van-grid{
      height: 100%;
      .van-icon__image{
        width: 64px;
        height: 64px;
      }
    }
  }
}
.footer{
  width: 100%;
  height: 283px;
  margin-top: 14px;
  background: #fff;
  .footer-links{
    display: flex;
    padding: 20px 0;
    .footer-links-item {
      color: #232628;
      display: block;
      flex: 1;
      padding: 4px 8px;
      margin: 0 14px;
      background: #E9ECF0;
      font-size: 12px;
      text-align: center;
    }
  }
  .footer-entry{
    display: flex;
    justify-content: center;
    .footer-entry-item{
      cursor: pointer;
      color: #232628;
      text-align: center;
      .iconfont {
        display: block;
        width: 36px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border-radius: 50%;
        background: #E9ECF0;
        font-size: 20px;
        color: #232628;
      }
      p{
        font-size: 12px;
        color: #232628;
      }
    }
    .footer-entry-item + .footer-entry-item {
      margin-left: 106px;
    }
  }
}
.footer-copyright {
    padding: 14px 0;
    font-size: 12px;
    color: #B4BABF;
    text-align: center;
}
</style>
