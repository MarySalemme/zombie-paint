describe ('Canvas', function() {

  mockStroke = { getColour: () => '#ff0000' }
  var expect = chai.expect;

  canvas = document.getElementById('canvas');
  customCanvas = new Canvas(canvas, mockStroke);
  ctx = customCanvas.ctx

  describe ('element', function() {
    it('contains canvas element', function() {
      expect(customCanvas.element).to.equal(canvas);
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

  describe('#getStroke', function() {
    it("returns the stroke object", function() {
      expect(customCanvas.getStroke()).to.equal(customCanvas._stroke);
    });
  });

  describe('#drawLine', function() {

      beforeEach(function() {
        ctx.clear();
        mockEvent = { clientX: 10, clientY: 20}
        customCanvas.drawLine(mockEvent);
        stack = JSON.parse(ctx.json());
      })

    it("connects from last point to new point", function() {
      expect(stack[1].method).to.equal('lineTo');
    });

    it("sets the style of the line", function() {
      expect(stack[2].attr).to.equal('strokeStyle');
    });

    it("makes the line visable", function() {
      expect(stack[3].method).to.equal('stroke');
    });

    it("moves the head of the line", function() {
      expect(stack[4].method).to.equal('moveTo');
      
    });


});
