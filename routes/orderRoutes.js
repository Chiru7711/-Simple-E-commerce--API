const express = require('express');
const { createOrder, getMyOrders } = require('../controllers/orderController');
const router = express.Router();

router.post('/create', createOrder);
router.get('/my', getMyOrders);

module.exports = router;