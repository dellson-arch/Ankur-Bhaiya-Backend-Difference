let express = require('express')
let cors = require("cors");
let authRoutes = require('../src/routes/auth.routes')
let passport = require('passport');
const userModel = require('./models/user.model');
let GoogleStrategy = require('passport-google-oauth20').Strategy

let app = express()

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))
app.use(express.json())
app.use(passport.initialize())

passport.use(
   {
    client_id : "",
    client_secret : "",
    callbackURL : ""
   },
   async(accessToken , refreshToken , profile , cb)=>{
     //mere ko chahiye name and profile
     let name = profile.name.givenName
     let email = profile.emails[0].value

     let isExisted = await userModel.findOne({email})

     if(isExisted){
      return cb(null , isExisted)
     }

     let newUser = await userModel.create({
        name ,
        email ,
        provider : "google",
        provider_id : "profile.id"
     })

     return cb(null , newUser)
   }
)
app.use('/' , (req,res)=>{
    return res.send("tumse hoga par abhi time hai!")
})
app.use('/api/auth' , authRoutes)

module.exports = app