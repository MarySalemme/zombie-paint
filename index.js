
window.onload = function() {
  $('canvas').attr({
    width: window.innerWidth,
    height: window.innerHeight
  });
  element = document.getElementById('canvas');
  var controller = new Controller(element);
  controller.inputListener($, document);
};
