var mysql = require('mysql');

var connection = mysql.createPool({
  host     : '',
  user     : 'root',
  password : '',
  database : 'mysql'
});

module.exports=connection;