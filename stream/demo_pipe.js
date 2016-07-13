/**
 * Created on 2016/7/8.
 */
var fs = require('fs');

var readStream = fs.createReadStream('input.txt');
var writeStream = fs.createWriteStream('pipe.txt');

// 通过管道读写，将input.txt文件内容写入pipe.txt
readStream.pipe(writeStream);

console.log('app end');