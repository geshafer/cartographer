var Cartographer = (function() {
  var map = [{ q: 0, r: 0 }];

  function setMap(newMap) {
    map = newMap;
  }

  function plotSurroundings(canvas) {
    return function(event) {
      var point = Tapestry.pixelToPoint(event.center),
        target = Map.pointToTile(point);

      if (Map.has(map, target)) {
        map = Map.add(map, Tile.neighbors(target));
        draw(map, canvas);
      }
    };
  }

  function pan(canvas) {
    var delta = { x: 0, y: 0 };

    return function(event) {
      Tapestry.pan({ x: event.deltaX - delta.x, y: event.deltaY - delta.y }, canvas);
      draw(map, canvas);
      if (event.isFinal) {
        delta = { x: 0, y: 0 };
      } else {
        delta = { x: event.deltaX, y: event.deltaY };
      }
    };
  }

  function draw(tiles, canvas) {
    Tapestry.clear(canvas);
    tiles.forEach(function(tile, index) {
      Tapestry.draw(Tile.cornerPoints(Map.tileToPoint(tile)), canvas);
    });
  }

  return {
    setMap: setMap,
    pan: pan,
    plotSurroundings: plotSurroundings,
    draw: draw
  };
})();
