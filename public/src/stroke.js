function Stroke() {
  this.width = 10;
  this.currentColour = '#000';
};

Stroke.prototype.changeWidth = function(size) {
  var sizeInteger = parseInt(size)
  this.width = sizeInteger;
};

Stroke.prototype.changeColour = function(colour) {
  this.currentColour = colour;
};

Stroke.prototype.getColour = function() {
  return this.currentColour;
};

Stroke.prototype.getWidth = function() {
  return this.width;
};

Stroke.prototype.getRadius = function() {
  return this.width/2;
};
