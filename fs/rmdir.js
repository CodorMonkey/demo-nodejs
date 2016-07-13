/**
 * Created on 2016/7/11.
 */
var fs = require('fs');

fs.rmdir('../fs/mkdir', function (err) {
    if (err) {
        return console.error(err);
    }
    fs.readdir('../fs', function (err, files) {
        if (err) {
            return console.error(err);
        }
        files.forEach(function (file) {
            console.log(file);
        });
    });
});