/**
 * Created on 2016/7/11.
 */
var fs = require('fs');

fs.unlink('input.txt', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('delete file success');
});