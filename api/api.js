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


app.get("/api/v1/postrange/:pageNumber", function(req, res) {
    var pageNumber = req.param('pageNumber') -1;
        pageRange = 3;
        startRange = (pageNumber * pageRange) + 1;

    connection.query('SELECT posts.*, c.comments AS comments FROM posts LEFT JOIN (SELECT idposts, COUNT(*) comments FROM comments GROUP BY idposts) AS c ON c.idposts = posts.idposts ORDER BY posts.idposts ASC LIMIT ?, ?',[startRange, pageRange], function(err, rows, fields){
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

}

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