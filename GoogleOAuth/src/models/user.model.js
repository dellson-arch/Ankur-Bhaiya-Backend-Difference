const mongoose = require('mongoose')

let userSchema = new mongoose.Schema(
    // {
    //     name : {
    //         type : String,
    //         trim : true
    //     },
    //     email : {
    //         type : String,
    //         trim : true,
    //         unique : [true , "email should be unique"],
    //         required : [true , "email should be there"]
    //     },
    //     password : {
    //         type : String,
    //         trim : true,
    //         required : [true , "password is required"]
    //     },
    //     mobile : {
    //         type : String,
    //         trim : true
    //     },
    //     refreshToken : {
    //         type : String
    //     }
    // },
    // {
    //     timestamps : true
    // },

    {
      name : {
        type : String,
      },
      email : {
        type : String,
        required : true
      },
      password : {
        type : String
      },
      provider :{
        type : String,
        enum : ["google" , facebook]
      },
      provider_id : {
        type : String
      }
    },
    {
        timeStamps : true
    }
)

let userModel = mongoose.model("Users" , userSchema)

module.exports = userModel