const {generateToken}= require("../helpers/token")
const userModel = require("../models/user.model")
const { registerService, forgetService } = require("../services/auth.service")


const registerController = async(req , res)=>{
 try {
    const user = registerService(req.body)

    const cookie = res.cookie('token' , token)

    return res.status(200).json({
    message : "user registered successfully",
    name ,
    email
 })
 } catch (error) {
     res.status(400).json({
      message: error.message,
    });
 }
}

const forgetPasswordController = (req , res)=>{
   try {
     const result = forgetService(req.body)

     return res.status(200).json({
        message : "Link sent",
     })
   } catch (error) {
      res.status(400).json({
      message: error.message,
    });
   }
}

module.exports = {
    forgetPassword,
    registerController
}