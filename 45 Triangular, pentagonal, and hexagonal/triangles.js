// 1-based
module.exports = function*(n) {
  if (!n) { n = 1 }
  while (true) {
    yield n * (n + 1) / 2;
    n++;
  }
}
