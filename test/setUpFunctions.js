describe('set up functions', function() {
	var expect = chai.expect;

	mockFunction = "hello"
	mockWindow = { onload: null };
	mockDocument = { getElementById: 'canvas' };
	console.log(mockDocument);
	mockJquery = {};
	mockController = {};

	describe('#onDomReady', function() {
		it("loads passed function on load", function() {
			onDomReady(mockWindow, mockFunction);
			expect(mockWindow.onload).to.equal(mockFunction);
		});
	});

	describe('#setUpController', function() {
		it("gets the canvas element from the document", function() {
			setUpController(mockDocument, mockController);
			expect(htmlCanvas).to.equal('canvas');
		});

		it("instantiates a controller", function() {

		});
	});
});
