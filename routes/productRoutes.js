const express = require('express');
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { authenticateUser, authorizeRoles } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getProducts);
router.post('/', authenticateUser, authorizeRoles('admin'), createProduct);
router.put('/:id', authenticateUser, authorizeRoles('admin'), updateProduct);
router.delete('/:id', authenticateUser, authorizeRoles('admin'), deleteProduct);

module.exports = router;
