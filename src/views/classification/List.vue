<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar :title="listTitle" left-arrow @click-left="quit">
      <template #right>
        <div class="customer-service">
          <svg
            t="1599201528781"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6274"
            width="200"
            height="200"
          >
            <path
              d="M856 504.576a55.84 55.84 0 0 0-48 16.256V480a296 296 0 0 0-592 0h-48C168 290.016 322.016 136 512 136S856 290.016 856 480v24.576z m-26.56 172.256A344.096 344.096 0 0 1 512 888v-48c131.264 0 242.56-85.44 281.344-203.744 4.224 18.912 18.016 34.24 36.064 40.576z"
              fill="#36383F"
              p-id="6275"
            />
            <path
              d="M512 864m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
              fill="#36383F"
              p-id="6276"
            />
            <path
              d="M848 456a104 104 0 0 1 104 104v64a104 104 0 0 1-208 0v-64a104 104 0 0 1 104-104z m0 48a56 56 0 0 0-56 56v64a56 56 0 0 0 112 0v-64a56 56 0 0 0-56-56zM176 456a104 104 0 0 1 104 104v64a104 104 0 0 1-208 0v-64a104 104 0 0 1 104-104z m0 48a56 56 0 0 0-56 56v64a56 56 0 0 0 112 0v-64a56 56 0 0 0-56-56z"
              fill="#36383F"
              p-id="6277"
            />
          </svg>
        </div>
        <div class="menu" @click="menu">
          <svg
            t="1599201574408"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7169"
            width="200"
            height="200"
          >
            <path
              d="M51.2 115.2m38.4 0l844.8 0q38.4 0 38.4 38.4l0 0q0 38.4-38.4 38.4l-844.8 0q-38.4 0-38.4-38.4l0 0q0-38.4 38.4-38.4Z"
              fill="#333333"
              p-id="7170"
            />
            <path
              d="M51.2 473.6m38.4 0l844.8 0q38.4 0 38.4 38.4l0 0q0 38.4-38.4 38.4l-844.8 0q-38.4 0-38.4-38.4l0 0q0-38.4 38.4-38.4Z"
              fill="#333333"
              p-id="7171"
            />
            <path
              d="M51.2 832m38.4 0l844.8 0q38.4 0 38.4 38.4l0 0q0 38.4-38.4 38.4l-844.8 0q-38.4 0-38.4-38.4l0 0q0-38.4 38.4-38.4Z"
              fill="#333333"
              p-id="7172"
            />
          </svg>
          <div class="menu-box" v-show="menuShow">
            <div class="menu-item">
              <a href="#/home">
                <van-icon name="wap-home-o"></van-icon>
                <span>首页</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="#/classification">
                <van-icon name="apps-o"></van-icon>
                <span>分类搜索</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="#/cart">
                <van-icon name="shopping-cart-o"></van-icon>
                <span>购物车</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="#/mine">
                <van-icon name="smile-o"></van-icon>
                <span>我的</span>
              </a>
            </div>
          </div>
        </div>
      </template>
    </van-nav-bar>
    <!-- 头部结束 -->
    <!-- 筛选 -->
    <van-row class="filter">
      <van-col span="6">综合</van-col>
      <van-col span="6">销量</van-col>
      <van-col span="6">
        价格
        <i class="filter-item-price"></i>
      </van-col>
      <van-col span="6">新品</van-col>
    </van-row>
    <!-- 筛选结束 -->
    <!--  目的-->
    <van-row class="purpose">
      <van-col class="purpose-item">
        <span>送女友</span>
      </van-col>
      <van-col class="purpose-item">
        <span>送男性</span>
      </van-col>
      <van-col class="purpose-item">
        <span>送朋友</span>
      </van-col>
      <van-col class="purpose-item">
        <span>送长辈</span>
      </van-col>
      <van-col class="purpose-item" @click="showPopup">
        <span>
          筛选
          <i class="purpose-last iconfont icon-xia"></i>
        </span>
      </van-col>
      <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
      <!-- <van-popup v-model="show">内容</van-popup> -->
      <van-popup
        v-model="show"
        position="right"
        :style="{ height: '100%' ,width:'90%'}"
        duration="0.2"
        class="purpose-layer-content"
      >
        <div class="purpose-layer-wrap">
          <h3 class="purpose-layer-title">人群</h3>
          <van-row class="purpose-layer-item">
            <van-col class="purpose-layer-per" span="8">
              <span>综合</span>
            </van-col>
            <van-col class="purpose-layer-per" span="8">
              <span>销量</span>
            </van-col>
            <van-col class="purpose-layer-per" span="8">
              <span>新品</span>
            </van-col>
          </van-row>
        </div>
        <div class="purpose-layer-clear">
          <a href="#">清除选择</a>
        </div>
      </van-popup>
    </van-row>
    <section class="product">
      <van-grid :column-num="2" class="productList">
        <van-grid-item
          v-for="item in goodsList"
          :key="item.ItemCode"
          @click="goodsRouter(item.ItemCode)"
          :data-id="item.ItemCode"
          class="product-item"
        >
          <div class="product-item-pic">
            <img v-lazy="item.img_url" />
          </div>
          <div class="product-item-info">
            <div class="product-item-info-tages" v-show="item['tag_promo']">
              <span>{{item['tag_promo']}}</span>
            </div>
            <h2
              class="product-item-info-name"
              :class="item['tag_promo']?'text-overflow' : 'text-overflow-line2'"
            >{{item["Cpmc"] +'.'+item.Instro}}</h2>
            <div class="product-item-info-bottom">
              <p class="product-item-info-prices">
                <strong>{{item.LinePrice}}</strong>
              </p>
            </div>
          </div>
        </van-grid-item>
      </van-grid>
      <div class="product-footer">
          <van-loading size="16px"  type="spinner" color="#1989fa"  v-show="loadingShow">加载中...</van-loading>
          <p v-show="!loadingShow">已经到底了……</p>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import { Popup } from "vant";
Vue.use(Popup);
export default {
  data() {
    return {
      //头部标题
      listTitle: "爱情鲜花",
      //菜单显示
      menuShow: false,
      show: false,
      goodsList: [],
      loadingShow:true,
      ajaxStr:'',
      ajaxPage:1,
      ajaxSize:6,
      loadingAjax:false,
      falg:'',
    };
  },
  methods: {
    //退出
    quit() {
      this.$router.back();
    },
    //菜单
    menu() {
      this.menuShow = !this.menuShow;
    },
    showPopup() {
      this.show = true;
    },
    goodsRouter($id) {
      this.$router.push({
        name: "Goods",
        params: { $id },
      });
    },
    //商品请求
    async getGoodsList() {
      const res = await this.$request.get(
        "http://120.24.63.27:2001/api/goods/search",{
            params:{q:this.ajaxStr,page:this.ajaxPage,size:this.ajaxSize}
        }
      );
      console.log(res);
      res.data.data.forEach(item=>{
          this.goodsList.push(item);
      })
      console.log(this.goodsList)
      if(res.data.data.length === 0){
          this.loadingShow = false
          this.loadingAjax = true
          return
      }
      this.loadingAjax = false
      
    },
    scrollHandle(){
        clearTimeout(this.falg)
        if(this.loadingAjax)return
        this.falg = setTimeout(()=>{
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            const product_lastTop = document.querySelector('.product-footer').offsetTop
            const innerHeight = window.innerHeight
            if((scrollTop +innerHeight) >= product_lastTop ){
                this.loadingAjax = true
                this.ajaxPage ++
                this.getGoodsList()
            }
        },500)
    }

  },
  created() {
   
    const {q} = this.$route.query
    this.ajaxStr = q
    this.getGoodsList()
  },
  mounted(){
        window.addEventListener('scroll', this.scrollHandle);
  }
};
</script>
<style lang="scss">
.van-nav-bar__right {
  display: flex;
  width: 88px;
  align-items: center;
  padding: 0px;
  .customer-service,
  .menu {
    flex: 1;
    display: flex;
    align-content: center;
    justify-content: center;
    svg {
      height: 20px;
      width: 20px;
    }
  }
}
.menu {
  position: relative;

  .menu-box {
    position: absolute;
    top: 44px;
    right: 8px;
    z-index: 9;
    background: #fff;
    border: 1px solid #e9ecf0;
    box-shadow: 0 4px 12px 0 #e9ecf0;
    .menu-item {
      width: 110px;
      height: 48px;
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: -4px;
        right: 12px;
        width: 4px;
        height: 4px;
        background: #fff;
        border-top: 1px solid #e9ecf0;
        border-left: 1px solid #e9ecf0;
        transform: rotate(45deg);
      }
      a {
        padding: 0 12px;
        color: #232628;
        font-size: 14px;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
        i {
          font-size: 20px;
          vertical-align: middle;
          color: inherit;
        }
        span {
          margin-left: 6px;
          line-height: 48px;
        }
      }
    }
  }
}
// 筛选
.filter {
  background: #fff;
  border-bottom: 1px solid #e9ecf0;
  .van-col {
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 14px;
    color: #232628;
    .filter-item-price {
      position: relative;
      top: 2px;
      margin-left: 4px;
      &::after,
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: -1px;
        left: 0;
        width: 0;
        height: 0;
        font-size: 0;
        border: 4px solid transparent;
      }
      &::before {
        border-bottom-color: #b4babf;
      }
      &::after {
        border-top-color: #b4babf;
        top: 8px;
      }
    }
  }
}
//目的
.purpose {
  padding: 10px 4px;
  background: #fff;
  .purpose-item {
    width: 20%;
    padding: 4px;
    float: left;
    span {
      max-width: 100%;
      height: 24px;
      line-height: 22px;
      border: 1px solid #f7f9fa;
      background-color: #f7f9fa;
      font-size: 12px;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;
      text-align: center;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      .purpose-last {
        display: inline-block;
        font-size: 8px;
        width: 12px;
        vertical-align: top;
      }
    }
  }
}
.purpose-layer-wrap {
  padding: 0 14px;
  .purpose-layer-title {
    font-weight: 500;
    color: #232628;
    padding: 16px 0;
    font-size: 16px;
    margin: 0px;
  }
  .purpose-layer-item {
    .purpose-layer-per {
      margin-bottom: 12px;
      padding: 0 6px;
      text-align: center;
      span {
        line-height: 34px;
        border-radius: 2px;
        border: 1px solid #f7f9fa;
        font-size: 12px;
        background-color: #f7f9fa;
        display: block;
        box-sizing: border-box;
      }
    }
  }
}
.purpose-layer-clear {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  text-align: center;
  background-color: #e9ecf0;
  color: #232628;
}

// 商品
.product {
  margin-top: 8px;
}
.productList {
  padding: 0 4px;
}
.product-item {
  // width:187px;
  padding: 0 4px;
  margin-bottom: 8px;

  .van-grid-item__content {
    padding: 0;
    border-radius: 4px;
    box-shadow: 0 4px 12px 0 #e9ecf0;
  }
  .product-item-pic {
    height: 187px;
    overflow: hidden;
    img {
      width: 100%;
      vertical-align: top;
      border-radius: 4px 4px 0px 0px;
    }
  }
  .product-item-info {
    height: 58px;
    padding: 8px 8px 16px;
    position: relative;
    .product-item-info-tages {
      margin-bottom: 4px;
      font-size: 0px;
      span {
        display: inline-block;
        border-radius: 140px;
        border: 1px solid #ff734c;
        padding: 0 4px;
        color: #ff734c;
        font-size: 10px;
      }
    }
    .product-item-info-name {
      font-size: 12px;
      font-weight: 300;
      margin: 0px;
      width: 159.6px;
    }
    .product-item-info-bottom {
      position: absolute;
      left: 7px;
      right: 7px;
      bottom: 16px;
      z-index: 1;
      font-size: 14px;
    }
    .product-item-info-prices {
      margin: 0;
      strong {
        font-size: 14px;
        color: #ff734c;
        font-weight: 500;
        &::before {
          content: "￥";
        }
      }
    }
  }
}

.text-overflow {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.text-overflow-line2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.6;
}
.product-footer{
    text-align:center;
    height:40px;
    margin-bottom:50px;
    p{
        color: #71797F;
        font-size: 12px;
    }
}
</style>