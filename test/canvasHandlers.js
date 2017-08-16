
describe ('Canvas Handlers', function() {

  var canvas = document.getElementById('canvas')

  describe ('mouseDownHandler', function() {
    var e = jQuery.Event("mousedown", { pageX: 1, pageY: 1 } )
    canvas.trigger(e)

  });
});
