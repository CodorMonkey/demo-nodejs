/**
 * Created on 2016/7/11.
 */
var net = require('net');

var client = net.connect({port: 8888}, function () {
    console.log('connect to server');
});

client.on('data', function (data) {
    console.log(data.toString());
    client.end();
});

client.on('end', function () {
    console.log('connection close');
});