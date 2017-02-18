var Cartographer = (function() {
  var map = [{ q: 0, r: 0, s: 0 }];

  function plotSurroundings(canvas) {
    return function(event) {
      var point = Tapestry.pixelToPoint(event.center),
        target = Map.pointToHex(point);

      if (Map.has(map, target)) {
        map = Map.add(map, Hex.neighbors(target));
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

  function draw(hexes, canvas) {
    Tapestry.clear(canvas);
    hexes.forEach(function(hex, index) {
      Tapestry.draw(Hex.cornerPoints(Map.hexToPoint(hex)), canvas);
    });
  }

  return {
    pan: pan,
    plotSurroundings: plotSurroundings,
    draw: draw
  };
})();
