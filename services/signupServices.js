const EmployeesData = require('../models/signUpModel');

async function findEmailEmployeesData (Email){
    try {
        const Data = await EmployeesData.findOne({Email})
        return Data
    } catch (error) {
        throw error
    }
}


async function usualGeneratedMail (employeeData,generatedEmail,generateEmpId,randomUUID){
    try {
        employeeData.Email = generatedEmail;
        employeeData.EmployeeID = generateEmpId;
        employeeData.ID = randomUUID;
        const newEmployee = new EmployeesData(employeeData);
        const employeeDetails = await newEmployee.save();
        return employeeDetails;
    } catch (error) {
        throw error 
    }
}


async function newGeneratedEmail (employeeData,newMail,generateEmpId,randomUUID){
    try {
        employeeData.Email = newMail
        employeeData.EmployeeID = generateEmpId;
        employeeData.ID = randomUUID;
        const newEmployee = new EmployeesData(employeeData);
        const employeeDetails = await newEmployee.save();
        return employeeDetails;
    } catch (error) {
        
    }
}
module.exports = {findEmailEmployeesData,usualGeneratedMail,newGeneratedEmail}