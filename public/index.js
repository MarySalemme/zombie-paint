
function onDomReady(window, fn) {
  window.onload = fn;
}

function getCanvasElement(document) {
  return htmlCanvas = document.getElementById('canvas')
}

function buildCanvas(canvas = new Canvas(getCanvasElement(document))) {
  return canvas = canvas
}

function setUpController(controller = new Controller(buildCanvas(document))) {
  var controller = controller;
}

// function setCanvasSize(document, $) {
//   htmlCanvas = document.getElementById('canvas')
//   $('#canvas').attr({
//     width: window.innerWidth,
//     height:window.innerHeight
//   });
// }

// function setInputListeners(element = extractCanvasElement(document), controller = setUpController()) {
//   element.on('mousemove', function(e) {
//     controller.canvas.startDrawing();

//       element.on('mousemove', function(e) {
//         if (controller.canvas.isDrawing()) {
//           controller.canvas.drawLine(e)
//         }

//         element.on('mouseup', function() {
//           controller.canvas.endDrawing();
//         })

//         element.on('mouseleave', function() {
//           controller.canvas.endDrawing();
//         })
//       })
//   })
// }

// function pageElementSetup(document, Controller) {
//   getCanvasElement(document)
//   buildCanvas(document)
//   setUpController(document);
//   setCanvasSize(document, $);
// }

// onDomReady(window, pageElementSetup(document, Controller, $))







//   $('canvas').on('mousedown', function(e) {
//     controller.canvas.startDrawing();

//     $('canvas').on('mousemove', function(e) {
//       if (controller.canvas.isDrawing()) {
//         controller.canvas.drawLine(e)}

//         $('canvas').on('mouseup', function() {
//           controller.canvas.endDrawing();
//         })
//         $('canvas').on('mouseleave', function () {
//           controller.canvas.endDrawing();
//         })
//       })
//     })
//   };
