const express = require('express')
const router = express.Router()
const mongo = require('../utils/mongo')
const { formatData } = require('../utils/tools')
// const { ObjectId } = require('mongodb')

//增加
router.post('/', async (req, res) => {

    let { consignee_addr, create_time, is_send, order_fapiao_company, order_fapiao_content, order_fapiao_title, order_id, order_number, order_pay, order_price, pay_status, updata_time = Date.now(), } = req.body

    try {
        mongo.insert('order', { consignee_addr, create_time, is_send, order_fapiao_company, order_fapiao_content, order_fapiao_title, order_id, order_number, order_pay, order_price, pay_status, updata_time })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ status: 400 }))
    }
})
//查询
router.get('/', async (req, res) => {
    const { page = 1, size = 5, total } = req.query
    const limit = size - 0
    const skip = (page - 1) * size

    try {
        const dataObj = await mongo.find('order', {}, { limit, skip, total })
        const result = dataObj.res
        const num = dataObj.total
        res.send(formatData({ total: num, data: result }))
    } catch (err) {
        res.send(formatData({ status: 400 }))
    }
})

//删除
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        await mongo.remove('order', { _id: id })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ status: 400 }))
    }
})


//修改
router.put('/:id', async (req, res) => {
    /* consignee_addr: ""
       create_time: 1512535620
       is_send: "否"
       order_fapiao_company: ""
       order_fapiao_content: ""
       order_fapiao_title: "个人"
       order_id: 68
       order_number: "itcast-g7kmck725jaujgdts"
       order_pay: "0"
       order_price: 40
       pay_status: "0"
       trade_no: ""
       update_time: 1512535620
       user_id: 1

    */
    const { id } = req.params



    let newData = { consignee_addr, is_send, order_fapiao_company, order_fapiao_content, order_fapiao_title, order_id, order_number, order_pay, order_price, pay_status, update_time } = req.body
    console.log(newData)
    if (!newData.update_time) {
        newData.update_time = Date.now()
    }


    try {
        const result = await mongo.updata('order', { _id: id }, { $set: { ...newData } })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ status: 400 }))
    }
})



module.exports = router