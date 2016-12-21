//general dependencies
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');
var router = express.Router();


//file upload configuration

var multer = require('multer');

var avatarStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads/avatars/');
    },
    filename: function(req, file, cb) {
        cb(null, req.user);
    },
    limits: {
        fieldNameSize: 100,
        fizeSize: 20000
    }
});

uploadAvatar = multer({
    storage: avatarStorage
});


//database configuration

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ReactMB'
});

connection.connect();


//route configuration

app.use('/api', router);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');


//internal app dependencies

var routes = require('./routes/routes.js')(app);
var api = require('./api/api.js')(app);


//server initialization

var port = 80;
app.listen(port, function() {
    console.log('ReactMB up and running on Port ' + port);
});

