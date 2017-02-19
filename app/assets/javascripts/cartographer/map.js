var Map = (function() {
  function has(map, tile) {
    var present = false;

    for (var i = 0; i < map.length; i++) {
      if (Tile.equal(map[i], tile)) {
        present = true;
        break;
      }
    }

    return present;
  }

  function add(map, tiles) {
    var unique = tiles.slice();

    for(var i = tiles.length - 1; i >= 0; i--) {
      if (has(map, tiles[i])) {
        unique.splice(i, 1);
      }
    }

    map.push(...unique);

    return map;
  }

  function tileToPoint(tile) {
    var orientation = ORIENTATION.POINTY_HEX,
      origin = { x: 0, y: 0 },
      size = 36,
      x = (orientation.f0 * tile.q + orientation.f1 * tile.r) * size,
      y = (orientation.f2 * tile.q + orientation.f3 * tile.r) * size;

    return {
      x: x + origin.x,
      y: y + origin.y
    };
  }

  function pointToTile(point) {
    var orientation = ORIENTATION.POINTY_HEX,
      origin = { x: 0, y: 0 },
      size = 36,
      center = { x: (point.x - origin.x) / size, y: (point.y - origin.y) / size },
      q = Math.round(orientation.b0 * center.x + orientation.b1 * center.y),
      r = Math.round(orientation.b2 * center.x + orientation.b3 * center.y);

    return { q: q, r: r };
  }

  return {
    has: has,
    add: add,

    tileToPoint: tileToPoint,
    pointToTile: pointToTile
  };
})();
