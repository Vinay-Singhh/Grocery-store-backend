const Product = require('../models/productDetails');

module.exports.createProduct = async function (req, res) {
    try {
        let product = Product.findOne({ p_name: req.body.p_name });
        //if not found than create new product
        if (!product) {
            Product.create(req.body);
            return res.status(200).json({
                message: "Product created successfully"
            });
        } else {
            return res.status(200).json({
                message: "Same product already exist"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

// Update price of the product
module.exports.updatePrice = async function (req, res) {
    // console.log("Inside updatePrice", req.params.id);
    try {
        const number = req.body.update_price
        console.log("Number", number);
        const result = await Product.findByIdAndUpdate(id, number);
        result.p_price = number;
        await result.save();
        return res.status(200).json({
            result,
            data: {
                message: "Price updated successfully"
            }
        });

    } catch (err) {
        console.log("error while updating price", err);
        return;
    }

}

// module.exports.getAllorders = async function (req, res) {
//     console.log("Inside get all orders", req.params.id);
//     try {
//         let customer = await Customer.findById(req.params.id).populate();
//         return res.status(200).json({
//             data: {
//                 message: `Order list for ${customer.name}`,
//                 orders: customer.orders
//             }
//         })
//     } catch (err) {
//         return res.send('Error in fetching order list: ' + err);
//     }
// }