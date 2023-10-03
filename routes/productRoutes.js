const express = require('express')
const router = express.Router()
// const Product = require('../models/productmModel')
const {getProducts,getProduct,postProduct,updateProduct,deleteProduct} = require('../controller/productControllers')
//=================================ROUTES STARTED======================================
router
.post('/product',postProduct)
router.get('/product',getProducts)
router
.get('/product/:id',getProduct)
router.put('/product/:id',updateProduct)
router.delete('/product/:id',deleteProduct);
//=================================ROUTES ENDED===================================================

module.exports = router