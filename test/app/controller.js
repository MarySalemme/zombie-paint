describe ('Controller', function() {

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
    clearCanvas: chai.spy(),
    endDrawing: chai.spy(),
    getStroke: chai.spy(),
    saveDrawing: chai.spy(),
    fill: chai.spy()
  };

  controller = new Controller(mockJQuery, mockCanvas);

  describe ('#setMouseDownListener', function() {
    it ('binds a handler for the mouse going down', function() {
      controller.setCanvasMouseDownListener();
      expect(mockElement.mousedown).to.have.been.called();
    });
  });

  describe('#setMouseMoveListener', function() {
    it('binds a handler for the mouse moving', function() {
      controller.setCanvasMouseMoveListener();
      expect(mockElement.mousemove).to.have.been.called();
    });
  });

  describe('#setMouseUpListener', function() {
    it("binds a handler for the mouse going up", function() {
      controller.setCanvasMouseUpListener();
      expect(mockElement.mouseup).to.have.been.called();
    });
  });

  describe('#setMouseLeaveListener', function() {
    it("binds a handler for the mouse leaving the canvas", function() {
      controller.setCanvasMouseLeaveListener();
      expect(mockElement.mouseleave).to.have.been.called();
    });
  });

  describe('#setPaletteClickListener', function() {
    it('binds a handler for clicking on a colour button', function() {
      controller.setPaletteClickListener();
      expect(mockElement.click).to.have.been.called();
    });
  });


  describe('#setEraserClickListener', function() {

    mockEraser = {
      click: chai.spy(),
    };

    mockJQuery = function() { return mockEraser };

    var eraserController = new Controller(mockJQuery, mockCanvas);

    it('binds a handler for clicking on an eraser', function() {
      eraserController.setEraserClickListener();
      expect(mockEraser.click).to.have.been.called();
    });
  });

  describe('#setSizerClickListener', function() {
    it('binds a handler for clicking on a size button', function() {
      controller.setSizerClickListener();
      expect(mockElement.click).to.have.been.called();
    });
  });

  describe('#setSaveClickListener', function () {

    mockSave = {
      click: chai.spy(),
    };

    mockJQuery = function() { return mockSave };

    var saveController = new Controller(mockJQuery, mockCanvas);

    it('bind a handler for clicking on a save button', function () {
      saveController.setSaveClickListener();
      expect(mockSave.click).to.have.been.called();
    })
  })

  describe('#setBucketClickListener', function() {
    it('binds a handler for clicking on a fill button', function() {
      controller.setBucketClickListener();
      expect(mockElement.click).to.have.been.called();
    })
  })

  describe('#setCanvasClearClickListener', function () {
    it('binds a handler for clicking on the clear button', function () {
      controller.setCanvasClearClickListener();
      expect(mockElement.click).to.have.been.called();
    });
  });

  // describe('#colourPicker', function () {
  //
  //   it('calls attr on colour button', function () {
  //     controller.colourPicker(mockEvent);
  //     expect(mockCanvas.getStroke()).to.have.been.called();
  //   });
  // });

  // test for sizePicker
});
