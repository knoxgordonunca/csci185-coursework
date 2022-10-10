const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let x = 200;
let speed = 5;
let rectPosition = 500;
let rectSpeed = 2;
let width = 50;

function draw() {
    
    // frameRate(4);
    clear();

    // draw walls:
    fill('red');
    rect(100, 0, 50, canvasHeight);
    rect(rectPosition, 0, 50, canvasHeight);
    rectPosition += rectSpeed;
    if (rectPosition >= 1000) {
        rectSpeed *= -1
     } else if (rectPosition <= 499) {
        rectSpeed *= -1
     }

    // draw circle:
    fill('black');
    circle(x, canvasHeight/2, width);
    x += speed;
    console.log("x position is:", x);
     if (x>=(rectPosition-(width/2))) {
        speed=speed*-1;
        color = 'red';
     } else if (x<=(100+(width)+(width/2))) {
        speed=speed*-1
        color = 'blue';
     }
     //THIS STUFF IS RELATIVELY BROKEN
    //  if (x>=(rectPosition-(width/2))) {
    //     x -= 12;
    //     width += 6;
    //  } else if (x<=(100+(width)+(width/2))) {
    //     x += 12;
    //     width += 6;
    //  }


    drawGrid(canvasWidth, canvasHeight);
}