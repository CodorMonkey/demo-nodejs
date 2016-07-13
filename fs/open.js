/**
 * Created on 2016/7/10.
 */
var fs = require('fs');

fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log('open success');
});

console.log('app end');