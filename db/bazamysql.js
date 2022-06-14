const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
  port:'3306',
	database : 'ramydb',
	user : 'root',
	password : '725826471aA'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

	


module.exports = connection;