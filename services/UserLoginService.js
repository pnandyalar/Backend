const UserLogin = require('../models/LoginModel');

async function UserloginData (ID,Email,Password){
    try {
        const Data = await UserLogin.create({ID,Email,Password})
        return Data;
    } catch (error) {
        throw error
    }
}
module.exports = {UserloginData};
    
