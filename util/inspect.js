/**
 * Created on 2016/7/10.
 */
var util = require('util');

function Person() {
    this.name = 'monkey';
    this.toString = function () {
        return this.name;
    }
}

var p = new Person();

//console.log(util.inspect(p));
//console.log(util.inspect(p, true));
//console.log(util.inspect(p, true, 0));
console.log(util.inspect(p, true, null, true));