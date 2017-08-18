
function onDomReady(window, fn) {
  window.onload = fn;
}

function getCanvasElement(document) {
  return htmlCanvas = document.getElementById('canvas')
}

function buildCanvas(canvas = new Canvas(getCanvasElement(document))) {
  return canvas = canvas
}

function setUpController(controller = new Controller(buildCanvas())) {
  return controller = controller;
}

function pageElementSetup(document) {
  getCanvasElement(document)
  buildCanvas(document)
  setUpController(document);
}

onDomReady(window, pageElementSetup(document))
