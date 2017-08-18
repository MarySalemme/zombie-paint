(function(exports) {
  function Controller($, canvasDrawer = new Canvas(element)) {
    this.$ = $;
    this.canvasDrawer = canvasDrawer;
    this.htmlElement = this.canvasDrawer.element;
  };

  Controller.prototype.setMouseDownListener = function () {
    this.$(this.htmlElement).mousedown(this.canvasDrawer.startDrawing())
  };

  Controller.prototype.setMouseMoveListener = function () {
    if (this.canvasDrawer.isDrawing()) {
      this.$(this.htmlElement).mousemove(this.canvasDrawer.drawLine(e))
    }
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
