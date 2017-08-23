describe("set up functions", function(){

var expect = chai.expect;

  mockFunction = "hello",
  mockWindow = { onload: null };
  mockCanvasElement = 'canvas',
  mockDocument = { getElementById: () => mockCanvasElement};
  mockCanvasModel = "the canvas",
  mockControllerModel = { setCanvasMouseDownListener: () => "mouse down",
                          setCanvasMouseMoveListener: () => "mouse move",
                          setCanvasMouseUpListener: () => "mouse up",
                          setCanvasMouseLeaveListener: () => "mouse leave",
                          setPaletteClickListener: () => null,
                          setSizerClickListener: () => null,
                          setEraserClickListener: () => null,
                          setSaveClickListener: () => null,
                          setCanvasClearClickListener: () => null,
                          setBucketClickListener: () => null
                        };

  mockJQuery = function() { return mockElement };

  describe('#onDomReady', function() {
    it("loads passed function on load", function() {
        onDomReady(mockWindow, mockFunction);
        expect(mockWindow.onload).to.equal(mockFunction);
    });
  });

  describe('#getCanvasElement', function() {
    it('gets the canvas element from the document', function() {
      let spy = chai.spy.on(mockDocument, 'getElementById');
      getCanvasElement(mockDocument);
      expect(spy).to.have.been.called;
    });
  });

  describe('#buildCanvas', function() {
    it('sets up a new canvas', function() {
      expect(buildCanvas(mockCanvasModel)).to.equal(mockCanvasModel);
    });
  });

  describe('#setUpController', function() {
    it('instantiates a new controller with a canvas', function() {
      expect(setUpController(mockControllerModel)).to.equal(mockControllerModel);
    });
  });

  describe('#pageElementSetup', function() {
    it('gets the canvas element', function() {
      var spy = chai.spy('getCanvasElement');
      expect(spy).to.have.been.called;
    });

    it('instantiates the canvas', function() {
      var spy = chai.spy('buildCanvas');
      expect(spy).to.have.been.called;
    });

    it('instantiates the controller', function() {
      var spy = chai.spy('setUpController');
      expect(spy).to.have.been.called;
    });
  });
});
