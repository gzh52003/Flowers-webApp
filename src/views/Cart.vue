<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <i class="iconfont icon-zuojiantou" style="font-size:20px;color:#232628"></i>
      </template>
      <template #title>
        购物车
      </template>
      <template #right>
        <i class="iconfont icon-option" style="font-size:16px;color:#232628">
          <listt class="headerRight" v-show="isshow=='true'"></listt>
        </i>
      </template>
    </van-nav-bar>
      <van-card
      :price="item.sales_price"
      :title="item.Instro"
      :thumb="'/img/'+item.ItemCode +'.jpg_220x240.jpg'"
      v-for="item in goodslist"
      :key="item._id"
      
    >
      <template #tag>
        <van-checkbox v-model="item.checked"></van-checkbox>
      </template>
      <template #price>
        <p class="price">
          <del>{{item.LinePrice}}</del>
          <span>{{item.Price}}</span>
          <van-stepper :value="item.qty" input-width="20px" button-size="20px" theme="round" async-change integer @change="changeQty(item._id,$event)" />
          <!-- async-change: 点击按钮时不会直接修改数量，而是根据value的值来显示 -->
        </p>
      </template>
      <template #footer>
        <van-button plain size="mini" type="danger" icon="cross" @click.stop="removeItem(item._id)"></van-button>
      </template>
    </van-card>
    <van-submit-bar :price="totalPrice" button-text="提交订单">
      <van-checkbox v-model="checkAll">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>
<script>
import Vue from "vue";
import { Card, Step, Steps, SubmitBar, Stepper,Checkbox,CheckboxGroup } from "vant";
import listt from '../views/mine/publist'

Vue.use(Card);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(SubmitBar)
Vue.use(Stepper)

export default {
  name: "Cart",
  components: {
    listt,
  },
  data() {
    return {
      active: 0,
      // checkAll:false,
      selecteds:[],
      isshow:'false'
    };
  },
  computed:{
    goodslist(){
      return this.$store.state.cart.goodslist
    },
    
    checkAll:{
      get(){
        return this.goodslist.every(item=>item.checked);
      },
      set(val){
        this.goodslist = this.goodslist.map(item=>{
          item.checked = val;
          return item;
        });
      }
    },
    totalPrice(){
      return this.$store.getters.totalPrice

    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
      
    },
    removeItem(id){
      this.$store.commit('remove',id)
    },
    changeQty(id,qty){
      this.$store.commit('changeQty',{_id:id,qty})
    },
    onClickRight() {
      this.isshow = this.isshow == "false" ? "true" : "false";
    },
    gotoDetail(id){
      this.$router.push('/goods/'+id);
    },
  },
  created(){
    this.$store.commit('displayTabbar',true);
  },
  
};
</script>

<style lang="scss">
  .van-submit-bar{
    bottom:50px;
  }
  .headerRight{
  top:45px!important;
}
</style>