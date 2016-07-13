/**
 * Created on 2016/7/8.
 */
console.log('Hello world');
console.log('Hello[%d]world');
console.log('Hello[%d]world', 1991);

//console.trace('以下是trace内容');

console.info('app start');

// 开始计时
console.time('app');
var count = 10;
console.log('count = %d', count);
// 结束计时，此处输出开始-结束执行所用时间，如：app: 1ms
console.timeEnd('app');

console.info('app end');