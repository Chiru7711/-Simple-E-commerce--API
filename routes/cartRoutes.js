const express = require('express');
const { getCart, addToCart, updateCart, removeFromCart } = require('../controllers/cartController');
const router = express.Router();

router.get('/', getCart);
router.post('/add', addToCart);
router.put('/update/:productId', updateCart);
router.delete('/remove/:productId', removeFromCart);

module.exports = router;