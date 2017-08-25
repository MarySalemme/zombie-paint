function Bucket() {
  this._currentColour = '#000'
};

Bucket.prototype.changeColour = function (colour) {
  this._currentColour = colour
};

Bucket.prototype.getColour = function () {
  return this._currentColour;
};
