describe('Stroke', function() {

  var expect = chai.expect;

  stroke = new Stroke();

  describe('size', function() {
    it("starts with a default size of 10 px", function () {
      expect(stroke.size).to.equal(10);
    });
  });

  describe('currentColour', function() {
    it("starts with a default value of '000'", function () {
      expect(stroke.currentColour).to.equal('#000');
    });
  });

  describe('red', function() {
    it("has a fixed value of 'ff0000'", function () {
      expect(stroke.red).to.equal("#ff0000");
    });
  });

  describe('blue', function() {
    it("has a fixed value of '0000ff'", function () {
      expect(stroke.blue).to.equal("#0000ff");
    });
  });

  describe('green', function() {
    it("has a fixed value of '008000'", function () {
      expect(stroke.green).to.equal('#008000')
    });
  });

  describe('#changeSize', function() {
    it("increases or decreases the size of the stroke", function () {
      stroke.changeSize(20);
      expect(stroke.size).to.equal(20);
    });
  });

  describe('#changeColour', function() {
    it("changes the stroke colour", function() {
      stroke.changeColour(stroke.red);
      expect(stroke.currentColour).to.equal('#ff0000');
    });
  });
});
