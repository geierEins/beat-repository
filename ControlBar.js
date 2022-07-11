class ControlBar{
    
    constructor(controlbarHeight, playerArray){
        this.controlbarHeight = controlbarHeight;
        this.controlbarWidth = windowWidth;
        this.y = windowHeight-this.controlbarHeight/2;
        this.x = windowWidth/2;
        this.upperYborder = windowHeight - this.controlbarHeight;
        this.volSlider = createSlider(-30, 0);
        this.volSlider.position(this.x*3/4, this.y);
        this.volSlider.style('width', windowWidth/4+'px');
        this.volSlider.addClass("mySliders");
        this.playerArray = playerArray;
    }
    
    drawControlBar(){
        this.updateXY();
        this.drawFrame();
        this.drawLine();
        this.drawSlider();
    }
    
    drawFrame(){
        this.styleFrame();
        rect(this.x, this.y, this.controlbarWidth, this.controlbarHeight);
    }
    
    drawLine(){
        stroke(222,255,0);
        strokeWeight(1);
        line(0, this.upperYborder, 2*this.x , this.upperYborder);
        //console.log(2*this.x);
    }
    
    drawSlider(){
        //this.setMasterVolume(this.volSlider.value());
        this.volSlider.style('width', windowWidth/2);
    }
    
    
    setMasterVolume(value){
        for(var i=0; i<this.playerArray.length; i++){
            // setVolume = 0.0 ... 1.0 --> map value
            this.playerArray[i].audio.setVolume(value);
        }
    }
    
    styleFrame(){
        noStroke();
        fill(15);
        rectMode(CENTER);
    }
    
    updateXY(){
        this.controlbarWidth = windowWidth;
        this.y = windowHeight-this.controlbarHeight/2;
        this.x = windowWidth/2;
        this.upperYborder = windowHeight - this.controlbarHeight;
    }
    
    doWhenClicked(){
        console.log("clicked on control bar");
    }
}