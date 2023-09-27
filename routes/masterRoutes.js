const express = require('express');
const routerMaster = express.Router();
const {postMaster,getMaster}=require('../controller/masterLogic');

routerMaster.post('/postMasterData/v1',postMaster);
routerMaster.get('/getMasterData/v1',getMaster);

module.exports = routerMaster;