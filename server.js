var express = require('express');
	   app = express();
	   fs = require('fs');
      bodyParser = require('body-parser');
      path = require ('path');
      ejs = require('ejs');
  	 router = express.Router(); 

//PASSPORT STUFF

var  passport = require('passport');
     cookieParser = require('cookie-parser');
     expressSession = require('express-session');
     LocalStrategy = require('passport-local').Strategy;

app.use(expressSession({secret: process.env.SESSION_SECRET || 'wintermute' }));
app.use(passport.initialize());
app.use(passport.session());


app.post('/login',
  passport.authenticate('local'), function(req,res) {
    res.redirect('/');
  }
);

//THIS IS THE PROBLEM
passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },

function(req, username, password, done) {

         connection.query("SELECT * FROM users WHERE `username`=(?)", [usernameField], function(err,rows){
      if (err)
            return done(err);
      if (!rows.length) {
            return done(null, false);
        } 
      if (!(rows[0].password == password))
            return done(null, false);
            return done(null, rows[0]);     
        });
}));


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(id, done){
    done(null, user);
  });

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); }
    else {
      res.redirect('/login');
    }
}


app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


//END OF PASSPORT STUFF

app.use('/api', router);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

var port = 80;
app.listen(port, function() {
    console.log('ReactMB up and running on Port ' + port);
});

 app.get("/", function(req, res) {
	res.render('index.ejs', { root: __dirname });
 });

  app.get("/submit", ensureAuthenticated, function(req, res) {
	res.render('submit.ejs', { root: __dirname });
 });

  app.get("/profile", ensureAuthenticated, function(req, res) {
	res.render('profile.ejs', { root: __dirname });
 });

  app.get("/login", function(req, res) {
  res.render('login.ejs', { root: __dirname });
 });


  app.get('/post/:thisId', function(req, res) {
  var url_Id = req.param('thisId');

    connection.query('SELECT * FROM posts WHERE `idposts`=(?)',[url_Id],function(err, rows, fields){
        if(rows.length != 0){
            data = rows;

            connection.query("SELECT * FROM comments WHERE `idposts`=(?)",[url_Id], function(err, rows, fields) {
              if(rows.length != 0){
                comments = rows;
               }
            res.render('post.ejs', { title: data[0].title, article: data[0].article, loopComments: JSON.stringify(rows)});
          });


        }else{
            res.json("This isn't a page");
        }
    });

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
  
    connection.query("INSERT INTO users (username, password, email) VALUES (?, ?, ?)",[ req.body.username, req.body.password, req.body.email ], function(err, rows, fields) {
      if (err) throw err;
});

  res.end();
});

app.get('/api/v1/comments/:postId', function(req,res) {
    var url_Id = req.param('postId');  
    connection.query("SELECT * FROM comments WHERE `idposts`=(?)",[url_Id], function(err, rows, fields) {
        if(rows.length != 0){
            data = rows;
            res.json(data);
        }else{
            data = null;
            res.json("No comments for this post");
        }
          res.end();
    });
});

app.post('/api/v1/newpost', function(req,res) {
  
    connection.query("INSERT INTO posts (title, article, idusers) VALUES (?, ?, ?)",[ req.body.title, req.body.article, req.body.idusers ], function(err, rows, fields) {
      if (err) throw err;
});
    
  res.end();
});


app.get("/api/v1/posts/:thisId", function(req, res) {
    var url_Id = req.param('thisId');

    connection.query('SELECT * FROM posts WHERE `idposts`=(?)',[url_Id],function(err, rows, fields){
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