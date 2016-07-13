/**
 * Created on 2016/7/10.
 */
var util = require('util');

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
        console.log('Hello, my name is ' + this.name);
    }
}

Base.prototype.showName = function () {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}

// 子类只继承基类原型上定义的方法和属性，并不继承在基类内部定义的方法和属性(有点类似java中的private字段)
util.inherits(Sub, Base);

var baseObj = new Base();
baseObj.sayHello();
baseObj.showName();
console.log(baseObj);

var subObj = new Sub();
//subObj.sayHello();
subObj.showName();
console.log(subObj);