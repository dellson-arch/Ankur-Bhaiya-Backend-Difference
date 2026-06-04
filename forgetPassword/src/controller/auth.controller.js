const generateToken = require("../helpers/token")
const userModel = require("../models/user.model")


const register = async(req , res)=>{
 const{name , email ,password} = req.body 
 if(!name , !email){
    return res.status (404).json({
        message: "all fields are required"
    })
 }

 const isExisted = await userModel.findOne({email})
 if(isExisted){
    return res.status(409).json({
        message : "user already existed"
    })
 }

 const newUser = await userModel.create({
    name ,
    email ,
    password
 })

 const token = generateToken(newUser._id) //_id aise likhte hai because mongodb bydefault _id aise deta hai

 const cookie = res.cookie('token' , token)

 return res.status(200).json({
    message : "user registered successfully",
    name ,
    email
 })
 
}

const forgetPassword = (req , res)=>{
   
}

module.exports = {
    forgetPassword
}