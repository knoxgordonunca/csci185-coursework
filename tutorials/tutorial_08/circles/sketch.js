function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    // noFill();
    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    let count = 1;
    let x=500;
    let y=500;
    let d=1000;
    let c='red';

    while (count < 50) {
        if (c=='red') {
            c='yellow'
        } else if (c=='yellow') {
            c='orange'
        } else if (c=='orange') {
            c='green'
        } else if (c=='green') {
            c='blue'
        } else if (c=='blue') {
            c='purple'
        } else if (c=='purple') {
            c='red'
        };

        d=d-(20);
        x=x+(Math.sin(count*(6.14*2)))*30;
        y=y+(Math.cos(count*(6.14*2)))*30;
        count+=1;
        console.log('-----------------');
        console.log(count);
        console.log(x);
        console.log(y);
        console.log(d);
        console.log('-----------------');
        fill(c);
        strokeWeight(0);
        circle(x, y, d);
    };

    //drawGrid(canvasWidth, canvasHeight);

}
