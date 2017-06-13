'use strict'

let sms = require('../utils/sms');
let randomCode;

let auth = function (req, res) {

    if (req.body.auth === 1 && req.body.code === 1365) {
        randomCode = sms.sendSMS();
        res.send(JSON.stringify({ result: 'orange' }));
    } else if (req.body.auth === 2 && req.body.code === randomCode) {
        res.send(JSON.stringify({ result: 'green' }));
        randomCode = undefined; //reset
    } else {
        res.send(JSON.stringify({ result: 'red' }));
        randomCode = undefined; //reset
    }
}

let requestHandlers = {
    auth
}

module.exports = requestHandlers;