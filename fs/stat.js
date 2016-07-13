/**
 * Created on 2016/7/10.
 */
var fs = require('fs');

fs.stat('input.txt', function (err, stats) {
    if (err) {
        return console.log(err);
    }
    console.log(stats);
    // 检测文件类型
    console.log("是否为文件(isFile) ? " + stats.isFile());
    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
});

console.log('app end');