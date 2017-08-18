describe ('Controller', function () {

  var expect = chai.expect;

  mockElement = {
    mousedown: chai.spy(),
    mousemove: chai.spy(),
    mouseup: chai.spy(),
    mouseleave: chai.spy()
  };
  mockJQuery = function() { return mockElement };
  mockCanvas = {
    startDrawing: chai.spy(),
    drawLine: chai.spy(),
    isDrawing: function() {
      return true;
    }
  };
  controller = new Controller(mockJQuery, mockCanvas);

  describe ('setMouseDownListener', function () {
    it ('binds a handler for the mouse going down', function () {
      controller.setMouseDownListener();
      expect(mockElement.mousedown).to.have.been.called();
    });
  });

  describe('setMouseMoveListener', function() {
    it('binds a handler for the mouse moving', function () {
      controller.setMouseMoveListener();
      expect(mockElement.mousemove).to.have.been.called();
    });
  });

})
