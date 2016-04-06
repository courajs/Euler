var permute = require('../common/permute');
var has_property = require('./has_property');

var total = 0;

for (var pandigital of permute('1234567890')) {
  if (has_property(pandigital)) {
    console.log('found', pandigital);
    total += parseInt(pandigital);
  }
}

console.log('result:', total);
