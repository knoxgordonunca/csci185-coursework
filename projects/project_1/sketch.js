const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 


const circles = [];

//Initialization Of Variables
let mouseCounter = 0;
let mpsX1 = 0;
let mpsY1 = 0;
let mpsX2 = 0;
let mpsY2 = 0;
let speedX = 0;
let speedY = 0;
let objectOriginX = 0;
let objectOriginY = 0;
let circleSize = 20;
let artificialGravity = 0;
let color = 0;
let colorCounter = 0;
let clickCount = 0;
let i = 0;

const clickCounter = ev => {
    clickCount +=1
    console.log('advance: click at:', clickCount)
}

//Mouse Info Logger
const mouseLogger = ev => {
    if (mouseCounter == 0) {
        //Console Log For Easy Data Readablilty
        console.log('VAR GROUP AT', mouseCounter);
        //Position Assignment
        mpsX1 = mouseX;
        mpsY1 = mouseY;
        objectOriginX = mouseX;
        objectOriginY = mouseY;
        //Console Log For Easy Data Readablilty
        console.log('Mouse Position 1:','   X:',mpsX1,'   Y:',mpsY1,);
        //Reset Variables
        speedX = 0;
        speedY = 0;
        circleSize = 20;
        artificialGravity = 0;
        //document.querySelector('#step').textContent = 'position 2';

        //Create Click One Guide Circle
        circle(mpsX1,mpsY1,10);
        //Advances Mouse Counter
        mouseCounter = 1;
    }
    else if (mouseCounter == 1) {
        //Console Log For Easy Data Readablilty
        console.log('VAR GROUP AT', mouseCounter);
        //Position Assignment
        mpsX2 = mouseX;
        mpsY2 = mouseY;
        //Console Log For Easy Data Readablilty
        console.log('Mouse Position 2:','   X:',mpsX2,'   Y:',mpsY2,);
        //Create Click Two Guide Circle And Traj Line
        line(mpsX1,mpsY1, mouseX,mouseY);
        circle(mpsX2,mpsY2,10);
        //DETERMINES OBJECT SPEED
        speedX = (mpsX2-mpsX1)/10;
        speedY = (mpsY2-mpsY1)/10;
        //Reset All Position Values
        mpsX1 = 0;
        mpsY1 = 0;
        mpsX2 = 0;
        mpsY2 = 0;
        //document.querySelector('#step').textContent = 'stop';

        //Advances Mouse Counter
        mouseCounter = 2;
    }
    else if (mouseCounter == 2) {
        //Console Log For Easy Data Readablilty
        console.log('FINAL SPEED');
        console.log('Speed:','   X:',speedX,'   Y:',speedY,);
        //document.querySelector('#step').textContent = 'position 1';

        //Advances Mouse Counter
        mouseCounter = 0;
    }
    console.log('----------------------------------------');
};
//End Mouse Info Logger



//Setup
function setup() {
    createCanvas(canvasWidth, canvasHeight);
};

//Function Does All Drawing In Program
function draw() {
    clear();
    projectile();
    // xParticle1();
    console.log(circles.length);
    for(i = 0; i<circles.length; i++) {
        fill(circles[i].color);
        circle(circles[i].x, circles[i].y, 10);
        //console.log(circles[i]);
    }
    //xParticle1();
};

//Function for Projectile Generation and 
function projectile() {
    if (mouseCounter == 2) {
    //Establishes Color and Beginning Position and Speed
    //fill(color);
    //circle(objectOriginX, objectOriginY, circleSize);
    circles.push({
        x: objectOriginX,
        y: objectOriginY,
        color: color,
    });
    //Created Motion
    objectOriginX += speedX + ((Math.random()*20)-10);
    objectOriginY += speedY + artificialGravity + ((Math.random()*20)-10);
    //Console Log For Position During Motion
    console.log('X:', objectOriginX, 'Y:', objectOriginY);
    //Increases Ball Size
    //circleSize +=1;
    //Artificial Gravity
    artificialGravity += 1+ (artificialGravity/(10^100000));
    }
    //Color Changer
    if (colorCounter == 0) {
        color = '#CC0014';
        colorCounter = 1;
    }
    else if (colorCounter == 1) {
        color = '#B20011';
        colorCounter = 2;
    }
    else if (colorCounter == 2) {
        color = '#99000F';
        colorCounter = 3;
    }
    else if (colorCounter == 3) {
        color = '#7F000C';
        colorCounter = 4;
    }
    else if (colorCounter == 4) {
        color = '#66000A';
        colorCounter = 5;
    }
    else if (colorCounter == 5) {
        color = '#4C0007';
        colorCounter = 0;
    }
};

// function xParticle1() {
// clear ();
// }

