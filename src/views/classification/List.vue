<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar left-arrow @click-left="quit" class="handerRight">
      <template #title>
        <p v-show="searchShow" v-text="titleStr">爱情鲜花</p>
        <van-search
          v-model="titleStr"
          v-show="!searchShow"
          placeholder="鲜花、蛋糕、礼品"
          @search="onSearch"
        />
      </template>
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
              <a href="/home">
                <van-icon name="wap-home-o"></van-icon>
                <span>首页</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="/classification">
                <van-icon name="apps-o"></van-icon>
                <span>分类搜索</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="/cart">
                <van-icon name="shopping-cart-o"></van-icon>
                <span>购物车</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="/mine">
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
      <van-col span="6" @click="comprehensive">综合</van-col>
      <van-col span="6" @click="salesVolume">销量</van-col>
      <van-col span="6" @click="Price">
        价格
        <i class="filter-item-price"></i>
      </van-col>
      <van-col span="6" @click="newProducts">新品</van-col>
    </van-row>
    <!-- 筛选结束 -->
    <!--  目的-->
    <van-row class="purpose" v-show="searchShow">
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
          <div v-for=" item in proupList" :key="item.leftText">
            <h3 class="purpose-layer-title">{{item.leftText}}</h3>
            <van-grid :column-num="3">
              <van-grid-item
                v-for="content in item.mudiArr"
                :key="content.img_url"
                class="purpose-layer-per"
                :class="proupText===content.text ?'active':''"
                :text="content.text"
                @click="goal(content.text)"
              />
            </van-grid>
          </div>
        </div>
        <div class="purpose-layer-clear">
          <a href="#">清除选择</a>
        </div>
      </van-popup>
    </van-row>
    <section class="product">
      <van-grid :column-num="2" class="productList">
        <van-grid-item
          v-for="(item,idx) in goodsList"
          :key="idx"
          @click="goodsRouter(item.ItemCode)"
          :data-id="item.ItemCode"
          class="product-item"
        >
          <div class="product-item-pic">
            <img v-lazy="'/img/'+item.ItemCode+'.jpg_220x240.jpg'" />
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
      <div class="product-footer product-bottom">
        <van-loading size="16px" type="spinner" color="#1989fa" v-show="loadingShow">加载中...</van-loading>
        <p v-show="!loadingShow">已经到底了……</p>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import { Popup } from "vant";
import categoryList from "./category";
import itemsArr from "./goodsItems";
Vue.use(Popup);
export default {
  data() {
    return {
      //菜单显示
      menuShow: false,
      //筛选
      show: false,
      //商品数据
      goodsList: [],
      //底部加载提示
      loadingShow: true,
      //搜索请求查找字段,头部标题
      titleStr: "",
      //请求页码
      ajaxPage: 1,
      //请求数量
      ajaxSize: 6,
      //是否允许请求
      loadingAjax: false,
      //去抖
      falg: "",
      //搜索
      searchShow: true,
      field: "",
      proupList: "",
      proupText: "",
      goodsItem: "",
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
        params: { id: $id },
      });
    },
    onSearch() {
      this.ajaxPage = 1;
      this.getGoodsList();
    },
    //商品请求
    async getGoodsList() {
      let res;
      if (!this.searchShow) {
        res = await this.$request.get("/goods/search", {
          params: {
            q: this.titleStr,
            page: this.ajaxPage,
            size: this.ajaxSize,
          },
        });
      } else {
        res = await this.$request.post("/goods/list", {
          itemcodes: this.goodsItem,
        });
      }
      //判断当前是重新搜索还是继续加载
      //判断当前字段和保存的字段是否相同
      if (this.field === this.titleStr) {
        res.data.data.forEach((item) => {
          this.goodsList.push(item);
        });
        //判断返回的数据是否充足，下次还是否加载

        if (res.data.data.length < 5) {
          this.loadingShow = false;
          return;
        }
        //请求完成前，不能再发起请求
        this.loadingAjax = false;
      } else {
        //重新搜索
        //保存搜索的字段
        this.field = this.titleStr;
        this.goodsList = res.data.data;
      }
    }, //浏览器滚动执行的函数
    scrollHandle() {
      //判断上一次请求是否完成
      if (this.loadingAjax) return;
      //去抖
      clearTimeout(this.falg);
      this.falg = setTimeout(() => {
          //浏览器卷去的高度
          const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
          //商品底部加载距离顶部的距离
          let product_lastTop = document.querySelector(".product-bottom");
          if(!product_lastTop)return
          product_lastTop = product_lastTop.offsetTop
          //页面的高度
          const innerHeight = window.innerHeight;
          //当页面高度加上浏览器卷曲的高度大于商品底部距离顶部的高度，发起请求
          if (scrollTop + innerHeight >= product_lastTop) {
            this.loadingAjax = true;
            this.ajaxPage++;
            this.getGoodsList();
          }
   
      }, 200);
    },
    //综合
    comprehensive() {
      this.ajaxPage = 1;
      this.field = "";
      this.getGoodsList();
    },
    //销量
    salesVolume() {
      this.goodsList = this.goodsList.sort((a, b) =>
        a.Sales - b.Sales
      );
    },
    //价格
    Price() {
      this.goodsList = this.goodsList.sort((a, b) => {
        return a.Price - b.Price;
      });
      
    },
    newProducts() {},
    goal(str) {
      this.proupText = str;
    },
  },

  //路由守卫
  beforeRouteEnter(to, from, next) {
    if (from.path === "/searching") {
      window.searchShow = true;
    }
    next();
  },
  async created() {
    const { q, specificStr, index } = this.$route.query;
    if (q) {
      if (window.searchShow) {
        this.searchShow = false;
      }
      this.titleStr = q;
      this.getGoodsList();
    }
    if (specificStr) {
      let strItem = "";
      for (let i = 0; i < itemsArr[index - 0].length; i++) {
        strItem += "," + itemsArr[index - 0][i];
      }
      strItem = strItem.substr(1);
      this.proupList = categoryList[index - 0];
      this.goodsItem = strItem;
      this.titleStr = specificStr;
      this.getGoodsList();
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandle);
    //选项卡
    const tabBox = document.querySelector(".filter");
    const tabEl = tabBox.children;
    tabEl[0].style.color = "#FF734C";
    for (let i = 0; i < tabEl.length; i++) {
      tabEl[i].onclick = function () {
        for (let j = 0; j < tabEl.length; j++) {
          tabEl[j].style.color = "#232628";
        }
        this.style.color = "#FF734C";
      };
    }
  },
};
</script>
<style lang="scss">
.handerRight{

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
  //   .purpose-layer-item {
  .purpose-layer-per {
    margin-bottom: 12px;
    padding: 0 6px;
    text-align: center;
    .van-grid-item__content {
      padding: 0;
      border: 1px solid #f7f9fa;
      background-color: #f7f9fa;
      color: #232628;
      box-sizing: border-box;
      .van-grid-item__text {
        line-height: 34px;
        border-radius: 2px;
        font-size: 12px;
        display: block;
      }
    }
  }
  .active {
    .van-grid-item__content {
      border: 1px solid #ff734c;
      background: #fff;
      color: #ff734c;
    }
  }
}
// }
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
  // padding: 0 4px;
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
.product-footer {
  text-align: center;
  height: 40px;
  margin-bottom: 50px;
  p {
    color: #71797f;
    font-size: 12px;
  }
}
</style>