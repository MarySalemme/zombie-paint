(function(exports) {
  function Controller(element) {
    this.canvas = new Canvas(element);
  };

  Controller.prototype.inputListener = function(jQuery, document) {
    var self = this

    // jQuery(document).ready(function(){
    //   jQuery('#canvas').on('click', function() {
    //     self.canvas.drawRect();
    //   });

    $('canvas').on('mousedown', function(event){
       self.canvas.startDrawing();
       self.canvas.addCoordinates(event.pageX, event.pageY)
    });

  };

  exports.Controller = Controller;
})(this);
