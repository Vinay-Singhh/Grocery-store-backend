const express = require('express');
const router = express.Router();

const customerController = require('../controllers/users_controller');

// Create
router.post('/create', customerController.create);
// Customers list
router.get('/list', customerController.lists);
// get specific customer
router.get('/orders', customerController.getAllorders);
// get customer having max orders
router.get('/max', customerController.maxOrder);

// export router
module.exports = router;