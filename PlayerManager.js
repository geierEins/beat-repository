class PlayerManager {
  constructor(filenames) {
    this.y = 0;
    this.playerWidth = 200;
    this.gapBetwPlayers = 100;
    this.filenames = filenames;
      // TODO: TRIM filenames
    this.numOfAudios = filenames.length-1;
    //this.numOfAudios = 5;
    this.playerArray = [];
    this.populatePlayerArray();
  }

  populatePlayerArray() {
    for (var i = 0; i < this.numOfAudios; i++) {
      this.playerArray[i] = new Player(
        this.getCoosForPlayer(i).x,
        this.getCoosForPlayer(i).y,
        this.playerWidth,
        this.filenames[i]
      );
    }
  }

  drawPlayerManager() {
    for (var i = 0; i < this.numOfAudios; i++) {
      this.playerArray[i].drawPlayer();
    }
  }

  doWhenClicked() {
    // toggle on/off player when clicked on
    for (var i = 0; i < this.numOfAudios; i++) {
      if (this.playerArray[i].button.isMouseOverButton == true) {
        // if one of the other payers runs --> switch off
        this.setOtherPlayersOff(i);
        // then toggle this current player
        this.playerArray[i].togglePlaying();
      }
    }
  }

  setOtherPlayersOff(n) {
    for (var i = 0; i < this.numOfAudios; i++) {
      if (this.playerArray[i].isPlaying && n != i) {
        this.playerArray[i].setPlayerPause();
      }
    }
  }
    
  getCoosForPlayer(i) {
    var coos = createVector(0, 0);
    var numOfPlayersPerRow = floor(
      width / (this.playerWidth + this.gapBetwPlayers)
    );
    coos.x =
      (i % numOfPlayersPerRow) * (this.gapBetwPlayers + this.playerWidth) +
      (this.gapBetwPlayers / 2 + this.playerWidth / 2);
    coos.y =
      floor(i / numOfPlayersPerRow) * (this.gapBetwPlayers + this.playerWidth) +
      (20+this.playerWidth / 2);
    return coos;
  }

  updateY(yDelta) {
    // TODO: fix upper scroll boarder (firefox)
    // scroll detection
    if (this.y + yDelta >= 0 && 
        this.playerArray[this.numOfAudios-1].y-yDelta > 122.5) {
      // update this player manager's y for scroll borders
      this.y += yDelta;
      // update each player's y to actually scroll
      for (var i = 0; i < this.numOfAudios; i++) {
        this.playerArray[i].updateY(yDelta);
      }
    }
    //console.log(displayHeight);
    //console.log("y vom letzten player: " + this.playerArray[this.numOfAudios-1].y);  
    //console.log("yDelta: " + yDelta);
    //console.log("this.y: " + this.y);
  }
}
