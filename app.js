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
app.use(express.static('src/views'));
app.set('views', './src/views');
//app.use(allowCrossDomain);
app.set('view engine', 'html');


app.use('*', function (req, res) {
    res.render(__dirname + '/views/index.html');

});

app.listen(port, function(err){
    console.log('running server on port ' + port);
});