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
  controller.setCanvasMouseDownListener();
  controller.setCanvasMouseMoveListener();
  controller.setCanvasMouseUpListener();
  controller.setCanvasMouseLeaveListener();
  controller.setPaletteClickListener();
  controller.setSizerClickListener();
  controller.setCanvasClearClickListener();
  return controller;
}

function pageElementSetup(doc) {
  setUpController();
}

onDomReady(jQuery, window, pageElementSetup(document));
