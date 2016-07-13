/**
 * Created on 2016/7/8.
 */
var fs = require('fs');
var data = '';

// 创建读取流
var readStream = fs.createReadStream('input.txt');

// 设置编码utf8
//readStream.setEncoding('utf8');

readStream.on('data', function (chunk) {
    data += chunk;
});

readStream.on('end', function() {
    console.log(data);
});

readStream.on('error', function (err) {
    console.log(err.stack);
});

console.log('app end');