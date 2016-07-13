/**
 * Created on 2016/7/12.
 */
var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', function (req, res) {
    console.log('cookie:', req.cookies);
    res.send(req.cookies);
});

var server = app.listen(8081, function () {
    console.log('server running at port:8081');
});