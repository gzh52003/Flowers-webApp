<template>
  <div>
    <div class="search-box">
      <van-search
        class="search"
        shape="round"
        background="#fff"
        placeholder="搜索鲜花、蛋糕、礼品"
        @focus="classificationFocus"
      />
    </div>
    <section class="catebox">
      <van-sidebar v-model="activeKey" class="sidebar" @change="tabChange">
        <van-sidebar-item title="热门推荐" />
        <van-sidebar-item title="鲜花" />
        <van-sidebar-item title="永生花" />
        <van-sidebar-item title="蛋糕" />
        <van-sidebar-item title="特色礼品" />
        <van-sidebar-item title="礼篮" />
        <van-sidebar-item title="绿植花卉" />
      </van-sidebar>
      <section class="catebox-details">
        <!-- 热门推荐 -->
        <article class="catebox-details-mode"
         v-for="(item,idx) in categoryList" 
         :key="idx"
         v-show="idxActive===idx">
          <header class="catebox-details-banner">
            <a href="#">
              <img :src="item[0]['header_img']" alt />
             
            </a>
          </header>

          <div class="catebox-details-body" v-for="body in item" :key="body.header_img">
            <!-- {{body}} -->
            <van-row class="catebox-details-title" type="flex" v-show="body.leftText">
              <van-col span="12" class="catebox-details-title-left">{{body.leftText?body.leftText:''}}</van-col>

              <van-col span="12" class="catebox-details-title-right">
                <a href="#">
                  <i :class="'iconfont'+ body.rightIcon"></i>
                  {{body.rightText}}
                </a>
              </van-col>
            </van-row>
            <van-grid :column-num="3"  >
              <van-grid-item
                v-for="key in body.mudiArr"
                :key="key.img_url"
                :icon="key.img_url"
                :text="key.text"
                class="catebox-details-item"
              ></van-grid-item>
            </van-grid>
          </div>
        </article>

     
      
      </section>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import { Search, Sidebar, SidebarItem } from "vant";
import date from "./category";

Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Search);
export default {
  data() {
    return {
      activeKey: 0,
      categoryList:date,
      idxActive: 0,
    };
  },
  methods: {
    classificationFocus() {
      this.$router.push("/searching");
    },
    tabChange(idx) {
      this.idxActive = idx;
    },
  },
};
</script>

<style lang='scss'>
// html,body{
//   background:#fff;
//   height:100%;
//   font-size:37.5px;
// }
.search-box {
  background: #fff;
  padding: 4px 12px;
  border-bottom: 2px solid #f1f3f6;
}
.search {
  height: 46px;

  padding: 0px;

  padding-left: 8px;
  .van-search__content {
    background: #f3f5f7;
  }
}
.catebox {
  position: relative;
  width: 100%;
  height: calc(100vh - 50px - 46px);
}
// 侧边栏
.sidebar {
  width: 21%;
  border-right: 1px solid #e9ecf0;

  .van-sidebar-item {
    padding: 0;
    height: 48px;
    text-align: center;
    line-height: 48px;
    background: #fff;
    &::before {
      height: 32px;
      background-color: #ff734c;
    }
  }
  .van-sidebar-item--select {
    color: #ff734c;
  }
}
// 右侧
.catebox-details {
  // width:200px;
  // height:200px;
  background: #fff;
  position: absolute;
  left: 21%;
  right: 0;
  top: 0px;
  bottom: 0px;
  .catebox-details-mode {
    padding: 12px 12px 44px;
    // display:none;
    .catebox-details-banner {
      height: 98px;
      margin-bottom: 12px;
      a {
        display: block;
        height: 100%;
        img {
          width: 100%;
          vertical-align: middle;
        }
      }
    }
    .catebox-details-body {
      padding: 8px 4px;
      margin-bottom: 12px;
      box-shadow: 0px 2px 6px 0px #e9ecf0;
      border-radius: 2px;
      .catebox-details-title {
        // display:flex;
        margin-bottom: 12px;
        padding: 0 12px;

        .catebox-details-title-left,
        .catebox-details-title-right {
          height: 20px;
          line-height: 20px;
          font-size: 14px;
        }
        .catebox-details-title-right {
          text-align: right;
          color: #71797f;
          a {
            display: inline-block;
            height: 36px;
            padding: 0px 4px;
            font-size: 12px;
            color: inherit;
          }
        }
      }
      .catebox-details-item {
        padding: 8px 0px;
        .van-grid-item__content {
          padding: 0;
          .van-icon__image {
            width: 56px;
            height: 56px;
          }
          .van-grid-item__text {
            font-size: 12px;
            font-weight: 300;
            line-height: 1.3333;
            max-width: 6em;
            color: #232323;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
