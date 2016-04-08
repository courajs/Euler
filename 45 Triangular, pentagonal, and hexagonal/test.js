var assert = require('assert');
var success = require('../common/success');

var triangles = require('./triangles');
var shapely = require('./shapely');


// it yields triangular numbers

var all = triangles();

assert.equal(all.next().value, 1);
assert.equal(all.next().value, 3);
assert.equal(all.next().value, 6);
assert.equal(all.next().value, 10);
assert.equal(all.next().value, 15);

// it yields starting at an index

var some = triangles(4);

assert.equal(some.next().value, 10);
assert.equal(some.next().value, 15);


// testing other shapely properties

// 1, 5, 12, 22, 35,
assert.equal(shapely.pentagonal(1), true);
assert.equal(shapely.pentagonal(5), true);
assert.equal(shapely.pentagonal(12), true);
assert.equal(shapely.pentagonal(22), true);
assert.equal(shapely.pentagonal(35), true);
assert.equal(shapely.pentagonal(40755), true);

assert.equal(shapely.pentagonal(2), false);
assert.equal(shapely.pentagonal(3), false);
assert.equal(shapely.pentagonal(6), false);

// 1, 6, 15, 28, 45, 
assert.equal(shapely.hexagonal(1), true);
assert.equal(shapely.hexagonal(6), true);
assert.equal(shapely.hexagonal(15), true);
assert.equal(shapely.hexagonal(28), true);
assert.equal(shapely.hexagonal(45), true);
assert.equal(shapely.hexagonal(40755), true);

assert.equal(shapely.hexagonal(4), false);
assert.equal(shapely.hexagonal(5), false);
assert.equal(shapely.hexagonal(7), false);


success();
