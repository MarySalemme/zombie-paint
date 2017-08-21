describe ('Controller', function () {

  var expect = chai.expect;

  mockElement = {
    mousedown: chai.spy(),
    mousemove: chai.spy(),
    mouseup: chai.spy(),
    mouseleave: chai.spy()
  };
  mockJQuery = function() {
    return mockElement };
  mockCanvas = {
    startDrawing: chai.spy(),
    drawLine: chai.spy(),
    isDrawing: chai.spy(),
    endDrawing: chai.spy()
  };

  // Change to test controller to remove ambiguity with global hook in controller
  testController = new Controller(mockJQuery, mockCanvas);

  describe ('#setMouseDownListener', function () {
    it ('binds a handler for the mouse going down', function () {
      testController.setCanvasMouseDownListener();
      expect(mockElement.mousedown).to.have.been.called();
    });
  });

  describe('#setMouseMoveListener', function() {
    it('binds a handler for the mouse moving', function () {
      testController.setCanvasMouseMoveListener();
      expect(mockElement.mousemove).to.have.been.called();
    });
  });

  describe('#setMouseUpListener', function() {
    it("binds a handler for the mouse going up", function () {
      testController.setCanvasMouseUpListener();
      expect(mockElement.mouseup).to.have.been.called();
    });
  });

  describe('#setMouseLeaveListener', function() {
    it("binds a handler for the mouse leaving the canvas", function () {
      testController.setCanvasMouseLeaveListener();
      expect(mockElement.mouseleave).to.have.been.called();
    });
  });
})
