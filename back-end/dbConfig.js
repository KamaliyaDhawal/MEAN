const mysql = require('mysql');

const db = mysql.config({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'curd-demo'
});

db.connect();

module.exports = db;