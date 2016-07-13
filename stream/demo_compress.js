/**
 * Created on 2016/7/8.
 */
var fs = require('fs');
var zlib = require('zlib');

// 链式流，相当于在管道上再套一层进行加工，此处实现压缩功能
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('compress.zip'));

console.log('compress completed');