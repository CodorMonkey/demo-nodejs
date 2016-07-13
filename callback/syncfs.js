/**
 * Created on 2016/7/7.
 */
var fs = require('fs');

var data = fs.readFileSync('input.txt');
console.log(data.toString());

console.log("app end");