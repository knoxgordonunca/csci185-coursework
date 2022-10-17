// const canvasWidth = window.innerWidth;
// const canvasHeight = window.innerHeight; 

// // feel free to change these values as you like!
// const c1 = {
//     x: 100,
//     y: 100,
//     width: 200,
//     speed: 0.2,
//     color: 'hotpink'
// };
// const c2 = {
//     x: 100,
//     y: viewWidth-100,
//     width: 200,
//     speed: -0.2,
//     color: 'darkcyan'
// };


// // required to set up the canvas:
// function setup() {
//     createCanvas(canvasWidth, canvasHeight);
// }


// // animation loop:
// function draw() {
//     // clear the canvas:
//     clear();

//     // move the car:
//     c1.x += c1.speed;

//     // redraw the car:
//     drawCar(c1.x, c1.y, c1.width, c1.color);
// }
//------------------------------------------------------------------------------------------------------------------------
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const carData = [
    {x: canvasWidth/2, y: 50, width: 100, speed: 1, color: 'red'},
    {x: canvasWidth/2, y: 100, width: 100, speed: -1, color: 'orange'},
    {x: canvasWidth/2, y: 150, width: 100, speed: 2, color: 'yellow'},
    {x: canvasWidth/2, y: 200, width: 100, speed: -2, color: 'green'},
    {x: canvasWidth/2, y: 250, width: 100, speed: 3, color: 'blue'},
    {x: canvasWidth/2, y: 300, width: 100, speed: -3, color: 'purple'},
    {x: canvasWidth/2, y: 350, width: 100, speed: 4, color: 'red'},
    {x: canvasWidth/2, y: 400, width: 100, speed: -4, color: 'orange'},
    {x: canvasWidth/2, y: 450, width: 100, speed: 5, color: 'yellow'},
    {x: canvasWidth/2, y: 500, width: 100, speed: -5, color: 'green'},
    {x: canvasWidth/2, y: 550, width: 100, speed: 6, color: 'blue'},
    {x: canvasWidth/2, y: 600, width: 100, speed: -6, color: 'purple'},
    {x: canvasWidth/2, y: 650, width: 100, speed: 7, color: 'red'},
    {x: canvasWidth/2, y: 700, width: 100, speed: -7, color: 'orange'},
];

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animate the circle by changing the x and y position
// every time the animation loop invokes the draw() function:
function draw() {
    clear();

    let i=0;
    while (i < carData.length) {

        const car = carData[i]

    drawCar(car.x, car.y, car.width, car.color, wheelColor='black')

    car.x += car.speed;

    if (car.x > canvasWidth+(car.width/2)) {
        car.x = 0-(car.width/2)
    } else if (car.x < 0-(car.width/2)) {
        car.x = canvasWidth+(car.width/2)
    }

    i += 1;
    }
}

function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}