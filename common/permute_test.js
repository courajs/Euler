var assert = require('assert');
var success = require('./success');
var unwind = require('./unwind');

var permute = require('./permute');

assert.deepEqual(unwind(permute([1, 2])), [[1, 2], [2, 1]]);

assert.deepEqual(unwind(permute(['b','a','c'])), [
      ['b','a','c'],
      ['b','c','a'],
      ['a','b','c'],
      ['a','c','b'],
      ['c','b','a'],
      ['c','a','b']
]);

assert.deepEqual(unwind(permute('bac')), [
        'bac',
        'bca',
        'abc',
        'acb',
        'cba',
        'cab'
]);


success();
