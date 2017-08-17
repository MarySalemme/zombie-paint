describe('set up functions', function() {

	mockFunction = "hello"
	mockWindow = {onload: mockFunction};
	mockDocument = {};
	mockJquery = {};
	mockController = {};

describe('#onDomReady', function() {
	it("loads passed function on load", function() {
		expect(onDomReady(mockWindow, mockFunction)).to.equal(mockFunction)
	})
})

})