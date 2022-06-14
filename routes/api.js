const express = require('express');
const router = express.Router();
const ramyAction = require('../AkcjeRamy');



router.get('/ramy',ramyAction.pobierzRamy)


module.exports = router;