//Constructor for the horde
function Horde() {
	//an array of zombies
	this.zombies = [];
  this.zombiesCount = 0;

	//call each zombies drawing code and update it's location ready to be drawn again
	this.drawZombies = function() {
		for (var i = 0; i < this.zombies.length; i++) {
			this.zombies[i].draw();
			this.zombies[i].updateLocation();
      }
		}



	//add n zombies to the horde
	this.addZombies = function(n) {
    this.zombiesCount = n;
		for (var i = 0; i < n; i++) {
			this.zombies.push(new zombie(random(20, height - 50)))
		}
	}

  this.isClicked = function() {
    for (var i = 0; i < this.zombies.length; i++) {
        this.zombies[i].clicked();
      if (this.zombies[i].health <= 0) {
        this.zombies.splice(i,1);

      if (this.zombies.length < this.zombiesCount) {
        for (var i = 0; i < this.zombiesCount - this.zombies.length; i++) {
          this.zombies.push(new zombie(random(20, height - 50)));
        }
      }
      }
    }
  }
}
