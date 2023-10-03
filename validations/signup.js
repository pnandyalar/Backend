const Joi = require('joi')

const validateSignUp = (req,res,next)=>{
const {error} = validateSchema.validate(req.body)
if(error){
    return res.status(400).json({ error: error.details[0].message });
}
next()
}


//=================MIDDLEWARE FOR VALIDATION===========================
const validateSchema = Joi.object({
    ID: Joi.string(), 
    FirstName:Joi.string().required(), 
    LastName:Joi.string().required(), 
    Email:Joi.string().email().allow(''),
    Contact:Joi.number().required(), 
    JoiningDate:Joi.string().required(), 
    EmployeeID:Joi.string().allow(''), 
    DateOfBirth:Joi.string().required(), 
    Address:Joi.string().required(), 
    // Joi.array().items() FOR ARRAY VALIDATION
    Role:Joi.array().items(Joi.string().required()), 
    Gender:Joi.string().required(), 
    MaritalStatus:Joi.string().required(), 
    Password:Joi.string().allow('')
    
})
//=================MIDDLEWARE FOR VALIDATION===========================

module.exports ={validateSignUp}