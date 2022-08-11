const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
require('dotenv').config()

const port = 5000
const app = express();

const AuthRouter  = require('./src/components/auth/AuthRoutes')
const setupDB = require('./src/config/db')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

setupDB()
app.use('/auth', AuthRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})