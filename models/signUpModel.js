const mongoose = require('mongoose');

const signUpSchema = mongoose.Schema({
ID:{type:String} ,
FirstName:{type:String,},
LastName:{type:String,},
Email:{type:String},
Contact:{type:Number,},
JoiningDate:{type:String,},
EmployeeID:{type:String,},
DateOfBirth:{type:String},
Address:{type:String,},
Role:{type:Array,},
Gender:{type:String,},
MaritalStatus:{type:String,},
Password:String,
// ConfirmPassword:{type:String,required:true,}
},

//=========================================================
{
    timestamps:true
})

const EmployeesData = mongoose.model('EmployeesData',signUpSchema)
module.exports=EmployeesData