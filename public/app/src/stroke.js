function Stroke() {
  this.currentSize = 10;
  this.currentColour = '#000';
  // this.red = '#ff0000';
  // this.blue = '#0000ff';
  // this.green = '#008000'; // Needs removing if not already
};

Stroke.prototype.changeSize = function(size) {
  return this.currentSize = size;
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
