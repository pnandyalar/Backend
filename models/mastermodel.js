const mongoose = require('mongoose');
const masterSchema = mongoose.Schema({
    RoleName:{type:String,required:true},
    RoleID:{type:String,required:true},
},
{
    timestamps:true
}
);
const Master = mongoose.model('Master',masterSchema);
module.exports = Master;