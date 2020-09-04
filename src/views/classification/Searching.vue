<template>
    <div class="search-main">
        <van-search
        v-model="value"
        shape="round"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        >
        <template #action>
            <div @click="onSearch">搜索</div>
        </template>
        </van-search>
         <van-row class="hot-search">
            <van-col span="24">热门搜索</van-col>
            
        </van-row>
        <van-row class="hot-tags">
            <van-col>爱情鲜花</van-col>
            <van-col>向日葵</van-col>
            <van-col>生日蛋糕</van-col>
            <van-col>康乃馨</van-col>
            <van-col>百合</van-col>
            <van-col>满天星</van-col>
        </van-row>
    </div>
</template>
<script>
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
export default {
    
}
</script>
<style lang="scss">
.search-main{
    padding:5px 16px;
}
.hot-search{
    margin:18px 0;
    font-weight: 500;
    font-size:14px;
}
    .hot-tags{
        .van-col{
            display: inline-block;
            background-color: #E9ECF0;
            padding: 8px 13px;
            font-size: 12px;
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }
</style>