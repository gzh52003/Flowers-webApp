const express = require('express')
const router = express.Router()
const mongo = require('../utils/mongo')
const { formatData } = require('../utils/tools')
router.post('/:id', async (req, res) => {
    const { id } = req.params
    const { role } = req.body
    mongo.updata('huauser', { _id: id }, { $set: { role } })
    res.send(formatData())
})
// general manager: 总经理，executive director：主管，manager:经理，admin：管理（默认）
module.exports = router