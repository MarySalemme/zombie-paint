function Canvas(element) {
  this.element = element
  this.height = 100
  this.width = 200
  this.ctx = this.element.getContext('2d')
}

Canvas.prototype.drawRect = function() {
  this.ctx.fillRect(10, 10, 100, 200)
}
