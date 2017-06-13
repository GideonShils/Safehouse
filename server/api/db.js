let mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'password',
});

connection.connect(function(err) {
  console.log('connected to mysql')
});

let entries = function(){
  // create table
}