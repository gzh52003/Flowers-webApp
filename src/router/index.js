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
    component:()=>import('../views/classification/List.vue')

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

export default router
