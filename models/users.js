const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Declaring User Model
const userSchema = new Schema({
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
    // Orders: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Order",
    //     },
    // ],
},
    {
        timestamps: true
    }
);

module.exports = User = mongoose.model('User', userSchema);