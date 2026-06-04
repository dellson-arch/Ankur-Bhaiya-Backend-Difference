const express = require('express')
const {
    forgetPasswordController,
    registerController
} = require('../controller/auth.controller')

const router = express.Router()

router.post('/register' , registerController)
router.post('/forget-password' , forgetPasswordController)

module.exports = router