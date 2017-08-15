

//  We need to listen for these events rather than define them
// on the canvas.

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var isDrawing;

canvas.onmousedown = function(e) {
  isDrawing = true;
  ctx.moveTo(e.clientX - this.offsetLeft, e.clientY - this.offsetTop);
  console.log("click")
};

canvas.onmouseover = function(e) {
  if (isDrawing) {
  ctx.lineTo(e.clientX - this.offsetLeft, e.clientY - this.offsetTop);
  ctx.stroke();
  console.log("draw")
  }
};

canvas.onmouseup = function() {
  console.log(isDrawing)
  isDrawing = false;
  console.log("finish")
};
