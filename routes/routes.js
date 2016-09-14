var ensureAuthenticated = require('../authentication/auth.js');

app.get("/submit", ensureAuthenticated, function(req, res) {
  res.render('submit.ejs', { user : req.user });
 });

app.get("/profile", ensureAuthenticated, function(req, res) {
  res.render('profile.ejs', { user : req.user });
 });

app.get("/login", function(req, res) {
  res.render('login.ejs', { user : req.user });
 });

app.get("/", function(req, res) {
	res.render('index.ejs', { user : req.user,
                            page : 0 });
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
            res.render('post.ejs', {  user : req.user, 
                                      title: data[0].title, 
                                      article: data[0].article, 
                                      loopComments: JSON.stringify(rows)  });
          });


        } else {
            res.json("This isn't a page");
        }
    });

});
