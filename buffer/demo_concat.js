/**
 * Created on 2016/7/7.
 */
var buf1 = new Buffer('你好');
var buf2 = new Buffer('，我来了');

var buffer = Buffer.concat([buf1, buf2], 9);
console.log(buffer.toString());