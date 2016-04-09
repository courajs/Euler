var prime_slice = require('../common/prime').prime_slice;

function store_in_cache(number, cache) {
  var index = number.toString().split('').sort().join('');
  var entry = cache[index];

  if (entry) {
    entry.push(number);
  } else {
    cache[index] = [number];
  }
  return cache;
}

function long_entries(cache) {
  var value,
      result = [];
  for (var key in cache) {
    value = cache[key];
    if (value.length >= 3) {
      result.push(value);
    }
  }

  return result;
}

function has_increasing_sequence(list) {
  for (var i = 2; i < list.length; i++) {
    if (list[i] - list[i-1] === list[i-1] - list[i-2]) {
      return list.slice(i-2, i+1);
    }
  }
  return false;
}

module.exports = {
  store_in_cache,
  long_entries,
  has_increasing_sequence
};


if (require.main === module) {
  var prime,
      cache = {};

  for (prime of prime_slice(1000, 9999)) {
    store_in_cache(prime, cache);
  }

  var candidates = long_entries(cache);

  var answer = candidates.find(has_increasing_sequence);
  console.log('FOUND!', has_increasing_sequence(answer).join(''));
} else {
}
