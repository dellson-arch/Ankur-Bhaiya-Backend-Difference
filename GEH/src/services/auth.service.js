const userModel = require("../../../src/models/user.model");

let registerService = (data)=>{
  let { name, email, password } = req.body;

    if (!name || !email || !password)
    throw new ApiError(200, "all fields are required");

    let user = await userModel.create({
        name , 
        email , 
        password
    })

    return user
}

module.exports = {
  registerService,
};