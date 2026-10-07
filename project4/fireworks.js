class Firework {
  constructor() {
    this.hu = random(255);
    this.firework = new Particle(random(width), height, this.hu, true);
    this.exploded = false;
    this.particles = [];
  }

  applyForce(force) {
    if (!this.exploded) {
      this.firework.applyForce(force);
    }
    for (let p of this.particles) {
      p.applyForce(force);
    }
  }

  update() {
    if (!this.exploded) {
      this.firework.update();
      if (this.firework.vel.y >= -8 || this.firework.pos <= (height-300)* 0.0001) {
        this.exploded = true;
        this.explode();
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update();
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  explode() {
    for (let i = 0; i < 50; i++) {
      const p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.particles.push(p);
    }
  }

  done() {
    return this.exploded && this.particles.length === 0;
  }

  show() {
    if (!this.exploded) {
      this.firework.show();
    }
    for (let p of this.particles) {
      p.show();
    }
  }
}


class Particle {
  constructor(x, y, hu, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu = hu;
    this.acc = createVector(0, 0);
    this.vel = firework
      ? createVector(0, random(-12, -8))
      : p5.Vector.random2D().mult(random(2, 10));
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    if (!this.firework) {
      this.lifespan -= 4;
    }
  }

  done() {
    return this.lifespan < 0;
  }

  show() {
    push();
    colorMode(HSB);
    strokeWeight(this.firework ? 4 : 2);
    stroke(this.hu, 255, 255, this.firework ? 255 : this.lifespan);
    point(this.pos.x, this.pos.y);
    pop();
  }
}
