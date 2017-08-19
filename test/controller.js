describe ('Controller', function () {

  var expect = chai.expect;

  mockElement = {
    mousedown: chai.spy(),
    mousemove: chai.spy(),
    mouseup: chai.spy(),
    mouseleave: chai.spy(),
    mouseclick: chai.spy()
  };

  mockJQuery = function() { return mockElement };
  mockCanvas = {
    startDrawing: chai.spy(),
    drawLine: chai.spy(),
    isDrawing: function() {
      return true;
    },
    endDrawing: chai.spy()
  };
  controller = new Controller(mockJQuery, mockCanvas);

  describe ('#setMouseDownListener', function () {
    it ('binds a handler for the mouse going down', function () {
      controller.setMouseDownListener();
      expect(mockElement.mousedown).to.have.been.called();
    });
  });

  describe('#setMouseMoveListener', function() {
    it('binds a handler for the mouse moving', function () {
      controller.setMouseMoveListener();
      expect(mockElement.mousemove).to.have.been.called();
    });
  });

  describe('#setMouseUpListener', function() {
    it("binds a handler for the mouse going up", function () {
      controller.setMouseUpListener();
      expect(mockElement.mouseup).to.have.been.called();
    });
  });

  describe('#setMouseLeaveListener', function() {
    it("binds a handler for the mouse leaving the canvas", function () {
      controller.setMouseLeaveListener();
      expect(mockElement.mouseleave).to.have.been.called();
    });
  });

  describe("setSizeClickListener", function() {
    it("binds a handler for the mouse clicking on the sizer", function() {
      controller.setSizeClickListener();
      expect(mockElement.mouseclick).to.have.been.called();
    });
  });
});
