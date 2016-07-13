/**
 * Created on 2016/7/11.
 */
var express = require('express');
var app = express();
var util = require('util');

app.get('/', function (req, res) {
    res.send('hello world');
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('server running at http://%s:%s', host, port);
});