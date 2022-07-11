class ControlBarButton{
    
    constructor(x, y, width) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = this.width;
        this.isMouseOverButton = false;
        this.loadStyles();
    }
  
    loadStyles(){
        this.buttonStrokeWeight = 2;
        this.colorLight = 210;
        this.colorDark = 10;
        this.colorHighlight = color(222, 255, 0);
    }
    
    checkIfMouseOverButton() {
        if (
        mouseX > this.x - this.width / 2 &&
        mouseX < this.x + this.width / 2 &&
        mouseY > this.y - this.height / 2 &&
        mouseY < this.y + this.height / 2
        ){
            this.isMouseOverButton = true;
            //console.log("mouse is over a button");
        } else {
            this.isMouseOverButton = false;
        }
    }
}