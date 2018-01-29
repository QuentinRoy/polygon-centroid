# @quentinroy/polygon-centroid

Calculate the centroid of any non-self-intersecting closed polygon.

## Installing / Getting started

`npm i @quentinroy/polygon-centroid`

## Example

```js
const polygonCentroid = require("polygon-centroid");
const centroid = polygonCentroid([
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
]);
```
