var digits = [1,2,3,4,5,6,7,8,9];

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

function permute(a){
	if (a.length === 1) return [a];
	var copy = a.slice();
	var first = copy.pop();
	var sub_perms = permute(copy);
	var result = [];
	sub_perms.forEach(function(sub_perm){
		result = result.concat(intersperse(sub_perm, first));
	})
	return result;
}


function intersperse(array, new_item){
	result = [];
	var copy;
	for (var i = 0; i <= array.length; i++){
		copy = array.slice();
		copy.splice(i,0,new_item);
		result.push(copy);
	}
	return result;
}

// var result = permute(digits).filter(is_good_permutation);
// console.log(result);