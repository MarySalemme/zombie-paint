<<<<<<< HEAD
// describe("Canvas", function() {
//   var expect = chai.expect;
//   var canvas, stack;
//
//   canvas = document.getElementById('canvas');
//   ctx = canvas.getContext('2d');
//
//   canvas.drawLine();
//   stack = JSON.parse(ctx.json());
//
//   describe('#drawLine', function() {
//     it("has a starting point", function () {
//       expect(stack[0].method).to.equal('moveTo');
//     });
//
//     it("has an ending point", function () {
//       expect(stack[1].method).to.equal('lineTo');
//     });
//
//     it("creates the line", function () {
//       expect(stack[2].method).to.equal('stroke');
//     });
//   });
// });
=======
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
>>>>>>> e7109ac74742195a3e323b1a4af4045be55de198
