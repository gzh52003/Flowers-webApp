const express = require('express')
const router = express.Router()
const mongo = require('../utils/mongo')
const { formatData } = require('../utils/tools')

router.get('/', async (req, res) => {
    const { page = 1, size = 5, total } = req.query
    const limit = size - 0
    const skip = (page - 1) * size


    const dataObj = await mongo.find('huauser', {}, { limit, skip, field: { password: false }, total })
    let result = dataObj.res
    const num = dataObj.total
    res.send(formatData({ total: num, data: result }))
})

module.exports = router