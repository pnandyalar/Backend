const LoginModel = require('../models/signUpModel')

const loginLogic = async(req,res)=>{
   // try {
   //    const { name, age } = req.body;

   //    const newPerson = new Person({
   //      name,
   //      age,
   //    });
  
   //    await newPerson.save();

try{const {EmployeeID,Password} = req.body
const newLoginModel = new LoginModel({
  EmployeeID,Password
})
await newLoginModel.save()
res.send(data).status(200)}
 
   //  const data = await LoginModel.create({EmployeeID:EmployeeID,Password:Password}) 
   
    // const {Email,Password}=req.body

    // const user = await LoginModel.findOne({Email})
    // if(!user){
    //     return res.status(401).json({ error: 'User not found' });
    // }
    // if (Password!==user.Password){
    //     return res.status(401).json({ error: 'Invalid password' });
    // }
    // res.send(`Login Successful`).status(202)
   catch (error) {
    res.json({error:error.message}).status(500)
   }

}

module.exports={loginLogic}