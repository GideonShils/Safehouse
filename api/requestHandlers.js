'use strict'

let con = require('../api/db').con;
let sms = require('../utils/sms');
let randomCode;

let auth = function (req, res) {

    if (req.body.auth === 1) {

        con.query('SELECT DISTINCT uid, code, phone FROM entries WHERE code =' + req.body.code, function (err, results, fields) {
            if (err) console.log(err);
            randomCode = sms.sendSMS(results[0].phone);
            res.send(JSON.stringify({ result: 'orange' }));
        });

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