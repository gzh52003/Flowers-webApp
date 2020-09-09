const express = require('express')
const router = express.Router()
const mongo = require('../utils/mongo')
const { formatData } = require('../utils/tools')

//增加
router.post('/', async (req, res) => {
    // let newData = {}
    /* Cpmc: "一往情深"
        Instro: "精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎"
        ItemCode: "9010966"
        LinePrice: 315
        Price: 239
        Sales: "12.5万" */


    const { Cpmc, Instro, tag_promo, series, LinePrice, Price, ItemCode, Sales, img_url, date = Date.now(), } = req.body
    try {
        const result = await mongo.insert('huagoods', { Cpmc, Instro, tag_promo, series, LinePrice, Price, ItemCode, Sales, img_url })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ status: 400 }))
    }
})
//查询
router.post('/list', async (req, res) => {
    let { page = 1, size = 5, sort = "time", itemcodes, total } = req.body
    const limit = size - 0
    const skip = (page - 1) * size
    sort = sort.split(',')
    let result
    let num
    try {
        if (itemcodes) {
            result = []
            itemcodes = itemcodes.split(',')
            for (let i = 0; i < itemcodes.length; i++) {
                let dataObj = await mongo.find('huagoods', { ItemCode: itemcodes[i] }, { limit, skip, sort })
                result.push(dataObj.res[0])
                num = dataObj.total
            }
        } else {
            let dataObj = await mongo.find('huagoods', {}, { limit, skip, sort, total })
            result = dataObj.res
            num = dataObj.total
        }

        res.send(formatData({ total: num, data: result }))
    } catch (err) {
        res.send(formatData({ status: 400 }))
    }
})
// 单个商品查询
router.get('/single/:id', async (req, res) => {
    const { id } = req.params

    const { res: result } = await mongo.find('huagoods', { ItemCode: id })
    if (result.length > 0) {
        res.send(formatData({ data: result }))
    } else {
        res.send(formatData({ emm: '未查询到商品' }))
    }
})

// 模糊搜索
router.get('/search', async (req, res) => {
    let { page = 1, size = 5, sort = "time", q } = req.query
    const limit = size - 0
    const skip = (page - 1) * size
    sort = sort.split(',')
    try {
        const { res: result } = await mongo.find('huagoods', { Cpmc: { $regex: q } }, { limit, skip, sort })
        res.send(formatData({ data: result }))
    } catch (err) {
        res.send({ status: 400 })
    }

})
//删除
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const result = await mongo.remove('huagoods', { Cpmc: id })
    res.send(formatData())
})

//修改
router.put('/:id', async (req, res) => {
    const { id } = req.params
    let newData = { Cpmc, Instro, tag_promo, series, LinePrice, Price, ItemCode, Sales, img_url } = req.body
    for (let key in newData) {
        if (!newData[key]) {
            delete newData[key]
        }
    }

    let num = 0

    for (let key in newData) {
        num++
    }
    if (num === 0) {
        res.send(formatData({ status: 400, tips: '未传入新参数' }))
    }
    try {
        const result = await mongo.updata('huagoods', { Cpmc: id }, { $set: { ...newData } })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ status: 400 }))
    }
})
module.exports = router