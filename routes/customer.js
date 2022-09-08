const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customers_controller');

// Create
router.post('/create', customerController.create);
// Customers list
router.get('/list', customerController.customerList);
// get specific customer
router.get('/orderList/:emailID', customerController.getAllorders);
// get customer having max orders
router.get('/max', customerController.maxOrder);

// export router
module.exports = router;