# E-commerce API

A RESTful API for an e-commerce platform built with Node.js, Express, and MongoDB.

## Features

- User authentication with JWT
- Role-based access control (Customer/Admin)
- Product management (CRUD operations)
- Shopping cart functionality
- Order management
- Product search and pagination

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with:
   ```
   MONGO_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret_key_here
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products (with search & pagination)
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update/:productId` - Update cart item
- `DELETE /api/cart/remove/:productId` - Remove item from cart

### Orders
- `POST /api/orders/create` - Create order from cart
- `GET /api/orders/my` - Get user's orders

## Usage

1. Register/Login to get JWT token
2. Include token in Authorization header: `Bearer <token>`
3. Use appropriate endpoints based on user role

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs