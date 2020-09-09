const express = require('express')
const router = express.Router()
const mongo = require('../utils/mongo')
const {formatData} = require('../utils/tools')

router.get('/:id',async (req,res)=>{
    const {id} = req.params
    try{

        const result = await mongo.find('logistics',{order_id:id})
        if(result.length > 0){
            res.send(formatData({data:result})) 

        }else{
            res.send(formatData({tips:'未查询到物流信息',status:400}))
        }
    }catch(err){
        res.send(formatData({status:400}))
    }
})

router.post('/',async (req,res)=>{
    const {order_id,ftime,time,location,context}= req.body
    try{

        mongo.insert('logistics',{order_id,ftime,time,location,context})
        res.send(formatData())
    }catch(err){
        res.send(formatData({status:400}))
    }
})

module.exports = router 
