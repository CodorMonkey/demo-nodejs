/**
 * Created on 2016/7/8.
 */
var hello1 = require('./hello1');
var Hello = require('./hello2');

hello1.hello();

var hello2 = new Hello();
hello2.setName('monkey');
hello2.sayHello();