const userModel = require("../../../src/models/user.model");
const { registerService } = require("../services/auth.service");

let registerController = async(req,res)=>{
    
let result = await registerService(req.body)

return res.status(201).json({
    message : "registered sucessfully",
    result
})
}