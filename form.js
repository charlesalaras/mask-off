var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();
var path = require('path');
var mysql = require('mysql')
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'dbuser',
	password: '',
	database: 'UserValues'
})

var upload = multer();
var app = express();

connection.connect()

connection.query('', function(err, rows, fields) {
	if(err) throw err
	
})
