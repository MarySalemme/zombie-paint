(function(exports) {
  function Controller(canvas = new Canvas(element)) {
    this.canvas = canvas;
    this.htmlElement = this.canvas.element;
  };

  Controller.prototype.setMouseDownListener = function () {
    console.log(element);
    this.htmlElement.on('mousedown', function (e) {
      this.canvas.startDrawing();
    })
  };



  // function setInputListeners(element = extractCanvasElement(document), controller = setUpController()) {
  //   element.on('mousemove', function(e) {
  //     controller.canvas.startDrawing();
  //
  //       element.on('mousemove', function(e) {
  //         if (controller.canvas.isDrawing()) {
  //           controller.canvas.drawLine(e)
  //         }
  //
  //         element.on('mouseup', function() {
  //           controller.canvas.endDrawing();
  //         })
  //
  //         element.on('mouseleave', function() {
  //           controller.canvas.endDrawing();
  //         })
  //       })
  //   })
  // }


  exports.Controller = Controller;
})(this);
