function preload(){
}

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);
}

function draw(){
    background('#969A97');
}