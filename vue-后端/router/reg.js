const express = require('express')
const router = express.Router()
const mongon = require('../utils/mongo')
const {formatData} = require('../utils/tools')
const mongo = require('../utils/mongo')
// const { format } = require('path')

//增加
router.post('/',async (req,res) => {
    // general manager: 总经理，executive director：主管，manager:经理，admin：管理（默认）
    let {username,password,email,phone,role,gender} = req.body
    let strArr = ['general_manager','executive_director','manager','admin',]
    if(!role||strArr.includes(role)){
        role = 'admin'
    }
    try{
        let result = await mongo.insert('huauser',{username,password,email,phone,role,gender})
        res.send(formatData())
    }catch(err){
        res.send(formatData({status:400}))
    }

})

//检测用户名是否占用
router.get('/',async (req,res)=>{
    const {username} = req.query
    let result = await mongo.find('user',{username},{field:{username:true}})
    if(result.length > 0){

        res.send(formatData({status:400,istaken:'用户名占用'}))
    }else{
        res.send(formatData())

    }
})

module.exports = router