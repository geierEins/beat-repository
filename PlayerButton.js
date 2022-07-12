class PlayerButton{
    constructor(x, y, buttonWidth, controlBarHeight) {
        this.x = x;
        this.y = y;
        this.isMouseOverButton = false;
        this.isMouseOverButtonLeftHalf = false;
        this.isMouseOverButtonRightHalf = false;
        this.buttonWidth = buttonWidth;
        this.height = this.buttonWidth;
        this.loadStyles();
        this.loadStyles();
        this.upperYborder = windowHeight - 30;
        this.scaleFactor = 8;
    }
    
    loadStyles(){
        this.buttonStrokeWeight = 3;
        this.colorLight = 210;
        this.colorDark = 10;
        this.colorHighlight = color(222,255,0);
    }
    
    // MOUSE OVER DETECTION
    checkIfMouseOverButtonTwoSides() {
        // mouse over whole button
        if (
            mouseX > this.x - this.buttonWidth / 2 &&
            mouseX < this.x + this.buttonWidth / 2 &&
            mouseY > this.y - this.height / 2 &&
            mouseY < this.y + this.height / 2 &&
            mouseY < this.upperYborder // border to lower control bar
        ) {
            this.isMouseOverButton = true;
            //console.log("mouse is over a button");
            
            if(// check if mouse is over left half
                mouseX > this.x - this.buttonWidth / 2 &&
                mouseX < this.x &&
                mouseY > this.y - this.height / 2 &&
                mouseY < this.y + this.height / 2 
            ){
                this.isMouseOverButtonLeftHalf = true;
                this.isMouseOverButtonRightHalf = false;
                //console.log("mouse is over left half of button");
                
            }else{ // if mouse is over right half
                this.isMouseOverButtonRightHalf = true;
                this.isMouseOverButtonLeftHalf = false;
                //console.log("mouse is over right half of button");
            }
        } else {
            this.isMouseOverButton = false;
            this.isMouseOverButtonLeftHalf = false;
            this.isMouseOverButtonRightHalf = false;
        }
    }

//----------------------------------------------    
    
    // DRAW PLAY BUTTON
    drawPlayButton() {
        this.checkIfMouseOverButtonTwoSides();
        this.stylePlaySymbol();
        this.drawTriangle(this.scaleFactor);   
    }

    // DRAW PAUSE BUTTON (LEFT)
    drawPauseButtonLeft(){
        this.checkIfMouseOverButtonTwoSides();
        this.stylePauseSymbolLeft();
        var offset = -1/4 * this.buttonWidth;
        var newX = this.x + offset;
        rect(
            newX - (3*this.buttonWidth) / (4*this.scaleFactor),
            this.y,
            this.buttonWidth / (1.5*this.scaleFactor),
            this.height / 4
        );
        rect(
            newX + (3*this.buttonWidth) / (4*this.scaleFactor),
            this.y,
            this.buttonWidth / (1.5*this.scaleFactor),
            this.height / 4
        );
    }
    
    // DRAW STOP BUTTON (RIGHT)
    drawStopButtonRight(){
        this.checkIfMouseOverButtonTwoSides();
        this.styleStopSymbolRight();        
        var offset = 1/4 * this.buttonWidth;
        var newX = this.x + offset;
        rectMode(CENTER);
        rect(newX, this.y, this.buttonWidth/this.scaleFactor*2);
    }

    // DRAW LOAD BUTTON
    drawLoadButton(){
        this.checkIfMouseOverButtonTwoSides();
        if(this.isMouseOverButton){
            this.styleLoadSymbol();
            this.drawLoadSymbol();         
        }
    }
    
    drawTriangle(scaleFactor) {
        triangle(
            this.x - this.buttonWidth / scaleFactor,
            this.y - this.height / scaleFactor,
            this.x - this.buttonWidth / scaleFactor,
            this.y + this.height / scaleFactor,
            this.x + this.buttonWidth / scaleFactor,
            this.y
        );
    }

    drawTwinTowers(scaleFactor) {
        rect(
            this.x - (3*this.buttonWidth) / (4*scaleFactor),
            this.y,
            this.buttonWidth / (1.5*scaleFactor),
            this.height / 4
        );
        rect(
            this.x + (3*this.buttonWidth) / (4*scaleFactor),
            this.y,
            this.buttonWidth / (1.5*scaleFactor),
            this.height / 4
        );
    }
    
    drawLoadSymbol(){
        text("LOAD", this.x, this.y+15);
    }
//--------------------------------------------------
    // STYLE PLAY
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
    
    // STYLE PAUSE
    stylePauseSymbolLeft(){
        if (this.isMouseOverButtonLeftHalf) {
        //strokeWeight(this.buttonStrokeWeight);
            stroke(this.colorLight);
            fill(this.colorHighlight);
        } else {
         //strokeWeight(this.buttonStrokeWeight);
            stroke(this.colorLight);
            fill(this.colorLight);
        }
    }
    
    // STYLE STOP
    styleStopSymbolRight(){
        if (this.isMouseOverButtonRightHalf) {
            //strokeWeight(this.buttonStrokeWeight);
            stroke(this.colorLight);
            fill(this.colorHighlight);
        } else {
            //strokeWeight(this.buttonStrokeWeight);
            stroke(this.colorLight);
            fill(this.colorLight);
        }
    }
    
    // STYLE LOAD
    styleLoadSymbol() {
        textSize(40);
        textStyle(BOLD);
        textAlign(CENTER);
        fill(this.colorHighlight);
    }
}