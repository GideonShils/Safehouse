'use strict'

let exec = require('child_process').exec;

let con = require('../api/db').con;
let sms = require('../api/sms');
let randomCode;
let entry_datetime;
let user;
let blockedCounter = 0

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
                randomCode = sms.sendSMS(results[0].phone, 'Your code is ');

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
                        con.query('SELECT * FROM entries ORDER BY entry_datetime DESC LIMIT 1', function (err, results, fields) {
                            if (err) console.log(err);
                            if (results[0].anomalous_bool == 1) sms.sendSMS(user.phone, 'Anomalous entry attempt detected at your home. Code:')
                        });
                    });
                });
                res.send(JSON.stringify({ result: 'orange' }));
            } else {
                if (user != undefined) {
                    con.query('UPDATE entries SET train_bool = ? where uid = ? and entry_datetime = ?', ['0', user.uid, entry_datetime], function (err, results, fields) {
                        if (err) console.log(err);
                    });
                }
                blockedCounter++;
                if (blockedCounter === 5) {
                    sms.sendSMS('19293442441', 'There have been numerous failed attempts to enter your home and we have blocked access. Code: ')
                    res.send(JSON.stringify({ result: 'blocked' }));
                    blockedCounter = 0; //reset
                } else {
                    res.send(JSON.stringify({ result: 'red' }));
                }
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
        randomCode = undefined; //reset
        blockedCounter = 0; //reset
        user = undefined; //reset
        res.send(JSON.stringify({ result: 'green' }));
    } else {
        con.query('UPDATE entries SET train_bool = ? where uid = ? and entry_datetime = ?', ['0', user.uid, entry_datetime], function (err, results, fields) {
            if (err) console.log(err);
        });
        if (blockedCounter === 5) {
            sms.sendSMS('19293442441', 'There have been numerous failed attempts to enter your home and we have blocked access. Code: ')
            res.send(JSON.stringify({ result: 'blocked' }));
            blockedCounter = 0; //reset
        } else {
            res.send(JSON.stringify({ result: 'red' }));
        }
        randomCode = undefined; //reset
    }
}

let requestHandlers = {
    auth
}

module.exports = requestHandlers;