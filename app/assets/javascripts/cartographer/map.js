var Map = (function() {
  function has(map, hex) {
    var present = false;

    for (var i = 0; i < map.length; i++) {
      if (Hex.equal(map[i], hex)) {
        present = true;
        break;
      }
    }

    return present;
  }

  function add(map, hexes) {
    var unique = hexes.slice();

    for(var i = hexes.length - 1; i >= 0; i--) {
      if (has(map, hexes[i])) {
        unique.splice(i, 1);
      }
    }

    map.push(...unique);

    return map;
  }

  function hexToPoint(hex) {
    var orientation = ORIENTATION.POINTY,
      origin = { x: 0, y: 0 },
      size = 36,
      x = (orientation.f0 * hex.q + orientation.f1 * hex.r) * size,
      y = (orientation.f2 * hex.q + orientation.f3 * hex.r) * size;

    return {
      x: x + origin.x,
      y: y + origin.y
    };
  }

  function pointToHex(point) {
    var orientation = ORIENTATION.POINTY,
      origin = { x: 0, y: 0 },
      size = 36,
      center = { x: (point.x - origin.x) / size, y: (point.y - origin.y) / size },
      q = Math.round(orientation.b0 * center.x + orientation.b1 * center.y),
      r = Math.round(orientation.b2 * center.x + orientation.b3 * center.y);

    return { q: q, r: r, s: -q-r };
  }

  return {
    has: has,
    add: add,

    hexToPoint: hexToPoint,
    pointToHex: pointToHex
  };
})();
