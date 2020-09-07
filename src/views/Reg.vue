<template>
  <div class="reg_vue">
    <van-nav-bar
      title="登录注册"
      class="no_bordbot"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <!-- <van-dropdown-menu :overlay="cuo" :close-on-click-outside="cuo" class="xuanxiang">
          <van-dropdown-item
            :options="option1"
            title-class="iconfont icon-option"
            title
            @change="change"
          />
        </van-dropdown-menu>-->
        <van-icon name="wap-nav" class="jiantou public_blo">
          <listt v-show="isshow=='true'"></listt>
        </van-icon>
      </template>
      <template #left>
        <van-icon name="arrow-left" class="jiantou" />
      </template>
    </van-nav-bar>

    <!-- logo -->
    <van-row>
      <van-col span="6"></van-col>
      <van-col span="12" style="text-aligin:center;padding-top:34px">
        <img src="\img\wx_login_logo.png" alt style="height:24px;width:100%;" />
      </van-col>
    </van-row>

    <!-- 用户名 -->
    <van-form validate-first>
      <div class="reg_box" v-if="reg_kai=='true'">
        <van-row>
          <van-col class="reg_mint_font">手机号</van-col>
        </van-row>
        <van-row class="reg_bor_bot">
          <van-col>
            <van-field :clearable="xianshi" v-model="number" placeholder="请输入手机号" type="number" />
          </van-col>
        </van-row>
        <van-row>
          <van-col class="reg_mint_font">验证码</van-col>
        </van-row>
        <van-row class="reg_bor_bot">
          <van-col>
            <van-field
              :clearable="xianshi"
              name="validator1"
              v-model="yanzheng"
              placeholder="请输入验证码"
              style="width:90vw"
            >
              <template #button>
                <van-button size="small" style="border:none">发送验证码</van-button>
              </template>
            </van-field>
          </van-col>
        </van-row>

        <!-- 手机登录/注册 -->

        <van-button
          color="#ff734c"
          type="warning"
          round
          block
          style="margin-top:41px;font-size:17px;color:#fff"
        >手机登录/注册</van-button>

        <van-row>
          <van-col class="reg_denglu" @click="reg_true">账号密码登录</van-col>
        </van-row>
      </div>

      <!-- 邮箱登录 -->

      <div class="reg_box" v-if="reg_kai=='false'">
        <van-row>
          <van-col class="reg_mint_font">手机号/邮箱</van-col>
        </van-row>
        <van-row class="reg_bor_bot">
          <van-col>
            <van-field :clearable="xianshi" v-model="num_you1" placeholder="请输入手机号或邮箱" />
          </van-col>
        </van-row>
        <van-row>
          <van-col class="reg_mint_font">密码</van-col>
        </van-row>
        <van-row class="reg_bor_bot">
          <van-col>
            <van-field
              v-model="password1"
              right-icon="eye"
              @click-right-icon="changepass"
              placeholder="请输入密码"
              style="width:90vw"
              :clearable="xianshi"
              :type="passtype"
            >
              <!-- <span class="iconfont icon-chakan"  style="fontsize:20px"></span> -->
              <template #button>
                <van-button size="small" style="border:none">忘记密码</van-button>
              </template>
            </van-field>
          </van-col>
        </van-row>

        <!-- 手机登录/注册 -->
        <van-button
          color="#ff734c"
          type="warning"
          round
          block
          style="margin-top:41px;font-size:17px;color:#fff"
          @click="denglu1"
        >登录</van-button>

        <van-row>
          <van-col class="reg_denglu" @click="reg_false">手机短信登录</van-col>
        </van-row>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, DropdownMenu, DropdownItem, Field, Button, Form } from "vant";

import listt from "./mine/publist.vue";

Vue.use(NavBar);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Field);
Vue.use(Button);
Vue.use(Form);
export default {
  components: {
    listt,
  },
  data() {
    return {
      value1: 0,
      cuo: false,
      reg_kai: "true",
      number: "",
      yanzheng: "",
      num_you1: "asdf",
      password1: "asdfgh",
      num_you: "",
      password: "",
      xianshi: true,
      passtype: "password",
      isshow: "false",
    };
  },
  methods: {
    change(value) {
      // console.log(value);
      this.$router.push(value);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    reg_false() {
      this.reg_kai = "true";
    },
    reg_true() {
      this.reg_kai = "false";
      this.number = "";
      this.yanzheng = "";
      this.num_you = "";
      this.password = "";
    },

    // 手机号码

    // 密码
    // showPwd() {
    //   // this.password = this.password === "password" ? "text" : "password";
    // },
    changepass() {
      // console.log("a");
      this.passtype = this.passtype === "password" ? "text" : "password";
    },
    onClickRight() {
      // console.log("asd");
      this.isshow = this.isshow == "false" ? "true" : "false";
    },

    // 登录
    denglu1() {
      let $this = this;
      let cc = this.password1 + "laoxie";

      let password = this.$md5(cc);
      this.$request
        .post("http://120.24.63.27:2001/api/login", {
          username: this.num_you1,
          password: password,
        })
        .then((res) => {
          // console.log(res.data);
          if (res.data.msg == "success") {
            $this.setCookie(
              res.data.data.username,
              res.data.data.authorization,
              2
            );
            $this.$store.commit("saveUserList", res.data.data.username);

            // console.log($this.$store.state.userList);

            this.$router.push("/mine");
            // console.log(res.data.data);username,authorization
          }
        });
    },
  },
};
</script>

<style>
.reg_vue {
  background: white;
  height: 100vh;
}
.xuanxiang .van-dropdown-menu__bar {
  box-shadow: 0 0px 0px rgba(100, 101, 102, 0.12);
}
.van-nav-bar .jiantou {
  color: #000;
}
.no_bordbot::after {
  border: none;
}
.reg_box {
  margin: 0 auto;
  width: 90vw;
  box-sizing: content-box;
  margin-top: 34px;
}
.reg_mint_font {
  color: #232628;
  font-size: 13px;
}
.reg_bor_bot {
  border-bottom: 1px solid #999;
  line-height: 17px;
  margin-bottom: 6px;
}
.reg_bor_bot .van-col {
  width: 100%;
}
.reg_denglu {
  text-align: center;
  width: 100%;
  margin-top: 30px;
  font-size: 17px;
}
</style>