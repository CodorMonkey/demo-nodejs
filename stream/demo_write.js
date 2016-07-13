/**
 * Created on 2016/7/8.
 */
var fs = require('fs');
var data = '我来自深渊~~~';

// 创建输出流，如果文件不存在，会自动创建
var writeStream = fs.createWriteStream('output.txt');
// 写入数据
writeStream.write(data, 'utf8');
// 标记写入完成
writeStream.end();

writeStream.on('finish', function () {
    console.log('write finished');
});

writeStream.on('error', function (err) {
    console.log(err.stack);
});

console.log('app end');