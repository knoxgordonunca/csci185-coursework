const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:

    drawShape(200,200,100,'hotpink','deepskyblue');
    drawShape(500,500,200,'firebrick','midnightblue');
    drawShape(600,250,50,'plum','rebeccapurple');
    drawShape(100,500,100,'gold','goldenrod');
    drawShape(1000,600,500,'bisque','cadetblue');

    drawGrid(canvasWidth, canvasHeight);
}


// function definition goes here:

function drawShape (x, y, d, c1, c2) {
    fill(c1);
    circle(x,y,d);
    fill(c2);
    circle(x,y,d/2);

}