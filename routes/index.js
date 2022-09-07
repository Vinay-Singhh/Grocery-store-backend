const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// For customer
router.use('/customer', require('./customer'));

// For product
router.use('/product', require('./product'));

// For order
router.use('/order', require('./order'));

module.exports = router;