const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orders_controller');

// Create Order
router.post('/newOrder', orderController.createOrder);

module.exports = router;