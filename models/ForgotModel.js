const mongoose = require('mongoose');

const forgotSchema = mongoose.Schema({
    Email:{type:String,required:true},
    Token:{type:String,required:true},
    Time:{type:Date,required:true},
    ID:{type:String,required:true},
})

const ForgotPassword = mongoose.model('ForgotPassword',forgotSchema);

module.exports = ForgotPassword;