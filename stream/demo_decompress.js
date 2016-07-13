/**
 * Created on 2016/7/8.
 */
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('compress.zip')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('decompress.txt'));

console.log('decompress completed');