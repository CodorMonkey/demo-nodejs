/**
 * Created on 2016/7/11.
 */
var http = require('http');
var util = require('util');
var querystring = require('querystring');

http.createServer(function (req, res) {
    var post = '';
    req.on('data', function(chunk) {
        post += chunk;
    });
    req.on('end', function() {
        post = querystring.parse(post);
        res.end(util.inspect(post, true));
    });
}).listen(8888);