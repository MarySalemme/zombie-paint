function Canvas(element, stroke, bucket) {
  this.element = element;
  this._stroke = stroke;
  this.height = this.element.height;
  this.width = this.element.width;
  this.ctx = this.element.getContext('2d');
  this._drawing = false;
  this.ctx.lineWidth = this.getStroke().getWidth();
  this._bucket = bucket;
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

Canvas.prototype.getBucket = function () {
  return this._bucket;
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

Canvas.prototype.fill = function () {
  this.ctx.fillStyle = this.getBucket().getColour();
  this.ctx.fillRect(0, 0, this.width, this.height);
};
