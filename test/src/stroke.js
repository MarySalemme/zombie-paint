describe('Stroke', function() {

  var expect = chai.expect;

  stroke = new Stroke();

  describe('size', function() {
    it("starts with a default size of 10 px", function () {
      expect(stroke._width).to.equal(10);
    });
  });

  describe('currentColour', function() {
    it("starts with a default value of '000'", function () {
      expect(stroke._currentColour).to.equal('#000');
    });
  });


  describe('#changeSize', function() {
    it("increases or decreases the size of the stroke", function () {
      stroke.changeWidth(20);
      expect(stroke._width).to.equal(20);
    });
  });

  describe('#changeColour', function() {
    it("changes the stroke colour", function() {
      stroke.changeColour('#00FF00');
      expect(stroke._currentColour).to.equal('#00FF00');
    });
  });

  describe('#getColour', function() {
    it("return the current stroke colour", function() {
      stroke.changeColour('#00FF00');
      expect(stroke.getColour()).to.equal('#00FF00');
    });
  });
});
