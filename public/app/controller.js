(function(exports) {
  function Controller($, canvasDrawer = canvas) {
    this.$ = $;
    this.canvasDrawer = canvasDrawer;
    this.htmlElement = this.canvasDrawer.element;
    controller = this // Caveat coder! 'controller' here is made global so we can point back to the model. Watch where its used.
  };

  Controller.prototype.setCanvasMouseDownListener = function () {
    this.$(this.htmlElement).mousedown(this.canvasDrawer.startDrawing)
  };

  Controller.prototype.setCanvasMouseMoveListener = function () {
    this.$(this.htmlElement).mousemove(this.canvasDrawer.drawLine)
  };

  Controller.prototype.setCanvasMouseUpListener = function () {
    this.$(this.htmlElement).mouseup(this.canvasDrawer.endDrawing)
  };

  Controller.prototype.setCanvasMouseLeaveListener = function () {
    this.$(this.htmlElement).mouseleave(this.canvasDrawer.endDrawing)
  };

  Controller.prototype.setPaletteClickListener = function () {
    this.$('.colours').click(colourPicker)
  };

  Controller.prototype.setSizerClickListener = function () {
    this.$('.size').click(sizeSetter)
  };

  Controller.prototype.setEraserClickListener = function () {
    this.$('#eraser').click(eraserSettingOn)
  };


  exports.Controller = Controller;
})(this);
