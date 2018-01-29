const test = require("ava");
const polygonCentroid = require("./index.js");

test("polygonCentroid", t => {
  // Test using a square.
  t.deepEqual(
    polygonCentroid([
      { x: 0, y: 0 },
      { x: 2, y: 0 },
      { x: 2, y: 2 },
      { x: 0, y: 2 }
    ]),
    { x: 1, y: 1 }
  );

  // Test using a right-angled triangle.
  t.deepEqual(
    polygonCentroid([{ x: 0, y: 0 }, { x: 0, y: 6 }, { x: 3, y: 0 }]),
    { x: 1, y: 2 }
  );

  // Test using a L-shaped polygon.
  t.deepEqual(
    polygonCentroid([
      { x: 0, y: 0 },
      { x: 2, y: 0 },
      { x: 2, y: 2 },
      { x: 6, y: 2 },
      { x: 6, y: 4 },
      { x: 0, y: 4 }
    ]),
    { x: 2.5, y: 2.5 }
  );
});
