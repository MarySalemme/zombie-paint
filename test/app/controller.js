describe ('Controller', function () {

  var expect = chai.expect;

  mockElement = {
    mousedown: chai.spy(),
    mousemove: chai.spy(),
    mouseup: chai.spy(),
    mouseleave: chai.spy(),
    click: chai.spy(),
    attr: chai.spy()
  };

  mockJQuery = function() { return mockElement };

  mockCanvas = {
    startDrawing: chai.spy(),
    drawLine: chai.spy(),
    isDrawing: function() {
      return true;
    },
    endDrawing: chai.spy(),
    getStroke: chai.spy()
  };

  controller = new Controller(mockJQuery, mockCanvas);

  describe ('#setMouseDownListener', function () {
    it ('binds a handler for the mouse going down', function () {
      controller.setCanvasMouseDownListener();
      expect(mockElement.mousedown).to.have.been.called();
    });
  });

  describe('#setMouseMoveListener', function() {
    it('binds a handler for the mouse moving', function () {
      controller.setCanvasMouseMoveListener();
      expect(mockElement.mousemove).to.have.been.called();
    });
  });

  describe('#setMouseUpListener', function() {
    it("binds a handler for the mouse going up", function () {
      controller.setCanvasMouseUpListener();
      expect(mockElement.mouseup).to.have.been.called();
    });
  });

  describe('#setMouseLeaveListener', function() {
    it("binds a handler for the mouse leaving the canvas", function () {
      controller.setCanvasMouseLeaveListener();
      expect(mockElement.mouseleave).to.have.been.called();
    });
  });

  describe('#setPaletteClickListener', function () {
    it('binds a handler for clicking on a colour button', function () {
      controller.setPaletteClickListener();
      expect(mockElement.click).to.have.been.called();
    });
  });

  describe('#setSizerClickListener', function () {
    it('binds a handler for clicking on a size button', function () {
      controller.setSizerClickListener();
      expect(mockElement.click).to.have.been.called();
    });
  });

  // describe('#colourPicker', function () {
  //   this = mockCanvas;
  //   it('calls attr on colour button', function () {
  //     controller.colourPicker(mockEvent);
  //     expect(mockElement.attr).to.have.been.called();
  //   });
  // });

  // test for sizePicker
});
