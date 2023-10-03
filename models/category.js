const mongoose = require('mongoose')
const categorySchema = mongoose.Schema({
  name:  {
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required :true,
    },
    price:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
})

const Category = mongoose.model('Category',categorySchema)

module.exports = Category