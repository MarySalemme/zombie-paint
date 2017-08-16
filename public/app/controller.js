(function(exports) {
  function Controller(element) {
    this.canvas = new Canvas(element);
  };

  Controller.prototype.inputListener = function(element) {
    e = window.event || e;
    element.addEventListener('mousedown', this.canvas.createDot(e));
  };

  exports.Controller = Controller;
})(this);
