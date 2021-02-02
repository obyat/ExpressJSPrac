var connect = require('connect'),
 util = require('util');
 var serveStatic = require('serve-static');
var interceptorFunction = function (request, response, next) {
    console.log(util.format('Request for %s with method %s', request.url, request.method));
    next();    
};

// var server = connect()
//     //.use(interceptorFunction)
//     //ONLY INTERCEPT IF WE GO TO THE PATH NAMED LOG 
//     //400/log
//     .use(('/log'), interceptorFunction)

//     .use(function onRequest(request, response){
//         response.end('Hello from Connect');
//     }).listen(4000);

var server = connect()
    //.use(interceptorFunction)
    //ONLY INTERCEPT IF WE GO TO THE PATH NAMED LOG 
    //400/log
    .use(serveStatic(__dirname+'/docs'))

    .use(function onRequest(request, response){
        response.end('Hello from Connect');
        
    }).listen(4000);


    //ABOVE ONLY LOADS THE DIRS FILES IF YOU ARE IN THAT DIRECTORY IN URL
    //MORE INFO AFT

    /*
From version 0.11.x, the new grunt-contrib-connect does not support connect.static and connect.directory.
You should install serve-static(for serve static files) and serve-index (for Serves pages that contain directory listings for a given path).

like this:
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');

Use serveStatic instead connect.static
and
serveIndex instead connect.directory
    */