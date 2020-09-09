const express = require('express')
const router = express.Router()
const mongo = require('../utils/mongo')
const {formatData,md5} = require('../utils/tools')
const token = require('../utils/tooken')
const session = require('express-session')

//登录验证
router.post('/',async (req,res)=>{
    let {username,password,mdl,vcode} = req.body
        //获取到数据，默认过滤掉密码
        let{ res:result }= await mongo.find('huauser',{username,password},{field:{password:false}})
    if(result.length > 0){
        let authorization
        // if(mdl === 'true'){
            authorization = token.create(username)
        // }
        //拿到数组第1条数据
        result = result[0]
        //将令牌添加到返回结果，给出响应返回
        result.authorization = authorization
        res.send(formatData({data:result}))
    }else{
        res.send(formatData({status:400}))
    }
})


router.get('/:id',async(req,res)=>{
    const {id} = req.params;console.log('id=',id)

    const result = await mongo.find('huauser',{_id:id},{
        // 过滤字段：password不返回前端
        field:{password:false}
    });
    console.log(result)
    res.send(formatData({data:result[0]}));
})

module.exports = router