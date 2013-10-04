var all_coins = [200,100,50,20,10,5,2,1];


function num_ways_with_coins(total, coins){
	if(total === 0) return log(1);
	if(total < 0) return log(0);
	if (coins.length === 0) return log(0);

	var coin = coins[0];
	var coins_except_first = coins.slice();
	coins_except_first.splice(0,1);

	return log(num_ways_with_coins(total - coin, coins) + num_ways_with_coins(total, coins_except_first));

	function log(n){
		// console.log(total,coins,'gives us',n);
		return n;
	}
}

console.log(num_ways_with_coins(200, all_coins));