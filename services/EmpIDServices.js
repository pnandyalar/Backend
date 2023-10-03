
const EmployeeId = require('../models/empIdModel');

async function getEmployeeCounterByName(name) {
  try {
    const empCounter = await EmployeeId.findOne({ Name: name });
    return empCounter;
  } catch (error) {
    throw error;
  }
}


async function empCounterInc (Counter){
    try {
        const CounterInc = await  EmployeeId.findOneAndUpdate({Counter})
        return CounterInc
    } catch (error) {
       throw error 
    }
}

async function EmpID (EmployeeID,Email,ID){
    try {
        const EmpData = await EmployeeId.create({EmployeeID,Email,ID})
        return EmpData;
    } catch (error) {
        throw error
    }
}
module.exports = {
  getEmployeeCounterByName,empCounterInc,EmpID
};
