let express = require('express')
let authToken = require('../src/routes/auth.routes')
let app = express()

app.use = (express.json())
app.use = ('/api/auth' , authToken)

module.exports = app