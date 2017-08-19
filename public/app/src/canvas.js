function Canvas(element, stroke) {
  this.element = element;
  this._stroke = stroke;
  this.height = this.element.height;
  this.width = this.element.width;
  this.ctx = this.element.getContext('2d');
  this._drawing = false;
  // this.xAxis = [];
  // this.yAxis = [];
  self = this // self allows us to point back to the canvas - it's global, so beware.
};

Canvas.prototype.isDrawing = function () {
  return self._drawing
};

Canvas.prototype.startDrawing = function () {
  self._drawing = true;
};

Canvas.prototype.endDrawing = function () {
  self._drawing = false;
  self.ctx.beginPath();
};

// I think there's cause for removing the below and related properties

// Canvas.prototype.addCoordinates = function (x, y) {
//   this.xAxis.push(x);
//   this.yAxis.push(y);
// };

Canvas.prototype.getStroke = function () {
  return self._stroke;
};

Canvas.prototype.drawLine = function (e) {
  if (self._drawing) {

  // Sets line qualities
  self.ctx.lineJoin = "round";
  self.ctx.strokeStyle = self.getStroke().getColour();
  self.ctx.lineWidth = self.getStroke().getSize(); // Needs commenting out in TE

  // Adds line to canvas
  self.ctx.lineTo(e.clientX - this.offsetLeft, e.clientY - this.offsetTop)
  self.ctx.stroke()
  self.ctx.moveTo(e.clientX - this.offsetLeft, e.clientY - this.offsetTop)
  }
};
