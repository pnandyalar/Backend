const EmployeeId = require('../models/empIdModel');

const postCounter = async (req,res)=>{
    try {
        const Counter = await EmployeeId.create(req.body)
        res.json({data:Counter}).status(200)
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports ={postCounter}