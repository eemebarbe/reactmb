module.exports = function(app){

var  passport = require('passport');
     cookieParser = require('cookie-parser');
     expressSession = require('express-session');
     LocalStrategy = require('passport-local').Strategy;


app.use(expressSession({secret: process.env.SESSION_SECRET || 'wintermute' }));
app.use(passport.initialize());
app.use(passport.session());


app.post('/loginAuth', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    else if (!user) {  
      res.status(401).send({ success : false });
    }
    else { 
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        res.status(200).send({ success : true });
      });
    }
    })(req, res, next);
});


app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});



passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
},

  function(req, username, password, done) { // callback with email and password from our form

    connection.query("SELECT * FROM `users` WHERE `username` = '" + username + "'",function(err,rows){
      if (err)
        return done(err);
      if (!rows.length) {
        return done(null, false);
      }   
        // if the user is found but the password is wrong
      if (!( rows[0].password == password)) {
        return done(null, false); // create the loginMessage and save it to session as flashdata
      } else {
              // all is well, return successful user
        return done(null, rows[0].username);   
      }  
      
    });
}));


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done){
    done(null, user);
  });


return function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); }
    else {
      res.redirect('/login');
    }
}

}
