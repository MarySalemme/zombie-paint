(function(exports) {
  function Controller(canvas = new Canvas()) {
    this.canvas = canvas;
  };

  Controller.prototype.inputListener = function(jQuery, document) {
    var self = this
    jQuery(document).ready(function(){
      jQuery('#canvas').on('', function() {

      });
    });
  };

  exports.Controller = Controller;
})(this);
