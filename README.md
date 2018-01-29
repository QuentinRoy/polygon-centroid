[![Build Status](https://travis-ci.org/QuentinRoy/polygon-centroid.svg?branch=master)](https://travis-ci.org/QuentinRoy/polygon-centroid)
[![codecov](https://codecov.io/gh/QuentinRoy/polygon-centroid/branch/master/graph/badge.svg)](https://codecov.io/gh/QuentinRoy/polygon-centroid)
[![dependencies Status](https://david-dm.org/quentinroy/polygon-centroid/status.svg)](https://david-dm.org/quentinroy/polygon-centroid)
[![devDependencies Status](https://david-dm.org/quentinroy/polygon-centroid/dev-status.svg)](https://david-dm.org/quentinroy/polygon-centroid?type=dev)

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