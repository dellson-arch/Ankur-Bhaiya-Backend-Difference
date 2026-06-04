let express = require('express')
let cookieParser = require("cookie-parser");
let app = express()

app.use(express.json())
app.use(cookieParser())

module.exports = app