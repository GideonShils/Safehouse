let mysql = require('mysql');

var con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'safehouse'
});

let createEntries = function () {
  let sql = "CREATE TABLE entries (uid VARCHAR(50) NOT NULL, entry_datetime DATETIME(6), anomalous_bool BOOL, train_bool BOOL, phone VARCHAR(50))";
  con.query(sql, function (err, result) {
    if (err) console.log(err);
    console.log("Entries table created");
  });
}

con.connect(function (err) {
  if (err) console.log(err);
  console.log('connected to mysql')
  createEntries()
});


