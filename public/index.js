
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

//will this method be changed or removed at some point?
// function setCanvasSize(document, $) {
//   htmlCanvas = document.getElementById('canvas')
//   $('#canvas').attr({
//     width: window.innerWidth,
//     height:window.innerHeight
//   });
// }

function pageElementSetup(document) {
  getCanvasElement(document)
  buildCanvas(document)
  setUpController(document);
  // setCanvasSize(document, $);
}

onDomReady(window, pageElementSetup(document))




