var triangles = require('./triangles');
var shapely = require('./shapely');
var pentagonal = shapely.pentagonal;
var hexagonal = shapely.hexagonal;

var candidates = triangles(286);
var current;

do {
  current = candidates.next().value;
} while (!(hexagonal(current) && pentagonal(current)));
console.log(current);
