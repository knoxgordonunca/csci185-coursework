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
let backColor = 0;
let colorCounter = 0;
let clickCount = 0;
let i = 0;
let pulserSize = 0;
let pleaseDrawBox = 0;

//Storage
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;
const memory = [];
const animating = [];

//Background Storage
let backX = 0;
let backY = 0;
let backW = 0;
const memory2 = [];
const backing = [];


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
        startX = mouseX;
        startY = mouseY;
        //Console Log For Easy Data Readablilty
        console.log('Mouse Position 1:','   X:',mpsX1,'   Y:',mpsY1,);
        //Reset Variables
        speedX = 0;
        speedY = 0;
        circleSize = 20;
        pulserSize = 0
        artificialGravity = 0;
        //document.querySelector('#step').textContent = 'position 2';

        //Create Click One Guide Circle
        // circle(mpsX1,mpsY1,10);
        //Advances Mouse Counter
        mouseCounter = 1;
    }
    else if (mouseCounter == 1) {
        //Console Log For Easy Data Readablilty
        console.log('VAR GROUP AT', mouseCounter);
        //Position Assignment
        mpsX2 = mouseX;
        mpsY2 = mouseY;
        endX = mouseX;
        endY = mouseY;
        //Console Log For Easy Data Readablilty
        console.log('Mouse Position 2:','   X:',mpsX2,'   Y:',mpsY2,);
        //Create Click Two Guide Circle And Traj Line
        // line(mpsX1,mpsY1, mouseX,mouseY);
        // circle(mpsX2,mpsY2,10);
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
        startX=0;
        startY=0;
        endX=0;
        endY=0;
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



fill('black');

//Function Does All Drawing In Program
function draw() {
    frameRate(25);
     clear();

     if (pleaseDrawBox < 1) {
        drawBoxes();
        pleaseDrawBox +=1;
    };
    if (backing.length > 0) {
        memory2.push(backing.shift());
    };
    for(i = 0; i<memory2.length; i++) {
        fill(memory2[i].backColor);
        square(memory2[i].backX, memory2[i].backY, memory2[i].backW)
    };

    //Transfer cirle data to memory
    projectile();
    console.log('confirm');
    if (animating.length > 0) {
        memory.push(animating.shift());
    };

    //Draw Guides
    if (startX != 0) {
        fill('black');
        circle(startX,startY,20);
    };
    if (endX != 0) {
        line(startX, startY, endX, endY);
        circle(endX,endY,20);
    };
    for(i = 0; i<memory.length; i++) {
        fill(memory[i].color);
        circle(memory[i].x, memory[i].y, 20)
    };
    
    

    //DRAW STUFF ON TOP HERE

    circle(objectOriginX,objectOriginY,pulserSize);
    pulserSize += (Math.random()*10)-5.5;
    
};






//Function for Projectile Generation and 

function drawBoxes(){
    for (let j = 0; j < 50; j++) {
        if (colorCounter == 0) {
            backColor = '#1660FF';
            colorCounter = 1;
        }
        else if (colorCounter == 1) {
            backColor = '#1456E5';
            colorCounter = 2;
        }
        else if (colorCounter == 2) {
            backColor = '#124DCC';
            colorCounter = 3;
        }
        else if (colorCounter == 3) {
            backColor = '#1043B2';
            colorCounter = 4;
        }
        else if (colorCounter == 4) {
            backColor = '#0D3999';
            colorCounter = 5;
        }
        else if (colorCounter == 5) {
            backColor = '#0B307F';
            colorCounter = 0;
        }
        fill(backColor);
        const backX = Math.random() * canvasWidth-200;
        const backY = Math.random() * canvasHeight-200;
        const backW = Math.random() * 900;
        square(backX, backY, backW);
        console.log(backX, backY, backW);
        

        backing.push({
            bx: backX,
            by: backW,
            bw: backW,
            bcolor: backColor,
        })
}
};

function projectile() {
    if (mouseCounter == 2) {
    //Remember projectile
    animating.push({
        x: objectOriginX,
        y: objectOriginY,
        color: color,
    })
    //Establishes Color and Beginning Position and Speed
    //fill(color);
    //circle(objectOriginX, objectOriginY, circleSize)
    //Created Motion
    objectOriginX += speedX + ((Math.random()*20)-10);
    objectOriginY += speedY + artificialGravity + ((Math.random()*20)-10);
    //Console Log For Position During Motion
    console.log('X:', objectOriginX, 'Y:', objectOriginY);
    //Increases Ball Size
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



