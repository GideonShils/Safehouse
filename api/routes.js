'use strict'

let express = require('express');
let rh = require('../api/requestHandlers');
let router = express.Router();

router.post('/auth', rh.auth);

module.exports = router;