var assert = require('assert');
var success = require('../common/success');

var has_property = require('./has_property');

assert(has_property('1406357289'));
assert(!has_property('9876543210'));

success();
