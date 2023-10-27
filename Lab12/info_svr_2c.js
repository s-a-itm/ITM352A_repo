var express = require('express');
var app = express();

// part 2.2a Add a route for GET requests to the path '/test'
app.get('/test', function (request, response) {
    response.send('GET request to path /test - sal says hey');
});


app.all('*', function (request, response, next) {
    response.send(request.method + ' to path ' + request.path);
});


//part 2c
app.use(express.static(__dirname + '/public'));

app.listen(8088, () => console.log(`listening on port 8088`)); // note the use of an anonymous function here to do a callback