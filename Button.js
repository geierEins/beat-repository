class Button {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.isMouseOverButton = false;
    this.isMouseOverLeftHalf = false;
    this.isMouseOverRightHalf = false;
    this.width = width;
    this.height = this.width;
    this.loadStyles();
  }
    
  loadStyles(){
    this.buttonStrokeWeight = 3;
    this.colorLight = 210;
    this.colorDark = 10;
    this.colorHighlight = color(222,255,0);
  }

  drawPlayButton(scaleFactor,audioHasLoaded) {
      this.checkIfMouseOverButton();
      if(audioHasLoaded){
        this.stylePlaySymbol();
        this.drawTriangle(scaleFactor);          
      }
  }

  drawPauseButton(scaleFactor, isPlaying) {
      this.checkIfMouseOverButton();
      if(isPlaying){
        this.stylePauseSymbol();
        this.drawTwinTowers(scaleFactor);          
      }
  }

  drawStopButton(scalefactor, isPlaying){
      this.checkIfMouseOverButton();
      if(isPlaying){
        this.styleStopSymbol();
        this.drawStopSymbol(scalefactor);          
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
      mouseY < this.y + this.height / 2
    ) {
      this.isMouseOverButton = true;
      //console.log("mouse is over a button");
      if(
        mouseX > this.x - this.width / 2 &&
        mouseX < this.x &&
        mouseY > this.y - this.height / 2 &&
        mouseY < this.y + this.height / 2      
      ){
           this.isMouseOverLeftHalf = true;
           this.isMouseOverRightHalf = false;
           //console.log("mouse is over left half of button")  
       }else{
           this.isMouseOverRightHalf = true;
           this.isMouseOverLeftHalf = false;
           //console.log("mouse is over right half of button") 
       }
    } else {
        this.isMouseOverButton = false;
        this.isMouseOverLeftHalf = false;
        this.isMouseOverRightHalf = false;
    }
  }
}

