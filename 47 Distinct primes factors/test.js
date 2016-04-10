var assert = require('assert');
var success = require('../common/success');

var main = require('./main');
var has_4_distinct_factors = main.has_4_distinct_factors;

assert.equal(has_4_distinct_factors(210), true);
assert.equal(has_4_distinct_factors(644), false);

success();
