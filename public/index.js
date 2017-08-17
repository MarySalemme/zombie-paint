function onDomReady(window, fn) {
  window.onload = fn;
};

function setUpController(document, Controller) {
  htmlCanvas = document.getElementById('canvas')
  var controller = new Controller(htmlCanvas);
};

function setCanvasSize(document, $) {
  htmlCanvas = document.getElementById('canvas')
  $('#canvas').attr({
    width: window.innerWidth,
    height:window.innerHeight
  });
};

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

function pageElementSetup(document, Controller) {
  setUpController(document, Controller);
  setCanvasSize(document, $);
};

onDomReady(window, pageElementSetup(document, Controller, $));




// window.onload = function(s) {
//   $('canvas').attr({
//     width: window.innerWidth,
//     height: window.innerHeight
//   });
//   element = document.getElementById('canvas');
//   controller = new Controller(element);

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
