const express = require('express')
var bodyParser = require('body-parser')

require('dotenv').config()
console.log(process.env)

const app = express()
const port = 5000

const productRoutes = require("./component/products/productRoutes")
const setupDB = require("./config/db")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

setupDB();
app.use('/products', productRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// for single file.

// let products = []
// app.get('/getProducts', (req, res) => {
//   let response = {
//     status: 200,
//     message: "Successfully get data",
//     data: products
//   }
//   res.send(response)
// })

// app.post('/addProduct', (req, res) => {
   
//    if (!req.body.title || !req.body.category || !req.body.price) {
//     let response = {
//         status: 400,
//         message: "Params are required: should be title, category and prices",
//       }
//       res.send(response)
//       return;
//    }
// let product = {
//     title: req.body.title,
//     category: req.body.category,
//     price: req.body.price,
//     createdAt: new Date()
// }
// products.push(product)

//   let response = {
//     status: 200,
//     message: "Successfully add data",
//   }
//   res.send(response)
// })




