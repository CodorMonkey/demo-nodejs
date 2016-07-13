/**
 * Created on 2016/7/7.
 */
var buf = new Buffer(256);

// 长度11
var len = buf.write('hello world');

// 长度6，utf8编码格式，中文占3个字节
//var len = buf.write('你好');

console.log('write ' + len + ' bytes');