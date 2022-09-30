function drawGrid(canvasWidth, canvasHeight) {
    textSize(10);
    textStyle(NORMAL);
    for (let x = 0; x < canvasWidth; x += 50) {
		for (let y = 0; y < canvasHeight; y += 50) {
			stroke(0);
            fill(0);
			strokeWeight(.2);
			line(x, 0, x, canvasHeight);
			line(0, y, canvasWidth, y);
            if ((x + 50) % 100 == 0 && (y + 50) % 100 == 0) {
			    strokeWeight(5);
                point(x, y);
                strokeWeight(0);
                text(`(${x}, ${y})`, x + 5, y + 20);
            }
            strokeWeight(.2);
		}
	}
}