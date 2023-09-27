const express = require('express');
const routerCounter = express.Router();

const {postCounter} = require('../controller/EmpCounter')

routerCounter.post('/postCounterValue/v1',postCounter);

module.exports=routerCounter