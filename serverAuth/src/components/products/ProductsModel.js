const mongoose = require("mongoose");
const { Schema } = mongoose;

const addProductSchema = new Schema({
 productTitle: String,
 productDesc: String,
 category: String,
 price:Number,
 imageUrl:String,
 createdAt: { type: Date, default: Date.now },
});

const addProducts = mongoose.model('product',addProductSchema)

module.exports = addProducts;
