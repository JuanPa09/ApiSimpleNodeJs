var mysql = require('mysql2');

var con = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "4525612",
    database : "prueba",
    port     : "3306" 
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;