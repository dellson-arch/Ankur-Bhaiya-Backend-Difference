const mongoose = require('mongoose')

let connectToDB = async() => {
 try {
    await mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log("mongodb connected")
    })
 } catch (error) {
    console.log("error in db", error);
 }
}

module.exports = connectToDB