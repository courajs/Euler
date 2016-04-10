var assert = require('assert');
var success = require('./success');
var unwind = require('./unwind');

var sequence = require('./sequence');

var all = sequence.integers(2);
assert.equal(all.next().value, 2);
assert.equal(all.next().value, 3);
assert.equal(all.next().value, 4);

success();
