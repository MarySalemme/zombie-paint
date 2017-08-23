(function(exports) {
  function Controller($, canvasDrawer = canvas) {
    this.$ = $;
    this.canvasDrawer = canvasDrawer;
    this.htmlElement = this.canvasDrawer.element;
  };

  Controller.prototype.setCanvasMouseDownListener = function () {
    this.$(this.htmlElement).mousedown((function(e) {
      this.startDrawing();
      this.drawLine(e);
    }).bind(this.canvasDrawer));
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
    var colourCode = $(e.target).attr('id')
    this.getStroke().changeColour(colourCode);
    this.getBucket().changeColour(colourCode);
  };

  Controller.prototype.setSizerClickListener = function () {
    this.$('.sizes').click(this.sizePicker.bind(this.canvasDrawer))
  };

  Controller.prototype.sizePicker = function(e) {
    var strokeSize = $(e.target).attr('id')
    this.getStroke().changeWidth(strokeSize)
  };

  Controller.prototype.setCanvasClearClickListener = function () {
    this.$('.clear').click(this.canvasDrawer.clearCanvas.bind(this.canvasDrawer))
  }

  Controller.prototype.setEraserClickListener = function () {
    this.$('.erase').click(this.setEraserOn.bind(this.canvasDrawer))
  };

  Controller.prototype.setEraserOn = function(e) {
    var eraserCode = $(e.target).attr('id')
    this.getStroke().changeColour(eraserCode)
  };

  Controller.prototype.setBucketClickListener = function () {
    this.$('#fill').click(this.canvasDrawer.fill.bind(this.canvasDrawer))
  };

  Controller.prototype.setSaveClickListener = function () {
    this.$('.save').click(this.canvasDrawer.saveDrawing.bind(this.canvasDrawer))
  }

  exports.Controller = Controller;
})(this);
