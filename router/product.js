const Controller=require('../controller/product')
const express=require('express')
const router=express.Router()

router.get('/products',Controller.getProducts)

router.get('/product/:id',Controller.getProduct)

router.post('/product',Controller.postProduct)

router.put('/product/:id',Controller.updateQty)

module.exports=router