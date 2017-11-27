// sets up a simple static file webserver with node
// this is necessary because certain functionality is blocked
// when serving from file://
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/..'));

app.listen(3000, function() {
    console.log('Development server started on port 3000.');
});