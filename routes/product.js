const express = require('express');
const router = express.Router();

const productController = require('../controllers/products_controller');

// Creating product
router.post('/createProduct', productController.createProduct);
// Updating price
router.post('/update/update_price', productController.update);

module.exports = router;