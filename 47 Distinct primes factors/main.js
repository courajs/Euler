var prime = require('../common/prime');
var sequence = require('../common/sequence');


function has_4_distinct_factors(n) {
  return Object.keys(prime.factor(n)).length >= 4;
}


if (require.main === module) {
  var streak = 0;
  var first_of_streak;

  for (var number of sequence.integers(2)) {
    if (has_4_distinct_factors(number)) {
      if (streak === 0) {
        first_of_streak = number;
      }
      streak++;
      if (streak === 4) {
        break;
      }
    } else {
      streak = 0;
    }
  }

  console.log(first_of_streak);

} else {
  module.exports = {
    has_4_distinct_factors
  };
}
