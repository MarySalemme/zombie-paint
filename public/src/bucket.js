function Bucket() {
  this.currentColour = '#000'
};

Bucket.prototype.changeColour = function (colour) {
  this.currentColour = colour
};

Bucket.prototype.getColour = function () {
  return this.currentColour;
};
