var champ = '';
for(var i = 1; i <= 1e6; i++) champ += i;
var result = 1;
for(var i = 1; i <= 1e6; i*=10)	result *= parseInt(champ[i - 1]);
console.log(result);