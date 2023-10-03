const Product = require('../models/productmModel')
const getProducts = (req,res)=>{
    try {
        const product =  Product.find()
        res.status(200).json({product})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}


const getProduct = async(req,res)=>{
    try {
        // const {id} = req.params
        const product = await Product.findById(req.params.id)
        
        
    res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
    
}

const postProduct =async(req,res)=>{
    // const prod = new Product ({name:req.body.name,quantity:req.body.quantity,price:req.body.price,image:req.body.image})
    try {
        const product=await Product.create(req.body)
        // const product= await prod.save()
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
   
}

const updateProduct= async(req,res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body)
        if(!product){
            // res.send('expected product not found').status(300)
        }
        const updatedProduct =await Product.findById(req.params.id)
       res.send(updatedProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const deleteProduct =async(req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if(!product){
            req.send('product not found to delete').status(300)
        }

res.send(product).status(200)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports ={getProducts,getProduct,postProduct,updateProduct,deleteProduct}