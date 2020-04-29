function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){
		//extend line from position where mouse is first pressed
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}
			// draw final line from position of first mouse press to current mouse location on release
			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
		// reset state settings
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
