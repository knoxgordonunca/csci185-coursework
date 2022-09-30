function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100,200,50,'chocolate');
    drawCircle(300,200,75,'coral');
    drawCircle(500,200,100,'darkorange');
    drawCircle(700,200,150,'darksalmon');

    // Exercise 2: 
    drawOval(100,400,50,50,'teal');
    drawOval(300,400,75,200,'darkseagreen');
    drawOval(500,400,100,20,'forestgreen');
    drawOval(700,400,150,120,'lightseagreen');

    // Exercise 3:
    drawBullseye(100,600,50,'red','yellow');
    drawBullseye(300,600,75,'linen','mediumpurple');
    drawBullseye(500,600,100,'olive','palegoldenrod');
    drawBullseye(700,600,150,'rosybrown','royalblue');

    // Exercise 4:
    drawFace(100,800,50,'lightgrey','black','black');
    drawFace(300,800,75,'black','white','white');
    drawFace(500,800,100,'salmon','seagreen','saddlebrown');
    drawFace(700,800,150,'skyblue','slateblue','slateblue');

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(x,y,d,c) {
    fill(c);
    circle(x, y, d);
    strokeWeight(0)
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(x,y,w,h,c) {
    fill(c); //teal
    ellipse(x, y, w, h);
    strokeWeight(0)
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(x,y,d,c1,c2) {
    fill(c1); //teal
    circle(x, y, d); //100, 300, 100
    fill(c2); //navy
    circle(x, y, d*.75); //100, 300, 75
    fill(c1); //teal
    circle(x, y, d*.5); //100, 300, 50
    fill(c2); //navy
    circle(x, y, d*.25); //100, 300, 25
    strokeWeight(0)
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(x,y,d,c1,c2,sc) {
    fill(c1); //white
    circle(x, y, d); //100, 400, 50
    fill(c2); //black
    circle(x-(d*.2), y-(d*.2), d*.2); //92, 392, 8
    circle(x+(d*.2), y-(d*.2), d*.2); //108, 392, 8
        strokeWeight(d*.07)
    noFill()
    stroke(sc);
    curve(
        x, y-d*3,       // control point
        x-(d*.4), y, 
        x+(d*.4), y,
        x,y-d*3,   // control point
    );
        strokeWeight(0)
}

