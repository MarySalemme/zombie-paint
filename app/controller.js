(function(exports) {
  function Controller($, canvasDrawer = canvas) {
    this.$ = $;
    this._canvasDrawer = canvasDrawer;
    this._htmlElement = this._canvasDrawer.element;
    this.setUpCanvasListeners();
    this.setUpToolListeners();
    self = this
  };

  Controller.prototype.setCanvasMouseDownListener = function () {
    this.$(this._htmlElement).mousedown((function(e) {
      this.startDrawing();
      this.drawLine(e);
    }).bind(this._canvasDrawer));
  };

  Controller.prototype.setCanvasMouseMoveListener = function () {
    this.$(this._htmlElement).mousemove((function(e) {
      if (this.isDrawing()) {
        this.drawLine(e)
      }
    }).bind(this._canvasDrawer))
  };

  Controller.prototype.setCanvasMouseUpListener = function () {
    this.$(this._htmlElement).mouseup(this._canvasDrawer.endDrawing.bind(this._canvasDrawer))
  };

  Controller.prototype.setCanvasMouseLeaveListener = function () {
    this.$(this._htmlElement).mouseleave(this._canvasDrawer.endDrawing.bind(this._canvasDrawer))
  };

  Controller.prototype.setPaletteClickListener = function () {
    this.$('.colours').click(this.colourPicker.bind(this._canvasDrawer))
  };

  Controller.prototype.colourPicker = function(e) {
    var colourCode = $(e.target).attr('id')
    this.getStroke().changeColour(colourCode);
    this.getBucket().changeColour(colourCode);
  };

  Controller.prototype.setSizerClickListener = function () {
    this.$('.sizes').click(this.sizePicker.bind(this._canvasDrawer))
  };

  Controller.prototype.sizePicker = function(e) {
    var strokeSize = $(e.target).attr('id')
    this.getStroke().changeWidth(strokeSize)
  };

  Controller.prototype.setCanvasClearClickListener = function () {
    this.$('.clear').click(this._canvasDrawer.clearCanvas.bind(this._canvasDrawer))
  }

  Controller.prototype.setEraserClickListener = function () {
    this.$('.eraser').click(this.setEraserOn.bind(this._canvasDrawer))
  };

  Controller.prototype.setSaveClickListener = function () {
    this.$('.save').click(this._canvasDrawer.saveDrawing.bind(this._canvasDrawer))
  }

  Controller.prototype.setEraserOn = function(e) {
    var eraserCode = $(e.target).attr('id')
    this.getStroke().changeColour(eraserCode)
  };

  Controller.prototype.setBucketClickListener = function () {
    this.$('#fill').click(this._canvasDrawer.fill.bind(this._canvasDrawer))
  };

  Controller.prototype.setRectangleClickListener = function () {
    this.$('.rectangle').click(this._canvasDrawer.setRecOn.bind(this._canvasDrawer))
      this.$(this._htmlElement).mousedown(function(e) {
        if (self._canvasDrawer._rec) {
          self._canvasDrawer.drawRectangle(e);
          self._canvasDrawer.setRecOff();
        }
      });
  }

  Controller.prototype.setCircleClickListener = function () {
    this.$('.circle').click(this._canvasDrawer.setCircOn.bind(this._canvasDrawer))
      this.$(this._htmlElement).mousedown(function(e) {
        if (self._canvasDrawer._circ) {
          self._canvasDrawer.drawCircle(e);
          self._canvasDrawer.setCircOff();
        }
      });
  }

    Controller.prototype.setStarClickListener = function () {
    this.$('.star').click(this._canvasDrawer.setStarOn.bind(this._canvasDrawer))
      this.$(this._htmlElement).mousedown(function(e) {
        if (self._canvasDrawer._star) {
          self._canvasDrawer.drawStar(e);
          self._canvasDrawer.setStarOff();
        }
      });
  }

  Controller.prototype.setUpCanvasListeners = function () {
    this.setCanvasMouseDownListener();
    this.setCanvasMouseMoveListener();
    this.setCanvasMouseUpListener();
    this.setCanvasMouseLeaveListener();
    this.setCanvasClearClickListener();
  };

  Controller.prototype.setUpToolListeners = function () {
    this.setPaletteClickListener();
    this.setSizerClickListener();
    this.setEraserClickListener();
    this.setBucketClickListener();
    this.setSizerClickListener();
    this.setRectangleClickListener();
    this.setCircleClickListener();
    this.setStarClickListener();
    this.setSaveClickListener();
  };

  exports.Controller = Controller;
})(this);
