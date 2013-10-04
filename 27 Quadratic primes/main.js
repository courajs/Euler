var is_prime = require('../common/prime').is_prime;

var a,b;

var max = 0;
var max_a, max_b, current;

for(a = -999; a < 1000; a++){
	if (a % 100 ===0) console.log('a =', a);
	for(b = -999; b < 1000; b++){
		current = num_consecutive_primes(a,b);
		if (current > max){
			console.log('found bigger!', current, a, b);
			max = current;
			max_a = a;
			max_b = b;
		}
	}
}
console.log('max', max);
console.log('a', max_a);
console.log('b', max_b);
console.log('answer:', max_a*max_b);


function num_consecutive_primes(a, b){
	var result = 0;
	while(is_prime(quad(result))) result++;

	return result;

	function quad(n){
		return n*n + a*n + b;
	}
}

