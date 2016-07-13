/**
 * Created on 2016/7/8.
 */
var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('pathname:' + pathname);

        route(pathname);

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write('<h3>hello world<h3>');
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('server start at port:8888');
}

exports.start = start;