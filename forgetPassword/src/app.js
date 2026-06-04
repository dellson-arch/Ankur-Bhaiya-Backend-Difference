let express = require('express')
let cookieParser = require("cookie-parser");
const authroutes = require('../src/routes/auth.routes')

let app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth' , authroutes)

module.exports = app