(function(exports) {
  function Controller($, canvasDrawer = canvas) {
    this.$ = $;
    this.canvasDrawer = canvasDrawer;
    this.htmlElement = this.canvasDrawer.element;
  };

  Controller.prototype.setMouseDownListener = function () {
    this.$(this.htmlElement).mousedown(this.canvasDrawer.startDrawing.bind(this.canvasDrawer))
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
    this.$(this.htmlElement).mouseleave(this.canvasDrawer.endDrawing.bind(this.canvasDrawer))
  };

  Controller.prototype.setPaletteClickListener = function () {
  this.$('.colours').click(this.colourPicker.bind(this.canvasDrawer))
};

Controller.prototype.colourPicker = function(e) {
  var colorCode = $(e.target).attr('id')
  this.getStroke().changeColour(colorCode)
};

  exports.Controller = Controller;
})(this);
