const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    category: String,
    price: Number,
    createdAt: { type: Date, default: Date.now },
});

const orderModel = mongoose.model("orders", orderSchema);
module.exports = orderModel;