function ellipseTool() {
  this.name = "ellipse"
  this.icon = "assets/ellipse.jpg"

  var startMouseX = -1
  var startMouseY = -1
  var drawing = false;

  this.draw = function() {
    //create the ellipse starting from where mouse is first pressed
    noFill();
    if (mouseIsPressed) {
      if(startMouseX == -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;
        loadPixels();
      }
      // width and height of ellipse are control by upward and downward drag
      else {
        updatePixels();
        var width = dist(startMouseX, startMouseY, mouseX, startMouseY);
        var height = dist(startMouseX, startMouseY, startMouseX, mouseY);
        ellipse(startMouseX, startMouseY, width, height);
      }

    }
    //reset state settings
    else if (drawing) {
      drawing = false;
      startMouseX = -1;
      startmouseY = -1;
    }
  };
}
