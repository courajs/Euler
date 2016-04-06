function* permutations(terms) {
  var is_string = typeof terms === 'string';
  if (terms.length === 1) {
    yield terms;
    return;
  }
  var i, term, others, sub_permutation, permutation;
  for (i in terms) {
    term = terms[i];
    others = [].slice.call(terms);
    others.splice(i, 1);
    for (sub_permutation of permutations(others)) {
      permutation = [term].concat(sub_permutation);
      if (is_string) {
        yield permutation.join('');
      } else {
        yield permutation;
      }
    }
  }
}


module.exports = permutations;
