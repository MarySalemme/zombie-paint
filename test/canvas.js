describe ('Canvas', function() {

  mockElement = {}
  var expect = chai.expect;

  canvas = document.getElementById('canvas');
  customCanvas = new Canvas(canvas);
  ctx = customCanvas.ctx

  describe ('element', function() {
    it('contains canvas element', function() {
      console.log(canvas)
      console.log(customCanvas.element)
      expect(customCanvas.element).to.equal(canvas);
    });
  });

  describe ('height', function() {
    it('has a height', function() {
      expect(customCanvas.height).to.equal(150);
    });
  });

  describe ('width', function() {
    it('has a width', function() {
      expect(customCanvas.width).to.equal(300);
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


  describe('#createDot', function() {

    beforeEach(function() {
      customCanvas.createDot(10, 50);
      stack = JSON.parse(ctx.json());
    })

    it("creates an arc on the canvas", function() {
      expect(stack[1].method).to.equal('arc');
    });

    it("fills the arc on the canvas", function() {
      expect(stack[2].method).to.equal('fill');
    });
  });


  describe('#drawLine', function () {

    beforeEach(function() {
      mockEvent = { clientX: 10, clientY: 20 }
      customCanvas.drawLine(mockEvent);
      stack = JSON.parse(ctx.json());
    });
    it('adds point and creates a line to point', function () {
      console.log(stack);
      expect(stack[6].method).to.equal('lineTo');
    });

    it('draws a line on the canvas', function () {
      expect(stack[7].method).to.equal('stroke');
    });

    it('moves path to specified point', function () {
      expect(stack[9].method).to.equal('moveTo');
    });
  });
});
