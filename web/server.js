/**
 * Created on 2016/7/11.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log('request : ' + pathname);

    fs.readFile(pathname.substr(1), function(err, data) {
        if (err) {
            console.error(err);
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data.toString());
        }
        res.end();
    });
}).listen(8888, function () {
    console.log('server running at port:8888');
});