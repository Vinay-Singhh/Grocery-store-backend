const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// For customer
router.use('/customer', require('./customer'));

// For order
router.use('/order', require('./order'));

// For product
router.use('/product', require('./product'));

// const User = require('../models/users');
// const userController = require('../controllers/users_controller');
// const productController = require('../controllers/products_controller');
// const orderController = require('../controllers/orders_controller');

// //Home
// router.get('/', (req, res) => {
//     res.send('Check README.md for API calls');
// });

// router.get('/customerList', userController.lists);

// router.post('/:custID/createOrders', orderController.create);

// router.get('/:custID/orders', userController.getAllorders);
// // http://localhost:3011/63176be236e1785f5bbdbc2b/orders
// // router.get('/:custID/details', productController.getAllorders); // details with maximum orders in a year

// router.post('/createCustomer', userController.create);

// router.post('/createProduct', productController.create);

// router.post('/:id/update_price', productController.updatePrice);

// router.post('/createCustomer', function (req, res) {
//     User.create({
//         email: req.body.email,
//         phone: req.body.phone,
//         name: req.body.name,
//     }, function (err, newUser) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         // console.log('*******', newUser);
//         return res.redirect('back');
//     });
// });

module.exports = router;