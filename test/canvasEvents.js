
//

describe("Canvas", function() {

  var expect = chai.expect;
  var canvas, stack;


  describe('#onmousedown', function() {

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    clickMock = { clientX: 50, clientY: 100 }

    canvas.onmousedown(clickMock);
    stack = JSON.parse(ctx.json());

    it("has a starting point", function () {
      expect(stack[0].method).to.equal('moveTo');
    });

  });

  describe('#onmouseover', function() {

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    clickMock = { clientX: 200, clientY: 100 }

    canvas.onmouseover(clickMock);

    stack = JSON.parse(ctx.json());

    it("moves the head of our line", function () {
      expect(stack[1].method).to.equal('lineTo');
    });

    it("draw the line", function () {
      expect(stack[2].method).to.equal('stroke');
    });
  });

});
