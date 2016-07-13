/**
 * Created on 2016/7/11.
 */
var http = require('http');

var options = {
    host: 'localhost',
    port: 8888,
    path: '/index.html'
};

var request = http.request(options, function(res) {
    var data = '';

    res.on('data', function(chunk) {
        data += chunk;
    });
    res.on('end', function() {
        console.log(data);
    });
});

request.end();