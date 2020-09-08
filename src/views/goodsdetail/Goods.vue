<template>
  <div class="goods">
    <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <i class="iconfont icon-zuojiantou" style="font-size:20px;color:#232628"></i>
      </template>
      <template #title>
        <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" alt />
      </template>
      <template #right>
        <i class="iconfont icon-option" style="font-size:16px;color:#232628">
          <listt class="headerRight" v-show="isshow=='true'"></listt>
        </i>
      </template>
    </van-nav-bar>
    <van-swipe class="my-swipe" @change="onChange">
      <van-swipe-item v-for="item in goodsswiper" :key="item.swiper_url" style="height:409px;">
        <img :src="item.swiper_url" alt />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/4</div>
      </template>
    </van-swipe>
    <div class="goods-proinfo">
      <div class="goods-proinfo-head-title">
        {{goodsdetailmsg.Instro}}
        <p class="text-orange">{{goodsdetailmsg.Cpmc}}</p>
      </div>
      <div class="goods-proinfo-head-collect">
        <a href="javascript:;" class="navigation">
          <i class="iconfont icon-xingxing" style="font-size:20px"></i>
        </a>
      </div>
      <div class="proinfo-body">
        <div class="proinfo-body-price">
          <span class="proinfo-body-price-sjg">¥{{goodsdetailmsg.Price}}</span>
          <s class="proinfo-body-price-jg">¥{{goodsdetailmsg.LinePrice}}</s>
        </div>
        <div class="proinfo-body-sales">
          已售
          <span>{{goodsdetailmsg.Sales}}</span>件
        </div>
      </div>
    </div>

    <section class="skuselect">
      <div class="media-contain">
        <div class="media" >
          <div class="media-left">已选</div>
          <div class="media-center">韩式/{{goodsdetailmsg.ItemCode}}</div>
          <div class="media-right">
            <i class="iconfont icon-gengduo"></i>
          </div>
        </div>
        <div class="sku-container"></div>
      </div>
      <div class="media">
        <div class="media-left">配送至</div>
        <div class="media-center">
          <p>
            <i class="iconfont icon-dizhi"></i>&nbsp;
            <span>请选择配送地区</span>
          </p>
          <p class="media-desc"></p>
        </div>
        <div class="media-right">
          <i class="iconfont icon-gengduo"></i>
        </div>
      </div>
    </section>
    <div class="aviodHidden"></div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :badge="cartlist.length!==0?cartlist.length:''"
        to="/cart"
      />
      <van-goods-action-button
        class="addToCart"
        color="#be99ff"
        type="warning"
        text="加入购物车"
        @click="add2cart"
      />

      <van-goods-action-button
        class="buyNow"
        color="#7232dd"
        type="danger"
        text="立即购买"
        @click="buyNow"
      />
    </van-goods-action>
  
  </div>
</template>

<script>
import Vue from "vue";
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Swipe,
  SwipeItem,
  Sku,
  Area,
  Overlay
} from "vant";
import listt from "../mine/publist";

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Sku);
Vue.use(Area);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Overlay);

export default {
  components: {
    listt,
  },
  data() {
    return {
      current: 0,
      goodsswiper: [],
      goodsdetailmsg: [],
      isshow: "false",
    };
  },
  computed: {
    cartlist() {
      return this.$store.state.cart.goodslist;
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.isshow = this.isshow == "false" ? "true" : "false";
    },
    onChange(index) {
      this.current = index;
    },
    
   
    async getData(id) {
      const { data } = await this.$request.get("/goods/single/" + id);
      this.goodsdetailmsg = data.data;
      this.goodsswiper = [{ swiper_url: data.data.img_url }];
    },
    add2cart() {
      const { _id } = this.goodsdetailmsg;
      const current = this.cartlist.filter(item => item._id === _id)[0];
      if (current) {
        this.$store.commit("changeQty", { _id, qty: current.qty + 1 });
      } else {
        const goods = {
          ...this.goodsdetailmsg,
          qty: 1
        };
        
        this.$store.commit("add", goods);

      }
    },
    buyNow() {
      
      this.add2cart();
      this.$router.push("/cart");
    }
  },
  async created() {
    if (parseInt(this.$route.params.id)) {
      const { id } = this.$route.params;
      this.getData(id);
    } else {
      const { id: title } = this.$route.params;
      const data = this.$store.state.common.festival.filter(
        item => item.title === title
      );
      this.goodsdetailmsg = data[0];
      this.goodsswiper = data[0].fes_swiper;
    }
    this.$store.commit("displayTabbar", false);
    // console.log("source=", this.$request.source);
  },
  destroyed() {
    this.$store.commit("displayTabbar", true);
  }
};
</script>

<style lang="scss">
.addToCart {
  width: 112px;
  height: 49px;
  .van-button__content {
    background-color: #3d4d42;
  }
}
.buyNow {
  width: 112px;
  height: 49px;
  margin-right: 0px;
  .van-button__content {
    background-color: #ff734c;
  }
}
.goods-proinfo {
  width: 375px;
  box-sizing: border-box;
  height: 117px;
  padding: 12px 16px;
  background: #fff;
  .goods-proinfo-head-title {
    width: 303px;
    font-size: 14px;
    .text-orange {
      color: #ff734c;
    }
  }
  .goods-proinfo-head-collect {
    position: relative;
    .navigation {
      position: absolute;
      right: 10px;
      top: -42px;
      color: #232638;
    }
  }
}
.proinfo-body {
  margin-top: 12px;
  display: flex;
  align-items: center;
  .proinfo-body-price {
    width: 247px;
    .proinfo-body-price-sjg {
      font-size: 20px;
      color: #ff734c;
      font-weight: 600;
    }
    .proinfo-body-price-jg {
      color: #b4babf;
      margin-left: 6px;
      font-size: 14px;
      margin-right: 16px;
    }
  }
  .proinfo-body-sales {
    width: 114px;
    font-size: 12px;
    text-align: right;
  }
}
.skuselect {
  margin-top: 8px;
  .media {
    display: flex;
    background-color: #fff;
    padding: 14px 16px;
    user-select: none;
    .media-left {
      min-width: 42px;
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
    }
    .media-center {
      width: 281px;
      height: 20px;
      font-size: 14px;
    }
    .media-right {
      width: 20px;
      text-align: right;
      font-size: 16px;
    }
  }
}
.aviodHidden {
  width: 100%;
  height: 50px;
}
.headerRight{
  top:45px!important;
}
</style>