var http = require('http');

var server = http.createServer(function onRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.write('This is a simple HTTP Server');
    res.end();
    }).listen(3000); 
