module.exports = function(number) {
  return chunk_div_by(number, 2, 2) &&
         chunk_div_by(number, 3, 3) &&
         chunk_div_by(number, 4, 5) &&
         chunk_div_by(number, 5, 7) &&
         chunk_div_by(number, 6, 11) &&
         chunk_div_by(number, 7, 13) &&
         chunk_div_by(number, 8, 17);
}

function chunk_div_by(number, chunk_start_index, modulus) {
  var chunk = number.slice(chunk_start_index - 1, chunk_start_index + 2);
  return parseInt(chunk) % modulus === 0;
}
