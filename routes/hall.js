/**
 * hall 游戏大厅
 */

const express = require('express')
const router = express.Router()
const hall = require('../api/hall/LoginPcConfirm')


router.post('/LoginPcConfirm',hall.LoginPcConfirm)
router.post('/scanningQr',hall.ScanningQr)
module.exports = router