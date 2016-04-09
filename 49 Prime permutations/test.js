var assert = require('assert');
var success = require('../common/success');

var main = require('./main');
var store_in_cache = main.store_in_cache;
var long_entries = main.long_entries;
var has_increasing_sequence = main.has_increasing_sequence;

// Using the cache
  // it adds numbers to the proper entry
  assert.deepEqual(
        store_in_cache(45, { 45: [54] }),
        { 45: [54, 45] }
      );

  // it creates a new entry if it didn't exist
  assert.deepEqual(
        store_in_cache(98, {}),
        { 89: [98] }
      );

// Finding populous cache entries
  assert.deepEqual(
        long_entries({
          a: [1, 2, 3, 4],
          b: [1, 2]
        }),
        [[1, 2, 3, 4]]
      );

// Finding 3-long arithmetic sequences
  assert.equal(has_increasing_sequence([0,1,4,7]), true);
  assert.equal(has_increasing_sequence([0,1,3,7]), false);

success();
