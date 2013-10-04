module.exports = {
	is_prime: is_prime
};

function is_prime(n){
	if (n !== parseInt(n)) throw new Error('Non-integer passed to is_prime');
	if (n < 2) return false;
	if (n == 2) return true;

	for (var i = 2; i <= Math.sqrt(n); i ++){
		if (n % i === 0) return false;
	}
	return true;
}