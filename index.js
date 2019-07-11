var express = require('express'),
    http = require('http');
var app = express();
var server = http.createServer(app);
var port = 4001;
var io = require('socket.io').listen(server);
const MySQLEvents = require('mysql-events');
require('dotenv').config();

app.get('/', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World! Node.js is working correctly on ' + port + ".");
});


server.listen(port, function(){

	var dsn = {
		host:     process.env.HOSTNAME,
		user:     process.env.USERNAME,
		password: process.env.PASSWORD,
		port:     3306
	};

	var myCon = MySQLEvents(dsn);

	var event1 = myCon.add(
	  'zing_database',
	  function (oldRow, newRow, event) {
	    console.log(event);
	  }
	);

	console.log('listening on *:'+port);
});