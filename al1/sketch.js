let recMode = false;

function setup() {
  createCanvas(720, 400);
  background(255);
}

let t = 0;
function draw() {
  background(255, 255, 255, 10);
  translate(width / 2, height / 2);
  stroke(color(random(255), random(255), random(255)));
  strokeWeight(1.5);
  rect(0, 0, 0, 0);

  for (let i = 0; i < 50; i++) {
    rect(x1(t + i), y1(t + i), x2(t + i) + 20, y2(t + i) + 20);
    rect(x1(t - i), y1(t - i), x2(t + i) - 20, y2(t + i) - 20);
  }
  t += 0.2;
  recordit();
}

function x1(t) {
  return tan(t / 10) * 125 + sin(t / 20) * 125 + cos(t / 30) * 125;
}
function y1(t) {
  return cos(t / 10) * 125 + cos(t / 20) * 125 + cos(t / 30) * 125;
}
function x2(t) {
  return sin(t / 15) * 125 + tan(t / 50) * 100 + sin(t / 35) * 125;
}
function y2(t) {
  return cos(t / 15) * 125 + cos(t / 25) * 125 + cos(t / 35) * 125;
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    console.log("Stopped Recording");
    recMode = false;
    noLoop();
  } else if (key === ' ') {
    console.log("Start Recording");
    recMode = true;
    loop();
  }
}

function recordit() {
  if (recMode) {
    let ext = nf(frameCount, 4);
    saveCanvas(can, 'frame-' + ext, 'jpg');
    console.log("Recording frame " + ext);
  }
}
