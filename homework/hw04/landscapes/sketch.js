const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    strokeWeight(1);
    stroke('white');
    noFill()
    let i = 0;
    while (i < 500) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 20;
        circle(x, y, width);
        console.log(x, y, width);
        i += 1;
    }
}