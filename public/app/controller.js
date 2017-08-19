(function(exports) {
  function Controller($, canvasDrawer = new Canvas(element, stroke = new Stroke())) {
    this.$ = $;
    this.canvasDrawer = canvasDrawer;
    this.htmlElement = this.canvasDrawer.element;
  };

  Controller.prototype.setMouseDownListener = function () {
    this.$(this.htmlElement).mousedown(this.canvasDrawer.startDrawing())
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
    console.log(this.canvasDrawer);
  };

  Controller.prototype.setSizeClickListener = function () {
    var sizePicker = function(jQuery) {
      var strokeSize = $(this).attr('id')

    };

    $('.size').on('click', this.canvasDrawer._stroke.changeSize(strokeSize));

  };


  exports.Controller = Controller;
})(this);
