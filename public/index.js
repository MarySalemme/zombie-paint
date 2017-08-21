
// File for global/helper functions

function onDomReady(window, fn) {
  window.onload = fn;
}

function getCanvasElement() {
  return document.getElementById('canvas')
}

function getStroke() {
  return new Stroke();
}

function buildCanvas(canvas = new Canvas(getCanvasElement(), getStroke())) {
  return canvas;
}

function setUpController(controller = new Controller(jQuery, buildCanvas())) {
<<<<<<< HEAD
  // return controller;
  controller.setMouseDownListener();
  controller.setMouseMoveListener();
  controller.setMouseUpListener();
  console.log(controller)
}
=======
>>>>>>> 9e5345e516b1350f1450dfb6386131a4726bf758

  // Goliath. Let's extract
  controller.setCanvasMouseDownListener();
  controller.setCanvasMouseMoveListener();
  controller.setCanvasMouseUpListener();
  controller.setCanvasMouseLeaveListener();
  controller.setPaletteClickListener();
  controller.setSizerClickListener();
  controller.setEraserClickListener();

  return controller 
}

function pageElementSetup(doc) {
  setUpController();
}

// Untested
function colourPicker() { // Grabs the colour val from the dom and passes it to the stroke model
    var colorCode = $(this).attr('id')
    controller.canvasDrawer.getStroke().changeColour(colorCode)
}

// Untested
function sizeSetter() { // Grabs the colour val from the dom and passes it to the stroke model
    var newSize = $(this).attr('id')
    controller.canvasDrawer.getStroke().changeSize(newSize)
}

// Untested
function eraserSettingOn() { // Grabs the colour val from the dom and passes it to the stroke model
    controller.canvasDrawer.getStroke().changeColour('#ffffff')
}


onDomReady(jQuery, window, pageElementSetup(document));
