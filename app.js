var express = require('express');

var app = express();

var port = 5000;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'example.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.set('views', './src/views');
app.use(allowCrossDomain);
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', {title: 'Home Page'});
});

app.get('/index', function(req, res){
    res.render('index', {title: 'Home Page'});
});

app.get('/page1', function(req, res){
    res.render('page1', {title: 'Page 1'});
});

app.get('/page2', function(req, res){
    res.render('page2', {title: 'Page 2'});
});


app.get('/books', function(req, res){
    res.send('Hello Books');
});

app.listen(port, function(err){
    console.log('running server on port ' + port);
});