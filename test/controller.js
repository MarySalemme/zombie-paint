describe ('Controller', function () {

mockElement = document.createElement('canvas');
mockElement.id = 'canvas';
mockCanvas = {element: mockElement}
var expect = chai.expect;
ctx = mockElement.getContext('2d');

// controller = new Controller(mockCanvas);

describe ('setMouseDownListener', function () {
  it ('changes the value of start drawing', function () {
    var mousedown = jQuery.Event('mousedown', { pageX: 20, pageY: 40 });
    controller.setMouseDownListener();
    $('#canvas').trigger(mousedown);
    // stack = JSON.parse(ctx.json());
    expect(controller.canvas.isDrawing()).to.equal(true);

  })

})

})
