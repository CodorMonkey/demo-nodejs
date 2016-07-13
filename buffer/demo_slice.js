/**
 * Created on 2016/7/8.
 */
var buf1 = new Buffer('monkey 猴子');

var buf2 = buf1.slice(0, 5);
var buf3 = buf1.slice(3, 10);

console.log('buf2 : ' + buf2);
console.log('buf3 : ' + buf3);

/*注意点：slice返回的Buffer和原Buffer指向同一块内存，修改原Buffer，会连同返回的Buffer一起修改*/
buf1.write('hello world');
console.log('buf2 : ' + buf2);
console.log('buf3 : ' + buf3);


/*结果*/
/*
 buf2 : monke
 buf3 : key 猴
 buf2 : hello
 buf3 : lo worl
 */