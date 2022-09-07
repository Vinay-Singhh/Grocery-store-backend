const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Declaring User Model
const productSchema = new Schema({
    p_user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    p_name: {
        type: String,
        required: true
    },
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
},
    {
        timestamps: true
    }
);

module.exports = Product = mongoose.model("Product", productSchema);
