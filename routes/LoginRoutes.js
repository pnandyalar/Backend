const express = require('express');
const routerLogin = express.Router();
const {loginCheck,loginGet,loginUpdate,loginPost,logout} = require("../controller/Logincheck");

routerLogin.post('/login',loginCheck);

routerLogin.get('/getlogin',loginGet);
routerLogin.put('/updatelogin/:id',loginUpdate);
routerLogin.post('/postSpecific',loginPost);

module.exports = routerLogin