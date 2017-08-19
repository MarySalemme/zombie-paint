function Stroke() {
  this.currentSize = 10;
  this.currentColour = '#000';
};

Stroke.prototype.changeSize = function(size) {
  this.currentSize = size;
};

Stroke.prototype.changeColour = function(colour) {
  this.currentColour = colour;
};

Stroke.prototype.getColour = function() {
  return this.currentColour;
};

Stroke.prototype.getSize = function () {
  return this.currentSize;
};
