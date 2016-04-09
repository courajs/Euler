var assert = require('assert');
var success = require('./success');
var unwind = require('./unwind');

var prime = require('./prime');
var is_prime = prime.is_prime;
var prime_slice = prime.prime_slice;

// is_prime
assert.equal(is_prime(1), false);
assert.equal(is_prime(2), true);
assert.equal(is_prime(3), true);
assert.equal(is_prime(4), false);
assert.equal(is_prime(27), false);
assert.equal(is_prime(51), false);
assert.equal(is_prime(89), true);
assert.equal(is_prime(987654231), false);

// prime_slice
assert.deepEqual(unwind(prime_slice(5, 13)), [5, 7, 11, 13]);
assert.deepEqual(unwind(prime_slice(4, 14)), [5, 7, 11, 13]);

success();
