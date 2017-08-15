(function(exports) {
  function Controller(element) {
    this.canvas = new Canvas(element);
  };

  Controller.prototype.inputListener = function(jQuery, document) {
    var self = this
    jQuery(document).ready(function(){
      jQuery('#canvas').on('click', function() {
        self.canvas.drawRect();
      });
    });
  };

  exports.Controller = Controller;
})(this);
