const User = require('../models/users');
const Order = require('../models/c_orders')

module.exports.lists = async function (req, res) {
    try {
        let lists = await User.find({});

        if (lists) {
            res.status(200).json({
                data: {
                    lists
                }
            });
        } else {
            res.status(500).json({
                message: "Internal server error"
            });
        }
    } catch (err) {
        console.log("Error while showing all products", err);
        return;
    }
}


module.exports.create = function (req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            return res.status(500).json({
                message: "Internal Server Error!!"
            });
        }
        if (!user) {
            //if not found than create customer
            Customer.create(req.body);
            return res.status(200).json({
                message: "customer created successfully"
            });
        } else {
            return res.status(200).json({
                message: "email id already exist"
            });
        }
    });
}


module.exports.getAllorders = async (req, res) => {
    try {
        // let customer = await User.findById(req.params.custID)
        // let order = await Order.findById(req.params.custID)
        let order = await Order.find({"owner": req.params.custID});
        console.log("customer", order)
        return res.status(200).json({
            data: {
                // message: `Order list for ${customer.name}`,
                message: "found successfully",
                orders: order
            }
        })
    } catch (err) {
        return res.send('Error in fetching order list: ' + err);
    }
}