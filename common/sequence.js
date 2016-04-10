function* integers(start) {
  start = start || 0;
  while (true) {
    yield start++;
  }
}

module.exports = {
  integers
};
