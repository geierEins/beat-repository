var filenames; 

function preload() {
    filenames = loadStrings('filenames.txt');
    //console.log(filenames);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    playerManager = new PlayerManager(this.filenames);
}

function draw() {
    background(15);
    this.playerManager.drawPlayerManager();
}

function mouseClicked(){
    this.playerManager.doWhenClicked();
}

function mouseWheel(event){
    //move the square according to the vertical scroll amount
    this.playerManager.updateY(event.delta/2);
}

function mouseDragged(){
    this.playerManager.doWhenDraggedOverSlider();
}
