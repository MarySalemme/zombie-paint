window.onload = function() {
  element = document.getElementById('canvas');
  var controller = new Controller(element);
  controller.inputListener($, document);
};
