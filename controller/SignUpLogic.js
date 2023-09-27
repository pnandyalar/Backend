const EmployeesData = require('../models/signUpModel');
const UserLogin= require("../models/LoginModel")
const EmployeeId = require('../models/empIdModel')
// const bcrypt = require('bcrypt')
// const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');

//================AUTOGENERATEMAIL==================================================
const  postDetails = 
async (req, res) => {
    const { ID,FirstName,
       LastName,
       Email,
       Contact,
        JoiningDate,
        EmployeeID,
        DateOfBirth,
        Address,
        Role,
        Gender,
        MaritalStatus,
        Password,
        // ConfirmPassword,
       } = req.body;
    const generatedEmail = `${FirstName[0]}${LastName}@wamikatech.com`;
    const randomUUID = uuidv4();
    //===========for employeeid================
    const Name = "Employee" //generation basic need
    //===========for employeeid================
//==================BCRYPT PASSWORD===========================================
try {
 
  const empCounter = await EmployeeId.findOne({Name:Name})

  if(empCounter){
    var result = String(parseInt(empCounter.Counter, 10) + parseInt('001', 10)).padStart(3, '0');
  //  var Counter = empCounter.Counter + 1
  }
  const generateEmpId = `WT${result}`
  // const  hashedPassword = await bcrypt.hash(Password,10)
// console.log(`hashedPassword ${hashedPassword}`);
// const dataToEncode = req.body.Password; // Assumes the request body has a "data" field
// console.log(`encode:${dataToEncode}`);
// const encodedData = Buffer.from(dataToEncode).toString('base64');
// console.log(`encode:${encodedData}`);
// const base64Data = req.body.data; // Assumes the request body has a "data" field with Base64 data
// console.log(base64Data);
// const decodedData = Buffer.from(encodedData, 'base64').toString('utf-8');
// console.log(`decodedata:${decodedData}`);
//==================BCRYPT PASSWORD===========================================
  //  const hashedpassword = bcrypt.hash('req.body.Password')
    // Check if the email already exists in the database
    const existingEmployee = await EmployeesData.findOne({ Email: generatedEmail });

  
      // console.log(existingEmployee)

    if (existingEmployee) {
      // Handle duplication (e.g., append a unique identifier)
    //   const uniqueIdentifier = Math.random().toString(36).substring(7);
    const uniqueIdentifier = Math.random().toString().substring(2,4)

      const newEmail = `${FirstName[0]}${LastName}${uniqueIdentifier}@wamikatech.com`;
      const newEmployee = new EmployeesData({
        ID:randomUUID,
        FirstName,
        LastName,
        Email: newEmail,
        Contact,
        JoiningDate,
        EmployeeID:generateEmpId,
        DateOfBirth,
        Address,
        Role,
        Gender,
        MaritalStatus,
        Password,
       
        // ConfirmPassword,
      });

    var Details =  await newEmployee.save();
    // const newEmployeeId = new EmployeeId({Name:Name,Counter:result}) ;
    //   const Counter = await newEmployeeId.save();
    const Counter = await EmployeeId.findOneAndUpdate({Counter:result})
    

    const newUserLogin = new UserLogin({ID:randomUUID,Email:newEmail ,Password:''})
    const Login =  await newUserLogin.save()
    const newEmployeeId = new EmployeeId({EmployeeID:generateEmpId,Email:newEmail,ID:randomUUID,})
    const Counter1 = await newEmployeeId.save();

    res.json({signupdetails:Details,CounterDeatils:[Counter,Counter1,Login]}).status(200);
      // var Login = await LoginModel.create({EmployeeID:newEmail,Password:Password})
     
      // res.json(Login).status(200)
    //   res.json({ Email: newEmail });
    } 
    else {
      // Create a new employee record with the generated email
      const newEmployee = new EmployeesData({
        ID:randomUUID,
        FirstName,
        LastName,
        Email: generatedEmail,
        Contact,
        JoiningDate,
        EmployeeID:generateEmpId,
        DateOfBirth,
        Address,
        Role,
        Gender,
        MaritalStatus,
        Password,
        // ConfirmPassword,
      });

      var Details =await newEmployee.save();
    

      // const newEmployeeId = new EmployeeId({Name:Name,Counter:result}) ;
      // const Counter = await newEmployeeId.save();
      //=================updating==================
      const Counter = await EmployeeId.findOneAndUpdate({Counter:result})
       //=================updating==================
       //=============================posting data=========================
      const newEmployeeId = new EmployeeId({EmployeeID:generateEmpId,Email:generatedEmail,ID:randomUUID})
      const Counter1 = await newEmployeeId.save();
      const newUserLogin = new UserLogin({ID:randomUUID,Email:generatedEmail ,Password:''})
      const Login =  await newUserLogin.save()
      res.json({signupdetails:Details,CounterDeatils:[Counter,Counter1,Login]}).status(200);
     //=============================posting data=========================
      // const newLoginModel = new LoginModel({ID:randomUUID,EmployeeID:EmployeeID,Role:Role})
      // var Login = await newLoginModel.save()
     
      // res.json({signupdetails:Details,loginDetails:Login}).status(200);
      // var Login = await LoginModel.create({EmployeeID:generatedEmail,Password:Password ,Role:Role})
     
      // res.json(Login).status(200)
    }
  }


// async(req,res)=>{
//     try {
//         const Data = await  EmployeesData.create(req.body)
//         res.send(Data).status(200)
//     } catch (error) {
//         res.status(500).json({Error:error.message})
//     }
// }
catch (error) { res.json({message:error.message}).status(500)}

}
//================AUTOGENERATEMAIL==================================================
const getDetails = async(req,res)=>{
    try {
        const Data = await EmployeesData.find()
        res.send(Data).status(200)

    } catch (error) {
        res.status(500).json({Error:error.message})
    }
}

const getDetailsBYId  =  async(req,res)=>{
    try {
        const Data = await EmployeesData.findById(req.params.id);
    res.send(Data).status(200)
    } catch (error) {
       res.status(200).json({Error:error.message}) 
    }
    
}

const updateDetails = async(req,res)=>{
    try {
        const Data= await EmployeesData.findByIdAndUpdate(req.params.id,req.body)
        if(!Data){
            res.send('Requested Data to update not found').status(300)
        }
        const updateData = await EmployeesData.findById(req.params.id)
        res.send(updateData).status(200)
    } catch (error) {
        res.status(500).json({Message:error.message})
    }  
}

const deleteDetails = async(req,res)=>{
    try {
        const Data = await EmployeesData.findByIdAndDelete(req.params.id)
        res.send(Data).status(200)
    } catch (error) {
        res.status(500).json({Error:error.message})
    }
    

}

//       LOGIN====================================
// const loginLogic = async(req,res)=>{
//   try {
// const {EmployeeID,Password} = req.body
//    const data = await LoginModel.create({EmployeeID:EmployeeID,Password:Password}) 
//    res.send(data).status(200)
   // const {Email,Password}=req.body

   // const user = await LoginModel.findOne({Email})
   // if(!user){
   //     return res.status(401).json({ error: 'User not found' });
   // }
   // if (Password!==user.Password){
   //     return res.status(401).json({ error: 'Invalid password' });
   // }
   // res.send(`Login Successful`).status(202)
// }
//   catch (error) {
//    res.json({error:error.message}).status(500)
//   }

// }

// module.exports={loginLogic}
//       LOGIN====================================


module.exports={postDetails,getDetails,updateDetails,deleteDetails,getDetailsBYId}