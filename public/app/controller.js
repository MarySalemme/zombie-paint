(function(exports) {
  function Controller($, canvasDrawer = canvas) {
    this.$ = $;
    this.canvasDrawer = canvasDrawer;
    this.htmlElement = this.canvasDrawer.element;
  };

  Controller.prototype.setMouseDownListener = function () {
    this.$(this.htmlElement).mousedown(this.canvasDrawer.startDrawing.bind(this.canvasDrawer))

    // this.$(this.htmlElement).on('mousedown', this.canvasDrawer, function(e) {
    //   e.data.startDrawing();
    // });

  };

  Controller.prototype.setMouseMoveListener = function () {
      this.$(this.htmlElement).mousemove((function(e) {
        if (this.isDrawing()) {
          this.drawLine(e)
        }
      }).bind(this.canvasDrawer))
  };

  Controller.prototype.setMouseUpListener = function () {
    this.$(this.htmlElement).mouseup(this.canvasDrawer.endDrawing.bind(this.canvasDrawer))
  };

  Controller.prototype.setMouseLeaveListener = function () {
    this.$(this.htmlElement).on('mouseleave', this.canvasDrawer.endDrawing())
  };

  exports.Controller = Controller;
})(this);
