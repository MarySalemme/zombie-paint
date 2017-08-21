(function(exports) {
  function Controller($, canvasDrawer = canvas) {
    this.$ = $;
    this.canvasDrawer = canvasDrawer;
    this.htmlElement = this.canvasDrawer.element;
  };

  Controller.prototype.setCanvasMouseDownListener = function () {
    this.$(this.htmlElement).mousedown(this.canvasDrawer.startDrawing.bind(this.canvasDrawer))
  };

  Controller.prototype.setCanvasMouseMoveListener = function () {
    this.$(this.htmlElement).mousemove((function(e) {
      if (this.isDrawing()) {
        this.drawLine(e)
      }
    }).bind(this.canvasDrawer))
  };

  Controller.prototype.setCanvasMouseUpListener = function () {
    this.$(this.htmlElement).mouseup(this.canvasDrawer.endDrawing.bind(this.canvasDrawer))
  };

  Controller.prototype.setCanvasMouseLeaveListener = function () {
    this.$(this.htmlElement).mouseleave(this.canvasDrawer.endDrawing.bind(this.canvasDrawer))
  };

  Controller.prototype.setPaletteClickListener = function () {
    this.$('.colours').click(this.colourPicker.bind(this.canvasDrawer))
  };

  Controller.prototype.colourPicker = function(e) {
    var colorCode = $(e.target).attr('id')
    this.getStroke().changeColour(colorCode)
  };

  Controller.prototype.setSizerClickListener = function () {
    this.$('.sizes').click(this.sizePicker.bind(this.canvasDrawer))
  };

  Controller.prototype.sizePicker = function(e) {
    var strokeSize = $(e.target).attr('id')
    this.getStroke().changeWidth(strokeSize)
  };

  exports.Controller = Controller;
})(this);
