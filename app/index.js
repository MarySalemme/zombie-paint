function onDomReady(window, fn) {
  window.onload = fn;
}

function getCanvasElement() {
  return htmlCanvas = document.getElementById('canvas')
}

function getStroke() {
  return new Stroke();
}

function getBucket() {
  return new Bucket();
};

function buildCanvas(canvas = new Canvas(getCanvasElement(), getStroke(), getBucket())) {
  return canvas;
};

function setUpController(controller = new Controller(jQuery, buildCanvas())) {
  return controller;
};

function pageElementSetup(doc) {
  setUpController();
};

onDomReady(jQuery, window, pageElementSetup(document));
