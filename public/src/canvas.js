function Canvas(element, stroke, bucket) {
  this.element = element;
  this._stroke = stroke;
  this.height = this.element.height;
  this.width = this.element.width;
  this.ctx = this.element.getContext('2d');
  this._drawing = false;
  this.ctx.lineWidth = this.getStroke().getWidth();
  this._bucket = bucket;
  this._rec = false
  this._circ = false
  this._star = false
};

Canvas.prototype.isDrawing = function () {
  return this._drawing;
};

Canvas.prototype.startDrawing = function () {
  this._drawing = true;
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

Canvas.prototype.clearCanvas = function() {
  this.ctx.clearRect(0, 0, this.width, this.height);
}

Canvas.prototype.setRecOn = function () {
  this._rec = true
  this._drawing = false
}

Canvas.prototype.setRecOff = function () {
  this._rec = false;
}

Canvas.prototype.setCircOn = function () {
  this._circ = true
  this._drawing = false
}

Canvas.prototype.setCircOff = function () {
  this._circ = false
}

Canvas.prototype.setStarOn = function () {
  this._star = true
  this._drawing = false
}

Canvas.prototype.setStarOff = function () {
  this._star = false
}

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

Canvas.prototype.drawRectangle = function (e) {
  this.ctx.beginPath();
  this.ctx.fillStyle = this.getStroke().getColour();
  this.ctx.rect(e.clientX -160, e.clientY -125, 100, 65);
  this.ctx.closePath();
  this.ctx.fill();
};

Canvas.prototype.drawCircle = function (e) {
  this.ctx.beginPath();
  this.ctx.arc(e.clientX -100, e.clientY -75, 50, 0, 2 * Math.PI, false);
  this.ctx.fillStyle = this.getStroke().getColour();
  this.ctx.fill();
  this.ctx.closePath();
};

Canvas.prototype.drawStar = function (e) {
  this.ctx.save();
  this.ctx.beginPath();
  this.ctx.translate(e.clientX -100, e.clientY -100)
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

Canvas.prototype.fill = function () {
  this.ctx.fillStyle = this.getBucket().getColour();
  this.ctx.fillRect(0, 0, this.width, this.height);
};

Canvas.prototype.saveDrawing = function () {
  var drawing = this.element.toDataURL('png');
  var link = document.createElement('a');
  link.href = drawing;
  link.download = 'image.png';
  link.click()
};
