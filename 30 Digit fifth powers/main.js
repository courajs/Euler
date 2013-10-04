function sum_digits(n){
	var s = ''+n;
	return [].reduce.call(s, function(a, b){
		return Math.pow(parseInt(b), 5) + a;
	}, 0);
}

var result = [];
for (var a = 2; a < 1000000; a++) {
	if(sum_digits(a) === a) result.push(a);
}

console.log(result.reduce(function(a,b){return a+b}));