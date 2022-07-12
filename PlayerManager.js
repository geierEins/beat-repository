class PlayerManager {
    constructor(filenames) {
        this.y = 0;
        this.playerWidth = 200;
        this.gapBetwPlayers = 100;
        this.filenames = filenames;
        this.numOfAudios = filenames.length-1; // TODO: TRIM filenames
        this.controlBarHeight = 30;
        this.playerArray = [];
        this.populatePlayerArray();
        this.controlBar = new ControlBar(this.controlBarHeight, this.playerArray);
    }

    populatePlayerArray() {
        for (var i = 0; i < this.numOfAudios; i++) {
            this.playerArray[i] = new Player(
            this.getXYForPlayer(i).x,
            this.getXYForPlayer(i).y,
            this.playerWidth,
            this.filenames[i],
            this.controlBarHeight);
        }
    }

    drawPlayerManager() {
        this.drawPlayers();
        this.drawUpperLine();
        this.controlBar.drawControlBar();
    }
    
    drawPlayers(){
        // update x & y for dynamic change according to window size
        this.updateXandYofPlayer(); 
        for (var i = 0; i < this.numOfAudios; i++) {
            this.playerArray[i].drawPlayer();
        }
    }
    
    drawUpperLine(){
        stroke(222,255,0);
        strokeWeight(1);
        line(0, 0, windowWidth , 0);
    }

    doWhenClicked() {
        //only if click happens above upperYborder
        if(mouseY<this.controlBar.upperYborder){
            // toggle on/off player when clicked on
            for (var i = 0; i < this.numOfAudios; i++) {
                if (this.playerArray[i].button.isMouseOverButton == true) {
                    // if one of the other payers runs --> switch off
                    this.setOtherPlayersOnPause(i);
                    // then toggle this current player
                    this.playerArray[i].togglePlaying();
                }
            }
        }else{
            this.controlBar.doWhenClicked();
        }
    }

    setOtherPlayersOnPause(n) {
        for (var i = 0; i < this.numOfAudios; i++) {
            // set each player on pause except the one we click on (n)
            if (this.playerArray[i].isPlaying && n != i) {
                this.playerArray[i].setPlayerPause();
            }
        }
    }
    
  getXYForPlayer(i) {
    var coos = createVector(0, 0);
    var numOfPlayersPerRow = floor(
      windowWidth / (this.playerWidth + this.gapBetwPlayers)
    );
    coos.x =
      (i % numOfPlayersPerRow) * (this.gapBetwPlayers + this.playerWidth) +
      (this.gapBetwPlayers / 2 + this.playerWidth / 2);
    coos.y =
      floor(i / numOfPlayersPerRow) * (this.gapBetwPlayers + this.playerWidth) +
      (20+this.playerWidth / 2) - this.y;
    return coos;
  }
    
  updateXandYofPlayer(){ //scroll doesnt work
    for (var i = 0; i < this.numOfAudios; i++) {
      this.playerArray[i].setPlayerAndButtonX(this.getXYForPlayer(i).x);
      this.playerArray[i].setPlayerAndButtonY(this.getXYForPlayer(i).y);
    }
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
