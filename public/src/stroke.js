function Stroke() {
  this._width = 10;
  this._currentColour = '#000';
};

Stroke.prototype.changeWidth = function(size) {
  var sizeInteger = parseInt(size)
  this._width = sizeInteger;
};

Stroke.prototype.changeColour = function(colour) {
  this._currentColour = colour;
};

Stroke.prototype.getColour = function() {
  return this._currentColour;
};

Stroke.prototype.getWidth = function() {
  return this._width;
};

Stroke.prototype.getRadius = function() {
  return this._width/2;
};
