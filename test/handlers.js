

describe('handlers', function() {

  var expect = chai.expect;

  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d')

  describe('mousedown listener', function() {

    it("will create a dot on the canvas", function(){
      var e = jQuery.Event('mousedown', { pageX: 20, pageY: 40 })
      $('#canvas').trigger(e)
      stack = JSON.parse(ctx.json());
      expect(stack[0].method).to.equal("beginPath")
      expect(stack[1].method).to.equal("arc")
      expect(stack[2].method).to.equal("fill")
    })
  })

});
