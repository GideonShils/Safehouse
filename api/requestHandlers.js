'use strict'

let con = require('../api/db').con;
let sms = require('../api/sms');
let randomCode;

let auth = function (req, res) {

    if (req.body.auth === 1) {

        let currentdate = new Date();
        let entry_datetime = currentdate.getFullYear() + "-"
            + (currentdate.getMonth() + 1) + "-"
            + currentdate.getDate() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();

        con.query('SELECT DISTINCT uid, code, phone FROM entries WHERE code =' + req.body.code, function (err, results, fields) {
            if (err) console.log(err);
            if (results[0] !== undefined) {
                randomCode = sms.sendSMS(results[0].phone);

                let user = {
                    uid: results[0].uid,
                    entry_datetime: entry_datetime,
                    code: results[0].code,
                    phone: results[0].phone
                }

                con.query('INSERT INTO entries SET ?', user, function (err, results, fields) {
                    if (err) console.log(err);
                });

                res.send(JSON.stringify({ result: 'orange' }));
            } else {
                res.send(JSON.stringify({ result: 'red' }));
                randomCode = undefined; //reset
            }
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