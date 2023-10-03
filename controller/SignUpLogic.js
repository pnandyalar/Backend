const EmployeesData = require('../models/signUpModel');
const UserLogin= require("../models/LoginModel")
const EmployeeId = require('../models/empIdModel')
// const bcrypt = require('bcrypt')
// const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');
//====================================services==================================
const {getEmployeeCounterByName,empCounterInc,EmpID} = require('../services/EmpIDServices')
const {findEmailEmployeesData,usualGeneratedMail,newGeneratedEmail} = require('../services/signupServices')
const {UserloginData} = require('../services/UserLoginService')
//====================================services==================================

//================AUTOGENERATEMAIL==================================================
const  postDetails = 
async (req, res) => {
    const {FirstName,LastName } = req.body;
    const generatedEmail = `${FirstName[0]}${LastName}@wamikatech.com`;
    const randomUUID = uuidv4();
    //===========for employeeid================
    const Name = "Employee" //generation basic need
    //===========for employeeid================
try {
  const empCounter = await getEmployeeCounterByName(Name)
  if(empCounter){
    var result = String(parseInt(empCounter.Counter, 10) + parseInt('001', 10)).padStart(3, '0');  }
  //  var Counter = empCounter.Counter + 1
  const generateEmpId = `WT${result}` //EMPID GENERATION 
    const existingEmployee = await findEmailEmployeesData( generatedEmail );
    if (existingEmployee) {
   
    const uniqueIdentifier = Math.random().toString().substring(2,4)

      const newEmail = `${FirstName[0]}${LastName}${uniqueIdentifier}@wamikatech.com`;
      // const newEmployee = new EmployeesData({
      //   ID:randomUUID,
      //   FirstName,
      //   LastName,
      //   Email: newEmail,
      //   Contact,
      //   JoiningDate,
      //   EmployeeID:generateEmpId,
      //   DateOfBirth,
      //   Address,
      //   Role,
      //   Gender,
      //   MaritalStatus,
      //   Password,
     
      // });

    // var Details =  await newEmployee.save();


    const employeeData = req.body; 
    const employeeDetails = await newGeneratedEmail(employeeData,newEmail,generateEmpId,randomUUID);
    // res.json(employeeDetails); 

    //====================================================

    const Counter = await empCounterInc(result)

    // const newUserLogin = new UserLogin({ID:randomUUID,Email:newEmail ,Password:''})
    const Login =  await UserloginData(randomUUID,newEmail,'')
    // const newEmployeeId = new EmployeeId({EmployeeID:generateEmpId,Email:newEmail,ID:randomUUID,})
    const Counter1 = await EmpID(generateEmpId,newEmail,randomUUID);
    res.json({signupdetails:employeeDetails,CounterDeatils:[Counter,Counter1,Login]}).status(200);
    } 
    else {
      // const newEmployee = new EmployeesData({
      //   ID:randomUUID,
      //   FirstName,
      //   LastName,
      //   Email: generatedEmail,
      //   Contact,
      //   JoiningDate,
      //   EmployeeID:generateEmpId,
      //   DateOfBirth,
      //   Address,
      //   Role,
      //   Gender,
      //   MaritalStatus,
      //   Password,
      // });

      // var Details =await newEmployee.save();
      const employeeData = req.body;
      const employeeDetails = await usualGeneratedMail(employeeData,generatedEmail,generateEmpId,randomUUID);

      //=================updating==================
      const Counter = await empCounterInc(result)
       //=================updating==================
       
       //=============================posting data=========================
      // const newEmployeeId = new EmployeeId({EmployeeID:generateEmpId,Email:generatedEmail,ID:randomUUID})
      const Counter1 = await EmpID(generateEmpId,generatedEmail,randomUUID);
      // const newUserLogin = new UserLogin({ID:randomUUID,Email:generatedEmail ,Password:''})
      const Login =  await UserloginData(randomUUID,generatedEmail,'')
      res.json({signupdetails:employeeDetails,CounterDeatils:[Counter,Counter1,Login]}).status(200);
     //=============================posting data=========================
    }
  }
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
module.exports={postDetails,getDetails,updateDetails,deleteDetails,getDetailsBYId}