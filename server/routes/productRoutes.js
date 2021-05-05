const express = require('express')
const router = express.Router()

const {getAllProducts, getProductById} = require('../controller/productControllers')

// @desc GET all products from DB
// @route GET /api/products
// @access Public
router.get('/', getAllProducts)

// @desc GET specific product by ID from DB
// @route GET /api/products/:id
// @access Public
router.get('/:id', getProductById)

module.exports = router