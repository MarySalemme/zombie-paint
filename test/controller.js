describe ('Controller', function () {

  var expect = chai.expect;

  mockElement = { mousedown: chai.spy() };
  mockJQuery = function() { return mockElement };
  mockCanvas = { startDrawing: chai.spy() };
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
      expect(mockElement.mouseLeave).to.have.been.called();
    });
  });

})
