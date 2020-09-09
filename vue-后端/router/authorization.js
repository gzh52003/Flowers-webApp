const express = require('express')
const token = require('../utils/tooken')
const { formatData } = require('../utils/tools')
const router = express.Router()

router.get('/', (req,res)=>{
    const {authorization} = req.query

    if(token.verify(authorization)){
        res.send(formatData())
    }else{
        res.send(formatData({status:300}))
    }
})

module.exports = router