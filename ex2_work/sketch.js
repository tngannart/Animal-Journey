let x, y;
let imgcb, imgb;
let font1, font2;
let value = 0;
let counterG = 0;
let gridSize = 50;
let purpOn = false;
let imgbX, imgbY;
let showText = false; 
let cx, cy; 
let showPlayText = true;
let lastMoveTime = 0;
const textDelay = 5000;

function preload() {
  imgcb = loadImage("asset/white.png");
  imgb = loadImage("asset/black.png");
  font1 = loadFont("asset/fastrespond.otf");
  font2 = loadFont("asset/kabur.otf");
}

function setup() {
  createCanvas(550, 550);
  x = width / 2;
  y = height / 2;
  rectMode(CENTER);
  frameRate(15);

  imgbX = random(0, width - gridSize);
  imgbY = random(0, height - gridSize);

lastMoveTime = millis();  
}

function drawBackground() {
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      fill((x / gridSize + y / gridSize) % 2 == 0 ? 0 : 255);
      rect(x + 25, y + 25, gridSize, gridSize);
    }
  }
}

function draw() {
  if (!showPlayText && millis() - lastMoveTime >= textDelay) {
  showPlayText = true;
}
  drawBackground();
  let collision = checkCollision(x, y, 20, 20, imgbX, imgbY, 20, 20);

if (collision) {
  tint(255, 0, 0);
  console.log("Collision");
} else {
  noTint(); 
}
  if (purpOn) {
    //console.log("Shaking image");
    image(imgcb, x + random(-10, 10), y + random(-10, 10), 200, 130);
  } else {
    image(imgcb, x, y, 200, 130);
  }

  drawBlack();

  // mouse moving
  fill(random(0, 255), 10, 70);
  ellipse(mouseX, mouseY, 20, 20);
  stroke(0);

  // text
  textSize(60);
  textAlign(CENTER);
  textFont(font2);
  if (collision) {
    fill(255, 0, 0);
    text("Boom!", width / 2, height / 2);
  // } else {
  //   fill(245, 108, 194);
  //   textFont(font1);
  //   textSize((counterG) / 3);
  //   text("Let's play!", width / 2, counterG);
  //   counterG += 1.5;
  //   if (counterG > width) {
  //     counterG = -80;
  //   }
  // }
} else if (showPlayText) {
  fill(245, 108, 194);
  textFont(font1);
  textSize(counterG / 3);
  text("Let's play!", width / 2, counterG);

  counterG += 1.5;

  if (counterG > width) {
    counterG = -80;
  }
}
}

function drawBlack() {
  image(imgb, imgbX, imgbY, 200, 130);

}
function checkCollision(x1, y1, w1, h1, x2, y2, w2, h2) {
  return x1 < x2 + w2 &&
         x1 + w1 > x2 &&
         y1 < y2 + h2 &&
         y1 + h1 > y2;
}

//keypress
  function keyPressed() {
   let pressedKey = key.toLowerCase ();
  if (["a", "w", "s", "d"].includes(pressedKey)) {
    showPlayText = false;
    lastMoveTime = millis();
  }

    switch (pressedKey) {
  case "a":
    console.log("Left");
    x -= 25;
    break;
  case "d":
    console.log("Right");
    x += 25;
    break;
  case "w":
    console.log("Up");
    y -= 25;
    break;
  case "s":
    console.log("Down");
    y += 25;
    break;
  case "u":
    console.log("Reset");
    x = width / 2;
    y = height / 2;
    break;
  //case "p":
    purpOn = true;
    //console.log("purpOn is On");
    //break;

  case "x":
    purpOn = !purpOn;
    console.log("Shake:", purpOn ? "ON" : "OFF");
    break;
  case "r":
    console.log("r is random place");
    imgbX = random(0, width - gridSize);
    imgbY = random(0, height - gridSize);
    break;
    }
if (x < 0 || x > width || y < 0 || y > height) {
      console.log("Out of bounds! Resetting position.");
      x = width / 2;
      y = height / 2;
    }
  }

// mouse
function mouseMoved() {
  console.log("moving around " + value);
  value += 1;
  if (value >= 255) {
    value = 0;
  }
}
