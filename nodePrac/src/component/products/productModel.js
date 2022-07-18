const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    category: String,
    price: Number,
    createdAt: { type: Date, default: Date.now },
});

const ProductModel = mongoose.model("products", productSchema);
module.exports = ProductModel;