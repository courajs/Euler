var memo = {'0': 1};
var max = 2540160
var result = [];

for (var i = 0; i <= max; i++){
	if(fits(i)) result.push(i);
}
console.log(result);

function fits(n){
	var s = n+'';
	digits = s.split('');
	return n == digits.reduce(function(a,b){
		return a + factorial(b);
	},0)
}

function factorial(n){
	if(n in memo){
		return memo[n];
	}
	return n * factorial(n - 1);
}