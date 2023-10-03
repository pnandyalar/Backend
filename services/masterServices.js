// SERVICES
const Master = require('../models/mastermodel');
class  MasterServices {
    async postMasterData(RoleID,RoleName){
        try {
            const masterData = await Master.create({RoleID,RoleName})
            return masterData
        } catch (error) {
            throw error
        }
    }
    async getMasterData(){
        try {
           const masterData = await Master.find()
           return masterData
        } catch (error) {
            throw error
        }
    }
}

module.exports = new MasterServices();