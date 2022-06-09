const express = require('express');
const router = express.Router();
const ramyAction = require('../actions/api/AkcjeRamy');

//router.get('/',ramyAction.saveRama)

router.get('/ramy',ramyAction.pobierzRamy)

router.post('/ramy',ramyAction.dodajRamy)

module.exports = router;