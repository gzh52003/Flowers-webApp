<template>
  <div>
      <van-search
      class="search"
      
      shape="round"
      background="#fff"
      placeholder="搜索鲜花、蛋糕、礼品"
      @focus="classificationFocus"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
export default {
  methods:{
    classificationFocus(){
     this.$router.push('/searching')
    }
  }
}
</script>

<style lang='scss'>
// html,body{
//   background:#fff;
//   height:100%;
//   font-size:37.5px;
// }
  .search{
    height:46px;
    border-bottom: 2px solid #F1F3F6;
    padding:0px ;
        margin: 4px 12px;
    padding-left: 8px;
    .van-search__content {
      background:#F3F5F7;
    }
  }
</style>
