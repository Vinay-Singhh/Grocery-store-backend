const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const Schema = mongoose.Schema;

//Declaring User Model
const orderSchema = new Schema(
    {

        // owner: {
        //     type: Schema.Types.ObjectId,
        //     required: true,
        //     ref: "User",
        // },
        owner: {
            type: String,
            required: true
        },
        // OrderItems: [
        //     {
                // productID: {
                //     type: Schema.Types.ObjectId,
                //     required: true,
                //     ref: "Product",
                // },
                productID: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true,
                    default: 1
                },
                price: {
                    type: Number,
                    required: true
                },
        //     },
        // ],
        totalPrice: {
            type: Number,
            required: true
        },
        paymentInfo: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = Order = mongoose.model('Order', orderSchema);