
function onDomReady(window, fn) {
  window.onload = fn;
  console.log("log1");
}

function getCanvasElement(document) {
  return htmlCanvas = document.getElementById('canvas')
}

function buildCanvas(canvas = new Canvas(getCanvasElement(document))) {
  return canvas = canvas
}

function setUpController(controller = new Controller(buildCanvas())) {
  controller = controller;
  console.log(controller);
  controller.setMouseDownListener();
}

function pageElementSetup(document) {
  console.log("log2");
  getCanvasElement(document)
  buildCanvas(document)
  setUpController(document);
  console.log("log3");
}

onDomReady(window, pageElementSetup(document));

// controller.setMouseDownListener();
