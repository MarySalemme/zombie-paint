describe('Stroke', function() {

  var expect = chai.expect;

  stroke = new Stroke();

  describe('size', function() {
    it("starts with a default size of 10 px", function () {
      expect(stroke.currentSize).to.equal(10);
    });
  });

  describe('currentColour', function() {
    it("starts with a default value of '000'", function () {
      expect(stroke.currentColour).to.equal('#000');
    });
  });

  describe('#changeSize', function() {
    it("increases or decreases the size of the stroke", function () {
      stroke.changeSize(20);
      expect(stroke.currentSize).to.equal(20);
    });
  });

  describe('#changeColour', function() {
    it("changes the stroke colour", function() {
      stroke.changeColour('#ff0000');
      expect(stroke.currentColour).to.equal('#ff0000');
    });
  });

  describe('#getColour', function() {
    it("return the current stroke colour", function() {
      stroke.changeColour('#ff0000');
      expect(stroke.getColour()).to.equal('#ff0000');
    });
  });

  describe('#getSize', function() {
    it("changes the size of the stroke", function() {
      stroke.changeSize(20);
      expect(stroke.getSize()).to.equal(20);
    });
  });
});
