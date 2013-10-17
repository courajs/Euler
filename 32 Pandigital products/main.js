var digits = [1,2,3,4,5,6,7,8,9];
var current_perm = digits.slice();
var results = [];
while(current_perm){
	if (is_good_permutation(current_perm)){
		console.log('found one!', current_perm);
		results.push(current_perm);
	}
	current_perm = next_permutation(current_perm);
}

var products = results.map(find_product);
products.sort();
var uniques = products.filter(function(item, i){
	if (i==0) return true;
	if (item != products[i-1]) return true;
})
var answer = uniques.reduce(function(a,b){
	return a + parseInt(b);
},0)
console.log(answer);



function find_product(a){
	var i,j;
	for(i = 1; i <= a.length - 2; i++){
		for(j = i; j <= a.length - 1; j++){
			if(is_good_split(a,i,j)) return integerify(a.slice(j));
		}
	}
	return false;
}



function is_good_permutation(a){
	var i,j;
	for(i = 1; i <= a.length - 2; i++){
		for(j = i; j <= a.length - 1; j++){
			if(is_good_split(a,i,j)) return true;
		}
	}
	return false;
}


function is_good_split(a, split1, split2){
	var multiplicand = integerify(a.slice(0, split1));
	var multiplier = integerify(a.slice(split1, split2));
	var product = integerify(a.slice(split2, a.length));
	return multiplicand * multiplier == product;
}

function integerify(a){
	return a.reduce(function(a,b){
		return a+b;
	},'')
}

function next_permutation(a){
	var result = a.slice();
	if (integerify(result) == integerify(result.slice().sort(function(a,b){return b-a;}))) return false;
	var sub = next_permutation(a.slice(1));
	if (!sub){
		return next_perm_at_this_level(result);
	}
	else {
		sub.unshift(a[0]);
		return sub;
	}
}

function next_perm_at_this_level(a){
	var digit = a[0];
	var rest = a.slice(1);
	var greater = rest.filter(function(item){
		return item > digit;
	});
	var least = greater.reduce(function(a,b){
		return Math.min(a,b);
	});
	rest.splice(rest.indexOf(least), 1, digit);
	rest.sort();
	rest.unshift(least);
	return rest;
}