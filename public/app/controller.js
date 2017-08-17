(function(exports) {
  function Controller(element, stroke) {
    this.canvas = new Canvas(element, stroke);
  };

  exports.Controller = Controller;
})(this);
