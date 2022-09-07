const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const Schema = mongoose.Schema;

//Declaring User Model
const orderSchema = new mongoose.Schema({
    productList: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
    }],
    totalPrice: {
        type: Number,
        required: true,
    },
    paymentInfo: {
        type: String,
        required: true,
    },
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'Customer',
    // },
}, {
    timestamps: true
});

module.exports = Order = mongoose.model('Order', orderSchema);