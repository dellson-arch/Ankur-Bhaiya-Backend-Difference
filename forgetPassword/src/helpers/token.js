const jwt = require('jsonwebtoken')

const generateToken = (userId)=>{
  return jwt.sign({id : userId} , process.env.JWT_SECRET,{
    expiresIn : '1h'
  })
}

const generateRawToken = (userId)=>{
  return jwt.sign({id : userId} , process.env.RAW_TOKEN,{
    expiresIn : '1h'
  })
}

module.exports = {generateToken,generateRawToken}