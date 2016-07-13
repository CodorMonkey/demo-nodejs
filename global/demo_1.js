/**
 * Created on 2016/7/8.
 */
// 当前模块文件绝对路径：e:\workspace\WebStorm\菜鸟Node\global\demo_1.js
console.log(__filename);
// 当前模块文件目录绝对路径：e:\workspace\WebStorm\菜鸟Node\global
console.log(__dirname);

function sayHello() {
    console.log('hello world');
}

// 2秒后执行sayHello函数，只执行一次
var timeout = setTimeout(sayHello, 2000);
// 清除timeout
clearTimeout(timeout);

// 每2秒执行一次sayHello函数
var interval = setInterval(sayHello, 2000);
// 清除interval
clearInterval(interval);