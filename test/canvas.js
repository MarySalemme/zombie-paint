describe("Canvas", function() {
  var expect = chai.expect;
  var canvas, stack;

  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  canvas.drawLine();
  stack = JSON.parse(ctx.json());

  describe('#drawLine', function() {
    it("has a starting point", function () {
      expect(stack[0].method).to.equal('moveTo');
    });

    it("has an ending point", function () {
      expect(stack[1].method).to.equal('lineTo');
    });

    it("creates the line", function () {
      expect(stack[2].method).to.equal('stroke');
    });
  });

})
