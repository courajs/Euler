var prime = require('../common/prime.js');
var is_prime = prime.is_prime;

var pans = [
'',
'1',
'12',
'123',
'1234',
'12345',
'123456',
'1234567',
'12345678',
'123456789',
]

function is_pandigital(n){
	n+='';
	return n.split('').sort().join('') == pans[n.length];
}

(function(){
for(var i = 1e7 - 1; i >0; i--){
	if (is_pandigital(i)){
		console.log('pandigital!',i);
		if(is_prime(i)){
			console.log(is_prime(i));
			console.log('got it!', i);
			return;
		}
	}
}
})()
console.log('nope');