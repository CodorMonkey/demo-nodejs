/**
 * Created on 2016/7/7.
 */
var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function () {
    console.log('listener1 call');
};
var listener2 = function () {
    console.log('listener2 call');
};

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

var count1 = events.listenerCount(eventEmitter, 'connection');
console.log('have ' + count1 + ' listeners');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('remove listener:listener1');

var count2 = events.listenerCount(eventEmitter, 'connection');
console.log('have ' + count2 + ' listeners');

eventEmitter.emit('connection');

console.log('app end');