const userModel = require("../models/user.model")
const { generateAccessToken, generateRefreshToken } = require("../utils/token")

let registerController = (req , res)=>{
  try {
    let {name ,  email , password , mobile } = req.body
    if(!email || !password) {
      return res.status(400).json({
        message : 'All fields are required'
      })
    }

    const existingUser = userModel.findOne({email})

    if(existingUser){
        return res.status(409).json({
            message : "user already exists"
        })
    }

    const newUser = await userModel({
     name,
     email,
     password,
     mobile
    })
    
    let accessToken = generateAccessToken(newUser._id)
    let refreshToken = generateRefreshToken(newUser._id)

    newUser.refreshToken = refreshToken

    await newUser.save()

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

     return res.status(201).json({
      message: "User registered Successfully",
      user: newUser,
    });
  } catch (error) {
     return res.status(500).json({
      message: "internal server error",
    });
  }

}