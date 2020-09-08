<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" class="jiantou public_blo" />
      </template>
      <template #right>
        <van-icon name="wap-nav" class="jiantou public_blo" v-show="shower=='true'" />
      </template>
      <template #title>{{message}}</template>
    </van-nav-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);
export default {
  name: "mineheader",

  props: {
    message: String,
    shower: String,
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  created(){
    this.$store.commit("displayTabbar", false);
  },
  destroyed() {
    this.$store.commit("displayTabbar", true);
  },
};
</script>

<style scoped>
.public_blo {
  color: #000;
}
</style>