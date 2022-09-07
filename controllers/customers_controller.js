const Customer = require('../models/customers');

// Creating customer
module.exports.create = async function (req, res) {
    try {
        let user = await Customer.findOne({ email: req.body.email });
        //if not found than create customer
        if (!user) {
            Customer.create(req.body);
            return res.status(200).json({
                message: "customer created successfully"
            });
        } else {
            return res.status(200).json({
                message: "Customer already exist"
            });
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// Show customer list
module.exports.customerList = async function (req, res) {
    try {
        // find and populate all customers
        // let customers = await Customer.find({}).sort('-createdAt').populate({
        //     path: 'orders',
        //     populate: {
        //         path: 'productList'
        //     }
        // })
        let customers = await Customer.find();
        console.log(customers);
        // if there is no customer in db
        if (customers.length == 0) {
            return res.status(400).json({
                message: "No entries"
            })
        }
        // else
        return res.status(200).json({
            message: "Customers List",
            listOfCustomers: customers
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// fetch specific customer 
module.exports.getAllorders = async function (req, res) {
    try {
        // checking if data is entered correctly
        if (req.body.email || req.body.phone) {
            // find customer with either phone or email
            let customer = await Customer.findOne({
                $or: [{
                    email: req.body.email
                }, {
                    phone: req.body.phone
                }]
            }).populate({
                path: 'orders',
                populate: {
                    path: 'productList'
                }
            });

            // return list of orders
            return res.status(200).json({
                message: `Order list for ${customer.name}(${customer.phone})`,
                OrderList: customer.orders
            })
        } else {
            return res.status(400).json({
                message: "Please enter correct data"
            })
            // let order = await Order.find({ "owner": req.params.custID });
            // console.log("customer", order)
            // return res.status(200).json({
            //     data: {
            //         // message: `Order list for ${customer.name}`,
            //         message: "found successfully",
            //         orders: order
            //     }
            // })
        }
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// find customer with max orders in a year
module.exports.maxOrder = async function (req, res) {
    try {
        // find customer and populate
        let customers = await Customer.find({}).populate({
            path: 'orders',
            populate: {
                path: 'productList'
            }
        });
        // if not customer found
        if (customers.length == 0) {
            return res.status(200).json({
                message: 'No Details',
            })
        }

        let customer, max = 0;
        // iterate over customers array
        customers.forEach((item) => {
            // find customers having maximum orders
            if (item.orders.length > max && item.orders.length > 0) {
                max = item.orders.length;
                customer = item;
            }
        });
        // return success response
        return res.status(200).json({
            message: 'Details of customer having max orders',
            details: customer
        })

    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}