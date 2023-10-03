const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
   name: {type:String,
    required:[true,'please enter your name'],

          unique:true},
   quantity:{
    type:Number,
    required:true,
   
   } ,
   price:{
    type:Number,
    required:true,
   },
   image:{
    type:String,
    required:true,
   }
},
{

    // this helps us to know when the data get updated and deleted log
    timestamps:true
})


const ProductSir = mongoose.model('Product',productSchema)
module.exports = ProductSir