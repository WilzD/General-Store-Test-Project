const Product=require('../models/product')


exports.getProducts=async(req,res)=>{
    let products=await Product.findAll()
    return res.status(200).json(products)
}

exports.getProduct=async(req,res)=>{
    const id=req.params.id
    const product=await Product.findByPk(id)
    return res.status(200).json(product)
}

exports.postProduct=async(req,res)=>{
    let name=req.body.name
    let description=req.body.description
    let price=req.body.price
    let quantity=req.body.quantity

    const data=await Product.create({name:name,description:description,price:price,quantity:quantity})
    return res.status(200).json(data)
}
exports.updateQty=async(req,res)=>{
    let id=req.params.id
    let name=req.body.name
    let description=req.body.description
    let price=req.body.price
    let quantity=req.body.quantity

    const product=await Product.findByPk(id)
    product.name=name
    product.description=description
    product.price=price
    product.quantity=quantity
    await product.save()
    return res.sendStatus(200)
}