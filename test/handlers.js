

describe('handlers', function() {

  var expect = chai.expect;

  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  // describe('mousemove', function() {
  //   it("draws a line on the canvas", function() {
  //     var mousedown = jQuery.Event('mousedown', { pageX: 20, pageY: 40 })
  //     var mousemove = jQuery.Event('mousemove')
  //     $('#canvas').trigger(mousedown).trigger(mousemove);
  //     stack = JSON.parse(ctx.json());
  //     console.log(stack)
  //     expect(stack[0].method).to.equal("lineTo")
  //     expect(stack[1].method).to.equal("stroke")
  //     expect(stack[2].method).to.equal("beginPath")
  //     expect(stack[3].method).to.equal("moveTo")
  //   })
  // })
  //
  // describe('mouseup', function() {
  //   it("draws a line on the canvas", function() {
  //     var mouseup = jQuery.Event('mouseup')
  //     $('#canvas').trigger(mouseup);
  //     stack = JSON.parse(ctx.json());
  //     console.log(stack)
  //     expect(stack[0].method).to.equal("beginPath")
  //   })
  // })

    afterEach(function() {
      ctx.clear();
    });

});
