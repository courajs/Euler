var is_prime = require('../common/prime.js').is_prime;

function is_truncatable_left(n){
	n+='';
	for(var i = 0; i < n.length; i++){
		if (! is_prime(parseInt(n.slice(i)))) return false;
	}
	return true;
}

function is_truncatable_right(n){
	n+='';
	for(var i = n.length; i >= 1; i--){
		if (! is_prime(parseInt(n.slice(0,i)))) return false;
	}
	return true;
}

function is_truncatable_prime(n){
	return is_truncatable_right(n) && is_truncatable_left(n);
}

var results = [];
var i = 11;
while (results.length < 11){
	if (is_truncatable_prime(i)){
		console.log('found one!', i);
		results.push(i);
	}
	i++
}
console.log(results.reduce(function(a,b){return a+b;}));