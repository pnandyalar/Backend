const express =require('express');
const routerWamika =express.Router()

const {getDetailsBYId,postDetails,getDetails,updateDetails,deleteDetails} =require("../controller/SignUpLogic")
//==========VALIDATION MIDDLEWARES=====================
const {validateSignUp} = require("../validations/signup")
//==========VALIDATION MIDDLEWARES=====================
routerWamika.post('/postData',validateSignUp,postDetails)


routerWamika.get('/getData',getDetails)
routerWamika.put('/putData/:id',updateDetails)
routerWamika.delete('/deleteData/:id',deleteDetails)
routerWamika.get('/getData/:id',getDetailsBYId)

module.exports=routerWamika

