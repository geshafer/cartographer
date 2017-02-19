var Hex = (function() {
  var orientation = ORIENTATION.POINTY,
    size = 36;

  function equal(one, two) {
    return ((one.q === two.q) && (one.r === two.r));
  }

  function add(one, two) {
    return {
      q: one.q + two.q,
      r: one.r + two.r
    };
  }

  function neighbors(hex) {
    return [
      Hex.add(hex, { q:  0, r:  1 }),
      Hex.add(hex, { q: -1, r:  1 }),
      Hex.add(hex, { q: -1, r:  0 }),
      Hex.add(hex, { q:  0, r: -1 }),
      Hex.add(hex, { q:  1, r: -1 }),
      Hex.add(hex, { q:  1, r:  0 }),
    ];
  }

  function cornerPoints(center) {
    var corners = [],
      offset;

    for (var i = 0; i < 6; i++) {
      offset = cornerPointOffset(center, i);
      corners.push({
        x: center.x + offset.x,
        y: center.y + offset.y
      });
    }

    return corners;
  }

  function cornerPointOffset(center, corner) {
    var angle = 2.0 * Math.PI * (orientation.startAngle + corner) / 6;

    return {
      x: size * Math.cos(angle),
      y: size * Math.sin(angle)
    };
  }

  return {
    equal: equal,

    add: add,

    neighbors: neighbors,

    cornerPoints: cornerPoints
  };
})();
