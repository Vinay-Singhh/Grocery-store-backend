const Product = require('../models/productDetails');

module.exports.createProduct = async function (req, res) {
    try {
        // check for correct input
        if (!req.body.p_category || !req.body.p_price || !req.body.p_quantity || !req.body.p_info) {
            return res.status(400).json({
                message: "Please enter correct data"
            })
        }
        // find product
        let product = await Product.findOne({
            info: req.body.p_info
        });
        //if exist
        if (product) {
            return res.status(400).send({
                message: 'Product already exists, Enter new one'
            });
        }
        // if not exist create product
        let newProduct = await Product.create(req.body);
        return res.status(200).send({
            message: "Product added successfully",
            newProduct
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

// Update price of the product
module.exports.updatePrice = async function (req, res) {
    try {
        let product = await Product.findById(req.params.id);
        let price = parseInt(req.body.p_price);
        console.log(product, price);
        if (price < 0) {
            return res.status(200).json({
                data: {
                    message: "Price could not be less then 0",
                }
            })
        } else {
            product.p_price = price
            await product.save()
            return res.status(200).json({
                data: {
                    message: "Product price updated successfully",
                    products: product
                }
            })
        }
    } catch (err) {
        return res.send('Error in updating price of the product ' + err);
    }
}