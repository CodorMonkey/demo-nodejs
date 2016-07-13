/**
 * Created on 2016/7/8.
 */
var buf1 = new Buffer('ABC');
var buf2 = new Buffer(3);

buf1.copy(buf2);
console.log('buf2 : ' + buf2.toString());
console.log(buf1 == buf2);
console.log(buf1.compare(buf2));