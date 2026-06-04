const express = require('express')
const {
    forgetPasswordController,
    register
} = require('../controller/auth.controller')

const router = express.Router()


router.post('/forget-password' , forgetPasswordController)