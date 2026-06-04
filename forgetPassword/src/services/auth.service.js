const { generateRawToken } = require("../helpers/token");
const userModel = require("../models/user.model")

const registerService = ({name , email, password})=>{

 const isExisted = await userModel.findOne({email})
 if(isExisted){
    return res.status(409).json({
        message : "user already existed"
    })
 }
 const hashedPassword = await bcrypt.hash(password, 10);

 const user = await userModel.create({
    name ,
    email ,
    password:hashedPassword
 })

 const token = generateToken(newUser._id) //_id aise likhte hai because mongodb bydefault _id aise deta hai

 return {
    token ,
    user
 }
}


const forgetService = async({email})=>{
   if(!email){
    throw new Error("invalid credentials")
   }

   const isExists = await userModel.findOne({email})

    if (!isExist)
    return res.status(404).json({
      message: "user not found",
    });

    const token = generateRawToken(isExists._id)


}

module.exports = {
    forgetService,
    registerService
}