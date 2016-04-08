function pentagonal(pn) {
  // Pn=n(3n−1)/2
  // so just solve for n, and it should be a whole number
  var roots = quadratic(3, -1, -2*pn);
  whole_roots = roots.filter(function(root) {
    return root > 0 && Math.round(root) === root;
  });
  return whole_roots.length === 1;
}

function hexagonal(hn) {
  // Hn = n(2n-1)
  var roots = quadratic(2, -1, -hn);
  whole_roots = roots.filter(function(root) {
    return root > 0 && Math.round(root) === root;
  });
  return whole_roots.length === 1;
}


function quadratic(a, b, c) {
  var discriminant = Math.pow(b, 2) - 4 * a * c;
  return [
    (1 + Math.sqrt(discriminant)) / (2 * a),
    (1 - Math.sqrt(discriminant)) / (2 * a)
  ];
}


module.exports = {
  pentagonal,
  hexagonal
};
