class Player {

    constructor(x, y, playerWidth, filename, controlBarHeight) {
        this.x = x;
        this.y = y;
        this.playerWidth = playerWidth;
        this.filename = filename;
        this.playerImage = loadImage("images/covers/" + this.filename + ".png");
        this.audio; // load it just when clicked
        this.button = new PlayerButton(this.x, this.y, this.playerWidth,    controlBarHeight);
        this.isPlaying = false;
        this.isStopped = true;
        this.isPaused = false;
        this.audioHasLoaded = false;
  }
    
    drawPlayer() {
        this.drawImage();
        this.drawFrame();
        this.drawTitle();
        this.drawButton();
    }

    drawImage() {
        imageMode(CENTER);
        this.playerImage.resize(200, 200);
        image(this.playerImage, this.x, this.y);
    }

    drawFrame() {
        rectMode(CENTER);
        strokeWeight(3);
        stroke(210);
        if(this.button.isMouseOverButton){
            fill(0, 0);
        }else{
            fill(0, 60);
        }
        if(this.isPlaying){
            fill(0, 0);
            stroke(222, 255, 0);
        }
        rect(this.x, this.y, this.playerWidth);
    }

    drawTitle() {
        this.styleTitle();
        if(this.button.isMouseOverButton || this.isPlaying){
            text(this.filename, this.x, this.y+this.playerWidth/1.5);
        }
    }

    styleTitle(){
        textSize(18);
        textAlign(CENTER);
        textStyle(NORMAL);
        strokeWeight(0);
        stroke(0);
        if(this.isPlaying){
            textStyle(BOLD);
            fill(210);
        }else{
            fill(100);
        }  
    }    
    
    drawButton(){
        if(this.audioHasLoaded){
            // depending on isPlaying state we draw either play or pause
            if(this.isPlaying){    
                this.button.drawPauseButtonLeft();
                this.button.drawStopButtonRight();
            }else{
                this.button.drawPlayButton();
            }
        }else{
            this.button.drawLoadButton();
        }
    }
  
    togglePlaying(){
        // audio has not loaded yet
        if(this.audioHasLoaded==false){
            this.loadSoundOnce();
        // audio has loaded
        }else{
            try{
                // depending on isPlaying state we play or pause
                if(this.isPlaying){
                    // left --> pause
                    if(this.button.isMouseOverButtonLeftHalf){
                        this.setPlayerPause();
                    }
                    // right --> stop
                    if(this.button.isMouseOverButtonRightHalf){
                        this.setPlayerStop();
                    }
                }else{
                    this.setPlayerPlay(); 
                }            
            }catch(err){
                console.log("sound not loaded yet");
            }
        }
    }
    
    loadSoundOnce(){
        //console.log("loading sound...");
        this.audio = loadSound("audio/" + this.filename + ".mp3", this.whenFinishedLoaded());
        this.audioHasLoaded=true;
    }

    // callback function !!!
    whenFinishedLoaded(){
        console.log("audio loaded successfully");
    }

    setPlayerPlay(){
        this.audio.loop();
        this.isPlaying = true;
        this.isPaused = false;
        this.isStopped = false;
        //console.log("audio is playing now"); 
    }
    
    setPlayerStop(){
        this.audio.stop();
        this.isPlaying = false;
        this.isStopped = true;
        this.isPaused = false;
        //console.log("audio is stopped now");
    }
  
    setPlayerPause(){
        this.audio.pause();
        this.isPlaying = false;
        this.isPaused = true;
        this.isStopped = false;
        //console.log("audio is paused now");
    }
    
    setPlayerAndButtonX(x){
        this.x = x;
        this.button.x = x;
    }
    
    setPlayerAndButtonY(y){
        this.y = y;
        this.button.y = y;
    }
  
    // for scrolling
    updateY(yDelta){ 
        this.y -= yDelta;
        this.button.y -= yDelta;
    }
}