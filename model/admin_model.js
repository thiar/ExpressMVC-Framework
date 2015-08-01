var driver = require('../config/database/driver/mysql/mysqldriver.js');

/*always give fn parameter to return your data*/
module.exports.selectDB = function(fn) {
					driver.query("select * from db",function(err, rows, fields) {
				  			if (err) throw err;
				  			fn(rows)
						}
					);
				}

module.exports.showUser = function(fn) {
					driver.query("select * from user",function(err, rows, fields) {
				  			if (err) throw err;
				  			fn(rows)
						}
					);
				}

