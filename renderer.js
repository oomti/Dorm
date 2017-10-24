// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// Database setup
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: null,
  database:  'electron_test'
});
connection.connect((err) => {
  if(err){
    return console.log(err.stack);
  }
});
var sql = 'SELECT * FROM `rooms`';
connection.query(sql, function (error, results, fields) {
  if (error) console.log(error.code);
  else {
      console.log(results);
     // $('#resultDiv').text(results[0].emp_name); //emp_name is column name in your database
  }
});
connection.end();