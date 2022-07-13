class PlayerSlider {
    constructor(x, y, sliderWidth) {
        this.x = x;
        this.y = y;
        this.sliderWidth = sliderWidth * 0.75;
        this.sliderHeight = 40;        
        this.handleX = this.x-this.sliderWidth/2;
        this.handleSize = 10;
        this.isMouseOverSlider = false;
    }

    drawSlider(currentTime, duration) {
        this.checkIfMouseOverSlider();
        this.drawLine();
        this.drawHandle(currentTime, duration);
    }

    drawLine() {
        stroke(210);
        strokeWeight(2);
        line(
            this.x - this.sliderWidth / 2,
            this.y,
            this.x + this.sliderWidth / 2,
            this.y
        );
    }

    drawHandle(currentTime, duration) {
        rectMode(CENTER);
        //strokeWeight(1);
        //stroke(40);
        noStroke();
        fill(235);
        this.mapAudioCurrentTimeToHandleX(currentTime, duration);
        this.correctEdgeValues();
        ellipse(this.handleX, this.y, this.handleSize);
    }

    checkIfMouseOverSlider() {
        if (
        mouseX > this.x - this.sliderWidth/2 - 30 &&
        mouseX < this.x + this.sliderWidth/2 + 30 &&
        mouseY > this.y - this.sliderHeight/2 &&
        mouseY < this.y + this.sliderHeight/2
        ) {
            //console.log("mouse is over slider");
            this.isMouseOverSlider = true;
        } else {
            //console.log("mouse is NOT over slider");
            this.isMouseOverSlider = false;
        }
    }
    
    mapAudioCurrentTimeToHandleX(currentTime, duration){
        this.handleX = map(currentTime, 0, duration, this.x-this.sliderWidth/2, this.x+this.sliderWidth/2); 
    }
    mapHandleXtoAudioCurrentTime(duration){
      return map(mouseX, this.x-this.sliderWidth/2, this.x+this.sliderWidth/2, 0, duration);
    }
    
    getHandleX(){
        return this.handleX;
    }
    
    doWhenClicked(){
    }
    
    doWhenDragged(){
//        if(this.isMouseOverSlider){
//            this.handleX = mouseX;
//            this.correctEdgeValues();
//        }        
    }
    
    correctEdgeValues(){
        if(this.handleX>this.x+this.sliderWidth/2){
            this.handleX = this.x+this.sliderWidth/2;
        }
        if(this.handleX<this.x-this.sliderWidth/2){
            this.handleX = this.x-this.sliderWidth/2;
        }
    }
}