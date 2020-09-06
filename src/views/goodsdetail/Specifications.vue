<template>
    <div>
        <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :quota="quota"
        :quota-used="quotaUsed"
        :hide-stock="sku.hide_stock"
        :message-config="messageConfig"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
        />
    </div>
  
</template>

<script>
import Vue from 'vue';
import { Sku } from 'vant';

Vue.use(Sku);
export default {
    name: "Specifications",
 data() {
    return {
      show: true,
      sku: {
        // 数据结构见下方文档
      },
      goods: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
      },
    };
  },
}
</script>

<style>

</style>