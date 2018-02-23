/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  const LOVE_CYCLE_SIZE = 3;

  var tmp, numOfTriangles = 0;

  for (var i = 0; i < preferences.length; i++) {
    tmp = preferences[i];
    
    for (var j = 0; j < LOVE_CYCLE_SIZE - 1; j++) {
      tmp = preferences[tmp - 1];
    }
    
    if (tmp == i + 1)
      numOfTriangles++;
  }

  return Math.floor(numOfTriangles / 3);
};
