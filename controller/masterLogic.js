const MasterServices = require('../services/masterServices')
const { v4: uuidv4 } = require('uuid');



//====================CONTROLLER=================================
const postMaster = async(req,res)=>{
    const{RoleName,RoleID } = req.body
    const randomUUID = uuidv4();

    try {
        const MasterData = await MasterServices.postMasterData(RoleName,randomUUID)
        res.send(MasterData).status(200)
    } catch (error) {
        res.json({message:error.message}).status(500)
    }
};

const getMaster = async(req,res)=>{
    try {
        const MasterData = await MasterServices.getMasterData()
        res.json({data:MasterData}).status(200) 
    } catch (error) {
       res.json({message:error.message}).status(500) 
    }
    
}

module.exports={postMaster,getMaster};