
describe ('Canvas Handlers', function() {

  var expect = chai.expect;

  canvas = document.getElementById('canvas');
  customCanvas = new Canvas(canvas);
  ctx = customCanvas.ctx

  describe ('mouseDownHandler', function() {
    it('checks that a mousedown invokes startDrawing method', function() {
      stack = JSON.parse(ctx.json());
      var e = jQuery.Event("mousedown", { pageX: 1, pageY: 1 } )
      customCanvas.trigger(e)
      expect(stack[0].method).to.equal('startDrawing')
    })
  });
});
