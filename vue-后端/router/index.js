const express = require('express')
//路由中间件
const router = express.Router()
//引入会话
const session = require('express-session')
//交互参数规范
// const {formatData} = require('../utils/tools')
//跨域
const {cors }= require('../filter/cors')
//格式化中间参数
router.use(express.urlencoded({ extended: false }), express.json())
router.use(cors)
//使用session会话
router.use(session({
    secret: 'laoxie',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        // 设置cookie有效期
        maxAge: 1000*60*60*2
    }
}))
//api方法、
//登录
const loginRouter = require('./login')
//批量获取
const adminListRouter = require('./adminList')
//注册/增加
const regRouter = require('./reg')
//商品
const goodsRouter = require('./goods')
//修改
const updataRouter = require('./updata')
//删除并
const removeRouter = require('./remove')
//token验证
const authorizationRouter = require('./authorization')
//订单
const orderRouter = require('./order')
const identityRouter = require('./identity')
//验证码
const vcodeRouter = require('./vcode')
const logisticsRouter = require('./logistics')

router.use('/login',loginRouter)
router.use('/adminList',adminListRouter)
router.use('/reg',regRouter)
router.use('/goods',goodsRouter)
router.use('/updata',updataRouter)
router.use('/remove',removeRouter)
router.use('/jwtverify',authorizationRouter)
router.use('/order',orderRouter)
router.use('/identity',identityRouter)
router.use('/vcode',vcodeRouter)
router.use('/logistics',logisticsRouter)
module.exports = router 