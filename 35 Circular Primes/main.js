var is_prime = require('../common/prime').is_prime;

function rotations(n){
	n+='';
	return [n].concat(other_rotations(n, n));
}

function other_rotations(n, first){
	n = rotate(n);
	if (n == first) return [];
	return [n].concat(other_rotations(n,first));
}

function rotate(n){
	n += '';
	n = n.split('');
	n.unshift(n.pop());
	return n.join('');
}

function is_circular_prime(n){
	var r = rotations(n);
	return r.every(function(item){
		return is_prime(parseInt(item));
	});
}

results = [];

for (var i = 2; i < 1e6; i++){
	if (is_circular_prime(i)) results.push(i);
}
console.log(results);
console.log(results.length);