var assert = require('assert');
var success = require('./success.js');
var unwind = require('./unwind.js');

var g = function*() {
  yield 'a';
  yield 5;
}

assert.deepEqual(unwind(g()), ['a', 5]);

success();
