const express = require('express')
const router = express.Router()
const mongo = require('../utils/mongo')
const {formatData} = require('../utils/tools')

router.put('/:id',async (req,res)=>{
    const {id} = req.params
    const {password,email,phone,role,gender} = req.body
    let obj = {}
    if(password){
        obj.password = password
    }

    if(email){
        obj.email = email
    }
    if(phone){
        obj.phone = phone
    }
    if(role){
        obj.role = role
    }
    if(gender){
        obj.gender = gender
    }
    //检测是否传入参数
    let num = 0
    for(let key in obj){
        num++
    }
    if(num === 0){
        res.send(formatData({status:400}))
        return
    }
    try{

        const result = await mongo.updata('huauser',{_id:id},{$set:obj})
        res.send(formatData({data:{_id:id,...obj}}))
    }catch(err){
        res.send(formatData({status:400}))
    }
})


module.exports = router