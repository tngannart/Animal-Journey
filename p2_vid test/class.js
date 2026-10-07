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
      l.y < this.y + this.h
    );
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
