/**
 * Created on 2016/7/12.
 */
var express = require('express');
var app = express();
var fs = require('fs');

//添加的新用户数据
var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
};

app.get('/user/list', function (req, res) {
    fs.readFile(__dirname + '/users.json', 'utf8', function (err, data) {
        console.log(data);
        res.send(data);
    });
});

app.post('/user/add', function (req, res) {
    fs.readFile(__dirname + '/users.json', 'utf8', function (err, data) {
        var users = JSON.parse(data);
        users['user4'] = user['user4'];
        console.log(users);
        res.send(users);
    });
});

app.get('/user/:id', function (req, res) {
    fs.readFile(__dirname + '/users.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        var user = data['user' + req.params.id];
        console.log(user);
        res.send(user);
    });
});

app.get('/user/:id/delete', function (req, res) {
    fs.readFile(__dirname + '/users.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data['user' + req.params.id];
        console.log(data);
        res.send(data);
    });
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});