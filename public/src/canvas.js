function Canvas(element, stroke) {
  this.element = element;
  this._stroke = stroke;
  this.height = this.element.height;
  this.width = this.element.width;
  this._shapeSelected = false
  this.ctx = this.element.getContext('2d');
  this._drawing = false;
  this.ctx.lineWidth = this.getStroke().getWidth();
  canvas = this
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

Canvas.prototype.pickShapeToDraw = function (e, userShape) {
  if (userShape == 'square') {
    this.drawRectangle(e);
  } else if (userShape == 'circle') {
    this.drawCircle(e);
  } else {
    this.drawStar(e);
  }
};

Canvas.prototype.drawRectangle = function (e, shapeSizes) {
  this.ctx.beginPath();
  this.ctx.fillStyle = this.getStroke().getColour();
  this.ctx.rect(e.clientX -50, e.clientY -90, 100, 65);
  this.ctx.closePath();
  this.ctx.fill();
};

Canvas.prototype.drawCircle = function (e) {
  this.ctx.beginPath();
  this.ctx.arc(e.clientX -10, e.clientY -15, 50, 0, 2 * Math.PI, false);
  this.ctx.fillStyle = this.getStroke().getColour();
  this.ctx.fill();
  this.ctx.closePath();
};

Canvas.prototype.drawStar = function (e) {
  this.ctx.save();
  this.ctx.beginPath();
  this.ctx.translate(e.clientX, e.clientY)
  this.ctx.moveTo(0,0-50);

    for (var i = 0; i < 5; i++) {
        this.ctx.rotate(Math.PI / 5);
        this.ctx.lineTo(0, 0 - (60*0.5));
        this.ctx.rotate(Math.PI / 5);
        this.ctx.lineTo(0, 0 - 50);
       }

  this.ctx.fillStyle = this.getStroke().getColour();
  this.ctx.fill();
  this.ctx.restore();
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
