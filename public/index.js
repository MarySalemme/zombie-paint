window.onload = function(s) {
  $('canvas').attr({
    width: window.innerWidth,
    height: window.innerHeight
  });
  element = document.getElementById('canvas');
  controller = new Controller(element);

  $('canvas').on('mousedown', function(e) {
    controller.canvas.startDrawing();

    $('canvas').on('mousemove', function(e) {
      if (controller.canvas.isDrawing()) {
        controller.canvas.drawLine(e)}

        $('canvas').on('mouseup', function() {
          controller.canvas.endDrawing();
        })
        $('canvas').on('mouseleave', function () {
          controller.canvas.endDrawing();
        })
      })
    })
  };
