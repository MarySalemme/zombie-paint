
describe("set up functions", function(){

var expect = chai.expect;

    mockFunction = "hello"
    mockWindow = { onload: null };
    mockCanvasElement = 'canvas'
    mockDocument = { getElementById: () => mockCanvasElement};
    mockJquery = {};

    describe('#onDomReady', function() {
        it("loads passed function on load", function() {
            onDomReady(mockWindow, mockFunction)
            expect(mockWindow.onload).to.equal(mockFunction)
        })
    })

    describe('#getCanvasElement', function() {
        it('gets the canvas element from the document', function() {
            let spy = chai.spy.on(mockDocument, 'getElementById');
            getCanvasElement(mockDocument)
            expect(spy).to.have.been.called()
        })
    })

    describe('#buildCanvas', function() {
        it('sets up a new canvas', function() {
            
        })
    })

		// var spy = sinon.spy(exports, "Canvas");
		// buildCanvas();

//  var Tea = function (name) { this.name = name; }
// , Chai = new Tea('chai');
//
// expect(Chai).to.be.an.instanceof(Tea);
// expect([ 1, 2, 3 ]).to.be.instanceof(Array);


});
