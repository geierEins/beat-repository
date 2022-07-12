class ControlBar{
    
    constructor(controlbarHeight, playerArray){
        this.controlbarHeight = controlbarHeight;
        this.controlbarWidth = windowWidth;
        this.y = windowHeight-this.controlbarHeight/2;
        this.x = windowWidth/2;
        this.upperYborder = windowHeight - this.controlbarHeight;
        this.playerArray = playerArray;
    }
    
    drawControlBar(){
        this.updateXY();
        this.drawFrame();
        this.drawLine();
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
        //console.log("clicked on control bar");
    }
}