/**
 * admin 游戏大厅后台
 */

const express = require('express')
const router = express.Router()
const adminLogin = require('../api/admin/QrLogin')
const {Upload} = require('../api/admin/Upload')
const {AddGame} = require('../api/admin/AddGame')


//登录
router.get('/QrLogin',adminLogin.QrLogin)
router.get('/LoginStatus',adminLogin.LoginStatus)
router.get('/statusQr',adminLogin.statusQr)
//图片上传
router.post('/Upload',Upload)
//新增游戏
router.post('/AddGame',AddGame)
module.exports = router