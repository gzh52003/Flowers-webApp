<template>
  <div class="mine_body">
    <van-nav-bar title="个人中心" left-arrow @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" class="jiantou" />
      </template>
    </van-nav-bar>

    <!-- 有背景的 -->
    <div class="mine" v-if="showyonghuming=='false'">
      <van-row style="width:100vw;height:50px">
        <van-col span="16" offset="8" style="color:#fff;padding-top:20px;font-size:18px">Hi,欢迎来到花礼网</van-col>
      </van-row>
      <van-row style="width:100%">
        <van-col span="15" offset="9">
          <van-button
            @click="reg"
            round
            type="info"
            class="mine_denglogin"
            size="small"
            text="登录/注册"
          >登录/注册</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- 登录状态 -->
    <div class="mine" v-else>
      <van-row class="mine_denglu">
        <van-col span="6" offset="5" class="mine_img">
          <div>
            <img src="\img\avatar_default_09.jpg" alt />
          </div>
        </van-col>
        <van-col span="5">
          <p class="mine_yonghu">{{zhuangtai}}</p>
          <p class="mine_zhuchehuiyuan">
            <van-icon name="diamond" size="8" style="margin-right:3px" />注册会员
          </p>
        </van-col>
      </van-row>
    </div>

    <div class="mine_imm">
      <!-- 我的订单 -->
      <div style="padding:10px;padding-right:0">
        <van-row class="mine_bor">
          <van-col span="6" style="font-size:16px">我的订单</van-col>
          <van-col offset="12" span="6" style="font-size:16px" @click="all_ding">
            全部订单
            <van-icon name="arrow" />
          </van-col>
        </van-row>
        <van-row style="height:73px">
          <van-col class="mine_daifu" span="8" @click="daifukuan">
            <a style="display:block">
              <img src="/img/myinfo_pendingpay.png" alt />
              <p>待付款</p>
            </a>
          </van-col>
          <van-col class="mine_daifu" span="8" @click="jinripeisong">
            <a style="display:block">
              <img src="/img/myinfo_distribution.png" alt />
              <p>今日配送</p>
            </a>
          </van-col>
          <van-col class="mine_daifu" span="8" @click="daipingjia">
            <a style="display:block">
              <img src="/img/myinfo_evaluation.png" alt />
              <p>待评价</p>
            </a>
          </van-col>
        </van-row>
      </div>

      <!-- 优惠券 -->
      <div>
        <van-row class="mine_youhui">
          <van-col span="6">
            <a @click="youhuijuan">
              <i class="iconfont icon-9"></i>
              <p>优惠券</p>
            </a>
          </van-col>
          <van-col span="6">
            <a @click="quanyika">
              <i class="iconfont icon-vip-membership"></i>
              <p>权益卡</p>
            </a>
          </van-col>
          <van-col span="6">
            <a @click="yu_e">
              <i class="iconfont icon-yue"></i>
              <p>余额</p>
            </a>
          </van-col>
          <van-col span="6">
            <a @click="jifen">
              <i class="iconfont icon-zuanshi"></i>
              <p>会员积分</p>
            </a>
          </van-col>
        </van-row>
        <van-row class="mine_youhui">
          <van-col span="6">
            <a>
              <i class="iconfont icon-dizhi"></i>
              <p>收货地址</p>
            </a>
          </van-col>
          <van-col span="6">
            <a>
              <i class="iconfont icon-naozhong"></i>
              <p>生日纪念提醒</p>
            </a>
          </van-col>
          <van-col span="6">
            <a>
              <i class="iconfont icon-shoucang"></i>
              <p>我的收藏</p>
            </a>
          </van-col>
          <van-col span="6">
            <a>
              <i class="iconfont icon-jilu"></i>
              <p>浏览记录</p>
            </a>
          </van-col>
        </van-row>
      </div>

      <!-- 联系客服 -->
      <div>
        <van-row class="mine_youhui">
          <van-col span="6">
            <a>
              <i class="iconfont icon-kefu"></i>
              <p>联系客服</p>
            </a>
          </van-col>
          <van-col span="6">
            <a>
              <i class="iconfont icon-help"></i>
              <p>帮助中心</p>
            </a>
          </van-col>
          <van-col span="6">
            <a>
              <i class="iconfont icon-guanyu"></i>
              <p>关于花礼</p>
            </a>
          </van-col>
          <van-col span="6">
            <a>
              <i class="iconfont icon-shezhi"></i>
              <p>设置</p>
            </a>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Col, Row, Button } from "vant";

Vue.use(NavBar);
Vue.use(Col);
Vue.use(Button);
Vue.use(Row);
export default {
  data() {
    return {
      zhuangtai: "",
      showyonghuming: "false",
    };
  },
  created() {
    this.showyonghuming = "false";
    let $this = this;
    this.zhuangtai = localStorage.getItem("state");
    if (this.zhuangtai !== "") {
      // 登录状态
      this.zhuangtai = localStorage.getItem("state").substr(1);
      this.zhuangtai = this.zhuangtai.substring(0, this.zhuangtai.length - 1);
      let bb = $this.getCookie($this.zhuangtai);
      if (bb !== "") {
        this.$request
          .get("http://120.24.63.27:2001/api/jwtverify", {
            params: {
              authorization: bb,
            },
          })
          .then((res) => {
            if (res.data.msg == "success") {
              this.showyonghuming = "true";
            } else {
              this.showyonghuming = "false";
            }
          });
      }
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    reg() {
      this.$router.push("/reg");
    },
    // 全部订单
    all_ding() {
      this.$store.commit("changeorder", 0);
      this.isdenglu("/mine/order");
      // this.$router.push("/mine/order");
    },
    // 代付款
    daifukuan() {
      this.$store.commit("changeorder", 1);
      this.isdenglu("/mine/order");
    },
    // 今日配送
    jinripeisong() {
      this.$store.commit("changeorder", 2);
      this.isdenglu("/mine/order");
    },

    // 待评价
    daipingjia() {
      this.$store.commit("changeorder", 3);
      this.isdenglu("/mine/order");
    },
    youhuijuan() {
      this.isdenglu("/mine/coupon");
      // this.$router.push("/mine/coupon");
    },
    quanyika() {
      this.isdenglu("/mine/card");
      // this.$router.push("/mine/card");
    },
    // 余额
    yu_e() {
      this.isdenglu("/mine/balance");
      // this.$router.push("/mine/balance");
    },
    // 积分
    jifen() {
      this.isdenglu("/mine/integral");
      // this.$router.push("/mine/integral");
    },

    // 验证登录
    isdenglu(url) {
      let $this = this;
      this.zhuangtai = localStorage.getItem("state");
      if (this.zhuangtai !== "") {
        // 登录状态
        this.zhuangtai = localStorage.getItem("state").substr(1);
        this.zhuangtai = this.zhuangtai.substring(0, this.zhuangtai.length - 1);
        let auth = $this.getCookie(this.zhuangtai);
        this.$request
          .get("http://120.24.63.27:2001/api/jwtverify", {
            params: {
              authorization: auth,
            },
          })
          .then((res) => {
            if (res.data.msg == "success") {
              this.$router.push(url);
            } else {
              this.$router.push("/reg");
            }
          });
      }
    },
  },
};
</script>

<style scoped>
.mine_body {
  background: #e9ecf0;
  height: 100vh;
}
.van-nav-bar .jiantou {
  color: #000;
}
.mine {
  background: url("/img/mine_bg.png");
  height: 112px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top center;
  /* padding-bottom: 6.57142857rem; */
}
.mine_denglogin {
  background: white;
  width: 110px;
  height: 34px;
  color: #000;
  border: none;
}
.mine_imm {
  padding: 0 5px;
  position: relative;
  top: -20px;
}
.mine_imm > div {
  background: #fff;
  box-shadow: 0 0 2px #fff;
  border-radius: 5px;
}
.mine_bor {
  border-bottom: 1px solid #e9ecf0;
  line-height: 44px;
}
.mine_daifu {
  padding-top: 12px;
  height: 49px;
}
.mine_daifu a {
  color: #000;
  font-size: 13px;
}
.mine_daifu p {
  margin: 4px 0 0;
  text-align: center;
}
.mine_daifu img {
  width: 32px;
  height: 32px;
  margin: 0 auto;
  display: block;
}
.mine_youhui {
  height: 44px;
  padding: 14px 0;
  margin-top: 10px;
}
.mine_youhui a {
  display: block;
  color: #232628;
  font-size: 12px;
  height: 44px;
  text-align: center;
}
.mine_youhui .iconfont {
  width: 20px;
  font-size: 20px;
  height: 20px;
  color: #000;
}
.mine_denglu {
  padding-top: 18px;
}
.mine_img div {
  border-radius: 50%;
  width: 60px;

  height: 60px;
}
.mine_img img {
  width: 60px;
  border-radius: 50%;
  height: 60px;
}
.mine_yonghu {
  font-size: 14px;
  margin: 0;
  color: #fff;
}
.mine_zhuchehuiyuan {
  font-size: 12px;
  margin: 0;
  line-height: 12px;
  border-radius: 10px;
  width: 70px;
  margin-top: 5px;
  background-color: #fe6600;
  color: #fff;
}
</style>