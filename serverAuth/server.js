const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
app.use(cors())
const port = 5000

const AuthRouter  = require('./src/components/auth/AuthRoutes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/auth', AuthRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})