var ORIENTATION = {
  POINTY_HEX: {
    f0: Math.sqrt(3.0),
    f1: Math.sqrt(3.0) / 2.0,
    f2: 0.0,
    f3: 3.0 / 2.0,
    b0: Math.sqrt(3.0) / 3.0,
    b1: -1.0 / 3.0,
    b2: 0.0,
    b3: 2.0 / 3.0,
    startAngle: 0.5,
    numberOfCorners: 6
  },
  FLAT_HEX: {
    f0: 3.0 / 2.0,
    f1: 0.0,
    f2: Math.sqrt(3.0) / 2.0,
    f3: Math.sqrt(3.0),
    b0: 2.0 / 3.0,
    b1: 0.0,
    b2: -1.0 / 3.0,
    b3: Math.sqrt(3.0) / 3.0,
    startAngle: 0.0,
    numberOfCorners: 6
  },
  FLAT_SQUARE: {
    f0: Math.sqrt(2.0),
    f1: 0.0,
    f2: 0.0,
    f3: Math.sqrt(2.0),
    b0: 1 / Math.sqrt(2.0),
    b1: 0.0,
    b2: 0.0,
    b3: 1 / Math.sqrt(2.0),
    startAngle: 0.5,
    numberOfCorners: 4
  }
};
