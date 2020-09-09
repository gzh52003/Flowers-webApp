const express = require('express')
const router = express.Router()
const mongo = require('../utils/mongo')
const {formatData} = require('../utils/tools')

router.delete('/:id', async (req,res)=>{
    const {id } = req.params
    try{
        const result = await mongo.remove('huauser',{_id:id})
        res.send(formatData())
    }catch(err){
        res.send(formatData({status:400}))
    }
})

module.exports = router