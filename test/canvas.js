describe ('Canvas', function() {

  mockElement = {}
  var expect = chai.expect;

  canvas = document.getElementById('canvas');
  customCanvas = new Canvas(canvas);
  ctx = customCanvas.ctx

  describe ('element', function() {
    it('contains canvas element', function() {
      expect(customCanvas.element).to.equal(canvas)
    })
  })

  describe ('height', function() {
    it('has a height', function() {
      expect(customCanvas.height).to.equal(100)
    })
  })

  describe ('width', function() {
    it('has a width', function() {
      expect(customCanvas.width).to.equal(200)
    })
  })

  describe ('drawRect', function() {
    customCanvas.drawRect();
    stack = JSON.parse(ctx.json());
    console.log(stack);
    it('can draw a rectangle', function() {
      expect(stack[0].method).to.equal('fillRect')
    })
  })
});
