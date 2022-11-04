const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const creature = {
    x: 300, y: 300, size: 100, color: 'hotpink', speed: 3
}

const allCircles = [];
let currentProjectileCircles = [];
let projectileCoords = {
    start: null,
    end: null
}

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
let isAnimating = false;

const clickCounter = ev => {
    clickCount +=1
    console.log('advance: click at:', clickCount)
}

//Mouse Info Logger
const mouseLogger = ev => {
    if (isAnimating) {
        return;
    }
    if (mouseCounter % 2 == 0) {
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
        // circle(mpsX1,mpsY1,10);
        projectileCoords.start = {
            x: mpsX1, y: mpsY1
        }
        //Advances Mouse Counter
        // mouseCounter = 1;
    }
    else if (mouseCounter % 2 == 1) {
        //Console Log For Easy Data Readablilty
        console.log('VAR GROUP AT', mouseCounter);
        //Position Assignment
        mpsX2 = mouseX;
        mpsY2 = mouseY;
        //Console Log For Easy Data Readablilty
        console.log('Mouse Position 2:','   X:',mpsX2,'   Y:',mpsY2,);
        //Create Click Two Guide Circle And Traj Line
        line(mpsX1,mpsY1, mouseX,mouseY);

        projectileCoords.end = {
            x: mpsX2, y: mpsY2
        }
        // circle(mpsX2,mpsY2,10);
        //DETERMINES OBJECT SPEED
        speedX = (mpsX2-mpsX1)/10;
        speedY = (mpsY2-mpsY1)/10;
        //Reset All Position Values
        mpsX1 = 0;
        mpsY1 = 0;
        mpsX2 = 0;
        mpsY2 = 0;

        isAnimating = true;
        mouseCounter += 1;
    }
};
//End Mouse Info Logger



//Setup
function setup() {
    createCanvas(canvasWidth, canvasHeight);
};

//Function Does All Drawing In Program
function draw() {
    // frameRate(10);
    // console.log(savedCircles);
    // console.log(circles);
    clear();
    projectile();
    if (currentProjectileCircles.length > 0) {
        allCircles.push(currentProjectileCircles.shift());
    }
    // console.log(circles.length);
    for(i = 0; i<allCircles.length; i++) {
        fill(allCircles[i].color);
        circle(allCircles[i].x, allCircles[i].y, 20);
        //console.log(circles[i]);
    }

    fill('black');
    var coords = projectileCoords;
    if(coords.start) {
        circle(coords.start.x, coords.start.y, 20);
    }
    if(coords.end) {
        circle(coords.end.x, coords.end.y, 20);
        line(coords.start.x, coords.start.y, coords.end.x, coords.end.y);
    }

    fill(creature.color);
    circle(creature.x, creature.y, creature.size);
    creature.x += creature.speed;
    if (creature.x > canvasWidth + 100) {
        creature.x = -100;
    }
};

//Function for Projectile Generation and 
function projectile() {
    if (!isAnimating) {
        return;
    }
    //Establishes Color and Beginning Position and Speed
    currentProjectileCircles.push({
        x: objectOriginX,
        y: objectOriginY,
        color: color,
    });

    // if the projectile is off the screen, stop the animation:
    if (objectOriginX > canvasWidth || 
        objectOriginX < 0 || 
        objectOriginY > canvasHeight) {
        
        // stop animation and reset variables
        // so that another projectile can start
        isAnimating = false;
        projectileCoords.start = null;
        projectileCoords.end = null;
    }
    //Created Motion
    objectOriginX += speedX + ((Math.random()*20)-10);
    objectOriginY += speedY + artificialGravity + ((Math.random()*20)-10);
    //Console Log For Position During Motion
    // console.log('X:', objectOriginX, 'Y:', objectOriginY);
    //Increases Ball Size
    //circleSize +=1;
    //Artificial Gravity
    artificialGravity += 1+ (artificialGravity/(10^100000));

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
}

function mouseClicked() {
    mouseLogger();
    if (!isAnimating) {
        mouseCounter += 1;
    }
    // clickCount +=1;
    console.log(mouseCounter);
    // console.log('advance: click at:', clickCount)
}