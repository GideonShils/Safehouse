'use strict'

let exec = require('child_process').exec;

let con = require('../api/db').con;
let sms = require('../api/sms');
let randomCode;
let user;
let entry_datetime;

let auth = function (req, res) {
    if (req.body.auth === 1) {

        let currentdate = new Date();
        entry_datetime = currentdate.getFullYear() + "-"
            + (currentdate.getMonth() + 1) + "-"
            + currentdate.getDate() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();

        con.query('SELECT DISTINCT uid, code, phone FROM entries WHERE code =' + req.body.code, function (err, results, fields) {
            if (err) console.log(err);
            if (results[0] !== undefined) {
                randomCode = sms.sendSMS(results[0].phone);

                user = {
                    uid: results[0].uid,
                    entry_datetime: entry_datetime,
                    code: results[0].code,
                    phone: results[0].phone
                }

                con.query('INSERT INTO entries SET ?', user, function (err, results, fields) {
                    if (err) console.log(err);
                    let cmd = '/usr/bin/python3.5 /home/jgozal/Desktop/repos/safehouse/api/ML/predict.py';

                    exec(cmd, function (err, stdout, stderr) {
                        if (err) console.log(err);
                        console.log('predicting anomalous behavior...')
                        console.log(stdout);
                    });
                });

                res.send(JSON.stringify({ result: 'orange' }));
            } else {
                con.query('UPDATE entries SET train_bool = ? where uid = ? and entry_datetime = ?', ['0', user.uid, entry_datetime], function (err, results, fields) {
                    if (err) console.log(err);
                });
                res.send(JSON.stringify({ result: 'red' }));
                randomCode = undefined; //reset
            }
        });

    } else if (req.body.auth === 2 && req.body.code === randomCode) {
        con.query('UPDATE entries SET train_bool = ? where uid = ? and entry_datetime = ?', [1, user.uid, entry_datetime], function (err, results, fields) {
            if (err) console.log(err);
            let cmd = '/usr/bin/python3.5 /home/jgozal/Desktop/repos/safehouse/api/ML/retrain.py';

            exec(cmd, function (err, stdout, stderr) {
                if (err) console.log(err);
                console.log('retraining model...')
                console.log(stdout);
            });
        });
        res.send(JSON.stringify({ result: 'green' }));
        randomCode = undefined; //reset
    } else {
        con.query('UPDATE entries SET train_bool = ? where uid = ? and entry_datetime = ?', ['0', user.uid, entry_datetime], function (err, results, fields) {
            if (err) console.log(err);
        });
        res.send(JSON.stringify({ result: 'red' }));
        randomCode = undefined; //reset
    }
}

let requestHandlers = {
    auth
}

module.exports = requestHandlers;