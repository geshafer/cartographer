var Tile = (function() {
  var orientation = ORIENTATION.POINTY_HEX,
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

  function neighbors(tile) {
    return [
      Tile.add(tile, { q:  0, r:  1 }),
      Tile.add(tile, { q: -1, r:  0 }),
      Tile.add(tile, { q:  0, r: -1 }),
      Tile.add(tile, { q:  1, r:  0 }),

      // these are hex specific neighbors
      // we should improve this later so
      // it uses orientation for this
      Tile.add(tile, { q: -1, r:  1 }),
      Tile.add(tile, { q:  1, r: -1 }),
    ].slice(0, orientation.numberOfCorners);
  }

  function cornerPoints(center) {
    var corners = [],
      offset;

    for (var i = 0; i < orientation.numberOfCorners; i++) {
      offset = cornerPointOffset(center, i);
      corners.push({
        x: center.x + offset.x,
        y: center.y + offset.y
      });
    }

    return corners;
  }

  function cornerPointOffset(center, corner) {
    var angle = 2.0 * Math.PI * (orientation.startAngle + corner) / orientation.numberOfCorners;

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
