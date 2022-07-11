var filenames; 
var controlbarHeight;

function preload() {
    filenames = loadStrings('filenames.txt');
    //console.log(filenames);
}

function setup() {
    controlbarHeight = 50;
    canvas = createCanvas(windowWidth, windowHeight);
    //playerManager, controlBar
    playerManager = new PlayerManager(this.filenames);
    controlBar = new ControlBar(playerManager.playerArray);
}

function draw() {
    background(15);
    this.playerManager.drawPlayerManager();
    stroke(222,255,0);
    strokeWeight(1);
    line(0, 0, windowWidth , 0);
    this.controlBar.drawControlBar();
}

function mouseClicked(){
    // seperate click areas
    if(mouseY<this.controlBar.upperYborder){
        this.playerManager.doWhenClicked();    
    }else{
        this.controlBar.doWhenClicked();
    }
}

function mouseWheel(event){
    //move the square according to the vertical scroll amount
    this.playerManager.updateY(event.delta/2);
}
