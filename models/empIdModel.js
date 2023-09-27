const mongoose = require('mongoose');
const idSchema = mongoose.Schema({
    Name:{type:String},
    EmployeeID:{type:String,},
    Counter:{type:String,},
    Email:{type:String},
    ID:{type:String} ,
},
{timestamps:true}
)
const EmployeeId = mongoose.model('EmployeeId',idSchema);
module.exports = EmployeeId