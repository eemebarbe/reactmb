module.exports = function(app){

var ensureAuthenticated = require('../authentication/auth.js')(app);

app.get('/api/v1/posts',function(req,res){
    var data = null;
    
    connection.query("SELECT * from posts", function(err, rows, fields){
        if(rows.length != 0){
            data = rows;
            res.json(data);
            
        } else {
            data = null;
            res.json(data);
        }
          res.end();
    });
});

app.get('/api/v1/profileData/:userId',function(req,res){
    var url_Id = req.param('userId');
    
    connection.query("SELECT * from posts WHERE `idusers`=(?) ORDER BY postdate DESC",[url_Id], function(err, rows, fields){
        if(rows.length != 0){
            data = rows;
            res.json(data);
            
        } else {
            data = null;
            res.json(data);
        }
          res.end();
    });
});

app.post('/api/v1/newuser', function(req,res) {
//Regex on both client and server side for protection in case JS is augmented
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(req.body.email)) {
            res.json("Email address is not valid!");
        } else {
            connection.query("INSERT INTO users (username, password, email) VALUES (?, ?, ?)",[ req.body.username, req.body.password, req.body.email ], function(err, rows, fields) {
                if (err) {
                    res.status(401);
                }
            });
        }
  res.end();
});


app.get('/api/v1/comments/:postId', function(req,res) {
    var url_Id = req.param('postId');  
    connection.query("SELECT * FROM comments WHERE `idposts`=(?) ORDER BY commentdate DESC",[url_Id], function(err, rows, fields) {
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

app.post('/api/v1/newpost', ensureAuthenticated, function(req,res) {
  
    connection.query("INSERT INTO posts (title, article, idusers) VALUES (?, ?, ?)",[ req.body.title, req.body.article, req.body.idusers ], function(err, rows, fields) {
      if (err) throw err;
});
    
  res.end();
});


app.post('/api/v1/newcomment', ensureAuthenticated, function(req,res) {
  
    connection.query("INSERT INTO comments (comment, idposts, idusers) VALUES (?, ?, ?)",[ req.body.comment, req.body.idposts, req.body.idusers ], function(err, rows, fields) {
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
        } else {
            data = null;
            res.json(data);
        }
          res.end();
    });
});


app.get("/api/v1/postrange", function(req, res) {
    var pageNumber = req.query.page -1;
        pageRange = parseInt(req.query.pageRange, 10);
        startRange = (pageNumber * pageRange);

    connection.query('SELECT posts.*, c.comments AS comments FROM posts LEFT JOIN (SELECT idposts, COUNT(*) comments FROM comments GROUP BY idposts) AS c ON c.idposts = posts.idposts ORDER BY posts.postdate DESC LIMIT ?, ?',[startRange, pageRange], function(err, rows, fields){
        if (err) {
            throw err;
        }
        else if(rows.length != 0){
            data = rows;
            res.json(data);
        } else {
            data = null;
            res.json(data);
        }
          res.end();
    });
});


app.get("/api/v1/postcount/", function(req, res) {

    connection.query('SELECT COUNT(*) as count FROM posts', function(err, rows, fields){
        if(rows.length != 0){
            data = rows;
            res.json(data);
        } else {
            data = null;
            res.json(data);
        }
          res.end();
    });
});


app.post('/api/v1/deletepost/', ensureAuthenticated, function(req,res) {

    connection.query('DELETE FROM posts WHERE `idposts`=(?) AND `idusers`=(?)',[ req.body.post, req.user ], function(err, rows, fields) {
      if (err) throw err;
});
    
  res.end();
});


app.post('/api/v1/deletecomment/', ensureAuthenticated, function(req,res) {
console.log(req.body.comment);
    connection.query('DELETE FROM comments WHERE `idcomments`=(?) AND `idusers`=(?)',[ req.body.comment, req.user ], function(err, rows, fields) {
      if (err) throw err;
});
    
  res.end();
});




}