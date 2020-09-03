<template>
  <div>
    <van-nav-bar title="登录注册" class="no_bordbot">
      <template #right>
        <van-dropdown-menu :overlay="cuo" :close-on-click-outside="cuo" class="xuanxiang">
          <van-dropdown-item
            :options="option1"
            title-class="iconfont icon-option"
            title
            @change="change"
          />
        </van-dropdown-menu>
      </template>
      <template #left>
        <van-icon name="arrow-left" class="jiantou" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, DropdownMenu, DropdownItem } from "vant";

Vue.use(NavBar);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
export default {
  data() {
    return {
      value1: 0,
      cuo: false,
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
    };
  },
  methods: {
    change(value) {
      console.log(value);
    },
  },
};
</script>

<style>
.xuanxiang .van-dropdown-menu__bar {
  box-shadow: 0 0px 0px rgba(100, 101, 102, 0.12);
}
.van-nav-bar .jiantou {
  color: #000;
}
.no_bordbot {
  border: none;
}
</style>