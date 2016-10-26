module.exports = function(app){
  // Import authentication functions.
  var ensureAuthenticated = require('../authentication/auth.js')(app);
 
  // Handle /submit route.
  app.get('/submit', ensureAuthenticated, function(req, res) {
    res.render('submit.ejs', { user : req.user });
  });
 
  // Handle /profile route.
  app.get('/profile', ensureAuthenticated, function(req, res) {
    // Get the authenticated user from the database.
    connection.query('SELECT * from posts WHERE `idusers`=(?) ORDER BY postdate DESC', [req.user], function(err, rows, fields) {
      var posts = JSON.stringify(rows);
      // Get this user's avatar.
      connection.query('SELECT avatar from users WHERE `username`=(?)',[req.user], function(err, rows, fields){
        var avatarRow = rows[0].avatar;
 
        // Create new user var to be rendered in the template.
        var user = {
          user : req.user,
          avatar: avatarRow,
          posts: posts
        }
 
        res.render('profile.ejs', user);
      });
    });
  });
 
  // Handle /login route.
  app.get('/login', function(req, res) {
    res.render('login.ejs', { user : req.user });
  });
 
  // Handle / root route.
  app.get('/', function(req, res) {
    res.render('index.ejs', { user : req.user, page : 0 });
  });
 
  // Handle /post/:thisId route.
  app.get('/post/:thisId', function(req, res) {
    var url_Id = req.param('thisId');
 
    // Get this post from the database.
    connection.query('SELECT * FROM posts WHERE `idposts`=(?)',[url_Id],function(err, rows, fields){
      // If this post was found.
      if(rows.length != 0){
        data = rows;
 
        // Get the comments for this post.
        connection.query('SELECT comments.*, c.idusers, c.avatar AS avatar FROM comments LEFT JOIN (SELECT username, avatar, idusers FROM users) AS c ON c.username = comments.username WHERE comments.`idposts`=(?) ORDER BY commentdate DESC',[url_Id], function(err, rows, fields) {
          // If comments were found.
          if(rows.length != 0)
            comments = rows;
 
          // Create new user var to be rendered in the template.
          var user = {  
            user : req.user,
            title: data[0].title,
            idposts : data[0].idposts,
            article: data[0].article,
            loopComments: JSON.stringify(rows)
          };
 
          res.render('post.ejs', user);
        });
      } else {
        res.json('This isn\'t a page');
      }
    });
  });
}