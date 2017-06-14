'use strict'

let con = require('../api/db').con;
let sms = require('../utils/sms');
let randomCode;

let auth = function (req, res) {

    if (req.body.auth === 1 && req.body.code === 1365) {
        randomCode = sms.sendSMS();
        res.send(JSON.stringify({ result: 'orange' }));
        
       /* con.query('SELECT * FROM entries', function (error, results, fields) {
            if (error) throw error;
            console.log(results[0]);
        });*/

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