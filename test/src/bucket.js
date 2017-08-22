describe('bucket', function() {

  var expect = chai.expect;

  bucket = new Bucket();

  describe('#changeColour', function() {
    it('changes the colour of the paint', function() {
      bucket.changeColour('#FFFF00');
      expect(bucket.currentColour).to.equal('#FFFF00');
    });
  });

  describe('#getColour', function() {
    it('returns the colour of the bucket', function() {
      expect(bucket.getColour()).to.equal(bucket.currentColour);
    });
  });
});
