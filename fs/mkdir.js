/**
 * Created on 2016/7/11.
 */
var fs = require('fs');

fs.mkdir('../fs/mkdir', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('mkdir success');
});

/*如果fs目录不存在会报错！*/