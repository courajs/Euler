
var memo = {1:false, 2: true};
var primes = [2];


var primes_up_through = function primes_up_through(n){
	var i, result = [];
	for(i = 0; i < primes.length; i++){
		if (primes[i] > n) return result;
		result.push(primes[i]);
	}
	var last_prime = primes[primes.length - 1];
	for(i = last_prime + 1; i <= n; i++){
		if (is_prime(i)) result.push(i);
	}
	return result;
};

var is_prime = function is_prime(n){
	if (n !== parseInt(n)) throw new Error('Non-integer passed to is_prime');
	if (n < 2) return false;
	if (n in memo) return memo[n];

	var is_prime = primes_up_through(Math.sqrt(n)).every(function(prime){
		return n % prime != 0;
	});
	memo[n] = is_prime;
	if(is_prime) primes.push(n);
	return is_prime;
};

function* prime_slice(start, end) {
  var i;
  for (i = start; i<= end; i++) {
    if (is_prime(i)) {
      yield i;
    }
  }
}

function factor(n) {
  if (is_prime(n)) {
    return { [n]: 1 };
  }

  var result = {};

  for (var prime of prime_slice(2, n/2)) {
    while (n % prime === 0) {
      n = n / prime;
      increment(result, prime);
    }
    if (is_prime(n)) {
      increment(result, n);
      break;
    }
  }

  return result;
}

function increment(cache, prop) {
  cache[prop] = cache[prop] + 1 || 1;
  return cache;
}

module.exports = {
	is_prime: is_prime,
	memo: memo,
	primes: primes,
  prime_slice,
  factor,
  increment
};
