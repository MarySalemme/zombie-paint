function Canvas(element, stroke) {
  this.element = element;
  this._stroke = stroke;
  this.height = this.element.height;
  this.width = this.element.width;
  this.ctx = this.element.getContext('2d');
  this._drawing = false;
};

Canvas.prototype.isDrawing = function () {
  return self._drawing
};

Canvas.prototype.startDrawing = function () {
  this._drawing = true;
  console.log(this._drawing);
};

Canvas.prototype.endDrawing = function () {
  this._drawing = false;
  this.ctx.beginPath();
  console.log("This is ending the drawing");
  console.log(this._drawing);
};


// I think there's cause for removing the below and related properties

// Canvas.prototype.addCoordinates = function (x, y) {
//   this.xAxis.push(x);
//   this.yAxis.push(y);
// };

Canvas.prototype.createDot = function (e) {
  this.ctx.beginPath();
  this.ctx.arc(e.clientX, e.clientY, 10, 0*Math.PI, Math.PI*2);
  this.ctx.fillStyle = this.getStroke().getColour();
  this.ctx.fill();
  console.log("I'm creating a dot");
};

Canvas.prototype.drawLine = function (e) {
  this.ctx.beginPath();
  this.ctx.strokeStyle = 'green';
  this.ctx.lineTo(e.clientX -1, e.clientY -1)
  this.ctx.moveTo(e.clientX, e.clientY)
  // // this.ctx.strokeStyle = this.getStroke().getColour();
  //
  this.ctx.stroke();
  console.log("this is drawing something, or maybe not");
};

Canvas.prototype.getStroke = function () {
  return self._stroke;
};
