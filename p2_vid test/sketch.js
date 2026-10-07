let recMode = false;
let can;
let p1;
let f1;
let t = 0;
let bouncers = [];
let total = 111;

function setup() {
  can = createCanvas(1920, 1080);
  background(255);
  frameRate(45);
//noLoop();
  p1 = new ntPara();
  f1 = new ntForces();
  for (let i = 0; i < total; i++) {

  b = new ntBouncer(width / 2, height / 2);

    b.ntInitialize(); // sets up the bouncer
    bouncers.push(b);
  
  }

  console.log(frameCount);
}

function draw() {
  if (!recMode) {
    background(255, 255, 255, 10); 
    background(255); 

  }
  

  if (frameCount < 290) {
    console.log("the first act");
    for (let b of bouncers) {
      b.ntMoveAndBounce();
      b.ntDisplay("ellipse");
    } 
    
    } else if (frameCount < 420) {
    console.log("the second act");
    noStroke();
    background(255,255,255,10,10); 

    ellipse(width / 2, height / 3, 80, 80);
    p1.updatePara();
    p1.displayPara();
    p1.setScale(1.5);

  } else if (frameCount < 750) {
    console.log("the third act");
    background(255,255,255,10,10); 

    f1.update();
    f1.display();

} else {
  console.log("the forth act");
  fill(255,255,255,10,10); 

  f1.update();
  f1.display();

  p1.setScale(0.3);
  p1.updatePara();
  p1.displayPara();
}



  //recordit();
}

function keyPressed() {
  if (keyIsPressed === true) {
    let k = key;
    console.log("k is " + k);

    if (k == 's' || k == 'S') {
      console.log("Start the video again");
      recMode = false;
      noLoop();
    }

    if (k == ' ') {
      console.log("Start Effect for Recording");
      recMode = true;
      loop();
    }
  }
}

function recordit() {
  if (recMode) {
    let ext = nf(frameCount, 4);
    saveCanvas(can, 'frame-' + ext, 'jpg');
    console.log("Recording frame " + ext);
  }
}

///////////////class/////////////////

class ntPara {
  constructor() {
    this.t = 0;
    this.numPara = 70;
  }

  updatePara() {
    this.t += 0.2;
  }

  displayPara() {
    push();
    translate(width / 2, height / 2);
    stroke(color(random(255), random(255), random(255)));
    strokeWeight(1.5);
    rect(0, 0, 0, 0);

    for (let i = 0; i < this.numPara; i++) {
      rect(this.x1(this.t + i), this.y1(this.t + i), this.x2(this.t + i) + 20, this.y2(this.t + i) + 20);
      rect(this.x1(this.t - i), this.y1(this.t - i), this.x2(this.t + i) - 20, this.y2(this.t + i) - 20);
    }
    pop();
  }
  setScale(factor) {
    this.scaleFactor = factor;
  }

  x1(t) {
    return tan(t / 10) * 125 + sin(t / 20) * 125 + cos(t / 30) * 125* this.scaleFactor;
  }

  y1(t) {
    return cos(t / 10) * 125 + cos(t / 20) * 125 + cos(t / 30) * 125* this.scaleFactor;
  }

  x2(t) {
    return sin(t / 15) * 125 + tan(t / 50) * 100 + sin(t / 35) * 125* this.scaleFactor;
  }

  y2(t) {
    return cos(t / 15) * 125 + cos(t / 25) * 125 + cos(t / 35) * 125* this.scaleFactor;
  }
}

class ntForces {
  constructor() {
    this.movers = [];
    this.liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
    this.reset();
  }

  reset() {
    this.movers = [];
    for (let i = 0; i < 9; i++) {
      let spacing = width / 9;
      this.movers[i] = new Mover(random(0.5, 3), spacing * i + spacing / 2, height);
    }
  }

  update() {
    for (let mover of this.movers) {
      if (this.liquid.contains(mover)) {
        let drag = this.liquid.calculateDrag(mover);
        mover.applyForce(drag);
      }
      let gravity = createVector(0, -0.3 * mover.mass);
      mover.applyForce(gravity);

      mover.update();
      mover.checkEdges();
    }
  }

  display() {
    this.liquid.display();
    for (let mover of this.movers) {
      mover.display();
    }
  }
}

class Mover {
  constructor(m, x, y) {
    this.mass = m;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    strokeWeight(1);
    fill(0, 115, 153, 200);
    ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
  }

  checkEdges() {
    if (this.position.y < this.mass * 8) {
      this.position.y = height;
      this.velocity.y = random(0, -5);
    }
  }
}

class ntBouncer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.size = 0;
    this.b = 0;
  }

  ntInitialize() {
    this.speedX = random(-13, 13);
    this.speedY = random(-13, 13);
    this.size = random(10, 90);
     this.b = int(random(0, 255));
  }

  ntMoveAndBounce() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 40 + this.size / 2 || this.x > width - 40 - this.size / 2) {
      this.speedX *= -1;
    }

    if (this.y < 40 + this.size / 2 || this.y > height - 40 - this.size / 2) {
      this.speedY *= -1;
    }
  }

  ntDisplay(shapeType) {
    push();
    translate(this.x, this.y);
    fill(0,0,this.b,40);
    noStroke();
      ellipse(0, 0, this.size, this.size);

    pop();
  }
}

class Liquid {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  }

  contains(mover) {
    let l = mover.position;
    return (
      l.x > this.x &&
      l.x < this.x + this.w &&
      l.y > this.y &&
      l.y < this.y + this.h);
  }

  calculateDrag(mover) {
    let speed = mover.velocity.mag();
    let dragMag = this.c * speed * speed * 2;

    let drag = mover.velocity.copy();
    drag.mult(-1);
    drag.normalize();
    drag.mult(dragMag);
    return drag;
  }

  display() {
    noStroke();
    fill(0, 134, 179, 100);
    rect(this.x, this.y, this.w, this.h);
  }
}




