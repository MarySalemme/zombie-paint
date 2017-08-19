
function onDomReady(window, fn) {
  window.onload = fn;
}

function getCanvasElement() {
  return htmlCanvas = document.getElementById('canvas')
}

function buildCanvas(canvas = new Canvas(getCanvasElement())) {
  return canvas = canvas
}

function setUpController(controller = new Controller(buildCanvas())) {
  controller = controller;
  controller.setMouseDownListener();
}

function pageElementSetup(doc) {
  setUpController();
}

onDomReady(window, pageElementSetup(document));

// controller.setMouseDownListener();
