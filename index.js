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
	  'zing_database.1932883a_c738_4895_af13_48a06b5e8ab3',
	  function (oldRow, newRow, event) {
	    console.log(event);
	  }, 
	  'Active'
	);

	console.log('listening on *:'+port);
});