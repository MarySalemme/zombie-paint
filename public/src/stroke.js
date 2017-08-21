function Stroke() {
  this.size = 10;
  this.currentColour = '#000';
  this.red = '#ff0000';
  this.blue = '#0000ff';
  this.green = '#008000';
};

Stroke.prototype.changeSize = function(size) {
  this.size = size;
};

Stroke.prototype.changeColour = function(colour) {
  this.currentColour = colour;
};

Stroke.prototype.getColour = function() {
  return this.currentColour;
};
