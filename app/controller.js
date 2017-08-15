(function(exports) {
  function Controller(canvas = new Canvas()) {
    this.canvas = canvas;
  };

  Controller.prototype.inputListener = function(jQuery, document) {
    var self = this
    jQuery(document).ready(function(){
      jQuery('#canvas').on('mousedown', function() {
        // startDrawing();
      });
      jQuery('#canvas').on('mouseover', function() {
        // keepDrawing();
      });
      jQuery('#canvas').on('mouseup',function() {
        // stopDrawing();
      });
    });
  };

  exports.Controller = Controller;
})(this);
