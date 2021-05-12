const mongoose = require('mongoose');
const Product = require('./product');

const orderSchema = new mongoose.Schema({
    txnid: {
        type: String,
        required: true,
        unique:true
    },
    amount: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default:Date.now
    },
    orderedProducts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ]
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;