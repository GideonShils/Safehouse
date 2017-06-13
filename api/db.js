let mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
});

let createEntries = function () {
  if (err) throw err;
  let sql = "CREATE TABLE entries (uid VARCHAR(255), entry_datetime VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
}

connection.connect(function (err) {
  console.log('connected to mysql')
  //createEntries()
});


