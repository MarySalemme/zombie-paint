function Canvas(element) {
  this.element = element;
  console.log(this.element)
  this.height = this.element.height;
  this.width = this.element.width;
  this.ctx = this.element.getContext('2d');
  this._drawing = false;
  this.xAxis = [];
  this.yAxis = [];
}

Canvas.prototype.isDrawing = function () {
  return this._drawing
};

// Canvas.prototype.setSize = function () {
//   this.element.attr({
//     width: window.innerWidth,
//     height: window.innerHeight
//   });
// };

Canvas.prototype.startDrawing = function () {
  this._drawing = true;
};

Canvas.prototype.endDrawing = function () {
  this._drawing = false;
};

Canvas.prototype.addCoordinates = function (x, y) {
  this.xAxis.push(x);
  this.yAxis.push(y);
};

// Canvas.prototype.drawRect = function() {
//   this.ctx.fillRect(10, 10, 100, 200)
// }
