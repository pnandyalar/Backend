const express = require('express');
const forgotrouter = express.Router();
const  {forgotPassword,resetPassword} = require('../controller/ForgotPassword');

forgotrouter.post('/passwordReset/v1',forgotPassword);
forgotrouter.post('/reset/v1',resetPassword);



module.exports = forgotrouter;