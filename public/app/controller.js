(function(exports) {
  function Controller($, canvasDrawer = canvas) {
    this.$ = $;
    this.canvasDrawer = canvasDrawer;
    this.htmlElement = this.canvasDrawer.element;
  };

  Controller.prototype.setMouseDownListener = function () {
    this.$(this.htmlElement).on('mousedown', this.canvasDrawer.startDrawing)
    console.log(this.canvasDrawer)
  };

  Controller.prototype.setMouseMoveListener = function () {
    console.log("yo")
    if (this.canvasDrawer.isDrawing()) {
      console.log("Yo!")
      this.$(this.htmlElement).on('mousemove', function() { console.log(" Hi! ")})
    }
  };

  Controller.prototype.setMouseUpListener = function () {
    this.$(this.htmlElement).on('mouseup', this.canvasDrawer.endDrawing)
  };

  Controller.prototype.setMouseLeaveListener = function () {
    this.$(this.htmlElement).on('mouseleave', this.canvasDrawer.endDrawing())
  };

  exports.Controller = Controller;
})(this);
