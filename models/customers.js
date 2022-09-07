const mongoose = require('mongoose');

//Declaring Customer Model
const customerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    }]
}, {
    timestamps: true
});

module.exports = Customer = mongoose.model('Customer', customerSchema);