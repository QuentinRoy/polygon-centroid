// Small utility that sum the results of a function f successively call with
// the elements of array taken two by two.
const pairwiseSumReduce = (array, f, init = 0) => {
  const n = array.length;
  return array.reduce((acc, p, i) => {
    if (i + 1 >= n) {
      return acc;
    }
    return acc + f(p, array[i + 1], i, array);
  }, init);
};

module.exports = polygonPoints => {
  // Calculate the area of the polygon.
  const area =
    pairwiseSumReduce(polygonPoints, (p1, p2) => p1.x * p2.y - p1.y * p2.x) / 2;

  // Calculate the x coordinate of the centroid.
  const cx =
    pairwiseSumReduce(
      polygonPoints,
      (p1, p2) => (p1.x + p2.x) * (p1.x * p2.y - p1.y * p2.x)
    ) /
    (6 * area);

  // Calculate the y coordinate of the centroid.
  const cy =
    pairwiseSumReduce(
      polygonPoints,
      (p1, p2) => (p1.y + p2.y) * (p1.x * p2.y - p1.y * p2.x)
    ) /
    (6 * area);

  return { x: cx, y: cy };
};
