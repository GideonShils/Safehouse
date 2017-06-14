let mysql = require('mysql');

let con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'safehouse'
});

let createEntries = function () {
  let sql = "CREATE TABLE IF NOT EXISTS entries (uid VARCHAR(50) NOT NULL, entry_datetime DATETIME(6), anomalous_bool BOOL, train_bool BOOL, phone VARCHAR(50), code VARCHAR(50))";
  con.query(sql, function (err, result) {
    if (err) console.log(err);
    if (result.fieldCount != 0) console.log("Entries table created");
  });
}

con.connect(function (err) {
  if (err) console.log(err);
  console.log('connected to mysql')
  createEntries()
});

let db = {
  con
}

module.exports = db;


