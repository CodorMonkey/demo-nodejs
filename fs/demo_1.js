/**
 * Created on 2016/7/10.
 */
var fs = require('fs');

fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log('async:' + data.toString());
});

var data = fs.readFileSync('input.txt');
console.log('sync:' + data.toString());

console.log('app end');