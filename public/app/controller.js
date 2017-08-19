(function(exports) {
  function Controller($, canvasDrawer = new Canvas(element)) {
    this.$ = $;
    this.canvasDrawer = canvasDrawer;
    this.htmlElement = this.canvasDrawer.element;
  };

  Controller.prototype.setMouseDownListener = function () {
    this.$(this.htmlElement).mousedown(this.canvasDrawer.startDrawing())
    console.log('hleo');
  };

  Controller.prototype.setMouseMoveListener = function (e) {
    if (this.canvasDrawer.isDrawing()) {
      this.$(this.htmlElement).mousemove(this.canvasDrawer.drawLine(e))
    }
  };

  Controller.prototype.setMouseUpListener = function () {
    this.$(this.htmlElement).mouseup(this.canvasDrawer.endDrawing())
  };

  Controller.prototype.setMouseLeaveListener = function () {
    this.$(this.htmlElement).mouseleave(this.canvasDrawer.endDrawing())
  };

  exports.Controller = Controller;
})(this);
