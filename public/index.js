

window.onload = function(s) {
  $('canvas').attr({
    width: window.innerWidth,
    height: window.innerHeight
  });
  element = document.getElementById('canvas');
  controller = new Controller(element);

  $('canvas').on('mousedown', function(e) {
    controller.canvas.createDot(e);
  })

};
