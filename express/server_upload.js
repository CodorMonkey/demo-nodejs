/**
 * Created on 2016/7/12.
 */
var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: './tmp/'}).array('image'));

app.get('/index.html', function (req, res) {
    res.sendfile(__dirname + '/index3.html');
});

app.post('/file_upload', function (req, res) {
    var file = req.files[0];
    console.log(file);

    var des_file = __dirname + '/' + file.originalname;
    fs.readFile(file.path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            var response = {};
            if (err) {
                console.log(err);
                response.message = 'File uploaded error';
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});