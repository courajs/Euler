module.exports = function unwind(generator) {
  var result = [];
  for (var value of generator) {
    result.push(value);
  }
  return result;
};
