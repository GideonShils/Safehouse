'use strict'

let sms = require('../utils/sms');

let auth = function (req, res) {

    if (req.body.auth === 1 && req.body.code === 1365) {
        sms.sendSMS();
        res.send(JSON.stringify({ result: 'orange' }));
    } else if (req.body.auth === 2 && req.body.code === sms.randomCode) {
        res.send(JSON.stringify({ result: 'green' }));
    } else {
        res.send(JSON.stringify({ result: 'red' }));
    }
}

let requestHandlers = {
    auth
}

module.exports = requestHandlers;