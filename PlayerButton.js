class PlayerButton{
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.isMouseOverButton = false;
    this.width = width;
    this.height = this.width;
    this.loadStyles();
    this.upperYborder = windowHeight - controlbarHeight;
    this.scaleFactor = 8;
  }
    
  loadStyles(){
    this.buttonStrokeWeight = 3;
    this.colorLight = 210;
    this.colorDark = 10;
    this.colorHighlight = color(222,255,0);
  }

  drawPlayButton(audioHasLoaded) {
      this.checkIfMouseOverButton();
      if(audioHasLoaded){
        this.stylePlaySymbol();
        this.drawTriangle(this.scaleFactor);          
      }
  }

  drawPauseButton(isPlaying) {
      this.checkIfMouseOverButton();
      if(isPlaying){
        this.stylePauseSymbol();
        this.drawTwinTowers(this.scaleFactor);          
      }
  }

  drawStopButton(isPlaying){
      this.checkIfMouseOverButton();
      if(isPlaying){
        this.styleStopSymbol();
        this.drawStopSymbol(this.scalefactor);          
      }      
  }
  drawLoadButton(){
      this.checkIfMouseOverButton();
      if(this.isMouseOverButton){
        this.styleLoadSymbol();
        this.drawLoadSymbol();         
      }
  }

  drawTriangle(scaleFactor) {
    triangle(
      this.x - this.width / scaleFactor,
      this.y - this.height / scaleFactor,
      this.x - this.width / scaleFactor,
      this.y + this.height / scaleFactor,
      this.x + this.width / scaleFactor,
      this.y
    );
  }

  drawTwinTowers(scaleFactor) {
    rect(
      this.x - (3*this.width) / (4*scaleFactor),
      this.y,
      this.width / (1.5*scaleFactor),
      this.height / 4
    );
    rect(
      this.x + (3*this.width) / (4*scaleFactor),
      this.y,
      this.width / (1.5*scaleFactor),
      this.height / 4
    );
  }
    
  drawStopSymbol(scalefactor){
      rectMode(CENTER);
      rect(this.x, this.y, this.width/scalefactor)
  }
    
  drawLoadSymbol(){
      text("LOAD", this.x, this.y);
  }

  stylePlaySymbol() {
    if (this.isMouseOverButton) {
      //strokeWeight(this.buttonStrokeWeight);
      stroke(this.colorLight);
      fill(this.colorHighlight);
    } else {
      //strokeWeight(this.buttonStrokeWeight);
      stroke(this.colorLight);
      fill(this.colorLight);
    }
  }

  stylePauseSymbol() {
    if (this.isMouseOverButton) {
      //strokeWeight(this.buttonStrokeWeight);
      stroke(this.colorLight);
      fill(this.colorHighlight);
    } else {
      //strokeWeight(this.buttonStrokeWeight);
      stroke(this.colorLight);
      fill(this.colorLight);
    }
  }
    
  styleStopSymbol(){
    if (this.isMouseOverButton) {
      //strokeWeight(this.buttonStrokeWeight);
      stroke(this.colorLight);
      fill(this.colorHighlight);
    } else {
      //strokeWeight(this.buttonStrokeWeight);
      stroke(this.colorLight);
      fill(this.colorLight);
    }
  }

  styleLoadSymbol() {
    textSize(40);
    textStyle(BOLD);
    textAlign(CENTER);
    fill(this.colorHighlight);
  }

  checkIfMouseOverButton() {
    if (
      mouseX > this.x - this.width / 2 &&
      mouseX < this.x + this.width / 2 &&
      mouseY > this.y - this.height / 2 &&
      mouseY < this.y + this.height / 2 &&
      mouseY < this.upperYborder // border to lower control bar
    ) {
      this.isMouseOverButton = true;
      //console.log("mouse is over a button");
    } else {
        this.isMouseOverButton = false;
    }
  }
}

