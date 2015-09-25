var express = require('express');
var app = express();
var colors = require('./data.json');


app.use(express.static(__dirname + '/public'));

app.get('/getColors', function(request, response) {
    console.log('Roger, copy that');
    response.send(colors);
});

app.get('/', function(request, response) {
    console.log('Roger, copy that');
    response.sendFile(__dirname + '/public/views/index.html');
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;