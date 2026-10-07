let lox = 50;
let loy = 50;
let speedx = 2;
let speedy = 2;

let lox2 = 400;
let loy2 = 400;
let speedx2 = -3;
let speedy2 = -4;
//let bblionColor = color(random("red"),random(196,245,34),random(245,34,97));
let bbAngle = 0;


let t1x = 100;
let t1y = 100;
let t1speedx = 3;
let t1speedy = 2;

function setup() {
  createCanvas(500, 500);
  noStroke();
  fill(200);
}

function draw() {
  background(59,222,158); 

  //Big lion
  lion(lox, loy, frameCount * 0.02, 0.75);
  lox += speedx;
  loy += speedy;
  if (lox <= 0 || lox >= width) {
    speedx *= -1;
  }
  if (loy <= 0 || loy >= height) {
    speedy *= -1;
  }

  // Baby lion
  lion2(lox2, loy2, frameCount * -0.03, 0.6);
  lox2 += speedx2;
  loy2 += speedy2;
  bbAngle += 1;

  if (lox2 <= 0 || lox2 >= width) speedx2 *= -1;
  if (loy2 <= 0 || loy2 >= height) speedy2 *= -1;

//borrow code from Sean: thank you Sean!

thomas(t1x, t1y, frameCount * 0.02, 0.75);
  t1x += t1speedx;
  t1y += t1speedy;

  if (t1x > width) t1x = 0;
  if (t1x < 0) t1x = width;
  if (t1y > height) t1y = 0;
  if (t1y < 0) t1y = height;

}


function lion(lx,ly,rot) {
push();
translate(lx,ly);
rotate(rot);
scale(.75);
mane(100);
head();
eye();
ear();
nose();
mouth();
cutiecheek();
leg();
pop();
}

function lion2(lx, ly, rot, sc) {
  push();
  translate(lx, ly);
  rotate(bbAngle);
  scale(sc);
  bbMane(150);
  head();
  bbEye(); 
  ear();
  nose();
  mouth();
  pop();
}

function mane (size){
  //console.log("mane");
  push();
  fill(255, 165, 0); 
  for (let i = 0; i < 360; i += 36) {
    let x = cos(radians(i)) * 100;
    let y = sin(radians(i)) * 100;
    ellipse( x, y, size * 0.8, size * 0.8);
  }
  pop();
}


function ear(){
  push();
  fill(255, 255, 0);
  stroke(1);
  ellipse(50, -70, 50, 50); // right ear
  ellipse(-50, -70, 50, 50); // left ear
  pop();
  }

function head() {
    //console.log("head");
  push();
  fill(255, 255, 0);
  stroke(1);
  ellipse(0, 0, 160, 160);
  pop();
  }
  
function eye(){
  //console.log("eye");
  push();
  fill(255);
  stroke(1);
  ellipse(-30, -20, 25, 25);
  ellipse(30, -20, 25, 25);
  fill(0);
  ellipse(-25, -20, 10, 10);
  ellipse(25, -20, 10, 10);
  pop();
}

function nose() {
//console.log("nose");
  push();
  fill(205, 127, 50); //bronze: https://htmlcolorcodes.com/colors/shades-of-brown/
  triangle(-10, 5, 10, 5, 0, 25);
  pop();
}

function mouth() {
  //console.log("mouth");
  push();
  noFill();
  stroke(0);
  arc(-10, 30, 20, 10, 0, PI);
  arc(10, 30, 20, 10, 0, PI);
  pop();
}

function cutiecheek() {
    //console.log("cutiecheek");

  push();
  fill(253, 49, 5);
  ellipse(45, 20, 40, 20); // Right cheek
  ellipse(-45, 20, 40, 20); // Left cheek
  pop();
}
function leg(){
 //console.log("leg");

 push();
fill(255, 255, 0);
stroke(1);
rect(60, 35, 80, 50); // right 
rect(-130, 35, 80, 50); //left
  pop();
}

function bbMane(size) {
      //console.log("bbMane");
  push();
  fill(200, 100, 0);
  for (let i = 0; i < 360; i += 30) {
    let x = cos(radians(i)) * 90;
    let y = sin(radians(i)) * 90;
    ellipse( x, y, size * 0.6, size * 0.6);
  }
  pop();
}

function bbEye() {
    //console.log("bbEye");
  push();
  fill(255);
  stroke(1);
  ellipse(-25, -25, 30, 30);
  ellipse(30, -20, 30, 30);
  fill(0,0,255);
  ellipse(-25, -20, 12, 12);
  ellipse(25, -20, 12, 12);
  pop();
}
function bbPuppil(){
  //console.log("pupil");
  push();
  fill(0);
  ellipse(-25, -20, 10, 10);
  ellipse(25, -20, 10, 10);
  pop();
}


//Thomas, borrow code
function thomas(lx, ly, rot) {
  push();
  translate(lx, ly);
  rotate(rot);
  scale(0.4);
  rearpaws();
  tbody();
  holdballoon();
  rotate(45);
  thead();
  lookup();
  snout();
  tongue();
  pop();
}

function rearpaws(){
  //rearpaws;
  push();
  fill(38, 28, 23);
  ellipse(-20, 160, 12.5, 25);
  ellipse(70, 160, 12.5, 25);
  pop();
}

function tbody(){
  //body
  fill(241, 233, 218);
  noStroke();
  ellipse(25, 100, 150, 150);
}

function holdballoon(){
  //front paws
  push();
  fill(220, 200, 180);
  ellipse(-35, 120, 25, 50);
  ellipse(100, 100, 25, 50);
   stroke ('black');
  line(100, 100, 25, -80);
  noStroke();
  fill ('blue');
  ellipse(25, -80, 45,65);
  pop();
}
function thead(){
    //head241, 233, 218
    push();
    fill(241, 233, 218);
    stroke(1);
    rect(0,0,50,150);  // anchor
    rect(-49,-55,50,75);
    rect(49,-55,50,75);
    pop();
}

function propellerhat(){
  push();
  noStroke();
  fill ('red');
  circle(25,0,50);
  fill('black');
  rect(22, -34, 5, 10);
  fill (52, 228, 234);
  ellipse(17, -34, 15, 5);
  ellipse(32, -34, 15, 5);
  pop();
}

function scalp(){
    //scalp / hat
    push();
    noStroke();
    circle(25, 0, 50);
    pop();
}

function lookup (){
  push();
  //eyes
  fill(255);
  ellipse(55,55,50,60);
  ellipse(0,55,50,60);
  fill(0);
  ellipse(3,40,30,30);
  ellipse(52,40,30,30);

  pop();
}

function snout(){
  push();
  //snout
  fill(0);
  square(12.5, 125, 25);
  pop();
}

function tongue(){
    push();
    //tongue
    fill('pink');
    square(25, 150, 15);
    fill('black');
    rect(31, 150, 3, 15);
    pop();
}