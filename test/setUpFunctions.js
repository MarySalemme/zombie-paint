
describe("set up functions", function(){

var expect = chai.expect;

    mockFunction = "hello"
    mockWindow = { onload: null };
    mockCanvasElement = 'canvas'
    mockDocument = { getElementById: () => mockCanvasElement};
    mockJquery = {};
    mockCanvasModel = "the canvas"
    mockControllerModel = "the model"
    mock$ = { attr: () => chai.spy() };

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

    //is this too basic?
    describe('#buildCanvas', function() {
        it('sets up a new canvas', function() {
            expect(buildCanvas(mockCanvasModel)).to.equal(mockCanvasModel)
        })
    })

    describe('#setUpController', function() {
        it('instantiates a new controller with a canvas', function() {
            expect(setUpController(mockControllerModel)).to.equal(mockControllerModel)
        })
    })

    describe('#setCanvasSize', function() {
        it('calls get element by id on document', function() {
            let spy = chai.spy.on(mockDocument, 'getElementById');
            getCanvasElement(mockDocument)
            expect(spy).to.have.been.called()
        })

        // it('adds a height and width to the canvas', function() {
        //     setCanvasSize(mockDocument, mock$)
        //     expect(mock$.attr).to.have.been.called 
        // })
    })

    describe('#pageElementSetup', function() {
        it('gets the canvas element', function() {
            var spy = chai.spy('getCanvasElement')
            expect(spy).to.have.been.called
        })

        it('instantiates the canvas', function() {
            var spy = chai.spy('buildCanvas')
            expect(spy).to.have.been.called
        })

        it('instantiates the controller', function() {
            var spy = chai.spy('setUpController')
            expect(spy).to.have.been.called
        })
    })

});
