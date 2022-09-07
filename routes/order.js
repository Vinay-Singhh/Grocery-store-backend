const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order_controller');

// Create Order
router.post('/newOrder', orderController.createOrder);

module.exports = router;