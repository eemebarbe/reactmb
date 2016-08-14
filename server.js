var express = require('express');
	app = express();
	fs = require('fs');
  	bodyParser = require('body-parser');
  	path = require ('path');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = 80;
app.listen(port, function() {
    console.log('ReactMB up and running on Port ' + port);
});

 app.get("/", function(req, res) {
	res.sendFile('views/index.html', { root: __dirname });
 });

  app.get("/submit", function(req, res) {
	res.sendFile('views/submit.html', { root: __dirname });
 });

  app.get("/profile", function(req, res) {
	res.sendFile('views/profile.html', { root: __dirname });
 });