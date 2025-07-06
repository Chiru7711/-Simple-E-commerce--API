const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const { authenticateUser } = require('./middleware/authMiddleware');
const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', authenticateUser, cartRoutes);
app.use('/api/orders', authenticateUser, orderRoutes);

connectDB();
app.listen(5000, () => console.log('Server running on port 5000'));