const Master = require('../models/mastermodel');
const { v4: uuidv4 } = require('uuid');
const postMaster = async(req,res)=>{
    const{RoleName,RoleID } = req.body
    const randomUUID = uuidv4();

    try {
        const MasterData = await Master.create({RoleName:RoleName,RoleID:randomUUID})
        res.send(MasterData).status(200)
    } catch (error) {
        res.json({message:error.message}).status(500)
    }
  
};

const getMaster = async(req,res)=>{
    try {
        const getMasterData = await Master.find()
        res.json({data:getMasterData}).status(200) 
    } catch (error) {
       res.json({message:error.message}).status(500) 
    }
    
}

module.exports={postMaster,getMaster};