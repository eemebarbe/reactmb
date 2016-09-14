//general dependencies

var express = require('express');
	app = express();
	fs = require('fs');
    bodyParser = require('body-parser');
    path = require ('path');
    ejs = require('ejs');
  	router = express.Router(); 


//authentication dependencies and requirements

var  passport = require('passport');
     cookieParser = require('cookie-parser');
     expressSession = require('express-session');
     LocalStrategy = require('passport-local').Strategy;

app.use(expressSession({secret: process.env.SESSION_SECRET || 'wintermute' }));
app.use(passport.initialize());
app.use(passport.session());


//database configuration

var	mysql = require('mysql');
	connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'my_password',
	database : 'reactmb'
	});

	connection.connect();


//route configuration

  	app.use('/api', router);
	app.use(express.static(__dirname + '/public'));
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	app.set('view engine', 'ejs');


//internal app dependencies

var	routes = require('./routes/routes.js');
	api = require('./api');


//server initialization

	var port = 80;
	app.listen(port, function() {
	    console.log('ReactMB up and running on Port ' + port);
	});



