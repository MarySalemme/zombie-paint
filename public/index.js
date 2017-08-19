
window.onload = function() {
  $('canvas').attr({
    width: window.innerWidth,
    height: window.innerHeight
  });

  var element = document.getElementById('canvas');
  var stroke = new Stroke();
  controller = new Controller(element, stroke);

  $('.colours').on('click', colourPicker())

  var colourPicker = function(jQuery) {
    var colorCode = $(this).attr('id')
    controller.canvas.getStroke().changeColour(colorCode)
  }

  element.addEventListener('mousedown', function(e) {
    controller.canvas.createDot(e);
  })

// a colour handler

};
