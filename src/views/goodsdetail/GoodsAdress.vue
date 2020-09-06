<template>
  <van-area
  title="标题"
  :area-list="areaList"
  :columns-placeholder="['请选择', '请选择', '请选择']"
/>
</template>

<script>
import Vue from 'vue';
import { Area } from 'vant';

Vue.use(Area);
export default {
    name:'GoodsAdress'
    
}
</script>

<style>

</style>