/**
 * Created on 2016/7/10.
 */
var fs = require('fs');
var buf = new Buffer(1024);

fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log('open success...');
    console.log('start reading...');
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            return console.error(err);
        }
        console.log(bytes + 'bytes read');
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }
        fs.close(fd, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log('close success');
        })
    })
});