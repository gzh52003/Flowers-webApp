import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/classification',
    name: 'Classification',
    component: () => import('../views/classification/Classification.vue')
  },
  {
    path: '/searching',
    name: 'Searching',
    component: () => import('../views/classification/Searching.vue')
  },
  {
    path:'/list',
    name:'List',
    component:()=>import('../views/classification/List.vue'),
      
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/Mine.vue'),
  }, {
    path: '/mine/order',
    name: 'Order',
    component: () => import('../views/mine/Order.vue'),
  }, {
    path: '/mine/coupon',
    name: 'Coupon',
    component: () => import('../views/mine/Coupon.vue'),
  }, {
    path: '/mine/card/buycard',
    name: 'Buycard',
    component: () => import('../views/mine/Buycard.vue'),
  }, {
    path: '/mine/card',
    name: 'Card',
    component: () => import('../views/mine/Card.vue'),
  },
  {
    path: '/mine/balance',
    name: 'Balance',
    component: () => import('../views/mine/Balance.vue'),
  },
  {
    path: '/mine/balance/speak',
    name: 'balaspeak',
    component: () => import('../views/mine/connect/balaspeak.vue'),
  },
  {
    path: '/mine/balance/mes',
    name: 'balames',
    component: () => import('../views/mine/connect/balames.vue'),
  },

  {
    path: '/mine/integral',
    name: 'Integral',
    component: () => import('../views/mine/Integral.vue'),
  },
  {
    path: '/mine/integral/speak',
    name: 'intespeak',
    component: () => import('../views/mine/connect/intespeak.vue'),
  },
  {
    path: '/mine/integral/mes',
    name: 'intemes',
    component: () => import('../views/mine/connect/intemes.vue'),
  },
  {
    path: '/mine/integral/change',
    name: 'intechange',
    component: () => import('../views/mine/connect/intechange.vue'),
  },
  {
    path: '/goods/:id',
    name: 'Goods',
    component: () => import('../views/goodsdetail/Goods.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import('../views/Reg.vue')
  },
  {
    path: '/contant',
    name: 'Contant',
    component: () => import('../views/Contant.vue')
  }
]



const router = new VueRouter({
  routes
})


// router.beforeEach((to, from, next) => {
//   // console.log(to.path)
//   if (to.path === '/mine/card') {
//     next();
//   } else {
//     // let token = localStorage.getItem('Authorization');
//     // console.log(token)
//     // console.log(this)
//     // if (token === 'null' || token === '') {
//     //   next('/login');
//     // } else {
//     next();
//     // }
//   }
// });
export default router
