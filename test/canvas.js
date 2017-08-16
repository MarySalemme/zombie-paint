describe ('Canvas', function() {

  mockElement = {}
  var expect = chai.expect;

  canvas = document.getElementById('canvas');
  customCanvas = new Canvas(canvas);
  ctx = customCanvas.ctx

  describe ('element', function() {
    it('contains canvas element', function() {
      expect(customCanvas.element).to.equal(canvas);
    });
  });

  describe ('height', function() {
    it('has a height', function() {
      expect(customCanvas.height).to.equal(100);
    });
  });

  describe ('width', function() {
    it('has a width', function() {
      expect(customCanvas.width).to.equal(200);
    });
  });

  describe('xAxis', function() {
    it("starts as an empty array", function () {
      expect(customCanvas.xAxis).to.be.empty;
    });
  });

  describe('yAxis', function() {
    it("starts as an empty array", function () {
      expect(customCanvas.yAxis).to.be.empty;
    });
  });

  describe('#isDrawing', function() {
    it("returns a boolean value", function() {
      expect(customCanvas.isDrawing()).to.equal(false);
    });
  });

  describe('#startDrawing', function() {
    it("changes the value of thhe drawing attribute to be true", function () {
      customCanvas.startDrawing();
      expect(customCanvas.isDrawing()).to.equal(true);
    });
  });

  describe('#endDrawing', function() {
    it("changes the value of thhe drawing attribute to be false", function () {
      customCanvas.endDrawing();
      expect(customCanvas.isDrawing()).to.equal(false);
    });
  });

  describe('#addCoordinates', function() {
    it("creates an x-coordinate", function() {
      customCanvas.addCoordinates(10, 50);
      expect(customCanvas.xAxis[0]).to.equal(10);
    });

    it("creates a y-coordinate", function() {
      customCanvas.addCoordinates(10, 50);
      expect(customCanvas.yAxis[0]).to.equal(50);
    });
  });
  // describe ('drawRect', function() {
  //   customCanvas.drawRect();
  //   stack = JSON.parse(ctx.json());
  //   console.log(stack);
  //   it('can draw a rectangle', function() {
  //     expect(stack[0].method).to.equal('fillRect')
  //   })
  // })
});
