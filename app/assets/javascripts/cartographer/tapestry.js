var Tapestry = (function() {
  var offset = { x: 0, y: 0 };

  function clear(canvas) {
    var canvasContext = canvas.getContext('2d');

    // Store the current transformation matrix
    canvasContext.save();

    // Use the identity matrix while clearing the canvas
    canvasContext.setTransform(1, 0, 0, 1, 0, 0);
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    // Restore the transform
    canvasContext.restore();
  }

  function draw(points, canvas) {
    var canvasContext = canvas.getContext('2d');

    canvasContext.beginPath();
    points.forEach(function(point, index) {
      if (index === 0) {
        canvasContext.moveTo(point.x, point.y);
      } else {
        canvasContext.lineTo(point.x, point.y);
      }
    });
    canvasContext.closePath();
    canvasContext.stroke();
  }

  function sizeTo(element, canvas) {
    canvas.width = element.innerWidth;
    canvas.height = element.innerHeight;

    offset = { x: canvas.width / 2, y: canvas.height / 2 };
    canvas.getContext('2d').translate(offset.x, offset.y);
  }

  function pan(delta, canvas) {
    canvas.getContext('2d').translate(delta.x, delta.y);
    offset = { x: offset.x + delta.x, y: offset.y + delta.y };
  }

  function pixelToPoint(pixel) {
    return { x: pixel.x - offset.x, y: pixel.y - offset.y };
  }

  return {
    clear: clear,
    draw: draw,

    sizeTo: sizeTo,
    pan: pan,

    pixelToPoint: pixelToPoint
  };
})();
