function concat(p, n){
	var result = '';
	for (var i = 1; i <= n; i++){
		result += p * i;
	}
	return result;
}

function is_pandigital(n){
	n+='';
	return (n.length == 9 && has_all_digits(n));
}

function has_all_digits(n){
	n += '';
	for (var i = 1; i <=9;i++){
		if (n.indexOf(i) === -1) return false;
	}
	return true;
}



for(var i = 1e5; i > 0; i--){
	if(process_candidate(i)) break;
}

function process_candidate(n){
	var i = 2;
	var result;
	do {
		result = concat(n,i)
	} while (result.length < 9);
	if(is_pandigital(result)){
		console.log('got it!',result);
		return true;
	}
}
