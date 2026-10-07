let movers = [];
let liquid;

function setup() {
  createCanvas(640, 360);
  reset();
  // Create liquid object (acting like water)
  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
}

function draw() {
  background(102, 217, 255);

  // Draw water (Liquid)
  liquid.display();

  for (let i = 0; i < movers.length; i++) {
    // Check if the Mover is in the liquid
    if (liquid.contains(movers[i])) {
      // Calculate drag force
      let dragForce = liquid.calculateDrag(movers[i]);
      // Apply drag force to the Mover
      movers[i].applyForce(dragForce);
    }

    // Apply reversed gravity (upwards)
    let gravity = createVector(0, -0.1 * movers[i].mass); 
    movers[i].applyForce(gravity);

    // Update and display movers
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
}

function mousePressed() {
  reset();
}

// Restart all Mover objects randomly
function reset() {
  movers = []; // Reset movers
  for (let i = 0; i < 9; i++) {
    movers[i] = new Mover(random(0.5, 3), 40 + i * 70, height); // Start from the bottom
  }
}

let Liquid = function(x, y, w, h, c) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.c = c;
};

// Is the Mover in the Liquid?
Liquid.prototype.contains = function(m) {
  let l = m.position;
  return (
    l.x > this.x &&
    l.x < this.x + this.w &&
    l.y > this.y &&
    l.y < this.y + this.h
  );
};

// Calculate drag force
Liquid.prototype.calculateDrag = function(m) {
  let speed = m.velocity.mag();
  let dragMagnitude = this.c * speed * speed;

  let dragForce = m.velocity.copy();
  dragForce.mult(-1); // Inverse of velocity

  dragForce.normalize();
  dragForce.mult(dragMagnitude);
  return dragForce;
};

Liquid.prototype.display = function() {
  noStroke();
  fill(0, 134, 1795, 100); // Slight transparency for water effect
  rect(this.x, this.y, this.w, this.h);
};

function Mover(m, x, y) {
  this.mass = m;
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
}

// Apply force based on mass
Mover.prototype.applyForce = function(force) {
  let f = p5.Vector.div(force, this.mass);
  this.acceleration.add(f);
};

Mover.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0); // Reset acceleration
};

Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(1);
  fill(0, 115, 153, 200);
  ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
};

Mover.prototype.checkEdges = function() {
  // Reset position to the bottom if it goes off the top
  if (this.position.y < this.mass * 8) {
    this.position.y = height; 
    this.velocity.y = random(0, -2); // Random speed
  }
}



