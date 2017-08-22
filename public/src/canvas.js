function Canvas(element, stroke) {
  this.element = element;
  this._stroke = stroke;
  this.height = this.element.height;
  this.width = this.element.width;
  this.ctx = this.element.getContext('2d');
  this._drawing = false;
  this.ctx.lineWidth = this.getStroke().getWidth();
};

Canvas.prototype.isDrawing = function () {
  return this._drawing;
};

Canvas.prototype.startDrawing = function () {
  this._drawing = true;
  console.log(this._drawing);
};

Canvas.prototype.endDrawing = function () {
  this._drawing = false;
  this.ctx.beginPath();
};

Canvas.prototype.getStroke = function () {
  return this._stroke;
};

Canvas.prototype.drawLine = function (e, radius = this._stroke.getRadius()) {
  this.ctx.strokeStyle = this.getStroke().getColour();
  this.ctx.lineWidth = this.getStroke().getWidth();
  this.ctx.lineTo(e.pageX - this.element.offsetLeft, e.pageY - this.element.offsetTop);
  this.ctx.stroke();
  this.ctx.beginPath();
  this.ctx.arc(e.pageX - this.element.offsetLeft, e.pageY - this.element.offsetTop, radius, 0, Math.PI*2);
  this.ctx.fillStyle = this.getStroke().getColour();
  this.ctx.fill();
  this.ctx.beginPath();
  this.ctx.moveTo(e.pageX - this.element.offsetLeft, e.pageY - this.element.offsetTop);
};
