const mongoose = require('mongoose');

//Declaring Customer Model
const userSchema = new mongoose.Schema({
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

module.exports = User = mongoose.model('User', userSchema);