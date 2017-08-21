function onDomReady(window, fn) {
  window.onload = fn;
}

function getCanvasElement() {
  return htmlCanvas = document.getElementById('canvas')
}

function getStroke() {
  return new Stroke();
}

function buildCanvas(canvas = new Canvas(getCanvasElement(), getStroke())) {
  return canvas;
}

function setUpController(controller = new Controller(jQuery, buildCanvas())) {
  controller.setMouseDownListener()
  controller.setMouseMoveListener()
  controller.setMouseUpListener()
  
  controller.setPaletteClickListener();
  return controller;
}


function pageElementSetup(doc) {
  setUpController();
}

onDomReady(jQuery, window, pageElementSetup(document));
