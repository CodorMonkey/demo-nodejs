/**
 * Created on 2016/7/8.
 */
var server = require('./server');
var router = require('./router');

server.start(router.route);