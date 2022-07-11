class ControlBarButton{
    
    constructor(x, y, buttonWidth) {
        this.x = x;
        this.y = y;
        this.buttonWidth = buttonWidth;
        this.buttonHeight = this.buttonWidth;
        this.isMouseOverButton = false;
        this.loadStyles();
        this.scaleFactor = 8;
    }
  
    loadStyles(){
        this.buttonStrokeWeight = 1;
        this.colorLight = 210;
        this.colorDark = 10;
        this.colorHighlight = color(222, 255, 0);
    }
    
    drawControlBarButton(n){
        this.checkIfMouseOverButton();
        this.drawFrame();
        
        // decide if play, pause or stop
        switch(n){
            case 0 :
                //play
                this.drawPlayButton();
                break;
            case 1:
                // pause
                this.drawPauseButton();
                break;
            case 2:
                // stop
                this.drawStopButton();
                break;
        }
    }
    
    drawFrame() {
        rectMode(CENTER);
        strokeWeight(this.buttonStrokeWeight);
        stroke(this.colorLight);
        fill(this.colorDark);
//        if(this.isMouseOverButton){
//            fill(210);
//        }
        rect(this.x, this.y, this.buttonWidth);
    }
    
    drawPlayButton() {
        this.styleButton();
        this.drawTriangle(this.scaleFactor);   
    }
    
    drawPauseButton() {
        this.styleButton();
        this.drawTwinTowers(this.scaleFactor); 
    }

    drawStopButton(){
        this.styleButton();
        this.drawStopSymbol(this.scaleFactor);
    } 
    
    drawTriangle(scaleFactor) {
        triangle(
         this.x - this.buttonWidth / scaleFactor,
         this.y - this.buttonHeight / scaleFactor,
         this.x - this.buttonWidth / scaleFactor,
         this.y + this.buttonHeight / scaleFactor,
         this.x + this.buttonWidth / scaleFactor,
         this.y
        );
    }

    drawTwinTowers(scaleFactor) {
        rect(
         this.x - (3*this.buttonWidth) / (4*scaleFactor),
         this.y,
         this.buttonWidth / (1.5*scaleFactor),
         this.buttonHeight / 4
        );
        rect(
         this.x + (3*this.buttonWidth) / (4*scaleFactor),
         this.y,
         this.buttonWidth / (1.5*scaleFactor),
         this.buttonHeight / 4
        );
    }
    
    drawStopSymbol(scalefactor){
        rectMode(CENTER);
        rect(this.x, this.y, this.buttonWidth/scalefactor)
    }
    
    styleButton() {
        if (this.isMouseOverButton) {
            strokeWeight(this.buttonStrokeWeight);
            stroke(this.colorHighlight);
            fill(this.colorHighlight);
        } else {
            strokeWeight(0);
            stroke(this.colorLight);
            fill(this.colorLight);
        }
    }
    
    checkIfMouseOverButton() {
        if (
        mouseX > this.x - this.buttonWidth / 2 &&
        mouseX < this.x + this.buttonWidth / 2 &&
        mouseY > this.y - this.buttonHeight / 2 &&
        mouseY < this.y + this.buttonHeight / 2
        ){
            this.isMouseOverButton = true;
            console.log("mouse is over a control bar button");
        } else {
            this.isMouseOverButton = false;
        }
    }
}