module.exports = function(app){

var ensureAuthenticated = require('../authentication/auth.js')(app);

app.get('/submit', ensureAuthenticated, function(req, res) {
  res.render('submit.ejs', { user : req.user });
 });


app.get('/profile', ensureAuthenticated, function(req, res) {
  connection.query('SELECT * from posts WHERE `idusers`=(?) ORDER BY postdate DESC',[req.user], function(err, rows, fields){
    var posts = JSON.stringify(rows);
    connection.query('SELECT avatar from users WHERE `username`=(?)',[req.user], function(err, rows, fields){
      var avatarRow = rows[0].avatar;
      console.log(avatarRow);
      res.render('profile.ejs', { user : req.user,
                                  avatar: avatarRow,
                                  posts: posts });
    });
  });
 });

app.get('/login', function(req, res) {
  res.render('login.ejs', { user : req.user });
 });

app.get('/', function(req, res) {
	res.render('index.ejs', { user : req.user,
                            page : 0 });
 });


app.get('/post/:thisId', function(req, res) {
  var url_Id = req.param('thisId');

    connection.query('SELECT * FROM posts WHERE `idposts`=(?)',[url_Id],function(err, rows, fields){
        if(rows.length != 0){
            data = rows;

            connection.query('SELECT comments.*, c.idusers, c.avatar AS avatar FROM comments LEFT JOIN (SELECT username, avatar, idusers FROM users) AS c ON c.username = comments.username WHERE comments.`idposts`=(?) ORDER BY commentdate DESC',[url_Id], function(err, rows, fields) {
              if(rows.length != 0){
                comments = rows;
               }
            res.render('post.ejs', {  user : req.user, 
                                      title: data[0].title,
                                      idposts : data[0].idposts, 
                                      article: data[0].article, 
                                      loopComments: JSON.stringify(rows)  });
          });


        } else {
            res.json('This isn\'t a page');
        }
    });

});

}