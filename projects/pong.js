var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;
var xBallChange = 5;
var yBallChange = 5;
var xPaddle;
var yPaddle;
var paddleWidth = 100;
var paddleHeight = 25;
var started = false;
var score = 0;
var scoreConstant = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
	
	xBall += xBallChange;
	yBall += yBallChange;
	
	if (xBall < diameter / 2 || xBall > windowWidth - 0.5*diameter) {
		xBallChange *= -1;
	}
	
	if (yBall < diameter / 2 || yBall > windowHeight - diameter) {
		yBallChange *= -1;
	}
	
	if ((xBall > xPaddle && xBall < xPaddle + paddleWidth) && (yBall + (diameter/2) >= yPaddle)) {
  	xBallChange = (xBallChange + 0.5) * 1;
  	yBallChange = (yBallChange + 0.5) * -1;
		score ++;
	}
	
	fill(255, 255, 255);
 	noStroke();	
	ellipse(xBall, yBall, diameter, diameter);
	
	if (!started) {
	xPaddle = windowWidth / 2;
	yPaddle = windowHeight - 100;
	started = true;
	}
	
	fill(255,255,255);
	noStroke();
	rect(xPaddle, yPaddle, paddleWidth, paddleHeight);	
	
	fill(255, 255, 255);
	textSize(24);
	text("Score: " + score, 10, 25);

	if (yBall > windowHeight - 55) {
		fill(255,255,255);
		textSize(50);
		text("Game Over", 100, 100);
		xBallChange = 0
		yBallChange = 0
		yBall = windowHeight - 50
		yPaddle += 5
			
	}
	
}	
	
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xPaddle -= 50;
  } else if (keyCode === RIGHT_ARROW) {
    xPaddle += 50;
  }
}

function touchStarted() {

  if (mouseX < windowWidth / 2) {
    xPaddle -= 50;
  } else {
    xPaddle += 50;
  }
}



		


