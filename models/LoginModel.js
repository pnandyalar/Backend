const mongoose = require('mongoose');
const loginSchema = mongoose.Schema({
    Email:{type:String,},
    Password:{type:String},
    ID:{type:String,},
},
        {timestamps:true}
);

const UserLogin = mongoose.model('UserLogin',loginSchema);

module.exports = UserLogin;