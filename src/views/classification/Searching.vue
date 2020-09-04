<template>
    <div >
        <van-search
        v-model="searchValue"
        shape="round"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        :clearable="true"
        :autofocus="true"
        clear-trigger="always"
        class="search-header"
        >
        <template #left>
            <div class="search-left-errow" @click="searchQuit">
              <svg t="1599188898366" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5292" width="200" height="200"><path d="M706.4 879.7c-11.7 11.7-30.7 11.7-42.4 0L317.6 533.2c-11.7-11.7-11.7-30.7 0-42.4s30.7-11.7 42.4 0l346.5 346.5c11.7 11.7 11.7 30.7-0.1 42.4z" fill="#323333" p-id="5293"></path><path d="M706.5 144.3c11.7 11.7 11.7 30.7 0 42.4L359.9 533.2c-11.7 11.7-30.7 11.7-42.4 0s-11.7-30.7 0-42.4L664 144.3c11.7-11.7 30.7-11.7 42.5 0z" fill="#323333" p-id="5294"></path></svg>
            </div>
        </template>
        <template #action>
            <div @click="onSearch" >搜索</div>
        </template>
        </van-search>
        <div class="search-main">
         <van-row class="hot-search">
            <van-col span="24">热门搜索</van-col>
            
        </van-row>
        <van-row class="hot-tags" @click="typeText">
            <van-col>爱情鲜花</van-col>
            <van-col>向日葵</van-col>
            <van-col>生日蛋糕</van-col>
            <van-col>康乃馨</van-col>
            <van-col>百合</van-col>
            <van-col>满天星</van-col>
        </van-row>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
export default {
    data(){
        return{
            searchValue:'',
        }
    },
    methods:{
        //返回上一层
        searchQuit(){
            this.$router.push('/classification')
        },
        //点击搜索
        onSearch(){
           console.log(this.searchValue,'你好')
           this.$router.push('/list')
        },
        typeText(evt){
            const e = evt || window.event
            const target = e.target || e.srcElement
            this.searchValue = target.innerText
            this.onSearch()
        }

    },
 
}
</script>
<style lang="scss">
 html,body{
   background:#fff;
    height:100%;
    
}
.search-header{
    height:46px;
    padding:0;
    .van-cell{
        padding:0px 12px 0px 8px;
        line-height:28px;
        margin:4px 0;
    }
    .search-left-errow{
        line-height:1px;
        width:36px;
        text-align:center;
        svg{
            height:20px;
            width:20px;
        }
    }
}
.van-search__action{
    width:60px;
    height:28px;
    line-height:28px;
    margin-left:8px;
    margin-right:12px;
    background: #ff734c;
    font-size:14px;
    color:#fff;
    border-radius:14px;
    padding:0px;
    text-align: center;
}
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