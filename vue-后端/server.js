const express = require('express')
const app = express()//开启服务器

//引入首页路由
const allRouter = require('./router')

//访问api访问数据库操作方法
app.use('/api',allRouter)

app.listen(2001,()=>{
    console.log('服务器开启成功，端口号2001')
})