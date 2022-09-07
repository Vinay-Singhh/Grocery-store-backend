const mongoose = require("mongoose");

//Declaring User Model
const productSchema = new mongoose.Schema({
    p_category: {
        type: String,
        required: true
    },
    p_info: {
        type: String,
        required: true
    },
    p_price: {
        type: Number,
        required: true
    },
    p_quantity: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

module.exports = Product = mongoose.model("Product", productSchema);
