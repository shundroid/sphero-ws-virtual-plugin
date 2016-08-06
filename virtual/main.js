import VirtualSpheroController from "./virtual-sphero-controller"; 

document.addEventListener("DOMContentLoaded", function() {
  var sphero = new VirtualSpheroController();

  window.addEventListener("resize", function() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    sphero.clearCanvas();
    sphero.resetGrounds();
    sphero.fixSpherosPosition();
  });
});
