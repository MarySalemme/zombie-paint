describe ('Canvas', function() {

  mockStroke = { getColour: () => '#ff0000' }
  var expect = chai.expect;

  canvas = document.getElementById('canvas');
  customCanvas = new Canvas(canvas, mockStroke);
  ctx = customCanvas.ctx

  describe ('element', function() {
    it('contains the html canvas element', function() {
      expect(customCanvas.element).to.equal(canvas);
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
      console.log(stack);
      expect(stack[0].method).to.equal('lineTo');
    });

    it("makes the line visible", function() {
      expect(stack[1].method).to.equal('stroke');
    });

    it("fills the dot", function() {
      expect(stack[2].method).to.equal('beginPath');
    });

    it("creates the dot", function() {
      expect(stack[3].method).to.equal('arc');
    });

    it("fills the dot", function() {
      expect(stack[4].method).to.equal('fill');
    });

    it("fills the dot", function() {
      expect(stack[5].method).to.equal('beginPath');
    });

    it("starts a new line from the dot", function() {
      expect(stack[6].method).to.equal('moveTo');
    });
  });
});
