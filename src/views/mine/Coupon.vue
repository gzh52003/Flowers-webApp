<template>
  <div>
    <mineheader message="我的优惠券" shower="false"></mineheader>
  </div>
</template>

<script>
import mineheader from "./mineheader.vue";
export default {
  components: {
    mineheader,
  },
  created(){
    this.$store.commit('displayTabbar',false);
  },
  destroyed(){
    this.$store.commit('displayTabbar',true);
  }
};
</script>

<style >
</style>