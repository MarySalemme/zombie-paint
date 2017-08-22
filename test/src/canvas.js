describe ('Canvas', function() {

  mockStroke = { getWidth: () => '20',
                 getRadius: () => '10',
                 getColour: () => '#ff0000' }

  mockBucket = { getColour: () => '#ff0000' }

  var expect = chai.expect;

  canvas = document.getElementById('canvas');
  customCanvas = new Canvas(canvas, mockStroke, mockBucket);
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
      });

    it("sets the style of the stroke", function() {
      console.log(stack)
      expect(stack[0].attr).to.equal('strokeStyle');
    });

    it("connects from last point to new point", function() {
      expect(stack[1].attr).to.equal('lineWidth');
    });

    it("makes the line visible", function() {
      expect(stack[2].method).to.equal('lineTo');
    });

    it("begins the path", function() {
      expect(stack[3].method).to.equal('stroke');
    });

    it("creates the dot", function() {
      expect(stack[4].method).to.equal('beginPath');
    });

    it("sets style of fill", function() {
      expect(stack[5].method).to.equal('arc');
    });

    it("fills the dot", function() {
      expect(stack[6].attr).to.equal('fillStyle');
    });

    it("restarts the path", function() {
      expect(stack[7].method).to.equal('fill');
    });

    it("starts a new line from the dot", function() {
      expect(stack[8].method).to.equal('beginPath');
    });

    it("restarts a new path", function() {
      expect(stack[9].method).to.equal('moveTo');
    });
  });

  describe("#getBucket", function() {
    it("returns the bucket", function() {
      expect(customCanvas.getBucket()).to.equal(customCanvas._bucket);
    });
  });

  describe('#fill', function() {

    beforeEach(function() {
      ctx.clear();
      customCanvas.fill();
      stack = JSON.parse(ctx.json());
    });

    it('chooses the colour that the canvas will be filled with', function() {
      expect(stack[0].attr).to.equal('fillStyle');
    });

    it('fills the canvas with a colour', function() {
      expect(stack[1].method).to.equal('fillRect');
    });
  });
});
