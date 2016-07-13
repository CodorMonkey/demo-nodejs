/**
 * Created on 2016/7/8.
 */
function Hello() {
    var name;
    this.setName = function (newName) {
        name = newName;
    };
    this.sayHello = function () {
        console.log('Hello, my name is ' + name);
    };
}

module.exports = Hello;