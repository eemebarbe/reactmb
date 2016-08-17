var express = require('express');
	app = express();
	fs = require('fs');
  	bodyParser = require('body-parser');
  	path = require ('path');
  	router = express.Router(); 


app.use('/api', router);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
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


var mysql = require('mysql');
  connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'my_password',
  database : 'reactmb'
});

connection.connect();

app.get('/api/v1/posts',function(req,res){
    var data = null;
    
    connection.query("SELECT * from posts",function(err, rows, fields){
        if(rows.length != 0){
            data = rows;
            res.json(data);
            
        }else{
            data = null;
            res.json(data);
        }
          res.end();
    });
});


app.post('/api/v1/newuser', function(req,res) {
  
      var signUpData = req.body.signUpData; 
      console.log(signUpData[username]);

    /*connection.query("INSERT INTO `users` (`username`, `password`, `email`) VALUES (?, ?, ?)",[ username, password, email ], function(err, rows, fields) {
      if (err) throw err;

});*/

  res.end();
});